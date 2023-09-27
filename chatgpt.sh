#!/bin/bash

GLOBIGNORE="*"

CHAT_INIT_PROMPT="You are ChatGPT, a Large Language Model trained by OpenAI. You will be answering questions from users. You answer as concisely as possible for 
each response (e.g. don’t be verbose). If you are generating a list, do not have too many items. Keep the number of items short. Before each user prompt you will 
be given the chat history in Q&A form. Output your answer directly, with no labels in front. Do not start your answers with A or Anwser. You were trained on data 
up until 2021. Today's date is $(date +%m/%d/%Y)"

SYSTEM_PROMPT="You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible. Current date: $(date +%m/%d/%Y). Knowledge cutoff: 
9/1/2021."

COMMAND_GENERATION_PROMPT="You are a Command Line Interface expert and your task is to provide functioning shell commands. Return a CLI command and nothing else 
- do not send it in a code block, quotes, or anything else, just the pure text CONTAINING ONLY THE COMMAND. If possible, return a one-line bash command or chain 
many commands together. Return ONLY the command ready to run in the terminal. The command should do the following:"

CHATGPT_CYAN_LABEL="\033[36mchatgpt \033[0m"
PROCESSING_LABEL="\n\033[90mProcessing... \033[0m\033[0K\r"
OVERWRITE_PROCESSING_LINE="             \033[0K\r"

if [[ -z "$OPENAI_KEY" ]]; then
	echo "You need to set your OPENAI_KEY to use this script"
	echo "You can set it temporarily by running this on your terminal: export OPENAI_KEY=YOUR_KEY_HERE"
	exit 1
fi

usage() {
	cat <<EOF
A simple, lightweight shell script to use OpenAI's Language Models and DALL-E from the terminal without installing Python or Node.js. Open Source and written in 
100% Shell (Bash) 

https://github.com/0xacx/chatGPT-shell-cli/

By default the script uses the "gpt-3.5-turbo" model. It will upgrade to "gpt-4" when the API is accessible to anyone.

Commands:
  image: - To generate images, start a prompt with image: If you are using iTerm, you can view the image directly in the terminal. Otherwise the script will ask 
to open the image in your browser.
  history - To view your chat history
  models - To get a list of the models available at OpenAI API
  model: - To view all the information on a specific model, start a prompt with model: and the model id as it appears in the list of models. For example: 
"model:text-babbage:001" will get you all the fields for text-babbage:001 model
  command: - To get a command with the specified functionality and run it, just type "command:" and explain what you want to achieve. The script will always ask 
you if you want to execute the command. i.e. 
  "command: show me all files in this directory that have more than 150 lines of code" 
  *If a command modifies your file system or dowloads external files the script will show a warning before executing.

Options:
  -i, --init-prompt          Provide initial chat prompt to use in context

  --init-prompt-from-file    Provide initial prompt from file

  -p, --prompt               Provide prompt instead of starting chat

  --prompt-from-file         Provide prompt from file

  -b, --big-prompt           Allow multi-line prompts during chat mode

  -t, --temperature          Temperature

  --max-tokens               Max number of tokens

  -l, --list                 List available openAI models

  -m, --model                Model to use

  -s, --size                 Image size. (The sizes that are accepted by the
                             OpenAI API are 256x256, 512x512, 1024x1024)

  -c, --chat-context         For models that do not support chat context by
                             default (all models except gpt-3.5-turbo and
                             gpt-4), you can enable chat context, for the
                             model to remember your previous questions and
                             its previous answers. It also makes models
                             aware of todays date and what data it was trained
                             on.

EOF
}

# error handling function
# $1 should be the response body
handle_error() {
	if echo "$1" | jq -e '.error' >/dev/null; then
		echo -e "Your request to Open AI API failed: \033[0;31m$(echo "$1" | jq -r '.error.type')\033[0m"
		echo "$1" | jq -r '.error.message'
		exit 1
	fi
}

# request to openAI API models endpoint. Returns a list of models
# takes no input parameters
list_models() {
	models_response=$(curl https://api.openai.com/v1/models \
		-sS \
		-H "Authorization: Bearer $OPENAI_KEY")
	handle_error "$models_response"
	models_data=$(echo $models_response | jq -r -C '.data[] | {id, owned_by, created}')
	echo -e "$OVERWRITE_PROCESSING_LINE"
	echo -e "${CHATGPT_CYAN_LABEL}This is a list of models currently available at OpenAI API:\n ${models_data}"
}
# request to OpenAI API completions endpoint function
# $1 should be the request prompt
request_to_completions() {
	local prompt="$1"

	curl https://api.openai.com/v1/completions \
		-sS \
		-H 'Content-Type: application/json' \
		-H "Authorization: Bearer $OPENAI_KEY" \
		-d '{
  			"model": "'"$MODEL"'",
  			"prompt": "'"$prompt"'",
  			"max_tokens": '$MAX_TOKENS',
  			"temperature": '$TEMPERATURE'
			}'
}

# request to OpenAI API image generations endpoint function
# $1 should be the prompt
request_to_image() {
	local prompt="$1"
	image_response=$(curl https://api.openai.com/v1/images/generations \
		-sS \
		-H 'Content-Type: application/json' \
		-H "Authorization: Bearer $OPENAI_KEY" \
		-d '{
    		"prompt": "'"${prompt#*image:}"'",
    		"n": 1,
    		"size": "'"$SIZE"'"
			}')
}

# request to OpenAPI API chat completion endpoint function
# $1 should be the message(s) formatted with role and content
request_to_chat() {
	local message="$1"
	escaped_system_prompt=$(escape "$SYSTEM_PROMPT")
	
	curl https://api.openai.com/v1/chat/completions \
		-sS \
		-H 'Content-Type: application/json' \
		-H "Authorization: Bearer $OPENAI_KEY" \
		-d '{
            "model": "'"$MODEL"'",
            "messages": [
                {"role": "system", "content": "'"$escaped_system_prompt"'"},
                '"$message"'
                ],
            "max_tokens": '$MAX_TOKENS',
            "temperature": '$TEMPERATURE'
            }'
}

# build chat context before each request for /completions (all models except
# gpt turbo and gpt 4)
# $1 should be the escaped request prompt,
# it extends $chat_context
build_chat_context() {
	local escaped_request_prompt="$1"
	if [ -z "$chat_context" ]; then
		chat_context="$CHAT_INIT_PROMPT\nQ: $escaped_request_prompt"
	else
		chat_context="$chat_context\nQ: $escaped_request_prompt"
	fi
}

escape() {
	echo "$1" | jq -Rrs 'tojson[1:-1]'
}

# maintain chat context function for /completions (all models except
# gpt turbo and gpt 4)
# builds chat context from response,
# keeps chat context length under max token limit
# * $1 should be the escaped response data
# * it extends $chat_context
maintain_chat_context() {
	local escaped_response_data="$1"
	# add response to chat context as answer
	chat_context="$chat_context${chat_context:+\n}\nA: $escaped_response_data"
	# check prompt length, 1 word =~ 1.3 tokens
	# reserving 100 tokens for next user prompt
	while (($(echo "$chat_context" | wc -c) * 1, 3 > (MAX_TOKENS - 100))); do
		# remove first/oldest QnA from prompt
		chat_context=$(echo "$chat_context" | sed -n '/Q:/,$p' | tail -n +2)
		# add init prompt so it is always on top
		chat_context="$CHAT_INIT_PROMPT $chat_context"
	done
}

# build user chat message function for /chat/completions (gpt models)
# builds chat message before request,
# $1 should be the escaped request prompt,
# it extends $chat_message
build_user_chat_message() {
	local escaped_request_prompt="$1"
	if [ -z "$chat_message" ]; then
		chat_message="{\"role\": \"user\", \"content\": \"$escaped_request_prompt\"}"
	else
		chat_message="$chat_message, {\"role\": \"user\", \"content\": \"$escaped_request_prompt\"}"
	fi
}

# adds the assistant response to the message in (chatml) format
# for /chat/completions (gpt models)
# keeps messages length under max token limit
# * $1 should be the escaped response data
# * it extends and potentially shrinks $chat_message
add_assistant_response_to_chat_message() {
	local escaped_response_data="$1"
	# add response to chat context as answer
	chat_message="$chat_message, {\"role\": \"assistant\", \"content\": \"$escaped_response_data\"}"

	# transform to json array to parse with jq
	local chat_message_json="[ $chat_message ]"
	# check prompt length, 1 word =~ 1.3 tokens
	# reserving 100 tokens for next user prompt
	while (($(echo "$chat_message" | wc -c) * 1, 3 > (MAX_TOKENS - 100))); do
		# remove first/oldest QnA from prompt
		chat_message=$(echo "$chat_message_json" | jq -c '.[2:] | .[] | {role, content}')
	done
}

# parse command line arguments
while [[ "$#" -gt 0 ]]; do
	case $1 in
	-i | --init-prompt)
		CHAT_INIT_PROMPT="$2"
		SYSTEM_PROMPT="$2"
		CONTEXT=true
		shift
		shift
		;;
	--init-prompt-from-file)
		CHAT_INIT_PROMPT=$(cat "$2")
		SYSTEM_PROMPT=$(cat "$2")
		CONTEXT=true
		shift
		shift
		;;
	-p | --prompt)
		prompt="$2"
		shift
		shift
		;;
	--prompt-from-file)
		prompt=$(cat "$2")
		shift
		shift
		;;
	-t | --temperature)
		TEMPERATURE="$2"
		shift
		shift
		;;
	--max-tokens)
		MAX_TOKENS="$2"
		shift
		shift
		;;
	-l | --list)
		list_models
		exit 0
		;;
	-m | --model)
		MODEL="$2"
		shift
		shift
		;;
	-s | --size)
		SIZE="$2"
		shift
		shift
		;;
	--multi-line-prompt)
		MULTI_LINE_PROMPT=true
		shift
		;;
	-c | --chat-context)
		CONTEXT=true
		shift
		;;
	-h | --help)
		usage
		exit 0
		;;
	*)
		echo "Unknown parameter: $1"
		exit 1
		;;
	esac
done

# set defaults
TEMPERATURE=${TEMPERATURE:-0.7}
MAX_TOKENS=${MAX_TOKENS:-1024}
MODEL=${MODEL:-gpt-3.5-turbo}
SIZE=${SIZE:-512x512}
CONTEXT=${CONTEXT:-false}
MULTI_LINE_PROMPT=${MULTI_LINE_PROMPT:-false}

# create our temp file for multi-line input
if [ $MULTI_LINE_PROMPT = true ]; then
	USER_INPUT_TEMP_FILE=$(mktemp)
	trap 'rm -f ${USER_INPUT}' EXIT
fi

# create history file
if [ ! -f ~/.chatgpt_history ]; then
	touch ~/.chatgpt_history
	chmod 600 ~/.chatgpt_history
fi

running=true
# check input source and determine run mode

# prompt from argument, run on pipe mode (run once, no chat)
if [ -n "$prompt" ]; then
	pipe_mode_prompt=${prompt}
# if input file_descriptor is a terminal, run on chat mode
elif [ -t 0 ]; then
	echo -e "Welcome to chatgpt. You can quit with '\033[36mexit\033[0m' or '\033[36mq\033[0m'."
# prompt from pipe or redirected stdin, run on pipe mode
else
	pipe_mode_prompt+=$(cat -)
fi

while $running; do

	if [ -z "$pipe_mode_prompt" ]; then
		if [ $MULTI_LINE_PROMPT = true ]; then
			echo -e "\nEnter a prompt: (Press Enter then Ctrl-D to send)"
			cat >"${USER_INPUT_TEMP_FILE}"
			input_from_temp_file=$(cat "${USER_INPUT_TEMP_FILE}")
			prompt=$(escape "$input_from_temp_file")
		else
			echo -e "\nEnter a prompt:"
			read -e prompt
		fi
		if [[ ! $prompt =~ ^(exit|q)$ ]]; then
			echo -ne $PROCESSING_LABEL
		fi
	else
		# set vars for pipe mode
		prompt=${pipe_mode_prompt}
		running=false
		CHATGPT_CYAN_LABEL=""
	fi

	if [[ $prompt =~ ^(exit|q)$ ]]; then
		running=false
	elif [[ "$prompt" =~ ^image: ]]; then
		request_to_image "$prompt"
		handle_error "$image_response"
		image_url=$(echo "$image_response" | jq -r '.data[0].url')
		echo -e "$OVERWRITE_PROCESSING_LINE"
		echo -e "${CHATGPT_CYAN_LABEL}Your image was created. \n\nLink: ${image_url}\n"

		if [[ "$TERM_PROGRAM" == "iTerm.app" ]]; then
			curl -sS $image_url -o temp_image.png
			imgcat temp_image.png
			rm temp_image.png
		elif [[ "$TERM" == "xterm-kitty" ]]; then
			curl -sS $image_url -o temp_image.png
			kitty +kitten icat temp_image.png
			rm temp_image.png
		else
			echo "Would you like to open it? (Yes/No)"
			read -e answer
			if [ "$answer" == "Yes" ] || [ "$answer" == "yes" ] || [ "$answer" == "y" ] || [ "$answer" == "Y" ] || [ "$answer" == "ok" ]; then
				open "${image_url}"
			fi
		fi
	elif [[ "$prompt" == "history" ]]; then
		echo -e "\n$(cat ~/.chatgpt_history)"
	elif [[ "$prompt" == "models" ]]; then
		list_models
	elif [[ "$prompt" =~ ^model: ]]; then
		models_response=$(curl https://api.openai.com/v1/models \
			-sS \
			-H "Authorization: Bearer $OPENAI_KEY")
		handle_error "$models_response"
		model_data=$(echo $models_response | jq -r -C '.data[] | select(.id=="'"${prompt#*model:}"'")')
		echo -e "$OVERWRITE_PROCESSING_LINE"
		echo -e "${CHATGPT_CYAN_LABEL}Complete details for model: ${prompt#*model:}\n ${model_data}"
	elif [[ "$prompt" =~ ^command: ]]; then
		# escape quotation marks, new lines, backslashes...
		escaped_prompt=$(escape "$prompt")
		escaped_prompt=${escaped_prompt#command:}
		request_prompt=$COMMAND_GENERATION_PROMPT$escaped_prompt
		build_user_chat_message "$request_prompt"
		response=$(request_to_chat "$chat_message")
		handle_error "$response"
		response_data=$(echo $response | jq -r '.choices[].message.content')

		if [[ "$prompt" =~ ^command: ]]; then
			echo -e "$OVERWRITE_PROCESSING_LINE"
			echo -e "${CHATGPT_CYAN_LABEL} ${response_data}" | fold -s -w $COLUMNS
			dangerous_commands=("rm" ">" "mv" "mkfs" ":(){:|:&};" "dd" "chmod" "wget" "curl")

			for dangerous_command in "${dangerous_commands[@]}"; do
				if [[ "$response_data" == *"$dangerous_command"* ]]; then
					echo "Warning! This command can change your file system or download external scripts & data. Please do not execute code 
that you don't understand completely."
				fi
			done
			echo "Would you like to execute it? (Yes/No)"
			read run_answer
			if [ "$run_answer" == "Yes" ] || [ "$run_answer" == "yes" ] || [ "$run_answer" == "y" ] || [ "$run_answer" == "Y" ]; then
				echo -e "\nExecuting command: $response_data\n"
				eval $response_data
			fi
		fi
		add_assistant_response_to_chat_message "$(escape "$response_data")"

		timestamp=$(date +"%Y-%m-%d %H:%M")
		echo -e "$timestamp $prompt \n$response_data \n" >>~/.chatgpt_history

	elif [[ "$MODEL" =~ ^gpt- ]]; then
		# escape quotation marks, new lines, backslashes...
		request_prompt=$(escape "$prompt")

		build_user_chat_message "$request_prompt"
		response=$(request_to_chat "$chat_message")
		handle_error "$response"
		response_data=$(echo "$response" | jq -r '.choices[].message.content')

		echo -e "$OVERWRITE_PROCESSING_LINE"
		# if glow installed, print parsed markdown
		if command -v glow &>/dev/null; then
			echo -e "${CHATGPT_CYAN_LABEL}"
			echo "${response_data}" | glow -
		else
			echo -e "${CHATGPT_CYAN_LABEL}${response_data}" | fold -s -w "$COLUMNS"
		fi
		add_assistant_response_to_chat_message "$(escape "$response_data")"

		timestamp=$(date +"%Y-%m-%d %H:%M")
		echo -e "$timestamp $prompt \n$response_data \n" >>~/.chatgpt_history
	else
		# escape quotation marks, new lines, backslashes...
		request_prompt=$(escape "$prompt")

		if [ "$CONTEXT" = true ]; then
			build_chat_context "$request_prompt"
		fi

		response=$(request_to_completions "$request_prompt")
		handle_error "$response"
		response_data=$(echo "$response" | jq -r '.choices[].text')

		echo -e "$OVERWRITE_PROCESSING_LINE"
		# if glow installed, print parsed markdown
		if command -v glow &>/dev/null; then
			echo -e "${CHATGPT_CYAN_LABEL}"
			echo "${response_data}" | glow -
		else
			# else remove empty lines and print
			formatted_text=$(echo "${response_data}" | sed '1,2d; s/^A://g')
			echo -e "${CHATGPT_CYAN_LABEL}${formatted_text}" | fold -s -w $COLUMNS
		fi

		if [ "$CONTEXT" = true ]; then
			maintain_chat_context "$(escape "$response_data")"
		fi

		timestamp=$(date +"%Y-%m-%d %H:%M")
		echo -e "$timestamp $prompt \n$response_data \n" >>~/.chatgpt_history
	fi
done

import OpenAI from 'openai';
import { getAllIcons } from './helpers.mjs';
import { writeFileSync } from 'fs';

import dotenv from 'dotenv';
dotenv.config();

const client = new OpenAI();

const allIcons = getAllIcons();

let withoutTags = [];
for (const icon of allIcons.outline) {
  if (icon.tags.length == 0 && withoutTags.length < 30) {
    withoutTags.push(icon.name);
  }
}

async function main() {
  const completion = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [{
      role: 'user',
      content: `generate few tags for icon which represent for each icon: ${withoutTags.join(', ')}. Tags should be one world, lowercase and separated by comma. Generate minimum 10 tags for each icon. Write as json. Use original key. Tag should be different than original key. Tags should be array of strings.`
    }],
    response_format: {
      type: 'json_object',
    }
  });

  console.log(completion.choices[0].message.content);

  writeFileSync('./new/tags.json', completion.choices[0].message.content);
}


if (withoutTags.length > 0) {
  main();
}

#!/bin/bash

rm ./new/Artboard.svg

for file in ./new/*.svg
do
  echo "${file}"
  sed -i "" 's/---//g' ${file}
  sed -i "" 's/fill="none"//g' ${file}
  sed -i "" 's/fill-rule="evenodd"//g' ${file}
  sed -i "" 's/stroke-linecap="round"//g' ${file}
  sed -i "" 's/stroke-linejoin="round"//g' ${file}
  sed -i "" 's/viewBox="0 0 24 24"//g' ${file}
  sed -i "" 's/stroke="#000000"//g' ${file}
  sed -i "" 's/stroke="#000"//g' ${file}
  sed -i "" 's/stroke-width="2"//g' ${file}
  sed -i "" 's/width="24"//g' ${file}
  sed -i "" 's/width="24px"//g' ${file}
  sed -i "" 's/height="24"//g' ${file}
  sed -i "" 's/height="24px"//g' ${file}
  sed -i "" 's/xmlns="http:\/\/www.w3.org\/2000\/svg"//g' ${file}
  sed -i "" 's/<path d="M0 0h24v24H0z"\/>"//g' ${file}
  sed -i "" 's/<path stroke="red" stroke-width=".1" d="M5 1l18 18"\/>//g' ${file}
  sed -i "" 's/<path stroke="red" stroke-width=".1" d="M3 3l18 18"\/>//g' ${file}
done

svgo -f ./new/ --pretty --disable mergePaths

for file in ./new/*.svg
do
  echo "${file}"
  sed -i "" -e $'s/<svg>/---\\\n---\\\n<svg>/g' ${file}
done

cp ./new/* ./src/_icons/
gulp optimize


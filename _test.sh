#!/bin/bash
for i in {1..58}
do
  rsvg-convert -x 4 -y 4 .github/tabler-icons-1.$i.0.svg > .github/tabler-icons-1.$i.0@2x.png
done

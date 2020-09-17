#!/bin/sh
if [ $# -eq 0 ]
  then
    echo "Usage: ./convert.sh video.mp4"
    exit 1
fi
mkdir img
rm output.json
ffmpeg -i $1 -vf fps=30 img/%d.jpeg
npm start
rm -R img
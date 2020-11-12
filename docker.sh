#!/bin/sh
mkdir img
ffmpeg -i /app/io/$VIDEO -vf fps=30 img/%d.jpeg
npm start
cp /app/index.html /app/io/index.html
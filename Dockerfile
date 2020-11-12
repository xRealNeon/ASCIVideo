FROM node:12

WORKDIR /app

RUN apt update && apt install -y ffmpeg jp2a

COPY package*.json ./

RUN npm i

COPY . .

ENV VIDEO=video.mp4

CMD ["bash", "docker.sh"]
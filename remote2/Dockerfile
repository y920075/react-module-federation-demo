FROM node:22-slim
ARG REMOTE2_PORT
ENV PORT=$REMOTE2_PORT
RUN echo "REMOTE2_PORT is $PORT"
WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install -g pnpm && pnpm install

COPY . /app

RUN pnpm build

CMD ["pnpm", "run", "serve"]
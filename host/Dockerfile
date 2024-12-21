FROM node:22-slim
ARG HOST_PORT
ARG REMOTE_PORT
ENV PORT=$HOST_PORT
ENV REMOTE_PORT=$REMOTE_PORT
RUN echo "HOST_PORT is $PORT"
RUN echo "REMOTE_PORT is $REMOTE_PORT"

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install -g pnpm && pnpm install

COPY . /app

RUN pnpm build

CMD ["pnpm", "run", "serve"]
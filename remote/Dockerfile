FROM node:22-slim
ARG REMOTE_PORT
ARG REMOTE2_PORT
ENV PORT=$REMOTE_PORT
ENV REMOTE2_PORT=$REMOTE2_PORT
RUN echo "PORT is $PORT"
RUN echo "REMOTE2_PORT is $REMOTE2_PORT"
WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install -g pnpm && pnpm install

COPY . /app

RUN pnpm build

CMD ["pnpm", "run", "serve"]
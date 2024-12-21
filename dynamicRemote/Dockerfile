FROM node:22-slim
ARG DY_REMOTE_PORT
ENV PORT=$DY_REMOTE_PORT

RUN echo "DY_REMOTE_PORT is $PORT"
WORKDIR /app

COPY ./package.json /app/package.json
RUN npm install -g pnpm && pnpm install

COPY . /app

RUN pnpm build

CMD ["pnpm", "run", "serve"]
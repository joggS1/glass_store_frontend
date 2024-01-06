FROM node:20.10.0 as dependencies
WORKDIR /glass_store
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:20.10.0 as builder
WORKDIR /glass_store
COPY . .
COPY --from=dependencies /glass_store/node_modules ./node_modules
RUN yarn build

FROM node:20.10.0 as runner
WORKDIR /glass_store
ENV NODE_ENV production

COPY --from=builder /glass_store/public ./public
COPY --from=builder /glass_store/package.json ./package.json
COPY --from=builder /glass_store/.next ./.next
COPY --from=builder /glass_store/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]
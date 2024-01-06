# Getting Started

```bash
yarn init-project
```

# Run dev mode

```bash
yarn dev
```

# Run production mode

```bash
yarn build
#after
yarn start
```
#### With docker
```bash
#1
cd ../
#2
mkdir docker-compose
#3
cd ./docker-compose
#4
touch docker-compose.dev
```
Paste this into -> docker-compose.dev
```bash
version: "3.9"

x-logging: &log-tmpl
  logging:
    driver: json-file
    options:
      "max-size": "10m"

# main part
services:
  glasses_frontend:
    container_name: glasses_frontend
    build:
      context: ../glass_store_frontend
      target: runner # <- this will be needed in production
      # dockerfile: Dockerfile.dev #later remove
    volumes:
      - ./:/glasses_frontend
      - /glasses_frontend/node_modules
      - /glasses_frontend/.next
    image: glasses_frontend
    working_dir: /glass_store
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production #later change to production
      CHOKIDAR_USEPOLLING: true #for webpack hot module replacement 
    restart: always
    <<: *log-tmpl
```
Run 
```bash
sudo docker compose -p glasses -f ./docker-compose.dev.yml up -d --build
```

# Node dev compose with postgresql

Compose configs:

```yml
version: "3.8"
services:
  nodejs-simple:
    container_name: sipmle-app
    image: node:16.14-alpine3.14
    # Your code: /opt/node-app
    volumes:
      - ./:/opt/node-app
    ports:
      - 3000:3000
    environment:
      - PORT=3000
      - DB_NAME=postgres
      - DB_PASS=devPass123Randomsdşlfkgkdkjlhsdjhfg
    links:
      - postgresql:postgres
    working_dir: /opt/node-app
    tty: true
  postgresql:
    container_name: simple-app-postgres
    image: postgres
    volumes:
      - pgsql-volume:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=devPass123Randomsdşlfkgkdkjlhsdjhfg
    ports:
      - 5432:5432
volumes:
  pgsql-volume:
```

- NodeJS [node:16.14-alpine3.14](https://github.com/nodejs/docker-node/blob/50c2806d4af0b991ed853072741a30e5d0cb777a/16/alpine3.14/Dockerfile)
- postgresql on latest.

## Using

Download and run `docker-composer up`, after enter bash `docker exec -it CONTEINERID /bin/sh`. This code for alpine linux based node images.

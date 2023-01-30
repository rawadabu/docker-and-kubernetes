# Images & Containers

A Container is the running "unit of software".

Images is the templates/blueprints for containers, it contains code + required tools/runtimes.

## Using Pre-Built & Custom Images

```bash
docker run node
```

Using node image which defined on docker hub!

```bash
docker run -it node
```

Runs node inside the container host to us, and it's exposed to us by adding this extra flag.(node will not run on our system!)

## Creating & Managing Containers

`CMD` To run the project when the **CONTAINER** created and not the **IMAGE**.

`EXPOSE` To let Docker know that when this container is started, we wanna expose a certain port to our local system.

## Set instructions for Docker image

```
FROM node
WORKDIR workfiledir
COPY . /app
RUN command
EXPOSE port:port
CMD ["run"]
```

After that, we build the Image with `docker build [folder]`, `docker ps` to show what containers are running, `docker ps -a` to see al the past containers you had in the past, please use `docker ps --help` for further informations.

To run, `docker run -p [my-local-port]:[container-port] [image]`, -p stands for **PUBLISH**.

For further info on commands, please use `docker --help`.

To listen to outputs, we can use `docker logs -f`.

## Start in attached mode

`docker start -a [image-name]`

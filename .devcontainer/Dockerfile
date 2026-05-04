FROM mcr.microsoft.com/devcontainers/javascript-node:24

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    git \
    curl \
    && apt-get clean
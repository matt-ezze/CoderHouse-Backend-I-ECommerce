FROM node:22.20.0-slim AS base

WORKDIR /app

FROM base AS dev

RUN apt-get update && apt-get install -y \
    git \
    curl \
    vim \
    fish \
    && rm -rf /var/lib/apt/lists/*

RUN chsh -s /usr/bin/fish node && \
    git config --global core.editor "vim"
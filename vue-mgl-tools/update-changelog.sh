#!/usr/bin/env sh

set -x
set -e

if [ -f ./CHANGELOG.en-US.md ]; then
  rm ./CHANGELOG.en-US.md
fi
if [ -f ./CHANGELOG.zh-CN.md ]; then
  rm ./CHANGELOG.zh-CN.md
fi

wget https://cdn.jsdelivr.net/npm/vue-mgl@latest/CHANGELOG.md -O CHANGELOG.en-US.md
wget https://cdn.jsdelivr.net/npm/vue-mgl@latest/CHANGELOG.md -O CHANGELOG.zh-CN.md
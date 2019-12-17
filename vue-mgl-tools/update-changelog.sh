#!/usr/bin/env sh

set -x
set -e

rm ./CHANGELOG.en-US.md
rm ./CHANGELOG.zh-CN.md

wget https://cdn.jsdelivr.net/npm/vue-mgl@latest/CHANGELOG.md -O CHANGELOG.en-US.md
wget https://cdn.jsdelivr.net/npm/vue-mgl@latest/CHANGELOG.md -O CHANGELOG.zh-CN.md
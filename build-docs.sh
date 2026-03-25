#!/bin/bash

# 1. Caminho para os MDs do dev
SOURCE_DOCS="./docs"
# 2. Caminho para o motor (na pipeline isto seria o container/zip)
ENGINE_PATH="./motor-temp"

echo "🚀 Iniciando geração automática..."

# Limpa os docs de exemplo do Starlight e injeta os teus
rm -rf $ENGINE_PATH/src/content/docs/*
cp -R $SOURCE_DOCS/* $ENGINE_PATH/src/content/docs/

# Build
cd $ENGINE_PATH
npm run build

echo "✅ Site gerado em $ENGINE_PATH/dist"
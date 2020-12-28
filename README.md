# googleplaces-client

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Atomic Design rules

- 1 Átomos

  - Eles são os menores componentes indivisíveis.
  - Pense genérico. Eles não têm lógica para reutilização.
  - eles podem ter variações.
  - Eles têm 1 nível de pasta

- 2 Moléculas

  - Eles são uma combinação de átomos e moléculas.
  - Pense genérico. Eles também não têm lógica.
  - Eles têm variações.
  - Eles têm slots
  - Eles têm 1 nível de pasta

- 3 Organismos

  - Eles são uma combinação de átomos e moléculas e organismos.
  - Específico. Eles começam a ter lógica e, por lógica, quero dizer lógica relacionada ao aplicativo.
  - Eles podem extrair dados via REST/GraphQL.
  - Eles têm variações.
  - Eles têm slots.
  - Eles têm 1 nível de pasta.

- 4 Modelos

  - Eles são a combinação final de átomos, moléculas e organismos bem organizados para apresentar o layout final de uma página, mas sem os dados.
  - Eles não têm dados.
  - Eles têm lógica.
  - Eles têm 2 níveis de pasta. (o nível extra ajuda a segmentar componentes com base na lógica do aplicativo)

- 5 Páginas

  - Eles definem a lista de páginas que nosso aplicativo terá.
  - Eles têm dados das requests REST/GraphQL.
  - Eles têm pouca ou nenhuma lógica.
  - Eles têm 2 níveis de pasta.

- A Quarks
  - Eles não existem sozinhos como os atomos
  - Devem ser especificos
  - Eles mostram o estado atual de algum comportamento/elemento
  - Caso necessite de uma ação deve ser tão minima quanto um átomo

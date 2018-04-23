# Marvel API + VueJs

> A front-end test with Marvel API + VueJs + Vuex

> I'm using closures in the helpers so that all system is not only coupled in the framework in use. Well, the entire system and its structure can easily be developed in any other framework that contains state system.

Github Pages: [See a demo](https://wellitongervickas.github.io/marvel-api-vuejs)

## Layout (files of layout-psd folder)
> Copyright of Inlog Group

## System

- Node 8.11.0
- Npm 5.6.0
- Vue 2.9.3 (with vue-cli)
- Airbnb (Javascript style guide)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Project Structure

```
index.html
│
│─── local-api (Mocks)
│   │
│   └─── menu
│   │
│   └─── slideshow
│
│─── images
│   │
│   └─── icons
│   │
│   └─── layout
│   │
│   └─── slideshow
│
│─── src
│   │
│   └─── assets
│   │    │
│   │    └─── styles
│   │         │
│   │         └─── base
│   │         │
│   │         └─── components
│   │         │
│   │         └─── layout
│   │         │
│   │         └─── pages
│   │
│   └─── components
│   │    │
│   │    └─── ads
│   │    │
│   │    └─── alerts
│   │    │    │
│   │    │    └─── content
│   │    │    │
│   │    │    └─── float
│   │    │
│   │    └─── cart
│   │    │
│   │    └─── checkout-details
│   │    │
│   │    └─── forms
│   │    │
│   │    └─── loading
│   │    │
│   │    └─── loading-content
│   │    │
│   │    └─── menu
│   │    │
│   │    └─── product-details
│   │    │
│   │    └─── product-details-related
│   │    │
│   │    └─── products-browse
│   │    │
│   │    └─── products-filter
│   │    │
│   │    └─── rating
│   │    │
│   │    └─── slideshow
│   │
│   └─── models
│   │    │
│   │    └─── class
│   │    │
│   │    └─── helpers
│   │    │
│   │    └─── utils
│   │    │
│   │    └─── languages
│   │
│   └─── stores (vuex)
│   │    │
│   │    └─── Modules
│   │       │
│   │       └─── alerts-float
│   │       │
│   │       └─── cart
│   │       │
│   │       └─── products-filter
│   │
│   └─── vendors
│   │
│   └─── views
│       │
│       └─── checkout
│       │
│       └─── content
│       │
│       └─── home
│       │
│       └─── product
│
└───────────────────────────────

```


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

> This project will be archived soon...

# Zukan

An attempt at a clean UI for information about Pokémon.

### Introduction

When I started playing the Japanese version of _Pokémon Crystal_ to practice my Japanese a bit more, I quickly felt the need for a central place with a clear, multilingual user interface for looking up all kinds of information about the different Pokémon, items and everything else.  
Inspired by a [blog post](https://lichess.org/@/thibault/blog/we-dont-want-all-the-features/q3nOzv4n) I read some time ago, I started _Zukan_ as a small side project with the intention of keeping it minimalistic, yet functional.

### State of the project

Currently, the project is still in active development and is not very useful yet. Features are added gradually and without clear prioritization.  
While the user interface is primarily designed in English, all search functions also support German and Japanese. Gen II games, _Pokémon Gold, Silver & Crystal_, are the only games taken into account right now.

### Technical documentation

> Recommended and tested versions are: Node.js v22.3.0 & npm v10.8.0

I'm the only developer at the moment, although Pull Requests are always welcome! If you want to contribute a feature, please think carefully about the benefit to the user and integrate it cleanly into the existing UI and [code style](.prettierrc.json).  
It is recommended to run the development server using the provided `npm run dev` script, while formatting the code is achieved by `npm run format` and building for production is done by running `npm run build`.

_Zukan_ is fundamentally designed with the idea to run out of the box without relying on external services, e.g. APIs, during runtime. The latest stable version can always be seen on [my own instance](https://zukan.jannes.dev).

**Special thanks to [PokeApi.co](https://pokeapi.co/) and [duiker101](https://github.com/duiker101/pokemon-type-svg-icons) for providing great resources.**


Language : English | [简体中文](./README-zh-CN.md)

<h1 align="center">Koa Plus</h1>

<div align="center">

The best scaffolding of building `Koa2` restful API with `TypeScript`.

![license](https://img.shields.io/npm/l/express.svg)

</div>

- Preview: http://localhost:3000/doc.html

- Getting Started: [![Edit koa2-plus](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/koa2-plus-kn0lic) [![Join the chat at https://gitter.im/zeffon/koa2-plus](https://badges.gitter.im/zeffon/koa2-plus.svg)](https://gitter.im/zeffon/koa2-plus?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Features

- :bulb: **TypeScript**: support TypeScript
- :anchor: **Commitlint**：git commitlint
- :art: **Prettier**：prettier lint code
- :rocket: **Exception**：Global exception handling
- :airplane: **Validator**：Practical and efficient data validation usage
- :zap: **MySQL**：Support for MySQL database connections
- :fire: **Redis**：Support for Redis database connections
- :1234: **Log**：Log SQL and error logs
- :white_check_mark: **Unit Test**：Support unit test
- :memo: **API Doc**：API Doc UI

## Usage

> If you are not using the `pnpm` tool, using `npm` and `yarn` are the same to achieve the same performance.

1. install dependencies

   ```
   $ pnpm install
   ```

2. start app

   ```
   $ pnpm start
   or
   $ pnpm prod
   ```

3. lint code

   ```
   $ pnpm lint
   ```

4. run test
   ```
   $ pnpm test
   ```

## Project Layout

```
├── .husky                  // hooks - here start pre-commit and commitlint
├── coverage                // test output
├── build                    // build output
├── logs                    // log output
│   ├── error               // error log
│   └── info                // info log
├── src
│   ├── app.ts              // koa start
│   ├── app                 // app modules
│   ├── config              // env config
│   ├── typings             // ts type
│   └── core                // core mudules
│       ├── init.ts         // core start
│       ├── global.ts       // global var
│       ├── tool.ts         // tool
│       ├── exception       // global exception
│       ├── log             // log modules
│       ├── mysql           // mysql modules
│       ├── redis           // redis modules
│       ├── swagger         // api docs
│       └── validator       // data validator
├── test                    // jest test.ts
├── .cz-config.js           // commitlint tip
├── .editorconfig           // lint config
├── .gitignore
├── .prettierignore
├── .prettierrc             // prettier style config
├── commitlint.config.ts    // commit-lint config
├── jest.config.js          // jest test config
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Zeffon Wu

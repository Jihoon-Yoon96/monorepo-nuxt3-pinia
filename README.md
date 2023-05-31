# Nuxt3 MonoRepo 테스트
READ MORE ABOUT THE ARTICLE FROM THIS LINK:
[Vue School Article](https://vueschool.io/articles/vuejs-tutorials/scalable-nuxt-3-monorepos-with-pnpm-workspaces/)

개발환경
```shell
node  : v18.16.0
npm   : v9.5.1
pnpm  : v8.5.1
yarn  : v1.22.19
nuxt  : v3.5.2
pinia : v2.1.3 
```

packages 설치 명령어:
```shell
pnpm i
```

dev mode 명령어:
```shell
pnpm run -r dev
```

build 명령어:
```shell
pnpm run -r build
```

개별 프로젝트 실행 명령어:
```shell
pnpm --filter cms run dev
pnpm --filter brian run dev
```
#### cms프로젝트 : port = 3010 
#### brian 프로젝트 : port = 3020



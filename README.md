# Nuxt3 MonoRepo 테스트
READ MORE ABOUT THE ARTICLE FROM THIS LINK:
[Vue School Article](https://vueschool.io/articles/vuejs-tutorials/scalable-nuxt-3-monorepos-with-pnpm-workspaces/)


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
pnpm --filter website1 run cms
pnpm --filter website2 run brian
```
#### cms프로젝트 : port = 3010 
#### brian 프로젝트 : port = 3020



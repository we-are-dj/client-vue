# we-are-dj-vue

```
추가 되는 부분은 계속 업데이트 예정
개발 관련 및 style 관련
- scss 를 활용해서 작업중에 있음.
    공통으로 가져갈 것은 Global.scss에 담아갈 예정
    그 외 공통으로 가져가긴하나, css가 길어질 경우 컴포넌트 혹은 레이아웃 마다 css 를 나눌 예정
    그 외에 단일컴포넌트 및 레이아웃에서 사용하는 css의 경우
    <style scoped lang="scss"></style> 상태로 작업할 예정
```

## 상황

```
* 1.store 모듈화
    * state
    * actions
    * mutations
    * getters
* 2. router 모듈화
    * routes
* 3. style 모듈화
    * Global.scss
```

## 작업해야되는 목록

```
1. 레이아웃 짜기
    - 현재 진행 중(Main)
2. 컴포넌트 구현
    - 현재 진행 중(Main and RoomCard)
        - Search 관련 수정예정(input, button)
3. 로직 구현
4. server 연동
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

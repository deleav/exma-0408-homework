# exma-0408-homework
Vue.js cli env project

## Start
```bash
npm bash
# or yarn install
npm run dev
```

## 建議閱讀程式方式
1. 從 `src/router/index.js` 找到 `Profile` component
2. 找到 `src/components/Profile.vue` 搭配 `src/store/index.js` 服用
3. [注意] 若子組建要使用 __Vue Router__ 須在 `src/main.js` 的 Vue instance 注入 `router`(import from router)
  * 為了讓 __Vue__ 能夠觀察 __Vue Router__ 的變動需調用 `Vue.use(Router)`
4. [注意] 若子組建要使用 __Vuex__ 須在 `src/main.js` 的 Vue instance 注入 `store`(import from Vuex)
  * 為了讓 __Vue__ 能夠觀察 __Vuex__ 的變動需調用 `Vue.use(Vuex)`

__以上原理請自行查閱 [Vue Docs](https://vuejs.org/)__

# Create a todo list
## 需要做到
* 新增 todo item
* 刪除 todo item
* toggle completed or active
* Filter
  * All
  * Active
  * Completed

## bonus
* 修改 todo item
* 多行的 todo item
* tag for each todo item
* filter for tag
* 自由發揮

# Ref.
## Directive
* v-bind
* v-if
* v-show
* v-for
* v-on
* v-model

## Instance Options
* el
* data
* methods
* computed
* template

## Component Options
* data (Type: function)
* methods
* computed
* template
* props

## Vue dev tool( chrome extension )
* https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

## VSCode 推薦套件
* [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
* [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
* [VueHelper](https://marketplace.visualstudio.com/items?itemName=oysun.vuehelper)
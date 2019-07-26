import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(Router)

var routes = [
  {
		path: '/Login',
		name: 'Login',
		component: () => import('@/components/Login.vue'),
		hidden: true,
	},
	{
    path: '/',
    name: 'Root',
    redirect: { name: 'Home' },
    component: () => import('@/components/Layout/index.vue'),
    children:[
      {
        path: '/Home',
        name: 'Home',
        component: () => import('@/components/Home.vue'),
      }, /*{
        path: 'CheckPassword',
        name: 'CheckPassword',
        component: () => import('@/components/CheckPassword.vue'),
      }, {
        path: 'JsonLoad',
        name: 'JsonLoad',
        component: () => import('@/components/JsonLoad.vue'),
      }, {
        path: 'ToDoList',
        name: 'ToDoList',
        component: () => import('@/components/ToDoList.vue'),
      }, {
        path: 'prd',
        name: 'ToDoList',
        component: () => import('@/components/Prd.vue'),
      }, {
        path: 'Other1',
        name: 'Other1',
        component: () => import('@/components/Other1.vue'),
      },, {
        path: 'Other2',
        name: 'Other2',
        component: () => import('@/components/Other2.vue'),
      }, */
    ]
  },
]
menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes[1].children.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
    })
  })
})

export default new Router({ mode: 'history', routes })

/*
hash 模式 ( 預設 )
特色為 # 字號分隔路由，原因在於井字號後方不會被 URL 解析，所以可以拿來操作。若省略井字號分隔，路徑會自動解析去找資料夾。
想像一個路由如果為 “ /About/Us ” ，打包後的 distribution 版本若是直接輸入網址，直接解析路徑會是去 About 資料夾找 Us 檔案，我們不是要讓這樣的事情發生，所以透過井字號的做法來模擬路由。

history 模式
如果省略井字號，就是 history 模式。該模式乾淨整潔，但是代價為後端伺服器必須設置 URL Rewrite 重新將路徑指向 index.html ( SPA只在此頁 )。若後端配合好，則 history 模式當然會比較好看，後端無法配合則需採用 hash 模式。
注意：設定為 history 模式，在開發測試環境會自動幫你做到 URL Rewrite，實際上線版本還是要再做設定的不要忘記

abstract 模式
支持所有 JavaScript 環境，如 node.js。當發現沒有瀏覽器 API 時，會強制切換至此模式。

注意事項

注意分辨根目錄
/符號表示根目錄
設置巢狀路由時要記得使用與否

路徑有多重匹配符合
會套用到第一個符合的結果
*/
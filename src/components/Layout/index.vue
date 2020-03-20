<template>
  <div>
    <el-container>
      <el-header  class="header">
         <vheader />
      </el-header>
      <el-container  :style="height">
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
          <!-- Router 來來去去-->
          <el-row style="margin-top:10px;">
            <el-button @click="goback">回上頁</el-button>
            <el-button @click="goHome">回到根目錄</el-button>
          </el-row>
          <!-- Router 來來去去-->
        </el-main>
      </el-container>
      <el-footer>Practice only © 2019 Mitena / VueJs + Element UI + Vue-Router + Vuex 練習</el-footer>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/Layout/NavMenu';
import Header from '@/components/Layout/Header'
export default {
  name: 'app',
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  },
  data() {
    return {
      routerTo: '',
      routerFrom: '',
      height: {
        height: window.innerHeight - 120 + 'px'
      }
    }
    
  },
  // 查看router變化
  watch: {
    '$route' (to, from) {
      this.routerTo = to;
      this.routerFrom = from;
    }
  },
  methods: {
    // 直接調用方法即可 
    goback(){
      // 上一頁
      this.$router.back()
     // 或是 this.$router.go(-1)
    },
    goHome(){
      this.$router.push('/')
      // 透過此方法，可以直接跳轉到根目錄
    },
    goReplace(){
     this.$router.replace('/')
      // 透過此方法，可以直接跳轉到根目錄
    },
  }
}
/*
router.push( location )跳轉至指定頁面。
使用方式：
// 情境： 登入成功後跳轉頁面
// 來到一個登入頁面組件Login.vue
// template中的登入按鈕
<button @click="login">login</button>
// script
export default {
  methods: {
    login(){
      this.$http.post(api, this.user)
        .then( ({data}) => {
          // 以上都不是重點，重點在此
          this.$router.push('/')
          // 透過此方法，可以直接跳轉到根目錄
        })
    }
  }
}

或是replace
Router.replace( location )
與 router.push 行為很類似，差別在於其為替換當前組件，因此跳轉行為 ” 不會被記錄 ”，上一頁下一頁會忽略。使用方式：
export default {
  methods: {
    method(){
      // 看似跳轉頁面，但其實此操作不會被記錄
      // 若此時切換至index之類的操作
      // 再按上一頁並不會回到about組件
      this.$router.replace('/about')
    }
  }
}
*/
</script>

<style>
.header {
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
}
.el-footer {
    background-color:gainsboro;
    color: #333;
    line-height: 60px;
  }
.el-aside {
  background-color: #545c64;
    color: #333;
    line-height: 200px;
  }
  .el-main {
    color: #333;
  }
</style>

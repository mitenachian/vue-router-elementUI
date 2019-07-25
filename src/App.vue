<template>
  <div id="app">
    <el-container>
      <el-header  class="header">
         <vheader />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
          <!-- Router 來來去去-->
          <el-row>
            <pre>routerFrom =>{{ routerFrom.path }}</pre>
          </el-row>
          <el-row>
            <pre>routerTo =>{{ routerTo.path }}</pre>
          </el-row>
          <el-row>
            <el-button @click="goback">回上頁</el-button>
            <el-button @click="goHome">回到根目錄</el-button>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu';
import Header from '@/components/Header'
export default {
  name: 'app',
  data() {
    return {
      routerTo: '',
      routerFrom: '',
    }
  },
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  },
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
*/
</script>

<style>
.header {
  background-color: rgb(84, 92, 100);
  color: #fff;
  line-height: 60px;
}
</style>

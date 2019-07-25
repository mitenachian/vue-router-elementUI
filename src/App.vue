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
          <el-row>
            <h3> router From Path</h3>
            <pre>{{ routerFrom.path }}</pre>
          </el-row>
          <el-row>
            <h3> router To Path</h3>
            <pre>{{ routerTo.path }}</pre>
          </el-row>
          <el-row>
            <el-button @click="goback">Go Back</el-button>
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
    },
  }
}

</script>

<style>
.header {
  background-color: rgb(84, 92, 100);
  color: #fff;
  line-height: 60px;
}
</style>

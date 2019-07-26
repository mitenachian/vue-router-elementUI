<template>
  <el-row>
    <el-col :span="24">
        <div class="head-wrap">
            <icon name="brands/vuejs" title="Vue.js"></icon>
            Vue + Element UI + Vue-Router 練習
            <div class="right-menu">
            <el-dropdown class="avatar-container right-menu-item" trigger="click">
              <div class="avatar-wrapper">
                <!-- <el-button class="user" size="mini"> -->
                UserName
                <i class="el-icon-caret-bottom"></i>
                <!-- </el-button> -->
              </div>
              <el-dropdown-menu slot="dropdown">
                <router-link to="/">
                  <el-dropdown-item>設定</el-dropdown-item>
                </router-link>
                <el-dropdown-item divided>
                  <span @click="singOut()">登出</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </div>
        </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  methods: {
    singOut(){  
      this.$router.replace('/Login')
    }
  },
}
</script>
<style scoped>
	.right-menu {
		float: right;
		height: 100%;

  }
	.right-menu-item {
			display: inline-block;
			margin: 0 8px;
      color:aliceblue;
		}
</style>
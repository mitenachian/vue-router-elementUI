<template>
	<div>
      <el-menu
      router
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
            <template slot="title">
                <span style="margin-right:5px;">
                    <icon :name="item.icon"></icon>
                </span>
                <span v-text="item.name"></span>
                
            </template>
            <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
                <el-menu-item :index="sub.componentName">
                  <icon :name="sub.icon"></icon>
                  {{ sub.name }}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>

      </el-menu>	
  </div>
</template>

<script>
  import menu from '@/config/menu-config'
  export default {
    data () {
      return {
        menu: menu
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath)
      }
    }
  }
</script>
<style scoped>
  .over-hide{
    overflow: hidden;  
  }
  .el-menu{
    border:0;
  }
  
</style>
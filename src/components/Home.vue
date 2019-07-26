<template>
  <div>
    <el-alert type="success"  show-icon>
      HELLO!! 登入USER:{{ name }} ! (store中的state)
    </el-alert>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: '',
    }
  },
  mounted(){
    this.name = this.$store.state.user.LoginUserName
    console.log("name=>"+  this.name);
  }
}
</script>

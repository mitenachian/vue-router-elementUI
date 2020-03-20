<template>
  <div>
    <el-alert type="success"  show-icon>
      HELLO!! 登入中 {{ name }}
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
    this.name = this.$store.state.user.LoginUserName;
  }
}
</script>

<template>
  <div>
    <el-row>
      <el-col :span="6">
        <h3>密碼強度檢查</h3>
        <el-form label-width="50px" >
          <el-form-item label="密碼">
            <el-input type="password" v-model="password"></el-input>
            <span> {{ strength }} </span>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return{
      password:'',
    }
  },
  computed: {
    strength(){
      let score = this.password.length;
      if(/[A-Z]/.test(this.password)) score *= 1.25;
      if(/[a-z]/.test(this.password)) score *= 1.25;
      if(/[0-9]/.test(this.password)) score *= 1.25;
      if(/[^A-Za-z0-9]/.test(this.password)) score *= 1.25;

      if(score > 40) return 'Perfect!';
      if(score > 20) return 'Great!';
      if(score > 10) return 'Good!';
      return 'Weak!';
    },
  },
}
</script>

<template>
  <div id="loginApp" class="login">
    <el-card>
      <h2>Login</h2>
      <el-form
        class="login-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.native.prevent="login"
      >
        <el-form-item prop="username">
          <el-input
            v-model="model.username"
            placeholder="Username:User-Ana"
            prefix-icon="el-icon-user"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="model.password"
            placeholder="Password:User-Ana"
            type="password"
            prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
            >Login</el-button
          >
        </el-form-item>
        <a class="forgot-password" href="#"
          >Forgot password ?</a
        >
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "loginApp",
  data() {
    return {
      validCredentials: {
        username: "Mitena-Demo",
        password: "Mitena-Demo"
      },
      model: {
        username: "Mitena-Demo",
        password: "Mitena-Demo"
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur"
          },
          {
            min: 4,
            message: "Username length should be at least 5 characters",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted(){
   this.$store.user.dispatch('setUserName', this.model.username);
  },
  methods: {
    simulateLogin() {
      return new Promise(resolve => {
        setTimeout(resolve, 800);
      });
    },
    async login() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      await this.simulateLogin();
      this.loading = false;
      if (
        this.model.username === this.validCredentials.username &&
        this.model.password === this.validCredentials.password
      ) {
        // 這裡需要把登入資料存入state,然後轉跳頁面
        this.$message.success("Login successfull");
        await this.simulateLogin();
        this.$router.replace('/Home')
      } else {
        this.$message.error("Username or password is invalid");
      }
    }
  }
};
</script>

<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
  color:lightslategrey;
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  margin-top: 10%;
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}

.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>

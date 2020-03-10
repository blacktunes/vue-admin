<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="logo">Logo</div>
      <el-form :model="loginForm" ref="loginForm" class="login-form" status-icon :rules="rules" @keyup.enter.native="login('loginForm')">
        <el-form-item prop="username">
          <label>用户名</label>
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label>密码</label>
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="check" v-if="useValidcode">
          <label>验证码</label>
          <div class="check">
            <el-input v-model="loginForm.check" maxlength="4"></el-input>
            <div class="validcode">
              <validcode @change="validcodeChange" ref="validcode"></validcode>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="info" class="login-btn" @click="login('loginForm')" :disabled="btnDisabled">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login'
import Validcode from '@/components/Validcode'
import { encrypt } from '@/assets/js/encrypt'
import { Message } from 'element-ui'
import { setToken, setUsername } from '@/assets/js/cookies'

export default {
  components: {
    Validcode
  },
  data () {
    var validateUsername = (rule, value, callback) => {
      if (this.loginError) {
        callback(new Error('用户名或密码错误'))
      } else if (value === '') {
        callback(new Error('请输用户名'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (this.loginError) {
        callback(new Error('用户名或密码错误'))
      } else if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value.toLowerCase() !== this.validcode.toLowerCase()) {
        callback(new Error('验证码错误'))
      } else {
        callback()
      }
    }
    return {
      // 数据验证用数据
      loginForm: {
        username: '',
        password: '',
        check: ''
      },
      // 发送请求用数据
      loginData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
        check: [
          { validator: validateCheck, trigger: 'blur' }
        ]
      },
      validcode: '',
      loginError: false,
      useValidcode: false // 是否使用验证码
    }
  },
  computed: {
    check () {
      return this.loginForm.check
    },
    btnDisabled () {
      if (this.useValidcode) {
        if (this.loginForm.username !== '' && this.loginForm.password !== '' && this.loginForm.check !== '' && this.loginForm.check.toLowerCase() === this.validcode.toLowerCase()) {
          return false
        } else {
          return true
        }
      } else {
        if (this.loginForm.username !== '' && this.loginForm.password !== '') {
          return false
        } else {
          return true
        }
      }
    }
  },
  methods: {
    tabClick (id) {
      this.isActive = id
    },
    login (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.loginData.username = this.loginForm.username
          this.loginData.password = encrypt(this.loginForm.password, 100)
          login(this.loginData).then((res) => {
            if (res.data.ERR_CODE === 0) {
              setToken(res.data.token)
              setUsername(res.data.username)
              this.$router.push('/')
            } else {
              this.loginError = true
              this.$refs.loginForm.validateField('username')
              this.$refs.loginForm.validateField('password')
              this.resetValidcode()
              this.loginError = false
            }
          })
            .catch(() => {
              this.resetValidcode()
              Message({
                message: '网络异常',
                offset: 10,
                type: 'error'
              })
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    validcodeChange (validcode) {
      this.validcode = validcode
    },
    resetValidcode () {
      if (this.useValidcode) {
        this.$refs.validcode.refreshCode()
        this.loginForm.check = ''
        this.$refs.loginForm.clearValidate('check')
      }
    }
  },
  watch: {
    check () {
      this.loginForm.check = this.loginForm.check.replace(/[^a-zA-Z0-9]/g, '')
      if (this.loginForm.check.length === 4) {
        this.$refs.loginForm.validateField('check')
      } else {
        this.$refs.loginForm.clearValidate('check')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  height 100vh
  background #666
  .login-wrapper
    width 330px
    margin auto
    .logo
      padding-top 30px
      text-align center
      color #bbb
      font-size 50px
    .login-form
      margin-top 29px
      label
        color #fff
      .check
        display flex
      .validcode
        margin-left 10px
        width 110px
        border-radius 4px
        background #fff
        user-select none // 禁止选中文本
      .login-btn
        margin-top 19px
        width 100%
</style>

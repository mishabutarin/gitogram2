<template>
  <div class="g-dflex-center">
    <div class="main-info">
      <div class="icon-logo">
        <icon-comp name="LogoIcon"/>
      </div>
      <p class="auth-txt">More than just one repository.<br>This is our digital world.</p>
      <button class="g-btn theme-green" @click="getCode">
        <span class="btn-text">
          Authorize with github
        </span>
        <div class="icon-github">
          <icon-comp name="GithubIcon"/>
        </div>
      </button>
    </div>
    <div class="main-img">
      <img src="../../../public/images/main.png" alt="Главная" />
    </div>
  </div>
</template>

<script>
import { IconComp } from '../../icons/'
const clientId = 'ae6368b837d83022b977'
const clientSecret = '17dac71d7f3adfdbece7719d87699b214e2ffe25'
export default {
  name: 'AuthUser',
  components: {
    IconComp
  },
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', clientId)
      params.append('scope', 'repo:status read:user')
      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            clientId,
            code,
            clientSecret
          })
        })
        const json = await response.json()
        const { token } = json
        localStorage.setItem('token', token)
        this.$router.replace({ path: '/' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="scss" src="./auth.scss"></style>

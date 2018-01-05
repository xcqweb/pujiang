<template>
  <div class="callback">
    Please wait for authentication...
    <button @click="getToken">getToken</button>
  </div>
</template>

<script>
export default {
  name: 'callback',
  data () {
    return {
      code: '',
      state: ''
    }
  },
  mounted () {
    this.code = this.$route.query.code
    this.state = this.$route.query.state
    if (this.code) {
      // if we want to use cloud functions, we have to use this function
      // this.getToken()
    }
  },
  methods: {
    getURLParameter (name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) ||
        [null, ''])[1].replace(/\+/g, '%20')) || null
    },
    getToken () {
      var tokenFunctionURL = 'https://us-central1-' + this.getFirebaseProjectId() + '.cloudfunctions.net/token'
      this.$jsonp(tokenFunctionURL, { code: encodeURIComponent(this.code), state: encodeURIComponent(this.state) })
        .then(data => {
          if (data) {
          console.log(data)
          } else {
            console.error(data)
            document.body.innerText = 'Error in the token Function: ' + data.error
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getFirebaseProjectId () {
    }
  }
}
</script>
<style lang="less">
  .callback {
    padding: 25px;
  }
</style>
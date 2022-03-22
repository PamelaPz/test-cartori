<template>
  <div class="login flex">
    <div class="wp-logo flex">
      <div>
        <img src="@/assets/logo.png" alt="logo" srcset="">
      </div>
    </div>
    <div class="wp-btnLogin flex">
      <router-link to="/about">
        <div class="content-btn">
          <img src="@/assets/img/logo-g.png" alt="google" srcset="">
          <p>Login with Google</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  }
}
</script>

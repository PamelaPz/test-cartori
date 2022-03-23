<template>
  <div class="home-dr flex">
    <div class="wp-left flex">
      <HomeDr />
    </div>
    <div class="wp-right flex">
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
import HomeDr from '../components/DataDr.vue'

export default {
  components: {
    HomeDr
  }
}
</script>

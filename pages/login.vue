<template>
</template>

<script>
export default {
  layout: 'blank',
  methods: {
    authenticate() {
      this.$auth.loginWith('oauth2_provider');
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      if (!this.$route.hash && !this.$auth.loggedIn) {
        this.authenticate();
      }
    })
  },
};
</script>

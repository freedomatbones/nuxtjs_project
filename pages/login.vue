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
      this.authenticate();
    })
  },
};
</script>

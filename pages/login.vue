<template>
  <v-app dark id="inspire">
    <button class="button--grey" @click="oauth2_provider">oauth2_provider</button>
    <button class="button--grey" @click="oauth2_provider_keycloak">oauth2_provider keycloak</button>
    <button class="button--grey" @click="auth0_login">auth0_login</button>
  </v-app>
</template>

<script>
export default {
  layout: 'blank',
  methods: {
    oauth2_provider() {
      this.$auth.loginWith('oauth2_provider');
    },
    oauth2_provider_keycloak() {
      this.$auth.loginWith('oauth2_provider_keycloak');
    },
    auth0_login() {
      this.$auth.loginWith('auth0');
    }
  },
};
</script>

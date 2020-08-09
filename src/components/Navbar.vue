<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <router-link to="/" class="is-transparent">
          <div class="title is-primary">FakeCompanies Manager</div>
        </router-link>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end" v-if="this.$route.name !== 'new'">
        <router-link to="/new" id="plus-btn" class="button is-primary is-rounded">
          <i class="fa fa-plus"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  padding: 50px 100px;
  height: 3rem;
}
</style>

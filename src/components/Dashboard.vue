<template>
  <div id="dashboard">
    <h1>Dashboard</h1>

    <div class="">
      <router-link to="/new" id="plus-btn" class="button is-primary">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
};
</script>

<style scoped>
#plus-btn {
  border-radius: 35px;
}

</style>

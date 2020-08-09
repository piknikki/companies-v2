<template>
  <div>
    <h1>Add a New Company</h1>
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">

          <div class="field">
            <label class="label">Company ID#</label>
            <div class="control">
              <input type="text" class="input">
            </div>
          </div>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input type="text" class="input">
            </div>
          </div>
          <div class="field">
            <label class="label">Number of Employees</label>
            <div class="control">
              <input type="text" class="input">
            </div>
          </div>
          <div class="field">
            <label class="label">Subscriptions Per Employee</label>
            <div class="control">
              <input type="text" class="input">
            </div>
          </div>
          <div class="field">
            <label class="label">Domain</label>
            <div class="control">
              <input type="text" class="input">
            </div>
          </div>
          <div class="field">
            <label class="label">Full Url</label>
            <div class="control">
              <input type="text" class="input">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-company',
};
</script>

<style scoped>

</style>

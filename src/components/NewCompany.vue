<template>
  <div>
    <h1 class="title">Add a New Company</h1>
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <form @submit.prevent="saveCompany">
            <div class="field">
              <label class="label" for="company_id">Company ID#</label>
              <div class="control">
                <input id="company_id" type="number" class="input"
                       v-model.number="company_id">
              </div>
            </div>
            <div class="field">
              <label class="label" for="name">Name</label>
              <div class="control">
                <input id="name" type="text" class="input"
                       v-model="name">
              </div>
            </div>
            <div class="field">
              <label class="label" for="numberOfEmployees">Number of Employees</label>
              <div class="control">
                <input id="numberOfEmployees" type="number" class="input"
                       v-model.number="numberOfEmployees">
              </div>
            </div>
            <div class="field">
              <label class="label" for="subscriptionsPerEmployee">Subscriptions Per Employee</label>
              <div class="control">
                <input id="subscriptionsPerEmployee" type="number" class="input"
                       v-model.number="subscriptionsPerEmployee">
              </div>
            </div>
            <div class="field">
              <label class="label" for="domain">Domain</label>
              <div class="control">
                <input id="domain" type="text" class="input"
                       v-model="domain">
              </div>
            </div>
            <div class="field">
              <label class="label" for="liveUrl">Full Url</label>
              <div class="control">
                <input id="liveUrl" type="text" class="input"
                       v-model="liveUrl">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'new-company',
  data () {
    return {
      company_id: null,
      name: null,
      domain: null,
      numberOfEmployees: null,
      subscriptionsPerEmployee: null,
      liveUrl: null
    }
  },
  methods: {
    saveCompany () {
      db.collection('companies').add({
        company_id: this.company_id,
        name: this.name,
        domain: this.domain,
        numberOfEmployees: this.numberOfEmployees,
        subscriptionsPerEmployee: this.subscriptionsPerEmployee,
        liveUrl: this.liveUrl
      })
        // eslint-disable-next-line no-unused-vars
        .then((docRef) => this.$router.push('/'))
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>

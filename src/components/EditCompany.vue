<template>
  <div>
    <h1 class="title">Edit Company</h1>
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <form @submit.prevent="updateCompany">
            <div class="field">
              <label class="label" for="company_id">Company ID#</label>
              <div class="control">
                <input disabled id="company_id" type="number" class="input"
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
  name: 'edit-company',
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
  beforeRouteEnter (to, from, next) {
    db.collection('companies')
      .where('company_id', '==', to.params.company_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            // eslint-disable-next-line no-param-reassign
            vm.company_id = doc.data().company_id
            // eslint-disable-next-line no-param-reassign
            vm.name = doc.data().name
            // eslint-disable-next-line no-param-reassign
            vm.domain = doc.data().domain
            // eslint-disable-next-line no-param-reassign
            vm.numberOfEmployees = doc.data().numberOfEmployees
            // eslint-disable-next-line no-param-reassign
            vm.subscriptionsPerEmployee = doc.data().subscriptionsPerEmployee
            // eslint-disable-next-line no-param-reassign
            vm.liveUrl = doc.data().liveUrl
          })
        })
      })
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('companies').where('company_id', '==', this.$route.params.company_id).get().then(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.company_id = doc.data().employee_id
            this.name = doc.data().name
            this.domain = doc.data().domain
            this.numberOfEmployees = doc.data().numberOfEmployees
            this.subscriptionsPerEmployee = doc.data().subscriptionsPerEmployee
            this.liveUrl = doc.data().liveUrl
          })
        }
      )
    },
    updateCompany () {
      db.collection('companies').where('company_id', '==', this.$route.params.company_id)
        .get().then(
          (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.update({
                company_id: this.company_id,
                name: this.name,
                domain: this.domain,
                numberOfEmployees: this.numberOfEmployees,
                subscriptionsPerEmployee: this.subscriptionsPerEmployee,
                liveUrl: this.liveUrl
              }).then((docRef) => this.$router.push('/'))
            })
          }
        )
    }
  }
}
</script>

<style scoped>

</style>

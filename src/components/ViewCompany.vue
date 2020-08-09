<template>
    <div class="container box">
      <article>
        <div class="message-header">
          <h1 class="rainbow title">
            {{ name }}
          </h1>
          <span class="tag is-medium is-pulled-right">
              <a class="nav-dots linky"
                 variant="outline"
                 v-bind:href=liveUrl
              >
                {{ liveUrl ? domain : 'liveUrl' }}
              </a>
          </span>
        </div>
        <p class="message-body">
          Company ID: {{ company_id }}
          <br>
          Number of Employees: {{ numberOfEmployees }}
          <br>
          Subscriptions per Employee: {{ subscriptionsPerEmployee }}
        </p>
      </article>
      <router-link to="/" class="button is-success is-light">
        <span id="icon" class="icon has-text-primary">
          <i class="fal fa-chevron-left"></i>
        </span>
      </router-link>

      <router-link
        v-bind:to="{name: 'edit_company', params: {company_id: company_id}}"
        id="plus-btn" class="button is-primary is-pulled-right">
        <i class="fal fa-file-edit"></i>
      </router-link>

      <button id="delete-btn"
              @click="deleteCompany"
              class="button is-pulled-right is-danger is-light">
        <i class="fal fa-trash-alt"></i>
      </button>
    </div>
</template>

<script>
import db from './firebaseInit';

export default {
  name: 'view-company',
  data() {
    return {
      company_id: null,
      name: null,
      domain: null,
      numberOfEmployees: null,
      subscriptionsPerEmployee: null,
      liveUrl: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection('companies')
      .where('company_id', '==', to.params.company_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            // eslint-disable-next-line no-param-reassign
            vm.company_id = doc.data().company_id;
            // eslint-disable-next-line no-param-reassign
            vm.name = doc.data().name;
            // eslint-disable-next-line no-param-reassign
            vm.domain = doc.data().domain;
            // eslint-disable-next-line no-param-reassign
            vm.numberOfEmployees = doc.data().numberOfEmployees;
            // eslint-disable-next-line no-param-reassign
            vm.subscriptionsPerEmployee = doc.data().subscriptionsPerEmployee;
            // eslint-disable-next-line no-param-reassign
            vm.liveUrl = doc.data().liveUrl;
          });
        });
      });
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      db.collection('companies').where('company_id', '==', this.$route.params.company_id).get().then(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.company_id = doc.data().employee_id;
            this.name = doc.data().name;
            this.domain = doc.data().domain;
            this.numberOfEmployees = doc.data().numberOfEmployees;
            this.subscriptionsPerEmployee = doc.data().subscriptionsPerEmployee;
            this.liveUrl = doc.data().liveUrl;
          });
        },
      );
    },
    deleteCompany() {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Are you sure you want to delete this company? Like, SUPER sure??')) {
        db.collection('companies').where('company_id', '==', this.$route.params.company_id).get().then(
          (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
              this.$router.push('/');
            });
          },
        );
      }
    },
  },
};
</script>

<style scoped>
article {
  margin: 20px 50px;
}

.message-body {
  line-height: 2rem;
}

#icon {
  padding: 0 10px;
  display: inline;
}

.rainbow {
  font-size: 2rem;
  background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%,
  #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

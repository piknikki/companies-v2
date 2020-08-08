<template>
    <div class="container box">
      <article>
        <div class="message-header">
          <h1 class="rainbow title">
            {{ name }}
          </h1>
          <span class="tag is-medium is-pulled-right">{{ domain }}</span>
        </div>
        <p class="message-body">
          Company ID: {{ company_id }}
          <br>
          Number of Employees: {{ numberOfEmployees }}
          <br>
          Subscriptions per Employee: {{ subscriptionsPerEmployee }}
        </p>
      </article>
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
          });
        },
      );
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

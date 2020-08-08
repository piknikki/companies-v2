<template>
  <div id="dashboard">
      <div class="container box">
        <article v-for="company in companies" class="post message" :key="company.id">
          <div class="message-header">
            <h1 class="rainbow title">
              {{ company.name }}
              <router-link
                v-bind:to="{name: 'view-company', params: {company_id: company.company_id}}"
              >
                <span id="icon" class="icon has-text-primary"><i class="fas fa-eye"></i></span>
              </router-link>
            </h1>
            <span class="tag is-medium is-pulled-right">{{ company.domain }}</span>
          </div>
          <p class="message-body">
            Company ID: {{ company.company_id }}
            <br>
            Number of Employees: {{ company.numberOfEmployees }}
            <br>
            Subscriptions per Employee: {{ company.subscriptionsPerEmployee }}
          </p>
        </article>
      </div>
    </div>
</template>

<script>
import db from './firebaseInit';

export default {
  name: 'dashboard',
  data() {
    return {
      companies: [],
    };
  },
  created() {
    db.collection('companies').orderBy('company_id').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        const data = {
          id: doc.id,
          company_id: doc.data().company_id,
          name: doc.data().name,
          domain: doc.data().domain,
          faSymbol: doc.data().faSymbol,
          numberOfEmployees: doc.data().numberOfEmployees,
          subscriptionsPerEmployee: doc.data().subscriptionsPerEmployee,
        };
        this.companies.push(data);
      });
    });
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

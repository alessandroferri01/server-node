<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">Nessun elemento trovato. Inserire prima tramite apposito form</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
          :id="result._id"
        ></survey-result>
      </ul>
      
      
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      axios.get('http://localhost:5000/recensioni').then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      }).then((data) => {
        this.isLoading = false;
        const results = [];
        for (const id in data) {
          results.push({
            id: id, 
            _id: data[id]._id,
            name: data[id].name, 
            rating: data[id].rating
          })
        }
        this.results = results;
        
      }).catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.error = 'Fallimento nel caricamento dei dati'
      })
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
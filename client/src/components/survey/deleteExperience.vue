<template>
  <span @click="deleteExperience" class="delete">Delete</span>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  methods: {
    deleteExperience() {
      console.log('id oggetto ' + this.id);

      axios
        .delete('http://localhost:4000/recensioni/' + this.id)
        .then((response) => {
          if (response.status == 200) {
            alert('Eliminazione avvenuta con successo');
          }
        });
    },
  },
};
</script>

<style scoped>
span.delete {
  background-color: plum;
  color: black;
  cursor: pointer;
  font-weight: 600;
  padding: 5px;
}
</style>
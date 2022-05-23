<template>
  <li>
    <p>
      <span class="highlight">{{ name }}</span> rated the learning experience
      <span :class="ratingClass">{{ rating }}</span>.
    </p>
    <deleteExperience :id="id"></deleteExperience>
  </li>
</template>

<script>
import deleteExperience from './deleteExperience.vue';

export default {
  components: {
    deleteExperience,
  },
  props: ['id','name', 'rating'],
  computed: {
    ratingClass() {
      return 'highlight rating--' + this.rating;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.rating--poor {
  color: #b80056;
}

.rating--average {
  color: #330075;
}

.rating--great {
  color: #008327;
}
</style>
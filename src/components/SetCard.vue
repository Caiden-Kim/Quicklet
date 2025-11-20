<template>
  <div class="set" @click="$emit('select', set)">
    <h3 class="set-title">{{ set.title }}</h3>
    <p class="desc">{{ set.description }}</p>
  </div>
</template>

<script>
export default {
  name: "SetCard",
  props: {
    set: Object,
  },
};
</script>

<style scoped>
.set {
  padding: 1.5em;
  margin: 0.7em;
  width: 40vw;
  background-color: #373c44;
  border-radius: 0.8em;
  transition: all 0.3s ease-in-out;
}

.set:hover {
  background-color: #52596e;
  transform: translateY(-3px);
  cursor: pointer;
}
</style>

<template>
  <div class="page">
    <div class="page-title">
      <img class="logo" src="@/assets/QuickletLogo.png" />
      <div class="title-block">
        <h1>Quicklet</h1>
        <p>A project by Caiden Kim & Jacob Branson</p>
      </div>
    </div>

    <h2 class="heading">Choose a Set:</h2>

    <div class="sets">
      <SetCard v-for="(s, i) in sets" :key="i" :set="s" @select="openSet" />
    </div>
  </div>
</template>

<script>
import SetCard from "./components/SetCard.vue";
import sets from "./data/sets.json";

export default {
  name: "App",
  components: { SetCard },

  data() {
    return {
      sets,
    };
  },

  methods: {
    openSet(set) {
      console.log("User selected:", set.title);
      // Example: route to a flashcard page
      // this.$router.push(`/set/${set.id}`)
    },
  },
};
</script>

<style></style>

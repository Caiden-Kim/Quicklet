<template>
  <header class="top-bar">
    <router-link to="/">
      <img class="logo" src="@/assets/QuickletLogo.png" alt="Quicklet Logo" />
    </router-link>
    <div class="title-block">
      <h1>Quicklet</h1>
      <p>A project by Caiden Kim & Jacob Branson</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px; /* fixed height */
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: #2b3036;
  padding: 0 1em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.logo {
  width: 60px;
  height: 60px;
  margin-right: 0.1em;
  margin-left: 0.1em;
}

.title-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title-block h1 {
  font-family: "RedHands";
  margin: 0;
  font-size: 1.8em;
}

.title-block p {
  margin: 0;
  font-family: "Coolvetica";
  font-size: 0.9em;
}
</style>

<template>
  <div class="profile">
    <profile-top></profile-top>
    <profile-main />
  </div>
</template>

<script>
import ProfileTop from "./childComps/ProfileTop";
import ProfileMain from "./childComps/ProfileMain";

export default {
  name: "Profile",
  components: {
    ProfileTop,
    ProfileMain
  }
};
</script>

<style scoped></style>

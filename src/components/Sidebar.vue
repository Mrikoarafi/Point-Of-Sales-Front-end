<template>
  <div class="col-lg-1 d-none d-lg-block sidebar bg-white" style="min-height:100vh;">
    <div class="ml-lg-4">
      <div class="row sidebarni ">
        <router-link to="/home"><img src="@/assets/picture/sidebar/fork.png"/></router-link>
      </div>
      <div class="row my-5">
        <router-link to="/history"><img src="@/assets/picture/sidebar/clipboard.png"/></router-link>
      </div>
      <div class="row mt-4">
        <router-link to="/home">
        <a style="cursor:pointer;" @click="$bvModal.show('modol')"
          ><img src="@/assets/picture/sidebar/add.png"
        /></a>
         </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped>
.sidebarni {
  margin-top: 60px;
}
.sidebar {
  box-shadow: 0px 4px 10px rgba(15, 12, 12, 0.25);
}

.sidebar img {
  max-width: 39px !important;
}
</style>

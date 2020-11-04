
<template>

  <div class="row py-2 d-lg-none text-center bg-white fixed-bottom hpbar">
    <div class="col">
      <router-link to="/home"><img src="@/assets/picture/sidebar/fork.png"/></router-link>
    </div>
    <div class="col-3">
      <router-link to="/history"><img src="@/assets/picture/sidebar/clipboard.png"/></router-link>
    </div>
    <div class="col ">
      <router-link to="/home">
      <a  @click="$bvModal.show('modol')"><img src="@/assets/picture/sidebar/add.png"/></a>
    </router-link>
    </div>
  </div>
</template>

<style scoped>

.hpbar {
  box-shadow: 0px 10px 30px black;
}

.hpbar img {
  max-width: 45px;
}
</style>

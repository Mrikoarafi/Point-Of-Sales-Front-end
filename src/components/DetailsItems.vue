<template>
  <div class="col-12 col-lg mb-3" >
    <div class="row ">
      <div
        style="width: 95%;height: 80vh;"
        class="justify-content-center d-flex mt-5 align-items-center  "
        v-if="pake.length === 0">
        <img src="..\assets\picture\Loading\2.gif" />
      </div>
      <div class="col-9 col-lg-6 mx-auto mt-4 sizeImg " v-else>
        <div class="justify-content-center  d-flex align-items-center">
          <img
            class="border my-lg-auto " style="
  border-radius: 20px;"
            :src="`${url}/` + pake.image"
          />
        </div>
        <div class="row mx-lg-1  mt-2 align-self-center  ">
          <div class="col-12 col-lg-5 text-lg-left my-auto"><small style="font-size: 19px; font-weight: 600">{{
            pake.nameproduk
          }}</small></div>
          <div class="col-12 col-lg-3 ">
          <h5 class="text-success my-auto">Rp.{{ formatRp(pake.price) }}</h5></div>
          <div class="mt-2 mt-lg-0 col-12 col-lg text-lg-right"><button
            @click="$bvModal.show('ModalsEdit')"
            type="button"
        style="background:#F24F8A;"
            class="mt-1 btn-block  my-auto ml-lg-auto border-0  btn-sm text-white"
          >
            Edit
          </button></div>
          <div class="d-md-none mt-2 mt-lg-0 col-12 col-lg  text-lg-right"><button
            @click="goHome()"
            type="button"
        style="background: #57CAD5;"
            class="mt-1 btn-block my-auto ml-lg-auto border-0  btn-sm text-white"
          >
            Home
          </button></div>

        </div>
      </div>
    </div>
    <ModalsEdit :kirimId="pake" />
  </div>
</template>
<script>
import ModalsEdit from './ModalsEdit'
export default {
  props: ['pake'],
  data () {
    return {
      url: process.env.VUE_APP_URL_API
    }
  },
  components: { ModalsEdit },
  methods: {
    formatRp (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    goHome () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style scoped>
.sizeImg img {
  width: 95%;
  height: 80vh;
}
@media screen and (max-width: 550px) {
  .sizeImg img {
  max-width: 50vh !important;
  height: 30vh !important;
  width: auto !important;
}
}
</style>

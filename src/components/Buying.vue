<template>
  <div v-if="pake.length !== 0" class="row text-left  mt-3 align-items-center displayResponsive" >
    <div class="col-5 col-lg-4 ml-lg-3" >
      <div class="row">
      <img :src="`${url}/` + pake.image" style="max-height:70px; width:100%;"/></div>
    </div>
    <div class="col-7 col-md-5 col-lg-4" >
        <div class="row "><h6 >{{pake.nameproduk}}</h6>
      <div class="btn-group ml-auto ml-lg-0">
        <button @click="kurangin(pake.id_product)" class="btn plusmin shadow-none">-</button>
        <button  class="btn number">
          {{qty}}
        </button>
        <button @click="tambahin(pake.id_product)" class="btn plusmin shadow-none">+</button>
      </div>
      </div>
    </div>
    <div class="col mt-auto ">
<div class="row"><p class="text-secondary Rp">{{ qty * pake.price | currency('Rp. ', 0, { thousandsSeparator: '.' }) }}</p></div>
    </div>
  </div>
</template>

<style scoped>
.displayResponsive{
max-height: 80px !important;
}
.Rp{
    font-weight:600;
}
    img{
        max-width: 90%;
        border-radius:10px;
    }
    .plusmin{
        background-color:  rgba(130, 222, 58, 0.2);
        border: 1px solid #82DE3A;
        color:#82DE3A;
        font-weight: 900;
    }
    .plusmin:hover{
        background-color: #82DE3A;
        color:white;
    }
    .number{
        border: 1px solid #82DE3A;
        font-weight: 600;
        color:#82DE3A;
    }
    @media screen and (max-width: 550px) {

.displayResponsive{
max-height: 100px !important;
}
    }
</style>

<script scoped>
export default {
  data () {
    return {
      url: process.env.VUE_APP_URL_API
    }
  },
  props: ['pake', 'qty'],

  methods: {
    kurangin () {
      this.$emit('kurangNi')
    },
    tambahin () {
      this.$emit('tambahNi')
    }
  }
}
</script>

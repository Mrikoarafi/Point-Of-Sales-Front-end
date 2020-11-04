<template>
  <b-modal id="modal-co" hide-footer hide-header>
    <div class="row justify-content-between mb-4">
      <div class="col-6"><h5>Checkout</h5></div>
      <div class="col-6 text-right"><h6>Receipt no: #210493230</h6></div>
      <div class="col-12 mt-n2">
        <small style="font-size:14px;font-weight:500;"
          >Cashier : Pevita Pearce</small
        >
      </div>
    </div>
    <div
      class="row justify-content-between"
      v-for="(item, index) in cart"
      :key="index"
    >
      <div class="col-8">
        <h6>{{ item.nameproduk }} {{ item.qty }}X</h6>
      </div>
      <div class="col-4 text-right">
        <h6>Rp.{{ formatRp(item.qty * item.price) }}</h6>
      </div>
    </div>
    <div class="row mt-2">
        <div class="col-6">
      <h6 >Ppn 10%</h6></div>
        <div class="col-6 text-right">
      <h6 >Rp: {{ formatRp(totalPrice * 0.1) }}</h6></div>
    </div>
    <div class="row  mt-4">
        <div class="col-12 text-right">
      <h5 >Total:
 Rp.{{ formatRp(totalPrice + totalPrice * 0.1) }}</h5></div>
    </div>
<div class="row">
    <div class="col-12">
    <h6>Payment : Cash</h6></div>
    </div>
    <b-button @click="printCheckout()" class="mt-3 border-0" style="background: #57CAD5;" block
      >Print</b-button
    >
    <b-button @click="$bvModal.hide('modal-co')" class="mt-3 border-0" style="background: #F24F8A;" block
      >Ok</b-button
    >
  </b-modal>

</template>

<script>
export default {
  props: ['cart', 'totalPrice'],
  methods: {
    formatRp (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    printCheckout () {
      this.$emit('printCheckout')
    }
  }
}
</script>

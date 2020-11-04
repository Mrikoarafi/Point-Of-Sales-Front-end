<template>
  <div class="col-md-3 d-none d-md-block shadowResto bg-white">
    <div class="row">
      <div class="col-12 mx-auto mb-n4 mt-4">
        <img
          class="mb-n4 mb-lg-0 resto"
          src="@/assets/picture/cart/food-and-restaurant.png"
        />
      </div>
      <div class="col-12"><h5 class="mx-auto">Your cart is empty</h5></div>
      <div class="col-12">
        <small class="mx-auto text-muted disabled"
          >Please add some items from the menu</small
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadowResto{
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

}
.resto {
  max-width: 160px;
  margin-top: 0px;
}
.text-muted {
  color: #cecece !important;
  opacity: 0.8;
}
</style>

<script>
export default {
  props: ['tile', 'cartNi']
}
</script>

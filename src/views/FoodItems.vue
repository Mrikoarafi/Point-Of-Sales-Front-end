<template>
  <div class="container-fluid" style="background-color: rgb(245, 245, 245)">
    <Navbar :buyLength="cart" :allCategory="allCategory"/>
    <div class="row text-center">
      <Sidebar />

      <div class="col-12 col-lg-8 mt-n1 content pb-5">
        <div v-if="allProduk.isLoading === true" class="  row  ">
          <div
            style="
  width: 95%;
  height: 80vh;"
            class=" justify-content-center d-flex align-items-center"
          >
            <img src="..\assets\picture\Loading\2.gif" />
          </div>
        </div>

        <div v-else class="row mt-2">

          <div
            class="col-6 col-sm-4"
            v-for="(item, index) in allProduk.produkss"
            :key="index"
          >
            <ContentFoods :paginationPages="pagination" v-on:EmitCuy="onEmit(item.id_product)" :user="item" />
          </div>
        </div>
        <div class="row mt-5 justify-content-center mb-4 mb-lg-0">
          <button class="btn btn-primary mr-4" use-router @click="prev()">
            Back
          </button>
          <button class="btn btn-primary ml-4" use-router @click="next()">
            Next
          </button>
        </div>
      </div>
      <Purchase v-if="cart.length === 0" />
      <div v-else class="cart-content col-11 col-lg-3 d-md-block bg-white mx-3 mx-lg-0" style="box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);" >
        <div class=" row ml-1 mb-2 mx-1" style="max-height:60vh;overflow-y:scroll;
    overflow-x: hidden !important;">
          <div v-for="(item, index) in cart" :key="index" class=" col-12 pl-lg-0 pr-lg-0" style="margin-bottom:auto !important;">
          <Buying
            :pake="item"
            :qty="item.qty"
            v-on:kurangNi="kurang(item.id_product)"
            v-on:tambahNi="tambah(item.id_product)"
          />
        </div>
        </div>
        <div class="row mt-3 text-left ml-0">
          <div class="mt-auto col-7">
            <b>Total:</b>
            <p class="text-muted">*Belum termasuk PPN</p>
          </div>
          <div class="col text-success">
            <h5 text-secondary>
              {{
                totalItem() | currency("Rp. ", 0, { thousandsSeparator: "." })
              }}
            </h5>
          </div>
        </div>
        <div class="row  mb-2 mx-2 mx-lg-0 mb-lg-0 mb-2 mb-lg-0  mr-lg-1 ml-lg-2">
          <button
            type="button"
            class=" text-white btn btn-md btn-block border-0"
            style="background: #57CAD5;"
            @click="checkout(cart)"
            v-b-modal.modal-co
          >
            Checkout
          </button>

          <button style="background: #F24F8A;" @click="cart = []"  class=" border-0 btn btn-secondary btn-md btn-block">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <b-icon
    v-if="cart.length !== 0"
    @click="cartToggle"
        icon="cart-check"
        variant="light"
        font-scale="3"
        class="btn-cart-toggle d-md-none btn-cart-toggle rounded-circle p-2"
      ></b-icon>
    <Modals :paginationPages="pagination"/>
    <SidebarHp />
    <ModalsCheckout :cart="cart"  :totalPrice="totalPrice" @printCheckout="print()"/>
  </div>
</template>
<style  scoped>

.cart-content{
padding-left:5px;
}
@media screen and (max-width: 550px) {
  .btn-cart-toggle {
    background: #F24F8A;
    position: fixed;
    bottom: 310px;
    right: 0;
    margin: 50px;
  }

.cart-content{
 position: fixed;
    top: -610px;
    transition: all 0.3s ease;

}

  .cart-toggle {
    top:10px;
}
}
</style>

<script>
import ModalsCheckout from '../components/ModalsCheckout'
import Modals from '../components/Modals'
import JsPDF from 'jspdf'
import data from '../mixins/about'
import Navbar from '../components/Appuse/Navbar'
import Sidebar from '../components/Sidebar'
import ContentFoods from '../components/ContentFoods'
import Purchase from '../components/Purchase'
import SidebarHp from '../components/Appuse/SidebarHp'
import Buying from '../components/Buying'
// mengambil data di store getfoods
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      pagination: 1,
      totalPrice: 0
    }
  },
  mixins: [data],
  components: {
    Navbar,
    Sidebar,
    ContentFoods,
    Purchase,
    Buying,
    SidebarHp,
    ModalsCheckout,
    Modals
  },
  // computed bisa set bisa get
  computed: {
    // ngambil getters di  folder ../getfoods
    ...mapGetters({
      allProduk: 'produk/getAllProduk',
      allCategory: 'category/getAllCategory',
      totalPage: 'produk/getPagination'
    })
  },
  methods: {
    cartToggle () {
      const cart = document.querySelector('.cart-content')
      cart.classList.toggle('cart-toggle')
    },
    formatRp (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    print: function () {
      const pdfName = 'Invoice'
      var doc = new JsPDF()
      doc.setFontSize(12)
      doc.text('Point Of Sales', 10, 10)
      doc.text(`Date : ${new Date().toJSON().slice(0, 10)}`, 160, 10)
      doc.text('CHECKOUT SUCCESS', 80, 30)

      doc.text('Cashier : Pevita Pearce', 10, 40)
      doc.text('Receipt no : #23', 160, 40)
      doc.text('Orders : ', 10, 50)
      const itemOrders = []
      for (var i in this.cart) {
        itemOrders.push(
          `${this.cart[i].nameproduk} ${
            this.cart[i].qty
          }x (@Rp. ${this.formatRp(this.cart[i].price)})`
        )
      }
      const qtyOrders = []
      for (var j in this.cart) {
        qtyOrders.push(
          `Rp. ${this.formatRp(this.cart[j].price * this.cart[j].qty)}`
        )
      }
      const dist = itemOrders.length * 5
      doc.text(itemOrders, 53, 50)
      doc.text(qtyOrders, 160, 50)
      doc.text('PPN (10%) : ', 10, 60 + dist)
      doc.text(`Rp. ${this.formatRp(this.totalItem() * 0.1)}`, 160, 60 + dist)
      doc.text('Total Price : ', 10, 70 + dist)
      doc.text(
        `Rp. ${this.formatRp(this.totalItem() + this.totalItem() * 0.1)}`,
        160,
        70 + dist
      )
      doc.text('THANKS FOR BUYING', 76, 80 + dist)
      doc.save(pdfName + '.pdf')
    },
    checkout (item) {
      localStorage.setItem('cart', this.item)
    },
    // ngambil actions di  folder ../getfoods
    ...mapActions({
      actionsCategory: 'category/getAllCategory',
      actionPagination: 'produk/paginate'
    }),
    prev () {
      if (this.pagination <= 1) {
      } else {
        this.pagination -= 1
        const data = {
          page: this.pagination
        }
        this.actionPagination(data)
          .then(response => {
            this.$router.push({
              query: {
                page: this.pagination
              }
            })
          })
          .catch(() => {})
      }
    },
    next () {
      if (this.pagination >= this.totalPage) {
        alert('Last page')
      } else {
        this.pagination += 1
        const data = {
          page: this.pagination
        }
        this.actionPagination(data)
          .then(() => {
            this.$router.push({
              query: {
                page: this.pagination
              }
            })
          })
          .catch(() => {})
      }
    },

    // untuk beli produk
    onEmit (id) {
      const cart = this.cart.filter(e => e.id_product === id)
      if (cart.length === 0) {
        const data = this.allProduk.produkss.filter(e => e.id_product === id)
        data[0].qty = 1
        this.cart = [...this.cart, data[0]]
      } else {
        this.changeCart(id, 'add')
      }
    },
    tambah (id) {
      this.changeCart(id, 'add')
    },
    kurang (id) {
      this.changeCart(id, 'min')
    },
    changeCart (id, category) {
      const dataBaru = this.cart.map((e, i) => {
        if (e.id_product === id) {
          if (category === 'add') {
            e.qty += 1
          } else if (category === 'min') {
            if (e.qty === 1) {
              e.qty -= 0
            } else {
              e.qty -= 1
            }
          }
        }
        return e
      })
      this.cart = dataBaru
    },
    totalItem () {
      let sum = 0
      this.cart.forEach(function (item) {
        sum += parseFloat(item.price) * parseFloat(item.qty)
      })
      this.totalPrice = sum
      return sum
    }
  },
  // menampilkan data dari methods
  mounted () {
    const data = {
      page: 1
    }
    this.actionPagination(data)
    this.actionsCategory()
  }
}
</script>

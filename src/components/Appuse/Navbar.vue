<template>
  <!-- button -->
  <nav class="row navbar-light align-items-center py-2 mb-1 shadow-sm bg-white">
    <div class="pl-0 pl-lg-3 col-2 col-sm-2 col-lg-1">
      <b-navbar-toggle
        class="border-0"
        toggleable
        style="navbar-toggler-icon "
        target="nav-collapse"
        light
      ></b-navbar-toggle>
    </div>
    <!-- Name category -->
    <div class="col col-sm  col-md-6 col-lg-7 text-center category">
      <router-link
        to="/home"
        class="ml-5 ml-sm-n1 ml-md-3 ml-lg-0 text-dark text-decoration-none ml-sm-5 mr-sm-n2 mr-lg-n5 ml-lg-5"
        >Food Items</router-link
      >
    </div>
    <div class="col-3 col-sm-3 cart d-md-none ">
      <div class="row text-center ">
        <div class="col ">
          <span
            class="mr-3 ml-lg-4 cart"
            style="cursor:pointer;"
            v-b-toggle:my-collapse
            >Cart</span
          >
          <span class="dot ml-n3 text-white">
            {{ buyLength.length }}
          </span>
        </div>
      </div>
    </div>
    <!-- Search -->
    <div class="col-sm-12 col-md-1 text-center">
      <img
        @click="$bvModal.show('modal-prevent-closing')"
        style="cursor:pointer;"
        class="border-0 searchyu d-none d-md-inline-block"
        src="@/assets/picture/search.png"
      />
    </div>
    <!-- Cart -->
    <div class="col col-sm-3 col-lg-3 d-none d-md-block">
      <div class="row text-center">
        <div class="col">
          <span class="h6 cart">Cart </span
          ><a href="#" class="text-dark text-decoration-none"
            ><span class="dot text-white">
              <p>{{ buyLength.length }}</p>
            </span>
          </a>
        </div>
      </div>
    </div>
    <ModalsSearch />
    <b-collapse id="nav-collapse" is-nav>
      <div class="row mx-1 my-lg-0 mx-lg-1 mt-3 mt-lg-3">
        <div class="col-12 col-lg-5 ml-lg-5 d-flex">
          <select
            text="category"
            v-model="catEgory"
            @change="pilihCategory"
            class="ml-lg-5 form-control"
            style="width:200px;"
          >
            <option value="" selected>All Category</option>
            <option
              :value="selectCategory.namecategory"
              v-for="(selectCategory, index) in allCategory.category"
              :key="index"
            >
              {{ selectCategory.namecategory }}
            </option>
          </select>
          <img
            @click="$bvModal.show('modal-prevent-closing')"
            style="cursor:pointer;"
            class="my-auto  border-0 searchyu d-md-none ml-auto"
            src="@/assets/picture/search.png"
          />
        </div>
        <div class="col-12 col-lg-6 align-items-lg-stretch d-flex mt-3 mt-lg-0">
          <button
            @click="actionGetAllProduk()"
            class="btn-sm border-0 btn-lg text-white ml-lg-5 "
            style="background:#57CAD5; padding-right:10px !important; padding-left:12px !important;"
          >
            Refresh
          </button>
          <button
            @click="sortByPrice()"
            class=" btn-sm border-0 btn-lg text-white ml-2 ml-lg-4"
            style="background:#ADC6E8; padding-right:10px !important; padding-left:12px !important;"
          >
            Harga termurah
          </button>
          <button
            type="button"
            @click="onLogout()"
            class="btn-sm border-0 btn-lg text-white ml-auto ml-lg-5"
            style=" background:#E0E2C1; padding-right:10px !important; padding-left:12px !important;"
          >
            Logout
          </button>
        </div>
      </div>
    </b-collapse>
  </nav>
</template>

<script>
import ModalsSearch from '../ModalsSearch'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      catEgory: ''
    }
  },
  props: ['buyLength', 'allCategory'],
  components: {
    ModalsSearch
  },
  methods: {
    ...mapActions({
      actionLogout: 'auth/logout',
      actionGetAllProduk: 'produk/getAllProduk',
      sortByPrice: 'produk/sortPrice',
      categoryAll: 'produk/setCategory'
    }),

    // ngambil actions di  folder ../auth
    pilihCategory () {
      // Ambil mapActions lalu ketika di onChange ambil nilai selectOrder
      this.categoryAll(this.catEgory)
      this.$router.push({
        query: {
          category: this.catEgory
        }
      })
    },
    onLogout () {
      this.actionLogout().then(() => {
        this.$router.push({
          path: '/login'
          // query: {
          //   user: this.form.email
          // }
        })
      })
    }
  }
}
</script>

<style scoped>
/* NAVBAR */
.category a {
  font-size: 22px;
  font-weight: 600 !important;
}
.cart {
  font-size: 17px;
  font-weight: 500 !important;
}
.searchyu {
  max-height: 22px !important;
}
.textcard {
  font-size: 30px;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #57cad5;
  border-radius: 50%;
  display: inline-block;
}
</style>

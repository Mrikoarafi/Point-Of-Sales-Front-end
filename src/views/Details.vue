<template>
  <div class="container-fluid " >
    <div class="row text-center align-items-center my-auto" style="min-height:100vh;">
      <Sidebar />
      <DetailsItems :pake="user" />
      <!-- :pake="idProduk" -->
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import DetailsItems from '../components/DetailsItems'
import axios from 'axios'
export default {
  data () {
    return {
      id: this.$route.params.id_details,
      user: [],
      url: process.env.VUE_APP_URL_API
    }
  },
  components: {
    Sidebar,
    DetailsItems
  },
  methods: {
    getDetailUser () {
      axios
        .get(`${this.url}/api/v1/produk/produkdetails/${this.id}`)
        .then((response) => {
          this.user = response.data.data[0]
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getDetailUser(this.id)
  }
}
</script>

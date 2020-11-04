<template>
  <div class="col mt-lg-2">
    <div class="figure-img text-center mt-4 mt-lg-3">
      <img :src="`${url}/${user.image}`" class="img figure-img img-fluid" />
      <a
        href="#"
        class="d-flex justify-content-center"
        @click="detail(user.id_product)"
        ><img src="@/assets/picture/detail.png" class="align-self-center"
      /></a>
    </div>
    <figcaption class="figure-caption text-dark">
      <div class="row">
        <div class="col-12 col-lg-6 text-left">
          <div class="row text-center text-lg-left">
            <div
              class="col-12 mt-n1 mt-lg-n1 text-capitalize  "
              style="font-weight: 600;"
            > <h6 class=" textHeightHp">
              {{ user.nameproduk }}</h6>
            </div>
            <div class="col-12 rp mt-n2">
              {{
                user.price | currency("Rp. ", 0, { thousandsSeparator: "." })
              }}
            </div>
          </div>
        </div>
        <div class="details col text-lg-right mt-1 mt-lg-n1">
          <button
            @click="deleteItem(user.id_product)"
            class="btn btn-sm bg-danger text-white mr-1"
          >
            Delete
          </button>
          <button @click="emitNi()" class="btn btn-sm bg-success text-white">
            Buy
          </button>
        </div>
      </div>
    </figcaption>
  </div>
</template>

<style>
figcaption p {
  font-size: 15px;
}
.rp {
  color: #009664;
  font-weight: 600;
}

.details .btn:hover {
  background-color: #57cad5 !important;
}
.img {
  display: block;
}

.figure-img {
  position: relative;
  border-radius: 14px 14px 0px 0px;
  width: 100%;
  height: 190px !important;
}

.figure-img a {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  border-radius: 14px 14px 0px 0px;
  transition: opacity 0.2s;
}

.figure-img:hover a {
  opacity: 1;
}
@media screen and (max-width: 1024px) {
  .figure-img {
    max-height: 132px;
  }
}
@media screen and (max-width: 768px) {
  .figure-img {
    max-height: 154px;
  }
}
@media screen and (max-width: 550px) {
  .figure-img {
    height: 100px !important;
  }
  .textHeightHp{
    height: 20px !important;
    text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
  }
}
</style>

<script>

import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      url: process.env.VUE_APP_URL_API
    }
  },
  props: ['user', 'paginationPages'],
  methods: {
    ...mapActions({
      deleteProdukItem: 'produk/deleteProduk',
      actionPagination: 'produk/paginate'
    }),
    deleteItem (id) {
      Swal.fire({
        title: 'Yakin di hapus?',
        text: 'Data akan di hapus selamanya!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya,hapus'
      }).then((result) => {
        const data = {
          page: this.paginationPages
        }
        if (result.isConfirmed) {
          this.deleteProdukItem(id)
            .then(() => {
              Swal.fire(
                'Terhapus!',
                'success'
              )

              this.actionPagination(data)
            })
            .catch((err) => {
              alert(err)
            })
        }
      })
    }, // pindah halaman
    detail (id) {
      this.$router.push(`/details/${id}`)
    },
    emitNi () {
      this.$emit('EmitCuy')
    }
  }
}
</script>

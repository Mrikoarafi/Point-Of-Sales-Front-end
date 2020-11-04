<template>
  <div>
      <b-modal id="ModalsEdit" hide-footer>
        <template v-slot:modal-title>
          Edit
        </template>
        <form v-on:submit.prevent="submitFiles" >
        <div class="row">
          <div class="col-3 form-group">
            <p>Name</p>
          </div>
          <div class="col form-group ">
            <input
            required
              type="text"
              v-model="nameproduk"
              class="form-control shadow-sm"
              placeholder="Insert Name.."/>
          </div>
        </div>
        <div class="row">
          <div class="col-3 form-group ">
            <p>Price</p>
          </div>

          <div class="col form-group input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Rp.</span>
            </div>
            <!-- style untuk menghapus type number up & down -->
            <input
            @keypress="onlyNumber" type="text"
              v-model="price"
              class="form-control"
              placeholder="Insert Price.."
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-3 form-group ">
            <p>Category</p>
          </div>
          <div class="col form-group ">
            <select class="form-control shadow-sm" v-model="id_category" required>
              <option selected>Category..</option>
              <option value="1">Foods</option>
              <option value="2">Drinks</option>
              <option value="3">Ice Cream</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-3 form-group ">
            <p>Image</p>
          </div>
          <div class="col form-group ">
            <input
              type="file"
              @change="fileProcess"
              class="form-control-file"
            />
            <small class="text-danger h6">*<small>Insert Image</small></small>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <button
              class="cancel px-4 btn btn-sm text-white"
              @click="$bvModal.hide('ModalsEdit')"
            >
              Cancel
            </button>
            <button type="submit" class="ml-2 px-4 add btn btn-sm text-white">
              Add
            </button>
          </div>
        </div>

    </form>
      </b-modal>
  </div>
</template>

<style scoped>
/* menghapus input up and down integer */
input[type=number] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* body */
p {
  font-size: 15px;
  font-weight: 600;
}
.cancel {
  background-color: #f24f8a;
}
.add {
  background-color: #57cad5;
}
</style>

<script>

import Swal from 'sweetalert2'
import axios from 'axios'
import data from '../mixins/about'
export default {
  props: ['kirimId'],
  mixins: [data],
  methods: {
    onlyNumber ($event) {
      const keyCode = ($event.keyCode ? $event.keyCode : $event.which)
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault()
      }
    },
    submitFiles () {
      const fd = new FormData()
      fd.append('nameproduk', this.nameproduk)
      fd.append('price', this.price)
      fd.append('image', this.image)
      fd.append('id_category', this.id_category)
      for (var value of fd.values()) {
        console.log(value)
      }
      axios
        .patch(`http://3.89.119.22:3000/api/v1/produk/update/${this.kirimId.id_product}`, fd)
        .then((ress) => {
          if (ress.data.message === 'Update produk Success') {
            window.location.reload()
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${ress.data.message}`
            })
          }
        })
        .catch((err) => {
          console.log(err)
          alert(err)
        })
    },
    fileProcess (event) {
      this.image = event.target.files[0]
    }
  }
}
</script>

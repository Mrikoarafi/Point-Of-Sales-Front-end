<template>
<div class="row  justify-content-center" style="height:100vh;"><div class="my-auto  col-6">
  <div class="shadow-lg" style="border-radius:30px;"><form class=" px-4 py-4" @submit.prevent="onRegister">
  <div class="form-group">
    <label for="see1">Password</label>
    <input required v-model="form.password" type="password" class="form-control" id="see1" >
    <small id="see1" class="form-text text-muted">Gunakan password yang rumit demi keamanan.</small>
  </div>
  <div class="form-group">
    <label for="see2">Return password</label>
    <input v-model="form.confirmpwd" required type="password" class="form-control" id="see2">
  </div>
  <div class="form-group form-check">
    <input required type="checkbox" class="form-check-input" id="exampleCheck1">
    <label  class="form-check-label" for="exampleCheck1">Confirm password</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form></div>
  </div></div>

</template>

<script>

import { mapActions } from 'vuex'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      form: {
        password: '',
        confirmpwd: '',
        key: this.$route.query.key
      }
    }
  },
  methods: {

    onRegister () {
      if (this.form.password !== this.form.confirmpwd) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password yang di masukkan harus sama!'
        })
      } else {
        this.actionRegister(this.form)
          .then((response) => {
            this.$router.push({
              path: '/login'
            })
            Swal.fire(
              'Success',
            `${response}`,
            'success'
            )
          })
          .catch((err) => {
            alert(err)
          })
      }
    },
    ...mapActions({
      actionRegister: 'auth/confirmPassword'
    }),
    seePassword () {
      var x = document.getElementById('see')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    }
  }
}
</script>

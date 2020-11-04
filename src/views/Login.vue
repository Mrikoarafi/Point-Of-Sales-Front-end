<template>
  <div
    class="pl-0 pr-0 container-fluid "
    style="min-height: 100vh; font-family:poppins;"
  >
      <ModalsLogRess />
      <!-- costume directive -->
    <b-navbar
      toggleable="lg"
      type="dark"
      v-backgroundColour="'#57cad5'"
      class=" disabled navBarBg shadow-sm mx-auto"
    >
      <small  class="text-white" style="font-size:23px;"
        >Point Of Sales</small
      >
      <b-navbar-toggle
        toggleable
        style="navbar-toggler-icon"
        target="nav-collapse"
        light
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form  @submit.prevent="onLogin">
            <b-form-input
            v-model="form.email"
              required
              type="email"
              size="sm"
              class="mt-3 mt-lg-0 mr-lg-4"
              placeholder="Email"
            ></b-form-input>
            <b-form-input
            v-model="form.password"
              id="beta"
              required
              type="password"
              size="sm"
              class="mt-2 mt-lg-0 mr-lg-4"
              placeholder="Password"
            ></b-form-input>
            <b-button
              size="sm"
              class="text-white px-4 buttonBg mr-lg-3 mt-3 mt-lg-0 my-sm-0"
              type="submit"
              >Login</b-button
            >
          </b-nav-form>
          <b-nav-item-dropdown class="mt-2 mt-lg-0" text="User" right>
            <b-dropdown-item @click="$bvModal.show('modalRegist')">Sign Up</b-dropdown-item>
            <b-dropdown-item @click="$bvModal.show('modalForgot')">Forgot Password</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="row  hp  justify-content-center" style="z-index:-2;">
      <div class="col-sm-8  mt-lg-4  m-auto">
        <img class="picLogin ml-3 mr-2" src="../../src/assets/picture/login.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalsLogRess from '../components/ModalsLogRess'
import { mapActions } from 'vuex'
import mixins from '../mixins/about'
import Swal from 'sweetalert2'
export default {
  mixins: [mixins],
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    ModalsLogRess
  },
  methods: {
    onLogin () {
      this.actionLogin(this.form)
        .then(response => {
          if (response.code === 200) {
            window.location = '/home'
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${response.message}`
            })
          }
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pliss refresh page'
          })
        })
    },
    ...mapActions({
      actionLogin: 'auth/login'
    })
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.buttonBg {
  background-color: #fdca7a !important;
  border: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
}
.buttonBg:hover {
  background-color: #f5b959 !important;
}
.picLogin {
  max-width: 90%;
}
@media screen and (max-width: 724px) {
  .buttonBg:hover {
    background-color: white !important;
  }
  .navBarBg {
    width: 100% !important;
    position: fixed;
  }
  img {
    position: absolute;
    margin-top: 250px;
    right: 23px;
    max-width: 85% !important;

    height: fixed;
  }
  .hp {
    position: relative;
  }
}
</style>

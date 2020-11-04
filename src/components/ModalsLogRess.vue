<template>
<div>
  <b-modal  hide-footer  id="modalRegist" title="Sign Up"   >
    <form class="login-form text-center " @submit.prevent="onRegister">
            <input type="email"
            v-model="form.email"
              class="form-control"
              placeholder="Email"
              required
            />
            <input
              v-model="form.password"
              type="password"
              class="mt-2 form-control"
              placeholder="Password"
              required
            />
            <div class="forgot-link d-flex align-items-center">
              <small class="mt-2 form-check">
                <input type="checkbox" class="form-check-input" id="checkout" required/>
                <label  for="checkout">
                  Accept term and Conditions</label
                >
              </small>
              <small class="text-primary ml-auto text-decoration-none h7"
                 @click="$bvModal.show('modalForgot'),$bvModal.hide('modalRegist')"  style="cursor:pointer; font-size:13px;">Forgot Password?</small
              >
            </div>
            <button
              type="submit"
              class="border-0 login btn btn-block btn-primary mt-3"

            >
              Sign Up
            </button>
            <p class="mt-2">
              <small
                >Already have account? </small>
                <a class="ml-auto text-decoration-none h7"
                 style="cursor:pointer; font-size:13px;">Sign In</a
              >
            </p>
          </form>
  </b-modal>
  <b-modal  hide-footer  id="modalForgot" title="Forgot Password"   >
    <form class="login-form text-center " @submit.prevent="onForgotPass">
            <input type="email"
            v-model="form.email"
              class="form-control"
              placeholder="Email"
              required
            />
            <button
              type="submit"
              class="border-0 login btn btn-block btn-primary mt-3"

            >
              Send
            </button>
            <p class="mt-2">
              <small
                >Remember password? </small>
                <small @click="$bvModal.hide('modalForgot')" class="text-primary ml-auto text-decoration-none h7"
                 style="cursor:pointer; font-size:13px;">Sign In</small
              >
            </p>
          </form>
  </b-modal>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      resetPassword: 'auth/resetPassword',
      actionRegister: 'auth/register'
    }),
    onForgotPass () {
      this.resetPassword(this.form.email)
        .then((response) => {
          if (response === 'Check your email to reset password') {
            this.$bvModal.hide('modalForgot')
            Swal.fire(
              'Success',
            `${response}`,
            'success'
            )
          } else {
            Swal.fire(
              'Ups..',
              `${response}`,
              'question'
            )
          }
        })
        .catch((err) => {
          alert(err)
        })
    },
    onRegister () {
      this.actionRegister(this.form)
        .then((response) => {
          if (response === 'Register success, please check your email for activation') {
            this.$bvModal.hide('modalRegist')
            Swal.fire(
              'Success',
            `${response}`,
            'success'
            )
          } else {
            Swal.fire(
              'Ups..',
              `${response}`,
              'question'
            )
          }
        })
        .catch((err) => {
          alert(err)
        })
    }

  }
}
</script>

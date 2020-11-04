// mixins
const abouts = {
  data () {
    return {
      modalsInsert: true,
      navbar: true,
      cart: [],
      allMenu: false,
      nameproduk: null,
      price: null,
      image: null,
      id_category: null
    }
  },
  // costume directives di login navbar
  directives: {
    backgroundColour: {
      bind: (elemen, binding) => {
        elemen.style.backgroundColor = binding.value
      }
    }
  }
  // custom directives
}

export default abouts

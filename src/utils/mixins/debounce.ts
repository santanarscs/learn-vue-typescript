export default {
  data() {
    return {
      timeout: ''
    }
  },
  methods: {
    debounce(func: any, wait = 1000){
      clearTimeout(this.timeout)
      this.timeout = setTimeout(func, wait)
    }
  }
}
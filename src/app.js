import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currency: []
    },
    mounted(){
      this.fetchExchangeRates();
    },
    methods: {
      fetchExchangeRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => console.log(data))
        // .then(data => this.currency = data)
      }
    }
  })
})

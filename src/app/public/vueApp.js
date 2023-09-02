const { createApp, ref } = Vue

  createApp({
    setup() {
      //const message = ref('Hello vue!')
      marcDataInput = ref('')
      return {
        //message
        marcDataInput
      }
    },
    methods: {
        copyDataToClipboard() {
            console.log("This methods will add data to clip board when I add the web native clipboard API!")
        }
    }
  }).mount('#app')
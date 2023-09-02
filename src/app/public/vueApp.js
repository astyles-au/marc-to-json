const { createApp, ref } = Vue

  createApp({
    setup() {
      //const message = ref('Hello vue!')
      marcDataInput = ref('')
      return {
        //message
        marcDataInput
      }
    }
  }).mount('#app')
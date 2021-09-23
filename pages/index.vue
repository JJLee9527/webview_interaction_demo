<template>
  <div class="w-screen h-screen bg-white fixed top-0 left-0">
    <div class="loading-animation " style="margin: 40px auto 20px;width: fit-content;">
      <div
        v-gsap.to="{
          rotation: 720,
          duration: 4,
          ease: 'elastic.inOut(1, 0.3)',
        }"
        class=""
        style="background-color: blue; border-radius: 8px; width: 40px; height: 40px"
      ></div>
    </div>
    <div class="messages w-72 mx-auto text-center whitespace-pre-line" style="text-align:center">
      <p>Current OS: {{ currentOS }}</p>
      <p>{{ message }}</p>
      <p class="">{{functionMessage}}</p>
    </div>
    <input v-model="transactionId" class="w-full rounded-md border-2 border-gray-600 focus:border-gray-900" type="number" placeholder="測試用 transactionId 輸入處" style="height: 40px; border-color: #ddd; margin: 0 auto 20px;">

    <!-- Buttons -->
    <section>
      <div class="wrapper " style="display: grid; grid-template-columns: repeat(2,1fr); gap: 16px">
        <button class="" @click="$shareMessage('分享文字分享文字')">分享文字</button>
        <button class="" @click="onGetPayloadClicked()">取得Payload</button>
        <button class="" @click="$getLocation()">getLocation</button>
        <button class="" @click="onPutLocationClicked()">putLocation</button>
        <button class="" @click="$startPayment('tid'+transactionId)">開啟支付</button>
        <button class="" @click="$closeWebView()">關閉Webview</button>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components: {},
  data() {
    return {
      pxpayToken: '',
      message: '',
      functionMessage: '',
      transactionId: ''
    }
  },
  computed:{
    ...mapState(['currentOS'])
  },
  created() {

  },
  mounted(){
    this.$getCurrentOS()
  },

  methods: {
    onGetPayloadClicked(){
      this.$getPayload().then(response=>{
        this.functionMessage = response
      })
    },
    onPutLocationClicked(){
      this.$putLocation(response=>{
        this.functionMessage = response
      })
    }
  },
}
</script>

<style scope>
button{
  background: white;
  border: 2px solid #ccc;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
}
</style>

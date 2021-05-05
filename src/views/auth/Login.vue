<template>
  <div class="container">
    <div class="w-full lg:w-1/3">
      <div class="border rounded-lg overflow-hidden">
        <div class="bg-gray-50 py-4 px-4 border-b border-gray-200">
          Login
        </div>
        <div class="p-4">
          <form @submit.prevent="login">
            <div class="mb-5">
              <label for="email" class="text-xs uppercase font-medium block mb-2">
                Email
              </label>
              <input type="email" v-model="credential.email" id="email" name="email" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
            </div>
            <div class="mb-5">
              <label for="password" class="text-xs uppercase font-medium block mb-2">
                Password
              </label>
              <input type="password" v-model="credential.password" id="password" name="password" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
            </div>
            <button class="bg-blue-500 hover:bg-blue-600 px-4 h-10 rounded-lg focus:ring focus:ring-blue-300 text-white">
              Login
            </button>            
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive } from 'vue'

export default {
  setup() {
    const credential = reactive({
      email: '',
      password: ''
    })

    const login = async () => {
      // console.log('abc');
      await axios.get('sanctum/csrf-cookie')
      await axios.post('login', credential)

      let response = await axios.get('api/me')
      console.log(response.data);
    }
    return { login, credential }
  }
}
</script>

<style>

</style>
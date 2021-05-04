<template>
  <Navbar/>
  <div class="mt-8"></div>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }

}
</script>

<style>

</style>
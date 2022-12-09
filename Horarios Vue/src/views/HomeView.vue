<template>
  <div class="home">
    <PaginaPrincipal msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PaginaPrincipal from '@/components/PaginaPrincipal.vue'

export default {
  name: 'PaginaPrincipalView',
  components: {
    PaginaPrincipal
}
}
</script>
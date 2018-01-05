<template>
  <div>
    <h4>Count is {{ getCount }}{{getData}}</h4>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getCount',
        'getData'
      ])
    }
  }
</script>
<template>
  <div>
    <area-a/>
    <area-b/>
  </div>
</template>

<script>
import AreaA from '@/components/Store/AreaA'
import AreaB from '@/components/Store/AreaB'

export default {
  name: 'AppStore',
  components: {AreaB, AreaA}
}
</script>

<style scoped>

</style>

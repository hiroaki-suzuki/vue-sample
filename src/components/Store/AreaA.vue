<template>
  <div class="container">
    <h1>エリアA</h1>
    <div class="row">
      <div class="col-xs-4">
        <label for="area-a-item1">項目１</label>
        <input id="area-a-item1" v-x-model:change="areaA.text" type="text" class="form-control"/>
      </div>
      <div class="col-xs-4">
        <h3>エリアBの項目</h3>
        <ul>
          <li>{{ areaB.select }}</li>
          <li>{{ areaB.text }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaA',
  computed: {
    root() {
      return _.cloneDeep(this.$store.state.root)
    },
    areaA() {
      return this.root.areaA
    },
    areaB() {
      return this.root.areaB
    }
  }
}
</script>

<style scoped>

</style>

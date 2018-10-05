<template>
  <div class="container">
    <h1>エリアB</h1>
    <div class="row text-left">
      <div class="col-xs-4">
        <label for="area-b-item1">項目１</label>{{ areaB.item1 }}
        <select id="area-b-item1" v-x-model="areaB.select" class="form-control">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <div class="col-xs-4">
        <label for="area-b-item2">項目２</label>
        <input id="area-b-item2" v-x-model="areaB.text" type="text" class="form-control"/>
      </div>
      <div class="col-xs-4">
        <h3>見出し：{{ areaB.select }}</h3>
        <ul>
          <li v-for="(item, i) in areaB.itemArr" :key="i">{{ item }}</li>
        </ul>
        <h3>見出し：{{ areaB.text }}</h3>
        <h3>見出し(エリアA）：{{ areaA.text }}</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AreaB',
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
  li {
    list-style: none;
  }
</style>

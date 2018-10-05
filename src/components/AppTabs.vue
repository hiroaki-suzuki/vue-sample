<template>
  <div class="hello">
    <div>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li v-for="tab in tabs" :key="tab.no" :class="{ active: tab.isActive }" role="presentation">
          <a :href="'#tab' + tab.no" aria-controls="home" role="tab" data-toggle="tab">{{ tab.name }}</a>
        </li>
        <li role="presentation" :class="{ active : isNewActive}">
          <a href="#new" aria-controls="home" role="tab" @click="addNewTab">New</a>
        </li>
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
        <div v-for="tab in tabs" :key="tab.no" :class="{ active: tab.isActive }" :id="'tab' + tab.no" class="tab-pane" role="tabpanel">
          {{ tab.no + ' Sheet.'}}
        </div>
        <div :class="{ active: isNewActive }" role="tabpanel" class="tab-pane" id="new">New Sheet</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      tabs: [],
      isNewActive: {
        type: Boolean,
        default: true
      }
    }
  },
  methods: {
    addNewTab: function() {
      this.isNewActive = false
      this.tabs.forEach((tab) => {
        tab.isActive = false
      })

      let no = this.tabs.length
      this.tabs.push({
        no: no,
        name: `no.${no}`,
        isActive: true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>

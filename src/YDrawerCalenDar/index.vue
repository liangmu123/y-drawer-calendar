<template>
  <el-drawer
  v-model="drawer"
  :direction="direction"
  @open="handleOpen"
  :before-close="handleClose">
    <div class="drawer_body">
      <y-calendar
      v-model="curDate"
      @pick="handleDatePick"/>
    </div>
  </el-drawer>
</template>

<script>
import YCalendar from './YCalendar'
import ElDrawer from 'element-plus/lib/el-drawer'
import 'element-plus/lib/theme-chalk/el-drawer.css'
export default {
  name: 'YDrawerCalenDar',
  components: {
    YCalendar,
    ElDrawer
  },
  props: {
    modelValue: Boolean,
    defaultValue: {
      type: String
    }
  },
  watch: {
    modelValue: {
      handler (newVal) {
        this.drawer = newVal
      },
      immediate: true
    }
  },
  data () {
    return {
      direction: 'btt',
      curDate: '',
      drawer: false
    }
  },
  methods: {
    handleOpen () {
      this.curDate = this.defaultValue
    },
    handleClose (done) {
      done()
      this.$emit('update:model-value', false)
    },
    handleDatePick (date) {
      this.$emit('pick', date)
      this.$emit('update:model-value', false)
    }
  }
}
</script>

<style lang="scss">
.el-drawer {
  height: auto !important;
  .el-drawer__header {
    margin-bottom: 0;
  }
}
.drawer_body {
  padding: 20px 26px;
}
</style>
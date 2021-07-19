<template>
  <div>
    <YDrawerCalenDar
    @pick="pickDate"
    :default-value="defaultValue"
    v-model="drawer"/>
    <button @click="handleClick">出来啦</button>
  </div>
</template>

<script>
import YDrawerCalenDar from '../src/YDrawerCalenDar'

export default {
  components: {
    YDrawerCalenDar
  },
  data () {
    return {
      drawer: false,
      value: '',
      defaultValue: '2021/06/17',
    }
  },
  methods: {
    handleDatePick (date) {
      console.log(date)
      // this.parsedValue = dayjs['default'](date)
      // this.innerDate = dayjs['default'](date)
    },
    handleClick () {
      this.drawer = true
    },
    pickDate (date) {
      console.log(date)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

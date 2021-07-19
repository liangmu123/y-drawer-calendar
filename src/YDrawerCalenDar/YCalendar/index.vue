<template>
  <div class="y_calendar">
    <div class="y_calendar_header">
      <div class="y_calendar_header_prev">
        <i class="el-icon-d-arrow-left" @click="prevYear"></i>
        <i class="el-icon-arrow-left" @click="prevMonth"></i>
      </div>
      <div class="y_calendar_header_label">{{headerLabel}}</div>
      <div class="y_calendar_header_next">
        <i class="el-icon-arrow-right" @click="nextMonth"></i>
        <i class="el-icon-d-arrow-right" @click="nextYear"></i>
      </div>
    </div>
    <BasicDateTable
    :date="date"
    :parsed-value="curValue"
    @pick="handleDatePick"/>
  </div>
</template>

<script>
import BasicDateTable from './basicDateTable'
import 'element-plus/lib/theme-chalk/el-icon.css'
import 'element-plus/packages/theme-chalk/src/date-picker/date-table.scss'
import dayjs from 'dayjs'
export default {
  props: {
    modelValue: String
  },
  components: {
    BasicDateTable
  },
  watch: {
    modelValue: {
      handler (newVal) {
        if (newVal) {
          this.date = this.curValue = dayjs(newVal)
        }
      },
      immediate: true
    }
  },
  data () {
    return {
      curValue: dayjs(),
      date: dayjs()
    }
  },
  computed: {
    headerLabel () {
      return this.date.format('YYYY年MM月DD日')
    }
  },
  methods: {
    // 点击日期
    handleDatePick (value) {
      this.curValue = value
      let formatValue = value.format('YYYY/MM/DD')
      this.$emit('update:model-value', formatValue)
      this.$emit('pick', formatValue)
    },
    prevYear () {
      this.date = this.date.subtract(1, 'year')
    },
    prevMonth () {
      this.date = this.date.subtract(1, 'month')
    },
    nextMonth () {
      this.date = this.date.add(1, 'month')
    },
    nextYear () {
      this.date = this.date.add(1, 'year')
    }
  }
}
</script>

<style scoped lang="scss">
.y_calendar {
  &_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    &_prev,
    &_next {
      > i {
        cursor: pointer;
        &:first-child {
          margin-right: 20px;
        }
      }
    }
    &_label {
      cursor: pointer;
    }
  }
  .el-date-table {
    width: 100%;
  }
}
</style>
<template>
  <div>
    <tool-breadcrumbs :toolId="1"/>
    <v-sheet color="white" rounded class="pa-4 ma-4">
      <div class="text-h6 mb-4">时间戳转换</div>
      <div class="d-flex align-center mb-4">
        <span class="mr-4">精度: </span>
        <v-radio-group v-model="timeUnit" inline hide-details>
          <v-radio class="mr-4" :label="milliSecondsUnit" :value="milliSecondsUnit"></v-radio>
          <v-radio :label="secondsUnit" :value="secondsUnit"></v-radio>
        </v-radio-group>
      </div>
      <div class="d-flex align-center mb-4">
        <span class="mr-4">时区: </span>
        <v-radio-group v-model="timeZone" inline hide-details>
          <v-radio class="mr-4" :label="utcZone" :value="utcZone"></v-radio>
          <v-radio :label="shanghaiZone" :value="shanghaiZone"></v-radio>
        </v-radio-group>
      </div>
      <div class="d-flex align-center flex-wrap">
        <span>当前时间戳：</span>
        <span class="mr-4">{{ timestampDisplay }}</span>
        <span>当前日期：</span>
        <span class="mr-4">{{ dateStr }}</span>
        <span class="mr-2">控制：</span>
        <span style="width: 50px;">
          <v-switch v-model="runningState" color="success" hide-details
            @update:modelValue="onRunningStateSwitchClicked"></v-switch>
        </span>
        <span style="width: 100px;">
          <v-btn v-if="!runningState" color="primary" size="small" variant="outlined" append-icon="mdi-refresh"
            @click="onRefreshBtnClicked">刷新</v-btn>
        </span>
      </div>
      <v-alert type="info" title="提示" density="compact" class="mt-2">
        <template #text>
          日期格式为：yyyy-MM-dd HH:mm:ss，例如: 1970-01-01 00:00:00
        </template>
      </v-alert>
      <div>
        <div class="text-subtitle-1 font-weight-bold my-4">时间戳转日期</div>
        <div class="d-flex align-start flex-wrap">
          <span style="width: 300px;">
            <v-text-field v-model="form1.timestamp" label="时间戳" variant="underlined" clearable />
          </span>
          <span style="width: 100px;" class="mr-4">
            <v-select v-model="form1.timeUnit" variant="underlined" density="compact"
              :items="[milliSecondsUnit, secondsUnit]" />
          </span>
          <v-btn color="primary" variant="outlined" class="mr-4 mt-1" append-icon="mdi-chevron-right"
            @click="onTransformBtn1Clicked">
            转换
          </v-btn>
          <span style="width: 300px;">
            <v-text-field v-model="form1.dateStr" label="日期" variant="underlined" clearable />
          </span>
          <span style="width: 170px;" class="mr-4">
            <v-select v-model="form1.timeZone" variant="underlined" :items="[utcZone, shanghaiZone]" />
          </span>
        </div>
      </div>
      <div>
        <div class="text-subtitle-1 font-weight-bold my-4">日期转时间戳</div>
        <div class="d-flex align-start flex-wrap">
          <span style="width: 300px;">
            <v-text-field v-model="form2.dateStr" label="日期" variant="underlined" clearable />
          </span>
          <span style="width: 170px;" class="mr-4">
            <v-select v-model="form2.timeZone" variant="underlined" :items="[utcZone, shanghaiZone]" />
          </span>
          <v-btn color="primary" variant="outlined" class="mr-4 mt-1" append-icon="mdi-chevron-right"
            @click="onTransformBtn2Clicked">转换</v-btn>
          <span style="width: 300px;">
            <v-text-field v-model="form2.timestamp" label="时间戳" variant="underlined" clearable />
          </span>
          <span style="width: 100px;">
            <v-select v-model="form2.timeUnit" variant="underlined" :items="[milliSecondsUnit, secondsUnit]" />
          </span>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount, reactive } from 'vue'
import { DateTime } from 'luxon'
import ToolBreadcrumbs from '@/components/ToolBreadcrumbs.vue'

const milliSecondsUnit = '毫秒'
const secondsUnit = '秒'
const utcZone = 'UTC'
const shanghaiZone = 'Asia/Shanghai'

const currentTimestamp = ref(null)
const timeUnit = ref(milliSecondsUnit)
const timeZone = ref(utcZone)
const intervalId = ref(null)
const runningState = ref(true)

const form1 = reactive({
  timestamp: null,
  timeUnit: milliSecondsUnit,
  dateStr: null,
  timeZone: utcZone,
})

const form2 = reactive({
  timestamp: null,
  timeUnit: milliSecondsUnit,
  dateStr: null,
  timeZone: utcZone,
})

const timestampDisplay = computed(() => {
  return timeUnit.value === milliSecondsUnit ? currentTimestamp.value : parseInt((currentTimestamp.value ?? 0) / 1000)
})

const dateStr = computed(() => {
  return formatDate(currentTimestamp.value, milliSecondsUnit, timeZone.value)
})

const formatDate = (timestamp, timeUnit, timeZone) => {
  timestamp = Number(timestamp)
  let dateTime;
  if (timeUnit === secondsUnit) {
    dateTime = DateTime.fromSeconds(timestamp)
  } else {
    dateTime = DateTime.fromMillis(timestamp)
  }
  return dateTime.setZone(timeZone).toFormat('yyyy-LL-dd HH:mm:ss')
}

const switchRunningState = () => {
  if (runningState.value) {
    startTimeInterval()
  } else {
    clearTimeInterval()
  }
}

const startTimeInterval = () => {
  //防止存在旧的interval
  clearInterval()
  intervalId.value = setInterval(() => {
    currentTimestamp.value = Date.now()
  }, 1000);
}

const clearTimeInterval = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

const onRunningStateSwitchClicked = () => {
  switchRunningState()
}

const onTransformBtn1Clicked = () => {
  form1.dateStr = formatDate(form1.timestamp, form1.timeUnit, form1.timeZone)
}

const onTransformBtn2Clicked = () => {
  let dateTime = DateTime.fromFormat(form2.dateStr, "yyyy-LL-dd HH:mm:ss", {
    zone: form2.timeZone
  })
  if (form2.timeUnit === secondsUnit) {
    form2.timestamp = dateTime.toSeconds()
  } else {
    form2.timestamp = dateTime.toMillis()
  }
}

const onRefreshBtnClicked = () => {
  currentTimestamp.value = Date.now()
}

currentTimestamp.value = Date.now()
form1.timestamp = currentTimestamp.value
form2.dateStr = formatDate(currentTimestamp.value, milliSecondsUnit, form2.timeZone)
startTimeInterval()

onBeforeUnmount(() => {
  clearTimeInterval()
})
</script>

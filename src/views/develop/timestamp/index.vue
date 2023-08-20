<template>    
<v-sheet color="white" rounded class="pa-4 ma-4">
    <div class="text-h6 mb-4">时间戳转换</div>
    <div class="d-flex align-center mb-4">
        <span class="mr-4">精度: </span>
        <v-radio-group
            v-model="timeUnit"
            inline
            density="compact"
            hide-details
         >
            <v-radio
                class="mr-4"
                :label="milliSecondsUnit"
                :value="milliSecondsUnit"
            ></v-radio>
            <v-radio
                :label="secondsUnit"
                :value="secondsUnit"
            ></v-radio>
        </v-radio-group>
    </div>
    <div class="d-flex align-center">
        <span>当前时间戳：</span>
        <span class="mr-4">{{ timestampDisplay }}</span>
        <v-switch
              v-model="runningState"
              color="success"
              hide-details
              density="compact"
              @update:modelValue="onRunningStateSwitchClicked"
            ></v-switch>
    </div>
    <div>
        <div class="text-subtitle-1 font-weight-bold my-4">时间戳转日期</div>
        <div class="d-flex align-center">
            <span>时间戳：</span>
            <span style="width: 200px;" class="mr-4">
                <v-text-field label="时间戳" density="compact" hide-details/>
            </span>
            <v-btn color="primary" class="mr-4">转换</v-btn>
            <span>日期：</span>
            <span style="width: 300px;">
                <v-text-field label="日期" density="compact" hide-details/>
            </span>
        </div>
    </div>
    <div>
        <div class="text-subtitle-1 font-weight-bold my-4">日期转时间戳</div>
        <div class="d-flex align-center">
            <span>日期：</span>
            <span style="width: 200px;" class="mr-4">
                <v-text-field label="日期" density="compact" hide-details/>
            </span>
            <v-btn color="primary" class="mr-4">转换</v-btn>
            <span>时间戳：</span>
            <span style="width: 300px;">
                <v-text-field label="时间戳" density="compact" hide-details/>
            </span>
        </div>
    </div>
</v-sheet>
</template>

<script setup>
import {ref, computed, onBeforeUnmount} from 'vue'
const milliSecondsUnit = '毫秒'
const secondsUnit = '秒'

const currentTimestamp = ref(null)
const timeUnit = ref(milliSecondsUnit)
const intervalId = ref(null)
const runningState = ref(true)

currentTimestamp.value = Date.now()

const timestampDisplay = computed(() => {
    return timeUnit.value === milliSecondsUnit ? currentTimestamp.value : parseInt((currentTimestamp.value ?? 0) / 1000)
})

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

startTimeInterval()

onBeforeUnmount(() => {
    clearTimeInterval()
})
</script>
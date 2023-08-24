<template>
<div>
  <tool-breadcrumbs :toolId="2"/>
  <v-sheet rounded color="white" class="ma-4 pa-4">
    <v-alert v-if="error" type="error" class="mb-4" closable>
      图片转换异常，请重新开始
    </v-alert>
    <v-alert type="info" class="mb-4" closable>
      所有转换工作将在您的机器通过浏览器完成。
    </v-alert>
    <div class="d-flex flex-column align-center">
      <div id="_dashboard"></div>
      <div class="mt-4 d-flex align-center" v-if="files.length > 0 && step !== STEP_PENDING_DOWNLOAD">
        <span class="mr-4">选择目标格式：</span>
        <span style="width: 100px;" class="mr-4">
          <v-select
            :items="['jpeg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'ico', 'jpg', 'jfif', 'pjpeg', 'pjp']"
            v-model="targetFormat" hide-details variant="underlined"/>
        </span>
        <v-btn v-if="step === STEP_PENDING_TRANSFORM" color="primary"
          variant="outlined" @click="onTransformBtnClicked"
          :loading="transformLoading"
        >执行转换</v-btn>
      </div>
    </div>
    <div class="mt-4 d-flex flex-column align-center" v-if="step === STEP_PENDING_DOWNLOAD">
      <v-icon class="mt-5 mb-10" icon="mdi-check-circle-outline" size="200" color="success"/>
      <div>
        <span>转换完成，点击下载zip文件：</span>
        <v-btn color="primary"
          variant="text" size="small"
          :loading="downloadLoading"
          @click="onDownloadBtnClicked"
        >
          下载
        </v-btn>
        <span class="mx-1">
          或者
        </span>
        <v-btn color="primary" variant="text" size="small" @click="onRestartBtnClicked">
          重新开始
        </v-btn>
      </div>
    </div>
  </v-sheet>
</div>
</template>


<script setup>
import {reactive, ref, onMounted} from 'vue'

import ToolBreadcrumbs from '@/components/ToolBreadcrumbs.vue'

import JSZip from 'JSZip'

import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import ImageEditor from '@uppy/image-editor';
import Chinese from '@uppy/locales/lib/zh_CN';

// Don't forget the CSS: core and UI components + plugins you are using
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/image-editor/dist/style.min.css';

const STEP_PENDING_TRANSFORM = 1
const STEP_PENDING_DOWNLOAD = 2

const files = reactive([])
const targetFiles = reactive([])
const editingFile = ref(null)
const error = ref(false)

const targetFormat = ref('jpeg')
const transformLoading = ref(false)
const step = ref(STEP_PENDING_TRANSFORM)
const downloadLoading = ref(false)

let uppy = null

const clearFiles = () => {
  uppy?.cancelAll()
  files.splice(0)
  targetFiles.splice(0)
}

const onTransformBtnClicked = () => {
  transformLoading.value = true
  document.getElementById("_dashboard").style.display = 'none'
  const transformPromises = []
  for (const file of files) {
    if (file.type === ('image/' + targetFormat.value)) {
      transformPromises.push(Promise.resolve({
        file,
        target: file,
        base64: false
      }))
      continue
    }
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const image = new Image()
        image.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          canvas.width = image.width
          canvas.height = image.height
          ctx.drawImage(image, 0, 0)
          const dataUrl = canvas.toDataURL('image/' + targetFormat.value)
          resolve({
            file: file,
            target: dataUrl.substring(dataUrl.indexOf(',') + 1),
            base64: true
          })
        }
        image.onerror = (e) => {
          reject(e)
        }
        image.src = event.target.result
      }
      reader.onerror = (e) => {
        reject(e)
      }
      reader.readAsDataURL(file)
    })
    transformPromises.push(promise)
  }
  Promise.allSettled(transformPromises).then(results => {
    for (let result of results) {
      if (result.status === 'rejected') {
        error.value = true
        break
      } else {
        targetFiles.push(result.value)
      }
    }
    transformLoading.value = false
    if (!error.value) {
      step.value = STEP_PENDING_DOWNLOAD
    } else {
      clearFiles()
    }
  })
}

const onDownloadBtnClicked = () => {
  downloadLoading.value = true
  const zip = new JSZip()
  const imgFolder = zip.folder("images")
  for (const targetFile of targetFiles) {
    let filename = targetFile.file.name
    const lastDotIndex = filename.lastIndexOf(".")
    if (lastDotIndex > 0) {
      filename = filename.substring(0, lastDotIndex + 1) + targetFormat.value
    }
    const options = targetFile.base64
      ? { base64: true}
      : {binary: true}
    imgFolder.file(filename, targetFile.target, options)
  }
  zip.generateAsync({type: 'blob'})
      .then((blob) => {
        downloadBlob(blob, 'images.zip')
        downloadLoading.value = false
      })
}

function downloadBlob(blob, filename) {
  // 创建临时链接
  var url = URL.createObjectURL(blob);

  // 创建一个下载链接
  var downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = filename;

  // 触发点击事件进行下载
  downloadLink.click();

  // 清理临时链接
  URL.revokeObjectURL(url);
}

const onRestartBtnClicked = () => {
  document.getElementById("_dashboard").style.display = 'block'
  clearFiles()
  step.value = STEP_PENDING_TRANSFORM
}

onMounted(() => {
  uppy = new Uppy({
      locale: Chinese,
      restrictions: {
        allowedFileTypes: ['image/*']
      }
    })
  .use(Dashboard, {target: '#_dashboard', inline: true, hideUploadButton: true})
  .use(ImageEditor, {target: Dashboard})
  uppy.on('file-added', (file) => {
      files.push(file.data)
  });
  uppy.on('file-removed', (file) => {
      const idx = files.indexOf(file.data)
      if (idx >= 0) {
        files.splice(idx, 1)
      }
  });

  uppy.on('file-editor:start', (file) => {
    editingFile.value = file.data
  });

  uppy.on('file-editor:complete', (updatedFile) => {
    updatedFile.data.name = editingFile.value.name
    files[files.indexOf(editingFile.value)] = updatedFile.data
    editingFile.value = null
  });
})
</script>

import { createView, resetView } from "./helpers.js"

const state = {
  files: [],
  addFile(files) {
    this.files.push(...files)
  },
  removeFile(id) {
    this.files = this.files.filter((_, idx) => idx !== id)
  },
  clearFiles() {
    this.files = []
  }
}

const dropzone = document.querySelector('.drop-zone')
const uploadInput = document.querySelector('[data-upload-input]')
const controls = document.querySelector('.controls')


uploadInput.addEventListener('change', onFileSelected)
controls.addEventListener('click', onFileRemove)

function onFileRemove() {
  resetView()
}

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault()
})

dropzone.addEventListener('drop', (e) => {
  e.preventDefault()
  console.log(e)
  const files = e.dataTransfer.files
  state.addFile(files)
  createView(files)
})

function onFileSelected({ target: { files } }) {
  createView(files)
  state.addFile(files)
}
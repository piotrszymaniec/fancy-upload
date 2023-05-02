import { createView, resetView } from "./helpers.js"

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
  const files = e.dataTransfer.files
  createView(files)
})

function onFileSelected({ target: { files } }) {
  createView(files)
}
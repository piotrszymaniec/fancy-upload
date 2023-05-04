
const $fancyUpload = document.querySelector('[data-fancyupload]')
const $dropzone = $fancyUpload.querySelector('[data-fancyupload-dropzone]')
const $downloadImg = $dropzone.querySelector('img')
const $uploadInput = $dropzone.querySelector('[data-fancyupload-input]')
const $uploadedContainer = $fancyUpload.querySelector('[data-fancyupload-container]')
const $controls = $fancyUpload.querySelector('[data-fancyupload-controls]')
const $removeFilesBtn = $controls.querySelector('[data-fancyupload-remove-files-btn]')

export { $fancyUpload, $dropzone, $downloadImg, $uploadInput, $uploadedContainer, $controls, $removeFilesBtn }
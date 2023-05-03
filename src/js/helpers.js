import { fileIcons, mimeIcons } from "./icons.js"

const $fancyUpload = document.querySelector('[data-fancyupload]')
const $uploadedContainer = $fancyUpload.querySelector('[data-fancyupload-container]')
const controls = $fancyUpload.querySelector('.controls')
const $downloadImg = $fancyUpload.querySelector('img')

function setUploadIconSuccess() {
  $downloadImg.src = 'assets/icons/file-upload-success.svg'
}
function resetUploadIcon() {
  $downloadImg.src = 'assets/icons/file-upload-icon.svg'
}

function createElement(htmlString, className) {
  const element = document.createElement('div')
  element.classList.add(className)
  element.innerHTML = htmlString
  return element
}


function chooseIconName(fileName, fileMimeType) {
  const fileExtension = fileName.split('.').pop()
  const isIconAvailable = fileIcons.includes(fileExtension)
  const fileType = fileMimeType.split('/')[0]
  const isMimeTypeIconAvailable = mimeIcons.includes(fileType)

  if (isIconAvailable) {
    return fileExtension
  } else if (isMimeTypeIconAvailable) {
    return `${fileType}-mime`
  }
  return 'unknown'
}

function formatBytes(bytes) {
  var units = ["bytes", "KB", "MB", "GB", "TB"];
  var i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  var num = Math.round(bytes * 100) / 100;
  return num.toString() + " " + units[i];
}

function createHtmlString({ name, size, type }) {
  return ` 
  <div class="file__type"><img src="./assets/icons/filetype/${chooseIconName(name, type)}.svg" alt="file type icon">
  </div>
  <div class="file__info">
    <div class="file__info__name">${name}</div>
    <div class="file__info__type">${type}</div>
    <div class="file__info__size">${formatBytes(size)}</div>
  </div>
  `
}

function showElement(element) {
  element.classList.remove('hidden')
}
function hideElement(element) {
  element.classList.add('hidden')
}

function createView(files) {
  const uploadedFileItemElements = [...files].map(file => createElement(createHtmlString(file), 'uploaded-file-item'))
  $uploadedContainer.append(...uploadedFileItemElements)
  setUploadIconSuccess()
  showElement(controls)
  showElement($uploadedContainer)
}

function resetView() {
  $uploadedContainer.innerHTML = ''
  resetUploadIcon()
  hideElement(controls)
  hideElement($uploadedContainer)
}

export { createView, resetView }
import { fileIcons, mimeIcons } from "./icons.js"

const $fancyUpload = document.querySelector('[data-fancyupload]')
const $uploadedContainer = $fancyUpload.querySelector('[data-fancyupload-container]')
const $controls = $fancyUpload.querySelector('[data-fancyupload-controls]')
const $uploadInput = $fancyUpload.querySelector('[data-fancyupload-input]')
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

function createUniqueFileList(fileList1, fileList2) {
  const filesAreEqual = (file1, file2) => {
    return file1.name === file2.name &&
      file1.size === file2.size &&
      file1.type === file2.type;
  }
  const arrayDoesNotContainFile = (file, fileArray) => !fileArray.some(f => filesAreEqual(f, file))
  const uniqueArray = []
  const fileArray1 = Array.from(fileList1);
  const fileArray2 = Array.from(fileList2);

  fileArray1.forEach((file) => {
    if (arrayDoesNotContainFile(file, fileArray2)) {
      uniqueArray.push(file)
    }
  })
  fileArray2.forEach((file) => {
    if (arrayDoesNotContainFile(file, uniqueArray)) {
      uniqueArray.push(file)
    }
  })
  const dataContainer = new DataTransfer()
  uniqueArray.forEach(file => dataContainer.items.add(file))
  return dataContainer.files
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
  var units = ["bytes", "KB", "MB", "GB"];
  var i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  var num = Math.round(bytes * 100) / 100;
  return num.toString() + " " + units[i];
}

function createFileItemElement({ name, size, type }, index) {
  const isEmpty = (str) => str === ''
  const htmlString = `
    <div class="file">
      <div class="file__icon"><img src="./assets/icons/filetype/${chooseIconName(name, type)}.svg" alt="file type icon"></div>
      <div class="file__info">
        <div class="file__info__name">${name}</div>
        <div class="file__info__type">${isEmpty(type) ? 'not available' : type}</div>
        <div class="file__info__size">${formatBytes(size)}</div>
      </div>
    </div>        
  `
  const fileItemElement = createElement(htmlString, 'uploaded-file-item')
  const removeBtn = createElement('', 'file__remove')
  removeBtn.addEventListener('click', () => {
    const files = Array.from($uploadInput.files)
    files.splice(index, 1)
    fileItemElement.remove()
  })
  fileItemElement.append(removeBtn)
  return fileItemElement
}

function showElement(element) {
  element.classList.remove('hidden')
}
function hideElement(element) {
  element.classList.add('hidden')
}

function clearFormInput() {
  $uploadInput.value = ''
}
function resetUploadedContainer() {
  $uploadedContainer.innerHTML = ''
  hideElement($uploadedContainer)
}

function createView(files) {
  const uploadedFileItemElements = [...files].map((file, index) => createFileItemElement(file, index))
  $uploadedContainer.append(...uploadedFileItemElements)
  setUploadIconSuccess()
  showElement($controls)
  showElement($uploadedContainer)
}

function resetView() {
  resetUploadedContainer()
  resetUploadIcon()
  hideElement($controls)
}

export { createView, clearFormInput, resetView, resetUploadedContainer, createUniqueFileList }
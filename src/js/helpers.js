import { fileIcons, mimeIcons } from "./icons.js"

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

function preventDroppingFilesOutsideDropzone() {
  window.addEventListener("dragover", (e) => {
    e.preventDefault()
    e.stopPropagation()

  })

  window.addEventListener('drop', (e) => {
    e.preventDefault()
    e.stopPropagation()
  })
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

export { formatBytes, chooseIconName, createUniqueFileList, preventDroppingFilesOutsideDropzone }
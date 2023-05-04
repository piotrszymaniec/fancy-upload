import { createUniqueFileList } from "./helpers.js"

const fileStorage = {
  data: new DataTransfer(),
  addFiles(fileList) {
    const mergedFileLists = createUniqueFileList(this.data.files, fileList)
    this.removeFiles()
    Array.from(mergedFileLists).forEach(file => this.data.items.add(file))
    return this.data.files
  },
  removeFiles() {
    this.data.items.clear()
  },
  removeFile(index) {
    this.data.items.remove(index)
  },
  isEmpty() {
    return this.data.files.length === 0
  }

}

export { fileStorage }
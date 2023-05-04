# Multiple file upload form

It shows well formated list of files after droping them on form area, or choosing them with built-in browser.
File details consists of file icon, name, its mime type, and size in human readable format.

Form features:
- drag and drop
- file listing with cute icons, size and  mime type (if available)
- removing files from input
- you can add as many files as you want! Form will not reset until you press "cancel" button resigning from upload
- simple file duplicate detection - if name, size and type are the same, files are considered duplicates

![fancyupload form layout](https://github.com/piotrszymaniec/fancy-upload/blob/master/fancy-upload-files.png?raw=true)

File icon is decided upon inspecting file **type** and **name** properties from **FileList** object of `<input type="file">` control.     

**Note**: Script assumes that file extension is compliant to its mime type.  
Some files does not include file.type property when uploaded via input, its mime type is missing so message "not available" is displayed instead.  
## Usage instruction
soon :)

---
### TODO
- [ ] Recognize file mime types that has empty file.type property, like **psd** or **woff**.
- [ ] Add form submition logic, and config for server endpoint
- [ ] Move to format suitable for easy usage

## Thanks
- whoever made this lovely icons set and uploaded it to https://www.svgrepo.com/collection/files-folders-5/
- nice wider dash border for file drop zone https://kovart.github.io/dashed-border-generator/
- FallingSky font - free for personal use https://www.ffonts.net/Falling-Sky-Condensed.font?text=filename

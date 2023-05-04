<div align="center">
<h1 align="center">Fancy multi file upload form</h1>
<img align=center" src="https://github.com/piotrszymaniec/fancy-upload/blob/master/fancy-upload-default.png" alt="fancyupload form layout" style="width: 653px;">
<img src="https://github.com/piotrszymaniec/fancy-upload/blob/master/fancy-upload-files.png" alt="fancyupload form layout" style="width: 453px;">
</div>

## ✨ Introduction
Fancy-upload is form component that enables you to easily track files added for upload.  
It also gives you extra capabilities which plain `<input type="file">` does not have. Below you will find a list.

1. Select files with Drag and drop.
2. Persisting files select (by default another file browsing erases previous selection).  
Files will stay listed in form until you decide to "cancel" upload.
3. List details that consists of file icon, name, its mime type and size in human readable format
4. Files can be removed one by one from form
5. Simple file duplicate detection - if name, size and type are the same, files are considered duplicates
  
    
## 🎉Demo
Check component demo [here](https://funny-moxie-9c3631.netlify.app/)

## Usage instruction
Soon 🕐 🙃

## 🛠 Built with
+ HTML
+ Drag and Drop and File API
+ CSS
+ Figma

### ⚙️ Technical notes
File icon is decided upon inspecting file **type** and **name** properties of **File** objects from `<input type="file">` control.     
Script assumes that file extension is compliant to its mime type.  
Some files does not include `type` property when uploaded via input, its mime type is missing so message "not available" is displayed instead.  

### ⏳ TODO
- [ ] Move to format suitable for easy usage
- [ ] Add summary listing file count and overal size of upload 
- [ ] Add form submition logic, and config for server endpoint
- [ ] Recognize file mime types that has empty file.type property, like **psd** or **woff**.


## 🙏 Thanks
- **Artem** for nice wider dash border used in file dropzone https://kovart.github.io/dashed-border-generator/
- **Robert Jablonski** for FallingSky font - https://www.fontspace.com/kineticplasma-fonts
- to someone who made lovely icon set found on https://www.svgrepo.com/collection/files-folders-5/ and inspired me to add few more :)
I really appreciate your work! (If you happen to know who did it, let me know!)

## ❓ Questions
For questions related to using form, you can [raise issue here](https://github.com/piotrszymaniec/fancy-upload/issues/new), or send me an email: [**piotr.szymaniec@gmail.com**](mailto:piotr.szymaniec@gmail.com). Also if you found any bugs or unexpected behavior let me know via issues.

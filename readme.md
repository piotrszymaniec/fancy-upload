# Multiple file upload form

It shows well formated list of files after droping them on form area, or choosing them with built-in browser.

Form features:
- drag and drop
- file listing with cute icons, size and  mime type (if available)
- removing files from input
- you can add as many files as you want! Form will not reset until you press "cancel" button resigning from upload

![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)

File icon is decided upon inspecting file **type** and **name** properties from **FileList** object of `<input type="file">` control.     

**Note**: Script assumes that file extension is compliant to its mime type.  
Some files does not include property of type when uploaded via input, so its mime type is missing.  
## How to use
soon :)

---
### TODO
- [ ] recognize file types that has missing mime types like **psd** or **woff** to name a few
- [ ] add form submition logic
- [ ] move to format suitable for external usageg

## Thanks
- whoever made this lovely icons set and uploaded it to https://www.svgrepo.com/collection/files-folders-5/
- nice wider dash border for file drop zone https://kovart.github.io/dashed-border-generator/
- FallingSky font - free for personal use https://www.ffonts.net/Falling-Sky-Condensed.font?text=filename
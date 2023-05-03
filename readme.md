# Multiple file upload form layout.
## file upload widget
![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)

Selected file(s) shows its details in pleasant looking format.
  
File icon is decided upon inspecting file **type** and **name** properties from **FileList** object of `<input type="file">` control.   
  
It checks if there is icon available for file extension, then if fist part of mime type is one of 'audio', 'video', 'image'. 
if there is no mime type or mime starts with 'application' 'unknown.svg' icon is choosen.

---

Modified and added several file icons:
  - js, ts, json, odt, ogg,  blank icon
  - audio, image, video (general files)

### TODO
- [ ] file size
- [ ] form submition logic
- [ ] removing selected file from uploaded list
- [ ] more file icons

## Thanks
- whoever made this lovely file icons and uploaded it to https://www.svgrepo.com/collection/files-folders-5/
- nice wider dash in file drop zone https://kovart.github.io/dashed-border-generator/
- FallingSky font - free for personal use https://www.ffonts.net/Falling-Sky-Condensed.font?text=filename
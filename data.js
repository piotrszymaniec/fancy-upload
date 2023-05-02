const fileIcons = ['ai-file-icon.svg',
  'avi-file-icon.svg',
  'css-file-icon.svg',
  'doc-file-icon.svg',
  'eml-file-icon.svg',
  'exe-file-icon.svg',
  'gif-file-icon.svg',
  'html-file-icon.svg',
  'jpg-file-icon.svg',
  'js-file-icon.svg',
  'mov-file-icon.svg',
  'mp3-file-icon.svg',
  'mpg-file-icon.svg',
  'ogg-file-icon.svg',
  'pdf-file-icon.svg',
  'ppt-file-icon.svg',
  'psd-file-icon.svg',
  'rar-file-icon.svg',
  'ts-file-icon.svg',
  'txt-file-icon.svg',
  'unknown-file-icon.svg',
  'wav-file-icon.svg',
  'xls-file-icon.svg',
  'zip-file-icon.svg'
]

export { fileIcons }

const mimeToIconMap = {
  image: '',
  video: '',
  audio: '',     
}
//plik wczytany
  //name
  //type
  //size

  //kandydat na rozszerzenie
  //oddzielasz ostatni element po kropce

  //wybranie ikonki
  //rozszerzenie nie znajduje sie w tablicy dostepnych ikonek
  
  //patrze na pierwszy czlon typ mime
  //jesli audio image albo video to uzywam domyslnych ikonek
  //jesli
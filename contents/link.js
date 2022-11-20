
link1 = `
${startBox}
   ${title}
   3d Catkatwu logo
   ${end}

   ${link}
   https://actwu.github.io/cat   
   ${endlink}
  ${endBox}
`


link2 = `
${startBox}
   ${title}
   Goal App I made
   ${end}
   https://actwu.github.io/todo/ 
   ${link} 
   ${endlink}
  ${endBox}
`

link3 = `
${startBox}
   ${title}
   Fonts i Use
   ${end}

   ${link}
   https://fonts.google.com/download?family=Montserrat|Pacifico|Lato|Press+Start+2|Comfortaa
   ${endlink}
  ${endBox}
`

link4 = `
${startBox}
   ${title}
   Atstem
   ${end}

   ${content}
   Social Media i made
   ${end}

   ${link}
   https://atstem.web.app
   ${endlink}
  ${endBox}
`




linkSect.innerHTML = [

  link1
  +

  link2
  +

  link3
  +

  link4
  
  ]
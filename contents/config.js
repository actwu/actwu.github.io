
postSect = document.getElementById("post");
linkSect = document.getElementById("link");

startBox = `
<hr class="grey"></hr>
<div class="hero quick">
`
endBox = `
</div>


`
title='<p class="big bold caps white">';
subtitle='<p class="bold mont white">';
content='<p class="white">';
url='<p class="blue white">';

link=`
<span class="left">
<a href="`;

endlink = `
" class="btn prim space-x small-my">
<i class="fa-solid fa-arrow-up-right-from-square white"></i>
<txt class="comfort white-txt bold">
Open
</txt>
</a>
</span>
`

mainpage=`
<span class="left">
<a onclick="page1()" class="btn blue space-x land small-my">
<i class="fa-solid fa-arrow-up-right-from-square white"></i>
<txt class="comfort white-txt bold">
Main Page
</txt>
</a>
</span>
`

linkpage=`
<span class="left">
<a onclick="page2()" class="btn blue space-x land small-my">
<i class="fa-solid fa-arrow-up-right-from-square white"></i>
<txt class="comfort white-txt bold">
Link Page
</txt>
</a>
</span>
`

scrollico=`
<span class="item mobile-ui">
<i class="fa-solid fa-chevron-down grey"></i>
</span>
`

end = "</p>"


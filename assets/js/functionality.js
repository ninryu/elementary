for(var btns=document.querySelectorAll("#right > div"),queryBar=document.querySelector("#left input"),i=0;i<btns.length;i++)btns[i].addEventListener("click",function(e){document.querySelector("#right > .active").classList.remove("active"),this.classList+="active",document.querySelector("#left > .active").classList.remove("active"),document.querySelector("#left > #"+this.getAttribute("id")+"-content").classList+="active"},!1);document.onkeyup=function(e){if(e.shiftKey&&49==e.keyCode){var t=document.querySelector("#right > .active");"search"!==t.getAttribute("id")&&(t.classList.remove("active"),document.querySelector("#right > #search").classList+="active",document.querySelector("#left > .active").classList.remove("active"),document.querySelector("#left > #search-content").classList+="active"),queryBar.focus()}},queryBar.onkeydown=function(e){"Enter"==e.key&&(0!=this.value.indexOf("http")?window.location.href="https://duckduckgo.com/?q="+this.value:window.location.href=this.value)};
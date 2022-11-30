

/*** ico - github codepen ***/

function icoAdd() {
  let icoWrap = document.querySelectorAll('.share');

  if(icoWrap.length > 0){
    for(iWrapNum= 0 ; iWrapNum < icoWrap.length ; iWrapNum++){
      icoEl(icoWrap[iWrapNum]);
    }
  }
  function icoEl(icoWrap){
    let icoBtn = icoWrap.querySelectorAll('.ico');
    icoBtn.forEach(function(iEl,iIn){
      if(iEl.className.indexOf("github") > 0){
        iEl.innerHTML = icoSvgAdd("github");
      }else if(iEl.className.indexOf("codepen")){
        iEl.innerHTML = icoSvgAdd("codepen");
      }
    })
  }
}
icoAdd();


function icoSvgAdd(icoChk){
  let addSvg;
  switch (icoChk) {
    case "github":
      addSvg = `<svg viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>`;
      break;
    case "codepen":
      addSvg = `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg>`;
      break;
    default:
      addSvg = "";
  }
  return addSvg;
} 

/*** Unit Testing ***/

// DOM객체. addEventListener(이벤트명, 실행할 함수명, 옵션)
function jsClick(){
  let jsEvent = document.querySelector('.js-click'),
      clickThis = jsEvent.querySelectorAll('.btn'),
      previewAction = jsEvent.querySelector('.preview-action');

  clickThis.forEach(function(el,index){
    el.addEventListener("click",baseClick);
  });

  function baseClick(e){
    previewAction.innerText = "click";
    setTimeout(function(){
      previewAction.innerText="";
    },1000);
  }
}
jsClick(); // js

function jqueryClick(_el,_parent){
  let jqueryEvent = $('.jquery-click'),
      clickThis = jqueryEvent.find('.btn')
      previewAction = jqueryEvent.find('.preview-action');
    clickThis.on("click", function(){
    previewAction.text("click");
    setTimeout(function(){
      previewAction.text("");
    },1000);
    return false;
  });
}
jqueryClick();
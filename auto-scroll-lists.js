<!-- Auto Scroll Layout Sections from Will-Myers.com -->
  (function(){
    let playInBackend = false,
        timing = 5,
        section = '[]', // specify which section: [data-section-id="xxxxxx"], [data-section-id="yyyyyy"]
        direction = 1; //1 = forwards, 0 = backwards

    /*Do not Adjust below this line*/
function AutoScrollLayout(e){e=""==e?document.querySelector(".user-items-list-section"):document.querySelector(e);let t,n,o,i,c,r=!1,s=e.querySelectorAll('button[class*="__arrow-button"]');function d(){t=setInterval(u,n)}function u(){o=document.querySelector("body.sqs-edit-mode-active"),i=document.querySelector(".sqs-modal-lightbox-open"),r||o||i||!c||s[direction].click()}n=1e3*timing;if(document.addEventListener("visibilitychange",function(){r=!!document.hidden}),["mousedown","touchstart"].forEach(t=>{e.addEventListener(t,function(){r=!0})}),["mouseup","touchend"].forEach(n=>{e.addEventListener(n,function(){r=!1,clearInterval(t),d()})}),window.IntersectionObserver){new IntersectionObserver((e,t)=>{e.forEach(e=>{c=!!e.isIntersecting})},{rootMargin:"-75px 0px -75px 0px"}).observe(e)}s[direction]&&d()}window.addEventListener("load",function(){let e=new Array;e.push(section),section.includes(",")&&(e=section.split(",")),e.forEach(e=>{(window.top==window.self||window.top!==window.self&&playInBackend)&&new AutoScrollLayout(e)})});
  }());

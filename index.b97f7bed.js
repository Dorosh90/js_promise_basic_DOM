var e=document.querySelector(".logo"),n=new Promise(function(n,t){e.addEventListener("click",function(){n("Promise was resolved!")})}),t=new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)});function o(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");n?t.classList.add("message"):t.classList.add("message","error-message"),t.textContent=e,document.body.appendChild(t)}n.then(function(e){return o(e,!0)}),t.catch(function(e){return o(e)});
//# sourceMappingURL=index.b97f7bed.js.map

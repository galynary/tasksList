!function(){var t=document.querySelector(".task__list"),e=document.querySelector(".btn__task-create"),a=JSON.parse(localStorage.getItem("tasks"))||[];function n(e){var n=document.createElement("li");n.classList.add("task__item"),n.dataset.id=e.id,n.innerHTML='\n  <div class="task__text">\n    <textarea class="task__text-name" placeholder="Введіть завдання">'.concat(e.name,'</textarea>\n  </div>\n  <div class="task">\n    <div class="task__time-inner">\n      <div class="task__time">\n        <input\n          type="datetime-local"\n          name="datime"\n          min="2024-06-30T00:00"\n          max="2035-06-30T00:00"\n          value="').concat(e.time,'" class="task__text-input"\n        />\n        <label for="task__text" class="task__label">Введіть дату виконання</label>\n      </div>\n      <div class="task__time-left">\n        <span class="countdown">').concat(e.timeLeft||"",'</span>\n        <label for="task__text" class="time-left__label"> до завершення залишилося</label>\n      </div>\n    </div>\n    <div class="task__buttons">\n      <button type="button" class="task__save button">Зберегти</button>\n      <button type="button" class="task__delete button">Видалити</button>\n    </div>\n  </div>'),t.append(n),n.querySelector(".task__save").addEventListener("click",(function(){return function(t){var e=t.querySelector(".task__text-name").value;if(""===e)return void alert("Спочатку введіть своє завдання!!!");var n=parseInt(t.dataset.id),s=a.find((function(t){return t.id===n}));s&&(s.name=e,localStorage.setItem("tasks",JSON.stringify(a)))}(n)})),n.querySelector(".task__delete").addEventListener("click",s);var l=n.querySelector(".task__time input");l.addEventListener("input",(function(t){var e=parseInt(n.dataset.id),s=a.find((function(t){return t.id===e}));s&&(s.time=l.value,localStorage.setItem("tasks",JSON.stringify(a)),i(n,s.time,s))})),e.time&&i(n,e.time,e)}function s(e){var n=e.target.closest("li"),s=parseInt(n.dataset.id),i=a.findIndex((function(t){return t.id===s}));-1!==i&&(a.splice(i,1),t.removeChild(n),localStorage.setItem("tasks",JSON.stringify(a)),a.forEach((function(e,a){e.id=a+1;var n=t.querySelector('[data-id="'.concat(a+1,'"]'));n&&(n.dataset.id=e.id)})),localStorage.setItem("tasks",JSON.stringify(a)))}e.addEventListener("click",(function(){var t={id:a.length+1,name:"",time:"",timeLeft:""},e=a[a.length-1];a.length&&""===e.name.trim()?alert("Спочатку введіть своє завдання!!!"):(a.push(t),localStorage.setItem("tasks",JSON.stringify(a)),n(t))})),a.forEach(n);var i=function(t,e,n){var s=t.querySelector(".countdown"),i=document.querySelector(".time-left__label"),l=function(){var t=(new Date).getTime(),l=new Date(e).getTime()-t;if(l>0){i.style.display="block";var o=Math.floor(l/864e5),c=Math.floor(l%864e5/36e5),d=Math.floor(l%36e5/6e4),u=Math.floor(l%6e4/1e3),m="".concat(o,"д ").concat(c,"г ").concat(d,"хв ").concat(u,"сек");s.textContent=m,n.timeLeft=m,localStorage.setItem("tasks",JSON.stringify(a))}else clearInterval(r),s.textContent="Термін вичерпано",n.timeLeft="Термін вичерпано",localStorage.setItem("tasks",JSON.stringify(a))};l();var r=setInterval(l,1e3)}}();
//# sourceMappingURL=index.a68d66e7.js.map

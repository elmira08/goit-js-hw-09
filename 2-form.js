import"./assets/styles-Cdwlhs9L.js";const o="feedback-form-state";let l={email:"",message:""};const t=document.querySelector(".feedback-form");m();t.addEventListener("input",s);t.addEventListener("submit",r);function s(a){const{name:e,value:n}=a.target;l[e]=n.trim(),localStorage.setItem(o,JSON.stringify(l))}function m(){const a=localStorage.getItem(o);if(a){l=JSON.parse(a);for(const[e,n]of Object.entries(l))t.elements[e]&&(t.elements[e].value=n)}}function r(a){a.preventDefault();const e=t.elements.email.value.trim(),n=t.elements.message.value.trim();if(!e||!n){alert("Please fill in both fields");return}console.log({email:e,message:n}),localStorage.removeItem(o),l={email:"",message:""},t.reset()}
//# sourceMappingURL=2-form.js.map

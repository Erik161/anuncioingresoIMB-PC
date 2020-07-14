const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



function usrpas(){
  if(document.form1.txt.value=="cole" && document.form1.num.value=="edu"){window.location="formadmin.html"}

  else{alert('¡Error al ingresar Usuario o Contraseña!');
  document.form1.txt.focus();}
  }
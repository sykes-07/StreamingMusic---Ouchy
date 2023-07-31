
if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "../pages/login.html";
  }
  
  
  
  
function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuarioLogado");
    window.location.href = "../pages/login.html";
  }
  
  
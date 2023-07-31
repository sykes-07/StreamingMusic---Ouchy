let nome = document.querySelector('#nome');
let validNome = false

let email = document.querySelector('#email');
let validEmail = false

let senha = document.querySelector('#senha');
let validSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha');
let validConfirmSenha = false

let msgError = document.querySelector('#msgErrorCadastro');
let msgSucesso = document.querySelector('#msgSucessoCadastro');

let botao = document.getElementById('meuBotao');

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){    
      nome.setAttribute('style', 'border-color: red')
      validNome = false
    } else {
      nome.setAttribute('style', 'border-color: rgb(16, 229, 38) ')
      validNome = true
    }
  })

 email.addEventListener('keyup', () => {
    if(email.value.length <= 4){
      email.setAttribute('style', 'border-color: red')
      validEmail = false
    } else {    
      email.setAttribute('style', 'border-color: rgb(16, 229, 38) ')
      validEmail = true
    }
  })
  
  senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
      senha.setAttribute('style', 'border-color: red')
      validSenha = false
    } else {
      senha.setAttribute('style', 'border-color: rgb(16, 229, 38) ')
      validSenha = true
    }
  })
  
  confirmarSenha.addEventListener('keyup', () => {
    if(senha.value != confirmarSenha.value){
      confirmarSenha.setAttribute('style', 'border-color: red')
      validConfirmSenha = false
    } else {
      confirmarSenha.setAttribute('style', 'border-color: rgb(16, 229, 38) ')
      validConfirmSenha = true
    }
  })

function cadastrar(){
    if(validNome && validEmail && validSenha && validConfirmSenha){
      let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')

      listaUsuario.push(
        {
          nomeCadastrado: nome.value,
          emailCadastrado: email.value,
          senhaCadastrado: senha.value
        }
        )

      localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))


      alert("Usuario Cadastrado! Faça Login!")
      
    } else{
      alert('Preencha todos os campos corretamente antes de cadastrar')
    }
}

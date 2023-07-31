function entrar(){
    let email = document.querySelector('#email');
    let senha = document.querySelector('#senha');


    let listaUsuario = []

    let usuarioValidado = {
        nome:' undefined',
        email:'undefined',
        senha: 'undefined',

    }


    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario')) 
    listaUsuario.forEach((item) => {
        if(email.value == item.emailCadastrado && senha.value == item.senhaCadastrado){
           
          usuarioValidado= {
             nome: item.nomeCadastrado,
             email: item.emailCadastrado,
             senha: item.senhaCadastrado    
           }
          
        }
      })



      if(email.value == usuarioValidado.email && senha.value == usuarioValidado.senha){
        window.location.href = '../pages/index.html'

        let token = Math.random().toString(16).substring(2)
        console.log(token)
        localStorage.setItem('token', token)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValidado))
        alert("Bem Vindo!")
        
    

    }

    else{
        alert("Email ou Senha estão errado!")
    }
    
}
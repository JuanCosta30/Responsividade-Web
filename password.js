  
  const password = document.querySelector('#password');
  const eyeicon = document.querySelector('.eyeicon');

  function visualizar(){
    let inputs = password.type === 'password';

    if(inputs){
      abrirpassword();
    }else{
      fecharpassword();
    }
  }

  function abrirpassword(){
    password.setAttribute('type','text');
    eyeicon.classList.remove("fa-eye");
    eyeicon.classList.add("fa-eye-slash");
  }

  function fecharpassword(){
    password.setAttribute('type','password');
    eyeicon.classList.remove("fa-eye-slash");
    eyeicon.classList.add("fa-eye");
  }

  
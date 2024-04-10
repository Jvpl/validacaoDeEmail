const inputValidar = document.querySelector('.validar__input');
const buttonValidar = document.querySelector('.validar__button');

buttonValidar.addEventListener('click', () => {
    validarEmail(inputValidar.value);
    inputValidar.value = '';
    
});

const validarEmail = (email) => {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValid = padrao.test(email);

    if(isValid === true){
        alert('email válido');
       
    }else{
        alert(' insira um endereço de email válido Ex:"usuario@dominio.com"');
    }
}


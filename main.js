const form = document.getElementById('validacao');
const A = document.getElementById('numeroA');
const B = document.getElementById('numeroB');
const messageSucesso = 'Sucesso!';
const messageErro = 'Tente Novamente!';
const containerMessageErro = document.querySelector('.messageError')
const containerMessageSucesso = document.querySelector('.messageSucess')

form.addEventListener('submit', function(e){
    e.preventDefault();


    if((B.value) > (A.value)) {
        containerMessageSucesso.innerHTML = messageSucesso;
        containerMessageSucesso.style.display = 'block';

        A.value = '';
        B.value = '';
        containerMessageErro.style.display = 'none';
    } 
    else {
        containerMessageErro.innerHTML = messageErro;
        containerMessageErro.style.display = 'block';

        A.value = '';
        B.value = '';
        containerMessageSucesso.style.display = 'none';
    }
})

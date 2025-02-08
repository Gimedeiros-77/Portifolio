
const sendMensage = document.getElementById('enviar_mensagem')

const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
})

function toggleMenu() {
    const nav  = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    
    } else{
        nav.style.display = 'none';
    }
}

document.getElementById("crono").addEventListener('click', function(){
    window.open("https://github.com/Gimedeiros-77/cronometro");
});

document.getElementById("linkedin").addEventListener('click', function(){
    window.open("https://www.linkedin.com/in/giovanni-santos-025425267/", "_blank");
});

document.getElementById("whatsapp").addEventListener('click', function(){
    window.open("https://wa.me/5517982016839?text=Ol%C3%A1%2C%20vi%20seu%20Portf%C3%B3lio...%20Poderiamos%20conversar%3F", "_blank");
});

document.getElementById("instagram").addEventListener('click', function(){
    window.open("https://www.instagram.com/gi_santosxs?igsh=dDltbWRubTEzdGM4&utm_source=qr", "_blank")
});

document.getElementById("github").addEventListener('click', function(){
    window.open("https://github.com/Gimedeiros-77", "_blank")
});

document.getElementById("Tatto").addEventListener('click', function(){

    window.open("https://felipelacroestatoo.github.io/", "_blank");
});

document.getElementById("todo").addEventListener('click', function(){
    window.open("https://github.com/Gimedeiros-77/todo-list/tree/main/todo");
});

document.getElementById("hamb").addEventListener('click',function(){
    window.open("https://cardapio-ten-nu.vercel.app/");
});

document.getElementById("js_alura").addEventListener('click',function(){
    window.open("https://github.com/Gimedeiros-77/js-curso-2-aula1")
})

document.getElementById("repo_spot").addEventListener('click',function(){
    window.open("https://github.com/Gimedeiros-77/spotify-imersao-alura")
})

document.getElementById("controle").addEventListener('click',function(){
    window.open("https://github.com/Gimedeiros-77/Controle_despesas")
})

document.getElementById('Download CV').addEventListener('click', function(event){
    event.preventDefault();

    const fileUrl = 'documents/Giovanni pdf-1.pdf';

    fetch(fileUrl)
    .then(Response => Response.blob())
    .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'documents/Giovanni pdf-1.pdf';
        link.click();

        window.URL.revokeObjectURL(link.href);
    })
    .catch(error => {
        console.error('Erro ao baixar o arquivo:', error);
    });
});

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone_number : document.getElementById("number").value,
        subject : document.getElementById("assunto").value,
        message : document.getElementById("mensagem").value,
    }

    emailjs.send("service_a3smeuq","template_oyt2yqp",parms).then(alert("E-mail enviado!!!!"))
}


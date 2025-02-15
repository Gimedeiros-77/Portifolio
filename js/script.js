const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('change');
    nav.classList.toggle('active');
});

// Função para abrir links
function abrirLink(id, url) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.addEventListener('click', () => window.open(url, "_blank"));
    }
}

// Adicionando eventos para cada botão de projeto
abrirLink("crono", "https://github.com/Gimedeiros-77/cronometro");
abrirLink("linkedin", "https://www.linkedin.com/in/giovanni-santos-025425267/");
abrirLink("whatsapp", "https://wa.me/5517982016839?text=Ol%C3%A1%2C%20vi%20seu%20Portf%C3%B3lio...%20Poderiamos%20conversar%3F");
abrirLink("instagram", "https://www.instagram.com/gi_santosxs?igsh=dDltbWRubTEzdGM4&utm_source=qr");
abrirLink("github", "https://github.com/Gimedeiros-77");
abrirLink("Tatto", "https://felipelacroestatoo.github.io/");
abrirLink("todo", "https://github.com/Gimedeiros-77/todo-list/tree/main/todo");
abrirLink("hamb", "https://cardapio-ten-nu.vercel.app/");
abrirLink("js_alura", "https://github.com/Gimedeiros-77/js-curso-2-aula1");
abrirLink("repo_spot", "https://github.com/Gimedeiros-77/spotify-imersao-alura");
abrirLink("controle", "https://github.com/Gimedeiros-77/Controle_despesas");

// Função de download do CV
const downloadCV = document.getElementById('Download CV');
if (downloadCV) {
    downloadCV.addEventListener('click', function(event) {
        event.preventDefault();

        const fileUrl = 'documents/Giovanni pdf-1.pdf';

        fetch(fileUrl)
            .then(response => response.blob())
            .then(blob => {
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'Giovanni_CV.pdf';
                link.click();
                window.URL.revokeObjectURL(link.href);
            })
            .catch(error => {
                console.error('Erro ao baixar o arquivo:', error);
                alert('Falha ao baixar o arquivo. Tente novamente.');
            });
    });
}

// Função de envio de e-mail com validação
function sendMail() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone_number = document.getElementById("number").value.trim();
    let subject = document.getElementById("assunto").value.trim();
    let message = document.getElementById("mensagem").value.trim();

    if (!name || !email || !phone_number || !subject || !message) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    let params = { name, email, phone_number, subject, message };

    emailjs.send("service_a3smeuq", "template_oyt2yqp", params)
        .then(() => alert("E-mail enviado com sucesso!"))
        .catch(error => console.error("Erro ao enviar e-mail:", error));
}

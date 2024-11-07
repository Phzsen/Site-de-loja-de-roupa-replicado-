document.addEventListener('DOMContentLoaded', function () {
    function enviarFormulario(form, formspreeURL) {
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Dados do formulário:', data);

        fetch(formspreeURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('Resposta completa da API:', response);
            if (response.ok) {
                Swal.fire({
                    title: 'Mensagem enviada com sucesso!',
                    imageUrl: 'https://images.tcdn.com.br/img/editor/up/780637/CLASS_LOGO_OFICIAL.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'Imagem de sucesso'
                });
                form.reset();
            } else {
                response.json().then(errorData => {
                    console.log('Dados de erro:', errorData);
                    Swal.fire({
                        title: 'Erro ao enviar a mensagem',
                        text: errorData.error || 'Verifique os campos.',
                        icon: 'error'
                    });
                });
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            Swal.fire({
                title: 'Erro',
                text: 'Ocorreu um erro ao enviar a mensagem.',
                icon: 'error'
            });
        });
    }

    const contatoForm = document.getElementById('signin');
    if (contatoForm) {
        const formspreeURLContato = 'https://formspree.io/f/xzzbrzpb';
        contatoForm.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('Formulário submetido');
            enviarFormulario(contatoForm, formspreeURLContato);
        });
    } else {
        console.log('Formulário com ID "signin" não encontrado.');
    }
});

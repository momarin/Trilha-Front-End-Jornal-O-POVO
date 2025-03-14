// Função para mostrar a mensagem de erro
const showErrorMessage = (input, errorElement) => {
    // Exibe a mensagem de erro
    errorElement.style.display = 'flex';

    // Remove a margin-bottom do input
    input.style.marginBottom = '0';

    // Adiciona a classe de erro ao input
    input.classList.add('input-error');

    // Remove o placeholder do input
    input.placeholder = ''; // Define o placeholder como vazio
};

// Função para ocultar a mensagem de erro
const hideErrorMessage = (input, errorElement) => {
    // Oculta a mensagem de erro
    errorElement.style.display = 'none';

    // Restaura a margin-bottom do input para 50px
    input.style.marginBottom = '50px';

    // Remove a classe de erro do input
    input.classList.remove('input-error');

    // Restaura o placeholder do input
    switch (input.id) {
        case 'first-name-input':
            input.placeholder = 'First Name';
            break;
        case 'last-name-input':
            input.placeholder = 'Last Name';
            break;
        case 'email-input':
            input.placeholder = 'Email Address';
            break;
        case 'password-input':
            input.placeholder = 'Password';
            break;
        default:
            break;
    }
};

// Função para limpar todas as mensagens de erro
const clearErrorMessages = () => {
    // Seleciona todos os inputs e suas mensagens de erro
    const inputs = document.querySelectorAll('.registration-form input');
    inputs.forEach(input => {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            hideErrorMessage(input, errorElement);
        }
    });
};

// Função para validar o formulário
const validateForm = (event) => {
    event.preventDefault(); // Impede o envio do formulário

    // Limpa erros anteriores
    clearErrorMessages();

    // Seleciona os inputs e suas mensagens de erro
    const firstNameInput = document.getElementById('first-name-input');
    const firstNameError = document.getElementById('first-name-error');

    const lastNameInput = document.getElementById('last-name-input');
    const lastNameError = document.getElementById('last-name-error');

    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');

    const passwordInput = document.getElementById('password-input');
    const passwordError = document.getElementById('password-error');

    // Validação dos campos
    let isValid = true;

    if (!firstNameInput.value.trim()) {
        showErrorMessage(firstNameInput, firstNameError);
        isValid = false;
    }

    if (!lastNameInput.value.trim()) {
        showErrorMessage(lastNameInput, lastNameError);
        isValid = false;
    }

    if (!emailInput.value.trim()) {
        showErrorMessage(emailInput, emailError);
        isValid = false;
    //  else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    //     showErrorMessage(emailInput, emailError);
    //     isValid = false;
    }

    if (!passwordInput.value.trim()) {
        showErrorMessage(passwordInput, passwordError);
        isValid = false;
    }

    // Se o formulário for válido, pode ser enviado
    if (isValid) {
        alert('Form submitted successfully!');
        // Aqui você pode adicionar o código para enviar o formulário
    }
};

// Adiciona o evento de submit ao formulário
const form = document.getElementById('regist-form');
form.addEventListener('submit', validateForm);
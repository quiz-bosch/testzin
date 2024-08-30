document.addEventListener('DOMContentLoaded', function () {
    // Seletores de botões de grau e resposta
    let cardGradeButtons = document.querySelectorAll('.card__grade');
    let resposta1Buttons = document.querySelectorAll('.resposta1');
    let resposta2Buttons = document.querySelectorAll('.resposta2');

    // Adiciona eventos de clique para os botões de grau
    cardGradeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleButton(this, cardGradeButtons);
            checkConditions();
        });
    });

    // Adiciona eventos de clique para os botões de resposta1
    resposta1Buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleButton(this, resposta1Buttons);
            checkConditions();
        });
    });

    // Adiciona eventos de clique para os botões de resposta2
    resposta2Buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleButton(this, resposta2Buttons);
            checkConditions();
        });
    });

    function toggleButton(clickedButton, buttons) {
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        clickedButton.classList.add('active');
    }

    function checkConditions() {
        // Encontre o botão "Enviar Resposta" mais próximo do elemento ativo
        const cardGradeActive = document.querySelector('.card__grade.active');
        const resposta1Active = document.querySelector('.resposta1.active');
        const resposta2Active = document.querySelector('.resposta2.active');

        let enviarRespostaButton;
        if (cardGradeActive) {
            enviarRespostaButton = cardGradeActive.closest('.card').querySelector('.card__enviarResposta');
        }

        if (enviarRespostaButton && cardGradeActive && resposta1Active && resposta2Active) {
            // Ativa o botão se todas as condições são atendidas
            enviarRespostaButton.removeAttribute('disabled');
            enviarRespostaButton.classList.add('active');
        } else {
            // Desativa o botão se alguma condição não for atendida
            if (enviarRespostaButton) {
                enviarRespostaButton.setAttribute('disabled', 'true');
                enviarRespostaButton.classList.remove('active');
            }
        }
    }
});

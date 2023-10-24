function checarInputs() {
    var nameValue = document.getElementById('gg-name').value.trim();
    var emailValue = document.getElementById('gg-email').value.trim();
    var submitButton = document.getElementById('gg-submit');

    if (nameValue !== '' && emailValue !== '') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
}

document.getElementById('gg-name').addEventListener('keyup', checarInputs);
document.getElementById('gg-email').addEventListener('keyup', checarInputs);

function rodarRoleta() {
    document.querySelector("button#gg-submit").setAttribute("disabled", true);
    var nameValue = document.getElementById('gg-name').value.trim();
    var wheel = document.querySelector('.gg-list');
    var premio = null;
    var rotation = generateRotation();
    console.log(rotation);
    wheel.style.transform = 'rotate(' + rotation + 'deg)';

    function generateRotation() {
        var newRotation;
        do {
            newRotation = Math.floor(Math.random() * 361) + 2520;
        } while (newRotation === 2520 || newRotation === 2550 || newRotation === 2610 || newRotation === 2670 || newRotation === 2730 || newRotation === 2790 || newRotation === 2850);

        if ((newRotation >= 2520 && newRotation <= 2549) || (newRotation >= 2850 && newRotation <= 2880)) {
            premio = "R$ 100,00* OFF";
        } else if (newRotation >= 2551 && newRotation <= 2609) {
            premio = "VOCÊ GANHOU 5% OFF";
        } else if (newRotation >= 2611 && newRotation <= 2679) {
            premio = "R$ 250,00* OFF";
        } else if (newRotation >= 2671 && newRotation <= 2729) {
            premio = "GANHOU 1 E-BOOK!";
        } else if (newRotation >= 2731 && newRotation <= 2789) {
            premio = "R$ 500,00* OFF";
        } else if (newRotation >= 2791 && newRotation <= 2849) {
            premio = "VOCÊ GANHOU 1 ANÁLISE EM SEU SITE!";
        }

        return newRotation;
    }

    setTimeout(function () {
        alert(`Parabéns!! Você ganhou ${premio}`);
        wheel.style.transform = 'rotate(' + 0 + 'deg)';
        document.getElementById('gg-name').value = '';
        document.getElementById('gg-email').value = '';
    }, 6100);
}

// fechar o modal

function fecharModal() {
    var modal = document.querySelector('.gg-modal');
    modal.style.display = 'none';
}

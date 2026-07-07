// Seleciona o ícone do menu hambúrguer e a barra de navegação
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Alterna a abertura/fechamento do menu ao clicar no ícone hambúrguer
menuIcon.addEventListener('click', () => {
    // Adiciona ou remove a classe 'open' que exibe o menu dropdown
    navbar.classList.toggle('open');

    // Troca o ícone entre ☰ (menu fechado) e ✕ (menu aberto)
    const icon = menuIcon.querySelector('i');
    icon.classList.toggle('bx-menu');
    icon.classList.toggle('bx-x');
});

// Fecha o menu automaticamente ao clicar em qualquer link de navegação
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');

        // Restaura o ícone para hambúrguer ao fechar
        const icon = menuIcon.querySelector('i');
        icon.classList.add('bx-menu');
        icon.classList.remove('bx-x');
    });
});

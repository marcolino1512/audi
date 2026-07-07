# Audi Landing Page

Landing page responsiva para a marca Audi, desenvolvida com HTML, CSS e JavaScript puro.

## Visão Geral

Página de apresentação com design moderno baseado em formas geométricas (losangos), animações de entrada e layout adaptável para diferentes tamanhos de tela.

## Funcionalidades

- **Layout responsivo** — adaptado para desktop, tablets e celulares
- **Animações de entrada** — elementos surgem com efeitos suaves ao carregar a página
- **Menu hambúrguer** — navegação colapsável em dispositivos móveis (≤ 768px)
- **Sem scroll horizontal** — enquadramento fixo em todas as telas

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica da página |
| CSS3 | Estilização, animações e media queries |
| JavaScript (ES6) | Interatividade do menu mobile |
| [Boxicons](https://boxicons.com/) | Ícones (hambúrguer, redes sociais) |
| [Google Fonts – Oswald](https://fonts.google.com/specimen/Oswald) | Tipografia |

## Estrutura de Arquivos

```
audi/
├── index.html       # Estrutura principal da página
├── style.css        # Estilos, animações e responsividade
├── java.js          # Lógica do menu hambúrguer mobile
├── img/
│   └── Teste-img.png  # Imagem do carro
└── README.md
```

## Breakpoints Responsivos

| Breakpoint | Dispositivo alvo |
|---|---|
| ≤ 1200px | Laptops menores |
| ≤ 991px | Tablets (landscape) |
| ≤ 768px | Tablets (portrait) e celulares grandes |
| ≤ 576px | Celulares médios |
| ≤ 400px | Celulares pequenos |

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/marcolino1512/audi.git
   ```
2. Abra o arquivo `index.html` no navegador.

> Não requer instalação de dependências nem servidor local.

## Preview

A página exibe um título com animação, subtítulo em azul, parágrafo descritivo, botão de ação e a imagem do carro dentro de um losango rotacionado, com um segundo losango decorativo no fundo.

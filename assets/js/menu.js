/*=============== SHOW SIDEBAR ===============*/
const toggleSidebar = (toggleId, sidebarId, headerId, mainId) => {
  const toggle = document.getElementById(toggleId);
  const sidebar = document.getElementById(sidebarId);
  const header = document.getElementById(headerId);
  const main = document.getElementById(mainId);

  if (toggle && sidebar && header && main) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("show-sidebar");
      header.classList.toggle("left-pd");
      main.classList.toggle("left-pd");
    });
  }
};
toggleSidebar("header-toggle", "sidebar", "header", "menu", "main");

/*=============== LINK ACTIVE ===============*/
const setActiveLink = (selector) => {
  const links = document.querySelectorAll(selector);

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
};

// Apply to sidebar links and menu links
setActiveLink(".sidebar__list a");
setActiveLink(".menu__link");

/*=============== DARK LIGHT THEME ===============*/
// Selecione ambos os botões por ID
const themeButtons = [
  document.getElementById("theme-button-1"),
  document.getElementById("theme-button-2")
];

const darkTheme = "dark-theme";
const iconTheme = "ri-sun-fill";

// Função para obter o tema atual
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButtons[0].classList.contains(iconTheme) ? "ri-moon-clear-fill" : "ri-sun-fill"; // Verifica o ícone no primeiro botão

// Carregar tema da localStorage se existir
const loadTheme = () => {
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButtons.forEach(button => {
      button.classList[selectedIcon === "ri-moon-clear-fill" ? "add" : "remove"](iconTheme);
    });
  }
};
loadTheme();

// Alternar o tema ao clicar em qualquer um dos botões
themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButtons.forEach(btn => btn.classList.toggle(iconTheme)); // Alterna o ícone em ambos os botões
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
});



/*=============== LINK ACTIVE PARA MENU TIME ===============*/
const setActiveLinkForMenuTime = (selector) => {
  const links = document.querySelectorAll(selector);

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Previne o comportamento padrão do link

      // Remove a classe 'active' de todos os links
      links.forEach((l) => l.classList.remove("active"));

      // Adiciona a classe 'active' ao link clicado
      this.classList.add("active");
    });
  });
};

// Aplica a função aos links no menu de tempo
setActiveLinkForMenuTime(".item__time");

// Adiciona um evento de clique a cada link
menuDashLinks.forEach((link) => {
  link.addEventListener("click", handleMenuLinkClick);
});

/*=============== Hover Duvida ===============*/

const duvidaIcons = document.querySelectorAll(".duvidaIcon");

// Cria o tooltip
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.textContent =
  "Pedidos refere a compensações de pagamentos recolhidos indevidamente ou a maior.";
document.body.appendChild(tooltip);

/*=============== POPUP TAREFAS ===============*/

const infoPopup6 = document.getElementById("infoPopup6");
const closeInfoPopup6 = document.getElementById("closeInfoPopup6");
const infoPopup7 = document.getElementById("infoPopup7");
const closeInfoPopup7 = document.getElementById("closeInfoPopup7");
const arrowIcons = document.querySelectorAll(
  ".card__date i.ri-arrow-down-s-line"
);

arrowIcons[0].addEventListener("click", () => {
  infoPopup6.style.display = "flex"; // Mostra o popup do card 6
});

arrowIcons[1].addEventListener("click", () => {
  infoPopup7.style.display = "flex"; // Mostra o popup do card 7
});

closeInfoPopup6.addEventListener("click", () => {
  infoPopup6.style.display = "none"; // Esconde o popup do card 6
});

closeInfoPopup7.addEventListener("click", () => {
  infoPopup7.style.display = "none"; // Esconde o popup do card 7
});

// Fecha os popups ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === infoPopup6) {
    infoPopup6.style.display = "none";
  }
  if (event.target === infoPopup7) {
    infoPopup7.style.display = "none";
  }
});

// Adiciona eventos de hover para cada ícone de dúvida
duvidaIcons.forEach((icon) => {
  icon.addEventListener("mouseover", function (event) {
    tooltip.style.display = "block";
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + 20 + "px"; // Posiciona o tooltip
  });

  icon.addEventListener("mouseout", function () {
    tooltip.style.display = "none";
  });
});

// Variável para armazenar o link anteriormente selecionado
let previousSelectedLink = document.querySelector(".menu__dash-link3.active");
let currentSelectedLink = null;

// Função para abrir o popup
function abrirPopup(event) {
  event.preventDefault(); // Previne o comportamento padrão do link

  // Define o link atual como o clicado, mas sem remover a classe 'active' ainda
  currentSelectedLink = event.target;

  // Exibe o popup e o overlay
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Função para fechar o popup
function fecharPopup() {
  // Fecha o popup e o overlay
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Função para confirmar a escolha e aplicar as classes de estilo
function confirmarEscolha() {
  fecharPopup();

  // Remove a classe 'active' do item anterior, se houver
  if (previousSelectedLink) {
    previousSelectedLink.classList.remove("active");
  }

  // Aplica a classe 'active' ao link atual
  if (currentSelectedLink) {
    currentSelectedLink.classList.add("active");
  }

  previousSelectedLink = currentSelectedLink;

  console.log("Escolha confirmada!");
}

// Função para alternar a visibilidade das imagens com base no estado do checkbox
function toggleImagem(checkbox) {
  const targetClass = checkbox.getAttribute("data-target");
  const targetElements = document.querySelectorAll(targetClass);

  // Controla a visibilidade das imagens relacionadas ao checkbox
  targetElements.forEach((element) => {
    if (checkbox.checked) {
      element.style.opacity = "1";  // Exibe a imagem se o checkbox estiver marcado
      element.style.display = "block";  // Garante que a imagem seja exibida
    } else {
      element.style.opacity = "0";  // Esconde a imagem se o checkbox estiver desmarcado
      element.style.display = "none";  // Garante que a imagem seja ocultada
    }
  });
}

// Adiciona o evento de clique ao link para abrir o popup
const menuLink = document.querySelector(".menu__dash-link3");
menuLink.addEventListener("click", abrirPopup);

// Adiciona o evento de clique ao botão de "Confirmar" para confirmar a escolha
const confirmarButton = document.querySelector(".popup__confirmar");
confirmarButton.addEventListener("click", confirmarEscolha);

// Adiciona o evento de clique ao botão de "Cancelar" para fechar o popup sem salvar
const cancelarButton = document.querySelector(".popup__cancelar");
cancelarButton.addEventListener("click", fecharPopup);

// Fecha o popup ao clicar fora do conteúdo (overlay)
window.addEventListener("click", (event) => {
  if (event.target === document.getElementById("overlay")) {
    fecharPopup();
  }
});

// Seleciona o botão de fechar (ícone de fechar) e adiciona o evento de clique
const closeButton = document.querySelector(".popup__close i");
closeButton.addEventListener("click", fecharPopup);





function redirectToPage() {
  var select = document.getElementById('mySelect');
  var selectedValue = select.value;

  // Se a opção for "COFINS", abre o modal ao invés de redirecionar
  if (selectedValue === "cofins.html") {
    abrirPopup();  // Função que abre o modal
  } else if (selectedValue) {
    // Redireciona normalmente para outras opções
    window.location.href = selectedValue;
  }
}

// Função para abrir o modal COFINS
function abrirPopup() {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("overlay");

  if (popup && overlay) {
    popup.style.display = "block"; // Mostra o popup
    overlay.style.display = "block"; // Mostra o overlay de fundo
  }
}

// Função para fechar o modal COFINS
function fecharPopup() {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("overlay");

  if (popup && overlay) {
    popup.style.display = "none"; // Esconde o popup
    overlay.style.display = "none"; // Esconde o overlay de fundo
  }
}
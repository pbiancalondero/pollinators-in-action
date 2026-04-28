const dadosGaleria = {
  extras: [
    {
      src: "../../assets/img/25-09-27/trap-abelha.jpg",
      alt: "Instalação das iscas",
      legenda: "Dia 27/09/25: Isca número 5 instalada e com abelhas.",
    },
    {
      src: "../../assets/img/25-10-15/trap-abelha.png",
      alt: "Instalação das iscas",
      legenda: "Dia 15/10/25: Iscas número 5 e 7 instaladas e com abelhas.",
    },
  ],

  "dia-25-09-16": [
    {
      src: "../../assets/img/25-09-16/pets-recorte-1.JPG",
      alt: "Montagem do jardim",
      legenda: "Recorte das garrafas PET para montagem do jardim vertical.",
    },
    {
      src: "../../assets/img/25-09-16/pets-recorte-2.JPG",
      alt: "Montagem do jardim",
      legenda: "Recorte das garrafas PET para montagem do jardim vertical.",
    },
  ],

  "dia-25-09-23": [
    {
      src: "../../assets/img/25-09-23/iscas-bocais.png",
      alt: "Montagem das iscas",
      legenda:
        "Bocais das iscas com atrativo (mistura de álcool, própolis e mel).",
    },
    {
      src: "../../assets/img/25-09-23/traps-etiquetas.png",
      alt: "Montagem das iscas",
      legenda: "Etiquetas de identificação da isca e do projeto.",
    },
    {
      src: "../../assets/img/25-09-23/traps-montagem.png",
      alt: "Montagem das iscas",
      legenda: "Montagem das iscas com bocal, etiquetas e garrafas PET.",
    },
    {
      src: "../../assets/img/25-09-23/traps-finalizadas.jpg",
      alt: "Montagem das iscas",
      legenda: "Iscas finalizadas e prontas para instalação.",
    },
    {
      src: "../../assets/img/25-09-23/traps-instalacao.jpeg",
      alt: "Instalação das iscas",
      legenda: "Instalação das iscas no local destinado.",
    },
    {
      src: "../../assets/img/25-09-23/traps-1-2-3-4.png",
      alt: "Instalação das iscas",
      legenda: "Iscas 1, 2, 3 e 4 instaladas.",
    },
    {
      src: "../../assets/img/25-09-23/traps-5-6-7.png",
      alt: "Instalação das iscas",
      legenda: "Iscas 5, 6 e 7 instaladas.",
    },
    {
      src: "../../assets/img/25-09-23/traps-9-10-11.png",
      alt: "Instalação das iscas",
      legenda: "Iscas 9, 10 e 11 instaladas.",
    },
  ],

  "dia-25-09-30": [
    {
      src: "../../assets/img/25-09-30/pets-furacao.jpg",
      alt: "Montagem do jardim",
      legenda:
        "Furação das garrafas PET para permitir a passagem de água na floreira.",
    },
    {
      src: "../../assets/img/25-09-30/pets-pintura-1.jpg",
      alt: "Montagem do jardim",
      legenda:
        "Pintura das garrafas PET para montagem do jardim vertical, ajudando a proteger as plantas do sol e a manter a umidade dentro das garrafas.",
    },
    {
      src: "../../assets/img/25-09-30/pets-pintura-2.jpg",
      alt: "Montagem do jardim",
      legenda:
        "Pintura das garrafas PET para montagem do jardim vertical, ajudando a proteger as plantas do sol e a manter a umidade dentro das garrafas.",
    },
    {
      src: "../../assets/img/25-09-30/pets-pintura-3.jpg",
      alt: "Montagem do jardim",
      legenda:
        "Pintura das garrafas PET para montagem do jardim vertical, ajudando a proteger as plantas do sol e a manter a umidade dentro das garrafas.",
    },
    {
      src: "../../assets/img/25-09-30/pets-pintura-4.jpg",
      alt: "Montagem do jardim",
      legenda: "Garrafas PET pintadas e secando.",
    },
  ],

  "dia-25-10-07": [
    {
      src: "../../assets/img/25-10-07/furacao-pets.png",
      alt: "Montagem do jardim",
      legenda:
        "Colocação do arame de suporte nas garrafas PET do jardim vertical.",
    },
    {
      src: "../../assets/img/25-10-07/pintura-pets-1.png",
      alt: "Montagem do jardim",
      legenda: "Pintura das garrafas PET do jardim vertical.",
    },
    {
      src: "../../assets/img/25-10-07/pintura-pets-2.png",
      alt: "Montagem do jardim",
      legenda: "Pintura das garrafas PET do jardim vertical.",
    },
    {
      src: "../../assets/img/25-10-07/pintura-pets-3.png",
      alt: "Montagem do jardim",
      legenda: "Pintura das garrafas PET do jardim vertical.",
    },
    {
      src: "../../assets/img/25-10-07/traps-12-13.png",
      alt: "Montagem do jardim",
      legenda: "Confecção e instalação de duas novas iscas, 12 e 13.",
    },
  ],

  "dia-25-10-18": [
    {
      src: "../../assets/img/25-10-18/caixa-inpa-1.png",
      alt: "Montagem do jardim",
      legenda: "Montagem de caixa Inpa para meliponário.",
    },
    {
      src: "../../assets/img/25-10-18/caixa-inpa-2.png",
      alt: "Montagem do jardim",
      legenda: "Montagem de caixa Inpa para meliponário.",
    },
  ],

  "dia-25-10-21": [
    {
      src: "../../assets/img/25-10-21/caixa-inpa-lixamento.png",
      alt: "Montagem do jardim",
      legenda: "Lixamento das caixas Inpa do meliponário.",
    },
    {
      src: "../../assets/img/25-10-21/floreiras.png",
      alt: "Montagem do jardim",
      legenda: "Confecção das cestas de flores de litros.",
    },
    {
      src: "../../assets/img/25-10-21/jardim-vertical.png",
      alt: "Montagem do jardim",
      legenda: "Montagem do jardim vertical (primeiro protótipo).",
    },
  ],
};

const carouselInner = document.getElementById("carousel-inner-container");
const legendaDinamica = document.getElementById("legenda-dinamica");
const botoesData = document.querySelectorAll(".btn-data");
const meuCarrossel = document.getElementById("carouselArena");

let diaAtual = "";

function carregarGaleria(dia) {
  diaAtual = dia;
  const fotos = dadosGaleria[dia];
  carouselInner.innerHTML = "";

  if (!fotos || fotos.length === 0) return;

  fotos.forEach((foto, index) => {
    const isActive = index === 0 ? "active" : "";
    const itemHTML = `
            <div class="carousel-item ${isActive}">
                <img src="${foto.src}" class="d-block w-100" alt="${foto.alt}">
            </div>
        `;
    carouselInner.innerHTML += itemHTML;
  });

  legendaDinamica.innerHTML = fotos[0].legenda;
}

botoesData.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    const diaSelecionado = e.target.getAttribute("data-dia");
    carregarGaleria(diaSelecionado);
  });
});

meuCarrossel.addEventListener("slid.bs.carousel", function (e) {
  const indexAtual = e.to;

  if (diaAtual && dadosGaleria[diaAtual]) {
    const legendaNova = dadosGaleria[diaAtual][indexAtual].legenda;
    legendaDinamica.innerHTML = legendaNova;
  }
});

carregarGaleria("dia-25-09-16");

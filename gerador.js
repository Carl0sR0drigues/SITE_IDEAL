// Dados dos imóveis, você pode alterar ou adicionar mais imóveis aqui
const imoveis = [
    {
        img: "imagem/casa1.png",
        titulo: "Residência<br>Rua A n°695, Cidade Nova - Parauapebas-PA",
        descricao: "🔸 02 quartos🔸 01 suítes🔸 01 quarto externo🔸 Sala ampla🔸 Cozinha com fogão cooktop  bancada em granito🔸 02 Banheiros social🔸 Garagem ampla e coberta🔸 Área de Serviços",
        linkLocalizacao: "https://maps.app.goo.gl/Qb1NBxUT1BSXrMcB6",
        linkDetalhes: "pagina_imovel_1/pagina_detalhes.html",
        preco: "R$3.200,00."
    },
    {
        img: "imagem/casa2.png",
        titulo: "Residência",
        descricao: "Apartamento com 3 quartos, sala ampla e varanda",
        linkLocalizacao: "https://www.google.com.br/maps/place/6%C2%B002'21.1%22S+50%C2%B049'29.3%22W/@-6.039183,-50.824811,844m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-6.039183!4d-50.824811?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
        linkDetalhes: "pagina_imovel_3/pagina_detalhes.html",
        preco: "R$2.200,00"
    },
    {
        img: "imagem/casa3.png",
        titulo: "Residência",
        descricao: "Casa com 4 quartos, piscina e área de lazer",
        linkLocalizacao: "https://www.google.com.br/maps/place/6%C2%B002'21.1%22S+50%C2%B049'29.3%22W/@-6.039183,-50.824811,844m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-6.039183!4d-50.824811?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
        linkDetalhes: "pagina_imovel_3/pagina_detalhes.html",
        preco: "R$3.000,00"
    },
    {
        img: "imagem/casa4.png",
        titulo: "Residência",
        descricao: "Casa com 4 quartos, piscina e área de lazer",
        linkLocalizacao: "https://www.google.com.br/maps/place/6%C2%B002'21.1%22S+50%C2%B049'29.3%22W/@-6.039183,-50.824811,844m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-6.039183!4d-50.824811?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
        linkDetalhes: "pagina_imovel_3/pagina_detalhes.html",
        preco: "R$3.000,00"
    },
    {
        img: "imagem/casa5.png",
        titulo: "Residência",
        descricao: "Casa com 4 quartos, piscina e área de lazer",
        linkLocalizacao: "link-para-localizacao3.html",
        linkDetalhes: "link-para-detalhes3.html",
        preco: "R$3.000,00"
    },
    {
        img: "imagem/casa6.png",
        titulo: "Residência",
        descricao: "Casa com 4 quartos, piscina e área de lazer",
        linkLocalizacao: "link-para-localizacao3.html",
        linkDetalhes: "link-para-detalhes3.html",
        preco: "R$3.000,00"
    }
];




































// Função para criar o HTML para cada imóvel
function criarImovel(imovel) {
    // Criar a div que vai conter os dados do imóvel
    const imovelDiv = document.createElement('div');
    imovelDiv.classList.add('imo1');

    // Adicionar imagem, título, descrição, links e preços
    imovelDiv.innerHTML = `
        <img src="${imovel.img}" alt="imovel">
        <h1>${imovel.titulo}</h1>
        <p>${imovel.descricao}</p>

        <!-- Botão de Locação com link -->
        <a href="${imovel.linkLocalizacao}"" target="_blank">
            <button class="preço">Locação</button>
        </a>

        <!-- Botão de Mais Detalhes com link -->
        <a href="${imovel.linkDetalhes}"" target="_blank">
            <button class="detalhes">Mais Detalhes</button>
        </a>

        <div class="rental-price-container">
            <div class="rental-price">
                <strong>Locação</strong>
                <button>${imovel.preco}</button>
            </div>
        </div>
    `;
    
    return imovelDiv;
}

// Selecionar a div do container onde os imóveis serão inseridos
const container = document.getElementById('imoveis-container');

// Preencher o container com os imóveis
imoveis.forEach(imovel => {
    const imovelElement = criarImovel(imovel);
    container.appendChild(imovelElement);
});




































let index = 0;
let isTransitioning = false;

function moveSlide() {
  const images = document.querySelectorAll('.carousel-images img');
  const totalImages = images.length / 2; // Imagens originais
  
  if (isTransitioning) return; // Evita múltiplas transições ao mesmo tempo

  isTransitioning = true;  // Bloqueia novas transições durante a atual

  index = (index + 1) % totalImages; // Lógica para o loop infinito

  const offset = -index * (100 / 3);  // Cada imagem ocupa 33.33% da largura
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function cloneImages() {
  const images = document.querySelectorAll('.carousel-images img');
  const totalImages = images.length;

  // Clonando as imagens para criar o efeito de loop infinito
  for (let i = 0; i < totalImages; i++) {
    const clonedImage = images[i].cloneNode(true);
    document.querySelector('.carousel-images').appendChild(clonedImage);
  }

  // Inicia a transição automática
  setInterval(moveSlide, 3000); // A cada 3 segundos, move para a próxima imagem
}

function restartLoop() {
  const carousel = document.querySelector('.carousel-images');
  carousel.addEventListener('transitionend', function() {
    if (index === 0) {
      // Após a transição, volta ao início sem transição
      setTimeout(() => {
        carousel.style.transition = 'none'; // Desativa a transição momentaneamente
        carousel.style.transform = 'translateX(0%)'; // Restaura ao início
        // Reativa a transição após 50ms
        setTimeout(() => {
          carousel.style.transition = 'transform 1s ease'; // Reativa a transição
          isTransitioning = false; // Permite a próxima transição
        }, 50);
      }, 50); // Espera um tempo curto para permitir a atualização
    } else {
      isTransitioning = false; // Permite a próxima transição se não for o primeiro slide
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  cloneImages(); // Inicializa o carrossel com as imagens clonadas
  restartLoop();  // Previne o espaço em branco e reinicia o carrossel suavemente
});


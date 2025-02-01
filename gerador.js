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
      titulo: "Casa Sobrado<br>Rua Castelo Branco n°110, Rio Verde  - Parauapebas-PA",
      descricao: "🔸 03 quartos, sendo 02 suítes🔸 Sala ampla🔸 Cozinha🔸 01 Banheiro social🔸 Garagem ampla e coberta🔸Área de Serviços<br><br><br>",
      linkLocalizacao: "https://maps.app.goo.gl/wwAKVpmuu4A44oAq7",
      linkDetalhes: "pagina_imovel_2/pagina_detalhes.html",
      preco: "R$ 2.200,00"
    },
    {
        img: "imagem/casa3.png",
        titulo: "Apartamento<br>Av. Rio Grande 144, 1° Andar - Beira Rio  - Parauapebas-PA",
        descricao: "🔸 02 quartos suítes 🔸 Sala ampla 🔸 Cozinha 🔸 Varanda 🔸 01 Lavabo externo 🔸 Garagem 01 vaga coberta 🔸 Área de Serviços<br><br>",
        linkLocalizacao: "https://maps.app.goo.gl/3mm54VA5q3DkzCms8",
        linkDetalhes: "pagina_imovel_3/pagina_detalhes.html",
        preco: "R$ 1.700,00"
    },
    {
        img: "imagem/casa4.png",
        titulo: "Casa com Piscina<br>Rua 21, Quadra 25, Lote 08, Bairro dos Minérios   - Parauapebas-PA",
        descricao: "🔸 02 quartos 🔸 01 Sala ampla 🔸 Cozinha 🔸 01 Banheiro social interno 🔸 Garagem ampla e coberta 🔸 Área de serviços coberta 🔸 01 Banheiro externo 🔸 Área de lazer com piscina<br>",
        linkLocalizacao: "https://maps.app.goo.gl/Y9tcTmXCJYHtg77TA",
        linkDetalhes: "pagina_imovel_4/pagina_detalhes.html",
        preco: "R$2.100,00"
    },
    {
        img: "imagem/casa5.png",
        titulo: "Apartamento<br>Rua  Rio Claro Esquina com Av.  Rio Grande - 2° Andar - Bairro Beira Rio   - Parauapebas-PA",
        descricao: "🔸 03 quartos sendo 01 suíte, todos com central de ar condicionado 🔸 01 Sala ampla 🔸 Cozinha ampla e com móveis planejados 🔸 01 Banheiro social 🔸 Garagem 01 vaga coberta 🔸 Área de serviços",
        linkLocalizacao: "https://maps.app.goo.gl/LNUP8pws14op15aU8",
        linkDetalhes: "pagina_imovel_5/pagina_detalhes.html",
        preco: "R$2.500,00"
    },
    {
        img: "imagem/casa6.png",
        titulo: "Ponto Comercial de Esquina<br>Av. D, Qd 177, Lt 04, Sala A - Esquina com Avenida O - Bairro Cidade Jardim - Parauapebas-PA",
        descricao: "Sala com aproximadamente 45,00m² de área livre 🔸 01 Banheiro social 🔸 Porta de Vidro Temperado com duas entradas 🔸 Ideal para escritórios, lojas e comércios em geral<br>",
        linkLocalizacao: "https://maps.app.goo.gl/DtTdFUdtcCdMQVaC9",
        linkDetalhes: "pagina_imovel_6/pagina_detalhes.html",
        preco: "R$1.600,00"
    },
    {
        img: "imagem/casa7.png",
        titulo: "Sala comercial 1°Andar<br>Rua A nº 695 B, Bairro Cidade Nova - Parauapebas-PA<br<br><br><br>",
        descricao: "🔸 Sala com aproximadamente 20,00 m² 🔸 01 Banheiro social 🔸 Porta de Vidro Temperado 🔸 Ideal para escritório individual.<br><br><br>",
        linkLocalizacao: "https://maps.app.goo.gl/Qb1NBxUT1BSXrMcB6",
        linkDetalhes: "pagina_imovel_7/pagina_detalhes.html",
        preco: "R$750,00"
    },
    {
        img: "imagem/casa8.png",
        titulo: "Residencia com opção de ponto comercial na garagem<br>Rua A n° 627, Cidade Nova - Parauapebas-PA",
        descricao: "🔸 02 quartos sendo 01 suíte 🔸 Sala 🔸 Cozinha 🔸 01 Banheiro social 🔸 Garagem ou ponto comercial na frente (atualmente adaptada para ponto comercial) 🔸 Área de Serviços 🔸 Amplo quintal nos fundos.",
        linkLocalizacao: "https://maps.app.goo.gl/PkcCYyZmACXaDdGw5",
        linkDetalhes: "pagina_imovel_8/pagina_detalhes.html",
        preco: "R$1.800,00"
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
            <button class="preço">Localização</button>
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


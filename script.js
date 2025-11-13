// Aguarda o HTML ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

  const defaultConfig = {
    main_title: "Seu Nome",
    subtitle: "Sua Profissão ou Frase",
    description: "Escreva aqui uma breve descrição sobre você. Conte um pouco sobre sua personalidade, seus interesses e o que faz você único. Esta é sua oportunidade de se apresentar ao mundo!",
    section_title: "Conheça Minha História",
    section_subtitle: "Explore diferentes aspectos da minha vida e jornada pessoal",
    
    biography_title: "Biografia",
    biography_content: `Eu sou Alfeu Vantuir e, para os que não sabem, sim, meu nome é composto, por mais que não pareça. Tenho 16 anos e meu aniversário é no dia 22 de julho. Nasci em Curitiba, no ano de 2009, porém sempre morei em Araucária.

Desde sempre tentei ser alguém bom, alguém gentil, procurando fazer o bem ao próximo, mesmo que essa pessoa, às vezes, não mereça. Sei que pratico um esporte de luta, mas não o faço para brigar, muito menos para usá-lo contra outras pessoas em benefício próprio. Pratico o judô pela minha defesa pessoal e também pela defesa dos meus amigos e da minha família.

Como meu pai disse: “O seu corpo se tornou uma arma a partir do momento em que começou a treinar.” Isso é verdade. No entanto, algo que o judô me ensinou é que machucar o outro nunca foi necessário — e nem vai ser algum dia. A briga, para mim, serve apenas para alimentar o ego de quem se acha superior, algo com o qual sou totalmente contra. Por isso, sempre procuro resolver as coisas de forma pacífica.

Essa filosofia também influenciou muito minha personalidade. Sou uma pessoa calma e serena; muitos já me disseram que sou “calmo demais” para alguém que luta, mas sempre levei isso como um elogio. Falando mais sobre minha personalidade, tenho um humor ácido, rio de tudo e sou alguém feliz — feliz com o que tenho, com a minha vida, com quem está ao meu lado e muito grato por tudo.

Falando sobre minha infância, passei-a com meu irmão, Alex Fabiano, dois anos mais novo que eu, e com meus pais, Josiane Silva e Fabiano Aparecido. Por conta do nascimento do meu irmão, vivi uma pequena parte da minha vida morando em Foz do Iguaçu, cidade natal da minha mãe e dele.

Não me lembro de muita coisa, pois era muito novo, but o que mais me marcou foi o calor extremo. Lá é muito quente — tão quente a ponto de atacar minha dermatite, algo que tenho desde sempre. Pra quem não sabe, dermatite é praticamente uma reação alérgica da pele, que acontece quando a pessoa sua demais. No meu caso, é algo leve.

Após alguns meses vivendo lá, voltamos para Araucária. Eu tinha entre 2 e 4 anos, e, a partir daí, tenho apenas pequenas lembranças: lembro de quando morávamos em um sobrado — foi a primeira vez que vi neve! Foi incrível, uma experiência que nunca vou esquecer. Também lembro de outro sobrado, não o mesmo, onde passei uma Páscoa mágica: meus pais enfeitaram a casa inteira com pegadas, ovos e muitas outras coisas. Guardo essas memórias com muito carinho.

A metade da minha vida, dos 6 aos 14 anos, foi a época da escola — o ensino fundamental —, onde fiz muitos amigos valiosos, alguns dos quais levo comigo até hoje. Posso dizer que amo a todos eles.

Falando agora sobre a fase que vivo, posso afirmar com toda certeza que estou feliz. Tenho uma família que me apoia, um irmão que me admira e me ensina, e uma namorada que me ama muito. Minha vida é perfeita — não tenho do que reclamar.

Claro, ainda tenho muitos sonhos e ambições que quero conquistar, e sou convicto de que vou conseguir todos. Mas, se minha vida se mantivesse assim, eu também estaria satisfeito.`,
    
    profession_title: "Profissão",
    profession_content: `Comecei o judô com 6 anos, como faixa branca. Por conta de alguns problemas, acabei parando, mas voltei um ano depois, com a minha sensei atual, Sensei Jacqueline, que atualmente é faixa-preta.
Quando comecei meu treinamento, meu objetivo era melhorar minha coordenação motora, que era horrível — eu tropeçava nos meus próprios pés e precisava melhorar isso. Felizmente, consegui. Hoje, minha coordenação está muito melhor do que a de muitas pessoas.
Sobre o futuro, no início eu não tinha visão nenhuma, muito menos sobre quem eu poderia me tornar com o judô. Eu treinava apenas por hobby. Mas, quando fiz 14 anos, comecei a competir de forma séria. Nesse mesmo ano, conquistei a classificação para o Campeonato Brasileiro de Judô — uma conquista muito importante, já que, em Araucária, antes de mim e do meu irmão, apenas minha sensei havia conseguido isso, 13 anos atrás.
Nesse campeonato, caso eu vencesse, poderia competir internacionalmente — um sonho! Porém, isso não aconteceu. Ganhei quatro lutas, mas perdi duas, o que me deixou fora da competição. Mesmo assim, consegui ficar em sétimo lugar, o que para mim já foi uma grande conquista. Naquele ano, fui o sétimo melhor de todo o Brasil na minha categoria.
A partir daquele dia, descobri que posso ser mais, que tenho potencial para ir ainda mais longe. Desde então, venho treinando intensamente para realizar o meu sonho: ser um campeão olímpico.`,
    
    friends_title: "Amigos e Família",
    friends_content: "Fale sobre as pessoas especiais em sua vida - seus amigos mais próximos e sua família. Compartilhe histórias engraçadas, momentos memoráveis e o que essas pessoas significam para você. Descreva as tradições familiares e amizades duradouras.",
    
    relationship_title: "Relacionamento",
    relationship_content: "Compartilhe sobre sua vida amorosa e relacionamentos significativos. Fale sobre o que você valoriza em um parceiro, suas experiências românticas e o que o amor significa para você. Conte sua história de amor ou suas expectativas para o futuro.",
    
    school_title: "Escola",
    school_content: "Descreva sua jornada educacional desde a infância até hoje. Fale sobre suas escolas favoritas, professores marcantes, matérias que você amava e conquistas acadêmicas. Compartilhe memórias da época de estudante e como a educação impactou sua vida.",
    
    future_title: "Planos Futuros",
    future_content: "Compartilhe seus sonhos e planos para o futuro. Onde você se vê daqui a 5 ou 10 anos? Quais são seus objetivos pessoais e profissionais? Fale sobre seus projetos, aspirações e o legado que deseja deixar.",
    
    // NOVAS CORES DO TEMA ESCURO
    primary_color: "#c03c04",
    secondary_color: "#2d2420",
    background_color: "#3a312c", 
    text_color: "#d4dbcc",
    accent_color: "#d4dbcc"
  };

  let currentCategory = null;
  // --- NOVAS VARIÁVEIS GLOBAIS PARA O CARROSSEL ---
  let currentSlideIndex = 0;
  let totalSlides = 0;

  // --- MUDANÇA AQUI: `categoryMap` agora usa 'images' (plural) como um array ---
  const categoryMap = {
    biography:    { title: 'biography_title',    content: 'biography_content',    images: ['images/biografia.jpg'] },
    profession:   { title: 'profession_title',   content: 'profession_content',   images: ['images/profissao.jpg'] },
    friends:      { title: 'friends_title',      content: 'friends_content',      images: ['images/amigos.jpg', 'images/amigos2.jpg'] },
    relationship: { title: 'relationship_title', content: 'relationship_content', images: ['images/relacionamento.jpg', 'images/relacionamento2.jpg'] },
    school:       { title: 'school_title',       content: 'school_content',       images: ['images/escola.jpg', 'images/escola2.jpg'] },
    future:       { title: 'future_title',       content: 'future_content',       images: ['images/futuro.jpg'] }
  };

  // --- MUDANÇA AQUI: `openModal` foi reescrito para o carrossel ---
  function openModal(category) {
    const config = window.elementSdk ? window.elementSdk.config : defaultConfig;
    const categoryInfo = categoryMap[category];
    
    document.getElementById('modalTitle').textContent = config[categoryInfo.title] || defaultConfig[categoryInfo.title];
    document.getElementById('modalContent').textContent = config[categoryInfo.content] || defaultConfig[categoryInfo.content];
    
    // --- LÓGICA DO CARROSSEL ---
    const slidesContainer = document.querySelector('.carousel-slides');
    const carouselContainer = document.getElementById('modalPhotoContainer');
    
    // 1. Limpa slides antigos
    slidesContainer.innerHTML = ''; 
    
    // 2. Pega as imagens (agora sempre um array)
    const images = categoryInfo.images || [];
    totalSlides = images.length;
    currentSlideIndex = 0;
    
    // 3. Cria e insere os novos slides
    if (totalSlides > 0) {
      images.forEach(imgSrc => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.backgroundImage = `url("${imgSrc}")`;
        slidesContainer.appendChild(slide);
      });
    } else {
      // Fallback se não houver imagens
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.style.backgroundColor = '#2d2420'; // cor de fundo escura
      slidesContainer.appendChild(slide);
    }
    
    // 4. Mostra/Esconde botões
    if (totalSlides > 1) {
      carouselContainer.classList.add('has-multiple-slides');
    } else {
      carouselContainer.classList.remove('has-multiple-slides');
    }
    
    // 5. Reseta a posição do slide
    showSlide(0);
    
    // 6. Abre o modal
    document.getElementById('modalPopup').classList.add('active');
    currentCategory = category;
  }

  // --- MUDANÇA AQUI: `closeModal` agora limpa os slides ---
  function closeModal() {
    document.getElementById('modalPopup').classList.remove('active');
    currentCategory = null;
    
    // Limpa o carrossel para não "piscar" na próxima abertura
    setTimeout(() => {
        const slidesContainer = document.querySelector('.carousel-slides');
        if (slidesContainer) {
            slidesContainer.innerHTML = '';
        }
    }, 400); // Tempo da animação do modal (se houver)
  }

  // --- NOVAS FUNÇÕES DO CARROSSEL ---
  function showSlide(index) {
    const slidesContainer = document.querySelector('.carousel-slides');
    if (!slidesContainer || totalSlides === 0) return;
    
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    
    currentSlideIndex = index;
    slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }
  
  function nextSlide() {
    showSlide(currentSlideIndex + 1);
  }
  
  function prevSlide() {
    showSlide(currentSlideIndex - 1);
  }

  // --- MUDANÇA AQUI: `onConfigChange` foi limpo ---
  async function onConfigChange(config) {
    document.getElementById('mainTitle').textContent = config.main_title || defaultConfig.main_title;
    document.getElementById('subtitle').textContent = config.subtitle || defaultConfig.subtitle;
    document.getElementById('description').textContent = config.description || defaultConfig.description;
    document.getElementById('sectionTitle').textContent = config.section_title || defaultConfig.section_title;
    document.getElementById('sectionSubtitle').textContent = config.section_subtitle || defaultConfig.section_subtitle;
    document.getElementById('biographyTitle').textContent = config.biography_title || defaultConfig.biography_title;
    document.getElementById('professionTitle').textContent = config.profession_title || defaultConfig.profession_title;
    document.getElementById('friendsTitle').textContent = config.friends_title || defaultConfig.friends_title;
    document.getElementById('relationshipTitle').textContent = config.relationship_title || defaultConfig.relationship_title;
    document.getElementById('schoolTitle').textContent = config.school_title || defaultConfig.school_title;
    document.getElementById('futureTitle').textContent = config.future_title || defaultConfig.future_title;

    if (currentCategory) {
      const categoryInfo = categoryMap[currentCategory];
      document.getElementById('modalTitle').textContent = config[categoryInfo.title] || defaultConfig[categoryInfo.title];
      document.getElementById('modalContent').textContent = config[categoryInfo.content] || defaultConfig[categoryInfo.content];
    }

    const primaryColor = config.primary_color || defaultConfig.primary_color;
    const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
    const backgroundColor = config.background_color || defaultConfig.background_color;
    const textColor = config.text_color || defaultConfig.text_color;
    const accentColor = config.accent_color || defaultConfig.accent_color;

    document.body.style.background = secondaryColor;
    document.querySelector('.hero-banner').style.background = primaryColor;

    // Aplica as cores nos elementos corretos
    document.getElementById('closeModal').style.background = primaryColor;
    document.querySelector('#modalPopup > div').style.background = backgroundColor;
    document.querySelector('#modalPopup > div > div[style*="margin-bottom: 30px"] > h2').style.color = textColor; // Título "Sua História"
    document.getElementById('modalContent').style.color = textColor;
    document.getElementById('modalContent').style.borderColor = primaryColor;
    document.getElementById('modalContent').style.background = 'rgba(0,0,0,0.2)'; 
    document.getElementById('modalTitle').style.color = textColor;
    
    document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;
    });
    
    // Cor da borda hover do card
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.borderColor = primaryColor);
        card.addEventListener('mouseleave', () => card.style.borderColor = 'transparent');
    });

    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
      card.style.background = backgroundColor;
    });

    const categoryImages = document.querySelectorAll('.category-image');
    categoryImages.forEach(img => {
      // A cor de fundo não é mais necessária aqui
    });

    const profilePhoto = document.querySelector('.profile-photo');
    // A cor de fundo não é mais necessária aqui

    const titles = document.querySelectorAll('.hero-title, .category-title, .section-title, .section-subtitle');
    titles.forEach(title => {
      title.style.color = textColor;
    });

    const descriptions = document.querySelectorAll('.hero-description, .category-description, .modal-text');
    descriptions.forEach(desc => {
      desc.style.color = accentColor;
    });

    const categoriesSection = document.querySelector('.categories-section');
    categoriesSection.style.background = backgroundColor; 

    document.querySelector('.hero-subtitle').style.color = accentColor;
  }

  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      onConfigChange,
      mapToCapabilities: (config) => ({
        recolorables: [
          {
            get: () => config.primary_color || defaultConfig.primary_color,
            set: (value) => {
              config.primary_color = value;
              window.elementSdk.setConfig({ primary_color: value });
            }
          },
          {
            get: () => config.secondary_color || defaultConfig.secondary_color,
            set: (value) => {
              config.secondary_color = value;
              window.elementSdk.setConfig({ secondary_color: value });
            }
          },
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => config.accent_color || defaultConfig.accent_color,
            set: (value) => {
              config.accent_color = value;
              window.elementSdk.setConfig({ accent_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      }),
      mapToEditPanelValues: (config) => new Map([
        ["main_title", config.main_title || defaultConfig.main_title],
        ["subtitle", config.subtitle || defaultConfig.subtitle],
        ["description", config.description || defaultConfig.description],
        ["section_title", config.section_title || defaultConfig.section_title],
        ["section_subtitle", config.section_subtitle || defaultConfig.section_subtitle],
        ["biography_title", config.biography_title || defaultConfig.biography_title],
        ["biography_content", config.biography_content || defaultConfig.biography_content],
        ["profession_title", config.profession_title || defaultConfig.profession_title],
        ["profession_content", config.profession_content || defaultConfig.profession_content],
        ["friends_title", config.friends_title || defaultConfig.friends_title],
        ["friends_content", config.friends_content || defaultConfig.friends_content],
        ["relationship_title", config.relationship_title || defaultConfig.relationship_title],
        ["relationship_content", config.relationship_content || defaultConfig.relationship_content],
        ["school_title", config.school_title || defaultConfig.school_title],
        ["school_content", config.school_content || defaultConfig.school_content],
        ["future_title", config.future_title || defaultConfig.future_title],
        ["future_content", config.future_content || defaultConfig.future_content]
      ])
    });
  }
  
  // Aplica a configuração inicial caso o SDK não exista (para testes locais)
  if (!window.elementSdk) {
      onConfigChange(defaultConfig);
  }

  // Event Listeners para os cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      openModal(category);
    });
  });

  // Event Listener para fechar o modal
  document.getElementById('closeModal').addEventListener('click', function() {
    closeModal();
  });

  // Fechar modal ao clicar fora dele
  document.getElementById('modalPopup').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // --- NOVOS EVENT LISTENERS DO CARROSSEL ---
  document.getElementById('carouselBtnNext').addEventListener('click', nextSlide);
  document.getElementById('carouselBtnPrev').addEventListener('click', prevSlide);

});

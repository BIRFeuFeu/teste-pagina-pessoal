// Aguarda o HTML ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

  const defaultConfig = {
    main_title: "Seu Nome",
    subtitle: "Sua Profissão ou Frase",
    description: "Escreva aqui uma breve descrição sobre você. Conte um pouco sobre sua personalidade, seus interesses e o que faz você único. Esta é sua oportunidade de se apresentar ao mundo!",
    section_title: "Conheça Minha História",
    section_subtitle: "Explore diferentes aspectos da minha vida e jornada pessoal",
    
    biography_title: "Biografia",
    biography_content: `Eu sou Alfeu Vantuir e, tenho 16 anos e meu aniversário é no dia 22 de julho. Nasci em Curitiba, no ano de 2009, porém sempre morei em Araucária.
Me considero alguém gentil, empático, e amável, e sempre tento fazer o bem, para todos.
Sobre minha personalidade, tenho um humor ácido, e rio por praticamente tudo, gosto de sorrir, e principalmente de ser feliz.`,
    
    profession_title: "Profissão",
    profession_content: `Meu trabalho atual é o judô, esporte que já pratico há 10 anos, desde os meus 6. Comecei como faixa branca e, com o tempo, fui aprendendo e me aperfeiçoando até chegar onde estou hoje, com a faixa verde.
Comecei a me destacar aos 14 anos, quando ainda era faixa amarela. Em 2023, conquistei a classificação para o Campeonato Brasileiro de Judô — um campeonato nacional que reúne atletas de todo o Brasil em busca do pódio.
Consegui ficar em 7º lugar dentre todos do país na minha categoria, e considero isso uma grande conquista — uma conquista que me impulsiona a treinar cada vez mais para chegar ainda mais longe.`,
    
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
  let currentSlideIndex = 0;
  let totalSlides = 0;

  // --- `categoryMap` com os carrosséis de 2 fotos ---
  const categoryMap = {
    biography:    { title: 'biography_title',    content: 'biography_content',    images: ['images/biografia.jpg', 'images/biografia2.jpg', 'images/biografia3.jpg'] },
    profession:   { title: 'profession_title',   content: 'profession_content',   images: ['images/profissao.jpg', 'images/profissao2.jpg'] },
    friends:      { title: 'friends_title',      content: 'friends_content',      images: ['images/amigos.jpg', 'images/amigos2.jpg'] },
    relationship: { title: 'relationship_title', content: 'relationship_content', images: ['images/relacionamento.jpg', 'images/relacionamento2.jpg'] },
    school:       { title: 'school_title',       content: 'school_content',       images: ['images/escola.jpg', 'images/escola2.jpg'] },
    future:       { title: 'future_title',       content: 'future_content',       images: ['images/futuro.jpg'] }
  };

  function openModal(category) {
    const config = window.elementSdk ? window.elementSdk.config : defaultConfig;
    const categoryInfo = categoryMap[category];
    
    document.getElementById('modalTitle').textContent = config[categoryInfo.title] || defaultConfig[categoryInfo.title];
    
    // --- CORREÇÃO AQUI ---
    // Corrigido de "categoryia.content" para "categoryInfo.content"
    document.getElementById('modalContent').textContent = config[categoryInfo.content] || defaultConfig[categoryInfo.content];
    
    const slidesContainer = document.querySelector('.carousel-slides');
    const carouselContainer = document.getElementById('modalPhotoContainer');
    
    slidesContainer.innerHTML = ''; 
    
    const images = categoryInfo.images || [];
    totalSlides = images.length;
    currentSlideIndex = 0;
    
    if (totalSlides > 0) {
      images.forEach(imgSrc => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.backgroundImage = `url("${imgSrc}")`;
        slidesContainer.appendChild(slide);
      });
    } else {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.style.backgroundColor = '#2d2420'; 
      slidesContainer.appendChild(slide);
    }
    
    if (totalSlides > 1) {
      carouselContainer.classList.add('has-multiple-slides');
    } else {
      carouselContainer.classList.remove('has-multiple-slides');
    }
    
    showSlide(0);
    
    document.getElementById('modalPopup').classList.add('active');
    currentCategory = category;
  }

  function closeModal() {
    document.getElementById('modalPopup').classList.remove('active');
    currentCategory = null;
    
    setTimeout(() => {
        const slidesContainer = document.querySelector('.carousel-slides');
        if (slidesContainer) {
            slidesContainer.innerHTML = '';
        }
    }, 400); 
  }

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

    document.getElementById('closeModal').style.background = primaryColor;
    document.querySelector('#modalPopup > div').style.background = backgroundColor;
    document.querySelector('#modalPopup > div > div[style*="margin-bottom: 30px"] > h2').style.color = textColor; 
    document.getElementById('modalContent').style.color = textColor;
    document.getElementById('modalContent').style.borderColor = primaryColor;
    document.getElementById('modalContent').style.background = 'rgba(0,0,0,0.2)'; 
    document.getElementById('modalTitle').style.color = textColor;
    
    document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;
    });
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.borderColor = primaryColor);
        card.addEventListener('mouseleave', () => card.style.borderColor = 'transparent');
    });

    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
      card.style.background = backgroundColor;
    });

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

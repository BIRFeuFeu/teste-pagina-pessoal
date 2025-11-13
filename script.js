document.addEventListener('DOMContentLoaded', () => {

  const defaultConfig = {
    main_title: "Seu Nome",
    subtitle: "Sua Profissão ou Frase",
    description: "Escreva aqui uma breve descrição sobre você. Conte um pouco sobre sua personalidade, seus interesses e o que faz você único.",
    section_title: "Conheça Minha História",
    section_subtitle: "Explore diferentes aspectos da minha vida e jornada pessoal",
    
    biography_title: "Biografia",
    biography_content: `Eu sou Alfeu Vantuir e, tenho 16 anos e meu aniversário é no dia 22 de julho. Nasci em Curitiba, no ano de 2009, porém sempre morei em Araucária.
Me considero alguém gentil, empático, e amável, e sempre tento fazer o bem, para todos.
Sobre minha personalidade, tenho um humor ácido, e rio por praticamente tudo.`,
    
    profession_title: "Profissão",
    profession_content: `Meu trabalho atual é o judô, esporte que já pratico há 10 anos. Comecei como faixa branca e hoje sou faixa verde.
Em 2023, conquistei a classificação para o Campeonato Brasileiro de Judô e fiquei em 7º lugar no ranking nacional da minha categoria.`,
    
    friends_title: "Amigos e Família",
    friends_content: "Fale sobre as pessoas especiais em sua vida - seus amigos mais próximos e sua família.",
    
    relationship_title: "Relacionamento",
    relationship_content: `Esta pessoa ao meu lado se chama Júlia, e tenho o prazer de chamá-la de minha namorada.
Nos aproximamos durante um treinamento de campo (Kangueiko). Nosso primeiro beijo foi no dia 31 de agosto, após um torneio, e desde então seguimos juntos.`,
    
    school_title: "Escola",
    school_content: "Descreva sua jornada educacional, escolas favoritas e matérias que você amava.",
    
    future_title: "Planos Futuros",
    future_content: "Compartilhe seus sonhos e onde você se vê daqui a 5 ou 10 anos.",
    
    // Cores do Tema
    primary_color: "#c03c04",    
    secondary_color: "#2d2420",  
    background_color: "#3a312c", 
    text_color: "#d4dbcc",       
    accent_color: "#d4dbcc"
  };

  let currentCategory = null;
  let currentSlideIndex = 0;
  let totalSlides = 0;

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

        // --- AQUI ESTÁ A MUDANÇA ---
        // Se a categoria for profissão, alinha a imagem ao TOPO.
        // Caso contrário, mantém centralizada.
        if (category === 'profession') {
            slide.style.backgroundPosition = 'top center';
        } else {
            slide.style.backgroundPosition = 'center center';
        }

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
    document.body.style.overflow = 'hidden'; 
    currentCategory = category;
  }

  function closeModal() {
    document.getElementById('modalPopup').classList.remove('active');
    document.body.style.overflow = ''; 
    currentCategory = null;
    
    setTimeout(() => {
        const slidesContainer = document.querySelector('.carousel-slides');
        if (slidesContainer) slidesContainer.innerHTML = '';
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
  
  function nextSlide() { showSlide(currentSlideIndex + 1); }
  function prevSlide() { showSlide(currentSlideIndex - 1); }

  async function onConfigChange(config) {
    const textIds = [
        ['mainTitle', 'main_title'], ['subtitle', 'subtitle'], ['description', 'description'],
        ['sectionTitle', 'section_title'], ['sectionSubtitle', 'section_subtitle'],
        ['biographyTitle', 'biography_title'], ['professionTitle', 'profession_title'],
        ['friendsTitle', 'friends_title'], ['relationshipTitle', 'relationship_title'],
        ['schoolTitle', 'school_title'], ['futureTitle', 'future_title']
    ];

    textIds.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if(el) el.textContent = config[key] || defaultConfig[key];
    });

    if (currentCategory) {
      const categoryInfo = categoryMap[currentCategory];
      document.getElementById('modalTitle').textContent = config[categoryInfo.title] || defaultConfig[categoryInfo.title];
      document.getElementById('modalContent').textContent = config[categoryInfo.content] || defaultConfig[categoryInfo.content];
    }

    const primaryColor = config.primary_color || defaultConfig.primary_color;
    const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
    const backgroundColor = config.background_color || defaultConfig.background_color;
    const textColor = config.text_color || defaultConfig.text_color;

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;

    const titles = document.querySelectorAll('.hero-title, .section-title, .category-title, #modalTitle');
    titles.forEach(el => el.style.color = primaryColor);

    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => card.style.backgroundColor = secondaryColor);
    
    const modalBox = document.querySelector('.modal > div');
    if (modalBox) modalBox.style.backgroundColor = secondaryColor;

    const subtexts = document.querySelectorAll('.hero-subtitle, .section-subtitle, .category-description, p');
    subtexts.forEach(el => el.style.color = textColor);
  }

  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        openModal(category);
    });
  });

  const closeBtn = document.getElementById('closeModal');
  if(closeBtn) closeBtn.addEventListener('click', closeModal);

  const modalPopup = document.getElementById('modalPopup');
  if(modalPopup) {
    modalPopup.addEventListener('click', (e) => {
        if (e.target === modalPopup) closeModal();
    });
  }

  const btnPrev = document.getElementById('carouselBtnPrev');
  const btnNext = document.getElementById('carouselBtnNext');
  
  if(btnPrev) {
      btnPrev.addEventListener('click', (e) => {
          e.stopPropagation();
          prevSlide();
      });
  }
  if(btnNext) {
      btnNext.addEventListener('click', (e) => {
          e.stopPropagation();
          nextSlide();
      });
  }

  document.addEventListener('keydown', (e) => {
      if (!document.getElementById('modalPopup').classList.contains('active')) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') closeModal();
  });

  if (window.elementSdk) {
    window.elementSdk.client.on('config', onConfigChange);
  } else {
    onConfigChange(defaultConfig);
  }
});

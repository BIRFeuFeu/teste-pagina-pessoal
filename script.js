document.addEventListener('DOMContentLoaded', () => {

  // --- LÓGICA DO MENU LATERAL ---
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const sidebar = document.getElementById('sidebar');
  
  // Abrir Menu
  if(menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.add('active');
    });
  }

  // Fechar Menu
  if(menuClose) {
    menuClose.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  }

  // Fechar ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  });

  // --- LÓGICA DO FORMULÁRIO (Visual apenas) ---
  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Obrigado pela mensagem! Entrarei em contato em breve.');
      contactForm.reset();
    });
  }

  // --- DADOS E CORES (Mantidos) ---
  const defaultConfig = {
    main_title: "Alfeu Vantuir",
    subtitle: "Judoca | 16 Anos | Araucária - PR",
    description: "Sou Estudante do Colégio Estadual Professor Júlio Szymanski, onde curso o técnico de Desenvolvimento de Sistemas, e no contra-turno, sou atleta competidor de Judô representando o município de Araucária.",
    section_title: "Conheça Minha História",
    section_subtitle: "Explore os capítulos da minha vida",
    
    biography_title: "Quem Sou Eu",
    biography_content: `Eu sou Alfeu Vantuir, tenho 16 anos e meu aniversário é no dia 22 de julho. Nasci em Curitiba, no ano de 2009, porém sempre morei em Araucária.
Me considero alguém gentil, empático e amável, e sempre tento fazer o bem para todos.
Sobre minha personalidade: tenho um humor ácido, rio por praticamente tudo, gosto de sorrir e, principalmente, de ser feliz.`,
    
    profession_title: "Minha Paixão: Judô",
    profession_content: `Meu trabalho atual é o judô, esporte que pratico há 10 anos, desde os meus 6. Comecei como faixa branca, treinando em Araucária, pelo Judô Araucária, com a minha sensei Jacqueline Osana.
Com o tempo, fui aprendendo e me aperfeiçoando até chegar onde estou hoje, com a faixa verde.

Comecei a me destacar aos 14 anos, quando ainda era faixa amarela. Em 2023, conquistei a classificação para o Campeonato Brasileiro de Judô — um campeonato nacional que reúne atletas de todo o país em busca do pódio.

Consegui ficar em 7º lugar dentre todos os competidores do Brasil na minha categoria, e considero isso uma grande conquista — uma conquista que me impulsiona a treinar cada vez mais para chegar ainda mais longe.`,
    
    friends_title: "Amigos e Família",
    friends_content: "Aqui estarão as histórias com meus amigos e minha família, que são a base de tudo para mim.",
    
    relationship_title: "Minha Namorada",
    relationship_content: `Esta pessoa ao meu lado se chama Júlia, e tenho o prazer de chamá-la de minha namorada.

Não lembro ao certo quando a conheci, mas nos aproximamos mais durante um treinamento de campo chamado Kangueiko, organizado pela academia de judô Tonietto, de Curitiba. Lá, ficamos realmente próximos — treinamos juntos e até nos demos apelidos.

Depois disso, só fomos nos ver novamente em um torneio, também em Curitiba, chamado Bufokan. O torneio aconteceria durante dois dias: o primeiro seria um treinamento e, o segundo, a competição em si.

No primeiro dia, treinamos juntos e conversamos bastante. Já no segundo dia, 31 de agosto, aconteceu o nosso primeiro beijo. Tive a atitude de pedi-la em namoro — e deu tudo certo. Foi incrível! Agora seguimos juntos, firmes e felizes.`,
    
    school_title: "Vida Escolar",
    school_content: "Minha jornada na escola, matérias favoritas e aprendizados.",
    
    future_title: "Planos Futuros",
    future_content: "Meus sonhos e onde pretendo estar nos próximos anos, tanto no esporte quanto na vida pessoal.",
    
    primary_color: "#C03C04",    
    secondary_color: "#2D2420",  
    background_color: "#D4DBCC", 
    text_color: "#2D2420",       
    accent_color: "#D4DBCC"      
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

        if (category === 'profession') {
            slide.style.backgroundPosition = '50% 20%'; 
        } else {
            slide.style.backgroundPosition = 'center center';
        }
        
        slidesContainer.appendChild(slide);
      });
    } else {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.style.backgroundColor = defaultConfig.secondary_color; 
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
    const accentColor = config.accent_color || defaultConfig.accent_color;

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    document.querySelectorAll('.hero-subtitle, .section-subtitle, .hero-description, p').forEach(el => { el.style.color = textColor; });

    const titles = document.querySelectorAll('.hero-title, .section-title, .category-title, #modalTitle');
    titles.forEach(el => el.style.color = primaryColor);

    const cards = document.querySelectorAll('.category-card, .achievement-card, .gallery-item, .contact-form');
    cards.forEach(card => card.style.backgroundColor = secondaryColor);
    
    const modalBox = document.querySelector('.modal > div, .modal-box');
    if (modalBox) modalBox.style.backgroundColor = secondaryColor;

    document.querySelectorAll('.category-description, #modalContent, .achievement-info p, .form-group label, .form-group input, .form-group textarea, .submit-btn').forEach(el => {
        // Ajustes finos
        if(el.tagName === 'LABEL') el.style.color = primaryColor;
        else if(el.tagName === 'BUTTON') { /* mantem estilo do css */ }
        else el.style.color = accentColor;
    });
    
    const closeBtn = document.getElementById('closeModal');
    if(closeBtn) { closeBtn.style.color = accentColor; closeBtn.style.backgroundColor = 'rgba(255,255,255,0.1)'; }
  }

  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        openModal(category);
    });
  });

  const btnPrev = document.getElementById('carouselBtnPrev');
  const btnNext = document.getElementById('carouselBtnNext');
  if(btnPrev) btnPrev.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });
  if(btnNext) btnNext.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });

  document.addEventListener('keydown', (e) => {
      if (!document.getElementById('modalPopup').classList.contains('active')) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') closeModal();
  });
  
  // Botão fechar modal
  const closeBtnModal = document.getElementById('closeModal');
  if(closeBtnModal) closeBtnModal.addEventListener('click', closeModal);
  const modalPopup = document.getElementById('modalPopup');
  if(modalPopup) modalPopup.addEventListener('click', (e) => { if (e.target === modalPopup) closeModal(); });

  if (window.elementSdk) { window.elementSdk.client.on('config', onConfigChange); } 
  else { onConfigChange(defaultConfig); }
});
                                                       

document.addEventListener('DOMContentLoaded', () => {

  // --- PROTEÇÃO CONTRA TELA BRANCA ---
  // Se algo der errado, isso garante que o site apareça depois de 1 segundo
  setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.style.opacity = '1');
  }, 1000);

  // --- 1. ANIMAÇÃO SCROLL REVEAL ---
  const revealElements = document.querySelectorAll('.reveal');
  
  // Configuração do Observador
  const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // Remove o estilo forçado da proteção acima, se existir
              entry.target.style.opacity = ''; 
              observer.unobserve(entry.target);
          }
      });
  }, {
      root: null,
      threshold: 0.1 // Reduzi para 10% para garantir que apareça mais fácil
  });

  revealElements.forEach(el => {
      revealObserver.observe(el);
  });


  // --- 2. MODO ESCURO (DARK MODE) ---
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark' && toggleSwitch) {
          toggleSwitch.checked = true;
      }
  }

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
      }
  }
  
  if(toggleSwitch) {
      toggleSwitch.addEventListener('change', switchTheme, false);
  }


  // --- 3. CONTEÚDO E CONFIGURAÇÕES ---
  const defaultConfig = {
    main_title: "Alfeu Vantuir",
    subtitle: "Judoca | 16 Anos | Araucária - PR",
    description: "Sou Estudante do Colégio Estadual Professor Júlio Szymanski, onde curso o técnico de Desenvolvimento de Sistemas, e no contra-turno, sou atleta competidor de Judô representando o município de Araucária.",
    
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
    relationship_content: `Essa mulher linda ao meu lado se chama Júlia, e tenho o privilégio de chamá-la de amor da minha vida.
    
Estamos juntos desde o dia do nosso primeiro beijo, 31 de agosto, dia em que começou a nossa história de amor.

Não lembro ao certo quando a conheci, mas nos aproximamos muito rápido. Lembro de um treinamento de campo chamado Kangueiko, organizado pela academia de judô Tonietto, de Curitiba. Foi lá que ficamos realmente próximos: treinamos juntos, almoçamos juntos e passamos praticamente o dia inteiro interagindo. Até nos demos apelidos.
Depois disso, só fomos nos ver novamente em um torneio, também em Curitiba, chamado Budokan. O torneio aconteceria em dois dias: o primeiro seria um treinamento e o segundo, a competição em si.

No primeiro dia, treinamos juntos e conversamos bastante. Já no segundo, aconteceu o nosso primeiro beijo, e foi mágico. Depois de passarmos o dia inteiro juntos, eu tive a atitude de pedi-la em namoro, e deu tudo certo. Foi incrível!
Desde então, seguimos juntos, nos amando muito. É um amor recíproco, algo que sempre sonhei e que finalmente encontrei nela, alguém que já me fez tão feliz em tão pouco tempo.

Estamos no nosso segundo mês de namoro e ansiosos por tudo o que ainda vamos viver, juntos e unidos.`,
    
    school_title: "Vida Escolar",
    school_content: "Minha jornada na escola, matérias favoritas e aprendizados.",
    
    future_title: "Planos Futuros",
    future_content: "Meus sonhos e onde pretendo estar nos próximos anos, tanto no esporte quanto na vida pessoal."
  };

  // Configuração dos Modais
  const categoryMap = {
    biography:    { title: 'biography_title',    content: 'biography_content',    images: ['images/biografia.jpg', 'images/biografia2.jpg', 'images/biografia3.jpg'] },
    profession:   { title: 'profession_title',   content: 'profession_content',   images: ['images/profissao.jpg', 'images/profissao2.jpg'] },
    friends:      { title: 'friends_title',      content: 'friends_content',      images: ['images/amigos.jpg', 'images/amigos2.jpg'] },
    relationship: { title: 'relationship_title', content: 'relationship_content', images: ['images/relacionamento.jpg', 'images/relacionamento2.jpg'] },
    school:       { title: 'school_title',       content: 'school_content',       images: ['images/escola.jpg', 'images/escola2.jpg'] },
    future:       { title: 'future_title',       content: 'future_content',       images: ['images/futuro.jpg'] }
  };

  let currentCategory = null;
  let currentSlideIndex = 0;
  let totalSlides = 0;

  function openModal(category) {
    const config = window.elementSdk ? window.elementSdk.config : defaultConfig;
    const categoryInfo = categoryMap[category];
    
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if(modalTitle) modalTitle.textContent = config[categoryInfo.title] || defaultConfig[categoryInfo.title];
    if(modalContent) modalContent.textContent = config[categoryInfo.content] || defaultConfig[categoryInfo.content];
    
    const slidesContainer = document.querySelector('.carousel-slides');
    const carouselContainer = document.getElementById('modalPhotoContainer');
    
    if(slidesContainer) slidesContainer.innerHTML = ''; 
    
    const images = categoryInfo.images || [];
    totalSlides = images.length;
    currentSlideIndex = 0;
    
    if (totalSlides > 0 && slidesContainer) {
      images.forEach(imgSrc => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.backgroundImage = `url("${imgSrc}")`;
        if (category === 'profession') slide.style.backgroundPosition = '50% 20%'; 
        else slide.style.backgroundPosition = 'center center';
        slidesContainer.appendChild(slide);
      });
      if (totalSlides > 1) carouselContainer.classList.add('has-multiple-slides');
      else carouselContainer.classList.remove('has-multiple-slides');
    } else if (slidesContainer) {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.style.backgroundColor = '#2D2420'; 
      slidesContainer.appendChild(slide);
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
  }

  // --- EVENT LISTENERS (CLIQUES) ---
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.getAttribute('data-category')));
  });

  const btnPrev = document.getElementById('carouselBtnPrev');
  const btnNext = document.getElementById('carouselBtnNext');
  if(btnPrev) btnPrev.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });
  if(btnNext) btnNext.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });

  const closeBtnModal = document.getElementById('closeModal');
  if(closeBtnModal) closeBtnModal.addEventListener('click', closeModal);
  const modalPopup = document.getElementById('modalPopup');
  if(modalPopup) modalPopup.addEventListener('click', (e) => { if (e.target === modalPopup) closeModal(); });

  document.addEventListener('keydown', (e) => {
      if (!document.getElementById('modalPopup').classList.contains('active')) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') closeModal();
  });

  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const sidebar = document.getElementById('sidebar');
  if(menuToggle) menuToggle.addEventListener('click', () => sidebar.classList.add('active'));
  if(menuClose) menuClose.addEventListener('click', () => sidebar.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => sidebar.classList.remove('active'));
  });

  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.submit-btn');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
      btn.style.backgroundColor = '#4CAF50';
      setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.backgroundColor = '';
          contactForm.reset();
      }, 3000);
    });
  }

  if (window.elementSdk) { window.elementSdk.client.on('config', onConfigChange); } 
  else { onConfigChange(defaultConfig); }
});

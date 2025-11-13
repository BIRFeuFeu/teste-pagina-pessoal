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
    relationship_content: `Esta pessoa ao meu lado se chama Júlia, e tenho o prazer de chamá-la de minha namorada.
Não lembro ao certo quando a conheci, mas nos aproximamos mais durante um treinamento de campo chamado Kangueiko, organizado pela academia de judô Tonietto, de Curitiba. Lá, ficamos realmente próximos — treinamos juntos e até nos demos apelidos.
Depois disso, só fomos nos ver novamente em um torneio, também em Curitiba, chamado Bufokan. O torneio aconteceria durante dois dias: o primeiro seria um treinamento e, o segundo, a competição em si.
No primeiro dia, treinamos juntos e conversamos bastante. Já no segundo dia, 31 de agosto, aconteceu o nosso primeiro beijo. Tive a atitude de pedi-la em namoro — e deu tudo certo. Foi incrível!
Agora seguimos juntos, e já estamos no nosso segundo mês de namoro, indo para o terceiro.`,
    
    school_title: "Escola",
    school_content: "Descreva sua jornada educacional desde a infância até hoje. Fale sobre suas escolas favoritas, professores marcantes, matérias que você amava e conquistas acadêmicas. Compartilhe memórias da época de estudante e como a educação impactou sua vida.",
    
    future_title: "Planos Futuros",
    future_content: "Compartilhe seus sonhos e planos para o futuro. Onde você se vê daqui a 5 ou 10 anos? Quais são seus objetivos pessoais e profissionais? Fale sobre seus projetos, aspirações e o legado que deseja deixar.",
    
    // CORES DO TEMA ESCURO (Mantidas do seu código original)
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
        
        // --- ALTERAÇÃO FEITA AQUI ---
        // Se a categoria for 'profession', alinha a imagem ao TOPO.
        // Caso contrário, mantém o padrão (centro).
        if (category === 'profession') {
            slide.style.backgroundPosition = 'top center';
        } else {
            slide.style.backgroundPosition = 'center center';
        }
        // -----------------------------

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
    // Atualiza textos
    const ids = [
      ['mainTitle', 'main_title'], ['subtitle', 'subtitle'], ['description', 'description'],
      ['sectionTitle', 'section_title'], ['sectionSubtitle', 'section_subtitle'],
      ['biographyTitle', 'biography_title'], ['professionTitle', 'profession_title'],
      ['friendsTitle', 'friends_title'], ['relationshipTitle', 'relationship_title'],
      ['schoolTitle', 'school_title'], ['futureTitle', 'future_title']
    ];
    ids.forEach(([id, key]) => {
       const el = document.getElementById(id);
       if(el) el.textContent = config[key] || defaultConfig[key];
    });

    if (currentCategory) {
      const categoryInfo = categoryMap[currentCategory];
      document.getElementById('modalTitle').textContent = config[categoryInfo.title] || defaultConfig[categoryInfo.title];
      document.getElementById('modalContent').textContent = config[categoryInfo.content] || defaultConfig[categoryInfo.content];
    }

    // --- APLICAÇÃO DE CORES (Conclusão do código cortado) ---
    const primaryColor = config.primary_color || defaultConfig.primary_color;
    const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
    const backgroundColor = config.background_color || defaultConfig.background_color;
    const textColor = config.text_color || defaultConfig.text_color;

    // Aplica as cores definidas no defaultConfig
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;

    document.querySelectorAll('.hero-title, .section-title, .category-title, #modalTitle').forEach(el => {
        el.style.color = primaryColor;
    });

    document.querySelectorAll('.category-card').forEach(card => {
        card.style.backgroundColor = secondaryColor;
    });
    
    const modalBox = document.querySelector('.modal > div');
    if(modalBox) modalBox.style.backgroundColor = secondaryColor;

    document.querySelectorAll('.hero-subtitle, .section-subtitle, .category-description, p').forEach(el => {
        el.style.color = textColor;
    });
  }

  // --- EVENTOS DE CLIQUE (Essenciais para o site funcionar) ---
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        openModal(card.getAttribute('data-category'));
    });
  });

  const closeBtn = document.getElementById('closeModal');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const modalPopup = document.getElementById('modalPopup');
  if (modalPopup) {
      modalPopup.addEventListener('click', (e) => {
          if (e.target === modalPopup) closeModal();
      });
  }

  const btnPrev = document.getElementById('carouselBtnPrev');
  const btnNext = document.getElementById('carouselBtnNext');
  if (btnPrev) {
      btnPrev.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });
  }
  if (btnNext) {
      btnNext.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });
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

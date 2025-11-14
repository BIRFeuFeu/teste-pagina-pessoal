// --- DADOS DO CONTEÚDO (MOCK DATABASE) ---
const contentData = {
    // Conteúdo da Página Inicial (Hero) - NOVO TEXTO AQUI
    mainTitle: "Alfeu Vantuir",
    subtitle: "Judoca | 16 Anos | Araucária - PR",
    description: "Sou Estudante do Colégio Estadual Professor Júlio Szymanski, onde curso o técnico de Desenvolvimento de Sistemas, e no contra-turno, sou atleta competidor de Judô, representando o município de Araucária.",
    
    // Conteúdo de Biografia - NOVO TEXTO AQUI
    biography_title: "Quem Sou Eu",
    biography_content: "Eu sou Alfeu Vantuir e, tenho 16 anos e meu aniversário é no dia 22 de julho. Nasci em Curitiba, no ano de 2009, porém sempre morei em Araucária.\nMe considero alguém gentil, empático, e amável, e sempre tento fazer o bem, para todos.\nSobre minha personalidade, tenho um humor ácido, e rio por praticamente tudo, gosto de sorrir, e principalmente de ser feliz.",
    
    // Conteúdo de Profissão - NOVO TEXTO AQUI
    profession_title: "Minha Paixão: Judô",
    profession_content: "Meu trabalho atual é o judô, esporte que já pratico há 10 anos, desde os meus 6. Comecei como faixa branca, treinando em Araucária, pelo Judô Araucária, e com minha Sensei Jacqueline Osana.\nE com o tempo, fui aprendendo e me aperfeiçoando até chegar onde estou hoje, com a faixa verde.\nComecei a me destacar aos 14 anos, quando ainda era faixa amarela. Em 2023, conquistei a classificação para o Campeonato Brasileiro de Judô — um campeonato nacional que reúne atletas de todo o Brasil em busca do pódio.\nConsegui ficar em 7º lugar dentre todos do país na minha categoria, e considero isso uma grande conquista — uma conquista que me impulsiona a treinar cada vez mais para chegar ainda mais longe.",
    
    // Conteúdo Amigos e Família (INALTERADO)
    friends_title: "Amigos e Família",
    friends_content: "Minha família é a minha base. Sou extremamente grato aos meus pais e irmãs, que me apoiam incondicionalmente no esporte e nos estudos. Meus amigos são aqueles que tornam o dia a dia na escola e nos treinos mais leve, dividindo risadas e desafios.",
    
    // Conteúdo Relacionamento - NOVO TEXTO AQUI
    relationship_title: "Minha Namorada",
    relationship_content: "Essa mulher linda ao meu lado se chama Júlia, e tenho o privilégio de chamá-la de amor da minha vida.\nEstamos juntos desde o dia do nosso primeiro beijo, 31 de agosto, dia em que começou a nossa história de amor.\nNão lembro ao certo quando a conheci, mas nos aproximamos muito rápido. Lembro de um treinamento de campo chamado Kangueiko, organizado pela academia de judô Tonietto, de Curitiba. Foi lá que ficamos realmente próximos: treinamos juntos, almoçamos juntos e passamos praticamente o dia inteiro interagindo. Até nos demos apelidos.\nDepois disso, só fomos nos ver novamente em um torneio, também em Curitiba, chamado Budokan. O torneio aconteceria em dois dias: o primeiro seria um treinamento e o segundo, a competição em si.\nNo primeiro dia, treinamos juntos e conversamos bastante. Já no segundo, aconteceu o nosso primeiro beijo, e foi mágico. Depois de passarmos o dia inteiro juntos, eu tive a atitude de pedi-la em namoro, e deu tudo certo. Foi incrível!\nDesde então, seguimos juntos, nos amando muito. É um amor recíproco, algo que sempre sonhei e que finalmente encontrei nela, alguém que já me fez tão feliz em tão pouco tempo.\nEstamos no nosso segundo mês de namoro e ansiosos por tudo o que ainda vamos viver, juntos e unidos.",
    
    // Conteúdo Vida Escolar (INALTERADO)
    school_title: "Vida Escolar",
    school_content: "Atualmente, sou aluno do Colégio Estadual Professor Júlio Szymanski, cursando o Técnico em Desenvolvimento de Sistemas. O curso me permite explorar minha paixão por tecnologia e programação, equilibrando minha rotina com os treinos de Judô.",

    // Conteúdo Planos Futuros (INALTERADO)
    future_title: "Planos Futuros",
    future_content: "Meus planos futuros são conciliar minha carreira no Judô, visando competições de alto nível, com a formação na área de TI. Pretendo ingressar em uma faculdade de Ciência da Computação e aplicar meu raciocínio lógico, aprimorado no esporte, na programação.",
};

// --- Mapeamento de conteúdo para os cards e modais ---
const categoryMap = {
    biography:    { title: 'biography_title',    content: 'biography_content',    images: ['images/biografia.jpg', 'images/biografia2.jpg', 'images/biografia3.jpg'] },
    profession:   { title: 'profession_title',   content: 'profession_content',   images: ['images/profissao.jpg', 'images/profissao2.jpg', 'images/campeonato_2023.jpg'] }, 
    friends:      { title: 'friends_title',      content: 'friends_content',      images: ['images/amigos.jpg', 'images/amigos2.jpg', 'images/grupo_escola.png'] }, 
    relationship: { title: 'relationship_title', content: 'relationship_content', images: ['images/relacionamento.jpg', 'images/relacionamento2.jpg', 'images/julia_judo.jpg'] }, 
    school:       { title: 'school_title',       content: 'school_content',       images: ['images/escola.jpg', 'images/escola2.jpg'] }, 
    future:       { title: 'future_title',       content: 'future_content',       images: ['images/futuro.jpg'] },
};


// --- INJEÇÃO INICIAL DE CONTEÚDO ---
document.addEventListener('DOMContentLoaded', () => {
    // Injeta textos do Hero
    document.getElementById('mainTitle').textContent = contentData.mainTitle;
    document.getElementById('subtitle').textContent = contentData.subtitle;
    document.getElementById('description').textContent = contentData.description;

    // Injeta textos nos cards (Seus IDs foram definidos no HTML)
    document.getElementById('biographyTitle').textContent = contentData.biography_title;
    document.getElementById('professionTitle').textContent = contentData.profession_title;
    document.getElementById('friendsTitle').textContent = contentData.friends_title;
    document.getElementById('relationshipTitle').textContent = contentData.relationship_title;
    document.getElementById('schoolTitle').textContent = contentData.school_title;
    document.getElementById('futureTitle').textContent = contentData.future_title;
});


// --- LÓGICA DO SIDEBAR E TEMA ---
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const themeSwitch = document.getElementById('checkbox');
const body = document.body;

// Função para aplicar o tema e persistir no localStorage
function applyTheme(isDark) {
    if (isDark) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeSwitch.checked = true;
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeSwitch.checked = false;
    }
}

// Inicializa o tema ao carregar
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme === 'dark');

// Listener para o toggle do tema
themeSwitch.addEventListener('change', () => {
    applyTheme(themeSwitch.checked);
});

// Listener para abrir/fechar o sidebar
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

menuClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Fecha a sidebar ao clicar em um link
document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});


// --- LÓGICA DO MODAL (POP-UP) E CARROSSEL ---
const modal = document.getElementById('modalPopup');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const carouselSlidesContainer = modal.querySelector('.carousel-slides');
const categories = document.querySelectorAll('.category-card');
const carouselBtnPrev = document.getElementById('carouselBtnPrev');
const carouselBtnNext = document.getElementById('carouselBtnNext');

let currentSlide = 0;
let slideCount = 0;

function updateCarousel(direction = 0) {
    if (slideCount <= 1) return; // Não faz nada se houver 0 ou 1 slide

    currentSlide = (currentSlide + direction + slideCount) % slideCount;
    const offset = -currentSlide * 100;
    carouselSlidesContainer.style.transform = `translateX(${offset}%)`;
}

function buildCarousel(images) {
    carouselSlidesContainer.innerHTML = ''; // Limpa slides antigos
    slideCount = images.length;
    currentSlide = 0;

    if (slideCount > 1) {
        modal.querySelector('.modal-carousel').classList.add('has-multiple-slides');
    } else {
        modal.querySelector('.modal-carousel').classList.remove('has-multiple-slides');
    }

    images.forEach(imgSrc => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.backgroundImage = `url(${imgSrc})`;
        carouselSlidesContainer.appendChild(slide);
    });

    updateCarousel(0); // Garante que o primeiro slide seja exibido
}

// Abrir o Modal
categories.forEach(card => {
    card.addEventListener('click', (e) => {
        const categoryKey = card.getAttribute('data-category');
        const data = categoryMap[categoryKey];

        // 1. Injeta título e conteúdo
        // Substituímos o \n (nova linha) por </p><p> para criar parágrafos no modal
        modalTitle.textContent = contentData[data.title];
        modalContent.innerHTML = `<p>${contentData[data.content].replace(/\n/g, '</p><p>')}</p>`;

        // 2. Constrói o carrossel de fotos
        buildCarousel(data.images);

        modal.classList.add('active');
    });
});

// Fechar o Modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    currentSlide = 0; // Reseta o carrossel
});

// Controles do Carrossel
carouselBtnPrev.addEventListener('click', () => updateCarousel(-1));
carouselBtnNext.addEventListener('click', () => updateCarousel(1));


// --- SCROLL REVEAL (INTERSECTION OBSERVER) ---
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Para de observar após a animação
        }
    });
}, {
    threshold: 0.1 // A animação começa quando 10% do elemento está visível
});

revealElements.forEach(element => {
    observer.observe(element);
});

// --- LÓGICA DO FORMULÁRIO DE CONTATO (SIMULAÇÃO) ---
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const submitBtn = this.querySelector('.submit-btn');
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // Simulação de delay de envio (2 segundos)
    setTimeout(() => {
        submitBtn.innerHTML = 'Enviado! <i class="fas fa-check"></i>';
        submitBtn.style.backgroundColor = '#28a745'; // Verde
        
        // Limpa o formulário após a simulação
        this.reset();
        
        // Volta ao normal após 3 segundos
        setTimeout(() => {
            submitBtn.innerHTML = 'Enviar <i class="fas fa-paper-plane"></i>';
            submitBtn.style.backgroundColor = 'var(--color-accent)'; 
            submitBtn.disabled = false;
        }, 3000);
        
    }, 2000);
});
                          

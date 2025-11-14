// --- DADOS DO CONTEÚDO (MOCK DATABASE) ---
// Note: Você pode querer adicionar as imagens da sua galeria aqui se quiser que elas apareçam no carrossel do modal.
const contentData = {
    // Conteúdo da Página Inicial (Hero)
    mainTitle: "Alfeu Vantuir",
    subtitle: "Judoca | 16 Anos | Araucária - PR",
    description: "Sou Estudante do Colégio Estadual Professor Júlio Szymanski, onde curso o técnico de Desenvolvimento de Sistemas, e no contra-turno, sou atleta competidor de Judô representando o município de Araucária.",
    
    // Conteúdo de Biografia
    biography_title: "Quem Sou Eu",
    biography_content: "Eu sou Alfeu Vantuir, tenho 16 anos e meu aniversário é em 2009, porém sempre morei em Araucária. Minha família é meu bem mais precioso, e sempre tento fazer o bem para todos. Sobre mim? Sou quem faz as pessoas sorrir e, principalmente, meu espelho sorrir.",
    
    // Conteúdo de Profissão (Judô)
    profession_title: "Minha Paixão: Judô",
    profession_content: "Comecei no Judô em 2015, na faixa branca. Dediquei-me com foco, avançando anualmente até alcançar a Faixa Verde em 2023. Em 2023, fui 7º lugar no Campeonato Brasileiro de Judô, representando o estado do Paraná. Minha maior inspiração é o meu Sensei, que sempre me guiou.",
    
    // Conteúdo Amigos e Família
    friends_title: "Amigos e Família",
    friends_content: "Minha família é a minha base. Sou extremamente grato aos meus pais e irmãs, que me apoiam incondicionalmente no esporte e nos estudos. Meus amigos são aqueles que tornam o dia a dia na escola e nos treinos mais leve, dividindo risadas e desafios.",
    
    // Conteúdo Relacionamento
    relationship_title: "Minha Namorada",
    relationship_content: "Eu e minha namorada Julia começamos a namorar em 2024. Nossa história é construída em base de apoio mútuo, respeito e muito carinho. Ela é minha maior apoiadora fora do tatame.",
    
    // Conteúdo Vida Escolar
    school_title: "Vida Escolar",
    school_content: "Atualmente, sou aluno do Colégio Estadual Professor Júlio Szymanski, cursando o Técnico em Desenvolvimento de Sistemas. O curso me permite explorar minha paixão por tecnologia e programação, equilibrando minha rotina com os treinos de Judô.",

    // Conteúdo Planos Futuros
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

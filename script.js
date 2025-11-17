/* =================================================== */
/* --- 1. CONFIGURAÇÃO GERAL (TEMA E DADOS) --- */
/* =================================================== */

const themeToggle = document.getElementById("checkbox");
const currentTheme = localStorage.getItem("theme");
const defaultLanguage = "pt-BR";
let siteData = {};

// Aplica o tema salvo (dark/light)
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        themeToggle.checked = true;
    }
}

// Função para alternar o tema
themeToggle.addEventListener("change", function () {
    if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
});

/* =================================================== */
/* --- 2. CONTROLE DO MENU LATERAL (SIDEBAR) --- */
/* =================================================== */

function setupMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Abrir menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    // Fechar menu
    if (menuClose) {
        menuClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }
  
    // Fechar menu ao clicar num link (para telemóveis)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });
}

/* =================================================== */
/* --- 3. ANIMAÇÃO DE SCROLL (COM INTERSECTIONOBSERVER) --- */
/* (Esta seção foi substituída para melhor performance) */
/* =================================================== */

function setupScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");

    // Configurações do Observer
    const observerOptions = {
        root: null, // 'null' significa a viewport do navegador
        rootMargin: "0px",
        threshold: 0.1 // Ativa quando 10% do item estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 'entry.isIntersecting' é true se o elemento está na tela
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Parar de observar o elemento depois que ele já foi revelado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Inicia a observação em cada elemento .reveal
    revealElements.forEach(el => observer.observe(el));
}


/* =================================================== */
/* --- 4. BUSCA E POPULAÇÃO DE DADOS (JSON) --- */
/* =================================================== */

async function fetchData(lang = defaultLanguage) {
    try {
        const response = await fetch(`data_${lang}.json`);
        if (!response.ok) {
            throw new Error(`Erro ao carregar dados: ${response.statusText}`);
        }
        siteData = await response.json();
        populateContent();
    } catch (error) {
        console.error("Falha ao buscar dados:", error);
    }
}

// Função para popular o conteúdo
function populateContent() {
    if (!siteData.hero) return; // Verifica se os dados existem

    // Hero
    document.getElementById('mainTitle').textContent = siteData.hero.title;
    document.getElementById('subtitle').textContent = siteData.hero.subtitle;
    document.getElementById('description').textContent = siteData.hero.description;

    // Seção "Conheça Minha História"
    document.getElementById('sectionTitle').textContent = siteData.history.sectionTitle;
    document.getElementById('sectionSubtitle').textContent = siteData.history.sectionSubtitle;

    // Popula os 6 cards de categoria
    siteData.history.categories.forEach(category => {
        const card = document.querySelector(`.category-card[data-category="${category.id}"]`);
        if (card) {
            card.querySelector('.category-title').textContent = category.title;
            // A descrição já está no HTML, mas poderíamos sobrepor:
            // card.querySelector('.category-description').textContent = category.description; 
        }
    });
  
    // Atualiza os títulos dos Cards (que também são usados no Modal)
    const biographyTitle = document.getElementById('biographyTitle');
    const professionTitle = document.getElementById('professionTitle');
    const friendsTitle = document.getElementById('friendsTitle');
    const relationshipTitle = document.getElementById('relationshipTitle');
    const schoolTitle = document.getElementById('schoolTitle');
    const futureTitle = document.getElementById('futureTitle');

    if (biographyTitle) biographyTitle.textContent = siteData.history.categories.find(c => c.id === 'biography').title;
    if (professionTitle) professionTitle.textContent = siteData.history.categories.find(c => c.id === 'profession').title;
    if (friendsTitle) friendsTitle.textContent = siteData.history.categories.find(c => c.id === 'friends').title;
    if (relationshipTitle) relationshipTitle.textContent = siteData.history.categories.find(c => c.id === 'relationship').title;
    if (schoolTitle) schoolTitle.textContent = siteData.history.categories.find(c => c.id === 'school').title;
    if (futureTitle) futureTitle.textContent = siteData.history.categories.find(c => c.id === 'future').title;
}

/* =================================================== */
/* --- 5. CONTROLO DO MODAL (POP-UP) E CARROSSEL --- */
/* =================================================== */

let currentSlide = 0;

function setupModal() {
    const modal = document.getElementById('modalPopup');
    const closeModalBtn = document.getElementById('closeModal');
    const categoryCards = document.querySelectorAll('.category-card');
    
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const slidesContainer = document.querySelector('.carousel-slides');
    const photoContainer = document.getElementById('modalPhotoContainer');
    
    const prevBtn = document.getElementById('carouselBtnPrev');
    const nextBtn = document.getElementById('carouselBtnNext');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.getAttribute('data-category');
            const categoryData = siteData.history.categories.find(c => c.id === categoryId);
            
            if (categoryData) {
                // 1. Popula conteúdo de texto
                modalTitle.textContent = categoryData.title;
                // Converte quebras de linha (\n) em <br> para o HTML
                modalContent.innerHTML = categoryData.modal_text.replace(/\n/g, '<br>');

                // 2. Popula o carrossel de fotos
                slidesContainer.innerHTML = ''; // Limpa fotos anteriores
                currentSlide = 0; // Reseta o slide
                
                categoryData.photos.forEach(photoUrl => {
                    const slide = document.createElement('div');
                    slide.className = 'carousel-slide';
                    slide.style.backgroundImage = `url('${photoUrl}')`;
                    slidesContainer.appendChild(slide);
                });
                
                // 3. Mostra/esconde botões do carrossel
                const totalSlides = categoryData.photos.length;
                if (totalSlides > 1) {
                    photoContainer.classList.add('has-multiple-slides');
                } else {
                    photoContainer.classList.remove('has-multiple-slides');
                }
                
                // 4. Mostra o primeiro slide
_               updateCarousel(totalSlides);
                
                // 5. Abre o modal
                modal.classList.add('active');
            }
        });
    });

    // Fechar o modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
    }
    // Fechar ao clicar fora da caixa (opcional)
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Controlos do Carrossel
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const totalSlides = slidesContainer.children.length;
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel(totalSlides);
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const totalSlides = slidesContainer.children.length;
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel(totalSlides);
        });
    }
}

// Função auxiliar para atualizar o carrossel
function updateCarousel(totalSlides) {
    const slidesContainer = document.querySelector('.carousel-slides');
    if (slidesContainer) {
        const offset = -currentSlide * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }
}


/* =================================================== */
/* --- 6. LÓGICA DO BOTÃO "CARREGAR MAIS" (GALERIA) --- */
/* =================================================== */

/* Esta função adiciona a funcionalidade ao botão "Ver Mais Fotos" 
  que só aparece em ecrãs de telemóvel (controlado pelo CSS).
*/
function setupGalleryLoadMore() {
  const galleryGrid = document.getElementById('galleryGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  // Se os elementos existirem na página
  if (galleryGrid && loadMoreBtn) {
    
    loadMoreBtn.addEventListener('click', function() {
      
      // 1. Adiciona a classe "expanded" à grelha
      // O CSS vai tratar de mostrar os itens escondidos
      galleryGrid.classList.add('expanded');
      
      // 2. O botão será escondido automaticamente pelo CSS
      // (graças à regra ".gallery-grid.expanded + .load-more-btn")
    });
  }
}

/* =================================================== */
/* --- 7. EVENT LISTENERS (QUANDO A PÁGINA CARREGA) --- */
/* =================================================== */

// Quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function() {
    setupMenu();
    setupModal();
    setupGalleryLoadMore(); // Nova função da galeria
    fetchData(); // Busca os dados do JSON
    
// Ativa o novo IntersectionObserver
    setupScrollReveal();
});

// O Evento de scroll FOI REMOVIDO por performance.
// window.addEventListener('scroll', scrollReveal);

/* =================================================== */
/* --- 10. LÓGICA DO BOTÃO "CARREGAR MAIS" (GALERIA) --- */
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

// Chame a nova função quando o conteúdo da página carregar
document.addEventListener("DOMContentLoaded", function() {
  // (O seu código de "reveal", "modal" e "menu" já está aqui)
  
  // Adicione a chamada para a nova função
  setupGalleryLoadMore();
});

// Nota: Se o seu "DOMContentLoaded" já existe, 
// apenas adicione a linha setupGalleryLoadMore(); dentro dele.

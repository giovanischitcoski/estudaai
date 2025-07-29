// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona elementos principais da página
    const videoGrid = document.getElementById('videoGrid'); // Grade de vídeos
    const subjectFilter = document.getElementById('subject'); // Filtro por matéria
    const searchBox = document.querySelector('.search-box input'); // Campo de busca
    const searchBtn = document.querySelector('.search-box button'); // Botão de busca
    
    // =============================================
    // DADOS DE EXEMPLO DOS VÍDEOS (em aplicação real viria de uma API)
    // =============================================
    const videos = [
        {
            id: 1,
            title: 'Funções de 1º grau - Introdução',
            description: 'Aprenda os conceitos básicos de funções de primeiro grau e como aplicá-las em problemas do ENEM.',
            duration: '08:40',
            subject: 'matematica',
            thumbnail: 'https://i.ytimg.com/vi/4q2N2HzSivA/maxresdefault.jpg',
            videoUrl: 'https://www.youtube.com/embed/4q2N2HzSivA?si=gAoMdLsaNhitz6QK'
        },
        // ... (outros objetos de vídeo)
    ];
    
    // =============================================
    // FUNÇÃO PARA RENDERIZAR OS VÍDEOS NA TELA
    // =============================================
    function renderVideos(videosToRender) {
        // Limpa a grade de vídeos antes de renderizar
        videoGrid.innerHTML = '';
        
        // Mostra mensagem se não houver resultados
        if (videosToRender.length === 0) {
            videoGrid.innerHTML = '<p class="no-results">Nenhum vídeo encontrado. Tente alterar os filtros.</p>';
            return;
        }
        
        // Para cada vídeo, cria um card na grade
        videosToRender.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card scroll-animate';
            
            // Obtém a classe CSS baseada na matéria do vídeo
            const subjectClass = `subject-${video.subject}`;
            
            // HTML do card do vídeo
            videoCard.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                    <span class="video-duration">${video.duration}</span>
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                    <span class="video-subject ${subjectClass}">${getSubjectName(video.subject)}</span>
                </div>
            `;
            
            // Adiciona evento de clique para abrir o modal do vídeo
            videoCard.addEventListener('click', function() {
                openVideoModal(video);
            });
            
            // Adiciona o card à grade
            videoGrid.appendChild(videoCard);
        });
        
        // Dispara animações de scroll para os novos elementos
        setTimeout(() => {
            const scrollElements = document.querySelectorAll('.scroll-animate');
            scrollElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate');
                }
            });
        }, 100);
    }
    
    // =============================================
    // FUNÇÃO PARA OBTER O NOME COMPLETO DA MATÉRIA
    // =============================================
    function getSubjectName(subjectKey) {
        const subjects = {
            'matematica': 'Matemática',
            'portugues': 'Português',
            'biologia': 'Biologia',
            'historia': 'História',
            'geografia': 'Geografia',
            'fisica': 'Física',
            'quimica': 'Química',
            'redacao': 'Redação'
        };
        
        return subjects[subjectKey] || subjectKey;
    }
    
    // =============================================
    // FUNÇÃO PARA ABRIR O MODAL DO VÍDEO
    // =============================================
    function openVideoModal(video) {
        const modal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('videoFrame');
        const videoTitle = document.getElementById('videoTitle');
        const videoDescription = document.getElementById('videoDescription');
        const videoDuration = document.getElementById('videoDuration');
        const videoSubject = document.getElementById('videoSubject');
        const materialLink = document.getElementById('materialLink');
        
        // Preenche o modal com os dados do vídeo
        videoFrame.src = video.videoUrl;
        videoTitle.textContent = video.title;
        videoDescription.textContent = video.description;
        videoDuration.textContent = `Duração: ${video.duration}`;
        videoSubject.textContent = getSubjectName(video.subject);
        materialLink.href = `content.html?video=${video.id}`;
        
        // Mostra o modal e desabilita o scroll da página
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Fecha o modal ao clicar no botão X
        document.querySelector('.close-modal').addEventListener('click', function() {
            closeVideoModal();
        });
        
        // Fecha o modal ao clicar fora do conteúdo
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeVideoModal();
            }
        });
    }
    
    // =============================================
    // FUNÇÃO PARA FECHAR O MODAL DO VÍDEO
    // =============================================
    function closeVideoModal() {
        const modal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('videoFrame');
        
        // Limpa o vídeo e esconde o modal
        videoFrame.src = '';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Reabilita o scroll da página
    }
    
    // =============================================
    // FUNÇÃO PARA FILTRAR OS VÍDEOS
    // =============================================
    function filterVideos() {
        const selectedSubject = subjectFilter.value; // Matéria selecionada
        const searchTerm = searchBox.value.toLowerCase(); // Termo de busca
        
        let filteredVideos = videos;
        
        // Filtra por matéria
        if (selectedSubject !== 'all') {
            filteredVideos = filteredVideos.filter(video => video.subject === selectedSubject);
        }
        
        // Filtra por termo de busca (no título ou descrição)
        if (searchTerm) {
            filteredVideos = filteredVideos.filter(video => 
                video.title.toLowerCase().includes(searchTerm) || 
                video.description.toLowerCase().includes(searchTerm)
            );
        }
        
        // Renderiza os vídeos filtrados
        renderVideos(filteredVideos);
    }
    
    // =============================================
    // EVENT LISTENERS
    // =============================================
    
    // Filtra vídeos quando muda a matéria selecionada
    subjectFilter.addEventListener('change', filterVideos);
    
    // Filtra vídeos ao clicar no botão de busca
    searchBtn.addEventListener('click', filterVideos);
    
    // Filtra vídeos ao pressionar Enter no campo de busca
    searchBox.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterVideos();
        }
    });
    
    // Verifica se há filtro de matéria na URL
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject');
    
    // Define o filtro se for uma matéria válida
    if (subjectParam && ['matematica', 'portugues', 'biologia', 'historia', 'geografia', 'fisica', 'quimica', 'redacao'].includes(subjectParam)) {
        subjectFilter.value = subjectParam;
    }
    
    // Renderização inicial de todos os vídeos
    renderVideos(videos);
    
    // Aplica filtro se houver parâmetro na URL
    if (subjectParam) {
        filterVideos();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const videoGrid = document.getElementById('videoGrid');
    const subjectFilter = document.getElementById('subject');
    const searchBox = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');
    
    // Sample video data (in a real app, this would come from an API)
    const videos = [
        {
            id: 1,
            title: 'Funções de 1º grau - Introdução',
            description: 'Aprenda os conceitos básicos de funções de primeiro grau e como aplicá-las em problemas do ENEM.',
            duration: '15:30',
            subject: 'matematica',
            thumbnail: 'videos/math-thumb1.jpg',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1'
        },
        {
            id: 2,
            title: 'Análise sintática - Sujeito e predicado',
            description: 'Domine a identificação do sujeito e predicado em frases para a prova de Linguagens.',
            duration: '22:15',
            subject: 'portugues',
            thumbnail: 'videos/portuguese-thumb1.jpg',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2'
        },
        {
            id: 3,
            title: 'Ecologia - Cadeias alimentares',
            description: 'Entenda como funcionam as relações alimentares entre os seres vivos nos ecossistemas.',
            duration: '18:45',
            subject: 'biologia',
            thumbnail: 'videos/bio-thumb1.jpg',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3'
        },
        {
            id: 4,
            title: 'Brasil Colônia - Ciclo do açúcar',
            description: 'Aprenda sobre o período açucareiro no Brasil colonial e sua importância histórica.',
            duration: '25:10',
            subject: 'historia',
            thumbnail: 'videos/history-thumb1.jpg',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4'
        },
        {
            id: 5,
            title: 'Geometria espacial - Prismas',
            description: 'Conheça as características e fórmulas dos prismas para resolver questões de geometria.',
            duration: '20:30',
            subject: 'matematica',
            thumbnail: 'videos/math-thumb2.jpg',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5'
        },
        {
            id: 6,
            title: 'Interpretação de textos - Dicas práticas',
            description: 'Técnicas para melhorar sua interpretação de textos e acertar mais questões.',
            duration: '17:20',
            subject: 'portugues',
            thumbnail: 'videos/portuguese-thumb2.jpg',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_6'
        },
        {
            id: 7,
            title: 'Genética - Primeira lei de Mendel',
            description: 'Compreenda os fundamentos da genética clássica com os experimentos de Mendel.',
            duration: '19:55',
            subject: 'biologia',
            thumbnail: 'videos/bio-thumb2.jpg',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_7'
        },
        {
            id: 8,
            title: 'Guerra Fria - Principais eventos',
            description: 'Os acontecimentos mais importantes do conflito ideológico entre EUA e URSS.',
            duration: '23:40',
            subject: 'historia',
            thumbnail: 'videos/history-thumb2.jpg',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_8'
        }
    ];
    
    // Function to render videos
    function renderVideos(videosToRender) {
        videoGrid.innerHTML = '';
        
        if (videosToRender.length === 0) {
            videoGrid.innerHTML = '<p class="no-results">Nenhum vídeo encontrado. Tente alterar os filtros.</p>';
            return;
        }
        
        videosToRender.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card scroll-animate';
            
            // Get subject class based on video subject
            const subjectClass = `subject-${video.subject}`;
            
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
            
            videoCard.addEventListener('click', function() {
                openVideoModal(video);
            });
            
            videoGrid.appendChild(videoCard);
        });
        
        // Trigger scroll animations for new elements
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
    
    // Function to get subject name
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
    
    // Function to open video modal
    function openVideoModal(video) {
        const modal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('videoFrame');
        const videoTitle = document.getElementById('videoTitle');
        const videoDescription = document.getElementById('videoDescription');
        const videoDuration = document.getElementById('videoDuration');
        const videoSubject = document.getElementById('videoSubject');
        const materialLink = document.getElementById('materialLink');
        
        videoFrame.src = video.videoUrl;
        videoTitle.textContent = video.title;
        videoDescription.textContent = video.description;
        videoDuration.textContent = `Duração: ${video.duration}`;
        videoSubject.textContent = getSubjectName(video.subject);
        materialLink.href = `content.html?video=${video.id}`;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Close modal when clicking the X button
        document.querySelector('.close-modal').addEventListener('click', function() {
            closeVideoModal();
        });
        
        // Close modal when clicking outside the modal content
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeVideoModal();
            }
        });
    }
    
    // Function to close video modal
    function closeVideoModal() {
        const modal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('videoFrame');
        
        videoFrame.src = '';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Function to filter videos
    function filterVideos() {
        const selectedSubject = subjectFilter.value;
        const searchTerm = searchBox.value.toLowerCase();
        
        let filteredVideos = videos;
        
        // Filter by subject
        if (selectedSubject !== 'all') {
            filteredVideos = filteredVideos.filter(video => video.subject === selectedSubject);
        }
        
        // Filter by search term
        if (searchTerm) {
            filteredVideos = filteredVideos.filter(video => 
                video.title.toLowerCase().includes(searchTerm) || 
                video.description.toLowerCase().includes(searchTerm)
            );
        }
        
        renderVideos(filteredVideos);
    }
    
    // Event listeners
    subjectFilter.addEventListener('change', filterVideos);
    searchBtn.addEventListener('click', filterVideos);
    searchBox.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterVideos();
        }
    });
    
    // Check URL for subject filter
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject');
    
    if (subjectParam && ['matematica', 'portugues', 'biologia', 'historia', 'geografia', 'fisica', 'quimica', 'redacao'].includes(subjectParam)) {
        subjectFilter.value = subjectParam;
    }
    
    // Initial render
    renderVideos(videos);
    
    // Trigger filter if subject param exists
    if (subjectParam) {
        filterVideos();
    }
});
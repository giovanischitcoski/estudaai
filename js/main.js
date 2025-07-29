// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // TOGGLE DO MENU MOBILE
    // =============================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' no menu de navegação
            mainNav.classList.toggle('active');
            
            // Alterna o ícone entre barras (menu) e 'X' (fechar)
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // =============================================
    // FECHAR MENU MOBILE AO CLICAR EM UM LINK
    // =============================================
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // =============================================
    // DESTACAR LINK ATIVO BASEADO NA PÁGINA ATUAL
    // =============================================
    function setActiveLink() {
        // Obtém o nome da página atual (ex: 'index.html')
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            // Obtém o nome da página do link
            const linkPage = link.getAttribute('href').split('/').pop();
            
            // Remove todas as classes 'active' primeiro
            link.classList.remove('active');
            
            // Verifica se o link corresponde à página atual
            if (currentPage === linkPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage.includes(linkPage) && linkPage !== '')) {
                link.classList.add('active');
                
                // Adiciona propriedades de animação
                link.style.transition = 'all 0.3s ease';
            }
        });
    }
    
    // Define o link ativo quando a página carrega
    setActiveLink();
    
    // Adiciona evento de clique para cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Fecha o menu mobile se estiver aberto
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                }
            }
            
            // Atualiza o link ativo após um pequeno delay para permitir a navegação
            setTimeout(setActiveLink, 100);
        });
    });
    
    // =============================================
    // EFEITO DE SCROLL NO HEADER
    // =============================================
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            // Adiciona/remove classe 'scrolled' baseado na posição do scroll
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // =============================================
    // SLIDER DE DEPOIMENTOS
    // =============================================
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        
        // Função para mostrar um depoimento específico
        function showTestimonial(index) {
            // Remove a classe 'active' de todos os depoimentos
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            // Adiciona a classe 'active' ao depoimento atual
            testimonials[index].classList.add('active');
            currentTestimonial = index;
        }
        
        // Mostra o primeiro depoimento
        showTestimonial(0);
        
        // Botão próximo
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                let nextIndex = currentTestimonial + 1;
                // Volta para o primeiro depoimento se chegar ao final
                if (nextIndex >= testimonials.length) nextIndex = 0;
                showTestimonial(nextIndex);
            });
        }
        
        // Botão anterior
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                let prevIndex = currentTestimonial - 1;
                // Vai para o último depoimento se estiver no primeiro
                if (prevIndex < 0) prevIndex = testimonials.length - 1;
                showTestimonial(prevIndex);
            });
        }
        
        // Rotação automática dos depoimentos a cada 5 segundos
        setInterval(function() {
            let nextIndex = currentTestimonial + 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            showTestimonial(nextIndex);
        }, 5000);
    }
    
    // =============================================
    // ABAS DE CONTEÚDO
    // =============================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    if (tabBtns.length > 0 && contentSections.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Obtém o ID da aba clicada
                const tabId = this.getAttribute('data-tab');
                
                // Atualiza o botão da aba ativa
                tabBtns.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Mostra a seção de conteúdo correspondente
                contentSections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === tabId) {
                        section.classList.add('active');
                    }
                });
            });
        });
    }
    
    // =============================================
    // ANIMAÇÕES DE SCROLL
    // =============================================
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    // Verifica se os elementos estão visíveis na tela
    function checkScroll() {
        scrollElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            // Se o elemento estiver na posição visível, adiciona classe 'animate'
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }
    
    if (scrollElements.length > 0) {
        // Adiciona listeners para scroll e load da página
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
        // Executa a verificação inicial
        checkScroll();
    }
    
    // =============================================
    // OUVINTE PARA MUDANÇAS DE HASH (SPA - Single Page Applications)
    // =============================================
    window.addEventListener('hashchange', setActiveLink);
});
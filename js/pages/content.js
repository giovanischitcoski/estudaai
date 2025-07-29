// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // DADOS DOS MATERIAIS DIDÁTICOS
    // =============================================
    const materiais = {
        resumos: [
            {
                id: 1,
                title: 'Resumo de Matemática - Função de 1º Grau',
                description: 'Tudo sobre funções de 1º grau para o ENEM.',
                file: '/docs/resumos/matematica',
                size: '2.4 MB',
                pages: 12,
                icon: 'fas fa-file-pdf' // Ícone do Font Awesome
            },
            // ... outros resumos
        ],
        exercicios: [
            {
                id: 1,
                title: 'Exercícios - ENEM',
                description: '530 questões comentadas do ENEM.',
                file: '/docs/exercicios/caderno_questoes_enem.pdf',
                size: '1.46 MB',
                pages: 44,
                icon: 'fas fa-file-alt'
            }
        ],
        mapas: [
            {
                id: 1,
                title: 'Mapa Mental - Segunda Guerra Mundial',
                description: 'Todos os eventos importantes da 2ª Guerra em um mapa.',
                file: '/docs/mapas/segunda_guerra_mundial.pdf',
                size: '679 KB',
                pages: 1,
                icon: 'fas fa-project-diagram'
            }
        ],
        provas: [
               {
                id: 1,
                title: 'ENEM 2022 - Todas as Provas',
                description: 'Provas completas do ENEM 2022 com gabarito oficial.',
                file: '/docs/provas/Prova_2022.pdf',
                size: '11 MB',
                pages: 66,
                icon: 'fas fa-file-archive'
            },
            
            {               
                id: 2,
                title: 'ENEM 2023 - Todas as Provas',
                description: 'Provas completas do ENEM 2022 com gabarito oficial.',
                file: '/docs/provas/Prova_2023.pdf',
                size: '11 MB',
                pages: 66,
                icon: 'fas fa-file-archive'
            },

            {               
                id: 3,
                title: 'ENEM 2024 - Todas as Provas',
                description: 'Provas completas do ENEM 2022 com gabarito oficial.',
                file: '/docs/provas/Prova_2024.pdf',
                size: '11 MB',
                pages: 66,
                icon: 'fas fa-file-archive'
            }
        ]
    };

    // =============================================
    // SELEÇÃO DE ELEMENTOS DO DOM
    // =============================================
    const tabBtns = document.querySelectorAll('.tab-btn'); // Botões das abas
    const contentSections = document.querySelectorAll('.content-section'); // Seções de conteúdo

    // =============================================
    // FUNÇÃO PARA RENDERIZAR OS MATERIAIS
    // =============================================
    function renderMaterials() {
        // Percorre cada tipo de material (resumos, exercícios, etc.)
        for (const tipo in materiais) {
            const grid = document.getElementById(`${tipo}-grid`);
            
            // Se não encontrar a grade, continua para o próximo tipo
            if (!grid) continue;
            
            // Limpa a grade antes de renderizar
            grid.innerHTML = '';
            
            // Mostra mensagem se não houver materiais
            if (materiais[tipo].length === 0) {
                grid.innerHTML = '<p class="no-materials">Nenhum material disponível nesta categoria.</p>';
                continue;
            }
            
            // Para cada material, cria um card na grade
            materiais[tipo].forEach(material => {
                const materialCard = document.createElement('div');
                materialCard.className = 'material-card scroll-animate';
                
                // HTML do card do material
                materialCard.innerHTML = `
                    <div class="material-icon">
                        <i class="${material.icon}"></i>
                    </div>
                    <h3>${material.title}</h3>
                    <p>${material.description}</p>
                    <a href="${material.file}" class="download-btn" download>
                        <i class="fas fa-download"></i> Baixar PDF
                    </a>
                    <div class="file-info">
                        <span>${material.size}</span>
                        <span>${material.pages} páginas</span>
                    </div>
                `;
                
                // Adiciona o card à grade
                grid.appendChild(materialCard);
            });
        }
    }

    // =============================================
    // FUNÇÃO PARA ALTERNAR ENTRE ABAS
    // =============================================
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Obtém o ID da aba clicada
            const tabId = this.getAttribute('data-tab');
            
            // Atualiza a aba ativa
            tabBtns.forEach(b => b.classList.remove('active'));
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

    // =============================================
    // INICIALIZAÇÃO DA PÁGINA
    // =============================================
    renderMaterials(); // Renderiza os materiais quando a página carrega
});
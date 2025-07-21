document.addEventListener('DOMContentLoaded', function() {
    // Dados dos materiais (substitua pelos seus arquivos reais)
    const materiais = {
        resumos: [
            {
                id: 1,
                title: 'Resumo de Matemática - Função de 1º Grau',
                description: 'Tudo sobre funções de 1º grau para o ENEM.',
                file: '/docs/resumos/matematica',
                size: '2.4 MB',
                pages: 12,
                icon: 'fas fa-file-pdf'
            },
            {
                id: 2,
                title: 'Resumo de Biologia - Ecologia',
                description: 'Conceitos essenciais de ecologia para vestibulares.',
                file: '/docs/resumos/Matemática',
                size: '1.8 MB',
                pages: 10,
                icon: 'fas fa-file-pdf'
            }
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

    // Elementos do DOM
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contentSections = document.querySelectorAll('.content-section');

    // Renderiza os materiais
    function renderMaterials() {
        for (const tipo in materiais) {
            const grid = document.getElementById(`${tipo}-grid`);
            if (!grid) continue;
            
            grid.innerHTML = '';
            
            if (materiais[tipo].length === 0) {
                grid.innerHTML = '<p class="no-materials">Nenhum material disponível nesta categoria.</p>';
                continue;
            }
            
            materiais[tipo].forEach(material => {
                const materialCard = document.createElement('div');
                materialCard.className = 'material-card scroll-animate';
                
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
                
                grid.appendChild(materialCard);
            });
        }
    }

    // Alternar entre abas
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Atualiza aba ativa
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Mostra a seção correspondente
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === tabId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Inicializa a página
    renderMaterials();
});
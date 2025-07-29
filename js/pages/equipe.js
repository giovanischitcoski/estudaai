// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // DADOS DOS MEMBROS DA EQUIPE
    // =============================================
    const membros = [
                {
                    id: 1,
                    nome: "Giovani Melo",
                    cargo: "Presidente",
                    departamento: "presidencia",
                    periodo: "2025",
                    foto: "https://media.licdn.com/dms/image/v2/D4D03AQGUfq0L9_z8YA/profile-displayphoto-shrink_800_800/B4DZUk6ljnGkAc-/0/1740081093255?e=1755734400&v=beta&t=P9Sebd8bIo6-x2_ktsaL4w2ENij7vk3N55OUwFLxqGg",
                    linkedin: "https://www.linkedin.com/in/giovani-melo-schitcoski/",
                    email: "giovanimelo3007@gmail.com",
                    bio: "Giovani é nosso presidente, liderando a equipe com excelência e visão estratégica."
                },
{
                    id: 2,
                    nome: "Alana Pelaquin",
                    cargo: "Vice-presidente",
                    departamento: "presidencia",
                    periodo: "2025",
                    foto: "https://i.ibb.co/m5nFRZkS/Captura-de-tela-2025-07-28-200836.png",
                    linkedin: "",
                    email: "alanapelaquin@gmail.com",
                    bio: "Vice-presidente do EstudaAí, responsável por apoiar a presidência na liderança estratégica, auxiliar na tomada de decisões e garantir o bom funcionamento das atividades e equipes do projeto."
                },

                {
                    id: 3,
                    nome: "Alex Sander Martins Junior",
                    cargo: "Comunicação",
                    departamento: "comunicacao",
                    periodo: "2025",
                    foto: "https://media.licdn.com/dms/image/v2/D4D03AQHhGke44MQxiA/profile-displayphoto-shrink_800_800/B4DZStE.IZHkAg-/0/1738070550896?e=1756339200&v=beta&t=6gN_ozblvY6077HcEt3Qwlox0Xw_cXcO6DhYWFKLybg",
                    linkedin: "linkedin.com/in/alexsandermartins",
                    email: "alexs.martinsjr@gmail.com",
                    bio: "Responsável por divulgar o EstudaAí, fortalecer a presença da marca, criar conteúdos estratégicos e atrativos, além de planejar campanhas que conectem o projeto ao seu público-alvo."
                },

                {
                    id: 4,
                    nome: "Ana Clara Redon",
                    cargo: "Pedagógico",
                    departamento: "pedagogico",
                    periodo: "2025",
                    foto: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "anaclararedon14@gmail.com",
                    bio: "Responsável por desenvolver e implementar estratégias pedagógicas inovadoras, garantindo a qualidade do conteúdo educacional e a experiência de aprendizado dos usuários."
                },
                {
                    id: 5,
                    nome: "Anny Eduarda Mussi Neves",
                    cargo: "Pedagógico",
                    departamento: "pedagogico",
                    periodo: "2025",
                    foto: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "Mannyeduarda@gmail.com",
                    bio: "Responsável por desenvolver e implementar estratégias pedagógicas inovadoras, garantindo a qualidade do conteúdo educacional e a experiência de aprendizado dos usuários."
                },
                {
                    id: 6,
                    nome: "Ellen Cristina Pereira de Sousa",
                    cargo: "Comunicação",
                    departamento: "comunicacao",
                    periodo: "2025",
                    foto:"https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "cristinaellen7018@gmail.com",
                    bio: "Responsável por divulgar o EstudaAí, fortalecer a presença da marca, criar conteúdos estratégicos e atrativos, além de planejar campanhas que conectem o projeto ao seu público-alvo."
                },
                {
                    id: 7,
                    nome: "Fernanda Camilly Trindade",
                    cargo: "Comunicação",
                    departamento: "comunicacao",
                    periodo: "2025",
                    foto: "https://media.licdn.com/dms/image/v2/D4D03AQHEn0nMJqgfug/profile-displayphoto-shrink_800_800/B4DZV5TH_QHkAc-/0/1741496811974?e=1756339200&v=beta&t=Tj0AYzQnFyXCJrcGAlygGFdv-RKAC9gUZhwCNlg8SkU",
                    linkedin: "https://www.linkedin.com/in/fernanda-trindade-6bb665189/",
                    email: "",
                    bio: "Responsável por divulgar o EstudaAí, fortalecer a presença da marca, criar conteúdos estratégicos e atrativos, além de planejar campanhas que conectem o projeto ao seu público-alvo."
                },
                {
                    id: 8,
                    nome: "Gabriel Moreira Alves",
                    cargo: "Comunicação",
                    departamento: "comunicacao",
                    periodo: "2025",
                    foto: "https://media.licdn.com/dms/image/v2/D5603AQHzKRIdPiv5gA/profile-displayphoto-shrink_800_800/B56ZVx3.mKHsAg-/0/1741372255073?e=1756339200&v=beta&t=WjvorRsdM5A3P_QpVjdJftSMfFWIUmYSiGuPaRWVM9U",
                    linkedin: "https://www.linkedin.com/in/gabriel-moreira-8b97a4308",
                    email: "",
                    bio: "Responsável por divulgar o EstudaAí, fortalecer a presença da marca, criar conteúdos estratégicos e atrativos, além de planejar campanhas que conectem o projeto ao seu público-alvo."
                },
                {
                    id: 9,
                    nome: "Alana Vendramini Maia e Souza",
                    cargo: "Suporte & TI",
                    departamento: "ti",
                    periodo: "2025",
                    foto: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "vendramini.alana@gmail.com"
                },
                {
                    id: 10,
                    nome: "Julia Sposito Marcelino",
                    cargo: "Pedagógico",
                    departamento: "pedagogico",
                    periodo: "2025",
                    foto: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "",
                    bio: "Responsável por desenvolver e implementar estratégias pedagógicas inovadoras, garantindo a qualidade do conteúdo educacional e a experiência de aprendizado dos usuários."
                },
                {
                    id: 11,
                    nome: "Lara Trombetta",
                    cargo: "Suporte & TI",
                    departamento: "ti",
                    periodo: "2025",
                    foto: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "lara.trombetta@hotmail.com",
                    bio: "Responsável por garantir o suporte técnico e a manutenção dos sistemas, assegurando que todas as operações de TI funcionem de forma eficiente e eficaz."
                },
                {
                    id: 12,
                    nome: "Larissa Isabele Cunha Alves",
                    cargo: "Pedagógico",
                    departamento: "pedagogico",
                    periodo: "2025",
                    foto: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "",
                    bio: "Responsável por desenvolver e implementar estratégias pedagógicas inovadoras, garantindo a qualidade do conteúdo educacional e a experiência de aprendizado dos usuários."
                },
                {
                    id: 13,
                    nome: "Leticia M. Alher Luiz",
                    cargo: "Pedagógico",
                    departamento: "pedagogico",
                    periodo: "2025",
                    foto: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "",
                    bio: "Responsável por desenvolver e implementar estratégias pedagógicas inovadoras, garantindo a qualidade do conteúdo educacional e a experiência de aprendizado dos usuários."
                },
                {
                    id: 14,
                    nome: "Maria Claudia Bueno Lemes",
                    cargo: "Gestão de Pessoas / RH",
                    departamento: "rh",
                    periodo: "2025",
                    foto: "https://media.licdn.com/dms/image/v2/D4E03AQFVbeq1PpNvHA/profile-displayphoto-crop_800_800/B4EZfG0ql9HIAM-/0/1751387385767?e=1756339200&v=beta&t=TAHQrG4j5-IP2X7yi7COYOxxnheDEesIXQ-20UngcsE ",
                    linkedin: "http://linkedin.com/in/maria-claudia-lemes-1a7029313",
                    email: "mclaudialemes@gmail.com",
                    bio: "Responsável por gerenciar as pessoas do EstudaAí, garantindo um ambiente de trabalho saudável, promovendo o desenvolvimento profissional e cuidando do bem-estar da equipe."
                },
                {
                    id: 15,
                    nome: "Maria Eduarda Alves",
                    cargo: "Comunicação",
                    departamento: "comunicacao",
                    periodo: "2025",
                    foto: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "dudaalves2408@gmail.com",
                    bio: "Responsável por divulgar o EstudaAí, fortalecer a presença da marca, criar conteúdos estratégicos e atrativos, além de planejar campanhas que conectem o projeto ao seu público-alvo."
                },
                {
                    id: 16,
                    nome: "Maria Eduarda Fernandes",
                    cargo: "Pedagógico",
                    departamento: "pedagogico",
                    periodo: "2025",
                    foto: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                    linkedin: "",
                    email: "",
                    bio: "Responsável por desenvolver e implementar estratégias pedagógicas inovadoras, garantindo a qualidade do conteúdo educacional e a experiência de aprendizado dos usuários."
                },
                {
                    id: 17,
                    nome: "Marielle de Oliveira Caitano",
                    cargo: "Gestão de Pessoas / RH",
                    departamento: "rh",
                    periodo: "2025",
                    foto:"https://media.licdn.com/dms/image/v2/D4D03AQGRfAec2Lcotg/profile-displayphoto-shrink_800_800/B4DZVenrl.HwAc-/0/1741049216492?e=1756339200&v=beta&t=w_XnQ7K_fDWmipZ-xx2O-UclgHMUwCPwPySsWWMhBBA",
                    linkedin: "https://www.linkedin.com/in/marielle-caitano-1522172b7",
                    email: "maricaitanocontato@gmail.com",
                    bio: "Responsável por gerenciar as pessoas do EstudaAí, garantindo um ambiente de trabalho saudável, promovendo o desenvolvimento profissional e cuidando do bem-estar da equipe."
                },
                {
                    id: 18,
                    nome: "Marlon Galdino Goes",
                    cargo: "Suporte & TI",
                    departamento: "ti",
                    periodo: "2025",
                    foto:"https://media.licdn.com/dms/image/v2/D4D03AQGjPuxoielA7Q/profile-displayphoto-shrink_800_800/B4DZaI63KOGwAc-/0/1746053909484?e=1756339200&v=beta&t=HJ2-gl2kMuHxB6kZZhAcndCbEWqQtBD4TZ9MZXEIE9c",
                    linkedin: "https://www.linkedin.com/in/marlon-goes-36a685363/",
                    email: "marlon.goes07@gmail.com",
                    bio: "Responsável por garantir o suporte técnico e a manutenção dos sistemas, assegurando que todas as operações de TI funcionem de forma eficiente e eficaz."
                },
                {
                    id: 19,
                    nome: "Paulo Henrique Nishikawa",
                    cargo: "Suporte & TI",
                    departamento: "ti",
                    periodo: "2025",
                    foto:"https://media.licdn.com/dms/image/v2/D4D35AQGlvFYuh37lFg/profile-framedphoto-shrink_800_800/B4DZVhHf8WHwAo-/0/1741091111060?e=1754352000&v=beta&t=1NPF2Y0LHxHX19zllEz36r0oFknAdlVH4ZoRmcp2ApE",
                    linkedin: "https://www.linkedin.com/in/paulo-henrique-nishikawa-72a116205",
                    email: "nishikawa.p@hotmail.com",
                    bio: "Responsável por garantir o suporte técnico e a manutenção dos sistemas, assegurando que todas as operações de TI funcionem de forma eficiente e eficaz."
                },
                {
                    id: 20,
                    nome: "Tayssa Aparecida Pereira dos Santos",
                    cargo: "Comunicação",
                    departamento: "comunicacao",
                    periodo: "2025",
                    foto:"https://media.licdn.com/dms/image/v2/D4D03AQFQNNYGCjv-EQ/profile-displayphoto-crop_800_800/B4DZggkSmsGkAI-/0/1752893042605?e=1756339200&v=beta&t=g7tXtNZFf4Hxxyssz55IMXZH7HxU8KIfn7S8I1dN3qg",
                    linkedin: "https://www.linkedin.com/in/tayssa-santos-21b915319",
                    email: "Tayssasantoss04@gmail.com",
                    bio: "Responsável por divulgar o EstudaAí, fortalecer a presença da marca, criar conteúdos estratégicos e atrativos, além de planejar campanhas que conectem o projeto ao seu público-alvo."
                }
    ];

    // =============================================
    // SELEÇÃO DE ELEMENTOS DO DOM
    // =============================================
    const equipeGrid = document.getElementById('equipeGrid'); // Grade de membros
    const searchInput = document.getElementById('search-member'); // Campo de busca
    const searchBtn = document.getElementById('search-btn'); // Botão de busca
    const filterDept = document.getElementById('filter-department'); // Filtro por departamento
    const filterPeriod = document.getElementById('filter-period'); // Filtro por período
    const membroModal = document.getElementById('membroModal'); // Modal de detalhes
    const closeModal = document.querySelector('.close-modal'); // Botão para fechar modal

    // =============================================
    // FUNÇÃO PARA RENDERIZAR OS MEMBROS NA GRADE
    // =============================================
    function renderMembros(membrosToRender) {
        // Limpa a grade antes de renderizar
        equipeGrid.innerHTML = '';
        
        // Mostra mensagem se não houver resultados
        if (membrosToRender.length === 0) {
            equipeGrid.innerHTML = '<p class="no-results">Nenhum membro encontrado com esses critérios</p>';
            return;
        }
        
        // Para cada membro, cria um card na grade
        membrosToRender.forEach(membro => {
            const membroCard = document.createElement('div');
            membroCard.className = 'membro-card';
            
            // Adiciona atributos para filtragem
            membroCard.setAttribute('data-dept', membro.departamento);
            membroCard.setAttribute('data-period', membro.periodo);
            
            // HTML do card do membro
            membroCard.innerHTML = `
                <div class="membro-foto-container">
                    <img src="${membro.foto}" alt="${membro.nome}" class="membro-foto">
                </div>
                <div class="membro-info">
                    <h3>${membro.nome}</h3>
                    <p class="cargo">${membro.cargo}</p>
                    <p class="dept">${getDeptName(membro.departamento)}</p>
                    <p class="periodo">${membro.periodo}</p>
                </div>
            `;
            
            // Adiciona evento de clique para abrir o modal
            membroCard.addEventListener('click', () => openMemberModal(membro));
            
            // Adiciona o card à grade
            equipeGrid.appendChild(membroCard);
        });
    }

    // =============================================
    // FUNÇÃO PARA TRADUZIR NOME DO DEPARTAMENTO
    // =============================================
    function getDeptName(deptKey) {
        const depts = {
            'presidencia': 'Presidência',
            'comunicacao': 'Comunicação',
            'ti': 'Tecnologia da Informação',
            'rh': 'Recursos Humanos',
            'pedagogico': 'Pedagógico'
        };
        return depts[deptKey] || deptKey;
    }

    // =============================================
    // FUNÇÃO PARA ABRIR MODAL DE DETALHES
    // =============================================
    function openMemberModal(membro) {
        // Preenche os dados no modal
        document.getElementById('modal-nome').textContent = membro.nome;
        document.getElementById('modal-cargo').textContent = membro.cargo;
        document.getElementById('modal-dept').textContent = getDeptName(membro.departamento);
        document.getElementById('modal-periodo').textContent = `Período: ${membro.periodo}`;
        document.getElementById('modal-foto').src = membro.foto;
        document.getElementById('modal-linkedin').href = membro.linkedin;
        document.getElementById('modal-email').href = `mailto:${membro.email}`;
        document.getElementById('modal-bio').textContent = membro.bio;
        
        // Exibe o modal e desabilita o scroll da página
        membroModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // =============================================
    // FUNÇÃO PARA FILTRAR MEMBROS
    // =============================================
    function filterMembers() {
        // Obtém os valores dos filtros
        const searchTerm = searchInput.value.trim().toLowerCase();
        const deptFilter = filterDept.value;
        const periodFilter = filterPeriod.value;
        
        let filtered = membros;
        
        // Filtro por texto (nome ou cargo)
        if (searchTerm) {
            filtered = filtered.filter(membro => 
                membro.nome.toLowerCase().includes(searchTerm) || 
                membro.cargo.toLowerCase().includes(searchTerm)
            );
        }
        
        // Filtro por departamento
        if (deptFilter !== 'all') {
            filtered = filtered.filter(membro => membro.departamento === deptFilter);
        }
        
        // Filtro por período
        if (periodFilter !== 'all') {
            filtered = filtered.filter(membro => membro.periodo === periodFilter);
        }
        
        // Renderiza os membros filtrados
        renderMembros(filtered);
    }

    // =============================================
    // CONFIGURAÇÃO DOS EVENT LISTENERS
    // =============================================
    
    // Filtra ao digitar no campo de busca
    searchInput.addEventListener('input', filterMembers);
    
    // Filtra ao clicar no botão de busca
    searchBtn.addEventListener('click', filterMembers);
    
    // Filtra ao mudar o departamento selecionado
    filterDept.addEventListener('change', filterMembers);
    
    // Filtra ao mudar o período selecionado
    filterPeriod.addEventListener('change', filterMembers);
    
    // Fecha o modal ao clicar no X
    closeModal.addEventListener('click', () => {
        membroModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Fecha o modal ao clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target === membroModal) {
            membroModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // =============================================
    // RENDERIZAÇÃO INICIAL
    // =============================================
    
    // Renderiza todos os membros quando a página carrega
    renderMembros(membros);
});
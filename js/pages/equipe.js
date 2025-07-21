document.addEventListener('DOMContentLoaded', function() {
            // Dados da equipe
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
                
            ];

            // Elementos do DOM
            const equipeGrid = document.getElementById('equipeGrid');
            const searchInput = document.getElementById('search-member');
            const searchBtn = document.getElementById('search-btn');
            const filterDept = document.getElementById('filter-department');
            const filterPeriod = document.getElementById('filter-period');
            const membroModal = document.getElementById('membroModal');
            const closeModal = document.querySelector('.close-modal');

            // Renderiza todos os membros
            function renderMembros(membrosToRender) {
                equipeGrid.innerHTML = '';
                
                if (membrosToRender.length === 0) {
                    equipeGrid.innerHTML = '<p class="no-results">Nenhum membro encontrado com esses critérios</p>';
                    return;
                }
                
                membrosToRender.forEach(membro => {
                    const membroCard = document.createElement('div');
                    membroCard.className = 'membro-card';
                    membroCard.setAttribute('data-dept', membro.departamento);
                    membroCard.setAttribute('data-period', membro.periodo);
                    
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
                    
                    membroCard.addEventListener('click', () => openMemberModal(membro));
                    equipeGrid.appendChild(membroCard);
                });
            }

            // Traduz departamento para nome completo
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

            // Abre modal com detalhes do membro
            function openMemberModal(membro) {
                document.getElementById('modal-nome').textContent = membro.nome;
                document.getElementById('modal-cargo').textContent = membro.cargo;
                document.getElementById('modal-dept').textContent = getDeptName(membro.departamento);
                document.getElementById('modal-periodo').textContent = `Período: ${membro.periodo}`;
                document.getElementById('modal-foto').src = membro.foto;
                document.getElementById('modal-linkedin').href = membro.linkedin;
                document.getElementById('modal-email').href = `mailto:${membro.email}`;
                document.getElementById('modal-bio').textContent = membro.bio;
                
                membroModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }

            // Filtra membros
            function filterMembers() {
                const searchTerm = searchInput.value.trim().toLowerCase();
                const deptFilter = filterDept.value;
                const periodFilter = filterPeriod.value;
                
                let filtered = membros;
                
                // Filtro por texto
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
                
                renderMembros(filtered);
            }

            // Event listeners
            searchInput.addEventListener('input', filterMembers);
            searchBtn.addEventListener('click', filterMembers);
            filterDept.addEventListener('change', filterMembers);
            filterPeriod.addEventListener('change', filterMembers);
            
            closeModal.addEventListener('click', () => {
                membroModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            window.addEventListener('click', (e) => {
                if (e.target === membroModal) {
                    membroModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });

            // Renderiza todos os membros inicialmente
            renderMembros(membros);
        });
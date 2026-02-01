// 🔧 CONFIGURAÇÃO DO GOOGLE FORMS
const CONFIG_GOOGLE_FORMS = {
    url: 'https://docs.google.com/forms/d/1gZSPeG5moRvzF82agYxfIRFL0TiR99yjobmT5MqkFb8/formResponse',
    
    entryIds: {
        candidateName: 'entry.3647880',      // Nome do candidato
        candidateDocument: 'entry.748521648', // Documento
        candidateBirthDate: 'entry.1706514374'  // Data de nascimento
    }
};

// Configurações para controle de ausentes
const CONFIG = {
    concurso: {
        name: "Concurso Público",
        schools: [
            {
                id: 1,
                name: "ESCOLA ESTADUAL DOM DELFIM",
                shortName: "E. E. Dom Delfim",
                shifts: 2,
                roomsPerShift: {
                    1: [ // Turno 1 - Manhã
                        { code: "001 - EEDD - MANHÃ", candidates: 20 },
                        { code: "002 - EEDD - MANHÃ", candidates: 20 },
                        { code: "003 - EEDD - MANHÃ", candidates: 21 },
                        { code: "004 - EEDD - MANHÃ", candidates: 20 },
                        { code: "005 - EEDD - MANHÃ", candidates: 20 },
                        { code: "006 - EEDD - MANHÃ", candidates: 20 },
                        { code: "007 - EEDD - MANHÃ", candidates: 20 }
                    ],
                    2: [ // Turno 2 - Tarde
                        { code: "008 - EEDD - TARDE", candidates: 22 },
                        { code: "009 - EEDD - TARDE", candidates: 22 },
                        { code: "010 - EEDD - TARDE", candidates: 21 },
                        { code: "011 - EEDD - TARDE", candidates: 22 },
                        { code: "012 - EEDD - TARDE", candidates: 22 },
                        { code: "013 - EEDD - TARDE", candidates: 22 },
                        { code: "014 - EEDD - TARDE", candidates: 22 }
                    ]
                }
            },
            {
                id: 2,
                name: "ESCOLA ESTADUAL MACUCO DE MINAS",
                shortName: "E. E. Macuco de Minas",
                shifts: 2,
                roomsPerShift: {
                    1: [ // Turno 1 - Manhã
                        { code: "001 - EEMM - MANHÃ", candidates: 21 },
                        { code: "002 - EEMM - MANHÃ", candidates: 21 },
                        { code: "003 - EEMM - MANHÃ", candidates: 20 },
                        { code: "004 - EEMM - MANHÃ", candidates: 20 },
                        { code: "005 - EEMM - MANHÃ", candidates: 20 },
                        { code: "006 - EEMM - MANHÃ", candidates: 20 },
                        { code: "007 - EEMM - MANHÃ", candidates: 20 }
                    ],
                    2: [ // Turno 2 - Tarde
                        { code: "008 - EEMM - TARDE", candidates: 24 },
                        { code: "009 - EEMM - TARDE", candidates: 24 },
                        { code: "010 - EEMM - TARDE", candidates: 24 },
                        { code: "011 - EEMM - TARDE", candidates: 23 },
                        { code: "012 - EEMM - TARDE", candidates: 23 },
                        { code: "013 - EEMM - TARDE", candidates: 23 },
                        { code: "014 - EEMM - TARDE", candidates: 23 }
                    ]
                }
            },
            {
                id: 3,
                name: "ESCOLA MUNICIPAL CASTRO ALVES",
                shortName: "E. M. Castro Alves",
                shifts: 2,
                roomsPerShift: {
                    1: [ // Turno 1 - Manhã
                        { code: "003 - EMCA - MANHÃ", candidates: 21 },
                        { code: "004 - EMCA - MANHÃ", candidates: 22 },
                        { code: "005 - EMCA - MANHÃ", candidates: 21 },
                        { code: "006 - EMCA - MANHÃ", candidates: 21 },
                        { code: "007 - EMCA - MANHÃ", candidates: 19 },
                        { code: "008 - EMCA - MANHÃ", candidates: 18 },
                        { code: "ANEXO 1 - EMCA - MANHÃ", candidates: 24 },
                        { code: "ANEXO 2 - EMCA - MANHÃ", candidates: 25 },
                        { code: "ANEXO 3 - EMCA - MANHÃ", candidates: 23 }
                    ],
                    2: [ // Turno 2 - Tarde
                        { code: "003 - EMCA - TARDE", candidates: 23 },
                        { code: "004 - EMCA - TARDE", candidates: 25 },
                        { code: "005 - EMCA - TARDE", candidates: 23 },
                        { code: "006 - EMCA - TARDE", candidates: 23 },
                        { code: "007 - EMCA - TARDE", candidates: 22 },
                        { code: "ANEXO 1 - EMCA - TARDE", candidates: 28 },
                        { code: "ANEXO 2 - EMCA - TARDE", candidates: 28 },
                        { code: "ANEXO 3 - EMCA - TARDE", candidates: 24 }
                    ]
                }
            },
            {
                id: 4,
                name: "ESCOLA ESTADUAL JAIME FERREIRA LEITE",
                shortName: "E. E. Jaime Ferreira",
                shifts: 1,
                roomsPerShift: {
                    1: [ // Turno 1 - Manhã
                        { code: "001 - EEJFL - MANHÃ", candidates: 23 },
                        { code: "002 - EEJFL - MANHÃ", candidates: 23 },
                        { code: "003 - EEJFL - MANHÃ", candidates: 23 },
                        { code: "004 - EEJFL - MANHÃ", candidates: 23 },
                        { code: "005 - EEJFL - MANHÃ", candidates: 28 },
                        { code: "VÍDEO - EEJFL - MANHÃ", candidates: 23 },
                        { code: "AIDA - EEJFL - MANHÃ", candidates: 22 },
                        { code: "007 - EEJFL - MANHÃ", candidates: 29 },
                        { code: "008 - EEJFL - MANHÃ", candidates: 33 },
                        { code: "009 - EEJFL - MANHÃ", candidates: 28 }
                    ]
                }
            },
            {
                id: 5,
                name: "ESCOLA MUNICIPAL ERINÉA MARIA INÁCIA DE CARVALHO SILVA",
                shortName: "E. M. Erinéa Maria",
                shifts: 1,
                roomsPerShift: {
                    1: [ // Turno 1 - Manhã
                        { code: "002 - EMEMICS - MANHÃ", candidates: 19 },
                        { code: "003 - EMEMICS - MANHÃ", candidates: 22 },
                        { code: "006 - EMEMICS - MANHÃ", candidates: 21 },
                        { code: "007 - EMEMICS - MANHÃ", candidates: 14 },
                        { code: "009 - EMEMICS - MANHÃ", candidates: 23 },
                        { code: "010 - EMEMICS - MANHÃ", candidates: 15 },
                        { code: "011 - EMEMICS - MANHÃ", candidates: 17 },
                        { code: "012 - EMEMICS - MANHÃ", candidates: 22 }
                    ]
                }
            }
        ]
    },
    processo: {
        name: "Processo Seletivo Público",
        schools: [
            {
                id: 6,
                name: "ESCOLA MUNICIPAL CASTRO ALVES",
                shortName: "E. M. Castro Alves",
                shifts: 1,
                roomsPerShift: {
                    1: [ // Turno 1 - Tarde (Processo Seletivo)
                        { code: "008 - EMCA - TARDE", candidates: 12 }
                    ]
                }
            }
        ]
    }
};

// Estado da aplicação
let currentCertame = null;
let absentData = {};
let activeShift = {};
let selectedSchoolId = null;
let correctionsData = [];

// Elementos DOM
const homeScreen = document.getElementById('homeScreen');
const ausentesScreen = document.getElementById('ausentesScreen');
const selectionScreenAusentes = document.getElementById('selectionScreenAusentes');
const mainScreenAusentes = document.getElementById('mainScreenAusentes');
const correcaoScreen = document.getElementById('correcaoScreen');
const enviandoScreen = document.getElementById('enviandoScreen');

// Botões de navegação
const ausentesBtn = document.getElementById('ausentesBtn');
const correcoesBtn = document.getElementById('correcoesBtn');
const backToHome1 = document.getElementById('backToHome1');
const backToHome2 = document.getElementById('backToHome2');
const backToSelectionBtn = document.getElementById('backToSelectionBtn');

// Elementos da tela de ausentes
const concursoBtn = document.getElementById('concursoBtn');
const processoBtn = document.getElementById('processoBtn');
const resetButton = document.getElementById('resetButton');
const certameTitle = document.getElementById('certameTitle');
const certameSubtitle = document.getElementById('certameSubtitle');
const processoWarning = document.getElementById('processoWarning');
const progressFill = document.getElementById('progressFill');
const completedRooms = document.getElementById('completedRooms');
const totalRooms = document.getElementById('totalRooms');
const totalAbsent = document.getElementById('totalAbsent');
const totalCandidates = document.getElementById('totalCandidates');
const totalPercentage = document.getElementById('totalPercentage');
const topAbsentSchool = document.getElementById('topAbsentSchool');
const topAbsentPercentage = document.getElementById('topAbsentPercentage');
const summaryBody = document.getElementById('summaryBody');
const summaryCards = document.getElementById('summaryCards');
const schoolsGrid = document.getElementById('schoolsGrid');
const noSchoolSelected = document.getElementById('noSchoolSelected');

// Elementos da correção
const correctionForm = document.getElementById('correctionForm');
const candidateName = document.getElementById('candidateName');
const candidateDocument = document.getElementById('candidateDocument');
const candidateBirthDate = document.getElementById('candidateBirthDate');
const clearCorrectionFormBtn = document.getElementById('clearCorrectionForm');
const sendAllCorrections = document.getElementById('sendAllCorrections');
const clearAllCorrectionsBtn = document.getElementById('clearAllCorrections');
const correctionsList = document.getElementById('correctionsList');

// Elementos do envio
const progressBarEnvio = document.getElementById('progressBarEnvio');
const progressText = document.getElementById('progressText');
const envioConcluido = document.getElementById('envioConcluido');
const fecharEnvioBtn = document.getElementById('fecharEnvioBtn');

// Notificação
const notification = document.getElementById('notification');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Carregar dados salvos
    loadSavedData();
    
    // Configurar navegação principal
    ausentesBtn.addEventListener('click', () => {
        homeScreen.classList.add('d-none');
        ausentesScreen.classList.remove('d-none');
    });
    
    correcoesBtn.addEventListener('click', () => {
        homeScreen.classList.add('d-none');
        correcaoScreen.classList.remove('d-none');
        updateCorrectionsList();
    });
    
    backToHome1.addEventListener('click', () => goBackToHome());
    backToHome2.addEventListener('click', () => goBackToHome());
    fecharEnvioBtn.addEventListener('click', () => goBackToHome());
    
    // Configurar eventos da seção de correção
    correctionForm.addEventListener('submit', saveCorrection);
    clearCorrectionFormBtn.addEventListener('click', clearCorrectionForm);
    sendAllCorrections.addEventListener('click', startEnvioCorrecoes);
    clearAllCorrectionsBtn.addEventListener('click', clearAllCorrections);
    
    // Configurar eventos da seção de ausentes
    concursoBtn.addEventListener('click', () => selectCertame('concurso'));
    processoBtn.addEventListener('click', () => selectCertame('processo'));
    backToSelectionBtn.addEventListener('click', goBackToAusentesSelection);
    resetButton.addEventListener('click', resetData);
    
    // Inicializar toast do Bootstrap
    const notificationToast = new bootstrap.Toast(notification);
});

// Navegação
function goBackToHome() {
    ausentesScreen.classList.add('d-none');
    correcaoScreen.classList.add('d-none');
    enviandoScreen.classList.add('d-none');
    homeScreen.classList.remove('d-none');
}

function goBackToAusentesSelection() {
    mainScreenAusentes.classList.add('d-none');
    selectionScreenAusentes.classList.remove('d-none');
    currentCertame = null;
    selectedSchoolId = null;
}

// FUNÇÕES DE CONTROLE DE AUSENTES

function selectCertame(type) {
    currentCertame = type;
    selectionScreenAusentes.classList.add('d-none');
    mainScreenAusentes.classList.remove('d-none');
    
    // Atualizar título
    certameTitle.textContent = `Controle de Ausentes - ${CONFIG[type].name}`;
    certameSubtitle.textContent = `Monitoramento em tempo real - ${CONFIG[type].name}`;
    
    // Mostrar/ocultar aviso do Processo Seletivo
    if (type === 'processo') {
        processoWarning.classList.remove('d-none');
    } else {
        processoWarning.classList.add('d-none');
    }
    
    // Inicializar dados se necessário
    if (!absentData[type]) {
        initializeCertameData(type);
    }
    
    // Inicializar turnos ativos
    initializeActiveShifts(type);
    
    // Resetar escola selecionada
    selectedSchoolId = null;
    
    // Atualizar interface
    updateUI();
}

function initializeCertameData(type) {
    const certameConfig = CONFIG[type];
    absentData[type] = {
        schools: {}
    };
    
    certameConfig.schools.forEach(school => {
        absentData[type].schools[school.id] = {
            name: school.name,
            shifts: {}
        };
        
        for (let shift = 1; shift <= school.shifts; shift++) {
            absentData[type].schools[school.id].shifts[shift] = {
                rooms: Array(school.roomsPerShift[shift].length).fill(null)
            };
        }
    });
    
    saveData();
}

function initializeActiveShifts(type) {
    const certameConfig = CONFIG[type];
    activeShift = {};
    
    certameConfig.schools.forEach(school => {
        activeShift[school.id] = 1;
    });
}

function updateUI() {
    if (!currentCertame) return;
    
    const certameConfig = CONFIG[currentCertame];
    const data = absentData[currentCertame];
    
    let totalRoomsCount = 0;
    let filledRoomsCount = 0;
    let totalAbsentCount = 0;
    let totalCandidatesCount = 0;
    let schoolStats = [];
    
    certameConfig.schools.forEach(school => {
        let schoolAbsent = 0;
        let schoolCandidates = 0;
        let schoolFilledRooms = 0;
        
        for (let shift = 1; shift <= school.shifts; shift++) {
            const rooms = data.schools[school.id].shifts[shift].rooms;
            const shiftRooms = rooms.length;
            totalRoomsCount += shiftRooms;
            
            for (let i = 0; i < shiftRooms; i++) {
                const roomCandidates = school.roomsPerShift[shift][i].candidates;
                schoolCandidates += roomCandidates;
                totalCandidatesCount += roomCandidates;
                
                if (rooms[i] !== null) {
                    schoolFilledRooms++;
                    filledRoomsCount++;
                    schoolAbsent += rooms[i];
                    totalAbsentCount += rooms[i];
                }
            }
        }
        
        const schoolPercentage = schoolCandidates > 0 ? (schoolAbsent / schoolCandidates * 100).toFixed(1) : 0;
        schoolStats.push({
            id: school.id,
            name: school.name,
            shortName: school.shortName,
            percentage: parseFloat(schoolPercentage),
            absent: schoolAbsent,
            candidates: schoolCandidates,
            filledRooms: schoolFilledRooms,
            totalRooms: school.shifts === 2 ? 
                school.roomsPerShift[1].length + school.roomsPerShift[2].length : 
                school.roomsPerShift[1].length,
            shifts: school.shifts
        });
    });
    
    // Atualizar barra de progresso
    const progressPercentage = totalRoomsCount > 0 ? (filledRoomsCount / totalRoomsCount * 100) : 0;
    progressFill.style.width = `${progressPercentage}%`;
    completedRooms.textContent = `${filledRoomsCount} salas preenchidas`;
    totalRooms.textContent = `${totalRoomsCount} salas no total`;
    
    // Atualizar estatísticas gerais
    totalAbsent.textContent = totalAbsentCount;
    totalCandidates.textContent = totalCandidatesCount;
    
    const overallPercentage = totalCandidatesCount > 0 ? (totalAbsentCount / totalCandidatesCount * 100).toFixed(1) : 0;
    totalPercentage.textContent = `${overallPercentage}%`;
    
    // Encontrar escola com maior percentual de ausência
    if (schoolStats.length > 0 && totalAbsentCount > 0) {
        const topSchool = schoolStats.reduce((prev, current) => 
            (prev.percentage > current.percentage) ? prev : current
        );
        
        topAbsentSchool.textContent = topSchool.shortName;
        topAbsentPercentage.textContent = `${topSchool.percentage}% de ausência (${topSchool.absent}/${topSchool.candidates})`;
    } else {
        topAbsentSchool.textContent = "-";
        topAbsentPercentage.textContent = "0% de ausência";
    }
    
    // Atualizar tabela de resumo
    updateSummaryTable(schoolStats);
    
    // Atualizar painel de seleção de escolas
    updateSchoolsSelectionPanel(schoolStats);
}

function updateSummaryTable(schoolStats) {
    const certameConfig = CONFIG[currentCertame];
    const data = absentData[currentCertame];
    
    summaryBody.innerHTML = '';
    summaryCards.innerHTML = '';
    
    let grandTotalRooms = 0;
    let grandTotalCandidates = 0;
    let grandTotalAbsent = 0;
    let grandTotalFilled = 0;
    
    certameConfig.schools.forEach(school => {
        let schoolTotalRooms = 0;
        let schoolTotalCandidates = 0;
        let schoolTotalAbsent = 0;
        let schoolTotalFilled = 0;
        let schoolShiftsData = [];
        
        for (let shift = 1; shift <= school.shifts; shift++) {
            const rooms = data.schools[school.id].shifts[shift].rooms;
            const shiftRooms = rooms.length;
            let shiftCandidates = 0;
            let shiftAbsent = 0;
            let shiftFilled = 0;
            
            for (let i = 0; i < shiftRooms; i++) {
                shiftCandidates += school.roomsPerShift[shift][i].candidates;
                if (rooms[i] !== null) {
                    shiftFilled++;
                    shiftAbsent += rooms[i];
                }
            }
            
            const shiftPercentage = shiftCandidates > 0 ? (shiftAbsent / shiftCandidates * 100).toFixed(1) : 0;
            schoolShiftsData.push({
                shift: shift,
                rooms: shiftRooms,
                candidates: shiftCandidates,
                absent: shiftAbsent,
                filled: shiftFilled,
                percentage: shiftPercentage
            });
            
            // Adicionar linha na tabela
            const shiftStatus = shiftFilled === shiftRooms ? "Completo" : `${shiftFilled}/${shiftRooms}`;
            let percentageClass = 'percentage-low';
            if (shiftPercentage > 10) percentageClass = 'percentage-medium';
            if (shiftPercentage > 30) percentageClass = 'percentage-high';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${school.name}</td>
                <td>${shift === 1 ? 'Manhã' : 'Tarde'}</td>
                <td>${shiftRooms}</td>
                <td>${shiftCandidates}</td>
                <td>${shiftAbsent}</td>
                <td>${shiftPercentage}% <span class="percentage-badge ${percentageClass}">${getPercentageLabel(shiftPercentage)}</span></td>
                <td><span class="badge ${shiftFilled === shiftRooms ? 'bg-success' : 'bg-warning'}">${shiftStatus}</span></td>
            `;
            
            summaryBody.appendChild(row);
            
            schoolTotalRooms += shiftRooms;
            schoolTotalCandidates += shiftCandidates;
            schoolTotalAbsent += shiftAbsent;
            schoolTotalFilled += shiftFilled;
        }
        
        // Card para mobile
        const card = document.createElement('div');
        card.className = 'card mb-3';
        
        const schoolPercentage = schoolTotalCandidates > 0 ? 
            (schoolTotalAbsent / schoolTotalCandidates * 100).toFixed(1) : 0;
        
        card.innerHTML = `
            <div class="card-header bg-light">
                <h6 class="mb-0">${school.name}</h6>
            </div>
            <div class="card-body">
        `;
        
        if (school.shifts === 1) {
            const shiftData = schoolShiftsData[0];
            let percentageClass = 'percentage-low';
            if (shiftData.percentage > 10) percentageClass = 'percentage-medium';
            if (shiftData.percentage > 30) percentageClass = 'percentage-high';
            
            card.innerHTML += `
                <div class="row">
                    <div class="col-6">
                        <small class="text-muted">Turno</small>
                        <p class="mb-1">${shiftData.shift === 1 ? 'Manhã' : 'Tarde'}</p>
                    </div>
                    <div class="col-6">
                        <small class="text-muted">Status</small>
                        <p class="mb-1"><span class="badge ${shiftData.filled === shiftData.rooms ? 'bg-success' : 'bg-warning'}">${shiftData.filled}/${shiftData.rooms}</span></p>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-4">
                        <small class="text-muted">Salas</small>
                        <p class="mb-0">${shiftData.rooms}</p>
                    </div>
                    <div class="col-4">
                        <small class="text-muted">Cand.</small>
                        <p class="mb-0">${shiftData.candidates}</p>
                    </div>
                    <div class="col-4">
                        <small class="text-muted">Aus.</small>
                        <p class="mb-0">${shiftData.absent}</p>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12">
                        <small class="text-muted">Percentual</small>
                        <p class="mb-0">${shiftData.percentage}% <span class="badge ${percentageClass}">${getPercentageLabel(shiftData.percentage)}</span></p>
                    </div>
                </div>
            `;
        } else {
            card.innerHTML += schoolShiftsData.map((shiftData, index) => {
                const shiftStatus = shiftData.filled === shiftData.rooms ? "Completo" : `${shiftData.filled}/${shiftData.rooms}`;
                let percentageClass = 'percentage-low';
                if (shiftData.percentage > 10) percentageClass = 'percentage-medium';
                if (shiftData.percentage > 30) percentageClass = 'percentage-high';
                
                return `
                    <div class="mb-3 ${index > 0 ? 'pt-3 border-top' : ''}">
                        <h6 class="small text-muted mb-2">${shiftData.shift === 1 ? 'Manhã' : 'Tarde'}</h6>
                        <div class="row">
                            <div class="col-3">
                                <small class="text-muted">Salas</small>
                                <p class="mb-0">${shiftData.rooms}</p>
                            </div>
                            <div class="col-3">
                                <small class="text-muted">Cand.</small>
                                <p class="mb-0">${shiftData.candidates}</p>
                            </div>
                            <div class="col-3">
                                <small class="text-muted">Aus.</small>
                                <p class="mb-0">${shiftData.absent}</p>
                            </div>
                            <div class="col-3">
                                <small class="text-muted">Status</small>
                                <p class="mb-0"><span class="badge ${shiftData.filled === shiftData.rooms ? 'bg-success' : 'bg-warning'}">${shiftData.filled}/${shiftData.rooms}</span></p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-12">
                                <small class="text-muted">Percentual</small>
                                <p class="mb-0">${shiftData.percentage}% <span class="badge ${percentageClass}">${getPercentageLabel(shiftData.percentage)}</span></p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        card.innerHTML += `</div>`;
        summaryCards.appendChild(card);
        
        grandTotalRooms += schoolTotalRooms;
        grandTotalCandidates += schoolTotalCandidates;
        grandTotalAbsent += schoolTotalAbsent;
        grandTotalFilled += schoolTotalFilled;
    });
    
    // Total geral na tabela
    const grandTotalPercentage = grandTotalCandidates > 0 ? 
        (grandTotalAbsent / grandTotalCandidates * 100).toFixed(1) : 0;
    const grandTotalStatus = grandTotalFilled === grandTotalRooms ? "Completo" : `${grandTotalFilled}/${grandTotalRooms}`;
    let percentageClass = 'percentage-low';
    if (grandTotalPercentage > 10) percentageClass = 'percentage-medium';
    if (grandTotalPercentage > 30) percentageClass = 'percentage-high';
    
    const grandTotalRow = document.createElement('tr');
    grandTotalRow.className = 'table-primary';
    grandTotalRow.innerHTML = `
        <td><strong>TOTAL GERAL</strong></td>
        <td><strong>Todas as escolas</strong></td>
        <td><strong>${grandTotalRooms}</strong></td>
        <td><strong>${grandTotalCandidates}</strong></td>
        <td><strong>${grandTotalAbsent}</strong></td>
        <td><strong>${grandTotalPercentage}% <span class="percentage-badge ${percentageClass}">${getPercentageLabel(grandTotalPercentage)}</span></strong></td>
        <td><strong><span class="badge ${grandTotalFilled === grandTotalRooms ? 'bg-success' : 'bg-warning'}">${grandTotalStatus}</span></strong></td>
    `;
    
    summaryBody.appendChild(grandTotalRow);
}

function updateSchoolsSelectionPanel(schoolStats) {
    const certameConfig = CONFIG[currentCertame];
    
    schoolsGrid.innerHTML = '';
    
    let hasSelectedSchool = false;
    
    certameConfig.schools.forEach(school => {
        const schoolStat = schoolStats.find(s => s.id === school.id) || {
            filledRooms: 0,
            totalRooms: school.shifts === 2 ? 
                school.roomsPerShift[1].length + school.roomsPerShift[2].length : 
                school.roomsPerShift[1].length,
            percentage: 0
        };
        
        const progress = schoolStat.totalRooms > 0 ? (schoolStat.filledRooms / schoolStat.totalRooms * 100) : 0;
        const isActive = selectedSchoolId === school.id;
        
        const schoolContainer = document.createElement('div');
        schoolContainer.className = 'school-item-container mb-3';
        schoolContainer.dataset.schoolId = school.id;
        
        const schoolBtn = document.createElement('button');
        schoolBtn.className = `btn btn-outline-primary w-100 text-start p-3 school-btn ${isActive ? 'active' : ''}`;
        
        let iconClass = 'fas fa-school';
        if (progress >= 100) iconClass = 'fas fa-check-circle text-success';
        else if (progress >= 50) iconClass = 'fas fa-clipboard-check text-warning';
        else if (progress > 0) iconClass = 'fas fa-clipboard-list text-info';
        
        schoolBtn.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="${iconClass} fa-lg me-3"></i>
                <div class="text-start">
                    <div class="fw-bold">${school.name}</div>
                    <small class="text-muted">${schoolStat.filledRooms}/${schoolStat.totalRooms} salas preenchidas</small>
                </div>
            </div>
        `;
        
        schoolBtn.addEventListener('click', function() {
            const schoolId = parseInt(schoolContainer.dataset.schoolId);
            
            if (selectedSchoolId === schoolId) {
                selectedSchoolId = null;
            } else {
                selectedSchoolId = schoolId;
            }
            
            updateUI();
        });
        
        schoolContainer.appendChild(schoolBtn);
        
        if (isActive) {
            hasSelectedSchool = true;
            const expandedSection = createExpandedSchoolSection(school, schoolStat);
            schoolContainer.appendChild(expandedSection);
        }
        
        schoolsGrid.appendChild(schoolContainer);
    });
    
    if (hasSelectedSchool) {
        noSchoolSelected.classList.add('d-none');
    } else {
        noSchoolSelected.classList.remove('d-none');
    }
}

function createExpandedSchoolSection(school, schoolStat) {
    const data = absentData[currentCertame];
    
    const expandedSection = document.createElement('div');
    expandedSection.className = 'border-start border-end border-bottom rounded-bottom p-3 bg-light';
    
    const schoolCard = document.createElement('div');
    
    // Info do turno
    const shiftInfo = document.createElement('div');
    shiftInfo.className = 'small text-muted mb-3 text-center';
    shiftInfo.textContent = school.shifts === 1 ? 'Apenas um turno' : `${school.shifts} turnos - Selecione o turno abaixo`;
    schoolCard.appendChild(shiftInfo);
    
    // Seletor de turnos
    if (school.shifts > 1) {
        const shiftsSelector = document.createElement('div');
        shiftsSelector.className = 'd-flex justify-content-center gap-2 mb-3';
        
        for (let shift = 1; shift <= school.shifts; shift++) {
            const shiftBtn = document.createElement('button');
            shiftBtn.className = `btn btn-sm ${activeShift[school.id] === shift ? 'btn-primary' : 'btn-outline-primary'}`;
            shiftBtn.textContent = shift === 1 ? 'Manhã' : 'Tarde';
            shiftBtn.dataset.schoolId = school.id;
            shiftBtn.dataset.shift = shift;
            
            shiftBtn.addEventListener('click', function() {
                const schoolId = parseInt(this.dataset.schoolId);
                const shiftNum = parseInt(this.dataset.shift);
                
                activeShift[schoolId] = shiftNum;
                updateUI();
            });
            
            shiftsSelector.appendChild(shiftBtn);
        }
        
        schoolCard.appendChild(shiftsSelector);
    }
    
    // Container para as salas
    const roomsContainer = document.createElement('div');
    roomsContainer.className = 'row g-3';
    
    const currentShift = activeShift[school.id] || 1;
    const rooms = data.schools[school.id].shifts[currentShift].rooms;
    const roomData = school.roomsPerShift[currentShift];
    
    // Informação do turno atual
    const turnoInfo = document.createElement('div');
    turnoInfo.className = 'alert alert-info text-center mb-3 py-2';
    turnoInfo.textContent = `Turno: ${currentShift === 1 ? 'Manhã' : 'Tarde'}`;
    schoolCard.appendChild(turnoInfo);
    
    // Adicionar salas
    for (let i = 0; i < rooms.length; i++) {
        const roomDiv = document.createElement('div');
        roomDiv.className = 'col-md-6 col-lg-4';
        
        const roomCard = document.createElement('div');
        roomCard.className = 'card h-100';
        
        const roomCardBody = document.createElement('div');
        roomCardBody.className = 'card-body';
        
        const roomAbsent = rooms[i];
        const roomCandidatesCount = roomData[i].candidates;
        
        // Cabeçalho da sala
        const roomHeader = document.createElement('div');
        roomHeader.className = 'd-flex justify-content-between align-items-start mb-2';
        
        const roomNameDiv = document.createElement('div');
        
        const roomFullname = document.createElement('h6');
        roomFullname.className = 'card-title mb-1';
        roomFullname.textContent = roomData[i].code;
        
        const roomCandidates = document.createElement('p');
        roomCandidates.className = 'small text-muted mb-0';
        roomCandidates.textContent = `${roomCandidatesCount} candidatos`;
        
        roomNameDiv.appendChild(roomFullname);
        roomNameDiv.appendChild(roomCandidates);
        
        const roomPercentage = document.createElement('div');
        
        if (roomAbsent !== null) {
            const roomPercentageValue = roomCandidatesCount > 0 ? 
                (roomAbsent / roomCandidatesCount * 100).toFixed(1) : 0;
            
            let badgeClass = 'badge bg-success';
            if (roomPercentageValue > 10) badgeClass = 'badge bg-warning';
            if (roomPercentageValue > 30) badgeClass = 'badge bg-danger';
            
            roomPercentage.innerHTML = `<span class="${badgeClass}">${roomPercentageValue}%</span>`;
        } else {
            roomPercentage.innerHTML = '<span class="badge bg-secondary">Não preenchido</span>';
        }
        
        roomHeader.appendChild(roomNameDiv);
        roomHeader.appendChild(roomPercentage);
        
        // Select para número de ausentes
        const select = document.createElement('select');
        select.className = 'form-select form-select-sm';
        select.dataset.schoolId = school.id;
        select.dataset.shift = currentShift;
        select.dataset.roomIndex = i;
        
        // Opção padrão
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "Selecione...";
        defaultOption.selected = roomAbsent === null;
        select.appendChild(defaultOption);
        
        // Opções de 0 até o número máximo de candidatos
        const maxCandidates = roomData[i].candidates;
        for (let j = 0; j <= maxCandidates; j++) {
            const option = document.createElement('option');
            option.value = j;
            option.textContent = j;
            if (roomAbsent === j) option.selected = true;
            select.appendChild(option);
        }
        
        select.addEventListener('change', function() {
            const schoolId = parseInt(this.dataset.schoolId);
            const shift = parseInt(this.dataset.shift);
            const roomIndex = parseInt(this.dataset.roomIndex);
            const value = this.value === "" ? null : parseInt(this.value);
            
            updateAbsentCount(schoolId, shift, roomIndex, value);
        });
        
        roomCardBody.appendChild(roomHeader);
        roomCardBody.appendChild(select);
        roomCard.appendChild(roomCardBody);
        roomDiv.appendChild(roomCard);
        roomsContainer.appendChild(roomDiv);
    }
    
    schoolCard.appendChild(roomsContainer);
    
    // Estatísticas do turno atual
    let shiftAbsent = 0;
    let shiftCandidates = 0;
    let shiftFilled = 0;
    
    for (let i = 0; i < rooms.length; i++) {
        shiftCandidates += roomData[i].candidates;
        if (rooms[i] !== null) {
            shiftFilled++;
            shiftAbsent += rooms[i];
        }
    }
    
    const shiftPercentage = shiftCandidates > 0 ? (shiftAbsent / shiftCandidates * 100).toFixed(1) : 0;
    
    const shiftStats = document.createElement('div');
    shiftStats.className = 'alert alert-primary mt-3 mb-0 text-center';
    shiftStats.innerHTML = `<strong>${currentShift === 1 ? 'Manhã' : 'Tarde'}:</strong> ${shiftAbsent} ausentes de ${shiftCandidates} (${shiftPercentage}%) - ${shiftFilled}/${rooms.length} salas`;
    
    schoolCard.appendChild(shiftStats);
    expandedSection.appendChild(schoolCard);
    return expandedSection;
}

function updateAbsentCount(schoolId, shift, roomIndex, value) {
    absentData[currentCertame].schools[schoolId].shifts[shift].rooms[roomIndex] = value;
    saveData();
    updateUI();
    showNotification();
}

function resetData() {
    if (confirm('Tem certeza que deseja limpar todos os dados deste certame?')) {
        if (currentCertame) {
            initializeCertameData(currentCertame);
            initializeActiveShifts(currentCertame);
            selectedSchoolId = null;
            updateUI();
            showNotification();
        }
    }
}

function getPercentageLabel(percentage) {
    const pct = parseFloat(percentage);
    if (pct <= 10) return 'Baixa';
    if (pct <= 30) return 'Média';
    return 'Alta';
}

// FUNÇÕES DE CORREÇÃO DE DADOS

function saveCorrection(e) {
    e.preventDefault();
    
    const correction = {
        id: Date.now(),
        candidateName: candidateName.value.trim(),
        candidateDocument: candidateDocument.value.trim(),
        candidateBirthDate: candidateBirthDate.value,
        timestamp: new Date().toLocaleString('pt-BR'),
        sentToGoogle: false
    };
    
    correctionsData.push(correction);
    saveData();
    updateCorrectionsList();
    clearCorrectionForm();
    
    showNotification();
    alert('Correção salva localmente com sucesso!');
}

function clearCorrectionForm() {
    correctionForm.reset();
}

function updateCorrectionsList() {
    correctionsList.innerHTML = '';
    
    if (correctionsData.length === 0) {
        correctionsList.innerHTML = `
            <div class="text-center text-muted py-4">
                <i class="fas fa-inbox fa-2x mb-2"></i>
                <p>Nenhuma correção salva ainda</p>
            </div>
        `;
        return;
    }
    
    correctionsData.forEach((correction, index) => {
        const correctionDiv = document.createElement('div');
        correctionDiv.className = `card mb-2 ${correction.sentToGoogle ? 'border-success' : ''}`;
        
        correctionDiv.innerHTML = `
            <div class="card-body p-3">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h6 class="card-title mb-1">${correction.candidateName}</h6>
                        <p class="small text-muted mb-1">Doc: ${correction.candidateDocument}</p>
                        ${correction.candidateBirthDate ? `<p class="small mb-1">Nasc: ${correction.candidateBirthDate}</p>` : ''}
                        <p class="small text-muted mb-0">Salvo: ${correction.timestamp}</p>
                    </div>
                    <div class="text-end">
                        <span class="badge ${correction.sentToGoogle ? 'bg-success' : 'bg-warning'} mb-2">
                            ${correction.sentToGoogle ? 'Enviado' : 'Pendente'}
                        </span>
                        <button class="btn btn-sm btn-outline-danger delete-correction" data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        correctionsList.appendChild(correctionDiv);
    });
    
    // Adicionar eventos aos botões de exclusão
    document.querySelectorAll('.delete-correction').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (confirm('Excluir esta correção?')) {
                correctionsData.splice(index, 1);
                saveData();
                updateCorrectionsList();
            }
        });
    });
}

async function startEnvioCorrecoes() {
    const pendingCorrections = correctionsData.filter(c => !c.sentToGoogle);
    
    if (pendingCorrections.length === 0) {
        alert('Não há correções pendentes para enviar.');
        return;
    }
    
    if (!navigator.onLine) {
        alert('Sem conexão com internet!');
        return;
    }
    
    // Mostrar tela de envio
    correcaoScreen.classList.add('d-none');
    enviandoScreen.classList.remove('d-none');
    envioConcluido.classList.add('d-none');
    progressBarEnvio.style.width = '0%';
    progressText.textContent = '0 de 0 enviados';
    
    // Realizar envio
    await enviarCorrecoes(pendingCorrections);
}

async function enviarCorrecoes(pendingCorrections) {
    let enviados = 0;
    const total = pendingCorrections.length;
    
    for (const correction of pendingCorrections) {
        try {
            const formData = new FormData();
            
            // Mapear dados para o Google Forms
            if (CONFIG_GOOGLE_FORMS.entryIds.candidateName) {
                formData.append(CONFIG_GOOGLE_FORMS.entryIds.candidateName, correction.candidateName);
            }
            
            if (CONFIG_GOOGLE_FORMS.entryIds.candidateDocument) {
                formData.append(CONFIG_GOOGLE_FORMS.entryIds.candidateDocument, correction.candidateDocument);
            }
            
            if (CONFIG_GOOGLE_FORMS.entryIds.candidateBirthDate && correction.candidateBirthDate) {
                formData.append(CONFIG_GOOGLE_FORMS.entryIds.candidateBirthDate, correction.candidateBirthDate);
            }
            
            // Enviar para o Google Forms
            await fetch(CONFIG_GOOGLE_FORMS.url, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });
            
            correction.sentToGoogle = true;
            enviados++;
            
            // Atualizar progresso
            const progress = (enviados / total) * 100;
            progressBarEnvio.style.width = `${progress}%`;
            progressText.textContent = `${enviados} de ${total} enviados`;
            
            // Pausa para não sobrecarregar
            await new Promise(resolve => setTimeout(resolve, 500));
            
        } catch (error) {
            console.error('Erro ao enviar correção:', error);
        }
    }
    
    // Salvar dados atualizados
    saveData();
    
    // Atualizar progresso final
    progressBarEnvio.style.width = '100%';
    progressText.textContent = `${enviados} de ${total} enviados`;
    
    // Mostrar mensagem de conclusão
    setTimeout(() => {
        envioConcluido.classList.remove('d-none');
    }, 500);
}

function clearAllCorrections() {
    if (correctionsData.length === 0) {
        alert('Não há correções para limpar.');
        return;
    }
    
    if (confirm(`Excluir todas as ${correctionsData.length} correções?`)) {
        correctionsData = [];
        saveData();
        updateCorrectionsList();
        alert('Todas as correções foram excluídas.');
    }
}

// Funções auxiliares

function saveData() {
    localStorage.setItem('absentControlData', JSON.stringify(absentData));
    localStorage.setItem('activeShift', JSON.stringify(activeShift));
    localStorage.setItem('correctionsData', JSON.stringify(correctionsData));
}

function loadSavedData() {
    const savedData = localStorage.getItem('absentControlData');
    if (savedData) {
        absentData = JSON.parse(savedData);
    }
    
    const savedActiveShift = localStorage.getItem('activeShift');
    if (savedActiveShift) {
        activeShift = JSON.parse(savedActiveShift);
    }
    
    const savedCorrections = localStorage.getItem('correctionsData');
    if (savedCorrections) {
        correctionsData = JSON.parse(savedCorrections);
    }
}

function showNotification() {
    const toast = new bootstrap.Toast(notification);
    toast.show();
}
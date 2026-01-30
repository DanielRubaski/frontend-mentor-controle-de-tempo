const dashboard = document.querySelector('.dashboard');
const btns = document.querySelectorAll('.time-frames button'); 
let data = [];
const textos = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month'
}
async function loadData() {
    const response = await fetch('./data.json');
    data = await response.json(); 

    
    renderCards('weekly'); 
}

function renderCards(opcao) {
    
    const cartoesAntigos = document.querySelectorAll('.activity-card');
    cartoesAntigos.forEach(card => card.remove());

    
    data.forEach(activity => {
        const tipo = activity.title.toLowerCase().replace(' ', '-');
        
        
        const dados = activity.timeframes[opcao]; 

        const html = `
        <div class="card activity-card ${tipo}">
            <div class="card-info">
                <div class="header">
                    <h3>${activity.title}</h3>
                    <img src="./src/images/icon-ellipsis.svg" alt="menu">
                </div>
                <div class="timer">
                    <p class="current">${dados.current}hrs</p>
                    <p class="previous">${textos[opcao]} - ${dados.previous}hrs</p>
                </div>
            </div>
        </div> 
        `;
        
        dashboard.insertAdjacentHTML('beforeend', html);
    });
}


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCards(btn.id); 
    });
});


loadData();
const overlays = [
  { id: 1, name: "Stream Chat Widget", active: true },
  { id: 2, name: "System Metrics HUD", active: true },
  { id: 3, name: "Alert Notifier", active: false }
];

function renderList() {
  const container = document.getElementById('overlay-list');
  container.innerHTML = overlays.map(item => `
    <div class="overlay-item-card">
      <div class="overlay-info">
        <h4>${item.name}</h4>
        <span>${item.active ? '● Attivo' : '○ Inattivo'}</span>
      </div>
      <button class="btn-sm ${item.active ? 'btn-secondary' : 'btn-primary'}" onclick="toggleOverlay(${item.id})">
        ${item.active ? 'Spegni' : 'Accendi'}
      </button>
    </div>
  `).join('');
  
  const activeCount = overlays.filter(o => o.active).length;
  document.getElementById('active-count').innerText = activeCount;
}

function toggleOverlay(id) {
  const item = overlays.find(o => o.id === id);
  if (item) {
    item.active = !item.active;
    renderList();
  }
}

document.getElementById('new-overlay-btn').addEventListener('click', () => {
  const name = prompt('Nome del nuovo overlay mobile:');
  if (name) {
    overlays.push({ id: Date.now(), name, active: true });
    renderList();
  }
});

document.getElementById('refresh-btn').addEventListener('click', renderList);

// Gestione tab inferiori
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});

renderList();
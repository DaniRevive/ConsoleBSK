// Overlay Console Logic
document.addEventListener('DOMContentLoaded', () => {
    const logsContainer = document.getElementById('console-logs');
    const triggerBtn = document.getElementById('btn-trigger');
    const clearBtn = document.getElementById('btn-clear');

    const initialLogs = [
        { type: 'INFO', text: 'Console initialized successfully.' },
        { type: 'SUCCESS', text: 'Established connection with local host stream.' }
    ];

    function renderLog(type, text) {
        const time = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.className = 'log-entry flex items-start gap-2 text-gray-300';
        
        let colorClass = 'text-blue-400';
        if (type === 'SUCCESS') colorClass = 'text-green-400';
        if (type === 'EVENT') colorClass = 'text-purple-400';

        div.innerHTML = `<span class="text-gray-500">[${time}]</span> <span class="${colorClass} font-semibold">${type}:</span> <span>${text}</span>`;
        logsContainer.appendChild(div);
        logsContainer.scrollTop = logsContainer.scrollHeight;
    }

    // Load initial logs
    initialLogs.forEach(log => renderLog(log.type, log.text));

    triggerBtn.addEventListener('click', () => {
        renderLog('EVENT', 'Simulated interactive overlay action.');
    });

    clearBtn.addEventListener('click', () => {
        logsContainer.innerHTML = '';
    });
});
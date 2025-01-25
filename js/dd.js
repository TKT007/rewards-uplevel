 const NAMES = [
            'Ava R.', 'Ethan T.', 'Luna W.', 'Caleb R.', 'Aria K.',
            'Julian P.', 'Piper S.', 'Gabriel L.', 'Sofia G.', 'Alexander T.',
            'Mia M.', 'Logan D.', 'Isabella W.', 'Benjamin R.', 'Charlotte K.',
            'Oliver P.', 'Abigail S.', 'Elijah L.', 'Emily G.', 'William T.',
            'Harper M.', 'Lucas D.', 'Amelia W.', 'Mason R.', 'Evelyn K.',
            'Liam P.', 'Hannah S.', 'Noah L.', 'Abigail G.', 'Ethan T.'
        ];

     window.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content');
    const ctaButton = document.querySelector('.cta-button');
    
    // Remove qualquer delay
    requestAnimationFrame(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'scale(1)';
        ctaButton.style.display = 'flex';
        ctaButton.style.opacity = '1';
        
        // Reduz o delay entre os cards para 0.05s
        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.05}s`;
        });
    });

    // Inicia os alerts mais rapidamente
    setTimeout(() => {
        showNameAlert();
        setInterval(showNameAlert, 5000);
    }, 1000); // Reduzido para 1 segundo
});

// Timer functionality
function updateTimer() {
    const timerElement = document.getElementById('timer');
    let [minutes, seconds] = timerElement.textContent.split(':').map(Number);
    
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    }
    
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
setInterval(updateTimer, 1000);

// Name alert functionality
function showNameAlert() {
    const alert = document.getElementById('nameAlert');
    const nameSpan = alert.querySelector('.name');
    const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
    
    nameSpan.textContent = randomName;
    alert.style.display = 'flex';
    
    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

// CTA button click handler
function handleClick() {
    const baseUrl = 'https://glitchy.go2cloud.org/aff_c?offer_id=504&aff_id=1497';
    
    // Get URL parameters from current page
    const urlParams = new URLSearchParams(window.location.search);
    
    // Create the final URL
    let finalUrl = baseUrl;
    
    // Add any additional parameters from the current URL
    urlParams.forEach((value, key) => {
        finalUrl += `&${key}=${value}`;
    });
    
    // Create and click the link
    const a = document.createElement('a');
    a.href = finalUrl;
    a.rel = 'noreferrer';
    a.target = '_self';
    a.click();
}

// Make all cards clickable
document.querySelectorAll('.card, .rewards-img').forEach(element => {
    element.style.cursor = 'pointer';
    element.addEventListener('click', handleClick);
});

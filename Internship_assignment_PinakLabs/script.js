document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        card.style.transform = 'rotate(360deg)';
    });
    card.addEventListener('mouseout', function() {
        card.style.transform = 'rotate(0deg)';
    });
});

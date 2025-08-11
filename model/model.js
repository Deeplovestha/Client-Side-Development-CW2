function showDetails(cardId) {
  const detailsPanel = document.getElementById('details-' + cardId);
  const cardElement = document.getElementById(cardId);
  const button = cardElement.querySelector('.view-details-btn');

  const activePanel = document.querySelector('.details-panel.show');
  if (activePanel && activePanel.id !== detailsPanel.id) {
    activePanel.classList.remove('show');
    setTimeout(() => {
        activePanel.style.display = 'none';
    }, 500);
    const prevCardId = activePanel.id.replace('details-', '');
    document.querySelector(`#${prevCardId} .view-details-btn`).textContent = 'View Details';
  }

  if (detailsPanel.classList.contains('show')) {
    detailsPanel.classList.remove('show');
    setTimeout(() => {
        detailsPanel.style.display = 'none';
    }, 500);
    button.textContent = 'View Details';
  } else {
    detailsPanel.style.display = 'flex';
    setTimeout(() => {
        detailsPanel.classList.add('show');
    }, 10);
    button.textContent = 'Hide Details';
  }
}

function bookNow(model, price) {
  window.location.href = `booking.html?model=${encodeURIComponent(model)}&price=${encodeURIComponent(price)}`;
}
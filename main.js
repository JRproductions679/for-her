function dates() {
  const startDate = new Date("Feb 15 2023 15:30:00");
  const now = new Date();
  const seconds = Math.abs(startDate - now) / 1000;

  const day = seconds / (24 * 3600);
  let hh = seconds % (24 * 3600);
  const hour = hh / 3600;

  hh %= 3600;
  const minutes = hh / 60;
  const rseconds = hh % 60;

  document.getElementById('days').innerHTML = parseInt(day);
  document.getElementById('hours').innerHTML = parseInt(hour);
  document.getElementById('minutes').innerHTML = parseInt(minutes);
  document.getElementById('seconds').innerHTML = parseInt(rseconds);
}
setInterval(dates, 1000);

function cardSelected(selectedCard) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (card === selectedCard) {
      card.classList.remove('fade-out');
      card.classList.add('show');
    } else {
      card.classList.add('fade-out');
      card.classList.remove('show');
    }
  });
}

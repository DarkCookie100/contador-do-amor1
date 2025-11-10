// Configuração da data de início do namoro
const startDate = new Date("2024-12-06T00:00:00"); // Altere para sua data

function updateCounter() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);

  const days = Math.floor(diff / (3600 * 24));
  diff -= days * 3600 * 24;
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff - minutes * 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();

// Efeito de movimento nos elementos
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${
      -(y - rect.height / 2) / 20
    }deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});

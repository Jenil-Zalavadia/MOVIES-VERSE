// MovieVerse Interactivity Script
document.addEventListener("DOMContentLoaded", () => {
  // 🌟 Navbar shadow on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow", "bg-dark");
    } else {
      navbar.classList.remove("shadow", "bg-dark");
    }
  });

  // 🎬 Hero fade-in effect
  const heroText = document.querySelector(".hero div");
  heroText.style.opacity = 0;
  heroText.style.transition = "opacity 1.5s ease-in-out";
  setTimeout(() => {
    heroText.style.opacity = 1;
  }, 400);

  // 🎞️ Click on movie image → show alert with title
  const movieCards = document.querySelectorAll(".movie-card img");
  movieCards.forEach((img) => {
    img.addEventListener("click", () => {
      const movieTitle = img.nextElementSibling.textContent.trim();
      alert(`🎬 You selected: ${movieTitle}`);
    });
  });

  // ⬆️ Back to top button
  const backToTop = document.createElement("button");
  backToTop.textContent = "⬆️";
  backToTop.title = "Back to Top";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "30px";
  backToTop.style.right = "30px";
  backToTop.style.background = "#dc3545";
  backToTop.style.border = "none";
  backToTop.style.color = "white";
  backToTop.style.borderRadius = "50%";
  backToTop.style.width = "50px";
  backToTop.style.height = "50px";
  backToTop.style.fontSize = "20px";
  backToTop.style.display = "none";
  backToTop.style.cursor = "pointer";
  backToTop.style.transition = "0.3s";
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // 🕶️ Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

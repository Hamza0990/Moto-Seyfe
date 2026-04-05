document.addEventListener('DOMContentLoaded', () => {
  // const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // menuToggle.addEventListener("click", () => {
  //   navLinks.classList.toggle("active");
  // });


  document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
    });
  });

  const skillCards = document.querySelectorAll(".skill-card");
  const infoBox = document.getElementById("infoBox");

  skillCards.forEach(card => {
    card.addEventListener("click", () => {
      const info = card.getAttribute("data-info");
      infoBox.textContent = info;
      infoBox.classList.add("show");
      infoBox.style.display = "block";

      setTimeout(() => {
        infoBox.classList.remove("show");
        infoBox.style.display = "none";
      }, 3000);
    });
  });


  const cards = document.querySelectorAll(".card-inner");

  console.log(cards)

  cards.forEach(card => {

    console.log(card)

    card.addEventListener("click", () => {
      console.log(card)
      card.classList.toggle("flipped");
    });
  });





  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

})



const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", () => {
  let value = phoneInput.value.replace(/\D/g, "");
  if (value.startsWith("994")) {
    value = value.slice(3);
  }
  let formatted = "+994 ";
  if (value.length > 0) formatted += value.substring(0,3);
  if (value.length > 3) formatted += " " + value.substring(3,6);
  if (value.length > 6) formatted += " " + value.substring(6,8);
  if (value.length > 8) formatted += " " + value.substring(8,10);
  phoneInput.value = formatted;
});








const registerForm = document.getElementById("registerForm");
const birthdateInput = document.getElementById("birthdate");
const warning = document.getElementById("warning");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  
 
  let age = today.getFullYear() - birthdate.getFullYear();
  const m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  
  if (age < 18) {
    warning.style.display = "block"; 
  } else {
    warning.style.display = "none"; 
    alert("Form uğurla göndərildi!");
  }
});

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("homeBtn");
  const openCartBtn = document.getElementById("openCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const confirmBtn = document.getElementById("confirmBtn");

  // Əsas səhifəyə qayıt
  homeBtn.addEventListener("click", () => window.location.href = "index.html");

  // Sebeti aç/bağla
  openCartBtn.addEventListener("click", () => document.getElementById("cartPanel").classList.add("open"));
  closeCartBtn.addEventListener("click", () => document.getElementById("cartPanel").classList.remove("open"));

  // Al düymələri
  document.querySelectorAll(".buyBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".moto-card");
      const name = card.dataset.name;
      const price = parseInt(card.dataset.price);

      const existing = cart.find(c => c.name === name);
      if (existing) {
        alert("Bu nəqliyyatı artıq əlavə etmisiniz!");
      } else {
        cart.push({ name, price, quantity: 1 });
        updateCart();
      }
    });
  });

  // Favori ulduz
  document.querySelectorAll(".favBtn").forEach(star => {
    star.addEventListener("click", () => {
      star.classList.toggle("filled");
      if (star.classList.contains("filled")) {
        star.classList.replace("fa-regular", "fa-solid");
      } else {
        star.classList.replace("fa-solid", "fa-regular");
      }
    });
  });

  // Sifarişi təsdiqlə
  confirmBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Bu əməliyyatı etmək üçün ən azı 1 məhsul seçməlisiniz!");
      return;
    }
    const anim = document.getElementById("order-animation");
    anim.style.display = "block";
    anim.innerText = "Sifarişiniz təsdiqləndi!";
    setTimeout(() => anim.style.display = "none", 3000);
  });
});

// Sebet yeniləmə
function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalPrice = document.getElementById("totalPrice");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((c, index) => {
    total += c.price * c.quantity;
    cartList.innerHTML += `
      <li>
        ${c.name} - ${c.price} AZN (x${c.quantity})
        <div>
          <button onclick="increaseQuantity(${index})">+</button>
          <button onclick="decreaseQuantity(${index})">-</button>
          <button onclick="removeItem(${index})">Sil</button>
        </div>
      </li>`;
  });

  totalPrice.innerText = "Ümumi qiymət: " + total + " AZN";
}

function increaseQuantity(index) {
  cart[index].quantity++;
  updateCart();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    alert("Məhsul sayı minimum 1 ola bilər!");
  }
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}


document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchMessage = document.getElementById("searchMessage");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".moto-card");
    let found = false;

    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      if (query === "") {
        card.style.display = "inline-block";
        searchMessage.innerText = "";
      } else if (name.includes(query)) {
        card.style.display = "inline-block";
        card.classList.add("show");
        found = true;
      } else {
        card.style.display = "none";
        card.classList.remove("show");
      }
    });

    if (query !== "" && !found) {
      searchMessage.innerText = "Belə bir nəqliyyat yoxdur";
    } else {
      searchMessage.innerText = "";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const showBasketBtn = document.getElementById("openCartBtn");
  const hideBasketBtn = document.getElementById("closeCartBtn");
  const showFavBtn = document.getElementById("openFavBtn");
  const hideFavBtn = document.getElementById("closeFavBtn");

  showBasketBtn.addEventListener("click", () => document.getElementById("cartPanel").classList.add("open"));
  hideBasketBtn.addEventListener("click", () => document.getElementById("cartPanel").classList.remove("open"));

  showFavBtn.addEventListener("click", () => document.getElementById("favPanel").classList.add("open"));
  hideFavBtn.addEventListener("click", () => document.getElementById("favPanel").classList.remove("open"));
});






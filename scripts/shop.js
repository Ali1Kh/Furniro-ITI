document.addEventListener("DOMContentLoaded", function () {
// i
  const boxContainer = document.querySelector(".boxContainer"); 
  const pageButtons = document.querySelectorAll('.pageBtn');    
  const nextBtn = document.querySelector('.pageBtn.next');      
  const listIcon = document.getElementById("listView");      
  const gridIcon = document.getElementById("gridView");        


  let currentPage = 1;
  const itemsPerPage = 16;
  const totalProducts = 44;
  const maxImageNumber = 8;

  const products = [];

  for (let i = 0; i < totalProducts; i++) {
    const imageNumber = (i % maxImageNumber) + 1;
    products.push({
      image: `img/section3_${imageNumber}.png`,
      fuct: "Respira",
      name: `Minimalist chair ${i + 1}`,
      price: `Rp ${500 + i * 10}.000`,
      oldPrice: `Rp ${750 + i * 10}.000`
    });
  }


  function createCard(product) {
    const card = document.createElement("div");
    card.className = "boxin";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <p class="fuct">${product.fuct}</p>
      <p class="productName">${product.name}</p>
      <p class="price">${product.price}
        <del style="color: #a7a7a7; padding-left: 10px;">${product.oldPrice}</del>
      </p>
      <button class="addCartBtn">Add to Cart</button>
      <div class="linksUnderBtn">
        <a href="#">Details</a>
        <a href="#">Share</a>
        <a href="#">Wishlist</a>
      </div>
    `;
    return card;
  }


  for (let i = 0; i < products.length; i++) {
    const card = createCard(products[i]);
    boxContainer.appendChild(card);
  }

  const allProducts = document.querySelectorAll('.boxin');

  
  function updateProductCount() {
    const visible = Array.from(allProducts).filter(p => !p.classList.contains("hidden"));
    const countElement = document.querySelector(".productCount");
    if (countElement) countElement.textContent = visible.length;
  }

  // --------
  function showPage(page) {
    currentPage = page;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    for (let i = 0; i < allProducts.length; i++) {
      if (i >= start && i < end) {
        allProducts[i].classList.remove("hidden");
      } else {
        allProducts[i].classList.add("hidden");
      }
    }

    pageButtons.forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.querySelector(`.pageBtn[data-page="${page}"]`);
    if (activeBtn) activeBtn.classList.add("active");

    const totalPages = Math.ceil(allProducts.length / itemsPerPage);
    if (nextBtn)
      nextBtn.style.display = currentPage >= totalPages ? "none" : "inline-block";

    updateProductCount();
  }

  showPage(currentPage);

  pageButtons.forEach(btn => {
    if (!btn.classList.contains("next")) {
      btn.addEventListener("click", () => {
        const page = parseInt(btn.dataset.page);
        showPage(page);
      });
    }
  });

// i
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(allProducts.length / itemsPerPage);
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
      }
    });
  }

  if (listIcon && gridIcon && boxContainer) {
    gridIcon.addEventListener("click", function () {
      boxContainer.classList.remove("grid-view");
      boxContainer.classList.add("list-view");
    });

    listIcon.addEventListener("click", function () {
      boxContainer.classList.remove("list-view");
      boxContainer.classList.add("grid-view");
    });
  }

  
});


function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    overlay.style.display = "none";
  } else {
    sidebar.style.width = "250px";
    overlay.style.display = "block";
  }
}

  document.addEventListener("DOMContentLoaded", function () {
    const allProducts = document.querySelectorAll('.boxin');
    const pageButtons = document.querySelectorAll('.pageBtn');
    const nextBtn = document.querySelector('.pageBtn.next');
    let currentPage = 1;
    const itemsPerPage = 16;

    function updateProductCount() {
      const visibleProducts = Array.from(allProducts)
        .filter(p => !p.classList.contains("hidden"));

      document.querySelector(".productCount").textContent = visibleProducts.length;
    }

    function showPage(pageNum) {
      currentPage = pageNum;
      const start = (pageNum - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      allProducts.forEach((product, index) => {
        if (index >= start && index < end) {
          product.classList.remove('hidden');
        } else {
          product.classList.add('hidden');
        }
      });

      pageButtons.forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.querySelector(`.pageBtn[data-page="${pageNum}"]`);
      if (activeBtn) activeBtn.classList.add('active');

      const totalPages = Math.ceil(allProducts.length / itemsPerPage);
      nextBtn.style.display = currentPage >= totalPages ? 'none' : 'inline-block';

      updateProductCount(); // ✅ تحديث الرقم هنا
    }

    showPage(currentPage); // عرض أول صفحة

    pageButtons.forEach(btn => {
      if (!btn.classList.contains('next')) {
        btn.addEventListener('click', () => {
          const page = parseInt(btn.dataset.page);
          showPage(page);
        });
      }
    });

    nextBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(allProducts.length / itemsPerPage);
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
      }
    });
  });


document.querySelector('.filter').addEventListener('click', function () {
  const priceFilter = document.querySelector('.priceFilter');
  priceFilter.style.display = (priceFilter.style.display === 'none') ? 'block' : 'none';
});

function filterByPrice() {
  const min = parseInt(document.getElementById('minPrice').value) || 0;
  const max = parseInt(document.getElementById('maxPrice').value) || Infinity;

  const products = document.querySelectorAll('.boxin');

  products.forEach(product => {
    const priceText = product.querySelector('.price').textContent;
    const priceNumber = parseInt(priceText.replace(/\D/g, ''));

    if (priceNumber >= min && priceNumber <= max) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

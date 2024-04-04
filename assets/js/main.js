const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const accordionContent = this.nextElementSibling;
    accordionHeaders.forEach(otherHeader => {
      if (otherHeader !== header) {
        otherHeader.classList.remove('active');
        otherHeader.nextElementSibling.style.display = 'none';
      }
    });
    this.classList.toggle('active');
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  });
});
<!-- Clickable Folders in Squarespace from Will-Myers.com -->
<script>
  window.addEventListener('load', () => {
    if ('ontouchstart' in window) return;
    const folders = document.querySelectorAll('.header-nav-folder-title');
    folders.forEach(el => {
      if (window.getComputedStyle(el).display !== 'none') {
        const clone = el.cloneNode(true);
        clone.classList.add('replaced-folder');
        clone.tabIndex = '0';
        el.parentElement.replaceChild(clone, el);
        if (clone.matches('.preFade')) clone.classList.add('fadeIn')
        if (clone.matches('.preScale')) clone.classList.add('scaleIn')
        if (clone.matches('.preSlide')) clone.classList.add('slideIn')
        if (clone.matches('.preFlex')) clone.classList.add('flexIn')
      }
    });
  });
</script>

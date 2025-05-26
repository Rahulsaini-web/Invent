 function Show() {
      var demo=document.querySelector('.header-detail');
          demo.classList.toggle('show');

      var king=document.querySelector('.icon i');
          king.classList.toggle('fa-bars');
          king.classList.toggle('fa-close');    

    }

    function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 90 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

        document.addEventListener('scroll', toggleScrolled);
        window.addEventListener('load', toggleScrolled);
 
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
        });
    });


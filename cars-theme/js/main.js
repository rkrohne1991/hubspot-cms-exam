(function() {

    /**
    * Easy selector helper function
    */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
    * Easy event listener function
    */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
    * Easy on scroll event listener 
    */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
    * Mobile nav toggle
    */
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });

    /**
    * Toggle .header-scrolled class to #header when page is scrolled
    */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
        } else {
            selectHeader.classList.remove('header-scrolled')
        }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
    * Back to top button
    */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    let aboutSection = select('.row-fluid-wrapper.row-depth-1.row-number-1.dnd-section');
    aboutSection.setAttribute('id', 'about');

    let contactSection = select('.row-fluid-wrapper.row-depth-1.row-number-8.dnd-section');
    contactSection.setAttribute('id', 'contact');

})();
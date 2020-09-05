import $ from '../core';

$.prototype.modal = function() {

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    const scroll = calcScroll();    

    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);

            let scrollHeight = Math.max(
                    document.body.scrollHeight, document.documentElement.scrollHeight,
                    document.body.offsetHeight, document.documentElement.offsetHeight,
                    document.body.clientHeight, document.documentElement.clientHeight
                );

            if (scrollHeight > document.documentElement.clientHeight) {
                const targetChildren = document.querySelector(target).firstChild;
                const mr = getComputedStyle(targetChildren).marginRight;
                const finishMr = +(mr.substring(0, mr.length - 2)) + scroll;
                targetChildren.style.marginRight = `${finishMr}px`;
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            }
        });
    }

    const defaultMarginRight = () => {
        for (let i = 0; i < this.length; i++) {
            const target = this[i].getAttribute('data-target');
            const targetChildren = document.querySelector(target).firstChild;
            
            if (targetChildren.style.marginRight) {
                const mr = getComputedStyle(targetChildren).marginRight;
                const finishMr = +(mr.substring(0, mr.length - 2)) - scroll;
                targetChildren.style.marginRight = `${finishMr}px`;
            }
        }                    
        document.body.style.marginRight = `0px`;
        document.body.style.overflow = '';
    }

    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            defaultMarginRight();            
        });
    });

    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            defaultMarginRight();            
        }
    });

};

$('[data-toggle="modal"]').modal();


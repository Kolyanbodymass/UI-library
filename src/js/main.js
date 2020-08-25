import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('.active').setAttribute('id', 'active').removeAttribute('id');

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.more'));

// console.log($('.some').closest('.findmef').addClass('wsefwef'));

console.log($('.more').eq(0).siblings());

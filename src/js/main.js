import $ from './lib/lib';

$('button').on('click', function() {
    $(this).toggleClass('active');
});

$('.active').setAttribute('id', 'active').removeAttribute('id');
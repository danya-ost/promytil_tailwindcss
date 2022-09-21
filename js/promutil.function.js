$(document).ready(() => {
    let openDiv = $('.open-div');
    let countDiv = openDiv.length;
    for( let i = 1; i <= countDiv; i++ ){
        $('#open-block-'+i).slideUp(1);
    }

    openDiv.on('click', (e) => {
        console.log(e.target.id);
        $('#open-block-'+e.target.id).slideDown(500);
        if( $('#open-block-'+e.target.id).hasClass('active') ){
            $('#open-block-'+e.target.id).removeClass('active');
            $('#open-block-'+e.target.id).slideUp(500);
        } else{
            $('#open-block-'+e.target.target.id).addClass('active');
        }
    });


    let zoomImg = $('.view-doc-image');

    $('.view-doc-image').on('click', function(){
        if( zoomImg.hasClass('max-w-[700px]') ){
            zoomImg.removeClass('max-w-[700px]').addClass('max-w-[1024px]');
        } else{
            zoomImg.removeClass('max-w-[1024px]').addClass('max-w-[700px]');
        }
    });
});

$(document).ready(() => {
    let viewDoc = $('.view-doc');
    let viewDocClose = $('.view-doc-close');
    let openImage = $('.open-image');
    let viewDocImage = $('#view-doc-image');

    viewDocClose.on('click', () => {
        viewDoc.addClass('hidden');
        zoomImg.removeClass('max-w-[1024px]').addClass('max-w-[700px]');
    });

    openImage.on('click', (e) => {
        viewDocImage.attr('src', e.target.src);
        viewDoc.removeClass('hidden');
    });
});

$(document).ready(() => {
    let openNav = $('.open-btn-nav')
    $('.mobile-nav').slideUp(1);

    openNav.on('click', () => {
        if( $('.mobile-nav').hasClass('close') ){
            $('.mobile-nav').slideDown(500);
            $('.mobile-nav').removeClass('close');
        } else{
            $('.mobile-nav').slideUp(500);
            $('.mobile-nav').addClass('close');
        }
    });
});

$(document).ready(() => {
    let countNav = $('.main-menu__item').length;
    for( let i = 1; i <= countNav; i++ ){
        if( i == countNav ){
            $('#main-menu__item-'+i).clone().removeClass().addClass('block py-[20px] font-open-sans font-[400] text-[18px] leading-[21.79px] hover:text-mc ease-in-out duration-300').appendTo('.mobile-menu');
        } else{
            $('#main-menu__item-'+i).clone().removeClass().addClass('block py-[20px] font-open-sans font-[400] text-[18px] leading-[21.79px] hover:text-mc ease-in-out duration-300').appendTo('.mobile-menu');
            $('.mobile-menu').append('<hr>');
        }
    }
});

$(document).ready(() => {
    
    $(window).on("scroll", () => {
        if( $(window).scrollTop() > 150 ){
            $('.nav-scroll').css({
                transform: translateY('0px')
            });
        } else{
            $('.nav-scroll').css({
                transform: translateY('-100%')
            });
        }
    });

});
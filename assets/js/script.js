'use sctrict';

const bindElement = function(elem, callback){
    if (typeof jQuery != "undefined"){
        var elements = jQuery(elem);
        if (elements.length && typeof callback == "function"){
            callback(elements);
        }
    }
}

jQuery(function(){
    bindElement("#inner-slider", function(sliders){
        for (var i=0; i<sliders.length; i++){
            jQuery(sliders[i]).owlCarousel({
                loop: true,
                nav:false,
                items: 1,
                dots: true,
                autoplay: false,
                autoHeight:true
                
            });
        }
    });
    jQuery("[data-fancybox]").fancybox();
});

$(document).ready(function(){

    var $terms = [

            'account coordinator',

            'account director',

            'account executive',

            'account manager',

            'account planner',

            'account supervisor',

            'management supervisor',

            'art',

            '3d artist',

            'animator',

            'art director',

            'creative director',

            'design manager/director',

            'desktop publisher',

            'graphic designer',

            'illustrator',

            'industrial designer',

            'infographics designer',

            'motion graphics designer',

            'multimedia designer',

            'packaging designer',

            'photo stylist',

            'photographer',

            'presentation designer/specialist',

            'product designer',

            'twitter page designer/developer',

            'typographer',

            'copy',

            'copy editor',

            'ui/ux designer',

            'automotive copywriter',

            'bilingual copywriter',

            'e-commerce copywriter',

            'education copywriter',

            'financial/insurance copywriter',

            'mobile designer',

            'food & beverage copywriter',

            'healthcare/pharma copywriter',

            'pr copywriter',

            'retail copywriter',

            'seo copywriter',

            'social media copywriter',

            'technical copywriter',

            'technology copywriter',

            'travel copywriter',

            'creative director',

            'editorial manager',

            'proofreader',

            'translator',

            'interactive',

            'application developer',

            'facebook application developer',

            'mobile application developer',

            'cms developer',

            'community manager',

            'content manager',

            'content strategist',

            'digital production artist',

            'digital strategist/planner',

            'e-commerce designer/developer',

            'e-mail designer/developer',

            'elearning designer/developer',

            'flash designer/developer',

            'interactive account manager',

            'interactive art director',

            'interactive copy editor',

            'interactive copywriter',

            'interactive designer',

            'interactive developer',

            'interactive marketing analyst',

            'interactive marketing manager',

            'interactive media buyer/planner',

            'interactive producer',

            'interactive project manager',

            'online merchandiser',

            'quality assurance tester/manager',

            'social media coordinator/manager',

            'social media designer',

            'social media strategist',

            'software interface designer',

            'marketing',

            'brand strategist',

            'producer',

            'experiential marketing manager',

            'marketing analyst',

            'marketing coordinator',

            'marketing director',

            'marketing manager',

            'marketing researcher',

            ' marketing strategist',

            'merchandise manager',

            'new business developer',

            'packaging & promotions manager',

            'public relations specialist',

            'visual merchandiser',

            'media',

            'media buyer',

            'media coordinator',

            'media director/supervisor',

            'media planner',

            'production',

            'art buyer',

            'broadcast traffic manager',

            'creative services coordinator',

            'creative services manager',

            'mock-up artist',
            'UX Designer',
            'UI Designer',
            'UX/UI Designer',
            'multimedia producer',

            'photo editor',

            'photo researcher',

            'photo retoucher',

            'pre-press specialist',

            'producer',

            'production artist',

            'production manager/director',

            'project manager',

            'studio manager/director',

            'traffic manager',

            'video editor',

            'analytics manager',

            'sem/ppc analyst',

            ' seo analyst',

            'seo/sem account manager',

            'usability',

            'information architect',

            'usability specialist',

            'user experience specialist',

            'user interface designer'
        ].sort(),
        $return = [];

    function strInArray(str, strArray) {
        for (var j=0; j<strArray.length; j++) {
            if (strArray[j].match(str) && $return.length < 5) {
                var $h = strArray[j].replace(str, '<strong>'+str+'</strong>');
                $return.push('<li class="prediction-item"><span class="prediction-text">' + $h + '</span></li>');
            }
        }
    }

    function nextItem(kp) {
        if ( $('.focus').length > 0 ) {
            var $next = $('.focus').next(),
                $prev = $('.focus').prev();
        }

        if ( kp == 38 ) { // Up

            if ( $('.focus').is(':first-child') ) {
                $prev = $('.prediction-item:last-child');
            }

            $('.prediction-item').removeClass('focus');
            $prev.addClass('focus');

        } else if ( kp == 40 ) { // Down

            if ( $('.focus').is(':last-child') ) {
                $next = $('.prediction-item:first-child');
            }

            $('.prediction-item').removeClass('focus');
            $next.addClass('focus');
        }
    }

    $(function(){
        $('#fieldmydq').keydown(function(e){
            $key = e.keyCode;
            if ( $key == 38 || $key == 40 ) {
                nextItem($key);
                return;
            }

            setTimeout(function() {
                var $search = $('#fieldmydq').val();
                $return = [];

                strInArray($search, $terms);

                if ( $search == '' || ! $('input').val ) {
                    $('.output').html('').slideUp();
                } else {
                    $('.output').html($return).slideDown();
                }

                $('.prediction-item').on('click', function(){
                    $text = $(this).find('span').text();
                    $('.output').slideUp(function(){
                        $(this).html('');
                    });
                    $('#fieldmydq').val($text);
                });

                $('.prediction-item:first-child').addClass('focus');

            }, 50);
        });
    });

    $('#fieldmydq').focus(function(){
        if ( $('.prediction-item').length > 0 ) {
            $('.output').slideDown();
        }

        $('#searchform').submit(function(e){
            e.preventDefault();
            $text = $('.focus').find('span').text();
            $('.output').slideUp();
            $('#fieldmydq').val($text);
            $('input').blur();
        });
    });

    $('#fieldmydq').blur(function(){
        if ( $('.prediction-item').length > 0 ) {
            $('.output').slideUp();
        }
    });


    $(function(){
        $('.autocomplete_2').keydown(function(e){
            $key = e.keyCode;
            if ( $key == 38 || $key == 40 ) {
                nextItem($key);
                return;
            }

            setTimeout(function() {
                var $search = $('.autocomplete_2').val();
                $return = [];

                strInArray($search, $terms);

                if ( $search == '' || ! $('input').val ) {
                    $('.output').html('').slideUp();
                } else {
                    $('.output').html($return).slideDown();
                }

                $('.prediction-item').on('click', function(){
                    $text = $(this).find('span').text();
                    $('.output').slideUp(function(){
                        $(this).html('');
                    });
                    $('.autocomplete_2').val($text);
                });

                $('.prediction-item:first-child').addClass('focus');

            }, 50);
        });
    });

    $('.autocomplete_2').focus(function(){
        if ( $('.prediction-item').length > 0 ) {
            $('.output').slideDown();
        }

        $('#searchform').submit(function(e){
            e.preventDefault();
            $text = $('.focus').find('span').text();
            $('.output').slideUp();
            $('.autocomplete_2').val($text);
            $('input').blur();
        });
    });

    $('.autocomplete_2').blur(function(){
        if ( $('.prediction-item').length > 0 ) {
            $('.output').slideUp();
        }
    });

});




// sideNave


$(document).ready(function(){
    $('.opened').click(function(){
        $(this).next('.sub-menu').slideToggle(500);


    })
})
$(document).ready(function(){
    $('.fa-envelope').click(function(){
        $(this).next('.message-box').slideToggle(500);
    })
})
$(document).ready(function(){
    $('.fa-bell').click(function(){
        $(this).next('.message2-box').slideToggle(500);
    })
})
$(document).ready(function(){
    $('.image').click(function(){
        $('.profile').slideToggle(500);
    })
})
$(document).ready(function(){
    $('.tickets .date-btn').click(function(){
        $('.tickets .sub-menu').slideToggle(500);
    })
})


$(document).ready(function(){
    $('.fa-circle-xmark').on('click',function(){
       
        $('.fa-circle-xmark').addClass('d-none')
        $('.fa-bars').removeClass('d-none')
        
       
       
        $('.sidenav').css({width:'70px'})
        $('.items span').addClass('d-none')
        $('.main-div').css({"margin-left":'70px'})
        $('.items .openIcon').css({display:"none"})
        

       
    })
    
})

$(document).ready(function(){

    $('.fa-bars').on('click',function(){
        console.log('hello');
        $('.fa-bars').addClass('d-none')
        $('.fa-circle-xmark').removeClass('d-none')
        $('.items .openIcon').css({display:"inline"})
       
        $('.sidenav').css({width:'250px'})
        $('.items a span').removeClass('d-none')
        $('.main-div').css({"margin-left":'250px'})
    
       
    })

})
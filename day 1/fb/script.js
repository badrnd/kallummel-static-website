$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
        fname:{
            required:true,
            minlength:4,
            maxlength: 6
        },
        sname:{
            required:true,
            minlength:4
        },
        emob:{
                required:true,
                email: true
        },
        pass:{
             required:true,
            minlength:6
        },
        day:{
            required: true

        },
        gen:{
            required:true
        }
        },
                messages:{
            fname:{
            required:"enter first name",
            minlength:"enter atleast 4 charectors",
            maxlength:"athrayum venda"
        }
       
        }
    })

    
})

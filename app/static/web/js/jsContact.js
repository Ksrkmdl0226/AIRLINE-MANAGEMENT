$(document).ready(function () {
    $("#btn_add").click(function () {
        if ($("#name").val() == "") {
            alert("Please enter Name");
            return false
        }
        if ($("#email").val() == "") {
            alert("Please enter Email");
            return false
        }
        if ($("#subject").val() == "") {
            alert("Please enter Subject");
            return false
        }

        if ($("#message").val() == "") {
            alert("Please enter Message");
            return false
        }
        // if ($("#phone").val() == "") {
        //     alert("Plz enter Phone");
        //     return false
        // }
        // if ($("#password").val() == "") {
        //     alert("Please enter Password");
        //     return false
        // }
        // if ($("#inputState").val() == "") {
        //     alert("Please Enter State");
        //     return false
        // }
        // if ($("#inputState").val() == "") {
        //     alert("Please Enter State");
        //     return false
        // }
        // if ($("#selRole").val() == "") {
        //     alert("Please select your domain");
        //     $("#selRole").focus();
        //     return false;
        // }



    })
})


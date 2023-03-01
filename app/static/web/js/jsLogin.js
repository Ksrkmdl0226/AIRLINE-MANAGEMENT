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

        // if ($("#address").val() == "") {
        //     alert("Please enter Address");
        //     return false
        // }
        if ($("#number").val() == "") {
            alert("Plz enter Number");
            return false
        }
        if ($("#password").val() == "") {
            alert("Please enter Password");
            return false
        }
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


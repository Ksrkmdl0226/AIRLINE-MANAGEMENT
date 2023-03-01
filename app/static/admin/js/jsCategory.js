$(document).ready(function () {
    $("#btn_add").click(function () {
        if ($("#txtName").val() == "") {
            alert("Please Enter Name");
            $("#txtName").focus();
            return false;
        }

    })
});
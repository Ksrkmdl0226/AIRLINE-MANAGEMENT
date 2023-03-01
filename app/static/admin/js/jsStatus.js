$(document).ready(function () {
    $("#btn_add").click(function () {
        if ($("#txtName").val() == "") {
            alert("Please Enter status");
            $("#txtName").focus();
            return false;
        }

    })
});
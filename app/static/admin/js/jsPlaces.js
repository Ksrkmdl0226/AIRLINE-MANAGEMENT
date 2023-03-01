$(document).ready(function () {
    $("#btn_add").click(function () {
        if ($("#txtName").val() == "") {
            alert("Please Enter Place");
            $("#txtName").focus();
            return false;
        }

    })
});
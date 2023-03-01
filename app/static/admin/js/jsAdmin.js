$(document).ready(function () {
    $("#btn_add").click(function () {
        if ($("#txtName").val() == "") {
            alert("Please Enter Name");
            $("#txtName").focus();
            return false;
        }

        if ($("#txtEmail").val() == "") {
            alert("Please Enter Email");
            $("#txtEmail").focus();
            return false;
        }
        if ($("#txtMobileNo").val() == "") {
            alert("Please Enter your Mobile number");
            $("#txtMobileNo").focus();
            return false;

        }
        if ($("#txtPassword").val() == "") {
            alert("Please Enter your Password");
            $("#txtPassword").focus();
            return false;
        }
        if ($("#selRole").val() == "") {
            alert("Please select your domain");
            $("#selRole").focus();
            return false;
        }
    })
});
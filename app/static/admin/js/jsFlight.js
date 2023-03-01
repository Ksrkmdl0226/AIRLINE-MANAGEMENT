$(document).ready(function () {
    $("#btn_add").click(function () {
        if ($("#txtName").val() == "") {
            alert("Please Enter Flight Name");
            $("#txtName").focus();
            return false;
        }

        if ($("#txtSource").val() == "") {
            alert("Please Enter Email");
            $("#txtSource").focus();
            return false;
        }
        if ($("#txtDestination").val() == "") {
            alert("Please Enter your Destination");
            $("#txtDestination").focus();
            return false;

        }
        if ($("#txtDate").val() == "") {
            alert("Please Enter Date");
            $("#txtDate").focus();
            return false;
        }
        if ($("#txtAdult").val() == "") {
            alert("Please Enter Date");
            $("#txtAdult").focus();
            return false;
        }
        if ($("#txtChildren").val() == "") {
            alert("Please Enter Date");
            $("#txtChildren").focus();
            return false;
        }
        // if ($("#selRole").val() == "") {
        //     alert("Please select your domain");
        //     $("#selRole").focus();
        //     return false;
        // }
    })
});
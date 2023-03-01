$(document).ready(function () {
    $("#btn_add").click(function () {
        if ($("#txtName").val() == "") {
            alert("Please Enter Flight Name");
            $("#txtName").focus();
            return false;
        }
        if ($("#txtPolitName").val() == "") {
            alert("Please Enter Polit Name");
            $("#txtPolitName").focus();
            return false;
        }
        if ($("#txtPolitId").val() == "") {
            alert("Please Enter Polit Id");
            $("#txtPolitId").focus();
            return false;
        }

        if ($("#txtSource").val() == "") {
            alert("Please Enter source");
            $("#txtSource").focus();
            return false;
        }
        if ($("#txtDestination").val() == "") {
            alert("Please Enter your Destination");
            $("#txtDestination").focus();
            return false;

        }
        if ($("#txtJoiningDate").val() == "") {
            alert("Please Enter joining Date");
            $("#txtJoiningDate").focus();
            return false;
        }
        if ($("#txtLocation").val() == "") {
            alert("Please Enter location");
            $("#txtLocation").focus();
            return false;
        }
        if ($("#txtTime").val() == "") {
            alert("Please Enter Time");
            $("#txtTime").focus();
            return false;
        }
        // if ($("#selRole").val() == "") {
        //     alert("Please select your domain");
        //     $("#selRole").focus();
        //     return false;
        // }
    })
});
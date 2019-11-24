
$(document).on("click", "#signup-button", load_login)

function load_login(e) {
    e.preventDefault();
    console.log("hi");
    $.ajax({
        url: "/:accountid/group",
        type: "GET",
        success: function (res) {
            document.open();
            document.write(res);
            document.close();
            console.log("Success");
        },
        error: function (res) {
            //Return validation errors
            console.log("Failure");
        }
    });
}
var six_digits;

$(document).on("submit", "#signup-form", signup)

function signup(e) {
    e.preventDefault();
    var phoneNumber = ($("#phone_number")[0]);
    six_digits = send_verification_to_number(phoneNumber)
    //render template
}

//verify, then submit ajax to a remote database, adding it to the database.

$(document).on("submit", "#verification", verify_code)
//verify signup form

function verify_code(e) {
    e.preventDefault();
    var verification_code = ($("#verification_code")[0]);
    if (verification_code == six_digits) {
        //sucess, send to database
        numbers = fake_number();
        phoneNumber = fake_number[0];
        realNumber = fake_number[1];
        six_digits = send_verification_to_number(phoneNumber)
        return
    }
    else {
        //make something appear
        return
    }
}

//

function find_account(account_ID) {
    $.ajax({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_key,
            'version': '1.0',
            url: "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/" + accountID,
            type: "GET",
            success: function (res) {
                //parse json for response
                console.log("Success");
            },
            error: function (res) {
                //Return validation errors
                console.log("Failure");
            }
        }
    })
};

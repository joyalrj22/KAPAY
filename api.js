var accountSid = 'AC7f77903e53e54fabbbade735a311af19'; // Your Account SID from www.twilio.com/console
var authToken = '8c396b00f1251712bd290ec38b13c191';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

function generate_6_random_digits() {
    var random_digits = Math.floor(100000 + Math.random() * 900000)
    return random_digits
}

function send_verification_to_number(number) {
    var body = generate_6_random_digits()
    client.messages
        .create({
            body: body,
            to: number,  // Text this number
            from: '+441785472313' // From a valid Twilio number
        })
        .then(message => console.log(message.sid));
    return body;
}

function fake_number(phoneNumber) {
    var storedNumber = phoneNumber
    const number = "";
    return [number, storedNumber];
}
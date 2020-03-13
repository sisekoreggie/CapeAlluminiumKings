function sendEmail(emailBody) {
	Email.send({
	Host: "smtp.sendgrid.net",
	Username : "apikey",
	Password : ${{ secrets.SendGrid_Api_Key }},
	To : 'mpilo@capealluminiumkings.com',
	From : "njataabo@gmail.com",
	Subject : "Contact us",
	Body : emailBody,
	}).then(
		message => alert("mail sent successfully")
	);
}

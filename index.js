function sendEmail(emailBody) {
	Email.send({
	Host: "smtp.sendgrid.net",
	Username : "apikey",
	Password : "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",
	To : 'mpilo@capealluminiumkings.com',
	From : "njataabo@gmail.com",
	Subject : "Contact us",
	Body : emailBody,
	}).then(
		message => alert("mail sent successfully")
	);
}
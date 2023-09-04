const changePassEmail = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
    <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
        <tr>
            <td style="text-align: center; background-color: #007bff; padding: 10px;">
                <h1 style="color: #ffffff;">Password Reset Request</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <p>Hello, {name} </p>
                <p>We have received a request to reset your password. If you did not request this change, please disregard this email.</p>
                <p>To reset your password, please click the following link:</p>
                <p><a href={link}>Password Reset Link</a></p>
                <p>This link is valid for the next 5 minutes. If you have any questions or concerns, please don't hesitate to contact our support team.</p>
                <p>Best regards,<br>Cyber Safe</p>
            </td>
        </tr>
    </table>
</body>
</html>
`;

module.exports = {changePassEmail}
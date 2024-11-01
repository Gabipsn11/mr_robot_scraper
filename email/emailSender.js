// email/emailSender.js
const nodemailer = require('nodemailer');

async function sendEmail(body) {
    // Configuração do transportador
    const transporter = nodemailer.createTransport({
        service: 'gmail', // ou outro serviço de email que você estiver usando
        auth: {
            user: 'gabrielapsn11@gmail.com', // substitua pelo seu email
            pass: 'kbjo gnqj rzrq bacz', // substitua pela sua senha ou App Password se estiver usando autenticação em duas etapas
        },
    });

    const mailOptions = {
        from: 'gabrielapsn11@gmail.com',
        to: 'gabrielapsn11@gmail.com', // substitua pelo email do destinatário
        subject: 'Informações sobre Mr. Robot',
        html: body,
    };

    // Envio do email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar o email:', error);
        throw error;
    }
}

module.exports = { sendEmail };

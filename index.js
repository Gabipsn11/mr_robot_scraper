const { sendEmail } = require('./email/emailSender');
const { fetchMrRobotData } = require('./scraper/scraper');
const { getEmailTemplate } = require('./email/emailTemplate');

(async () => {
    try {
        const { title, synopsis, episodes, platforms } = await fetchMrRobotData();

        // Usando o template de email para criar a mensagem
        const emailBody = getEmailTemplate(title, synopsis, episodes, platforms);

        // Enviando o email com a mensagem formatada
        await sendEmail(emailBody);
        console.log('Email enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar o email:', error);
    }
})();

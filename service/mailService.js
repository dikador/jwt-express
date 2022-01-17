const nodemailer = require('nodemailer');
const mailHtml = require('../static/mail')

class MailService {
   constructor() {
      this.transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: process.env.SMTP_PORT,
         secure: false,
         auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
         },
      });
   }

   async sendMailWithCode(to, link) {
      await this.transporter.sendMail(
         {
            from: process.env.SMTP_USER,
            to: to,
            subject: "Активировать аккаунт",
            html: mailHtml(link, 'Вы отправили запрос на вход в личный кабинет <br> Для подтверждения введите этот код'),
         }
      );
   }
}

module.exports = new MailService()
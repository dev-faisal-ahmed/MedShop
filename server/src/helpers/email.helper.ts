import NodeMailer from 'nodemailer';
import { GMAIL_ID, GMAIL_PASS } from '../config';

export const transporter = NodeMailer.createTransport({
  service: 'gmail',
  auth: { user: GMAIL_ID, pass: GMAIL_PASS },
});

export const mailOption = (email: string) => {
  return { from: GMAIL_ID, to: email };
};

export const confirmEmailTemplate = (name: string, code: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      *,
      html,
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <main
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100vh;
        margin: 0 auto;
      "
    >
      <section
        style="
          padding: 20px;
          border: 2px solid #f1f1f1;
          min-width: 450px;
          max-width: 500px;
          border-radius: 10px;
        "
      >
        <h1
          style="
            font-size: 1.5rem;
            text-align: center;
            color: #1f6e65;
            font-weight: bolder;
            border-bottom: 2px solid #f1f1f1;
            padding-bottom: 10px;
          "
        >
          MedShop
        </h1>
        <p style="margin-top: 10px">Hey ${name},</p>
        We need to verify your email address so you can use <b>MedShop</b>
        <br />
        Do not share this code with any one.
        <h4
          style="
            margin-top: 10px;
            font-size: 1.3rem;
            color: #1f6e65;
            border: 1px solid #1f6e65;
            width: fit-content;
            margin: 20px auto;
            padding: 5px 10px;
            border-radius: 5px;
          "
        >
          ${code}
        </h4>
      </section>
    </main>
  </body>
</html>
`;
};

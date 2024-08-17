import { confirmEmailTemplate, mailOption, transporter } from './email.helper';
import { generateRandomCharacter } from './general.helper';
import { generateVerificationToken } from './token.helper';
import { AppError } from '../utils';

export const sendVerificationCode = async (email: string, name: string) => {
  // generating verification code
  const code = generateRandomCharacter(6);

  // generating verification token
  const verificationToken = generateVerificationToken(email, code);

  // sending verification email with verification code
  const emailResult = await transporter.sendMail({
    ...mailOption(email),
    subject: 'Verify Your Account!!',
    text: `
    Hey ${name},
    We need to verify your email address so you can use MedShop.
    Do not share this code with anyone. 
    Code : ${code}
    `,
    html: confirmEmailTemplate(name, code),
  });

  if (!emailResult.accepted) throw new AppError('Failed to send email', 400);

  return verificationToken;
};

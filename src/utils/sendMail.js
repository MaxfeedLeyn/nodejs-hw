import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.STMP_HOST,
  port: process.env.STMP_PORT,
  auth: {
    user: process.env.STMP_USER,
    pass: process.env.STMP_PASSWORD,
  },
});

export const sendMail = async (options) => {
  return await transporter.sendMail(options);
};

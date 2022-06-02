// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts, addPost } from "../../repository/post";
import client from "../../prisma/prisma";

import nodemailer from "nodemailer";
import isEmail from "validator/lib/isEmail";

type Post = {
  sender: string;
  text: string;
  email: string;
  willParticipate: boolean;
  willInfo: boolean;
};

async function sendNotification(content: string) {
  console.log("Sending email about a new post..");
  console.log("Nodemailer", nodemailer);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAIL_SENDER, // sender address
    to: process.env.EMAIL_RECEIVER, // list of receivers
    subject: "Abi97 - neuer Post auf der Webseite", // Subject line
    text: content, // plain text body
  });

  console.log("Message sent: %s", info.messageId);

  return true;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    // Get all posts
    if (req.method === "GET") {
      const posts = await getAllPosts(client);

      return res.status(200).json(posts);
    }

    // Add a new post

    if (req.method === "POST") {
      const { sender, text, email, willInfo, willParticipate } = req.body;
      let sanitizedeMail = email;
      if (!isEmail(email)) {
        sanitizedeMail = "Invalid eMail";
      }
      console.log("Adding post...", sender, text);
      const post = await addPost(
        client,
        sender,
        text,
        sanitizedeMail,
        willParticipate,
        willInfo
      );
      const eMailText = `Autor ${sender} \nInhalt ${text} \neMail ${sanitizedeMail} \n `;
      sendNotification(eMailText);
      return res.status(200).json(post);
    }

    // Method not founds
    return res.status(404).end();
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
}

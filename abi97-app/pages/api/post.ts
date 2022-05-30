// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts, addPost } from "../../repository/post";
import client from "../../prisma/prisma";

type Post = {
  sender: string;
  text: string;
};

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
      const { sender, text } = req.body;
      console.log("Adding post...", sender, text);
      const post = await addPost(client, sender, text);
      return res.status(200).json(post);
    }

    // Method not founds
    return res.status(404).end();
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
}

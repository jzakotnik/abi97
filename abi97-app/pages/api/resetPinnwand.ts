// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import client from "../../prisma/prisma";

import { removeAllPosts } from "../../repository/post";

export default async function handler(req: NextApiRequest, res: any) {
  try {
    // Delete all participants
    if (req.method === "DELETE") {
      const deletedParticipants = await removeAllPosts(client);

      return res.status(200).json({ result: "Deleted all records" });
    }

    // Method not founds
    return res.status(404).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: JSON.stringify(error) });
  }
}

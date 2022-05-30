import { Post, Prisma, PrismaClient } from "@prisma/client";

export async function addPost(
  c: PrismaClient,
  sender: string = "Anonymous",
  text: string = "Noch kein Kommentar",
  email: string = "no-reply@derjure.de",
  willParticipate: boolean = false,
  willInfo: boolean = false
) {
  return await c.post.create({
    data: { sender, text, email, willParticipate, willInfo },
  });
}

export async function removePost(c: PrismaClient, id: string) {
  return await c.post.delete({
    where: {
      id,
    },
  });
}

export async function getAllPosts(c: PrismaClient) {
  const posts = await c.post.findMany();
  return posts.map((p) => ({
    ...p,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  }));
  return;
}

export async function removeAllPosts(c: PrismaClient) {
  return await c.post.deleteMany({});
}

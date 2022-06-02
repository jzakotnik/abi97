import * as React from "react";
import { useRouter } from "next/router";
import AppFooter from "../modules/views/AppFooter";
import ProductHero from "../modules/views/ProductHero";
import Pinnwand from "../modules/views/Pinnwand";
import Ranking from "../modules/views/Ranking";
import Zitate from "../modules/views/Zitate";
import GroupPhoto from "../modules/views/GroupPhoto";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Divider from "@mui/material/Divider";

import Head from "next/head";

import { getAllPosts } from "../repository/post";
import quotes from "./api/quotes.json";
import { Post, Prisma, PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear"; // import plugin

const quoteOfTheDay = () => {
  dayjs.extend(dayOfYear);
  const now = dayjs();
  const quoteLength = quotes.length;
  const daynumber = dayjs().dayOfYear();
  const index = daynumber % quoteLength;
  console.log("Shuffling Quote", quoteLength, daynumber, index);

  return quotes[index];
};

function Index({ posts }: any) {
  console.log(posts, quotes);
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const qotd: string = quoteOfTheDay();

  return (
    <React.Fragment>
      <Head>
        <title>Abi 97 Jubiläum</title>
        <meta name="keywords" content="abi 97" />
        <meta name="author" content="Jure Zakotnik" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AppAppBar />
      <ProductHero refresh={refreshData} />
      <Pinnwand posts={posts} />
      <Divider sx={{ marginTop: "20px" }} />
      <Zitate quote={qotd} />
      <Divider sx={{ marginTop: "20px" }} />
      <Ranking />
      <Divider sx={{ marginTop: "20px" }} />
      <GroupPhoto />

      <AppFooter />
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getAllPosts(new PrismaClient());

  return { props: { posts } };
};

export default withRoot(Index);

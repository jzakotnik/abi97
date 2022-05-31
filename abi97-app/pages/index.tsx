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

import { getAllPosts } from "../repository/post";
import quotes from "./api/quotes.json";
import { Post, Prisma, PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
import * as dayjs from "dayjs";

const quoteOfTheDay = () => {
  var dayOfYear = require("dayjs/plugin/dayOfYear");
  dayjs.extend(dayOfYear);
  let now = dayjs();
  const quoteLength = quotes.length;
  const dayofYear = now.dayOfYear();
  const index: int = dayofYear % quoteLength;

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

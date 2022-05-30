import * as React from "react";
import { useRouter } from "next/router";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import Pinnwand from "./modules/views/Pinnwand";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";

import { getAllPosts } from "../repository/post";
import { Post, Prisma, PrismaClient } from "@prisma/client";

function Index({ posts }: any) {
  console.log(posts);
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero refresh={refreshData} />
      <Pinnwand posts={posts} />

      <AppFooter />
    </React.Fragment>
  );
}

export const getServerSideProps = async ({ req }) => {
  const posts = await getAllPosts(new PrismaClient());
  return { props: { posts } };
};

export default withRoot(Index);

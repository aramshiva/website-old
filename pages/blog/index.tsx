import Container from "../../components/blog/container";
import MoreStories from "../../components/blog/more-stories";
import HeroPost from "../../components/blog/hero-post";
import Layout from "../../components/blog/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../blog/interfaces/post";
import Alert from "../../components/alert";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{`Aram's Blog`}</title>
        </Head>
        <Container>
          <div className="prose prose-a:no-underline">
            <h1>Blog</h1>
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
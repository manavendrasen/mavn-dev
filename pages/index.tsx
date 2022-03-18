import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

import Footer from "../components/Footer/Footer";
import { getPostTitle } from "../api/postRequests";

interface IHomeProps {
  posts: Post[];
}

type Post = {
  id: string;
  title: string;
  slug: string;
  custom_excerpt: string;
  feature_image: string;
};

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>Hello to my blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href='/project/[slug]' as={`/project/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await getPostTitle();
  return {
    props: { posts },
  };
};

export default Home;

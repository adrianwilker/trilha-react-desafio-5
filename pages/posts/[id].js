import { getGlobalData } from '../../utils/global-data';
import { getPostBySlug } from '../../utils/mdx-utils';
import { marked } from 'marked'

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({ post, globalData }) {
  const formatDate = (date) => {
    const dateFormated = new Date(date);
    let day =
      dateFormated.getDate() > 10
        ? `${dateFormated.getDate()}`
        : `0${dateFormated.getDate()}`;
    let month =
      dateFormated.getMonth() > 10
        ? `${dateFormated.getMonth() + 1}`
        : `0${dateFormated.getMonth() + 1}`;
    let year = dateFormated.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const toMarkup = (output) => ( { __html: marked.parse(output) })

  return (
    <Layout>
      <SEO
        title={`${post.title} - ${globalData.name}`}
        description={post.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <p className="text-center text-base truncate mb-1">
            Por: <a href={post?.author_profile}>{post?.author}</a> em&nbsp;
            {formatDate(post?.created_at)}
          </p>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {post?.title}
          </h1>
          {post?.description && (
            <p className="text-xl mb-4">{post?.description}</p>
          )}
        </header>
        <main>
          <article style={{whiteSpace: 'pre-line', textAlign: 'justify'}}>
          <div
          dangerouslySetInnerHTML={toMarkup(post.body)}
        ></div>
          </article>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const post = await getPostBySlug(params.id);

  return {
    props: {
      globalData,
      post,
    },
  };
};

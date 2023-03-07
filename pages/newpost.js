import { getGlobalData } from '../utils/global-data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { postUserPost } from '../utils/mdx-utils';

export default function NewPost({ globalData }) {
  const { data: session } = useSession();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postBody, setPostBody] = useState('');
  const [author, setAuthor] = useState('');

  const sendPost = (e) => {
    e.preventDefault();
    setAuthor(session?.user?.name);
    const post = postUserPost({
      title: title,
      description: description,
      author: author,
      body: postBody,
    });
    setTitle('');
    setDescription('');
    setPostBody('');
  };

  return (
    <Layout>
      <SEO title={`Novo post - ${globalData.name}`} />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white mb-12 text-center">
            Criar nova postagem
          </h1>
        </header>
        <main>
          <article className="prose dark:prose-dark">
            {session ? (
              <form onSubmit={sendPost}>
                <p>
                  Postar como{' '}
                  <span className="font-bold">{session?.user?.name}</span>
                  &nbsp;ou&nbsp;
                  <a href="#" onClick={() => signOut()} className="italic">
                    Sair
                  </a>
                </p>
                <input
                  type="text"
                  className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:italic mb-2"
                  placeholder="Título"
                  ariaLabel="Título da postagem:"
                  minLength="5"
                  maxLength="150"
                  required
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <input
                  type="text"
                  className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:italic mb-2"
                  placeholder="Descrição"
                  ariaLabel="Descrição da postagem:"
                  maxLength="280"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
                <textarea
                  className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:italic"
                  rows="10"
                  placeholder="Corpo da postagem..."
                  ariaLabel="Corpo da postagem:"
                  minLength="10"
                  required
                  value={postBody}
                  onChange={(event) => setPostBody(event.target.value)}
                ></textarea>
                <div className="text-right">
                  <button className="text-center border-1 rounded py-2 px-4 bg-cyan-600 text-white hover:opacity-70">
                    Publicar
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h2 className="text-center font-medium">
                  Faça login para continuar
                </h2>
                <div className="text-center">
                  <button
                    className="bg-primary py-2 px-5 rounded-2xl text-white font-bold hover:opacity-90"
                    onClick={() => signIn()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github inline mr-2"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#FFF"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    Entrar com GitHub
                  </button>
                </div>
              </>
            )}
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

  return {
    props: {
      globalData,
    },
  };
};

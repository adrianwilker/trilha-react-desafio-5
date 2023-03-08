import Link from 'next/link';
import Layout, { GradientBackground } from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <main className="w-full">
        <h1 className="text-center mt-14 mb-10">Página não encontrada.</h1>
        <nav className="text-center text-3xl mb-10 transition hover:font-semibold">
          <Link as={'/'} href={'/'}>
            Início
          </Link>
        </nav>
      </main>
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

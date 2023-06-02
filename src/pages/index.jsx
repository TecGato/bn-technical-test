import HomePage from '@/components/HomePage';
import Layout from '@/components/Layout/index';

export default function Home(feed) {
  return (
    <Layout>
      <HomePage feed={feed} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  );
  const { feed } = await res.json();
  return {
    props: {
      feed,
    },
  };
}

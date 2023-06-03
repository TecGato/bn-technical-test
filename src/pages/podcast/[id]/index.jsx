import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import useGlobalStore from '@/store/globalStore';
import useStore from '@/store/useStore';
import LeftBar from '@/components/LeftBar';
import PodcastDetail from '@/components/PodcastDetail';

export default function podcastID() {
  const podcast = useStore(useGlobalStore, (state) => state.podcast);
  const setPodcast = useGlobalStore((state) => state.setPodcast);
  const resetPodcast = useGlobalStore((state) => state.resetPodcast);
  const loading = useStore(useGlobalStore, (state) => state.loading);
  const router = useRouter();

  useEffect(() => {
    setPodcast(router.query.id);
    return () => {
      resetPodcast();
    };
  }, []);
  console.log(podcast);

  return (
    <Layout>
      {!podcast ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <LeftBar
            artist={podcast[0]?.artistName}
            name={podcast[0]?.collectionName}
            description={podcast[0]?.description}
            image={podcast[0]?.artworkUrl100}
          />
          <PodcastDetail
            episodes={podcast[0]?.trackCount}
            episodesList={podcast?.map((podcast) => podcast)}
          />
        </div>
      )}
    </Layout>
  );
}

import useGlobalStore from '@/store/globalStore';
import useStore from '@/store/useStore';
import LeftBar from '@/components/LeftBar';
import Layout from '@/components/Layout';
import EpisodeDetail from '@/components/EpisodeDetail/Index';
import { useRouter } from 'next/router';

export default function EpisodeId() {
  const router = useRouter();
  const podcast = useStore(useGlobalStore, (state) => state.podcast);
  const episode = podcast?.filter(
    (episode) => episode.trackId == router.query.episodeid
  );

  return (
    <Layout>
      <div>
        {!episode ? null : (
          <>
            <LeftBar
              artist={podcast[0]?.artistName}
              name={podcast[0]?.collectionName}
              description={podcast[0]?.description}
              image={podcast[0]?.artworkUrl100}
            />
            <EpisodeDetail
              name={episode[0].trackName}
              description={episode[0].description}
              view={episode[0].previewUrl}
            />
          </>
        )}
      </div>
    </Layout>
  );
}

import useGlobalStore from '@/store/globalStore';
import useStore from '@/store/useStore';
import LeftBar from '@/components/LeftBar';
import Layout from '@/components/Layout';
import EpisodeDetail from '@/components/EpisodeDetail/Index';
import { useRouter } from 'next/router';

export default function EpisodeId() {
  const router = useRouter();
  const podcast = useStore(useGlobalStore, (state) => state.podcast);
  const description = useStore(useGlobalStore, (state) => state.description);
  const episode = podcast?.filter(
    (episode) => episode.trackId == router.query.episodeid
  );

  return (
    <Layout>
      {!episode ? null : (
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <LeftBar
              artist={podcast[0]?.artistName}
              name={podcast[0]?.collectionName}
              description={description}
              image={podcast[0]?.artworkUrl600}
              id={podcast[0]?.collectionId}
            />
          </div>
          <div className="col-span-3">
            <EpisodeDetail
              name={episode[0].trackName}
              description={episode[0].description}
              view={episode[0].previewUrl}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}

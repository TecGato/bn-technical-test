import useGlobalStore from '@/store/globalStore';
import useStore from '@/store/useStore';
import Link from 'next/link';

export default function PodcastDetail({ episodes, episodesList }) {
  const loading = useStore(useGlobalStore, (state) => state.loading);
  episodesList.shift();
  return (
    <>
      {!loading ? (
        <>
          <div className="m-2 p-2">
            <div className="border">
              <h3 className="text-left">Episodes: {episodes}</h3>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-evenly">
                <h3 className="text-left">Title</h3>
                <h3>Date</h3>
                <h3>Duration (Min)</h3>
              </div>
              {episodesList?.map((episode) => (
                <Link
                  href={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}
                  key={episode.trackId}
                >
                  <div className="border flex justify-evenly text-left p-2">
                    <h3>{episode.trackName}</h3>
                    <h4>{episode.releaseDate.slice(0, 10)}</h4>
                    <h4>{Math.round(episode.trackTimeMillis / 1000 / 60)}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

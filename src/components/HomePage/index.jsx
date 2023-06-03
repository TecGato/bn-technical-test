import Image from 'next/image';
import Link from 'next/link';
import useGlobalStore from '../../store/globalStore';
import useStore from '@/store/useStore';
import { useEffect } from 'react';
import SearchBar from '../SearchBar/Index';

export default function HomePage() {
  const podcast = useStore(useGlobalStore, (state) => state.podcasts);
  const setPodcast = useGlobalStore((state) => state.setPodcasts);
  const resetPodcast = useGlobalStore((state) => state.resetPodcast);
  const resetFilter = useGlobalStore((state) => state.resetFilter);

  useEffect(() => {
    setPodcast();
    resetPodcast();
    return () => resetFilter();
  }, []);

  return (
    <div className="grid ">
      <div className="m-3 text-lg justify-self-end border-2 border-l-gray-400 rounded-lg ">
        <SearchBar />
      </div>
      <div className="grid grid-cols-4 justify-items-center ">
        {podcast?.map((podcast) => (
          <Link
            key={podcast.id.attributes['im:id']}
            href={`/podcast/${podcast.id.attributes['im:id']}`}
          >
            <div className="mb-6 bg-slate-300 border-slate-400 rounded-l flex flex-col items-center">
              <Image
                className="rounded-full"
                src={podcast['im:image'][1].label}
                alt={podcast['im:name'].label}
                width={podcast['im:image'][1].attributes.height}
                height={podcast['im:image'][1].attributes.height}
              />
              <h3>{podcast['im:name'].label}</h3>
              <p>{podcast['im:artist'].label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

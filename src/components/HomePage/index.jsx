import Image from 'next/image';
import Link from 'next/link';

export default function HomePage({ feed }) {
  return (
    <div className="grid grid-cols-4 justify-items-center ">
      {feed.feed.entry.map((podcast) => (
        <Link
          key={podcast.id.attributes['im:id']}
          href={`/podcast/${podcast.id.attributes['im:id']}`}
        >
          <div className="m-5 bg-slate-300 border-2 border-slate-400 rounded-l p-5 flex flex-col items-center">
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
  );
}

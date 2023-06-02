import Image from 'next/image';

export default function Home(feed) {
  return (
    <>
      <h1 className="text-2xl text-left text">Podcaster</h1>
      <hr />
      <div className="grid grid-cols-4 justify-items-center ">
        {feed.feed.entry.map((podcast) => (
          <div
            className="m-5 bg-slate-300 border-2 border-slate-400 rounded-l p-5 flex flex-col items-center"
            key={podcast.id.attributes['im:id']}
          >
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
        ))}
      </div>
    </>
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

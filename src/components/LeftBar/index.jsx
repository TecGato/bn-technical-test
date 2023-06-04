import Link from 'next/link';
import Image from 'next/image';
import useStore from '@/store/useStore';
import useGlobalStore from '@/store/globalStore';

export default function LeftBar({ artist, name, description, image, id }) {
  const loading = useStore(useGlobalStore, (state) => state.loading);
  return (
    <>
      {!loading ? (
        <div className="grid shadow-lg shadow-slate-400 m-3 justify-items-center pt-2">
          {id ? (
            <Link href={`/podcast/${id}`}>
              <Image src={image} alt={name} width={150} height={150} />
              <h3>{name}</h3>
              <p>{artist}</p>
            </Link>
          ) : (
            <>
              <Image src={image} alt={name} width={150} height={150} />
              <h3>{name}</h3>
              <p>{artist}</p>
            </>
          )}
          <hr />
          <div className="justify-self-start m-2">
            <h3>Description:</h3>
            <p>{description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

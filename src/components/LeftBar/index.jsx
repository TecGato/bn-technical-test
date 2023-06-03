import Image from 'next/image';
import useStore from '@/store/useStore';
import useGlobalStore from '@/store/globalStore';

export default function LeftBar({ artist, name, description, image }) {
  const loading = useStore(useGlobalStore, (state) => state.loading);
  return (
    <>
      {!loading ? (
        <div className="flex flex-col border border-cyan-300 m-2 p-2">
          <Image src={image} alt={name} width={100} height={100} />
          <h3>{name}</h3>
          <p>{artist}</p>
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
      ) : null}
    </>
  );
}

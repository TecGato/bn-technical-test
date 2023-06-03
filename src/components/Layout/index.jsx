import useGlobalStore from '@/store/globalStore';
import useStore from '@/store/useStore';
import Link from 'next/link';

export default function Layout({ children }) {
  const loading = useStore(useGlobalStore, (state) => state.loading);
  return (
    <>
      <div className="flex justify-between items-center">
        <Link href={`/`}>
          <h1 className="text-2xl text-left text">Podcaster</h1>
        </Link>
        {loading && <h1 className="">Loading...</h1>}
      </div>
      <hr />
      <div>{children}</div>
    </>
  );
}

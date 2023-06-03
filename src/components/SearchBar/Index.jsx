import useGlobalStore from '@/store/globalStore';

export default function SearchBar() {
  const setSearchPodcast = useGlobalStore((state) => state.setSearchPodcast);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchPodcast(value);
  };

  return (
    <div>
      <input placeholder="Filter Podcasts.." onChange={handleSearch} />
    </div>
  );
}

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useGlobalStore = create(
  persist(
    (set, get) => ({
      podcasts: [],
      setPodcasts: async () => {
        if (get().podcasts.length > 0) return;
        const response = await fetch(
          'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
        );
        const { feed } = await response.json();
        console.log('hice fetch');
        set({ podcasts: feed.entry });
      },
    }),
    {
      name: 'global-storage',
    }
  )
);

export default useGlobalStore;

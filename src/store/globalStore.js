import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useGlobalStore = create(
  persist(
    (set, get) => ({
      podcasts: [],
      podcast: [],
      loading: false,

      setPodcasts: async () => {
        if (get().podcasts.length > 0) return;
        get().setLoading(true);
        try {
          const response = await fetch(
            'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
          );
          const { feed } = await response.json();
          set({ podcasts: feed.entry });
          get().setLoading(false);
        } catch (error) {
          console.error(error);
        }
      },

      setPodcast: async (id) => {
        get().setLoading(true);
        try {
          const response = await fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(
              `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
            )}`
          );
          const data = await response.json();
          const dataParse = JSON.parse(data.contents);
          set({ podcast: dataParse.results });
          get().setLoading(false);
        } catch (error) {
          console.error(error);
        }
      },

      resetPodcast: () => set({ podcast: [] }),

      setLoading: (value) => set({ loading: value }),
    }),
    {
      name: 'global-storage',
    }
  )
);

export default useGlobalStore;

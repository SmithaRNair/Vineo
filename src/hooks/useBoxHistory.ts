// src/hooks/useBoxHistory.ts
import { useGetBoxHistoryQuery } from '@app/redux/apiSlice';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Box } from '@/types/BoxTypes';

interface BoxHistoryResult {
  items: Box[];
  isLoading: boolean;
  isAuthenticated: boolean;
  error: any;
  hasMore: boolean;
  fetchNextPage: () => void;
}

export const useBoxHistory = (limit: number): BoxHistoryResult => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Box[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const { data, error, isLoading, refetch } = useGetBoxHistoryQuery(
    { page, limit },
    { skip: !isAuthenticated }
  );

  // Check authentication on mount
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/sign-in');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Update items when new data is fetched
  useEffect(() => {
    if (data && data.data.getBoxHistory) {
      const newBoxes = data.data.getBoxHistory.boxes || [];
      const totalBoxes = data.data.getBoxHistory.box_count || 0;

      setItems((prevItems) => [...prevItems, ...newBoxes]);
      setHasMore(items.length + newBoxes.length < totalBoxes);
    }
  }, [data]);

  const fetchNextPage = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
      refetch();
    }
  };

  return { items, isLoading, isAuthenticated, error, hasMore, fetchNextPage };
};

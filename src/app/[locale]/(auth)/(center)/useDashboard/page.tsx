'use client';
import { useGetBoxHistoryQuery } from '@app/redux/apiSlice';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import BoxItem from '@/components/BoxItem';
import Sidebar from '@/components/Sidebar';
import SmoothScrolling from '@/components/SmoothScrolling';
import type { Box } from '@/types/BoxTypes';

const UserDashboard = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Box[]>([]); // Initialize to empty array to prevent undefined issues
  const limit = 4;
  
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const observer = useRef<IntersectionObserver | null>(null);
  const router = useRouter();

  // Fetch the box history data
  const { data, error, isLoading, refetch } = useGetBoxHistoryQuery(
    { page, limit },
    { skip: !isAuthenticated },
  );

  // Check accessToken on component mount
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/sign-in');
    } else {
      setIsAuthenticated(true);
    }
    
  }, [router]);
  useEffect(() => {
    if (data) {
      console.log("Fetched box history data:", data);
    }
    if (error) {
      console.error("Error fetching box history:", error);
    }
  }, [data, error]);
  

  // Populate boxes when data is received
  useEffect(() => {
    if (data) {
      console.log("Fetched box history data:", data);
      if (data?.data?.getBoxHistory?.boxes) {
        const newBoxes = data.data.getBoxHistory.boxes;
        const totalBoxes = data?.data?.getBoxHistory?.box_count || 0;
        console.log("box count",totalBoxes);

        if (newBoxes.length > 0) {
          setItems((prevItems) => {
            const updatedBoxes = [...prevItems, ...newBoxes];
            setHasMore(updatedBoxes.length < totalBoxes);
            return updatedBoxes;
          });
        } else {
          setHasMore(false);
          if (observer.current) {
            observer.current.disconnect();
          }
        }

        // Reset `isFetchingMore` after fetching data
        setIsFetchingMore(false);
      }
    }
    if (error) {
      console.error('Error fetching box history:', error);
      setIsFetchingMore(false);
    }
  }, [data, error]);

  // Trigger the query manually when the page state changes
  useEffect(() => {
    if (page > 1 && !isLoading && isAuthenticated) {
      refetch(); // Refetch with the updated page value
    }
  }, [page, isLoading, isAuthenticated, refetch]);

  // Infinite scroll using IntersectionObserver
  const handleInfiniteScroll = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingMore || !hasMore) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          setIsFetchingMore(true);
          setPage(prevPage => prevPage + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isFetchingMore, hasMore],
  );

  if (!isAuthenticated) {
    return <div>Checking authentication...</div>;
  }

  if (isLoading && page === 1) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error.message}
      </div>
    );
  }

  return (
    <SmoothScrolling>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="ml-16 flex-1 p-4 md:ml-64 md:p-8">
          {items?.length > 0 ? ( // Add optional chaining to ensure items is not undefined
            items.map((box, index) => (
              <BoxItem key={index} box={box} ref={index === items.length - 1 ? handleInfiniteScroll : null} />
            ))
          ) : (
            <div>No boxes available.</div>
          )}

          {isFetchingMore && (
            <div className="mt-6 flex justify-center md:mt-8">
              <div className="loader">Cargando más...</div>
            </div>
          )}
        </main>
      </div>
    </SmoothScrolling>
  );
};

export default UserDashboard;

// src/components/InfiniteScrollObserver.tsx
import { useEffect, useRef } from 'react';

interface InfiniteScrollObserverProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
}

const InfiniteScrollObserver: React.FC<InfiniteScrollObserverProps> = ({ onLoadMore, hasMore, isLoading }) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    };

    observer.current = new IntersectionObserver(handleObserver);
    const currentObserver = observer.current;

    const targetNode = document.querySelector('#infinite-scroll-trigger');
    if (targetNode) {
      currentObserver.observe(targetNode);
    }

    return () => {
      if (targetNode) {
        currentObserver.unobserve(targetNode);
      }
    };
  }, [isLoading, hasMore, onLoadMore]);

  return <div id="infinite-scroll-trigger" />;
};

export default InfiniteScrollObserver;

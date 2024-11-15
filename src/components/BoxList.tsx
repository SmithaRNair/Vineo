// src/components/BoxList.tsx
import React from 'react';
import BoxItem from '@/components/BoxItem';
import type { Box } from '@/types/BoxTypes';

interface BoxListProps {
  items: Box[];
}

const BoxList: React.FC<BoxListProps> = ({ items }) => (
  <>
    {items.length > 0 ? (
      items.map((box, index) => <BoxItem key={index} box={box} />)
    ) : (
      <div>No boxes available.</div>
    )}
  </>
);

export default BoxList;

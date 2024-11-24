import React from 'react';
import Button from './Button';

type PaginationProps = {
  page: number;
  pageSize: number;
  boxes: any[];
  handlePageChange: (newPage: number) => void;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PaginationProps> = ({ page, pageSize, boxes, handlePageChange, setPageSize }) => (
  <div className="flex flex-col items-center justify-between p-4 sm:flex-row">
    <span className="text-gray-600">{boxes.length} Clients</span>
    <div className="mt-2 flex items-center space-x-1 sm:mt-0">
      <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        {'<'}
      </Button>
      <span>{page}</span>
      <Button onClick={() => handlePageChange(page + 1)} disabled={boxes.length < pageSize}>
        {'>'}
      </Button>
    </div>
    <select
      value={pageSize}
      onChange={(e) => setPageSize(Number(e.target.value))}
      className="mt-2 rounded border border-gray-300 p-1 sm:mt-0"
    >
      <option value={10}>10 / page</option>
      <option value={20}>20 / page</option>
    </select>
  </div>
);

export default Pagination;

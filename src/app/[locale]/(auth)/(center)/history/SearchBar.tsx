import React from 'react';
import Input from './Input';

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => (
  <div className="my-4">
    <Input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
      className="sm:w-52"
    />
  </div>
);

export default SearchBar;

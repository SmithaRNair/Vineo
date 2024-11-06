export type Box = {
  box_id: string;
  date: string;
  count: number;
  is_pending: boolean;
  type: string;
  wines: Wine[];
};

export type Wine = {
  wine_id: string;
  wine_name: string;
  image: string;
  pair_with: string;
  philosophy: string;
  about: string;
  rating: number;
  is_reviewed: boolean;
  score: number;
  area: string;
  store: string;
  likeness: string;
};

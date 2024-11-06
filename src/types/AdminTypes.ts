// src/types/[your-existing-file].ts

export interface User {
  _id: string;
  name: string;
  phone: string;
  email: string;
  house?: string;
  city?: string;
  country?: string;
  zipcode?: string;
}

export interface Wine {
  _id: string;
  name: string;
  box_count: number;
}

export interface Box {
  _id: string;
  user: User;
  created_at: string;
  delivery_date: string;
  status: number;
  box_type: number;
  box_wines: Wine[];
}

export interface GetBoxHistoryAdminResponse {
  total: number;
  boxes: Box[];
}

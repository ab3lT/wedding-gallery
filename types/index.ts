export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  /** Masonry span hint — 'tall' spans 2 rows, 'wide' spans 2 cols */
  span?: 'tall' | 'wide' | 'square';
}

export interface BridePhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  description: string;
}

export interface Comment {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export interface CreateCommentPayload {
  name: string;
  message: string;
}

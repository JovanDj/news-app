export interface Headline {
  articles: Article[];
  status: string;
  totalResults: number;
}

interface Article {
  author?: string;
  description?: string;
  publishedAt?: string;
  source?: Source;
  title?: string;
  url?: string;
  urlToImage?: string;
}

interface Source {
  id?: string;
  name?: string;
}

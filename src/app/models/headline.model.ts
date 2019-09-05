export interface Headline {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface Article {
  author: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

interface Source {
  id?: string;
  name?: string;
}

export interface SearchCriteria {
  topic: string;
  category: string[];
  country: string[];
}

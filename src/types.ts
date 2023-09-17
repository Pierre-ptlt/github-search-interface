export type Favorite = {
  id: number;
  name: string;
  description: string;
  visibility: string;
  stargazers_count: number;
  language: string;
  html_url: string;
  owner: {
    login: string;
  };
  rating: number;
};

export type Repo = {
  id: number;
  name: string;
  description: string;
  visibility: string;
  stargazers_count: number;
  language: string;
  html_url: string;
  owner: {
    login: string;
  };
};

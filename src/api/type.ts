export interface TypeHome {
  description: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface TypeWho {
  content: string;
  images: { image: string }[];
}

export interface TypeWhat {
  title: string;
  description: string;
  image: string;
}

export interface TypeClients {
  logo: string;
}

export interface TypeWork {
  title: string;
  content: string;
  url: string;
}

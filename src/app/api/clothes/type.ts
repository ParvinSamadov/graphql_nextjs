export type Query = {
  collections: Collection;
  collection: (id: string) => Collection;
  getCollectionsByTitle: (title: string) => Collection;
};

export type Collection = {
  id: string;
  title: string;
  items: Item;
};
export type Item = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  collection: Collection;
};

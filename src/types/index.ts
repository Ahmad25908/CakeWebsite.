// // /types/index.ts

// export interface Cake {
//     name: string;
//     description: string;
//     price: number;
//     tags?: string[];
//     mainImage: string;
//     gallery?: string[];
//     category?: {
//       title: string;
//       slug: {
//         current: string;
//       };
//     };
//     details?: string;
//     reviews?: string;
//   }
  

// /types/index.ts

export interface Cake {
    _id: string;
    name: string;
    slug: { current: string };
    price: number;
    description: string;
    tags?: string[];
    mainImage: string;
    gallery?: string[];
    category: {
      title: string;
      slug: { current: string };
    };
    details?: string;
    reviews?: string;
  }
  
  export interface Category {
    _id: string;
    title: string;
    slug: { current: string };
  }
  
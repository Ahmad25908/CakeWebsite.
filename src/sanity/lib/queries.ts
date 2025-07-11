export const getAllCakesQuery = `
  *[_type == "cake"]{
    _id,
    name,
    slug,
    price,
    description,
    tags,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    category->{
      title,
      slug
    }
  } | order(_createdAt desc)
`;

export const getAllCategoriesQuery = `
  *[_type == "category"]{
    _id,
    title,
    slug
  } | order(title asc)
`;

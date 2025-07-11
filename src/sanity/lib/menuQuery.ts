// // sanity/menuQuery.ts
// import { client } from './client'

// export async function getCakes() {
//   const query = `*[_type == "cake"]{
//     _id,
//     title,
//     price,
//     description,
//     "image": image{asset->{url}},
//     category->{title}
//   }`
//   return await client.fetch(query)
// }


// sanity/menuQuery.ts
import { client } from './client'

export async function getCakes() {
  const query = `*[_type == "cake"]{
    _id,
    title,
    price,
    description,
    "image": image{asset->{url}},
    category->{title}
  }`
  return await client.fetch(query)
}

// 👇 Add this function for dynamic page
export async function getCake(slug: string) {
  const query = `*[_type == "cake" && slug.current == $slug][0]{
    _id,
    title,
    price,
    description,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    category->{title},
    slug
  }`
  return await client.fetch(query, { slug })
}

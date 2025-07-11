import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import dynamic from 'next/dynamic';
import { Cake } from '@/types';

const CakeUI = dynamic(() => import('@/components/CakeUI'), { ssr: false });

type Props = {
  params: { slug: string };
};

const getCakeDetailsQuery = groq`
  *[_type == "cake" && slug.current == $slug][0]{
    name,
    description,
    price,
    tags,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    category->{title, slug},
    details,
    reviews
  }
`;

export const revalidate = 60;

export default async function CakeDetailPage({ params }: Props) {
  const cake: Cake = await client.fetch(getCakeDetailsQuery, { slug: params.slug });

  if (!cake) {
    return <div className="text-center p-8 text-red-500">Cake not found</div>;
  }

  const allImages: string[] = Array.isArray(cake.gallery) && cake.gallery.length > 0
  ? [cake.mainImage, ...cake.gallery]
  : [cake.mainImage];

  return <CakeUI cake={cake} images={allImages} />;
}


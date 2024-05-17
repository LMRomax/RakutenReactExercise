import React from 'react'
import {
  DocumentPlusIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { fetchStats } from '@/app/lib/data';

const HomeLinks = [
  {
    name: 'Products',
    href: '/products',
    icon: ClipboardDocumentListIcon
  },
  {
    name: 'Create product',
    href: '/products/create',
    icon: DocumentPlusIcon
  }
];

export async function HomeCardsDataWrapper() {
  const {
    numberOfProducts,
    valueOfNewProducts,
    valueOfUsedProducts
  } = await fetchStats();

  return (
    <>
      <HomeCardData title="Total of registered products" value={numberOfProducts} />
      <HomeCardData title="Total amount of new products" value={valueOfNewProducts} />
      <HomeCardData title="Total amount of used products" value={valueOfUsedProducts} />
    </>
  );
}

export function HomeCardData({
  title,
  value
}: {
  title: string,
  value?: number | string
}) {
  return (
    <div className="rounded bg-[#f4f4f4] p-2 shadow-sm w-full md:w-4/12">
      <div className="flex px-2 py-3">
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p
        className="truncate rounded bg-white px-4 py-8 text-center text-2x font-bold text-xl"
      >
        {value ? value : 0}
      </p>
    </div>
  );
}

export function CardHomeLinks() {
  return (
    <>
      {HomeLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="group flex flex-col md:justify-center items-center rounded p-3 
            bg-[#f4f4f4] min-w-[150px] w-[100%] mb-2 md:h-[300px]"
          >
            <LinkIcon className="w-12 mb-4 transform transition duration-500 group-hover:scale-125" />

            {link.name}
          </Link>
        );
      })}
    </>
  );
}

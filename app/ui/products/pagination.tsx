'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import { current } from '@reduxjs/toolkit';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  return (
    <>
      <div className="w-full flex items-center justify-center inline-flex mt-8">
        <PaginateArrow
          direction='left'
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if(index === 0) position = 'first';
            if(index === allPages.length - 1) position = 'last';
            if(allPages.length === 1) position = 'single';
            if(page === '...') position = 'middle';

            return (
              <PaginationNumber 
                key={page}
                page={page}
                position={position}
                href={createPageURL(page)}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginateArrow
          direction='right'
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  );
}

function PaginationNumber({
  page,
  position,
  href,
  isActive
}: {
  page: number | string,
  position?: 'first' | 'last' | 'single' | 'middle',
  href: string,
  isActive?: boolean
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm border',
    {
      'z-10 bg-[#bf0000] border-[#bf0000] text-white': isActive,
      'text-[#bf0000] hover:bg-gray-100': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    },
  );

  return isActive && position === 'middle' ? (
    <div className={className}>
      {page}
    </div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginateArrow({
  href,
  direction,
  isDisabled
}: {
  href: string,
  direction: 'left' | 'right',
  isDisabled?: boolean
}) {
  const className = clsx(
    'flex h-10 items-center justify-center border p-3',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-gray-100': !isDisabled,
      'text-gray-600': direction === 'left' && !isDisabled,
      'border-r-0 rounded-l-md text-gray-400': direction === 'left',
      'text-[#bf0000]/50': direction === 'right' && isDisabled,
      'border-l-0 rounded-r-md text-[#bf0000]': direction === 'right'
    },
  );

  const text = direction === 'left' ? (
    `< Précédent`
  ) : (
    `Suivant >`
  );

  return isDisabled ? (
    <div className={className}>{text}</div>
  ) : (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
}
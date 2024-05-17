'use client';

import React from 'react'
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' }
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link 
                       key={link.name}
                       href={link.href} 
                       className={clsx(
                        'flex h-[48px] grow items-center justify-center text-xl font-medium hover:bg-black hover:text-white md:text-base md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                          'bg-transparent font-bold text-red-700 ': pathname === link.href,
                        },
                      )}
                    >
                       <p className="block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    )
}

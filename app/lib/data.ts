import { sql } from '@vercel/postgres';
import { ProductField } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { formatCurrency } from './utils';
import { NextResponse } from 'next/server';

export async function fetchStats() {
    noStore();

    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const productCountAllPromise = sql`SELECT count(id) FROM products;`;
        const productCountValueNewPromise = sql`SELECT SUM(newPrice) from products;`;
        const productCountValueUsedPromise = sql`SELECT SUM(usedPrice) from products;`;

        const data = await Promise.all([
            productCountAllPromise,
            productCountValueNewPromise,
            productCountValueUsedPromise,
        ]);

        const numberOfProducts = Number(data[0].rows[0].count ?? "0");
        const valueOfNewProducts = formatCurrency(data[1].rows[0].sum ?? 0);
        const valueOfUsedProducts = formatCurrency(data[2].rows[0].sum ?? 0);

        return {
            numberOfProducts,
            valueOfNewProducts,
            valueOfUsedProducts
        };
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.' + error);
    }
}

export async function fetchProductsTotalPages(itemPerPage: number, search: string) {
    noStore();

    try {
        const count = await sql`SELECT COUNT(*)
            FROM
                products
            WHERE
                (brand IS NOT NULL AND brand::text ILIKE ${`%${search}%`})
                AND (title IS NOT NULL AND title::text ILIKE ${`%${search}%`})
                AND href IS NOT NULL
                AND image IS NOT NULL
                AND newprice IS NOT NULL
                AND usedprice IS NOT NULL;
        `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / itemPerPage);

        return totalPages;
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of products.');
    }
}

export async function fetchFilteredProducts(
    currentPage: number,
    itemPerPage: number,
    search: string
) {
    noStore();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const offset = (currentPage - 1) * itemPerPage;

    try {
        const products = await sql<ProductField>`SELECT * 
        FROM 
            products 
        WHERE (
                (
                    brand::text ILIKE ${`%${search}%`} AND brand IS NOT NULL
                    OR title::text LIKE ${`%${search}%`} AND title IS NOT NULL
                )
                AND href IS NOT NULL
                AND image IS NOT NULL
                AND newprice IS NOT NULL
                AND usedprice IS NOT NULL
        )
        LIMIT ${itemPerPage} offset ${offset}`;

        return JSON.stringify(products.rows);
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.');
    }
}

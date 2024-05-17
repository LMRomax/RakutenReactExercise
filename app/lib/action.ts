'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    brand: z.string({
        required_error: 'Field required',
    }).max(32, { message: '32 characters maximum' }),
    title: z.string({
        required_error: 'Field required',
    }).max(255, { message: '255 characters maximum' }),
    href: z.string({
        required_error: 'Field required',
    }).max(255, { message: '255 characters maximum' }),
    image: z.string({
        required_error: 'Field required',
    }).max(255, { message: '255 characters maximum' }),
    newprice: z.coerce.number({
        required_error: 'Field required',
    }).gt(0, { message: 'Please enter an amount greater than $0.' }),
    usedprice: z.coerce.number({
        required_error: 'Field required',
    }).gt(0, { message: 'Please enter an amount greater than $0.' })
});

const CreateProduct = FormSchema.pick({
    brand: true,
    title: true,
    href: true,
    image: true,
    newprice: true,
    usedprice: true
});

export type State = {
    errors?: {
        brand?: string[];
        title?: string[];
        href?: string[];
        image?: string[];
        new_price?: number[];
        used_price?: number[];
    };
    message?: string | null;
};

export async function createProduct(prevState: State, formData: FormData) {
    const validatedFields = CreateProduct.safeParse({
        brand: formData.get('brand'),
        title: formData.get('title'),
        href: formData.get('href'),
        image: formData.get('image'),
        newprice: formData.get('newprice'),
        usedprice: formData.get('usedprice'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    const {
        brand,
        title,
        href,
        image,
        newprice,
        usedprice
    } = validatedFields.data;

    try {
        await sql`
            INSERT INTO products (
                brand, 
                title, 
                href, 
                image, 
                newprice, 
                usedprice
            )
            VALUES(
                ${brand},
                ${title},
                ${href},
                ${image},
                ${newprice},
                ${usedprice}
            )
        `;
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }

    revalidatePath('/products');
    redirect('/products');
}
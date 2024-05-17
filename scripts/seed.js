const { db } = require('@vercel/postgres');
const { products } = require('../app/lib/placeholder-data.js');

async function seedProducts(client) {
    try {
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY NOT NULL,
            brand varchar(32) NOT NULL,
            href varchar(255) NULL,
            title varchar(255) NOT NULL,
            newPrice decimal(8,2) NULL,
            usedPrice decimal(8,2) NULL,
            image varchar(255) NOT NULL
        );
      `;

        console.log(`Created "products" table`);

        const insertedProducts = await Promise.all(
            products.map(
                (product) => client.sql`
                    INSERT INTO products 
                    (brand, href, title, newPrice, usedPrice, image)
                    VALUES (${product.brand}, ${product.href}, ${product.title}, ${product.newPrice},
                        ${product.usedPrice}, ${product.image}
                    );
                `,
            ),
        );

        console.log(`Seeded ${insertedProducts.length} products`);

        return {
            createTable,
            products: insertedProducts,
        }
    }
    catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedProducts(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
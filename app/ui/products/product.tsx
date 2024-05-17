import Image from "next/image"
import { fetchFilteredProducts } from '@/app/lib/data';
import { formatCurrency } from "@/app/lib/utils";
import Link from "next/link";

export async function AllProducts({
    currentPage,
    itemPerPage,
    search
}: {
    currentPage: number,
    itemPerPage: number,
    search: string
}) {
    const jsonProducts = await fetchFilteredProducts(currentPage, itemPerPage, search);
    const products = JSON.parse(jsonProducts.toString()) as Array<any>;

    return (
        <div className="w-full grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
                return (
                    <Product
                        key={product.id}
                        image={product.image as string}
                        href={product.href as string}
                        brand={product.brand as string}
                        title={product.title as string}
                        newPrice={product.newprice as number}
                        usedPrice={product.usedprice as number}
                    />
                );
            })}
        </div>
    );
}

export function Product({
    href,
    brand,
    title,
    newPrice,
    usedPrice,
    image
}: {
    href: string,
    brand: string,
    title: string,
    newPrice: number,
    usedPrice: number,
    image: string
}) {
    const isActive = href === null 
    || image === null 
    || brand === null 
    || title === null
    || newPrice === null 
    || usedPrice === null ? false : true;

    return isActive === true ? (
        <Link data-testid="product"
        href={href}
        className="rounded-lg p-[16px] flex flex-row gap-[16px] items-center justify-center border border-slate-300 w-full">
            <div className="flex items-center justify-center w-[120px] h-[120px]">
                <Image
                    src={image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="Image od product name"
                />
            </div>

            <div>
                <div className="text-[#696969] text-[12px] font-semibold">
                    {brand}
                </div>

                <div className="text-[#333] text-[14px] mb-[8px] font-semibold">
                    {title}
                </div>

                <div className="text-[#BF0000] text-[14px] font-bold">
                    <span className="text-[20px]">{formatCurrency(newPrice)}</span> Neuf
                </div>

                <div className="text-[#333] text-[14px]">
                    Occasion dés <span className="text-[20px] font-bold">{formatCurrency(usedPrice)}</span>
                </div>
            </div>
        </Link>
    ) : <></>;
}

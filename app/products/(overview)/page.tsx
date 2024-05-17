import { fetchProductsTotalPages } from "@/app/lib/data";
import Pagination from "@/app/ui/products/pagination";
import { AllProducts } from "@/app/ui/products/product";
import Search from "@/app/ui/products/search";
import { ProductSkeletonWrapper } from "@/app/ui/products/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Products List',
};

export default async function Page({
  searchParams
}: {
  searchParams?: {
    search?: string
    page?: string
  }
}) {
  const itemPerPage = 12;
  const search = searchParams?.search || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchProductsTotalPages(itemPerPage, search);

  return (
    <>
      <h3 className="text-black text-3xl font-bold mt-3 leading-relaxed text-center mb-12 md:text-left md:mt-0 md:mb-12">
        Products
      </h3>

      <Search
        placeholder="Search a product"
      />

      <Suspense key={search || currentPage} fallback={<ProductSkeletonWrapper itemPerPage={itemPerPage} />}>
        <AllProducts currentPage={currentPage} itemPerPage={itemPerPage} search={search} />
      </Suspense>

      <Pagination
        totalPages={totalPages}
      />
    </>
  );
}


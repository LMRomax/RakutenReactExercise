import { AllProducts } from '@/app/ui/products/product';
import Pagination from '../ui/products/pagination';
import { fetchProductsTotalPages } from '@/app/lib/data';
import Search from '../ui/products/search';

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

      <AllProducts currentPage={currentPage} itemPerPage={itemPerPage} search={search} />

      <Pagination
        totalPages={totalPages}
      />
    </>
  );
}

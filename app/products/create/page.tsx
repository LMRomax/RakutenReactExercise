import Form from "@/app/ui/products/create-form";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create a product',
};

export default async function Page() {
  return (
    <div className="relative">
      <h3 className="text-black text-3xl font-bold mt-3 leading-relaxed text-center mb-12 md:text-left md:mt-0 md:mb-12">
        Create product
      </h3>

      <Form />
    </div>
  )
}

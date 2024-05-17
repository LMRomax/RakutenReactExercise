'use client'

import { ProductField } from '@/app/lib/definitions';
import { createProduct } from '@/app/lib/action';
import { useFormState } from 'react-dom';

export default function Form() {
    const initialState = { message: '', errors: {} }
    const [state, dispatch] = useFormState(createProduct, initialState);

    return (
        <div className="w-full flex items-start justify-start">
            <div className="bg-[#f4f4f4] w-full p-6 rounded-lg md:w-10/12 xl:w-6/12">
                <form action={dispatch}>
                    <div className="mb-4">
                        <label htmlFor="brand" className="mb-2 block text-sm font-medium">
                            Brand
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="brand"
                                    name="brand"
                                    type="text"
                                    placeholder="Enter a brand"
                                    className="peer block w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-2 placeholder:text-gray-500 focus:ring-[#bf0000] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div id="brand-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.brand &&
                                state.errors.brand.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="title" className="mb-2 block text-sm font-medium">
                            Title
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Enter a title"
                                    className="peer block w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-2 placeholder:text-gray-500 focus:ring-[#bf0000] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div id="title-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.title &&
                                state.errors.title.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="href" className="mb-2 block text-sm font-medium">
                            Url of product
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="href"
                                    name="href"
                                    type="text"
                                    placeholder="Enter an url for the product"
                                    className="peer block w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-2 placeholder:text-gray-500 focus:ring-[#bf0000] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div id="href-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.href &&
                                state.errors.href.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="image" className="mb-2 block text-sm font-medium">
                            Image of product
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="image"
                                    name="image"
                                    type="text"
                                    placeholder="Entre the URL of the product"
                                    className="peer block w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-2 placeholder:text-gray-500 focus:ring-[#bf0000] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div id="image-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.image &&
                                state.errors.image.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="newprice" className="mb-2 block text-sm font-medium">
                            Price of new product
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="newprice"
                                    name="newprice"
                                    type="text"
                                    placeholder="Entre the URL of the product"
                                    className="peer block w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-2 placeholder:text-gray-500 focus:ring-[#bf0000] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div id="newprice-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.newprice &&
                                state.errors.newprice.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="usedprice" className="mb-2 block text-sm font-medium">
                            Price of used product
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="usedprice"
                                    name="usedprice"
                                    type="text"
                                    placeholder="Entre the URL of the product"
                                    className="peer block w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-2 placeholder:text-gray-500 focus:ring-[#bf0000] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div id="usedprice-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.usedprice &&
                                state.errors.usedprice.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-12">
                        <button className="bg-[#bf0000] p-3 text-white rounded-lg" type="submit">
                            Create product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

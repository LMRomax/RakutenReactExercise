import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { Product } from '@/app/ui/products/product';

afterEach(() => {
    cleanup();
})

it('Should render product component in AllProducts', () => {
    const product = {
        id: 1,
        brand: 'Apple',
        title: 'Test Apple title',
        numprice: 20.99,
        usedprice: 12.50,
        href: '/url/to/test/apple',
        image: 'https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg'
    };

    render(<Product
        id={product.id}
        brand={product.brand}
        title={product.title}
        numprice={product.numprice}
        usedprice={product.usedprice}
        href={product.href}
        image={product.image}
    />);
});

it('Should not render product component in AllProducts', () => {
    // if one data is null or undefined, product do not render
    const product = {
        id: 1,
        brand: null,
        title: 'Test Apple title',
        numprice: 20.99,
        usedprice: 12.50,
        href: '/url/to/test/apple',
        image: 'https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg'
    };

    render(<Product
        id={product.id}
        brand={product.brand}
        title={product.title}
        numprice={product.numprice}
        usedprice={product.usedprice}
        href={product.href}
        image={product.image}
    />);
});

it('renders product unchanged', () => {
    const product = {
        id: 1,
        brand: 'Apple',
        title: 'Test Apple title',
        numprice: 20.99,
        usedprice: 12.50,
        href: '/url/to/test/apple',
        image: 'https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg'
    };

    const { container } = render(<Product
        id={product.id}
        brand={product.brand}
        title={product.title}
        numprice={product.numprice}
        usedprice={product.usedprice}
        href={product.href}
        image={product.image}
    />)
    expect(container).toMatchSnapshot();
})

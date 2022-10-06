import Link from "next/link"

import ProductSwiper from "./ProductSwiper"

const ProductSlider = () => {
    return (
        <div className="product-slider container">
            <h2>Najpopularniejsze produkty</h2>
            <ProductSwiper />
            <Link href="/products" ><a className="primary-button">Zobacz Produkty</a></Link>
        </div>
    )
}

export default ProductSlider
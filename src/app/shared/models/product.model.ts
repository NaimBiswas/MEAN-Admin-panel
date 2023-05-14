import { ProductDetails } from "../interface/interface";

export class ProductModel {
    model
    constructor(public productDetails: ProductDetails) {
        this.model =  {
            name: this.productDetails?.name,
            manufacturerBrand : this.productDetails?.manufacturerBrand,
            manufacturerName: this.productDetails?.manufacturerName,
            price: this.productDetails?.price,
            discount:this.productDetails?.discount ,
            discountPrice: this.productDetails?.discountPrice,
            category: this.productDetails.category,
            description: this.productDetails?.description,
            image: this.productDetails?.image,
            metaTitle:this.productDetails?.metaTitle,
            metaKeyword: this.productDetails?.metaKeyword,
            metaDescription:this.productDetails?.metaDescription
        }
    }

    createProductModel = (): ProductDetails => {
        return this.model
    }
}
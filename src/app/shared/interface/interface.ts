interface salesRes  {
    data:{
        sells: Number,
        orderCount:Number
    } | undefined,
}
interface ProductDetails {
    name: string,
    manufacturerBrand : string
    manufacturerName: string
    price: number
    discount:number 
    discountPrice: number
    category:  CategoryType,
    description: string,
    image: string,
    metaTitle:string,
    metaKeyword: string,
    metaDescription:string,
}
interface CategoryType { _id: string,  name: string, }

export {
    salesRes,
    ProductDetails,
    CategoryType
}
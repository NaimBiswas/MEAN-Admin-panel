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
interface CategoryType {
  id: any, _id: string,  name: string, 
}
interface ICategory {
    name: string, 
    isActive: boolean, 
    createdBy: string,
    modifiedBy: string,
    createdById: string,
    modifiedById: string,
    createdAt: Date,
    updatedAt: Date,
}
export {
    salesRes,
    ProductDetails,
    CategoryType,
    ICategory
}
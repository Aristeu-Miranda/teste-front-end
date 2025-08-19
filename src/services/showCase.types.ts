export type Product = {
    id?: string
    productName: string
    descriptionShort: string
    photo: string
    price: number
}

export type ShowcaseApiResponse = {
    success: boolean
    products: Product[]
}

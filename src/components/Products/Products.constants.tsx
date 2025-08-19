import whiskeyIcon from "@/assets/whiskey.svg"
import techIcon from "@/assets/tech.svg"
import healthIcon from "@/assets/health.svg"
import fashionIcon from "@/assets/fashion.svg"
import marketIcon from "@/assets/market.svg"
import runIcon from "@/assets/run.svg"
import toolsIcon from "@/assets/tools.svg"

import dell from "@/assets/DellBrand.svg"
import hp from "@/assets/HPBrand.svg"
import apple from "@/assets/AppleBrand.svg"
import sony from "@/assets/SonyBrand.svg"
import econverse from "@/assets/Logotipo.svg"

import type { ProductsProps } from "./Products.types"
import type { BrandsProps } from "../Brands/Brands.types"

export const MAIN_CATEGORIES: readonly ProductsProps[] = [
    { category: "Tecnologia", categoryLogo: techIcon },
    { category: "Supermercado", categoryLogo: marketIcon },
    { category: "Bebidas", categoryLogo: whiskeyIcon },
    { category: "Ferramentas", categoryLogo: toolsIcon },
    { category: "Saúde", categoryLogo: healthIcon },
    { category: "Esportes e Fitness", categoryLogo: runIcon },
    { category: "Moda", categoryLogo: fashionIcon }
] as const

export const PRODUCT_CATEGORIES = [
    "CELULAR",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS"
] as const

export const BRANDS: readonly BrandsProps[] = [
    { brandName: "Econverse", logo: econverse },
    { brandName: "Dell", logo: dell },
    { brandName: "HP", logo: hp },
    { brandName: "Apple", logo: apple },
    { brandName: "Sony", logo: sony }
] as const

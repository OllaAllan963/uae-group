export interface ICompany {
    id: number,
    image: string,
    image1?: string,
    title: string,
    caption?: string,
    description?: string,
    description1?: string,
    description2?: string,
    video?: string,
    video2?: string
    titleAr?: string,
    captionAr?: string,
    descriptionAr?: string,
    description1Ar?: string,
    description2Ar?: string,
    activitiesTitle?: string,
    activitiesTitleAr?: string
}

export interface SubCompany {
    image1: string,
    title: string,
    caption: string,
    description: string,
    description1: string,
    description2: string
}

export interface CompanyDetails {
    companyId: number,
    title: string,
    titleAr?: string,
    caption: string,
    captionAr?: string,
    activities: Array<Activity>
}

export interface Activity {
    id: number,
    name: string,
    image: string,
    description?: string,
    nameAr?: string,
    descriptionAr?: string,
}

export interface Property {
    id: number,
    name: string,
    nameAr: string,
    price: string,
    image: string,
    currency: string,
    currencyAr: string
}

export interface ChooseUs {
    id: number,
    image: string,
    name: string,
    nameAr: string,
    description: string,
    descriptionAr: string,
}
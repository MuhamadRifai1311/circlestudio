export interface content{
    title: string
    desc: string
    img: string
}

export interface detailWork {
    title: string
    desc: string
    img: string
    client: string
    service: string
    timeline: string
    contents?: content[],
    catalog?: {
        img: string
        alt: string
    }[],
    catalHead?: {
        img: string
        alt: string
    }[]

}

export interface work  {
    img: string
    title: string
    slug: string
    detail: detailWork[]
}
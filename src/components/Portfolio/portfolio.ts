import type { BlogCardProps } from '@components/BlogCard/blogCard'
import type { GridWithIconsProps } from '@components/GridWithIcons/gridWithIcons'
import type { HeroProps } from '@components/Hero/hero'
import type { IconListProps } from '@components/IconList/iconList'
import type { LayoutProps } from '@components/Layout/layout'
import type { ButtonProps, IconProps, RatingProps } from 'webcoreui/astro'

export type PortfolioProps = {
    layout: LayoutProps
    hero?: HeroProps
    aboutMe: {
        title?: string
        text: string
        services?: IconListProps['items']
        img?: {
            src: string
            alt: string
            width: number
            height: number
        }
    }
    ratings?: ({
        feedback: string
    } & RatingProps)[]
    ratingCta?: {
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps
    myWork?: {
        title?: string
        items: BlogCardProps[]
    }
    servicesTitle?: string
    services?: GridWithIconsProps
    servicesCta?: {
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps
    [key: string]: any
}

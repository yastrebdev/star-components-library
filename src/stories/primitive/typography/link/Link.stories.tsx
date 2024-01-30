import type { Meta } from '@storybook/react'
import { Typography } from 'components/primitive/typography'

const { Link } = Typography

const meta: Meta<typeof Link> = {
    title: 'Primitive/Typography/Link',
    component: Link,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Link></Link>
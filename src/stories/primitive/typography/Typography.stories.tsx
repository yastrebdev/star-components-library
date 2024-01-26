import type { Meta } from '@storybook/react'
import { Typography } from '../../../../lib/components/primitive/typography/Typography'

const { Text } = Typography

const meta: Meta<typeof Text> = {
    title: 'Text',
    component: Text,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Text></Text>
// export const TextSecondary = () => <Text type='secondary'></Text>
export const Secondary = {
    args: {
        type: 'secondary'
    },
};
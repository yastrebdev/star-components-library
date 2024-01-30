import type {
    SCL_TypogrphyLinkProps,
    SCL_TypogrphyTextProps,
    SCL_TypogrphyTitleProps,
} from './types'
import { Text } from './text/Text'
import { Title } from './title/Title'
import { Link } from './link/Link'
import './style.scss'

export const Typography: {
    Text: React.FC<SCL_TypogrphyTextProps>
    Title: React.FC<SCL_TypogrphyTitleProps>
    Link: React.FC<SCL_TypogrphyLinkProps>
} = {
    Text: Text,
    Title: Title,
    Link: Link,
}
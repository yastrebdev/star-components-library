import { IconName, icons } from "components/primitive/icons/icons";

const iconNameArray = [] as IconName[];

export const options = {
    icons: iconNameArray
}

const iconKeys = Object.keys(icons) as IconName[];
iconKeys.forEach(key => {
    iconNameArray.push(`${key}`)
})
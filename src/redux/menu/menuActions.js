import { CHANGE_LINK } from './menuType'

export const Change_link = (link = "/") => {
    return {
        type: CHANGE_LINK,
        link: link
    }
}
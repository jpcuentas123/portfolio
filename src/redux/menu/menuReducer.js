import { CHANGE_LINK } from './menuType'

var initialState = {
    link: "/"
}


const menuReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_LINK:
            return{
                ...state,
                link: action.link
            }


        default: return state

    }

}

export default menuReducer
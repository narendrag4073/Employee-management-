
export default function(state = { isList: true }, action){
    switch(action.type){
                case 'IS_ADD': 
                return action.payload;
                case 'IS_EDIT': 
                return { isEdit: true };
                case 'IS_LIST':
                return { isList: true };
            }
            return state;

}
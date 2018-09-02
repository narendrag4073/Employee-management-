let initialState = {
    name: null,
    mobile: null,
    email: null,
    role: 'regular'
}
export default function(state = initialState, action){
    switch(action.type){
                case 'SET_FIRST_NAME': 
                return {...state, firstName:action.payload };
                case 'SET_LAST_NAME': 
                return {...state, lastName:action.payload };
                case 'SET_MOBILE': 
                return {...state, mobile:action.payload };
                case 'SET_EMAIL': 
                return {...state, email:action.payload }; 
                case 'SET_ROLE': 
                return {...state, role:action.payload }; 
                case 'EDIT_MEMBER': 
                return {...action.payload }; 
                case 'RESET_FORM': 
                return {...action.payload }; 
            }
            return state;

}
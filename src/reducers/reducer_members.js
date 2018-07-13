
let initialState = [{
    firstName: 'Narendra',
    lastName:'Gupta',
    mobile: '8989009170',
    email: 'narendrag4073@gmail.com',
    role:'admin'
},{
    firstName: 'Narendra',
    lastName:'Gupta',
    mobile: '8989009172',
    email: 'narendrag40731@gmail.com',
    role:'regular'
}]

export default function(state = initialState, action){
    switch(action.type){
        case 'ADD_MEMBER':
        return state.concat(action.payload);
        case 'UPDATE_MEMBER':
        return updateByName(action.payload, state)
        case 'DELETE_MEMBER':
        return deleteByName(action.payload, state)
    }
        return state;
}
const deleteByName = (firstName, members)=>{
    for(var i=0 ; i<members.length; i++) {
        if(members[i].firstName==firstName)
        members.splice(i);
    }
    return members;
}
const updateByName = (data, members)=>{
    return members.map(element => {
        if(element.firstName === data.firstName){
            element = data;
        }
        return element;
    });
}
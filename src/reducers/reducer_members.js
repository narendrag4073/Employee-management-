
let initialState = [{
    firstName: 'Narendra',
    lastName:'Gupta',
    mobile: '8989009170',
    email: 'narendrag4073@gmail.com',
    role:'admin',
    id:1
},{
    firstName: 'Lalit ',
    lastName:'Patel',
    mobile: '8989009172',
    email: 'lalit1@gmail.com',
    id:2,
    role:'regular'
}]

export default function(state = initialState, action){
    switch(action.type){
        case 'ADD_MEMBER':
        return addMemberWithId(state, action.payload)
        case 'UPDATE_MEMBER':
        return updateByName(action.payload, state)
        case 'DELETE_MEMBER':
        return deleteByName(action.payload, state)
    }
        return state;
}
const deleteByName = (id, members)=>{
    for(var i=0 ; i<members.length; i++) {
        if(members[i].id === id)
        members.splice(i, 1);
    }
    return members;
}
const updateByName = (data, members)=>{
    return members.map(element => {
        if(element.id === data.id){
            element = data;
        }
        return element;
    });
}
const addMemberWithId = (allMembers = [], data)=>{
    data.id = allMembers.length + 1;
    return allMembers.concat(data);
}
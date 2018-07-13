
export function handleChange(type, payload){
  return {
    type, 
    payload
  }
}
export function changeMode(type, payload){
  return {
    type,
    payload
  }
}
export function saveMember(payload){
  return {
    type: 'ADD_MEMBER',
    payload
  }
}
export function updateMember(payload){
  return {
    type: 'UPDATE_MEMBER',
    payload
  }
}
export function resetForm(){
  return {
    type: 'RESET_FORM',
    payload: { firstName: '', lastName: '', email: '', mobile: '', role:'regular'}
  }
}
export function editMember(member){
  return {
    type: 'EDIT_MEMBER',
    payload: member,
  }
}
export function deleteMember (firstName){
  return {
    type: 'DELETE_MEMBER',
    payload: firstName,
  }
}
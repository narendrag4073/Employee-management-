import { combineReducers } from 'redux';
import members from './reducer_members';
import infoForm from './infoForm';
import modeType from './ModeType';

const rootReducer = combineReducers({
	members,
	infoForm,
	modeType
});

export default rootReducer;
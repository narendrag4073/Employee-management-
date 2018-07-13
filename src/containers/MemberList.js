import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMode, editMember } from '../actions/index';
import { bindActionCreators } from 'redux';

class MemberList extends Component {

  renderList() {
    return this.props.members.map((member) => {
      return (
        <li
		  className="col-md-12 member-list-item"
		  onClick={(e)=>{
			  this.props.changeMode('IS_EDIT', { isEdit: true });
			  this.props.editMember(member)}
		  }
		>
			  <span  className="col-md-1 pl-0">
				<img 
					src='https://www.qualiscare.com/wp-content/uploads/2017/08/default-user-300x300.png' alt="No Image" 
					width="45"
					/> 
				</span>
			<div  className="col-md-11"> 
				<p className="name-heading mb-5">
					{member.firstName}&nbsp;{member.lastName} &nbsp;{member.role === 'admin' ? `(${member.role})`: ''}
				</p>
				<p className="mb-5 fc-color fs-13">
					{member.mobile}
				</p>
			  	<p className="mb-5 fc-color fs-13">{member.email}</p>
			</div>
        </li>
      );
    });
  }

  render() {
	  if(this.props.modeType.isList){
    return (
	  <div className="col-md-6 member-list_top">
			<div className="col-md-12 bg-white">
				<div className = "panel-body " >
				<i className="glyphicon glyphicon-plus icon-style" onClick={(e)=>this.props.changeMode('IS_ADD', { isAdd:true})}></i>
					<h3>Team Members</h3>
					<h5 className="fc-color">You have {this.props.members.length} Members</h5>
				</div>
		
			<ul className="list-group">
				{this.renderList()}
			</ul>
			</div>
      </div>
    )
  } else {
	return <div></div>
  }
}
}

function mapStateToProps(state) {
  return {
	members: state.members,
	modeType: state.modeType
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeMode, editMember }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);

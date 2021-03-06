import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleChange, saveMember, changeMode, resetForm} from '../actions/index';
import { bindActionCreators } from 'redux';

class AddMember extends Component {

  render() {
      if(this.props.modeType.isAdd){
        return (
                <div className="col-md-6 member-list_top col-md-offset-3">
                    <div className="col-md-12 bg-white">
                        <div className = "panel-body " >
                        <i 
                            className="glyphicon glyphicon-remove icon-style"
                            onClick={(e)=>{
                                e.preventDefault();
                                this.props.changeMode('IS_LIST', { isList:true});
                                this.props.resetForm();
                            }}
                        ></i>
                            <h3>Add a Team Member</h3>
                            <h5 className="fc-color">set email,location and role</h5>
                        </div>
                        <div className="col-md-12 member-list-item"> 
                        <h4>Info</h4>
                            <p className="mb-15">
                                <input 
                                    type="text"
                                    placeholder="first name"
                                    className="form-control p-20"
                                    name="first-name"
                                    value={this.props.infoForm.firstName}
                                    onChange={(e)=>{
                                        this.props.handleChange('SET_FIRST_NAME', e.target.value)}
                                    }
                                />
                            </p>
                            <p className="mb-15">
                                <input 
                                    type="text"
                                    className="form-control p-20"
                                    placeholder="last name"
                                    name="last-name"
                                    value={this.props.infoForm.lastName}
                                    onChange={(e)=>{
                                        this.props.handleChange('SET_LAST_NAME', e.target.value)}
                                    }
                                />
                            </p>
                            <p className="mb-15">
                                <input 
                                    type="text"
                                    className="form-control p-20"
                                    placeholder="email"
                                    name="email"
                                    value={this.props.infoForm.email}
                                    onChange={(e)=>{
                                        this.props.handleChange('SET_EMAIL', e.target.value)}
                                    }
                                />
                            </p>
                            
                            <p className="mb-15">
                                <input 
                                    type="text"
                                    className="form-control p-20"
                                    placeholder="mobile"
                                    name="mobile"
                                    value={this.props.infoForm.mobile}
                                    onChange={(e)=>{
                                        this.props.handleChange('SET_MOBILE', e.target.value)}
                                    }
                                />
                            </p>
                            <p className="mb-15">
                                
                            <h4>Role</h4>
                                    <div className="role-label-parent">
                                    <label for="roleMobile" className="pt-10 pb-10 role-label">Regular Can't Delete
                                        <input 
                                            type="Radio"
                                            name="mobile"
                                            id="roleMobile"
                                            className="pull-right"
                                            value="regular"
                                            checked={this.props.infoForm.role === 'regular'}
                                            onChange={(e)=>{
                                                this.props.handleChange('SET_ROLE', e.target.value)}
                                            }
                                        />
                                    </label>
                                    </div>
                                    <div className="role-label-parent">
                                    <label for="roleAdmin" className="pt-10 pb-10 role-label">Admin Can Delete
                                        <input 
                                            type="Radio"
                                            name="mobile"
                                            id="roleAdmin"
                                            className="pull-right"
                                            value="admin"
                                            checked={this.props.infoForm.role === 'admin'}
                                            onChange={(e)=>{
                                                this.props.handleChange('SET_ROLE', e.target.value)}
                                            }
                                        />
                                        </label>
                                        
                                    </div>
                                
                            </p>
                    
                        <div className="row pb-10">
                            <button 
                                className="btn btn-primary pull-right "
                                onClick={(e)=>{
                                        e.preventDefault();
                                        this.props.saveMember(this.props.infoForm);
                                        this.props.changeMode('IS_LIST', { isList : true});
                                        this.props.resetForm();
                                    }
                                }
                            >Save</button>
                        </div>
                        </div>
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
    infoForm: state.infoForm,
    modeType: state.modeType
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleChange, saveMember, changeMode, resetForm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);

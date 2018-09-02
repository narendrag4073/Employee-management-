import React, { Component } from 'react';
import './main.css';
import MemberList from './containers/MemberList';
import AddMember from './containers/AddMember';
import EditMember from './containers/EditMember';

export default class App extends Component {
  render() {
    return (
      <div>
        <MemberList/>
        <AddMember/>
        <EditMember />
      </div>
    );
  }
}

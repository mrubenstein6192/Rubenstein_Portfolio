import React, { Component } from 'react';
import Field from '../components/Field';
import Button from '../components/Button';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.updateField = this.updateField.bind(this);
  }
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        <Field 
          label = 'Name'
          onChange = {(event) =>  this.updateField('name', event.target.value)}
         
          value = {this.state.name} />

        <Field 
          label = 'Email'
          onChange = {(event) => this.updateField('email', event.target.value)} 
          value = {this.state.email} />

        <Field 
          label = 'Message'
          onChange = {(event) => this.updateField('message', event.target.value)} 
          textarea ={true}
          value = {this.state.message} />

        <Button 
          email = 'mrubenstein6192@gmail.com' />
          formValues = {this.state} 
      </div>
    )
  }
}

export default Contacts;
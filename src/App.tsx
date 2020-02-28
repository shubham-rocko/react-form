import React from 'react';
import './App.css';
import Form from './react-form';
import FormGroup from './react-form/form-group';
import FormControl from './react-form/form-control';
import FormArray from './react-form/form-array';

class App extends React.Component{

  formArray = [{password: ''}, {confirmPassword: ''}];

  // formGroup = new FormGroup({
  //   'email': new FormControl(''),
  //   'fullName': new FormGroup({
  //     'firstName': new FormControl(''),
  //     'lastName': new FormControl('')
  //   }),
  //   'formArray': new FormArray([
  //     '0': new FormGroup({
  //       'password': new FormControl(''),
  //       'confirmPassword': new FormControl('')
  //     })
  //   ])
  // })

  formSubmitHandler = (formData: any) => {
    console.log(formData) //we can do the api integration
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={(fData: any) => this.formSubmitHandler(fData)}>
            <FormGroup formGroup="reactForm">
                <FormControl value="">
                    {<div className="form-control-container">
                        <input type="email"
                            name="email" 
                            className="form-control rc-untouched rc-pristine"
                            required={true}/>
                        <label className="for">email child control</label>
                    </div>}
                </FormControl>
                <FormGroup formGroup="fullName">
                    <FormControl formControlName="firstName" type="text" required={true} labelName="new-control" />
                    <FormControl formControlName="lastName" type="text" required={true} labelName="new-control" />
                </FormGroup>
                <FormArray formArrayName="passwordArray">
                {this.formArray.map((fa, i) => (
                  <FormGroup key={i} formGroup={`${i}`}>
                    <FormControl formControlName={Object.keys(fa)[0]} type="password" required={true} labelName="new-control" />
                  </FormGroup>
                ))}
                </FormArray>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default App;

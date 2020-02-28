import React from 'react';
import { FormControlProps } from './interface';

class FormControl extends React.Component <FormControlProps>{

    render(){
        const {formControlName, type, required, labelName} = this.props;
        if(this.props.children){
            return (this.props.children)
        }
        return (<div className="form-control-container">
                    <input type={type}
                        name={formControlName} 
                        className="form-control rc-untouched rc-pristine"
                        required={required}/>
                    <label className="for">{labelName}</label>
                </div>);
    }
}

export default FormControl;
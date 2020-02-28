import React from 'react';
import { FormProps, FormState } from './interface';
import { FormControlModel } from './models/form-control-model';
import { FormGroupModel } from './models/form-group-model';
import { FormArrayModel } from './models/form-Array-model';

class ReactForm extends React.Component<FormProps, FormState> {
    state = {
        value: {},
        form: {}
    }

    constructor(props: any){
        super(props);
        this.state = {
            value: {},
            form: new FormGroupModel({
                formArray: new FormArrayModel([
                    new FormGroupModel({
                        email: new FormControlModel('new Mail')
                    })
                ])
            })
        }
        debugger;
    }

    createSchema = (childData: any) => {
        if(childData.props.hasOwnProperty('formGroup')){
            let form = new FormGroupModel()
        } else {

        }
    }

    render(){
        const { onSubmit } = this.props
        return (<form className="form-container" onSubmit={() => {onSubmit(this.state.value)}}>
            {this.props.children}
        </form>);
    }
}

export default ReactForm;
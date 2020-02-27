import React from 'react';
import { FormProps, FormState } from './interface';

class ReactForm extends React.Component<FormProps, FormState> {
    state = {
        value: ""
    }

    render(){
        const { onSubmit } = this.props
        return (<form onSubmit={() => {onSubmit(this.state.value)}}>
            {this.props.children}
        </form>);
    }
}

export default ReactForm;
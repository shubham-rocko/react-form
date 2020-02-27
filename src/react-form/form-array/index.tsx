import React from 'react';
import { FormArrayProps } from './interface';

class FomrArray extends React.Component<FormArrayProps> {

    render(){
        return (<div className="form-array">
            Creating Form Array!!
            {this.props.children}
        </div>);
    }
}

export default FomrArray;
import React from 'react';
import { FormGroupProps } from './interface';

const FomrGroup : React.SFC<FormGroupProps> = (props) => {
    return (<div className="form-group">
                Creating Form Group!!
                {props.children}
            </div>)
    };

export default FomrGroup;
export class FormArrayModel {
    value: Array<Object>;
    pristine: boolean;
    touched: boolean;
    untouched: boolean;
    dirty: boolean;
    valid: boolean;
    invalid: boolean;
    pending: boolean;
    hasError: Object | null;

    constructor(value = [{}]){
        this.value = value;
        this.pristine = true;
        this.touched = false;
        this.untouched = true;
        this.dirty = false;
        this.valid = true
        this.invalid = false;
        this.pending = false;
        this.hasError = null;
    }

    onValueChanged = () => {
        
    }

}
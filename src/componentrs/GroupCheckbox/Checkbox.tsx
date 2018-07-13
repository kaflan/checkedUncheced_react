import * as React from 'react';

interface Props {
    value: string,
    label?: string,
    onChange?: any,
    checked: boolean,
    id?: string
}
interface State {
    value: string,
    checked: boolean
}

class Checkbox extends React.Component <Props, State> {
    public static getDerivedStateFromProps(props:any, state: any) {
        if(props) {
            return { checked: props.checked}
        }
        return null;
    }
    constructor (props: Props) {
        super(props)
        this.state = {
            checked: props.checked,
            value: props.value
        }
    }
    
    public handleChange = (event: React.FormEvent<HTMLElement>) :void =>  {
        const { currentTarget: {id} } = event;
        this.setState(({ checked }) => (
            {
                checked: !checked,
            }
        ), () => this.props.onChange(id));
    }
    public render() {
      const { state: {value, checked}, props: {label, id} } = this;
      return (
        <label>
          <input type="checkbox" value={value} onChange={this.handleChange} checked={checked}  id={id} />
          {label}
        </label>
      );
    }
  }
  
  export default Checkbox;
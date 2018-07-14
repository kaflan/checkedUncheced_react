import * as React from 'react';

interface Props {
    value: string,
    label?: string,
    onChange?: any,
    checked: boolean,
    id?: string
}

class Checkbox extends React.Component <Props> {

    
    public handleChange = (event: React.FormEvent<HTMLElement>) :void =>  {
        const { currentTarget: {id} } = event;
        this.props.onChange(id)
    }
    public render() {
      const { props: {label, id, value, checked} } = this;
      return (
        <label>
          <input type="checkbox" value={value} onChange={this.handleChange} checked={checked}  id={id} />
          {label}
        </label>
      );
    }
  }
  
  export default Checkbox;
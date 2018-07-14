import * as React from 'react';
import * as faker from 'faker';
import { Item } from './models';
import Chekbox from './Checkbox';
import './index.css'

function fakeData(): Item[] {
  const result: Item[] = [];
  for (let i = 0; i <= 10; i++) {
    const item: Item = {
      id: faker.random.uuid(),
      value: faker.name.firstName(),
      checked: false,
      label: faker.company.companyName()
    };
    result.push(item)
  }
  return result;
}

interface State {
  selectCheckbox: string[],
  checboxes: Item[]
}
class CheckboxGroup extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectCheckbox: [],
      checboxes: fakeData(),
    }
  }

  public handleCheckbox = (id: string) => {
    const { checboxes } = this.state;
    const selected = checboxes.map(item => {
      if (item.id === id) {
        return ({
          ...item,
          checked: !item.checked
        })
      }
      return { ...item };
    });
    this.setState({
      checboxes: selected,
      selectCheckbox: this.selectCheckbox(selected),
    })
  }
  
  public selectCheckbox = (selected: Item[]): string[] => selected.filter((item: Item) => item.checked === true).map((item: Item) => { return item.id; });

  public onCheckedAll = (checked: boolean): void => {
    const { checboxes } = this.state;
    const selected: any = checboxes.map(item => ({
      ...item,
      checked
    }));

    this.setState({
      selectCheckbox: this.selectCheckbox(selected),
      checboxes: selected
    })
  }
  public selectAll = () => {
    this.onCheckedAll(true)
  }
  public diselectAll = () => {
    this.onCheckedAll(false)
  }
  public render() {
    const { state: { checboxes }, selectAll, diselectAll } = this;
    return (
      <form className="flex">
        {checboxes.map(item => <Chekbox key={item.id} id={item.id} value={item.value} checked={item.checked} label={item.label} onChange={this.handleCheckbox} />)}
        <button onClick={selectAll}>Select all</button>
        <button onClick={diselectAll} >Diselect all</button>
      </form>
    );
  }
}

export default CheckboxGroup;
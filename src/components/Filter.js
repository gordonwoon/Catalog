import React from 'react';

import './Filter.css';

export default class Filter extends React.Component {
  state = {
    filter: {}
  }

  static getDerivedStateFromProps(props, state) {
    return { [props.filters]: props.filters };
  }
  setFilter(name, value) {
    console.log('name', name);
    console.log('value', value);
    
    let { filter } = this.state;

    filter.map(filter => {
      if(filter.name === name) {
        filter.values
      }
    })
  }
  renderCategoryFilters(filter) {
    return (
      <div className="filter-category">
        <strong>{filter.name}</strong>
        <ul>
          {filter.values.map((value, key) => {
            return (
              <li key={key}>
              <input
                type="checkbox"
                value={value}
                onClick={this.setFilter.bind(this, filter.name, value)}
              />{value}</li>
            )
          })}
        </ul>
      </div>
    )
  }
  render() {
    console.log(this.state);
    return (
      <div className="filter-component">
        <form
          onChange={(e, i) => console.log('form changed', e.target)}
          onClick={(e, i) => console.log('form click', e.target)}
          onSubmit={(e, i) => console.log('form submit', e.target)}>
          {this.props.filters.map(filter => this.renderCategoryFilters(filter))}
        </form>
      </div>
    )
  }
}

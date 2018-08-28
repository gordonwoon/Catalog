import React from 'react';

import './Filter.css';

export default class Filter extends React.Component {
  renderValues(name, values) {
    return Object.keys(values).forEach((value, key) => {
      console.log('key', key);
      console.log('value', value);
      console.log('values', values[value]);
      return (
        <li key={key}>
        <input
          type="checkbox"
          value={value}
          checked={values[value]}
          onChange={() => this.props.setFilters(name, value)}
        />{value}</li>
      )
    })
  }
  renderCategory(name, values) {
    return (
      <div className="filter-category">
        <strong>{name}</strong>
        <ul>
          {this.renderValues(name, values)}
        </ul>
      </div>
    )
  }
  renderFilters() {
    for(let filter in this.props.filters) {
      console.log(filter);
      return this.renderCategory(filter, this.props.filters[filter]);
    }
  }
  render() {
    return (
      <div className="filter-component">
        {this.renderFilters()}
      </div>
    )
  }
}

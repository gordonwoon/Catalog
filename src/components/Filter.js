import React from 'react';

import './Filter.css';

export default class Filter extends React.Component {
  renderCategory(category, values) {
    return (
      <div className="filter-category">
        <strong>{category}</strong>
        <ul>
          {Object.keys(values).map((value, key) => {
            return (
              <li key={key}>
              <input
                type="checkbox"
                value={value}
                checked={values[value]}
                onChange={() => this.props.setFilters(category, value)}
              />{value}</li>
            )
          })}
        </ul>
      </div>
    )
  }
  renderFilters() {
    return Object.keys(this.props.filters).map(category => {
      return this.renderCategory(category, this.props.filters[category]);
    });
  }
  render() {
    return (
      <div className="filter-component">
        {this.renderFilters()}
      </div>
    )
  }
}

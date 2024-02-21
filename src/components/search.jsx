import React from "react";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filter: 'all'
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ search: value });
    this.props.onUpdateSearch(value);
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <input
          type="text"
          className="search"
          placeholder="search "
          value={search}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SearchPanel;

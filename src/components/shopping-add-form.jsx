import React from "react";

class ShoppingAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      number: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onAdd = () => {
    const data = {
      title: this.state.title,
      number: this.state.number,
    };
    if (!data.title.length || !data.number.length) {
      alert("maluumot kiriting !");
    } else {
      this.props.onAdd(data);
    }
  };

  render() {
    const { number, title } = this.state;
    return (
      <div className="form">
        <input
          name="title"
          type="text"
          className="title"
          placeholder="Title..."
          onChange={this.onChange}
          value={title}
        />

        <input
          name="number"
          type="number"
          className="number"
          placeholder="14"
          onChange={this.onChange}
          value={number}
        />
        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
}

export default ShoppingAddForm;

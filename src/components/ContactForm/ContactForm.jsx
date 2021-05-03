import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    // contacts: [],
    name: "",
    number: "",
  };
  randomId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.props.onClick(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.randomId}>
          Name
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            id={this.randomId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={this.randomId}>
          Number
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            id={this.randomId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button onClick={this.handleSubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

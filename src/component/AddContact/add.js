import React, { Component } from 'react'

export default class add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }
  render() {
    const handleChange = (event) => {
      this.setState({
        name: event.target.value,
      })
    }
    const submit = (e) => {
      e.preventDefault()
      if (this.state.name === "" && this.state.email === "") {
        alert("All fields are mandatory")
        return
      }
      this.props.myContact(this.state)
      console.log(2222, this.props)
      this.setState({ name: "", email: "" })
    }

    const handleSubmit = () => {
      document.getElementById("btn").autofocus = true;
    }
    return (
      <div className='container my-5'>
        <h3>{this.props.heading}</h3>

        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
            <input type="text" value={this.state.name} onChange={handleChange} className="form-control" id="name" aria-describedby="name" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="button" onClick={handleSubmit}>
            <button id='btn' className="btn btn-primary" autoFocus>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

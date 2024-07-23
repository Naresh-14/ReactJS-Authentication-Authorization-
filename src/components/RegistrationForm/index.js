import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstnameError: false,
    showLastnameError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastname = this.validateLastname()
    this.setState({showLastnameError: !isValidLastname})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderLastName = () => {
    const {lastName, showLastnameError} = this.state
    const className = showLastnameError
      ? 'input-value error-field'
      : 'input-value'

    return (
      <div className="form-content">
        <label className="name" htmlFor="last">
          LAST NAME
        </label>
        <input
          type="input"
          id="last"
          value={lastName}
          placeholder="Last Name"
          className={className}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {showLastnameError && <p className="error-msg">Required</p>}
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstname = this.validateFirstName()
    this.setState({showFirstnameError: !isValidFirstname})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  renderFirstName = () => {
    const {firstName, showFirstnameError} = this.state
    const className = showFirstnameError
      ? 'input-value error-field'
      : 'input-value '

    return (
      <div className="form-content">
        <label className="name" htmlFor="first">
          FIRST NAME
        </label>
        <input
          type="input"
          id="first"
          placeholder="First Name"
          className={className}
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {showFirstnameError && <p className="error-msg">Required</p>}
      </div>
    )
  }

  validateLastname = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isvalidFirst = this.validateFirstName()
    const isvalidLast = this.validateLastname()

    if (isvalidFirst && isvalidLast) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstnameError: !isvalidFirst,
        showLastnameError: !isvalidLast,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => (
    <form className="form-container" onSubmit={this.onSubmitForm}>
      {this.renderFirstName()}
      {this.renderLastName()}
      <div className="btn-container">
        <button type="submit" className="submit-button">
          submit
        </button>
      </div>
    </form>
  )

  onClickSubmittedResponse = () => {
    const {isFormSubmitted} = this.state

    this.setState({
      isFormSubmitted: !isFormSubmitted,
      firstName: '',
      lastName: '',
    })
  }

  renderFormSubmitted = () => (
    <div className="form-container registre-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p>Submitted Successfully</p>
      <div className="btn-container">
        <button
          type="submit"
          className="submit-button btn"
          onClick={this.onClickSubmittedResponse}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Registration</h1>
        {isFormSubmitted
          ? this.renderFormSubmitted()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm

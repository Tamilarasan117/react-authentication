import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isValid: true,
    error: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()
    const errorMessage = {errorMsg: data.error_msg}

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({isValid: false, error: errorMessage.errorMsg})
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {username, password, isValid, error} = this.state
    console.log(error)
    return (
      <div className="login-form-container">
        <div className="login-form-img-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
        </div>
        <form className="login-form" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="fom-logo"
          />
          <div className="login-input-box">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="input-field"
              placeholder="Username"
              onChange={this.onChangeUsername}
              value={username}
            />
          </div>
          <div className="login-input-box">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="input-field"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {isValid ? <p /> : <p className="error-msg">*{error}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

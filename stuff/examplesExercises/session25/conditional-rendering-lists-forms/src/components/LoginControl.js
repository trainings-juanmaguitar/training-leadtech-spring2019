import React, {Component} from "react";

const UserGreeting = () => <h1>Welcome back!</h1>;
const GuestGreeting = () => <h1>Please sign up.</h1>;

const LoginButton = ({ onClick }) => <button onClick={onClick}>Login</button>;
const LogoutButton = ({ onClick }) => <button onClick={onClick}>Logout</button>;

const Greeting = ({ isLoggedIn }) =>
  isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

class LoginControl extends Component {
  state = { isLoggedIn: false };

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    const { handleLogoutClick, handleLoginClick } = this;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogoutClick} />
        ) : (
          <LoginButton onClick={handleLoginClick} />
        )}
      </div>
    );
  }
}

export default LoginControl

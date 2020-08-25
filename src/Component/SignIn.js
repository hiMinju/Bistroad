import React from "../../node_modules/react";
import { Button } from "../../node_modules/@material-ui/core";
import classNames from "../../node_modules/classnames/bind";
import createMuiTheme from "../../node_modules/@material-ui/styles/createStyles";
import Api from "../Api.js";
import styles from "./SignUp.scss";

const cx = classNames.bind(styles);

const btnTheme = createMuiTheme({
  maxWidth: "30px",
  maxHeight: "30px",
  minWidth: "30px",
  minHeight: "30px",
  palette: { primary: "#FCBFB7" },
});

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    fullName: "",
    phone: "",
    role: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Api.get("/users", {
      params: {
        username: this.state.username,
        password: this.state.password,
        fullName: this.state.fullName,
        phone: this.state.phone,
        role: this.state.role,
      },
    }).catch((error) => {
      console.log("error : ", error.response);
    });
  };

  render() {
    return (
      <div>
        <h3>로그인</h3>
        <form onSubmit={this.handleSubmit} style={{ display: "inline-block" }}>
          <table className={cx("table")}>
            <tbody>
              <tr className={cx("td")}>
                <td>
                  <input
                    type="text"
                    name="username"
                    placeholder="아이디"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className={cx("td")}>
                  <input
                    type="password"
                    name="pwd"
                    placeholder="비밀번호"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    theme={btnTheme}
                    fontSize="1rem"
                    color="primary"
                    variant="outlined"
                    onClick={this.handleSubmit}
                  >
                    로그인
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default Signup;

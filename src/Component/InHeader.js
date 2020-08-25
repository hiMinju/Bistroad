import React from "react";
import styles from "./Header.scss";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import classNames from "classnames/bind";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";

const cx = classNames.bind(styles);

// table에 넣기
const InHeader = () => (
  <Container align="center" className={cx("in-header")}>
    <Table>
      {/* <TableBody>
				<TableRow>
					<TableCell>
						<img src={logo} alt="Logo" />
					</TableCell>
					<TableCell>
						<div className={cx('title')}>Bistroad</div>
					</TableCell>
				</TableRow>
			</TableBody> */}
    </Table>
    <div>
      <Link to="/">
        <img marginTop="3rem" src={logo} alt="Logo" height="70" />
      </Link>
    </div>
    <hr width="100%" />
  </Container>
);

export default InHeader;

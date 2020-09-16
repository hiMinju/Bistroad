import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class TabUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 0
        }
      }
      a11yProps = (index) => {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      handleChange = (event, newValue) => {
        this.setState({ value: newValue });
      }
    render() {
        return (
            <div>
                <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="회원가입" {...this.a11yProps(0)} />
            <Tab label="로그인" {...this.a11yProps(1)} />
            <Tab label="마이페이지" {...this.a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          회원가입
      </TabPanel>
        <TabPanel value={this.state.value} index={1}>
        로그인
      </TabPanel>
        <TabPanel value={this.state.value} index={2}>
        마이페이지
      </TabPanel>
            </div>
        );
    }
}

class TabPanel extends Component {
    render() {
      return (
        <Typography component="div" hidden={this.props.value !== this.props.index}>
          <Box p={2}>{this.props.children}</Box>
        </Typography>
      );
    }
  }

export default TabUI;
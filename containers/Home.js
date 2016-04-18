import React from 'react';
import { Link } from 'react-router'
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
  	this.setState({open: !this.state.open});
	}

  render() {
  	const styles = {
  	  title: {
  	    cursor: 'pointer',
  	  },
  	  appbar: {
  	  	'marginTop': '-8px',
  	  	'width': '100%'
  	  }
  	};

    return (
    	<div>
    		<AppBar
    		  title={<span style={styles.title}><center>Exam Plus</center></span>}
    		  style={styles.appbar}
    		  iconClassNameRight="muidocs-icon-navigation-expand-more"
    		  onLeftIconButtonTouchTap = {() => this.handleToggle()}
    		/>
        <LeftNav 
        	docked = {false}
        	width  = {300}
        	open   = {this.state.open}
        	onRequestChange={(open) => this.setState({open})}
        >
        	<AppBar
        	  title={<span style={styles.title}>Exam Plus</span>}
        	  onTitleTouchTap = {() => this.handleToggle()}
        	  showMenuIconButton = {false}
        	/>
        	<br />
          <RaisedButton
          	label="Exam plus"
          	onTouchTap={() => this.handleToggle()}
        	/>
        	<br />
        	<br />
    			<Link to="/exam">
    				  <RaisedButton label="考试" />
    			</Link>
        </LeftNav>
      </div>
    );
  }
}

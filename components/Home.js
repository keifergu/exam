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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <symbol id="icon-arrow-left2" viewBox="0 0 16 16">
<title>arrow-left2</title>
<path class="path1" d="M6.293 13.707l-5-5c-0.391-0.39-0.391-1.024 0-1.414l5-5c0.391-0.391 1.024-0.391 1.414 0s0.391 1.024 0 1.414l-3.293 3.293h9.586c0.552 0 1 0.448 1 1s-0.448 1-1 1h-9.586l3.293 3.293c0.195 0.195 0.293 0.451 0.293 0.707s-0.098 0.512-0.293 0.707c-0.391 0.391-1.024 0.391-1.414 0z"></path>
</symbol>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>hahahah</p>
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

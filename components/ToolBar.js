import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';
import SignMap from '../components/SignMap';
import AppBar from 'material-ui/lib/app-bar';

export default class ToolBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open:false}
  }

  handleToggle () {
  	this.setState({open: !this.state.open})
  }

  render() {
  	const styles = {
  		toolbar: {
  			'backgroundColor': '#00bcd4' ,
  		},
  		title: {
  	    cursor: 'pointer',
  	  },
  	}

    return (
    	<div>
	      <Toolbar
	      	style = {styles.toolbar}
	      >
	      	<ToolbarGroup>
	      		<ToolbarTitle text="Exam"/>
	      		<RaisedButton
	          	label="Toggle LeftNav"
	          	onTouchTap={()=>this.handleToggle()}
	        	/>
	      	</ToolbarGroup>
	      	
	      </Toolbar>
	      <ToolbarGroup>
		      <LeftNav width={200} openRight={true} open={this.state.open} >
		      	<AppBar 
		      		title={<span style={styles.title}>返回</span>}
		      		onTitleTouchTap = {() => this.handleToggle()}
		      	/>
		      	<SignMap 
		      		signs = {this.props.signs}
		      		show = {this.props.show}
		      	/>
	        </LeftNav>
        </ToolbarGroup>
      </div>
    );
  }
}

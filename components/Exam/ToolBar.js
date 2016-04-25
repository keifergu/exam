import React from 'react'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import LeftNav from 'material-ui/lib/left-nav'
import RaisedButton from 'material-ui/lib/raised-button'
import SignMap from './SignMap'
import AppBar from 'material-ui/lib/app-bar'
import { Link } from 'react-router'
import SvgIcon from 'material-ui/lib/svg-icon'
import ActionDashboard from 'material-ui/lib/svg-icons/action/dashboard'
import NavigationArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back'
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
  	  icon: {
  	  	marginTop: '1em',
  	  	marginLeft: '1em'
  	  },
  	  rightIcon: {
  	  	marginRight: '1em',
  	  	marginTop: '1em'
  	  },
  	  mapIcon: {
  	  	marginTop:'0.8em'
  	  }
  	}

    return (
    	<div>
	      <Toolbar style = {styles.toolbar} >
	      	<ToolbarGroup firstChild={true}>
	      		<Link to="/">
	      			<NavigationArrowBack style={styles.icon} color={'white'} />
      			</Link>
	      	</ToolbarGroup>

	      	<ToolbarGroup lastChild={true}>
		  			<ActionDashboard style={styles.rightIcon} color={'white'} onClick={()=>this.handleToggle()} />
	      	</ToolbarGroup>

	      </Toolbar>

	      <div>
		      <LeftNav width={185} openRight={true} open={this.state.open} >
		      	<AppBar
		      		iconElementLeft = {<NavigationArrowBack style={styles.mapIcon} color={'white'} />}
		      		title={<span style={styles.title}><center>返回</center></span>}
		      		onTitleTouchTap = {() => this.handleToggle()}
		      	/>
		      	<SignMap
		      		signs = {this.props.signs}
		      		show = {this.props.show}
		      	/>
	        </LeftNav>
        </div>
      </div>
    );
  }
}

ToolBar.propTypes = {
	show: React.PropTypes.func.isRequired,
	signs: React.PropTypes.arrayOf(React.PropTypes.object)
}

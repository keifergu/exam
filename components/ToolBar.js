import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

export default class ToolBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	const styles = {
  		toolbar: {
  			'backgroundColor': '#00bcd4' ,
  		}
  	}
    return (
      <Toolbar
      	style = {styles.toolbar}
      >
      	<ToolbarGroup>
      		<ToolbarTitle text="Exam"/>
      	</ToolbarGroup>
      </Toolbar>
    );
  }
}

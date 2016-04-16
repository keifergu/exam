import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class SignMap extends React.Component {

  constructor(props) {
    super(props);
  }

  handleShow(index) {
    this.props.show(index);
  }

  render() {
  	var map = this.props.signs.map((sign,index) => (
  		<RaisedButton
  			key = {index}
  			label={index+1}
  			onClick={() => this.handleShow(index)}
  			secondary={sign.mark?true:false} 
  			primary = {sign.mark?false:(sign.answer[0]!=undefined?true:false)}
  		/>
		));
    return (
      <div>
      	<br />
      	{map}
      </div>
    );
  }
}

SignMap.propTypes = {
	show: React.PropTypes.func.isRequired,
	signs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}
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
  	console.log(this.props);
  	var map = this.props.signs.map((sign,index) => (
  		<RaisedButton
  			key = {index}
  			label={index+1}
  			onClick={() => this.handleShow(index)}
  			secondary={sign.mark?true:false} 
  			primary = {sign.mark?false:(sign.answer?true:false)}
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

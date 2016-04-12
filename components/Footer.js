import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  handleNext() {
    var index = this.props.index;
    this.props.show(index+1);
  }

  handleLast() {
    var index = this.props.index;
    this.props.show(index-1);
  }

  handleMark() {
    var index = this.props.index;
    this.props.mark(index);
  }
  
  render() {
  	return (
  		<div>
        <RaisedButton
          label = '上一题'
          primary
          onClick={()=>{this.handleLast()}} 
        /> 
        <RaisedButton
          primary
          label = '下一题'
          onClick={()=>{this.handleNext()}} 
        />
        <RaisedButton
          secondary
          label = '标记'
          onClick={()=>{this.handleMark()}} 
        />
		  </div>
  	);
  }
}

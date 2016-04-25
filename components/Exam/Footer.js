import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import Snackbar from 'material-ui/lib/snackbar'
import Toolbar from 'material-ui/lib/toolbar/toolbar';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      snackbar:false,
      message :''
    }
  }

  handleNext() {
    var index = this.props.index
    var length = this.props.length
    if(index+1 < length) {
      this.props.show(index+1)
    } else {
      this.handleTouchTap("已经是最后一题")
    } 
  }

  handleLast() {
    var index = this.props.index;
    if (index>0) {
      this.props.show(index-1);
    }
  }

  handleMark() {
    var index = this.props.index;
    this.props.mark(index);
    this.handleTouchTap("标记成功")
  }
  
  handleTouchTap(message) {
    this.setState({
      snackbar: true,
      message
    });
  };

  handleRequestClose() {
    this.setState({
      snackbar: false,
    });
  };

  render() {
    const styles = {
      footer: {
        position: 'absolute',
        bottom: '3em',
        left:0,
        right:0,
        margin:'auto',
      }
    }
  	return (
  		<div style={styles.footer}>
      <center>
        <RaisedButton
          label = '上一题'
          primary
          onClick={()=>{this.handleLast()}} 
        />
        <RaisedButton
          primary
          label = '交卷'
        />
        <RaisedButton
          secondary
          label = {this.props.isMark?"取消标记":"标记"}
          onClick={()=>{this.handleMark()}} 
        />
        <RaisedButton
          primary
          label = '下一题'
          onClick={()=>{this.handleNext()}} 
        />
        <Snackbar
          open={this.state.snackbar}
          message= {this.state.message}
          autoHideDuration={2000}
          onRequestClose={()=>this.handleRequestClose()}
        />
      </center>
		  </div>
  	);
  }
}

Footer.propTypes ={
  index : React.PropTypes.number.isRequired,
  show: React.PropTypes.func.isRequired,
  mark: React.PropTypes.func.isRequired,
  length: React.PropTypes.number.isRequired
}
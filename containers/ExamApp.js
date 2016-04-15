import React from 'react';
import { connect } from 'react-redux';
import 
	{showQues ,markQues , 
	completeRadioQues,completeCheckQues ,
	fetchPaper
} from '../actions/exam';
import ToolBar from '../components/ToolBar';
import OptionList from '../components/OptionList';
import Footer from '../components/Footer';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function mapStateToProps(state) {
  return {
  	questions : state.questions,
  	index     : state.index,
  	signs     : state.questions.map((question, index)=>({
  		index : index,
  		mark  : question.mark,
  		answer: question.answer || []
  	}))
  };
}

export class ExamApp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  	this.props.dispatch(fetchPaper(111))
  }

  render() {
  	const { dispatch , index} = this.props;
    return (
      <div>
      	<ToolBar 
	      	signs = {this.props.signs}
      		show = {(id) =>
      			dispatch( showQues(id) )}
      	/>
      	<br />
      	<OptionList
      		index= {index}
      		{...this.props.questions[index]}
      		completeRadio = {(index,answer) =>
      			dispatch( completeRadioQues(index,answer) )}
      		completeCheck = {(index,answer) =>
      			dispatch( completeCheckQues(index,answer) )}
      	/>
      	<br />
      	<Footer
      		index= {index}
      		show = {(id) =>
      			dispatch( showQues(id) )}
      		mark = {(id) =>
      			dispatch( markQues(id) )}
      	/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ExamApp)

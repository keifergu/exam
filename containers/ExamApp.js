import React from 'react'
import { connect } from 'react-redux'
import
	{showQues ,markQues ,
	completeRadioQues,completeCheckQues ,
	fetchPaper
} from '../actions/exam'
import ToolBar from '../components/Exam/ToolBar'
import OptionList from '../components/Exam/OptionList'
import Footer from '../components/Exam/Footer'

function mapStateToProps(state) {
  return {
  	questions : state.questions,
  	index     : state.index,
  	signs     : state.questions.map((question, index)=>({
  		index : index,
  		mark  : question.mark || false,
  		answer: question.answer || []
  	})) || [],
  	footerInfo: {
	  	length : state.questions.length,
	  	// isMark : state.questions[state.index].mark || false
  	}
  };
}

export class ExamApp extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  	this.props.dispatch(fetchPaper(111))
  }

  render() {
  	const { dispatch , index} = this.props
    return (
      <div>
      	<ToolBar
	      	signs = {this.props.signs}
      		show = {(id) =>
      			dispatch( showQues(id) )}
      	/>
      	<br />
      	{this.props.questions.length == 0?
      		<div onClick = {()=>this.props.dispatch(fetchPaper(111))}>
      			<p>加载中...</p>
      		</div>
      		:
      		<div>
	      		<OptionList
	      			index= {index}
	      			questions = {this.props.questions}
	      			completeRadio = {(index,answer) =>
	      				dispatch( completeRadioQues(index,answer) )}
	      			completeCheck = {(index,answer) =>
	      				dispatch( completeCheckQues(index,answer) )}
	      		/>
	      		<br />
	      	</div>
      	}
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ExamApp)

ExamApp.propTypes = {
	questions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	index: React.PropTypes.number.isRequired,

}

import React from 'react'
import { connect } from 'react-redux'
import {
  fetchExamList
} from '../actions/exam'

function mapStateToProps(state) {
  return {
    examList:state.user.exam || []
  };
}

export class ExamList extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchExamList(123))
  }

  render() {
    const { dispatch , index} = this.props
    return(
      <div>
        {this.props.examList.map(item =>
          <p>{item.testName}</p>
        )}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(ExamList)

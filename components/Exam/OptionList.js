import React from 'react';
import CheckQuestion from './CheckQuestion'
import RadioQuestion from './RadioQuestion'

export default class OptionList extends React.Component {

  constructor(props) {
    super(props)
  }

  handleCompleteCheck(answer) {
    var index = this.props.index
    /*var iterator = 0;
    while(!this.refs['option-'+iterator].checked) {
      iterator++;
    }
    var answer = this.refs['option-'+iterator].value;*/
    this.props.completeCheck(index, answer.toString())
  }

  handleCompleteRadio(answer) {
    var index = this.props.index
    this.props.completeRadio(index, [answer.toString()])
  }

  render() {
    const numMap = {0:'A',1:'B',2:'C',3:'D',
                  4:'E',5:'F',6:'G',7:'H'}

    //获得当前题目的answer,再将map中该answer位置的值设置为true
    var checkedMap= []
    if(this.props.answer instanceof Array) {
      this.props.answer.forEach((item) => (
        checkedMap[item] = true
      ))
    }

    var optionProps = []
    if (this.props.options instanceof Array) {
      var optionProps = this.props.options.map(
        (option, index) => ({
              key     : index,
              label   : numMap[index]+'. '+option,
              checked : checkedMap[index],             //根据当前元素index,从map中获取值
              value   : index.toString()
        })
      )
    }

    //  不同组件之间的切换没有动画,同一组件有动画
    /*var OptionList = function(){
    switch(this.props.type) {
      case '102':
        return (
          optionProps.map(
            (item, index) => (
              <Checkbox
                {...item}
                onClick = {() => this.handleCompleteCheck(index)}
              />
          ))
        )

      default:
        return (optionProps.map(
          (item, index) => (
            <RadioButton
              {...item}
              onClick = {() => this.handleCompleteRadio(index)}
            />
          ))
        )
    }}.bind(this)()*/

    return (
      <div>
        {this.props.questions.map((item, key) =>
          <div key={key}>
            {item.type=='101'?
              <RadioQuestion {...item} />
              :
              <CheckQuestion {...item} />
            }
            <br />
          </div>
        )}
      </div>
    )
  }
}

OptionList.propTypes = {
  index: React.PropTypes.number.isRequired,
  //type : React.PropTypes.oneOf(['101', '102', '103']).isRequired
}

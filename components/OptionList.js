import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

export default class OptionList extends React.Component {

  constructor(props) {
    super(props);
  }

  handleCompleteCheck(answer) {
    var index = this.props.index;
    /*var iterator = 0;
    while(!this.refs['option-'+iterator].checked) {
      iterator++;
    }
    var answer = this.refs['option-'+iterator].value;*/
    this.props.completeCheck(index, answer);
  }

  handleCompleteRadio(answer) {
    var index = this.props.index;
    this.props.completeRadio(index, answer);
  }

  render() {

    var numMap = {0:'A',1:'B',2:'C',3:'D',
                  4:'E',5:'F',6:'G',7:'H'};
    //获得当前题目的answer,再将map中该answer位置的值设置为true
    var checkedMap= [];
    if(this.props.answer) {
      this.props.answer.forEach((item) => (
        checkedMap[item] = true
      ))
    }

    var optionProps = this.props.options.map(
      (option, index) => ({
            key     : index,
            label   : numMap[index]+option,
            checked : checkedMap[index],             //根据当前元素index,从map中获取值
      })
    );
    
    //  使用此方法渲染的组件没有动画效果,原因不详
    var OptionList;
    switch(this.props.type) {
      case '102':
        OptionList = optionProps.map(
          (item, index) => (
            <Checkbox
              {...item}
              onClick = {() => this.handleCompleteCheck(index)}
            />
          )
        );
        break;

      default:
        OptionList = optionProps.map(
          (item, index) => (
            <RadioButton
              {...item}
              onClick = {() => this.handleCompleteRadio(index)}
            />
          )
        );
        break;
    }

    return (
      <div>
      	{this.props.index+1+' . '+this.props.title}
        {OptionList}
      </div>
    );
  }
}

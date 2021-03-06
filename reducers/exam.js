import
	{ SHOW_QUES , COMPLETE_RADIO_QUES,
		COMPLETE_CHECK_QUES , MARK_QUES ,
		Filters , SET_FILTER, RECEIVE_POSTS,
		FETCH_EXAM_LIST,FETCH_EXAM_LIST_SUCCESS
} from '../actions/exam'
import { combineReducers } from 'redux';
const { SHOW_ALL } = Filters;

function questions(state = [], action) {
	switch (action.type) {
		case COMPLETE_RADIO_QUES:
			//var oldAnswer = state[action.index].answer || [];
			//var answer = oldAnswer[0]===action.answer?[]:[action.answer];
			return [
				...state.slice(0,action.index),
				Object.assign({}, state[action.index], {
					answer:action.answer
				}),
				...state.slice(action.index+1)
			];

		case COMPLETE_CHECK_QUES:

			//从state中获得当前的answer,不存在则初始化为数组
			var oldAnswer = state[action.index].answer || [];

			//在当前的answer里面查询是否有action传进来的answer值
			var answerIndex = oldAnswer.indexOf(action.answer);

			if(answerIndex == -1) {
				//-1 表示没有,则将action传进来的answer添加进state的answer里面
				oldAnswer.push(action.answer);
			} else {
				//如果找到了,则将state里面这个一样的值删除.
				//这里的意思是第二次传进来相同的值表示取消该选项
				oldAnswer.splice(answerIndex,1);
			}

			return [
				...state.slice(0,action.index),
				Object.assign({}, state[action.index], {
					answer:oldAnswer
				}),
				...state.slice(action.index+1)
			];

		case MARK_QUES:
			return [
				...state.slice(0,action.index),
				Object.assign({}, state[action.index], {
					mark: !state[action.index].mark
				}),
				...state.slice(action.index+1)
			];
		case RECEIVE_POSTS:
			console.log(action);
			return action.questions;
		default :
				return state;
	}
}

function filter(state = SHOW_ALL , action) {
	switch(action.type) {
		case SET_FILTER:
			return action.filter;
		default :
			return state;
	}
}

function show_question(state = 0 , action) {
	switch(action.type) {
		case SHOW_QUES:
			return action.index;
		default :
			return state;
	}
}
/*
function examApp(state = {}, action) {
	return {
		filter: filter(state.filter, action),
		questions: questions(state.questions, action)
	}
}
*/
function user(state = [], action) {
	switch (action.type) {
		case FETCH_EXAM_LIST_SUCCESS:
			return action.list;
			break;
		default:
			return state;
	}
}
const examApp = combineReducers({
	filter,
	questions,
	index: show_question,
	user
})

export default examApp;

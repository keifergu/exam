//import fetch from 'isomorphic-fetch'
/******************************************************************
	action 变量名
*/

//试卷操作action
export const SHOW_QUES = 'SHOW_QUESTION'
export const COMPLETE_RADIO_QUES = 'COMPLETE_RADIO_QUESTION'
export const COMPLETE_CHECK_QUES = 'COMPLETE_CHECKBOX_QUESTION'
export const MARK_QUES = 'MARK_QUESTION'

//试卷signMap操作action
export const SET_FILTER = 'SET_FILTER'


//sigmMap的过滤选项
export const Filters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_MARK: 'SHOW_MARK'
}

//试卷网络请求action
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const FETCH_PAPER = 'FETCH_PAPER'
export const FETCH_PAPER_SUCCESS = 'FETCH_PAPER_SUCCESS'
export const FETCH_PAPER_ERROR = 'FETCH_PAPER_ERROR'

//用户试卷列表请求action
export const FETCH_EXAM_LIST = 'FETCH_EXAM_LIST'
export const FETCH_EXAM_LIST_SUCCESS = 'FETCH_EXAM_LIST_SUCCESS'
export const FETCH_EXAM_LIST_ERROR = 'FETCH_EXAM_LIST_ERROR'

/**********************************************************/


/**
 * @param  {number} 表示需要显示的题目编号
 * @return {action}
 */
export function showQues(index) {
	return {
		type: SHOW_QUES,
		index
	};
}

/**
 * 完成单选题目的action
 * @param  {number} index  所完成题目的序号,id
 * @param  {array } answer 答案
 * @return {action}
 */
export function completeRadioQues(index, answer) {
	return {
		type: COMPLETE_RADIO_QUES,
		index,
		answer
	}
}

/**
 * 完成多选题目的action
 * @param  {number} index  所完成题目的序号
 * @param  {array } answer  多选题目的答案,每次点击都会触发,传递当前状态下的多选答案
 * @return {action}
 */
export function completeCheckQues(index, answer) {
	return {
		type: COMPLETE_CHECK_QUES,
		index,
		answer
	}
}

/**
 * 对题目进行标记的action
 * @param  {number} index 表示题目的序号
 * @return {action}
 */
export function markQues(index) {
	return {
		type: MARK_QUES,
		index
	}
}

/**
 * 设置过滤选项的action
 * @param {string} filter 常量Filter中的数据之一,表示signMap显示的方式
 */
export function setFilter(filter) {
	return {
		type: SET_FILTER,
		filter
	}
}

/**
 * 设置获取试卷内容的action
 * @param  {string} paper_id 所需获取试卷的id
 * @return {action}
 */
export function fetchPaper(paper_id) {
	return dispatch => {
		return fetch('public/paper.json')
			.then(response => response.json())
			.then(json => dispatch(receivePosts(paper_id, json)))
	}
}

/**
 * 成功从服务器获取到试卷
 * @param  {string} paper_id 试卷编号
 * @return {action}
 */
export function fetchPaperSuccess(paper_id) {
	return {
		type:FETCH_PAPER_SUCCESS,
		paper_id
	}
}

/**
 * 从服务器获取试卷失败
 * @param  {string} paper_id 试卷编号
 * @return {action}
 */
export function fetchPaperError(paper_id,error) {
	return {
		type: FETCH_PAPER_ERROR,
		paper_id,
		error
	}
}

/**
 * 接受试卷成功后进行处理的action
 * @param  {string} paper_id 试卷编号
 * @param  {json} json       试卷内容的json数据
 * @return {action}
 */
export function receivePosts(paper_id,json) {
	return {
		type: RECEIVE_POSTS,
		paper_id,
		questions:json.question,
		info:json.info
	}
}

/**
 * 获取应该要考试的试卷列表
 * @param  {string} student_id 学生的id
 * @return {action}
 */
export function fetchExamList(student_id) {
	return dispatch => {
		return fetch(
			//'/thinkphpcms/index.php?m=&c=user&a=index',{mode:'no-cors'})
			'public/user.json')
			.then(response => {
				if(response.headers.get("content-type") === "application/json") {
					return response.json().then(json => {
						console.log(json);
						dispatch(fetchExamListSuccess(student_id, json))
					});
				} else {
					console.log(response.text());
					console.log("Oops, we haven't got JSON!");
				}
			})
			.catch(function(error) {
  			console.log('There has been a problem with your fetch operation: ' + error.message);
			});
	}
}

export function fetchExamListSuccess(student_id, list) {
	return {
		type: FETCH_EXAM_LIST_SUCCESS,
		list
	}
}

/*********************************************************
	action 变量名
 */
export const SHOW_QUES = 'SHOW_QUESTION';
export const COMPLETE_RADIO_QUES = 'COMPLETE_RADIO_QUESTION';
export const COMPLETE_CHECK_QUES = 'COMPLETE_CHECKBOX_QUESTION'
export const MARK_QUES = 'MARK_QUESTION';
export const SET_FILTER = 'SET_FILTER';

/**
 * sigmMap的过滤选项
 * @type {Object}
 */
export const Filters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_MARK: 'SHOW_MARK'
}

/**********************************************************


/**
 * @param  {number} 表示需要显示的题目编号
 * @return {action} 返回一个action
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
 * @param  {string} answer 答案
 * @return {action}        返回一个该action
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
 * @param  {string} answer  多选题目的答案,每次点击都会触发,只传该选项
 * @return {action}        返回该action
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
 * @return {action}       返回该action
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
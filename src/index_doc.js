import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

/**
 * reducer方法, 传入的参数有两个
 * state: 当前的state
 * action: 当前触发的行为
 * 返回值: 新的state
 */
let reducer = (state, action) => {
  switch (action.type) {
    case 'add_todo':
      return state.concat(action.text);
    default:
      return state;  
  }
}
/**
 * 创建store, 传入两个参数
 * 参数1: reducer 用来修改state
 * 参数2(可选): [], 默认的state值, 如果不传, 则为undefined
 */
let store = createStore(reducer, []);

//通过store.getState()可以获取当前store的状态.
//默认值为createStore传入的第二个参数
console.log('state is:' + store.getState());

//通过store.dispatch(action) 来达到修改 state 的目的
//注意: 在redux里,唯一能够修改state的方法, 就是通过store.dispatch(action)
store.dispatch({type: 'add_todo', text: '读书'});

//打印出修改后的state
console.log('state is:' + store.getState());

store.dispatch({type: 'add_todo', text: '跑步'});
console.log('state is:' + store.getState());
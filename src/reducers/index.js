import * as types from "../actions/ActionTypes";
/* 
리듀서는 액션의 type에 따라 변화를 일으키는 함수입니다.
리듀서를 작성할 때는 최초 변화를 일으키기 전 가지고 있어야 할 초기 상태를 정의해야 합니다.
*/

const initialState = {
  token: 0,
};

/*
리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다.
state가 undefined일 때(스토어가 생성될 때) state 기본 값을 initialState로 사용합니다.
action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
이때 주의할 점은 state를 직접 수정하면 안 되고,
기존 상태 값에 원하는 값을 덮어 쓴 새로운 객체를 만들어서 반환해야 합니다.
*/

function userInfo(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default userInfo;

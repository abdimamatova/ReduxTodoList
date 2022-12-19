import { BASE_URL } from "../../App";

export function postTodo(todo) {
  return async (dispatch) => {
    const respons = await fetch(`${BASE_URL}todos.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const result = await respons.json();
    dispatch({
      type: "ADD_TODO",
      payload: { ...todo, id: result.name },
    });
  };
}

export const getTodos = () => {
  return async (dispatch) => {
    const respons = await fetch(`${BASE_URL}todos.json`);
    const result = await respons.json();
    const transformedResult = Object.keys(result).reduce((acc, key) => {
      return [...acc, { id: key, ...result[key] }];
    }, []);
    dispatch({
      type: "GET_TODOS",
      payload: transformedResult,
    });
  };
};

export const deleteTodos = (id) => {
  return async (dispatch) => {
    const respons = await fetch(`${BASE_URL}todos/${id}.json`, {
      method: 'DELETE',
    });
    const result= await respons.json()
    console.log(result);
    dispatch(getTodos())
  };

};


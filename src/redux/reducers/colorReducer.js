import CST from '../actions/constants';
const INIT_STATE = {
  colors: [
    {
      "id": "1",
      "name": "white",
      "code": "#FFFFFF"
    },
    {
      "id": "2",
      "name": "black",
      "code": "#000000"
    },
    {
      "id": "3",
      "name": "red",
      "code": "#FF0000"
    },
    {
      "id": "4",
      "name": "green",
      "code": "#00FF00"
    },
  ],
  sort: "SORT_BY_ID"
}
export const colorReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CST.ADD_COLOR:
      return {
        ...state,
        colors: [
          ...state.colors,
          {
            "id": action.id,
            "name": action.name,
            "code": action.code,
          }
        ]
      };
    case CST.RATE_COLOR:
        return{
          
        };
  }
}  
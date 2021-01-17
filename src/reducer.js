export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDl_8tXHkbD49b7TeLs021HHpyEyUm6qjVSMJV2Imn4SsPoIsrR5KbJr5vt69VyXnBwhDrUFVUrT_mHiSS1NjUYlg6Tg75u-7BE9Co9lwxms6hfNh2fo9tp6e_IQmNZ09B2ppiIt7bh_vRDe1WplzMhZQCRnME6UI8K51JihVeLHQe4",
};

const reducer = (state, action) => {
  // console.log("Action >----->", action);
  // action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;

import _ from "lodash";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "questions":
      payload?.forEach((element) => {
        element?.options.forEach((item) => {
          item.checked = false;
        });
      });
      return payload;
    case "answer":
      const answer = _.cloneDeep(state);
      answer[payload.youtubeID].options[payload.optionIndex].checked = true;
      return answer;

    default:
      return state;
  }
};

export default reducer;

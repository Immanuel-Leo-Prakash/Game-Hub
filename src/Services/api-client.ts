import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fba84eef4380412c8cba94ba23494c61",
  },
});

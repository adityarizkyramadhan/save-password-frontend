import axios from "axios";

export default axios.create({
  baseURL: "https://adityaariizkypassword.herokuapp.com",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

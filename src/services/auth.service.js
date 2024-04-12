import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "https://fakestoreapi.com/auth/login";

export const login = (data, callback) => {
  axios
    .post(API_URL, data)
    .then((res) => {
      callback(true,res.data.token)
    })
    .catch((err) => callback(false, err));
};

export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    return decoded.user
}

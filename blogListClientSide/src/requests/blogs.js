import axios from "axios";
const URL = "/api/blog_list";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(URL);
  return request.data;
};

const createBlog = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(URL, newObject, config);
  return response.data;
};

const deleteBlog = (id) => {
  const config = {
    headers: { Authorization: token },
  };
  console.log("delete", id, config);
  const request = axios.delete(`${URL}/${id}`, config);
  return request.then((response) => response.data);
};

const updateLikes = (id) => {
  const request = axios.post(`${URL}/${id}/like`);
  return request.then((response) => response.data);
};

const updateBlog = (id, blog) => {
  const request = axios.put(`${URL}/${id}`, blog);
  return request.then((response) => response.data);
};

export default {
  getAll,
  setToken,
  createBlog,
  deleteBlog,
  updateLikes,
  updateBlog,
};

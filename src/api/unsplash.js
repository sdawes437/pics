import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID OSKzhPt51uczPA8aesUcJCKl-0Us-o-xQQ_adfBM76A",
  },
});

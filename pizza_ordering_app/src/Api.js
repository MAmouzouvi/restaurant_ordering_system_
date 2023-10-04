import axios from "axios";
const read = process.env.BUTTER_READ_TOKEN;
 
export const HandleFetch = async () => {
 const url = `https://api.buttercms.com/v2/content/butter_pizza/?auth_token=17e672a98818a19afb1fbfaa7803d17266bee1cd`;
 return axios.get(url).then((res) => {
   return res.data.data.butter_pizza;
 });
};

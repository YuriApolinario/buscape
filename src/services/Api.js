import axios from 'axios';


//const Api = axios.create({ baseURL:'https://rocketseat-node.herokuapp.com/api' });
const Api = axios.get('./data.json');

export default Api;
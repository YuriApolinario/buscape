import axios from 'axios';


//const Api = axios.create({ baseURL:'https://rocketseat-node.herokuapp.com/api' });
const Api = axios.create({baseURL: 'https://localhost:3000/items'});

export default Api;
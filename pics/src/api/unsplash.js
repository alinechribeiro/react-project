//related to configuration of axios or
// getting on unsplash to accept our request
import axios from 'axios';

export default axios.create({
    //create a instance of axios with props
    baseURL: 'https://api.unsplash.com', //property for this object
    headers: {
        Authorization: 
            'Client-ID ATdNSqmlFDd3ZCpfnekkjkJ5bwn6Aa4u454SWpjVFAw'
    }
});


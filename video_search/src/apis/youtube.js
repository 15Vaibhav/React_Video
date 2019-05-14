import axios from 'axios'
const KEY= "AIzaSyCpD6CKj_yNkt4kpFEvaJrAoQYaPs0WuXE";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
     part:"snippet",
     maxResult:5,
     key:KEY
    }

})


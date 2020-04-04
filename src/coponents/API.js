import axios from "axios";
const url = 'https://randomuser.me/api/?results=10';

export default {
    ApiSearch: function() {
        console.log(url)
        return axios.get(url)
    }
}
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
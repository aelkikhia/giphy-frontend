import axios from 'axios'

// TODO: move to config file that can be injected at runtime
const KEY = "g18Ik9ci8NgkVAjZoRfIyqN90tpjZE9k";

export default axios.create({
    baseURL: "https://api.giphy.com/v1/",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
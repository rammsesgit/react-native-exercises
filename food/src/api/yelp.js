import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization:
      'Bearer 6iEmrMmXM9SUcqGj0TVzXcKB4M8CZzwa7ZbRS41dNTjKZ2nODybuOthz10izO99klNLdOqDLk6YEHI3N_P6r6fdiPUTqwTjgUKqGfjU98zaIokhDNmsxez8ULs4bXnYx'
  }
})

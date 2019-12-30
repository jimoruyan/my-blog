import axios from 'axios'

const instance = axios.create({
  // baseURL:"https://wd8910585934yneopr.wilddogio.com"
  baseURL:"https://my-blog-c0559.firebaseio.com/n"

})

// instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance
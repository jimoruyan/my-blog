import axios from 'axios'

const instance = axios.create({
  baseURL:"https://wd8910585934yneopr.wilddogio.com"
})

// instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

const getAll = () => {
    const request = axios.get(`${baseUrl}/persons`)
    return request.then(response => response.data)
  }
  
  const create = newObject => {
    const request = axios.post(`${baseUrl}/persons`, newObject)
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/person/${id}`, newObject)
    return request.then(response => response.data)
  }

  const remove = (id) => {
    const request = axios.delete(`${baseUrl}/person/${id}`)
    return request.then(response => response.data)
  }

export default { 
  getAll, 
  create, 
  update,
  remove
}
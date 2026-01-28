import Http from '~~/utils/http'

export default new class Home extends Http {
  add = (data) => {
    // return this.get(`/admin-api/system/tenant/get-id-by-name?name=${name}` )
    return this.post({url:'/add', data} )
  }
  delete = (data) => {
    // return this.get(`/admin-api/system/tenant/get-id-by-name?name=${name}` )
    return this.post({url:'/delete', data} )
  }
  update = (data) => {
    // return this.get(`/admin-api/system/tenant/get-id-by-name?name=${name}` )
    return this.post({url:'/update', data} )
  }
  getData = () => {
    // return this.get(`/admin-api/system/tenant/get-id-by-name?name=${name}` )
    console.log('getData')
    return this.get({url:'/get-data'} )
  }
  getDataById = (data) => {
    // return this.get(`/admin-api/system/tenant/get-id-by-name?name=${name}` )
    return this.get({url:'/get-data-by-id', data} )
  }
  saveJson = (data) => {
    // return this.get(`/admin-api/system/tenant/get-id-by-name?name=${name}` )
    return this.uploadJson({url:'/save-json', data} )
  }
  download = (data) => {
    // return this.get(`/admin-api/system/tenant/get-id-by-name?name=${name}` )
    return this.get({url:'/download', data} )
  }
}



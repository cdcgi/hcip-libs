import { notification } from 'antd'
import { LocalStorage } from 'hcip-libs-tmp'

const catchError = e => {
  if (e.code == 16) {
    notification.error({message: 'token expired, please re login'})
    LocalStorage.clearStorage()
    window.location.assign(HOST_URL+'/login')
  } else {
    notification.error({message: e.message})
  }
}

export default catchError
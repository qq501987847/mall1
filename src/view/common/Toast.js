import Toast from './Toast.vue'
import Vue from 'vue'
const ToastConstructor = Vue.extend(Toast)

function showToast(message = "很抱歉,暂无链接",type="normal",duration = 2000) {
  const _toast = new ToastConstructor({
    data() {
      return {
        showToast: true,
        type: type,
        message: message,
        duration: duration
      }
    }
  })

  let element = _toast.$mount().$el
  document.body.appendChild(element)

  setTimeout(()=> {
    _toast.showToast = false
    // document.body.removeChild(element)
  }, duration)
}

showToast.install = (Vue) => {
  Vue.prototype.$toast = showToast
}

export default showToast
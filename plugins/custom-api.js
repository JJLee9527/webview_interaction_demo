export default (context, inject) => {
  const setupWKWebViewJavascriptBridge = (callback) => {
    if (window.WKWebViewJavascriptBridge) {
      return callback(window.WKWebViewJavascriptBridge)
    }
    if (window.WKWVJBCallbacks) {
      return window.WKWVJBCallbacks.push(callback)
    }
    window.WKWVJBCallbacks = [callback]
    window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null)
  }

  const getCurrentOS = () => {
    let systemOS = ''
    switch (true) {
      case /iPhone|iPad|iPod/i.test(window.navigator.userAgent):
        context.store.commit('setCurrentOS', 'iOS')
        systemOS = 'iOS'
        break
      case /Android/i.test(window.navigator.userAgent):
        context.store.commit('setCurrentOS', 'Android')
        systemOS = 'Android'
        break
      default:
        context.store.commit('setCurrentOS', 'others')
        systemOS = 'others'
        break
    }
    return systemOS
  }

  const getPayload = () => {
    return new Promise((resolve, reject) => {
      const system = context.store.state.currentOS
      switch (true) {
        case system === 'iOS' && window.webkit !== undefined:
          setupWKWebViewJavascriptBridge((bridge) => {
            bridge.callHandler('getPayload', '', (payload) => {
              resolve(() => {
                return payload
              })
            })
          })
          break
        case system === 'Android' && window.pxpayWeb !== undefined:
          window.pxpayWeb.getPayload((payload) => {
            resolve(() => {
              return payload
            })
          })
          break
        default:
          resolve(() => {
            return '非手機平台，無資料'
          })
          break
      }
    })
  }

  const getLocation = () => {
    const system = context.store.state.currentOS
    switch (true) {
      case system === 'iOS':
        setupWKWebViewJavascriptBridge((bridge) => {
          bridge.callHandler('getLocation', null)
        })
        break
      case system === 'Android' && window.pxpayWeb !== undefined :
        window.pxpayWeb.getLocation()
        break
      default:
        alert('非手機環境，無功能')
        break
    }
  }

  const putLocation = () => {
    const system = context.store.state.currentOS
    switch (true) {
      case system === 'iOS':
        setupWKWebViewJavascriptBridge((bridge) => {
          bridge.callHandler('putLocation', null, (response) => {
            const payload = { lat: response.latitude, lng: response.longitude }
            context.store.commit('setCurrentLocation', payload)
          })
        })
        break
      case system === 'Android' && window.pxpayWeb !== undefined:
        window.pxpayWeb.putLocation((response) => {
          const payload = { lat: response.latitude, lng: response.longitude }
          context.store.commit('setCurrentLocation', payload)
        })
        break
      default:
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const payload = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            context.store.commit('setCurrentLocation', payload)
          })
        }
        break
    }
  }

  const startPayment = () => {
    const system = context.store.state.currentOS
    switch (true) {
      case system === 'iOS':
        setupWKWebViewJavascriptBridge((bridge) => {
          bridge.callHandler('startPayment', null, (response) => {
            console.log(response)
          })
        })
        break
      case system === 'Android' && window.pxpayWeb:
        window.pxpayWeb.startPayment((response) => {
          console.log(response)
        })
        break
      default:
        alert('非手機環境，無法執行')
        break
    }
  }

  const closeWebView = () => {
    const system = context.store.state.currentOS
    switch (true) {
      case system === 'iOS':
        setupWKWebViewJavascriptBridge((bridge) => {
          bridge.callHandler('closeWebView', null)
        })
        break
      case system === 'Android' && window.pxpayWeb !== undefined:
        window.pxpayWeb.closeWebView()
        break
      default:
        alert('非手機環境，無法關閉Webview')
        break
    }
  }

  const shareMessage = (message) => {
    const system = context.store.state.currentOS
    switch (true) {
      case system === 'iOS':
        setupWKWebViewJavascriptBridge((bridge) => {
          bridge.callHandler('shareMessage', message)
        })
        break
      case system === 'Android' && window.pxpayWeb !== undefined:
        window.pxpayWeb.shareMessage(message)
        break
      default:
        navigator.share(message)
        break
    }
  }

  inject('getCurrentOS', getCurrentOS)
  inject('getLocation', getLocation)
  inject('putLocation', putLocation)
  inject('startPayment', startPayment)
  inject('getPayload', getPayload)
  inject('closeWebView', closeWebView)
  inject('shareMessage', shareMessage)
}

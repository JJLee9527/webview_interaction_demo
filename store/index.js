export const state = () => ({
  stagedPageUrl: '',
  showAlert: false,
  alertMessage: '',
  pageTitle: '',
  navbarRight: '',
  navbarLeft: '',
  navbarBack: undefined,
  showBack: true,
  backHome: false,
  currentOS: '',
  currentLocation: {},
})

export const mutations = {
  toggleShowAlert(state, boolean) {
    switch (true) {
      case typeof boolean === 'boolean':
        state.showAlert = boolean
        break
      default:
        state.showAlert = false
    }
  },
  addAlertMessage(state, message) {
    state.alertMessage = message
  },

  // 設定導覽條內容
  setPageTitle(state, title) {
    state.pageTitle = title
  },
  setNavbarLeft(state, payload = null) {
    switch (true) {
      case payload === null || payload === undefined:
        state.navbarLeft = null
        break
      default:
        state.navbarLeft = {
          icon: payload.icon || undefined,
          url: payload.url || undefined,
        }
        break
    }
  },
  setNavbarRight(state, payload) {
    switch (true) {
      case payload === null || payload === undefined:
        state.navbarRight = null
        break
      default:
        state.navbarRight = {
          icon: payload.icon ? payload.icon : undefined,
          url: payload.url ? payload.url : undefined,
        }
        break
    }
  },
  setNavbarBack(state, payload) {
    state.navbarBack = payload
  },
  setShowBack(state, payload) {
    state.showBack = payload
  },
  setNavbarShowBack(state, boolean = true) {
    state.showBack = boolean
  },
  setNavbarBackHome(state, boolean = false) {
    state.backHome = boolean
  },

  // 設定系統內容
  setCurrentOS(state, OS) {
    state.currentOS = OS
  },
  setCurrentLocation(state, payload) {
    state.currentLocation = payload
  },
}

export const actions = {}

export const getters = {}

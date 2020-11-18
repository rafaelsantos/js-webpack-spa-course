import initSave from "./components/save/component-save";
import initTable from "./components/list/customers";
import initEdit from "./components/update/form-edit"

const routes = {
    "/": initTable,
    "/save": initSave,
    "/edit": initEdit
}

const rootDiv = document.querySelector('[data-container]')

const navigation = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname)

    rootDiv.innerHTML = ""
    const initRoute = routes[window.location.pathname]

    rootDiv.appendChild(initRoute())
}

window.navigation = navigation
window.onpopstate = () => {
    rootDiv.innerHTML = ""
    rootDiv.appendChild(routes[window.location.pathname]())
}

export { navigation }
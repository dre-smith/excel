import { $ } from '@core/DOM'

export class Router {
    constructor(selector, routes) {
        if (!selector) {
            throw new Error('Selector is not provided in Router')
        }

        this.$placeholder = $(selector)
        this.routes = routes

        this.changePageHandler = this.changePageHandler.bind(this)

        this.init()
    }

    init() {
        window.addEventListener('hashchanged', this.changePageHandler)
    }

    changePageHandler(event) {

    }

    destroy() {
        window.removeEventListener('hashchanged', this.changePageHandler)
    }
}
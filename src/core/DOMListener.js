import { capitalize } from "./utils"

export class DOMListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DOMListener!`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = capitalize(listener)

            this.$root.on(listener, () => { })
        })
    }

    removeDOMListeners() {

    }
}
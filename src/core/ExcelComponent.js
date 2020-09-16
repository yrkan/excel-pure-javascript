import {DOMListener} from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscibers = []

    this.prepare()
  }

  prepare() {}

  toHTML() {
    return ''
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscibers.push(unsub)
  }

  init() {
    this.initDOMLsteners()
  }

  destroy() {
    this.removeDOMListeners()
    this.unsubscibers.forEach(unsub => unsub())
  }
}

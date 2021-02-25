import Configurator from './Configurator.js'
import DOMHandler from './DOMHandler.js'

/**
 * VueCtxInjector - Main VCI class.
 * Serves as entrypoint for components management processes.
 * Also used for public API calls.
 */

export default class VueCtxInjector {
  _domHandler = null

  /**
   * Constructor starting components' initializations.
   *
   * @param  {Object} Vue - The user-provided Vue instance.
   * @param  {Object} opts - Configuration options (see README for details)..
   * @return {void}
   */
  constructor (Vue, opts) {
    const conf = new Configurator(Vue, opts)

    if (conf.isValid()) {
      this._domHandler = new DOMHandler(conf)
      this._initStdlComponents()
    }
  }

  /**
   * Loops through all HTML-based "standalone component" then mounts and
   * attaches them to the DOM. Also starts watching for props' values updates.
   *
   * @return {void}
   */
  _initStdlComponents () {
    const vciComps = this._domHandler.getParsedVCIComponents()
    for (const vciComp of vciComps) {
      vciComp.mount()
      vciComp.watch()
    }
  }

  // Public Methods ------------------------------------------------------------

  /**
   * Triggers the DOM parsing for standalone components.
   *
   * TODO:  This method simply calls the init method, so the already instantiated
   * components are processed again. Improve this part to avoid re-parsing
   * non-needed components.
   *
   * @return {void}
   */
  parse () {
    this._initStdlComponents()
  }
}

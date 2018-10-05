export const MyPlugin = {
  install: function(Vue, options) {
    Vue.directive('x-model', {
      inserted: function(el, binding, vnode) {
        el.value = binding.value
        const eventType = binding.arg ? binding.arg : 'input'

        el.addEventListener(eventType, (event) => {
          const xModel = new XModel(vnode, binding.expression)
          xModel.parse()
          const target = xModel.getTarget()
          const key = xModel.getKey()

          target[key] = event.target.value
          vnode.context.$store.commit('updateRoot', vnode.context.root)
        })
      }
    })
  }
}

class XModel {
  constructor(vnode, path) {
    this.component = vnode.context
    this.target = null
    this.key = ''
    this.path = path
    this.paths = []
  }

  parse() {
    this._parsePath()
    this._bindTarget()
    this._bindKey()
  }

  _parsePath() {
    this.paths = this.path.split('.')
  }

  _bindTarget() {
    if (this._isTargetComponent()) {
      this.target = this.component
    } else {
      this.target = _.get(this.component, this._createPath())
    }
  }

  _isTargetComponent() {
    return this.paths.length === 1
  }

  _createPath() {
    return _.take(this.paths, this.paths.length - 1, '.')
  }

  _bindKey() {
    this.key = _.last(this.paths)
  }

  getTarget() {
    return this.target
  }

  getKey() {
    return this.key
  }
}

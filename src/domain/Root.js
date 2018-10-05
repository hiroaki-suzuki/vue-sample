import AreaA from '@/domain/AreaA'
import AreaB from '@/domain/AreaB'

export default class Root {
  constructor() {
    this.areaA = new AreaA()
    this.areaB = new AreaB()
  }
}

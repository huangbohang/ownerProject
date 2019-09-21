/**
 * 基础工具类
 * */
class Untils {
  /**
     * @param {String} text -[抛出此错误]
     */
  error(text) {
    throw text
  }
  /**
     * 判断目标是不是一个对象
     * @param {?Object} [target = undefined] - [待检测的目标，可以为任意类型的值]
     * @return {boolean} 返回true或false
     */
  isObject(target) {
    return Object.prototype.toString.call(target) === '[object Object]'
  }
  /**
     * 判断目标是不是一个数组
     * @param {?Array} [target = undefined] - [待检测的目标，可以为任意类型的值]
     * @return {boolean} 返回true或false
     */
  isArray(target) {
    return Object.prototype.toString.call(target) === '[object Array]'
  }
  isNumber(target) {
    return typeof target === 'number'
  }
  isUndefined(target) {
    return target === undefined
  }
  isNull(target) {
    return target === null
  }
  isFun(fun) {
    return typeof fun === 'function'
  }
  isString(tar){
    return typeof tar === 'string'
  }
  trimSpace(target){
    if(!this.isString(target))this.error(`${target} need String,${typeof target} found in`)
    return target.replace(/(^\s*)|(\s*$)/g, '');
  }
  /** 返回min-max中随机整数值 */
  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }
  /** 随机颜色 */
  randomColor() {
    return 'rgb(' +
            this.random(0, 255) + ', ' +
      this.random(0, 255) + ', ' +
      this.random(0, 255) + ')'
  }

  /**
   *
   * @param {data} - {传入的数据}
   * @return {data} - {返回克隆数据}
   * */
  clone(object){
    let type = Object.prototype.toString.call(object)
    let newObj
    if(type === '[object Object]'|| type === '[object Array]'){
      newObj = type==='[object Object]'?{}:[]
      for(let key in object){
        if(object.hasOwnProperty(key)){
          newObj[key] = this.clone(object[key])
        }
      }
    }else{
      return object
    }
    return newObj
  }
}

export default new Untils()

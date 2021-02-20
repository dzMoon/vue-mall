import CryptoJS from 'crypto-js'
import md5 from 'js-md5'
import Configuration from '../configuration'

/* 处理请求字符串 */
export const parseQueryString = url => {
    var items = url.split('&')
    var result = {}
    for (var i = 0, len = items.length; i < len; i++) {
        var obj = items[i]
        var startIndex = obj.indexOf('=')
        var key = obj.substring(0, startIndex)
        var value = obj.substring(startIndex + 1)
        result[key] = value
    }
    return result
}

/* 统一登录方法转换
 * @bizcode，业务接口编码
 * @param，sso登录相关参数
 */

export const ssoSignFunc = (bizcode, param) => {
    var serviceParam = {}
    serviceParam['bizcode'] = bizcode// 业务接口编码
    let json = JSON.stringify(param)
    let signKey = getSignKey()
    let deskey = desEncrypt(signKey, json)
    serviceParam['data'] = deskey
    serviceParam['encry_mode'] = 'des'

    // eslint-disable-next-line camelcase
    serviceParam['merchant_id'] = merchant_id// 商户ID
    serviceParam['signKey'] = signKey
    serviceParam['request_id'] = guid()

    var signStr = 'bizcode=' + serviceParam['bizcode']
    signStr += '&data=' + serviceParam['data']
    signStr += '&encry_mode=' + serviceParam['encry_mode']
    signStr += '&merchant_id=' + serviceParam['merchant_id']
    signStr += '&request_id=' + serviceParam['request_id']
    signStr += '&signKey=' + serviceParam['signKey']

    // 4：组装业务请求参数
    var signKeys = md5(signStr).toUpperCase()
    var newStr = signStr.substring(0, signStr.indexOf('signKey') - 1)
    newStr = (newStr + '&sign=' + signKeys)

    // 为了post提交数据，这里需要转换JSON对象模式
    return newStr
}


// eslint-disable-next-line camelcase
const merchant_id = '00000001' // 商户号
const test = 'thin' // 商户号
const func = 'func' // 商户号

/*
* message:需要解密的字符串，
* key： 密钥（加密解密密钥同一个）
*/
export const desDecrypt = (message, key) => {
    let c = CryptoJS.enc.Utf8.parse(message)
    let d = CryptoJS.enc.Base64.parse(key)
    let e = CryptoJS.DES.decrypt({ciphertext: d}, c, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
    return e.toString(CryptoJS.enc.Utf8)
}

/*
* message:需要加密的字符串，对象加密需要转成json字符串
* key： 密钥（加密解密密钥同一个）
*/
const desEncrypt = (message, key) => {
    const c = CryptoJS.enc.Utf8.parse(message)
    const d = CryptoJS.enc.Utf8.parse(key)
    const e = CryptoJS.DES.encrypt(d, c, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
    return e.toString()
}

const getSignKey = () => {
    // 用于给内存中赋值解密签名key
    let signKeys = Configuration.global.ssoSignKey
    if (signKeys) {
        let signalls = ''
        try {
            signalls = doDecrypt(signKeys)
        } catch (e) {
            // TODO handle the exception
        }

        if (signalls) {
            return signalls.signKey
        }
    }
}

const doDecrypt = (data) => {
    var keyHex = CryptoJS.enc.Utf8.parse(test + func)
    var iv = CryptoJS.enc.Utf8.parse(test + func)
    var valueHex = CryptoJS.enc.Base64.parse(data)
    var decrypted = CryptoJS.AES.decrypt({
        ciphertext: valueHex
    }, keyHex, {
        iv: iv,
        mode: CryptoJS.mode.CBC
    })
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
}

// 获取guuid
const guid = () => (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())

const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)



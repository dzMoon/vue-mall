// eslint-disable-next-line no-unused-vars
const SERVER_URL = 'https://jjdx.sxjjd.com/servlet/json'

const configuration = {
    'projName': 'fund', // 项目名称
    /**
     * ajax请求超时时间设置，默认为30秒之后超时
     * 不配默认为：30秒
     */
    'ajaxTimeout': 30,
    'timeoutMsg': '网络超时，请稍后重试',
    'sendCodeTime': 10, //验证码倒计时长

    /**
     * 项目的默认页面，
     * 这个参数是不带pageCode时进入默认页面的入参
     * 默认为：{}
     */
    'defaultPage': {'name': 'UserIndexs', 'jsonParam': {}, component: ''},
    /** ****************************************选择可配项************************************************/

    /**
     * 后台返回结果集出参结构，类似error_no、error_info的出参命名定义，
     * 防止不同项目的后台的出参命名不一致，以便框架可取配置的值，由项目自己定义，但后台必须统一
     * 不配默认为：{'error_no': 'error_no', 'error_info': 'error_info'}
     */
    'resultsParser': {'error_no': 'error_no', 'error_info': 'error_info'},
    /**
     * 该配置是请求接口被后台拦截器拦截之后返回的错误号对应的处理
     * 前端根据后台的error_no做的过滤器配置，需要后台配合定义error_no，
     * 有的需要跳转页面，有的只做提示，提示信息如果后台给出，就取后台提示信息，否则取配置中的error_info字段
     * 不配默认为：{}
     */
    'filters': [
        {
            error_no: '-999',
            error_info: ''
        },
        {
            error_no: '-99900',
            error_info: ''
        },
        {
            error_no: '-99903',
            error_info: ''
        }
    ],
    /**
     * 整个项目的登录页面
     * 不配默认为：{}
     */
    'loginPage': {'name': 'userLogin', 'jsonParam': {}, component: ''},
    /**
     * 整个应用的引导页配置
     * 不配默认为：{}
     */
    'guidePage': {'name': 'guidePage', 'jsonParam': {}, component: ''},
    /**
     * 过滤不需要登录页面
     * 不配默认为：{}
     */
    'loginFilter': [],
    /**
     * 项目中需要调用到的常量、变量这里配置，调用方式，通过require('gconfig').global.*来调用
     * 不配默认为：{}
     */
    'global': {
        'soft_no': 'and',
        'version_code': '1', // 当前版本号
        'version_name': '1.0', // 版本名称,
        'isSign': 1, // 接口是否签名0签名，1签名
        'isFordHttpReq': 1, // 1:調用接口有原生來執行
        'encryMode': 'des', // 默认des,和后台保持一致
        'ssoSignKey': 'whiktigWnpLUeONpwaF4xaAqFj3AhMcxrQeCAFqbsNFA5gGPNuFANIhtw7cLGn59PjafFndNBZG+wflPxJP/pivaZNAyip3iZpxVaIrgykI=',
        'desKey': 'thinkive_mall', // 商城 DES key 与configuration.xml一致
        'filterNo': '1000245',
        'updateTime': 600000, // 静默升级查询间隔时间10分钟
        'qualifiedInvestorStartAmount': '3000000',
        'custServiceTel': '400-000-5767',
        'holding_days': '7',
        'videoAuthentication': {
            // 视频配置 优先从url链接上获取视频参数，若没有再取此配置（在app.js中处理)
            'needOneWayVideo': 0, // 打开单向视频 1开启 0关闭(app有效)
            'oneWayVideoCode': 'owappvideo', // 单向视频认证标志
            'needTwoWayVideo': 1, // 打开双向视频 1开启 0关闭(app有效)
            'twoWayVideoCode': 'twvideo', // 双向视频认证标志
            'useTysp': 1, // 是否是统一视频  默认0
            'videoType': '0', // 1anychat 0tchat 默认0 注意需要引号
            'anychatAppId': 'E507FECF-7B94-AD49-B9A3-5B84BD30311A' // anycaht集群id
        },
        // 本地
        // 'serverPath':'http://127.0.0.1:8081/servlet/json',
        // 'serverUrl':'http://127.0.0.1:8081',
        // 'videoPath': 'http://47.103.189.147:8080/servlet/json',
        // 'oss_url': 'http://sxjjs.oss-cn-shanghai.aliyuncs.com/',

        // 公有云地址
        "serverPath": "https://jjdx.sxjjd.com/servlet/json",
        "videoPath": "http://47.103.189.147:8080/servlet/json",
        "serverUrl": "https://jjdx.sxjjd.com",
        "oss_url": "https://sxjjs.oss-cn-shanghai.aliyuncs.com/",
        "wxfund_url": "https://testthfund.sxjjd.com/m/mall/index.html#!/outside/index.html",

        // 生产地址
        // 'serverPath': 'https://m.xintongfund.com/servlet/json',
        // 'videoPath': 'http://112.74.253.129:8080/servlet/json',
        // 'serverUrl': 'https://m.xintongfund.com',
        // 'oss_url': 'https://m.xintongfund.com/',
        // 'wxfund_url': 'https://thfund.sxfae.com/m/mall/index.html#!/outside/index.html'

    }
}

export default configuration

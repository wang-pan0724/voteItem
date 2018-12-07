import Axios from '../plugin/ajax/ajax';
// import Vue from 'vue';
import vue from "vue"
import { Toast, Indicator } from 'mint-ui';
vue.component(Toast)
let vm = new vue();

function fetch(options) {
    // 请求处理
    return new Promise((resolve, reject) => {
        Axios(options)
            .then((res) => {
                if(res.responsecode==200 || res.responsecode==403){
                    resolve(res)
                } else {
                    Indicator.close();
                    Toast(res.msg)
                    
                }
            })
            .catch((error) => {
                console.log(error);
                rejectnextTick(error)
            })
    })
};

const getArticleType = () => {
    return fetch({
        url: `/api/article/category/list`,
        method: 'get',
        params: ''
    });
};

const getArticleListHot = (params) => {
    return fetch({
        url: `/api/article/selected/list`,
        method: 'get',
        data: params
    });
};

const getArticleListByCateId = (params) => {
    return fetch({
        url: `/api/article/list`,
        method: 'get',
        data: params
    })
}
const getArticleById = (params) => {
    return fetch({
        url: `/api/article/info/${params.id}`,
        method: 'get',
        data: ''
    })
}

const getLocalActList = (params) => {
    return fetch({
        url: `/api/localactivity/listActivity`,
        method: 'get',
        data: params
    })
}

const getReportList = (params) => {
    return fetch({
        url: `/api/investreport/list`,
        method: 'get',
        data: params
    })
}

const getReportDetail = (params) => {
    return fetch({
        url: `/api/investreport/info/${params.id}`,
        method: 'get',
        data: ''
    })
}

const getVisitList = (params) => {
    return fetch({
        url: `/api/businspection/list`,
        method: 'get',
        data: ''
    })
}

const getVisitDetail = (params) => {
    return fetch({
        url: `/api/businspection/info/${params.id}`,
        method: 'get',
        data: ''
    })
}

const getPolicyList = (params) => {
    return fetch({
        url: `/api/lawdoccatalog/list`,
        method: 'get',
        data: ''
    })
}


const getPolicyDetail = (params) => {
    return fetch({
        url: `/api/lawdoccontent/info/${params.id}`,
        method: 'get',
        data: ''
    })
}

const getSeaType = () => {
    return fetch({
        url: `/api/service/category/list`,
        method: 'post',
        data: ''
    })
}

const getSeaListByType = (params) => {
    return fetch({
        url: `/api/enterprise/seaServiceEnts/${params.servCode}`,
        method: 'post',
        data: params.options
    })
}

const getComponyDetailByID = (params) => {
    return fetch({
        url: `/api/enterprise/info/${params.id}`,
        method: 'get',
        data: ''
    })
}

const getComponyCmtByID = (params) => {
    return fetch({
        url: `/api/orderEval/searchEntEvals`,
        method: 'post',
        data: params
    })
}

const getTranslatorList = () => {
    return fetch({
        url: `/api/translator/list`,
        method: 'get',
        data: ''
    })
}

const getCooperateType = () => {
    return fetch({
        url: `/api/cooperation/listType`,
        method: 'get',
        data: ''
    })
}

const getCooperateListByType = (params) => {
    return fetch({
        url: `/api/cooperation/list`,
        method: 'post',
        data: params
    })
}


const login = (params) => {
    return fetch({
        url: `/api/users/login`,
        method: 'post',
        data: params
    })
}


const registStep_1 = (params) => {
    return fetch({
        url: `/api/users/regist`,
        method: 'post',
        data: params
    })
}

const postYzm = (params) => {
    return fetch({
        url: `/api/users/sendEmail`,
        method: 'post',
        data: params
    })
}
// 验证邮箱验证码
const usersCheckEmail = (params) => {
    return fetch({
        url: `/api/users/checkEmail`,
        method: 'post',
        data: params
    })
}
//保存个人资料
const savePersonDatum = (params) => {
    return fetch({
        url: `/api/users/uptuser`,
        method: 'post',
        data: params
    })
}
// 个人的公司信息保存
const savePersonCompony = (params) => {
    return fetch({
        url: `/api/users/uptuser`,
        method: 'post',
        data: params
    })
}
// 公司信息保存
const saveComponyUpload = (params) => {
    return fetch({
        url: `/api/enterprise/saveOrUpdate`,
        method: 'post',
        data: params
    })
}
// 获取企业信息
const getComponyInfo = (params) => {
    return fetch({
        url: `/api/enterprise/form`,
        method: 'post',
        data: params
    })
}

// 获取问题标签
const getAllQuesTag = () => {
    return fetch({
        url: `/api/question/allTags`,
        method: 'get',
        data: ''
    })
}

// 获取问题列表
const getQuesListByID = (params) => {
    return fetch({
        url: `/api/question/list`,
        method: 'get',
        data: params
    })
}

// 提交问题
const saveQue = (params) => {
    return fetch({
        url: `/api/ask/save`,
        method: 'post',
        data: params
    })
}

// 普通用户查看订单
const getUserOrderList = () => {
    return fetch({
        url: `api/tradeOrder/userOrders`,
        method: 'get',
        data: ''
    })
}
// 普通用户查看订单评价
const getUserOrderCmt = (params) => {
    return fetch({
        url: `/api/orderEval/form`,
        method: 'post',
        data: params
    })
}
// 普通用户新增评价
const saveOrderCmt = (params) => {
    return fetch({
        url: `/api/orderEval/save`,
        method: 'post',
        data: params
    })
}
// 修改密码
const changePwd = (params) => {
    return fetch({
        url: `/api/users/reSetPassWordOnLine`,
        method: 'post',
        data: params
    })
}
// 订单详情
const orderDetail = (params) => {
    return fetch({
        url: `/api/tradeFlow/userFlows/${params.id}`,
        method: 'post',
        data: params.options
    })
}

// 微信付款
const orderPay = (params) => {
    return fetch({
        url: `/api/tradeFlow/payment`,
        method: 'post',
        data: params
    })
}
// 提交合作对接
const submitCoo = (params) => {
    return fetch({
        url: `/api/cooperation/saveOrUpdate`,
        method: 'post',
        data: params
    })
}
// 获取业务类型
const getBusType = () => {
    return fetch({
        url: `/api//users/tradeBusynessType/list`,
        method: 'post',
        data: ''
    })
}
// const getBusType = () => {
//     return fetch({
//         url: `/api/users/busynessCategory/list`,
//         method: 'post',
//         data: ''
//     })
// }

// 上传企业照片
const uploadCmyPic = (params) => {
    return fetch({
        url: `/api/attachment/upload`,
        method: 'post',
        data: params
    })
}

// 合作对接详情
const getCooDetail = (params) => {
    return fetch({
        url: `/api/cooperation/info/${params.id}`,
        method: 'get',
        data: ''
    })
}

// 本地活动详情
const localDetail = (params) => {
    return fetch({
        url: `/api/localactivity/info/${params.id}`,
        method: 'get',
        data: ''
    })
}
// 报名本地活动
const toGoLocalAct = (params) => {
    return fetch({
        url: `/api/activity/apply/save`,
        method: 'post',
        data: params
    })
}
// 获取调研报告图集
const getReportPicList = (params) => {
    return fetch({
        url: `/api/report/images/list`,
        method: 'get',
        data: params
    })
}
// 出海服务付款说明
const getToSeaPayRead = (params) => {
    return fetch({
        url: `/api/seaServPayRule/searchPayRuleInfo`,
        method: 'post',
        data: params
    })
}
// 询价提交
const submitChart = (params) => {
    return fetch({
        url: `/api/inquiry/save`,
        method: 'post',
        data: params
    })
}
// 关闭订单
const closeOrder = (params) => {
    return fetch({
        url: `/api/tradeOrder/closeOrder/${params.id}`,
        method: 'get',
        data: ''
    })
}

// 查询翻译价格
const translatePrice = (params) => {
    return fetch({
        url: `/api/translateServ/weblist/${params.type}`,
        method: 'get',
        data: ''
    })
}
// 翻译下单接口
const translatePay = (params) => {
    return fetch({
        url: `api/translateServ/buy/${params.id}`,
        method: 'post',
        data: params.options
    })
}
// 购买调研报告
const payToDianYanReport = (params) => {
    return fetch({
        url: `api/investreport/buy/${params.id}`,
        method: 'get',
        data: params.options
    })
}
// 上午考察下单接口
const visitPay = (params) => {
    return fetch({
        url: `/api/businspection/smoked`,
        method: 'post',
        data: params
    })
}
// 本地见闻图集
const localExprImg = (params) => {
    return fetch({
        url: `/api/activity/pictures/list`,
        method: 'post',
        data: params
    })
}
// 本地见闻资料下载
const localExprDownload = (params) => {
    return fetch({
        url: `/api/activitydocs/list`,
        method: 'post',
        data: params
    })
}
// 获取openid
const getOpenID = (params) => {
    return fetch({
        url: `api/pay/wechat/authCodeToOpenId`,
        method: 'post',
        data: params
    })
}

// 提交定制考察
const submitDingZhi = (params) => {
    return fetch({
        url: `api/busInsCustom/submit`,
        method: 'post',
        data: params
    })
}
// 调研报告doc
const getReportDocList = (params) => {
    return fetch({
        url: `/api/report/doc/list`,
        method: 'get',
        data: params
    })
}
// 印尼文译中文/中文译印尼文
const translateYinToCn = (params) => {
    return fetch({
        url: `/api/translateInquiry/reserve`,
        method: 'post',
        data: params
    })
}
// 获取翻译大类
const getTransTypeList = () => {
    return fetch({
        url: `/api/translateServ/listType`,
        method: 'get',
        data: ''
    })
}


// 


export default {
	//存放后台 api 统一管理
    getArticleType,
    getArticleListHot,
    getArticleListByCateId,
    getArticleById,
    getLocalActList,
    getReportList,
    getReportDetail,
    getVisitList,
    getVisitDetail,
    getPolicyList,
    getPolicyDetail,
    getSeaType,
    getSeaListByType,
    getComponyDetailByID,
    getComponyCmtByID,
    getTranslatorList,
    getCooperateType,
    getCooperateListByType,
    login,
    registStep_1,
    postYzm,
    usersCheckEmail,
    savePersonDatum,
    savePersonCompony,
    saveComponyUpload,
    getComponyInfo,
    getAllQuesTag,
    getQuesListByID,
    saveQue,
    getUserOrderList,
    getUserOrderCmt,
    saveOrderCmt,
    changePwd,
    orderDetail,
    orderPay,
    submitCoo,
    getBusType,
    getCooDetail,
    localDetail,
    uploadCmyPic,
    toGoLocalAct,
    getReportPicList,
    getToSeaPayRead,
    submitChart,
    closeOrder,
    translatePrice,
    translatePay,
    payToDianYanReport,
    visitPay,
    localExprImg,
    localExprDownload,
    getOpenID,
    submitDingZhi,
    getReportDocList,
    translateYinToCn,
    getTransTypeList
}
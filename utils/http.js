import {config} from "../config/config";
import {promisic} from "./util";

class Http{
    static async request({url, data, method = 'GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
        })
        return res.data
    }

}
export {
    Http
}

//外部的使用方法:
// Http.request({
//   url:`theme/by/names`
//   data:{
//    names:'t-1'
//   }
// })
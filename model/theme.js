import {promisic} from "../utils/util";
import {Http} from "../utils/http";

class Theme {
    //获取首页位置A部分
    static async getHomeLocationA() {
        return await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-1'
            }
        })

    }
}

export {
    Theme
}

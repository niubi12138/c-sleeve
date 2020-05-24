 // Category意思是:业务对象类
import {Http} from "../utils/http";

 class Category{
    //getGridCategory:获取网格类别
    static async getGridCategory() {
        return await Http.request({
            url: `category/grid/all`
        })
    }
}

export {
     Category
 }




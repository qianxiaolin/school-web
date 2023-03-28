import request from '../axios/request.js'

//请求首页的导航栏数据


//首页接口
const Home={
    getNavData : () => {
        return request({
            url:"api/home/navdata",
            method:"get"
        })
    }
}
const Market={
    fleaMarket:{
        getRecentGoods:()=>{
             return request.get('api/market/fealmarket/rencentgoods')
        },
        getCheapGoods:()=>{

        },
        getHotGoods:()=>{

        }
    },
    Lost:{
        getLostItemInfo:()=>{

        }
    },
    Find:{
        getFindItemInfo:()=>{

        }
    }
}
const Login={
    verifyUser:(form)=>{
        return request(
            {
                url:'api/login/verify',
                method:"post",
                data:form
            }
        )
    },
    registerUser:(form)=>{
        return request({
            url:'api/login/register',
            method:'post',
            data:form
        })
    }
}
export {
    Home,
    Market,
    Login,
}
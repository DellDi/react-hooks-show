import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
function RouterView(props) {
    let { routes } = props; //这里就是传参过来
    let routerArr = routes.filter(item => !item.redirect); //非重定向的数据过滤出来
    let redirectArr = routes && routes.filter(item => item.redirect).map((item, index) => <Redirect key={index} from={item.path} to={item.redirect} />)
    return <Switch>
        {
            routerArr && routerArr.map((item, index) => {
                return <Route key={index} path={item.path} render={(props) => {
                   /*注意这里传props里面才能进行下面的history使用,child是传的二级路由的*/
                    return <item.component {...props} child={item.children} />
                }} />
            }).concat(redirectArr)  //将其合并
        }
    </Switch>

}
export default RouterView;

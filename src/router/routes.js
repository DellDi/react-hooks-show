/*
 * @Author: Dell_Di
 * @Date: 2020-01-07 09:23:35
 * @LastEditors  : Dell_Di
 * @LastEditTime : 2020-01-17 15:36:29
 * @FilePath: \myReact\src\router\index.js
 */
import React from 'react'
import Loadable from "react-loadable"  // 按需加载

import Home from '../pages/home'

//按需加载
const Loading = () => {
    return <div>loading.....</div>
}
const Movies = Loadable({
    loader: () => import("../pages/movie"),
    loading: Loading,
})

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies',
        component: Movies
    }
    // {
    //     path: '/movies',
    //     component: Movies
    // }
    // {
    //     path: '/index',
    //     component: Index,
    //     children: [
    //         {
    //             path: '/index/hot',
    //             component: Hot
    //         },
    //         {
    //             path: '/index/cold',
    //             component: Cold
    //         },
    //         {
    //             path: '/index',
    //             redirect: '/index/hot'
    //         }
    //     ]
    // }
]
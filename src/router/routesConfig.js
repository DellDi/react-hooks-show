import React, { Component } from 'react';

import Loadable from "react-loadable"  //按需加载
//按需加载
const Loading = () => {
    return <div>loading.....</div>
}
const Movies = Loadable({
    loader: () => import("../views/movie"),
    loading: Loading,
})

// const Movies = Loadable({
//     loader: () => import("../views/movie"),
//     loading: Loading,
// })

export const routes= [
    {
        path: '/',
        redirect: '/movies'
    },
    {
        path: '/movies',
        component: Movies
    },
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
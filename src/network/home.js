import { request } from "./request";

export function getHomeMultidata(keywords) {
    return request({
        url: '/search',
        // url: '/test/getBanners'?keywords=
        params: {
            keywords
        }
    })
}
export function getHomeMultidatas(id) {
    return request({
        url: '/song/url',
        // url: '/test/getBanners'?keywords=
        params: {
            id
        }
    })
}
export function getHomeMultidataa(id) {
    return request({
        url: '/mv/url',
        // url: '/test/getBanners'?keywords=/mv/url?id=
        params: {
            id
        }
    })
}
export function getHomeMultidatab(type, id) {
    return request({
        url: '/comment/hot',
        // url: '/test/getBanners'?keywords id= /comment/hot?type=0&id=
        params: {
            type, id
        }
    })
}

// /song/detail?ids=
export function getHomeMultidatac(ids) {
    return request({
        url: '/song/detail',
        // url: '/test/getBanners'?keywords id= /comment/hot?type=0&id=
        params: {
            ids
        }
    })
}
// export function getHomeGoods(type, page) {
//     return request({
//         url: 'home/data',
//         params: {
//             type, page
//         }
//     })
// }
// http://152.136.185.210:7878/api/m5/home/multidata
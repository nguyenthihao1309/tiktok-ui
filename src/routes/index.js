import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

//Dùng cho Router không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile }
]

//Dùng cho Router buộc phải đăng nhập
const privateRoutes = [

]

export { publicRoutes, privateRoutes } 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Cài đặt middleware để xử lý dữ liệu JSON
app.use(express.json());

// API endpoint trả về danh sách người dùng với thông tin phong phú hơn
app.get('/users', (req, res) => {
    const users = [
        { 
            id: 1, 
            name: 'Van Khai', 
            age: 20, 
            email: 'khai101280@donga.edu.vn', 
            avatar: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/458615208_1282074509869147_3417852772821045215_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0cFlY8WGsOcQ7kNvgHl1qMo&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AE5OMMmZCzdWTBrnXK7HXR3&oh=00_AYBXfHOceZcwBEKWhuXXLL3phBlulX6BUFA6ABcJS7RoWg&oe=674ADA09",
            address: '300 Xô Viết Nghệ Tĩnh' 
        },
        { 
            id: 2, 
            name: 'Y hiếu Nie Hra', 
            age: 20, 
            email: 'hieu12318@donga.edu.vn',
            avatar: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/292619123_2192611310916898_8406144420496786427_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QXo7_oxCnvAQ7kNvgH5S3M8&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=AyyG6XrCiZqRMwnTGV0T394&oh=00_AYApSvtBPInpzRIfi_BFCr_Fn4RPr5ObgoHhpMY5JVCwIA&oe=674AF63E',
            address: '239 Nguyễn Hữu Thọ'
        },
        { 
            id: 3, 
            name: 'Nguyễn Thanh Phong', 
            age: 20, 
            email: 'phogn240121@donga,edu,vn', 
            avatar: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/292619123_2192611310916898_8406144420496786427_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QXo7_oxCnvAQ7kNvgH5S3M8&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=AyyG6XrCiZqRMwnTGV0T394&oh=00_AYApSvtBPInpzRIfi_BFCr_Fn4RPr5ObgoHhpMY5JVCwIA&oe=674AF63E',
            address: '49 Trần Đức Thảo' 
        },
        { 
            id: 4, 
            name: 'Lê Văn Đô', 
            age: 22, 
            email: 'do20213@donga.edu.vn', 
            address: '619 Núi Thành' 
        },
        { 
            id: 5, 
            name: 'Hoàng Mạnh Tuấn', 
            age: 20, 
            email: 'Tuan30123@donga.edu.vn', 
            address: '209 Huy Cận' 
        }
    ];
    res.json(users);
});

// Lắng nghe trên cổng
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

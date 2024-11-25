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
            name: 'John Doe', 
            age: 28, 
            email: 'john.doe@example.com', 
            address: '123 Main St, Springfield, IL' 
        },
        { 
            id: 2, 
            name: 'Jane Smith', 
            age: 34, 
            email: 'jane.smith@example.com', 
            address: '456 Elm St, Springfield, IL' 
        },
        { 
            id: 3, 
            name: 'Alice Johnson', 
            age: 25, 
            email: 'alice.johnson@example.com', 
            address: '789 Pine St, Springfield, IL' 
        },
        { 
            id: 4, 
            name: 'Bob Brown', 
            age: 45, 
            email: 'bob.brown@example.com', 
            address: '101 Maple St, Springfield, IL' 
        },
        { 
            id: 5, 
            name: 'Charlie Lee', 
            age: 32, 
            email: 'charlie.lee@example.com', 
            address: '202 Oak St, Springfield, IL' 
        }
    ];
    res.json(users);
});

// Lắng nghe trên cổng
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

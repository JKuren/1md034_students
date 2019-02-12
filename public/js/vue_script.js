var vm = new Vue({
    el: '#myID',
    data: {
        burgers: [
            {
                "name": "EU Burger",
                "kCal": 420,
                "lactose": true,
                "gluten": true,        
                "img":  "../img/burger1.jpg",
                "id": "a"
            },
            {
                "name": "Na Burger",
                "kCal": 1338,
                "lactose": true,
                "gluten": false,    
                "img":  "../img/burger1.jpg",
                "id": "b"
            },
            {
                "name": "KR Burger",
                "kCal": 543,
                "lactose": false,
                "gluten": false,        
                "img":  "../img/burger1.jpg",
                "id": "c"
            },
            {
                "name": "CH Burger",
                "kCal": 2,
                "lactose": true,
                "gluten": false,    
                "img":  "../img/burger1.jpg",
                "id": "d"
            },
            {
                "name": "AF Burger",
                "kCal": 650,
                "lactose": true,
                "gluten": true,       
                "img": "../img/burger1.jpg",
                "id": "e"
            }
        ]
        ,
    }
})


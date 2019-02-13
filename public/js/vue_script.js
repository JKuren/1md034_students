var vm = new Vue({
    el: '.el',
    de: 'test',
    
    data: {
        h: '',
        
        burgers: [
            {
                "name": "EU Burger",
                "kCal": 420,
                "lactose": true,
                "gluten": true,        
                "img":  "../img/burger1.jpg",
                "id": "a",
                "checked": false
            },
            {
                "name": "Na Burger",
                "kCal": 1338,
                "lactose": true,
                "gluten": false,    
                "img":  "../img/burger1.jpg",
                "id": "b",
                "checked": false
            },
            {
                "name": "KR Burger",
                "kCal": 543,
                "lactose": false,
                "gluten": false,        
                "img":  "../img/burger1.jpg",
                "id": "c",
                "checked": false
            },
            {
                "name": "CH Burger",
                "kCal": 2,
                "lactose": true,
                "gluten": false,    
                "img":  "../img/burger1.jpg",
                "id": "d",
                "checked": false
            },
            {
                "name": "AF Burger",
                "kCal": 650,
                "lactose": true,
                "gluten": true,       
                "img": "../img/burger1.jpg",
                "id": "e",
                "checked": false
            }
        ]
        ,
        user: {
            "name": '',
            "email": '',
            "street": '',
            "housenr": '',
            "payment": '',
            "gender": '',
        },
        name: ''
    },
    methods: {
        greet: function(event) {
            var info = document.getElementById("info");
            info.appendChild(document.createTextNode(" Name: " + this.user.name));
            info.appendChild(document.createElement("BR"));
            info.appendChild(document.createTextNode(" Email: " + this.user.email));
            info.appendChild(document.createElement("BR"));
            info.appendChild(document.createTextNode(" Adress: " + this.user.street + " " + this.user.housenr));
            info.appendChild(document.createElement("BR"));
            info.appendChild(document.createTextNode(" Payment: " + this.user.payment));
            info.appendChild(document.createElement("BR"));
            info.appendChild(document.createTextNode(" Gender: " + this.user.gender));
            for(i = 0; i < this.burgers.length; i++) {
                if(this.burgers[i].checked) {
                    info.appendChild(document.createElement("BR"));
                    info.appendChild(document.createTextNode(this.burgers[i].name + " selected  "));
                }
            }
            
        }
    }
})


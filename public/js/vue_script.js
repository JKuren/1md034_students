/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */

'use strict';
var socket = io();

var vm = new Vue({
    el: '.el',
    
    data: {
        orders: {},
        details: {x: -100, y:-100},
        orderId: "toto",
        orderItems: [],
        personalInfo: {},
        
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
        ],
        user: {
            "name": '',
            "email": '',
            "payment": '',
            "gender": '',
        },
        last: 0,
        
    },
    
    methods: {
        getNext: function () {
            
              this.last = this.last + 1;
              return this.last;
            /*
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
*/
        },
        
        greet: function(event) {
            var info = document.getElementById("info");
            info.appendChild(document.createTextNode(" Name: " + this.user.name));
            info.appendChild(document.createElement("BR"));
            info.appendChild(document.createTextNode(" Email: " + this.user.email));
            info.appendChild(document.createElement("BR"));
            info.appendChild(document.createTextNode(" Payment: " + this.user.payment));
            info.appendChild(document.createElement("BR"));
            info.appendChild(document.createTextNode(" Gender: " + this.user.gender));
            for(var i = 0; i < this.burgers.length; i++) {
                if(this.burgers[i].checked) {
                    info.appendChild(document.createElement("BR"));
                    info.appendChild(document.createTextNode(this.burgers[i].name + " selected  "));
                }
            }
            
            
        },
        addOrder: function (event) {
            this.orderItems = [];
            for(var i = 0; i < this.burgers.length; i++) {
                if(this.burgers[i].checked) {
                    this.orderItems.push(this.burgers[i]);
                }
            }
            socket.emit("addOrder", {orderId: this.getNext(),
                                     details: this.details,
                                     orderItems: this.orderItems,
                                     personalInfo: this.user});
        },
        displayOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.orderId ="T";
            this.details = {
                x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y
            };
            
        },
        send: function (event) {
            this.addOrder();
            this.greet();
        }
        
    }
});

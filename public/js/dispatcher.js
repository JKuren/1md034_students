
/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
    el: '#orders',
    data: {
        orders: [],
        order: {orderId: '',
                details: {},
                personalInfo: {},
                orderItems: [],
               },
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
          
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods : {
        addOrder: function() {
            
            let newOrder = {
                hej: this.hej, 
                orderId: this.order.orderId,
                details: this.order.details,
                personalInfo: this.order.personalInfo,
                orderItems: this.order.orderItems,
            };
            return newOrder;
        }
    }
    
});

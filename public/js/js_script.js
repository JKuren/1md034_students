function myFunction() {
      var x = document.createElement("IMG");
      x.setAttribute("src", "img_pulpit.jpg");
      x.setAttribute("width", "304");
      x.setAttribute("height", "228");
      x.setAttribute("alt", "The Pulpit Rock");
      document.body.appendChild(x);
}

function createBurgers() {
    var item1 = new MenuItem("EU Burger", "../img/burger1.jpg", 420, true, true);
    var item2 = new MenuItem("NA Burger", "../img/burger1.jpg", 1337, true, false);
    var item3 = new MenuItem("KR Burger", "../img/burger1.jpg", 745, true, true);
    var item4 = new MenuItem("CH Burger", "../img/burger1.jpg", 34, false, true);
    var item5 = new MenuItem("AF Burger", "../img/burger1.jpg", 546, false, false);
    return [item1, item2, item3, item4, item5];
}

function jsonCreateBurgers() {
    return food;
}

function insertBurgers() {
    var list = jsonCreateBurgers();

    for(i = 0; i < 5; i++) {
               
        var divbody = document.createElement("DIV");
        var wrapper = document.getElementById("wrapper");
        var title = document.createElement("H4");
        var text = document.createTextNode(list[i].getName());
        title.appendChild(text);
        //use the true or false values here.
        var ulist = document.createElement("UL");
        var l1 = document.createElement("LI");
        l1.appendChild(document.createTextNode(list[i].getKcal() + " kCal"));
        ulist.appendChild(l1);
        var l2 = document.createElement("LI");
        if(list[i].getGluten()) {
            
            l2.appendChild(document.createTextNode("Contains Gluten"));
            ulist.appendChild(l2);
        }
        var l3 = document.createElement("LI");
        if(list[i].getLactos()) {
            
            l3.appendChild(document.createTextNode("Contains Lactose"));
            ulist.appendChild(l3);
        }
                
        var image = document.createElement("IMG");
        image.setAttribute("src", list[i].getImage());
        image.setAttribute("alt", "pic");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        title.appendChild(checkbox);
        divbody.appendChild(title);
        divbody.appendChild(image);
        divbody.appendChild(ulist);
        
        switch(i) {
        case 0:
            divbody.setAttribute("class", "box a");
            break;
        case 1:
            divbody.setAttribute("class", "box b");
            break;
        case 2:
            divbody.setAttribute("class", "box c");
            break;
        case 3:
            divbody.setAttribute("class", "box d");
            break;
        case 4:
            divbody.setAttribute("class", "box e");
            break;
            
        }
        wrapper.appendChild(divbody);    
    }
}

function jsonInsertBurgers() {
    var list = jsonCreateBurgers();

    for(i = 0; i < 5; i++) {
               
        var divbody = document.createElement("DIV");
        var wrapper = document.getElementById("wrapper");
        var title = document.createElement("H4");
        var text = document.createTextNode(list[i].name);
        title.appendChild(text);
        //use the true or false values here.
        var ulist = document.createElement("UL");
        var l1 = document.createElement("LI");
        l1.appendChild(document.createTextNode(list[i].kCal + " kCal"));
        ulist.appendChild(l1);
        var l2 = document.createElement("LI");
        if(list[i].gluten) {
            
            l2.appendChild(document.createTextNode("Contains Gluten"));
            ulist.appendChild(l2);
        }
        var l3 = document.createElement("LI");
           if(list[i].lactose) {
            
            l3.appendChild(document.createTextNode("Contains Lactose"));
            ulist.appendChild(l3);
        }
                
        var image = document.createElement("IMG");
        image.setAttribute("src", list[i].img);
        image.setAttribute("alt", "pic");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        title.appendChild(checkbox);
        divbody.appendChild(title);
        divbody.appendChild(image);
        divbody.appendChild(ulist);
        
        switch(i) {
        case 0:
            divbody.setAttribute("class", "box a");
            break;
        case 1:
            divbody.setAttribute("class", "box b");
            break;
        case 2:
            divbody.setAttribute("class", "box c");
            break;
        case 3:
            divbody.setAttribute("class", "box d");
            break;
        case 4:
            divbody.setAttribute("class", "box e");
            break;
            
        }
        wrapper.appendChild(divbody);    
    }
}


function MenuItem(name, image, kcal, gluten, lactose) {
    this.name = name;
    this.image = image;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;

    this.getImage = function() {
        return this.image;
    }
    this.getName = function() {
        return this.name;
    }
    this.getKcal = function() {
        return this.kcal;
    }
    this.getGluten = function() {
        return this.gluten;
    }
    this.getLactose = function() {
        return this.lactose;
    }
}

function getInfo() {
    var firstname = document.getElementById("firstname");
    var email = document.getElementById("email");
    var gender = document.getElementsByClassName("gender");
    var boxes = document.getElementsByClassName("checkbox");
    var info = document.getElementById("info");
    var payment = document.getElementById("recipient");
    if(firstname.value.length > 0) {
        info.appendChild(document.createTextNode("Name: " + firstname.value));
    }
    if(email.value.length > 0) {
        info.appendChild(document.createTextNode(" Email: " +  email.value));
    }
    
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked) {
            info.appendChild(document.createTextNode(" Gender: " + gender[i].value));
            
        }
    }
    for(i = 0; i < boxes.length; i++) {
        if(boxes[i].checked) {
            info.appendChild(document.createTextNode("Burger " + i + " selected "));
        }
        
    }
    info.appendChild(document.createTextNode("Payment method: " + payment.value));
    
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked) {
            info.appendChild(document.createTextNode(gender[i].value));
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
     jsonInsertBurgers();
 });

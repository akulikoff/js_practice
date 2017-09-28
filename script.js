'use strict'
function Container() {
    this.id = "";
    this.className = "";
    this.htmlCode = "";
}

Container.prototype.render = function() {
    return this.htmlCode;
}
// Container.prototype.remove = function(){
//     document.getElementById(this.id).remove();
// }
function Menu(myId, myClass, myItems, mySubMenus) {
    Container.call(this);
    this.id = myId;
    this.className = myClass;
    this.items = myItems;
    this.SubMenus = mySubMenus;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
// Menu.prototype.remove = function(){
// }
//   this.remove();
Menu.prototype.render = function() {
    var result = '<ul class="' + this.className + '" id="' + this.id + '">';
    for(var i = 0; i < this.items.length; i++) {
        if((this.items[i] instanceof MenuItem)||(this.items[i] instanceof SubMenu)) {
            result += this.items[i].render();
        }
    }
    result += '</ul>';
    return result;
}
function SubMenu(myHref, myLabel, myId, myClass, myItems) {
    Container.call(this);
    this.className = 'menu-item';
    this.href = myHref;
    this.label = myLabel;
    this.menuId = myId;
    this.menuClassName = myClass;
    this.menuItems = myItems;
}
SubMenu.prototype = Object.create(Container.prototype);
SubMenu.prototype.constructor = SubMenu;
SubMenu.prototype.render = function() {
    var SubMenu = new Menu(this.menuId, this.menuClassName, this.menuItems);
    return '<li class="' + this.className + '"><a href="' + this.href + '" >' + this.label + '</a>' +SubMenu.render()+'</li>';
    /* var result = '<ul class="' + this.className + '" id="' + this.id + '">';
     for (var j=0; j < this.SubMenus.length; j++){
         if(this.SubMenus[j] instanceof SubMenu){
             result += this.SubMenus[j].render();
         }
       }
       result += '</ul>';
       return result;*/
}
function MenuItem(myHref, myLabel) {
    Container.call(this);
    this.className = 'menu-item';
    this.href = myHref;
    this.label = myLabel;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function() {
    return '<li class="' + this.className + '"><a href="' + this.href + '" >' + this.label + '</a></li>';
}

// Container.prototype.remove = function(){
//     var button = document.getElementsById(this.id).remove();
//     button.onclick = function removeAll() {
//         Menu.parentNode.removeChild(menu);
//     }
// }
// Container.prototype.remove = function(){
//     document.getElementById(this.id).remove();
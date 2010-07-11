/* Menu.css */
dojo.provide('awfuler.css.Menu_css');
dojo.require('awfuler.css.style');

(function() {
var url = awfuler.css.getResourceUrl;
	awfuler.css.addCss('Menu',[
".dijitMenu, .dijitMenuBar", {
	'border': '1px solid #7eabcd',
	'margin': '0px',
	'padding': '0px',
	'background-color': '#f7f7f7'
},

".dijitBorderContainer .dijitMenuBar", {
	'border': '1px solid #ccc'
},

".dijitMenuItem", {
	'font-family': 'sans-serif',
	'margin': '0'
},

".dijitMenuBar .dijitMenuItem", {
	'padding': '4px 5px'
},

".dijitMenuPreviousButton, .dijitMenuNextButton", {
	'font-style': 'italic'
},
".dijitMenuItem td", {
	'padding': '2px'
},

".dijitMenuPassive .dijitMenuItemHover, .dijitMenuItemSelected", {
	'background-color': '#3559ac',
	'color': '#fff'
},

".dijitMenuItemIcon", {
	'width': '16px',
	'height': '16px'
},

".dijitMenuExpand", {
	'width': '7px',
	'height': '7px',
	//'background-image': url('images/spriteArrows.png'),
	'background-position': '-14px 0px'
},
".dj_ie6 .dijitMenuExpand", {
	//'background-image': url('images/spriteArrows.gif'),
},

".dijitMenuSeparatorTop", {
	'border-bottom': '1px solid #9b9b9b'
},

".dijitMenuSeparatorBottom", {
	'border-top': '1px solid #e8e8e8'
},

".dijitCheckedMenuItemIconChar", {
	'display': 'none'
},

".dijitCheckedMenuItemIcon", {
	//'background-image': url('images/checkmark.png'),
	'background-position': '-80px'
},

".dj_ie6 .dijitCheckedMenuItemIcon", {
	//'background-image': url('images/checkmark.gif'),
},

".dijitCheckedMenuItemChecked .dijitCheckedMenuItemIcon", {
	'background-position': '-64px'
}
]);
})();
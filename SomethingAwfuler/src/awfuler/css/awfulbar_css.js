/* awfulbar.css */
dojo.provide('awfuler.css.awfulbar_css');
dojo.require('awfuler.css.style');
(function() {
var url = awfuler.css.getResourceUrl;
	awfuler.css.addCss('awfulbar',[
'.awfulbar', {
	"width": "100%",
	"height": '34px'
},
'.awfulbar_l', {
	"position": 'fixed',
	"bottom": '0px',
	"left": '16px',
	"width": '100%',
	"z-index": "900"
},
'.awfulbar_l', {
	"background-image": url('blue_bar_l.png'),
	"background-repeat": 'no-repeat',
	"height": '34px'
},
'.awfulbar_r', {
	"background-image": url('blue_bar_r.png'),
	"background-repeat": 'no-repeat',
	"height": '34px',
	"width": '8px',
	"float": 'right',
	"margin-right": '-8px'
},
'.awfulbar_bg', {
	"width": '100%',
	"float": 'left',
	"background-image": url('blue_bar_bg.png'),
	"background-repeat": 'repeat-x',
	"height": '34px',
	"margin-left": '8px',
	"margin-right": '8px'
},
'.awfulbarTab', {
	"cursor": "pointer",
	"color": "#fff",
	"font-weight": "bold",
	"border-left": '2px solid #006485',
	"float": 'left',
	"padding": '4px',
	"margin-top": '2px',
	"height": '26px'
},
'.awfulbarTab.Hover, .awfulbarTab.Active', {
	"border": '2px solid #8F8F8F',
	"margin-top": '-2px',
	"margin-bottom": '2px',
	"height": '32px',
	"background-repeat": 'repeat-x',
	"background-color": '#8F8F8F',
	"background-image": url('gray_gradient_20px.gif')
},
'.awfulbarTab.Active', {
	"border": '2px solid #FF0000'
}
]);
})();
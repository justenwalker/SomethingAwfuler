dojo.provide('awfuler.css.style');
dojo.addOnLoad(function() {
	var s = awfuler.css.addCss;
	var url = function(img) { 
		var u = [];
		u[0] = "url('";
		u[1] = awfuler.resources[img];
		u[2] = "')";
		return u.join('');
	};
s('navbar','div.bluebar_l', {
	"position": 'fixed',
	"bottom": '0px',
	"left": '16px',
	"width": '90%',
});
s('navbar','div.bluebar_l', {
	"background-image": url('blue_bar_l.png'),
	"background-repeat": 'no-repeat',
	"height": '34px',
});
s('navbar','div.bluebar_r', {
	"background-image": url('blue_bar_r.png'),
	"background-repeat": 'no-repeat',
	"height": '34px',
	"width": '8px',
	"float": 'right',
	"margin-right": '-8px',
});
s('navbar','div.bluebar_bg', {
	"width": '100%',
	"float": 'left',
	"background-image": url('blue_bar_bg.png'),
	"background-repeat": 'repeat-x',
	"height": '34px',
	"margin-left": '8px',
	"margin-right": '8px',
});
s('navbar','div.bluebar_content', {
	"border": '1px solid black',
	"-webkit-border-radius": '2px',
	"-moz-border-radius": '2px',
	"border-radius": '2px',
	"float": 'left',
	"padding": '4px',
	"margin-top": '2px',
	"height": '26px',
});
s('navbar','div.bluebar_content:hover', {
	"margin-top": '-2px',
	"margin-bottom": '2px',
	"height": '32px',
	"background-repeat": 'repeat-x',
	"background-color": '#8F8F8F',
	"background-image": url('gray_gradient_20px.gif'),
});
	awfuler.css.renderCss();
});

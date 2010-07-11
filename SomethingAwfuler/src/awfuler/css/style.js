dojo.provide('awfuler.css.style');
dojo.require('awfuler.resources');
dojo.require('awfuler.css.util');
awfuler.css.getResourceUrl = function(img) { 
	var u = [];
	u[0] = "url('";
	u[1] = awfuler.resources[img];
	u[2] = "')";
	return u.join('');
};
dojo.addOnLoad(function() {
	awfuler.css.renderCss();
});

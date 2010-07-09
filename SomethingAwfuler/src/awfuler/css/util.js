dojo.provide('awfuler.css.util');
dojo.mixin(awfuler.css,{
	_global_style: null,
	_style: {},
	_createstyle: function() {
		if( awfuler.css._global_style == null ) {
			var head = dojo.query('head')[0];
			if( !head ) { return; }
			style = dojo.create('style');
			style.type = 'text/css';
			head.appendChild(style);
			awfuler.css._global_style = style;
		}
	},
	_getCss: function() {
		var s = awfuler.css._style;
		var tmp = [];
		for( var id in s ) {
			var objStyle = s[id];
			for( var i = 0; i < objStyle.length; ++i ) {
				/* Put in the selectors */
				var obj = objStyle[i];
				tmp.push(obj.selector);
				tmp.push("{");
				/* Add the individual styles */
				for( var style in obj.style ) {
					tmp.push(style);
					tmp.push(":");
					tmp.push(obj.style[style]);
					tmp.push(";");
				}
				tmp.push("}");
			}
		}
		return tmp.join('');
	},
	setCss: function(id,selector,style) {
		var s = awfuler.css._style;
		s[id] = [{
			"selector": selector,
			"style": style
		}];
	},
	_addCss2: function(id,array) {
		if( array.length % 2 == 0 ) {
			for( var i = 0; i < array.length; i += 2) {
				var selector = array[i];
				var style = array[i+1];
				awfuler.css._addCss3(id,selector,style);
			}
		}
	},
	_addCss3: function(
			/*String*/ id,
			/*String|Array*/ selector,
			/*String?*/ style) {
		var s = awfuler.css._style;
		if( s[id] ) {
			s[id].push({
				"selector": selector,
				"style": style		
			});
		} else {
			awfuler.css.setCss(id,selector,style);
		}
	},
	addCss: function(
			/*String*/ id,
			/*String|Array*/ selector,
			/*String?*/ style) {
		var args = arguments.length;
		if( args == 2 ) {
			awfuler.css._addCss2(id,selector);
		}
		if( args == 3 ) {
			awfuler.css._addCss3(id,selector,style);
		}
	},
	removeCss: function(id) {
		var s = awfuler.css._style;
		if( s[id] ) {
			delete 	s[id];
		}
	},
	renderCss: function() {
		var css = awfuler.css;
		css._createstyle();
		var gs = css._global_style;
		if( gs ) {
			gs.innerHTML = css._getCss();
		}
	}
});

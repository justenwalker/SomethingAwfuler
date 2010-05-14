dojo.provide('awfuler.util.meta');

dojo.mixin(awfuler.util,{
meta : {
	setAwfulValue: function(key, value) {
		awfuler.util.meta.setValue('__awfulerKey_' + key);
	},
	getAwfulValue: function(key, value) {
		awfuler.util.meta.getValue('__awfulerKey_' + key);
	},
	setValue: function(key, value) {
		var q = dojo.query('meta[name="' + key + '"]');
		if( q.length > 0 )
		{
			q[0].content = value;
			return true;
		} else {
			var q = dojo.query('html > head');
			if( q.length > 0 ) {
				var meta = document.createElement('meta');
				meta.name = key;
				meta.content = value;
				q[0].appendChild(meta);
				return true;
			}
		}
		return false;
	},
	getValue: function(key) {
		var q = dojo.query('meta[name="' + key + '"]');
		if( q.length > 0 )
		{
			return q[0].content;
		}
		return null;
	}
} // meta
}); // awfuler.util
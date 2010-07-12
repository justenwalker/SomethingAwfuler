dojo.provide('awfuler.util.getDom');

dojo.mixin(awfuler.util,
{
	getFirstElement: function(/*String*/queryText,/*domObject*/object) {
		// summary:
		// 		Queries the dom object using dojo.query, returns the first match
		// returns:
		// 		The first dom element found, or null if nothing matches
		//
		// queryText:
		// 		dom query to use in dojo.query
		// object:
		// 		The root element to search with dojo.query	
		var list = dojo.query(queryText,object);
		if( list && list.length > 0 ) return list[0];
		return null;
	},
	getDom: function(/*String*/responseText) {
		// summary:
		// 		Takes an HTML string and returns a <div> with the HTML elements
		// description:
		// 		Takes an HTML string and returns a <div> with the HTML elements.
		// 		This div can be manipulated like the rest of the document.  Script 
		// 		tags are removed from the text beforehand to prevent them from running
		// 		and potentially causing problems on the page.
		//		
		//		If you need the script tags, use awfuler.util.getDomUnsafe
		// returns:
		// 		A <div> element with the HTML Dom
		//
		// responseText:
		// 		An HTML String, usually returned from an xhr* request

		//Strip script tags
		var text = responseText.replace(/<script>/ig, '<script >');
		text = text.replace(/<script\ .*?>.*?<\/script>/ig,'');

		var elm = document.createElement('iframe');
		elm.setAttribute('src','about:blank');
		elm.setAttribute('style','display:none');
		document.body.appendChild(elm);
		elm.contentDocument.documentElement.innerHTML = text;
		
		return elm;
	},
	getDomUnsafe: function(/*String*/responseText) {
		// summary:
		// 		Unsafe version of awfuler.util.getDom. Takes an HTML string and returns
		// 		a <div> with the HTML elements inside.
		// description:
		// 		Takes an HTML string and returns a fills <div> with the HTML elements.
		// 		This div can be manipulated like the rest of the document.  Script 
		// 		tags are NOT removed from the text beforehand and may cause unexpected
		// 		side-effects.
		// returns:
		// 		A <div> element with the HTML Dom
		//
		// responseText:
		// 		An HTML String, usually returned from an xhr* request	

		var elm = document.createElement('iframe');
		elm.setAttribute('src','about:blank');
		elm.setAttribute('style','display:none');
		document.body.appendChild(elm);
		elm.contentDocument.documentElement.innerHTML = text;

		return elm;
	}
});

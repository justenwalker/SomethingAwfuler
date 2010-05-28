dojo.provide("awfuler.thread.info");
dojo.require("awfuler.util.meta");

dojo.mixin(awfuler.thread,
{info: {
	isInThread: undefined,
	threadId: 0,
	perPage: 0,
	pageNum: 0,
	maxPages: 0,
	title: "",
	_threadDiv: null,
	_loadInfo: function()
	{
		var a = awfuler.thread.info;
		a.threadId = a.getId();
		a.perPage = a.getPerPage();
		a.pageNum = a.getPage();
		a.title = a.getTitle();
		a.maxPages = a.getMaxPages();
		a._threadDiv = document.getElementById('thread');
	},
	isThread: function()
	{
		// summary:
		// 	Checks if the user is reading a thread
		//
		// returns:
		// 	Returns true if reading a thread, false otherwise
		var a = awfuler.thread.info;	
		if( a.isInThread == undefined ) {
			a.isInThread = ( window.location.href.search(/showthread.php/) > -1 );
		}
		return a.isInThread;
	},
	getThreadLink: function(threadid,pagenumber){
		return 'showthread.php?threadid=' + threadid + '&pagenumber=' + pagenumber;
	
	},
	getId: function()
	{
		// summary:
		//	Gets the current thread ID
		// returns:
		// 	If the user is currently in a thread, the threadID will be returned.
		// 	If the user is not reading a thread, 0 will be returned.
		var a = awfuler.thread.info;
		if( a.isThread() )
		{
			var matches = window.location.href.match(/threadid=([0-9]*)/);
			return parseInt(matches[1]);
		}
		return 0;
	},
	_getPageFromURL: function () {
		var a = awfuler.thread.info;
		if( a.isThread() )
		{
			var matches = window.location.href.match(/pagenumber=([0-9]*)/);
			if( matches ) {
				return parseInt(matches[1]);
			}
			return 1; // Default is page 1
		}
		return 0;
	},
	_getPageFromAnchor: function() {
		var a = awfuler.thread.info;
		var q = dojo.query('span[class="curpage"]');
		if( q.length > 0 ) {
			return parseInt(q[0].childNodes[0].textContent);
		}
		return 0;
	},
	_getPageFromMeta: function() {
		var val = awfuler.util.meta.getAwfulValue('pagenumber');
		if( val == null ) return 0;
		return parseInt(val);
	},
	getPage: function()
	{
		// summary:
		//	Gets the current page number
		// returns:
		// 	If the user is currently in a thread, the page number will be returned.
		// 	If the user is not reading a thread, 0 will be returned.
		var a = awfuler.thread.info;
		var r = 0;
		r = a._getPageFromMeta();   if ( r > 0 ) return r;
		r = a._getPageFromURL();    if ( r > 0 ) return r;
		r = a._getPageFromAnchor(); if ( r > 0 ) return r;
		return 0;
	},
	getPerPage: function()
	{
		// summary:
		//	Gets the number of posts per page
		// returns:
		// 	If the user is currently in a thread, returns the # of posts per page
		// 	If the user is not reading a thread, 0 will be returned.
		var a = awfuler.thread.info;
		if( a.isThread() )
		{
			var matches = window.location.href.match(/perpage=([0-9]*)/);
			if ( matches ) {
				return parseInt(matches[1]);
			}
			return 40; // Default is 40 (?)
		}
		return 0;
	},
	getMaxPages: function() {
		var a = awfuler.thread.info;
		var pages = dojo.query('a[class="pagenumber"]');
		for( var i = pages.length-1; i >= 0 ; --i )
		{
			var link = pages[i];
			var m = link.href.match(/pagenumber=([0-9]*)/);
			var lastpage = 0;
			var nextpage = 0;
			
			if( m ) page = m[1];
			
			if( link.title == "last page" ) {
				lastpage = page;
				break;
			}
			if( link.title.search(/next/) >= 0 )
			{
				nextpage = page;
				break;
			}
		}
		if( lastpage > 0 ) return lastpage; // Last = Last
		if( nextpage > 0 ) return nextpage; // No Last, so Next = Last
		return a.getPage(); // Must be the current page?
	},
	getTitle: function()
	{
		// summary:
		//	Gets the title of the current thread
		// returns:
		// 	If the user is currently in a thread, returns the title
		// 	If the user is not reading a thread, an empty string is returned.
		var a = awfuler.thread.info;
		if( a.isThread() )
		{
			var elements = dojo.query('meta[name="Description"]');
			if( elements.length > 0 ) {
				var meta = elements[0];			
				var content = meta.getAttribute("content");
				if( content ) {
					return content;
				}
			}
		}
		return "";
	}
}// info
}); // awfuler.thread

// Load Thread Info
awfuler.thread.info._loadInfo();

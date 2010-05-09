dojo.provide("awfuler.thread.info");

dojo.mixin(awfuler.thread,
{info: {
	isInThread: undefined,
	threadId: 0,
	perPage: 0,
	pageNum: 0,
	title: "",
	_loadInfo: function()
	{
		var a = awfuler.thread.info;
		a.threadId = a.getId();
		a.perPage = a.getPerPage();
		a.pageNum = a.getPage();
		a.title = a.getTitle();
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
	getPage: function()
	{
		// summary:
		//	Gets the current page number
		// returns:
		// 	If the user is currently in a thread, the page number will be returned.
		// 	If the user is not reading a thread, 0 will be returned.
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

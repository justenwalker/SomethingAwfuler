dojo.provide("awfuler.thread.pages");
dojo.require("awfuler.util.meta");
dojo.require("awfuler.util.getDom");
dojo.require("awfuler.thread.info");

dojo.mixin(awfuler.thread,
{pages: {
	_lastPage: -1,
	_lastPageDiv: null,
	_threadDiv: null,
	_pageLoading: false,
	_parsePage: function(data) {
		var doc = awfuler.util.getDom(data);
		
		/**
		 * This section fixes thumbnail images
		 */
		// ---------------------------------------
		var timgs = dojo.query('.timg',doc.contentDocument.documentElement);
		dojo.map(timgs,function(item){
			dojo.style(item,'visibility','visible');
		});
		// ---------------------------------------
		
		var thread = dojo.query("#thread",doc.contentDocument.documentElement);
		if( thread[0] ) {
			return thread[0];
		}
		return null;
	},
	_onscroll: function() {
		if( window.scrollY && awfuler )
		{
			var a = awfuler.thread.info;
			var y = window.scrollY;
			var ymax = window.scrollMaxY;
			if( ( ymax - y ) < 50 ) { // 200px of the page left or less
				var page = a.getPage();
				if( page < a.maxPages && !awfuler.thread.pages._pageLoading) {
					awfuler.thread.pages.loadPage(page+1,awfuler.thread.pages._appendPage);
				}
			}
		}
	},
	_appendPage: function(threadDiv) {
		if( threadDiv )
		{
			awfuler.util.meta.setAwfulValue('pagenumber',awfuler.thread.pages._lastPage);
			var posts = dojo.query(threadDiv,'table.post');
			dojo.forEach(posts,function(post) {
				post.parentNode.removeChild( post );
				awfuler.thread.info._threadDiv.appendChild(post);
			});
			dojo.destroy(awfuler.thread.pages._pageLoading);
			awfuler.thread.pages._lastPageDiv = null;
		}
	},
	loadPage: function(pagenumber,handler)
	{
		var href = awfuler.thread.info.getThreadLink(awfuler.thread.info.threadId,pagenumber);
		if( awfuler.thread.pages._lastPage == pagenumber && awfuler.thread.pages._lastPageDiv != null )
		{
			handler(awfuler.thread.pages._lastPageDiv);
		}
		if( awfuler.thread.pages._pageLoading  ) return;
		awfuler.thread.pages._pageLoading = true;
		dojo.xhrGet({
			url: href,
			handleAs: 'text',
			error: function() { awfuler.thread.pages._pageLoading = false; },
			load: function(data) {
				awfuler.thread.pages._pageLoading = false;
				var div = awfuler.thread.pages._parsePage(data);
				if( div != null ) { 
					awfuler.thread.pages._lastPage = pagenumber;
					awfuler.thread.pages._lastPageDiv = div;
				}
				handler(div);
				awfuler.thread.pages._pageLoading = false;
			}
		});
	}
}// pages
}); // awfuler.thread

// Autoload if in the thread
if( awfuler.thread.info.isInThread ) {
	dojo.connect(window,'onscroll',awfuler.thread.pages,'_onscroll');
}
dojo.provide("awfuler.thread.pages");
dojo.require("awfuler.util.meta");
dojo.require("awfuler.thread.info");

dojo.mixin(awfuler.thread,
{pages: {
	loadPage: function(pagenumber,handler)
	{
		var href = awfuler.thread.info.getThreadLink(awfuler.thread.info.threadId,pagenumber);
		dojo.xhrGet({
			url: href,
			handleAs: 'text',
			load: handler
		});
	}
}// pages
}); // awfuler.thread

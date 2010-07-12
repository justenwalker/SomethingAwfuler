dojo.provide('awfuler.user.cpanel');
dojo.mixin(awfuler.user,
{cpanel: {
	bookmarks: null,
	_refreshing: false,
	_cpload: function(data) {
		var dom = awfuler.util.getDom(data);
		var doc = dom.contentDocument.documentElement;
		
		awfuler.user.cpanel._cpload_bookmarks(doc);
				
		dojo.destroy(dom);
	},
	_cpmerge_bookmarks: function(bookmarks) {
		var gmkey = 'awfuler.user.cpanel.bookmarks';
		if( awfuler.user.cpanel.bookmarks == null ) {
			awfuler.user.cpanel.bookmarks = dojo.fromJson(GM_getValue(gmkey,null));
		}
		if( awfuler.user.cpanel.bookmarks == null ) {
			awfuler.user.cpanel.bookmarks = {
				all: bookmarks,
				updated: {}
			};
			GM_setValue(gmkey,dojo.toJson(awfuler.user.cpanel.bookmarks));
			return;
		}
		var cbk = awfuler.user.cpanel.bookmarks.all;
		var updated = {};
		for( var id in bookmarks ) {
			var bookmark = bookmarks[id];
			var oldbookmark = cbk[id];
			if( oldbookmark ) {
				if( bookmark.date > oldbookmark.date || bookmark.unread > 0 )
				{
					updated[id] = bookmark;
				}
			} else {
				updated[id] = bookmark;
			}
		}
		awfuler.user.cpanel.bookmarks = {
				all:bookmarks,
				updated:updated
		};
		GM_setValue(gmkey,dojo.toJson(awfuler.user.cpanel.bookmarks));
	},
	_cpload_bookmarks: function(doc) {
		var vote_regex = /([0-9]+) votes - ([0-9.]+)/;
		vote_regex.compile(vote_regex);
		var bookmarks = {};
		var bk = dojo.query("#forum > tbody > tr",doc);
		var getelm = awfuler.util.getFirstElement;
		bk.forEach(function(row,index,arr){
			var cells = dojo.query('td',row);
			var thread = {
					id: row.id.replace(/thread/,''),
					closed: dojo.hasClass(row,'closed')
			};
			cells.forEach(function(cell,index,arr){
				if( dojo.hasClass(cell,'star')) {
					//TODO: Hidden Column, no clue what this is
				}
				// Get Thread Icon
				if( dojo.hasClass(cell,'icon')) {
					var image = getelm('img',cell);
					if( image && image.src ) {
						thread['icon'] = image.src;
					}
				}
				if( dojo.hasClass(cell,'title')) {
					var lastseen = getelm('div.lastseen',cell);
					if( lastseen ) {
						var reset = getelm('a.x',lastseen);
						if( reset ) {
							thread['reset'] = reset.href;
						} else {
							thread['reset'] = '';
						}
						var count = getelm('a.count',lastseen);
						if( count ) {
							thread['newpost'] = count.href;
							thread['unread'] = count.children[0].innerHTML;
						} else {
							thread['newpost'] = '/showthread.php?goto=newpost&threadid=' + thread.id;
							thread['unread'] = 0;
						}
					}
					var info = getelm('div.info',cell);
					if( info ) {
						var title = getelm('a.thread_title',info);
						if( title ) {
							thread['title'] = title.innerHTML;
							thread['href'] = title.href;
						}
					}
				}
				if( dojo.hasClass(cell,'author')) {
					var author = getelm('a',cell);
					if(author){
						thread['author'] = {
								name: author.innerHTML,
								href: author.href
						};
					}
				}
				if( dojo.hasClass(cell,'replies')) {
					var replies = getelm('a',cell);
					if( replies ) {
						thread['replies'] = replies.innerHTML;
					}
				}
				if( dojo.hasClass(cell,'views')) {
					thread['views'] = cell.innerHTML;
				}
				if( dojo.hasClass(cell,'rating')) {
					var rating = getelm('img',cell);
					if( rating && rating.title ) {
						var matches = vote_regex.exec(rating.title);
						thread['rating'] = { image: rating.src, score: matches[2], votes: matches[1]};
					} else {
						thread['rating'] = { image: '', score: 0, votes: 0};
					}
				}
				if( dojo.hasClass(cell,'lastpost')) {
					var date = getelm('div.date',cell);
					if( date ) {
						thread['date'] = Date.parse(date.innerHTML);
					}
					var reply = getelm('a.author',cell);
					if( reply ) {
						thread['reply'] = reply.innerHTML;
						thread['lastpost'] = reply.href;
					}
				}
			});
			bookmarks[thread.id] = thread;
		});
		awfuler.user.cpanel._cpmerge_bookmarks(bookmarks);
	},
	refresh: function(/*Callback*/callback) {
		if( ! awfuler.user.cpanel._refreshing ) {
			awfuler.user.cpanel._refreshing = true;
			dojo.xhrGet({
				url: '/usercp.php',
				handleAs: 'text',
				error: function() { awfuler.user.cpanel._refreshing = false; },
				load: function(data) {
					awfuler.user.cpanel._refreshing = false;
					awfuler.user.cpanel._cpload(data);
					if( callback ) {
						callback();
					}
				}
			});
		}
	}
}// cpanel
}); // awfuler.user
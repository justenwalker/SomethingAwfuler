dojo.provide('awfuler.widgets.bookmarks');
dojo.require('awfuler.user.cpanel');
dojo.require('awfuler.css.bookmarks_css');
dojo.require("dijit._Templated");
dojo.require("dijit._Widget");


dojo.declare("awfuler.widgets.bookmark", [dijit._Widget,dijit._Templated],
{
	bookmark: {},
	templatePath: dojo.moduleUrl('awfuler.widgets', 'templates/bookmark.html'),
	postCreate: function() {
		if( this.bookmark ) {
			this.iconNode.src = this.bookmark.icon;
			this.titleNode.href = this.bookmark.newpost;
			if( this.bookmark.unread > 0 ) {
				this.titleNode.innerHTML = ['(',this.bookmark.unread,') ',this.bookmark.title].join('');
			} else {
				this.titleNode.innerHTML = this.bookmark.title;
			}
			if( this.bookmark.closed ) { dojo.addClass(this.domNode,'closed'); }
			if( this.isNew ) { dojo.addClass(this.domNode,'new'); }
		}
	}
});

dojo.declare("awfuler.widgets.bookmarks", [dijit._Widget,dijit._Templated],
{
	widgets: [],
	timeout: 10000,
	hasUpdates: false,
	templatePath: dojo.moduleUrl('awfuler.widgets', 'templates/bookmarks.html'),
	refresh: function() {
		var myself =  this;
		awfuler.user.cpanel.refresh(function() {
			myself.updateBookmarks();
			myself.onRefresh();
			if( myself.hasUpdates ) {
				myself.timeout = 10000+myself.timeout;
			} else {
				// Exponential Start
				if( myself.timeout < 300000 ) {
					myself.timeout = 2*myself.timeout;
				} else {
					// Linear Continuation
					myself.timeout = 10000+myself.timeout;
				}
			}
			if( myself.timeout > 0 ) {
				window.setTimeout(function() { myself.refresh(); },myself.timeout);
			}
		});
	},
	// EXTENSION POINT //
	onRefresh: function(/*Event*/e) { return true; },
	
	postCreate: function() {
		this.refresh();
	},
	updateBookmarks: function() {
		var bookmarks = awfuler.user.cpanel.bookmarks;
		
		// -- Remove old bookmarks -- //
		for( var i = 0; i < this.widgets.length; ++i ) {
			dojo.destroy(this.widgets[i].domNode);
			this.widgets[i].destroyRecursive();
		}
		this.widgets = [];

		// -- Populate with new bookmarks -- //
		if( bookmarks.all ) {
			for( var id in bookmarks.updated ) {
				var widget = new awfuler.widgets.bookmark({
					bookmark: bookmarks.all[id],
					isNew: true
				});
				this.hasUpdates = true;
				this.widgets.push(widget);
				widget.placeAt(this.newNode,'last');
				this.widgets.push(widget);
			}
			for( var id in bookmarks.all ) {
				if( bookmarks.updated[id] ) {
					// Skip Bookmark
				} else {
					var b = bookmarks.all[id];
					var widget = new awfuler.widgets.bookmark({
						bookmark: b,
						isNew: false
					});
					if( b.closed ) {
						widget.placeAt(this.closedNode,'last');
					} else {
						widget.placeAt(this.oldNode,'last');
					}
					this.widgets.push(widget);
				}
			}
		}
	}
});


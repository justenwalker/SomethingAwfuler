dojo.provide("awfuler.post.banlookup");
dojo.require("awfuler.util");

dojo.addOnLoad(function() {
	awfuler.post.banlookup.loadBans();
});

dojo.mixin(awfuler,
{
post: {
banlookup: {
	cbanmark: "awfulerBanlinkMarked",
	_bans: null,
	_goToBan: function(userid){
		var a = awfuler.post.banlookup;
		if( userid in a._bans )
		{
			window.location = a._bans[userid].postUrl;
		}
	},
	_setLinkTitle: function(anchor,userid)
	{
		var a = awfuler.post.banlookup;
		if( userid in a._bans && a._bans[userid].reason != null )
		{
			anchor.title =  a._bans[userid].reason;
		}
	},//_setLinkTitle
	/* Inserts a 'Offending Post' button
	 * before the banlink node: 
	 * <a class="banlink">
	 *
	 * Returns the UserID of the banlink node
	 */
	_insertButton: function(banlink) {
		GM_log('Insert button for ' + banlink.href);
		var a = awfuler.post.banlookup;
		var userid = (banlink.href.match(/userid=([0-9]*)/i))[1];
		var button = {
			link: document.createElement('a'),
			img:  document.createElement('img'),
			text: document.createTextNode('View Post'),
			bold: document.createElement('b')
		};
		// Bold Text
		button.bold.appendChild(button.text);
		dojo.style(button.bold,{'paddingLeft':'1em'});

		// Link Setup
		button.link.appendChild(button.img);
		button.link.appendChild(button.bold);
		button.link.href = 'javascript:void(0);';
		button.link.title = 'Loading...';
		button.link.addEventListener('click',function() {
			a._goToBan(userid);
		},false);
		button.link.addEventListener('mouseover',function() {
			a._setLinkTitle(button.link,userid);
		},false);
		dojo.style(button.link,{
			"textDecoration":'none',
			"backgroundImage": "url('" + awfuler.resources["gray_gradient_20px.gif"] + "')",
			"backgroundRepeat": 'repeat-x',
			"display":'block',
			"height": '20px',
			"border": '1px solid black',
			"margin": '1px'
		});

		//Image Setup
		button.img.src = awfuler.resources["warn.png"];
		dojo.style(button.img,{
			"border"       : '0px none',
			"width"        : '16px',
			"height"       : '16px',
			"padding"      : '1px'
		});

		// Insert Link
		banlink.parentNode.insertBefore(button.link,banlink);
		dojo.addClass(banlink,a.cbanmark);

		return userid;
	},//_insertButton
	loadBans: function() {
		GM_log('Loading Bans');
		var a = awfuler.post.banlookup;
		if( a._bans == null ) {
			a._bans = new Array();
		}
		var banlinks = dojo.query("a.banlink");
		dojo.forEach(banlinks,function(item) {
			if( dojo.hasClass(item,a.cbanmark) ) return; // Skip it, its already done
			var userid = a._insertButton(item);
			if( !(userid in a._bans) ) {
				GM_log('New banned user found ' + userid);
				a._bans[userid] = {
					postUrl: null,
					reason: null
				};

				dojo.xhrGet({
					url: item.href,
					handleAs: 'text',
					load: function(data) {
						a.loadBan(data,userid);
					}
				});
			}
		});
	}, //loadBans
	loadBan: function(data,userid) {
		
		GM_log('Got ban data for: ' + userid);

		var a = awfuler.post.banlookup;
		var dom = awfuler.util.getDom(data);
		var rows = dojo.query('table.standard > tbody > tr',dom.contentDocument.documentElement);
		
		var columns  = dojo.query('td',rows[1]);

		// Get Offending Post
		var type = columns[0];
		var nodes = dojo.query('b > a',type);
		var postUrl = nodes[0];
		postUrl = postUrl.href;

		a._bans[userid].postUrl = postUrl;
		
		// Get Punishment Reason
		var reason = columns[3];
		reason = reason.childNodes[0].textContent;

		a._bans[userid].reason = reason;

	} //loadBan
}//banlookup
}//post
});//awfuler

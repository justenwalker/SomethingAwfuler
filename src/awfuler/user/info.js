dojo.provide("awfuler.user.info");
dojo.mixin(awfuler.user,
{info: {
	getId: function() {
		// summary:
		// 		Gets current user's UID from their bb cookie
		// description:
		// 		Searches for the bbuserid= value in the user's
		// 		cookie and returns the user id.
		// returns:
		// 		The user's UID or 0 if not found
		var cookies = document.cookie;

		// Couldn't get it, return 0
		if( cookies == "undefined" ) { return 0; }
		var matches = cookies.match(/bbuserid=([^;]*);/i);
		return parseInt(matches[1]);
	}
}// info
}); // awfuler.user

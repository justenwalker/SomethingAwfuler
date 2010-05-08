dojo.provide("awfuler._base.userinfo");
dojo.addOnLoad(function() {
	alert("User ID : " +
		awfuler.user.getId()
	);
});
dojo.mixin(awfuler,
{
	user: {
		getId: function() {
			var cookies = document.cookie;

			// Couldn't get it, return 0
			if( cookies == "undefined" ) { return 0; }
			
			//
			var matches = cookies.match(/bbuserid=([^;]*);/i);

			return parseInt(matches[1]);
		}
	}
});

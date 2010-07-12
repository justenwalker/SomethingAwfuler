/* bookmarks.css */
dojo.provide('awfuler.css.bookmarks_css');
dojo.require('awfuler.css.style');
(function() {
var url = awfuler.css.getResourceUrl;
	awfuler.css.addCss('bookmarks',[
'.awfulerBookmarks', {
	"visibility": 'hidden',
	'white-space':'nowrap',
	"height": '300px',
	"position": "absolute",
	"bottom": "32px",
	"background-color" : "#DBE8F5",
	"border": "1px solid black",
	"overflow": "auto"
},
'.awfulerBookmark', {
	'border': '1px solid #F4F4F4'
},
'.awfulerBookmark a', {
	'color': '#003366',
	'text-decoration': 'none'
},
'.awfulerBookmark a:hover', {
	'color': '#CC6600',
	'text-decoration': 'none'
},
'.awfulerBookmark.closed', {
	'opacity': '0.5'
},
'.awfulerBookmark.closed img', {
	'visibility': 'hidden'
},
'.awfulerBookmark a', {
	'font-size': '80%',
	'font-weight' : 'normal'
},
'.awfulerBookmark.new a', {
	'font-weight' : 'bold'
},
'.awfulerBookmark.closed a', {
	'font-size': '60%'
}
]);
})();
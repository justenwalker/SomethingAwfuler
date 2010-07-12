dojo.provide('awfuler.widgets.awfulbar');
dojo.require('awfuler.css.dijit_css');
dojo.require('awfuler.css.Menu_css');
dojo.require('awfuler.css.awfulbar_css');
dojo.require('awfuler.user.cpanel');
dojo.require('awfuler.widgets.bookmarks');

dojo.require("dijit.Menu");
dojo.require("dijit.MenuItem");
dojo.require("dijit._HasDropDown");
dojo.require("dijit.form._FormWidget");

dojo.declare("awfuler.widgets.awfulbarTab", [dijit.form._FormWidget,dijit._HasDropDown],
{
	attributeMap: {
		image: {node: "imgNode", type:"src"},
		label: {node: "labelNode",type:"innerHTML"}
	},
	menu: null,
	dropDownPosition: ["above"],
	templatePath    : dojo.moduleUrl('awfuler.widgets', 'templates/awfulbarTab.html'),
	postCreate: function()
	{

	},
	addItem: function(/*String*/name,/*String*/href) {
		if( !this.menu )
		{
			this.menu = new dijit.Menu({leftClickToOpen: true});
			this.menu.bindDomNode(this.domNode);
		}
		this.menu.addChild(new dijit.MenuItem({
			label: name,
			_blankGif: awfuler.resources['blank.gif'],
			onClick: function() {
				window.location = href;
			}
		}));
	},
	setWidget: function(/*String|DomNode|NodeList|dijit._Widget*/contents) {
		if( this.menu ) {
			this.menu.destroyRecursive();
			this.menu = null;
		}
		this.widget = contents;
		contents.placeAt(this.domNode,'first');
		this.closeWidget();
	},
	openWidget: function() {
		if( this.widget ) {
			this.widget.open = true;
			this.widget.domNode.style.visibility = 'visible';
		}
	},
	closeWidget: function() {
		if( this.widget ) {
			this.widget.open = false;
			this.widget.domNode.style.visibility = 'hidden';
		}
	},
	toggleWidget: function() {
		if( this.widget ) {
			if( this.widget.open ) {
				this.closeWidget();
			} else {
				this.openWidget();
			}
		}
	},
	
	_onButtonClick: function(/*Event*/ e){
		return this.onClick(e);
	},
	onClick: function(/*Event*/ e){/* EXTENSION POINT */return true;}
	
});

dojo.declare("awfuler.widgets.awfulbar", [dijit._Widget, dijit._Templated],
{
	tabs: [],
	templatePath    : dojo.moduleUrl('awfuler.widgets', 'templates/awfulbar.html'),
	postCreate: function()
	{
		var body = dojo.query('body');
		dojo.body().appendChild(this.domNode);
	},
	addTab: function(/*Object*/args) {
		var newtabNode = dojo.doc.createElement('div');
		this.contentNode.appendChild(newtabNode);
		var newtabWidget = new awfuler.widgets.awfulbarTab(args,newtabNode);
		this.tabs.push(newtabWidget);
		return newtabWidget;
	},
	addTabs: function(/*Object|Array*/args) {
		if( args.constructor.toString().indexOf("Array") == -1 ) {
			return [this._addTab1(args)];
		}
		var tabs = [];
		for( var i = 0; i < args.length; ++i ){
			tabs.push(this.addTab(args[i]));
		}
		return tabs;
	}
});

dojo.addOnLoad(function(){
	awfuler.awfulbar = new awfuler.widgets.awfulbar();
	
	/* Create Navigation Menu */
	var navContainer = dojo.query('#navigation');
	if( navContainer.length > 0 ) {
		var links = dojo.query("a",navContainer[0]);
		if( links.length > 0 ) {
			var tab = awfuler.awfulbar.addTab({label:'Navigation'});
			links.forEach(function(node,idx,arr){
				tab.addItem(node.innerHTML,node.href);
			});
		}	
	}
	dojo.destroy(navContainer[0]);
	var globalMenu = dojo.query('#globalmenu');
	dojo.destroy(globalMenu[0]);
	
	var bookmarks = awfuler.awfulbar.addTab({label:'Bookmarks'});
	
	bookmarks.onClick = function() {
		this.toggleWidget();
	};
	var wbook = new awfuler.widgets.bookmarks({
		onRefresh: function() {
			if( this.hasUpdates ) {
				bookmarks.openWidget();
			}
		}
	});
	
	bookmarks.setWidget(wbook);
	
});

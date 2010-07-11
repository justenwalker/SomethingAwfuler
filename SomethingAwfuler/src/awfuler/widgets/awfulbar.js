dojo.provide('awfuler.widgets.awfulbar');
dojo.require("dijit.Menu");
dojo.require("dijit.MenuItem");
dojo.require("dijit._Templated");
dojo.require("dijit._HasDropDown");
dojo.require("dijit._Widget");
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
		this.menu = new dijit.Menu({leftClickToOpen: true});
		this.menu.bindDomNode(this.domNode);
	},
	addItem: function(/*String*/name,/*String*/href) {
		if( this.menu )
		{
			this.menu.addChild(new dijit.MenuItem({
				label: name,
				_blankGif: awfuler.resources['blank.gif'],
				onClick: function() {
					window.location = href;
				}
			}));
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
	_addTab1: function(/*Object*/args) {
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
			tabs.push(this._addTab1(args[i]));
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
			var tabs = awfuler.awfulbar.addTabs({label:'Navigation'});
			var tab = tabs[0];
			links.forEach(function(node,idx,arr){
				tab.addItem(node.innerHTML,node.href);
			});
		}	
	}
	dojo.destroy(navContainer[0]);
	var globalMenu = dojo.query('#globalmenu');
	dojo.destroy(globalMenu[0]);
	
	//TODO: Add Tabs to Awfulbar
});

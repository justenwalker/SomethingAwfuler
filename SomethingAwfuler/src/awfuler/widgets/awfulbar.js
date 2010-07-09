dojo.provide('awfuler.widgets.awfulbar');
dojo.require("dijit._Widget");
dojo.require("dijit.form._FormWidget");
dojo.require("dijit._Templated");

dojo.declare("awfuler.widgets.awfulbarTab", [dijit.form._FormWidget],
{
	attributeMap: {
		image: {node: "imgNode", type:"src"},
		label: {node: "labelNode",type:"innerHTML"}
	},
	templatePath    : dojo.moduleUrl('awfuler.widgets', 'templates/awfulbarTab.html'),
	postCreate: function()
	{
		
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
	//TODO: Add Tabs
});

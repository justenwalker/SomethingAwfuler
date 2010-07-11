dojo.provide('awfuler.css.style');
dojo.addOnLoad(function() {
	var url = function(img) { 
		var u = [];
		u[0] = "url('";
		u[1] = awfuler.resources[img];
		u[2] = "')";
		return u.join('');
	};
	/*
	 * Dijit Style
	 */
	awfuler.css.addCss('dijit',[
'.dijitReset ', {
	'margin': '0',
	'border': '0',
	'padding': '0',
	'line-height': 'normal',
	'font': 'inherit',
	'color': 'inherit'
},

'.dijitInline ', {
	'display': 'inline-block',			
	'#zoom': '1', 
	'#display': 'inline', 
	'border': '0',
	'padding': '0',
	'vertical-align': 'middle',
	'#vertical-align': 'auto'
},

'.dijitHidden ', {
	
	'display': 'none !important'
},

'.dijitVisible ', {
	'display': 'block !important',	
	'position': 'relative'
},

'.dj_ie INPUT.dijitTextBox, .dj_ie .dijitInputField INPUT ', {
	'font-size': '100%'
},

'.dj_ie .dijitInputField INPUT ', { 
	'margin': '-1px 0 !important'
},

'.dijitInlineTable ', {
	
	'display': 'inline-table',
	'display': 'inline-block',		
	'#zoom': '1', 
	'#display': 'inline', 
	'box-sizing': 'content-box',
	'-moz-box-sizing': 'content-box',
	'border': '0',
	'padding': '0'
},

'.dijitTeeny ', {
	'font-size': '1px',
	'line-height': '1px'
},
'.dijitPopup ', {
	'position': 'absolute',
	'background-color': 'transparent',
	'margin': '0',
	'border': '0',
	'padding': '0'
},
'.dijit_a11y .dijitPopup, .dijit_ally .dijitPopup div, .dijit_a11y .dijitPopup table, .dijit_a11y .dijitTooltipContainer ', {
	'background-color': 'white !important'
},

'.dijitInputField ', {
	'overflow': 'hidden',
	'#zoom': '1'
},

'.dijitPositionOnly ', {
	
	'padding': '0 !important',
	'border': '0 !important',
	'background-color': 'transparent !important',
	'background-image': 'none !important',
	'height': 'auto !important',
	'width': 'auto !important'
},

'.dijitNonPositionOnly ', {
	
	'float': 'none !important',
	'position': 'static !important',
	'margin': '0 0 0 0 !important',
	'vertical-align': 'middle !important'
},

'.dijitBackgroundIframe ', {
	
	'position': 'absolute',
	'left': '0',
	'top': '0',
	'width': '100%',
	'height': '100%',
	'z-index': '-1',
	'border': '0',
	'padding': '0',
	'margin': '0'
},

'.dijitClickableRegion ', {
	
	'background-color': '#e2ebf2',
	'cursor': 'text'
},

'.dijitDisplayNone ', {
	
	'display': 'none !important'
},

'.dijitContainer ', {
	'overflow': 'hidden'
},

'.dijit_a11y * ', {
	'background-image': 'none !important'
},

'.dijit_a11y .dijitCalendarIncrementControl ', {
	'display': 'none'
},
'.dijit_a11y .dijitA11ySideArrow ', {
	'display': 'inline !important', 
	'cursor': 'pointer'
},

'.dijit_a11y .dijitCalendarDateLabel ', {
	'padding': '1px'
},
'.dijit_a11y .dijitCalendarSelectedDate .dijitCalendarDateLabel ', {
	'border': 'solid 1px black',
	'padding': '0px'
},
'.dijit_a11y .dijitCalendarDateTemplate ', {
	'padding-bottom': '0.1em !important'
},

'.dijit_a11y .dijit * ', {
	'background': 'white !important',
	'color': 'black !important'
},
'.dijit_a11y .dijitButtonNode ', {
	'border-color': 'black!important',
	'border-style': 'outset!important',
	'border-width': 'medium!important'
},

'.dijit_a11y .dijitComboBoxReadOnly .dijitInputField, .dijit_a11y .dijitComboBoxReadOnly .dijitButtonNode, .dijit_a11y .dijitSpinnerReadOnly .dijitButtonNode, .dijit_a11y .dijitSpinnerReadOnly .dijitInputField, .dijit_a11y .dijitButtonDisabled .dijitButtonNode, .dijit_a11y .dijitDropDownButtonDisabled .dijitButtonNode, .dijit_a11y .dijitComboButtonDisabled .dijitButtonNode, .dijit_a11y .dijitComboBoxDisabled .dijitInputField, .dijit_a11y .dijitComboBoxDisabled .dijitButtonNode, .dijit_a11y .dijitSpinnerDisabled .dijitButtonNode, .dijit_a11y .dijitSpinnerDisabled .dijitInputField ', {
	'border-style': 'outset!important',
	'border-width': 'medium!important',
	'border-color': '#999 !important',
	'color': '#999 !important'
},

'.dijitButtonNode * ', {
	'vertical-align': 'middle'
},
'.dijit_a11y .dijitArrowButtonInner ', {
	'width': '1em',
	'display': 'none !important'
},
'.dijitButtonNode .dijitArrowButtonInner ', {
	'background': 'no-repeat center',
	'width': '16px'
},
'.dijitComboBox .dijitArrowButtonInner ', {
	'display': 'block'
},

'.dijit_a11y .dijitToggleButtonChecked .dijitToggleButtonIconChar ', {
	'display': 'inline !important'
},

'.dijitLeft ', {
	
	'background-position': 'left top',
	'background-repeat': 'no-repeat'
},

'.dijitStretch ', {
	
	'white-space': 'nowrap',			
	'background-repeat': 'repeat-x'
},

'.dijitRight ', {
	
	'#display': 'inline',				
	'background-position': 'right top',
	'background-repeat': 'no-repeat'
},

'.dijitToggleButton, .dijitButton, .dijitDropDownButton, .dijitComboButton ', {
	
	'margin': '0.2em'
},

'.dijitToolbar .dijitToggleButton, .dijitToolbar .dijitButton, .dijitToolbar .dijitDropDownButton, .dijitToolbar .dijitComboButton ', {
	'margin': '0'
},

'.dj_ie8 .dijitToolbar button, .dj_webkit .dijitToolbar button ', {
	
	'padding': '1px 2px'
},

'.dj_ie .dijitToolbar .dijitComboBox', {
	
	'vertical-align': 'middle'
},

'.dj_ie .dijitComboButton ', {
	
	'margin-bottom': '-3px'
},

'.dj_webkit .dijitToolbar .dijitDropDownButton ', {
	'padding-left': '0.3em'
},
'.dj_gecko .dijitToolbar .dijitButtonNode::-moz-focus-inner ', {
	'padding': '0'
},

'.dijitButtonNode ', {
	
	'border': '1px solid gray',
	'margin': '0',
	'line-height': 'normal',
	'vertical-align': 'middle',
	'#vertical-align': 'auto',
	'text-align': 'center',
	'white-space': 'nowrap'
},

'.dijitButtonNode, .dijitButtonNode * ', {
	'cursor': 'pointer'
},

'.dijitReadOnly *, .dijitDisabled *, .dijitReadOnly, .dijitDisabled, .dijitDisabledClickableRegion ', {	
	'cursor': 'not-allowed !important'
},

'.dj_ie .dijitButtonNode ', {
	
	'zoom': '1'
},

'.dj_ie .dijitButtonNode button ', {
	'overflow': 'visible'
},

'.dijitArrowButton ', {
	
	
	'padding': '0 .4em'
},
'DIV.dijitArrowButton ', {
	'float': 'right'
},

'.dijitSpinner .dijitInputLayoutContainer .dijitArrowButton ', {
	'border-style': 'solid',
	'border-width': '0 0 0 1px !important',
	'padding': '0',
	'position': 'absolute',
	'right': '0',
	'float': 'none'
},
'.dijitSpinner .dijitInputLayoutContainer .dijitArrowButton ', {
	'position': 'absolute',
	'height': '50%'
},
'.dijitSpinner .dijitInputLayoutContainer .dijitDownArrowButton ', {
	'top': 'auto',
	'bottom': '0',
	'border-top-width': '1px !important'
},
'.dijitSpinner .dijitInputLayoutContainer .dijitUpArrowButton ', {
	'top': '0',
	'bottom': 'auto'
},

'TABLE.dijitComboButton ', {
	
	'border-collapse': 'collapse',
	'border': '0',
	'padding': '0',
	'margin': '0'
},
'.dijitToolbar .dijitComboButton ', {
	
	'border-collapse': 'separate'
},

'.dj_ie BUTTON.dijitButtonNode ', {
	'overflow': 'visible'
},

'table .dijitButton .dijitButtonNode, table .dijitComboButton .dijitButtonNode ', {
	'#overflow': 'hidden'
},

'.dijitButtonNode IMG ', {
	'vertical-align': 'middle'
	
},

'.dijitTextBox, .dijitComboBox, .dijitSpinner ', {
	'border': 'solid black 1px',
	'#overflow': 'hidden', 
	'width': '15em',	
	'vertical-align': 'middle',
	'#vertical-align': 'auto'
},

'.dijitTimeTextBox ', {
	'width': '8em'
},

'.dijitTextBox input:focus, .dijitComboBox input:focus, .dijitSpinner input:focus ', {
	'outline': 'none'
},
'.dijitTextBoxFocused, .dijitComboBoxFocused, .dijitSpinnerFocused, .dijitSpinnerUpArrowActive, .dijitSpinnerDownArrowActive, .dijitTextAreaFocused ', {
	
	'outline': 'auto 5px -webkit-focus-ring-color'
},

'.dijitTextBox INPUT, .dijitComboBox INPUT, .dijitSpinner INPUT ', {
	'border-left': 'solid black 1px',	
	'display': 'inline',
	'position': 'static !important',
	'border': '0 !important',
	'margin': '0 !important',
	'vertical-align': 'top !important',
	'background-color': 'transparent !important',
	'background-image': 'none !important',
	'width': '100% !important'
},

'.dijitValidationIcon ', {
	'visibility': 'hidden',
	'display': 'block',
	'padding': '0 2px',
	'float': 'right',
	'height': 'auto'
},
'.dijitValidationIconText ', {
	'visibility': 'hidden',
	'display': 'none',
	'float': 'right',
	'font-family': 'sans-serif',
	'font-style': 'italic',
	'font-size': '0.75em',
	'padding-right': '0.15em',
	'line-height': '160%'
},
'.dijit_a11y .dijitValidationIcon ', { 'display': 'none !important' },
'.dijit_a11y .dijitValidationIconText ', { 'display': 'block !important' },
'.dijitError .dijitValidationIcon, .dijitError .dijitValidationIconText ', {
	'visibility': 'visible'
},

'.dijitTextBox .dijitArrowButton ', {
	
	'display': 'none'
},

'.dijitCheckBox, .dijitRadio, .dijitCheckBoxInput ', {
	'padding': '0',
	'border': '0',
	'width': '16px',
	'height': '16px',
	'background-position': 'center center',
	'background-repeat': 'no-repeat',
	'overflow': 'hidden'
},

'.dijitCheckBox INPUT, .dijitRadio INPUT ', {
	'margin': '0',
	'padding': '0',
	'display': 'block'
},

'.dijitCheckBoxInput ', {
	
	'opacity': '0.01'
},

'.dj_ie .dijitCheckBoxInput ', {
	'filter': 'alpha(opacity=0)'
},

'.dijit_a11y .dijitCheckBox, .dijit_a11y .dijitRadio ', {
	'width': 'auto',
	'height': 'auto'
},
'.dijit_a11y .dijitCheckBoxInput ', {
	'opacity': '1',
	'filter': 'none',
	'width': 'auto',
	'height': 'auto'
},

'.dijitProgressBarEmpty', {
	
	'position': 'relative',	'overflow': 'hidden',
	'border': '1px solid black', 	
	'z-index': '0'
},

'.dijitProgressBarFull ', {
	
	'position': 'absolute',
	'overflow': 'hidden',
	'z-index': '-1',
	'top': '0',
	'width': '100%'
},
'.dj_ie6 .dijitProgressBarFull ', {
	'height': '1.6em'
},

'.dijitProgressBarTile ', {
	
	'position': 'absolute',
	'overflow': 'hidden',
	'top': '0',
	'left': '0',
	'bottom': '0',
	'right': '0',
	'margin': '0',
	'padding': '0',
	'width': 'auto',
	'height': 'auto',
	'background-color': '#aaa',
	'background-attachment': 'fixed'
},

'.dijit_a11y .dijitProgressBarTile', {
	
	'border-width': '4px',
	'border-style': 'solid',
	'background-color': 'transparent !important'
},

'.dj_ie6 .dijitProgressBarTile ', {
	
	'position': 'static',
	
	'height': '1.6em'
},

'.dijitProgressBarIndeterminate .dijitProgressBarLabel ', {
	'visibility': 'hidden'
},

'.dijitProgressBarIndeterminate .dijitProgressBarTile ', {
	
},

'.dijitProgressBarIndeterminateHighContrastImage ', {
	'display': 'none'
},

'.dijit_a11y .dijitProgressBarIndeterminate .dijitProgressBarIndeterminateHighContrastImage ', {
	'display': 'block',
	'position': 'absolute',
	'top': '0',
	'bottom': '0',
	'margin': '0',
	'padding': '0',
	'width': '100%',
	'height': 'auto'
},

'.dijitProgressBarLabel ', {
	'display': 'block',
	'position': 'static',
	'width': '100%',
	'text-align': 'center',
	'background-color': 'transparent !important'
},

'.dijitTooltip ', {
	'position': 'absolute',
	'z-index': '2000',
	'display': 'block',
	
	'left': '50%',
	'top': '-10000px',
	'overflow': 'visible'
},

'.dijitTooltipContainer ', {
	'border': 'solid black 2px',
	'background': '#b8b5b5',
	'color': 'black',
	'font-size': 'small'
},

'.dijitTooltipFocusNode ', {
	'padding': '2px 2px 2px 2px'
},

'.dijitTooltipConnector ', {
	'position': 'absolute'
},

'.dijitTooltipData ', {
	'display': 'none'
},
'.dijitTooltipConnector ', {
	'font-size': '0',	'line-height': '0%',	'width': '0',
	'border-top': 'none',
	'border-bottom': '14px solid black',
	'border-left': '7px solid transparent',
	'border-right': '7px solid transparent',
	'top': '-14px',
	'left': '3px',
	'z-index': '2'
},

'.dijitTooltipConnector div ', {
	'font-size': '0',	'line-height': '0%',	'width': '0',
	'position': 'absolute',
	'border-bottom': '10px solid #b8b5b5',
	'border-left': '5px solid transparent',
	'border-right': '5px solid transparent',
	'top': '6px',
	'left': '-5px',
	'z-index': '3'
},

'.dijitLayoutContainer', {
	'position': 'relative',
	'display': 'block',
	'overflow': 'hidden'
},

'body .dijitAlignTop, body .dijitAlignBottom, body .dijitAlignLeft, body .dijitAlignRight ', {
	'position': 'absolute',
	'overflow': 'hidden'
},

	'body .dijitAlignClient ', { 'position': 'absolute' },

'.dijitBorderContainer, .dijitBorderContainerNoGutter ', {
	'position': 'relative',
	'overflow': 'hidden'
},

'.dijitBorderContainerPane, .dijitBorderContainerNoGutterPane ', {
	'position': 'absolute !important',	
	'z-index': '2'
},

'.dijitBorderContainer > .dijitTextArea ', {
	
	'resize': 'none'
},

'.dijitGutter ', {
	'position': 'absolute',
	'font-size': '1px'	
},

'.dijitSplitter ', {
	'position': 'absolute',
	'overflow': 'hidden',
	'z-index': '10',		
	'background-color': '#fff',
	'border-color': 'gray',
	'border-style': 'solid',
	'border-width': '0'
},
'.dj_ie .dijitSplitter ', {
	'z-index': '1'	
},

'.dijitSplitterActive ', {
	'z-index': '11 !important'
},

'.dijitSplitterCover', {
	'position': 'absolute',
	'z-index': '-1',
	'top': '0',
	'left': '0',
	'width': '100%',
	'height': '100%'
},

'.dijitSplitterCoverActive', {
	'z-index': '3 !important'
},

'.dj_ie .dijitSplitterCover', {
	'background': 'white',
	'filter': 'alpha(opacity=0)'
},

'.dijitSplitterH ', {
	'height': '7px',
	'border-top': '1px',
	'border-bottom': '1px',
	'cursor': 'ns-resize'
},
'.dijitSplitterV ', {
	'width': '7px',
	'border-left': '1px',
	'border-right': '1px',
	'cursor': 'ew-resize'
},
'.dijitSplitContainer', {
	'position': 'relative',
	'overflow': 'hidden',
	'display': 'block'
},

'.dijitSplitPane', {
	'position': 'absolute'
},

'.dijitSplitContainerSizerH, .dijitSplitContainerSizerV ', {
	'position': 'absolute',
	'font-size': '1px',
	'cursor': 'move',
	'cursor': 'w-resize',
	'background-color': 'ThreeDFace',
	'border': '1px solid',
	'border-color': 'ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight',
	'margin': '0'
},

'.dijitSplitContainerSizerH .thumb, .dijitSplitterV .dijitSplitterThumb ', {
	'overflow': 'hidden',
	'position': 'absolute',
	'top': '49%'
},

'.dijitSplitContainerSizerV .thumb, .dijitSplitterH .dijitSplitterThumb ', {
	'position': 'absolute',
	'left': '49%'
},

'.dijitSplitterShadow, .dijitSplitContainerVirtualSizerH, .dijitSplitContainerVirtualSizerV ', {
	'font-size': '1px',
	'background-color': 'ThreeDShadow',
	'-moz-opacity': '0.5',
	'opacity': '0.5',
	'filter': 'Alpha(Opacity=50)',
	'margin': '0'
},

'.dj_ie .dijitSplitterV, .dijitSplitContainerVirtualSizerH ', {
	'cursor': 'w-resize'
},
'.dj_ie .dijitSplitterH, .dijitSplitContainerSizerV, .dijitSplitContainerVirtualSizerV ', {
	'cursor': 'n-resize'
},

'.dijit_a11y .dijitSplitterH ', {
	'border-top': '1px solid #d3d3d3 !important',
	'border-bottom': '1px solid #d3d3d3 !important'
},
'.dijit_a11y .dijitSplitterV ', {
	'border-left': '1px solid #d3d3d3 !important',
	'border-right': '1px solid #d3d3d3 !important'
},

'.dijitContentPane ', {
	'display': 'block',
	'overflow': 'auto'
},

'.dijitContentPaneSingleChild ', {
	'overflow': 'hidden'
},

'.dijitTitlePane ', {
	'display': 'block',
	'overflow': 'hidden'
},

'.dijitColorPalette ', {
	'border': '1px solid #999',
	'background': '#fff',
	'-moz-border-radius': '3pt'
},

'img.dijitColorPaletteUnder ', {
	'border-style': 'none',
	'position': 'absolute',
	'left': '0',
	'top': '0'
},
'.dijitColorPaletteInner ', {
	'position': 'relative',
	'overflow': 'hidden',
	'outline': '0'
},
'.dijitPaletteCell ', {
	'width': '20px',
	'height': '20px',
	'position': 'absolute',
	'overflow': 'hidden',
	'z-index': '10',
	'outline-width': '0'
},
'.dijitPaletteImg ', {
	'width': '16px', 
	'height': '14px', 
	'position': 'absolute',
	'top': '1px',
	'left': '1px',
	'overflow': 'hidden',
	'cursor': 'default',
	'border': '1px solid #999'
	
},

'.dijitPaletteCellHighlight img ', {
	'width': '14px', 
	'height': '12px', 
	'position': 'absolute',
	'top': '1px',
	'left': '1px',
	'overflow': 'hidden',
	'cursor': 'default',
	'border': '2px solid #000',
	'outline': '1px solid #dedede'
	
},

'.dijit_a11y .dijitPaletteCell ', {
	'background-color': 'transparent !important'
},
'.dijit_a11y .dijitPaletteImg ', {
	'background-color': 'transparent !important'
},

'.dijitAccordionContainer ', {
	'border': '1px solid #b7b7b7',
	'border-top': '0 !important'
},

'.dj_webkit .dijitAccordionContainer  div:focus ', {
	'outline': 'none'
},
'.dj_ff3 .dijitAccordionContainer  div:focus ', {
	'outline': 'none'
},
'.dijitAccordionTitle ', {
	'cursor': 'pointer'
},
'.dijitAccordionFocused  ', {
	'text-decoration': 'underline'
},

'.dijitAccordionTitle .arrowTextUp, .dijitAccordionTitle .arrowTextDown ', {
	'display': 'none',
	'font-size': '0.65em',
	'font-weight': 'normal !important'
},

'.dijit_a11y .dijitAccordionTitle .arrowTextUp, .dijit_a11y .dijitAccordionTitle-selected .arrowTextDown ', {
	'display': 'inline'
},

'.dijit_a11y .dijitAccordionTitle-selected .arrowTextUp ', {
	'display': 'none'
},

'.dijitCalendarContainer thead tr th, .dijitCalendarContainer thead tr td, .dijitCalendarContainer tbody tr td, .dijitCalendarContainer tfoot tr td ', {
	'padding': '0'
},

'.dijitCalendarNextYear ', {
	'margin': '0 0 0 0.55em'
},

'.dijitCalendarPreviousYear ', {
	'margin': '0 0.55em 0 0'
},

'.dijitCalendarIncrementControl ', {
	'vertical-align': 'middle'
},

'.dijitCalendarDisabledDate ', {
	'color': 'gray !important'
},

'.dijitCalendarPreviousMonthDisabled, .dijitCalendarCurrentMonthDisabled, .dijitCalendarNextMonthDisabled ', {
	'cursor':'default !important'
},

'.dijitCalendarIncrementControl, .dijitCalendarBodyContainer tbody tr td, .dijitCalendarDateTemplate, .dijitCalendarContainer .dijitInline ', {
	'cursor': 'pointer'
},

'.dijitSpacer ', {
	
	'position': 'relative',
	'height': '1px',
	'overflow': 'hidden',
	'visibility': 'hidden'
},

'.dijitMenu ', {
	'border': '1px solid black',
	'background-color': 'white'
},
'.dijitMenuTable ', {
	'margin': '1px 0',
	'border-collapse': 'collapse',
	'border-width': '0',
	'background-color': 'white'
},

'.dj_webkit .dijitMenuTable td[colspan="2"]', {
	'border-right': 'hidden'
},

'.dijitMenuItem', {
	'text-align': 'left',
	'white-space': 'nowrap',
	'padding': '.1em .2em',
	'cursor': 'pointer'
},

'.dijitMenuPassive .dijitMenuItemHover, .dijitMenuItemSelected ', {
	'background-color': 'black',
	'color': 'white'
},

'.dijitMenuItemIcon, .dijitMenuExpand ', {
	'background-repeat': 'no-repeat'
},

'.dijitMenuItemDisabled * ', {
	
	'opacity': '0.3',
	'cursor': 'default'
},
'.dj_ie .dijit_a11y .dijitMenuItemDisabled td, .dj_ie .dijitMenuItemDisabled *, .dj_ie .dijitMenuItemDisabled td ', {
	'color': 'gray !important',
	'filter': 'alpha(opacity=35)'
},

'.dijitMenuItemLabel ', {
	'position': 'relative',
	'vertical-align': 'middle'
},

'.dijit_a11y .dijitMenuItemSelected ', {
	'border': '1px #fff dotted !important'
},
'.dj_ff3 .dijit_a11y .dijitMenuItem td ', {
	'padding': 'none !important',
	'background': 'none ! important'
},
'.dijit_a11y .dijitMenuItemSelected .dijitMenuItemLabel ', {
	'border-width': '1px',
	'border-style': 'solid'
},
'.dj_ie8 .dijit_a11y .dijitMenuItemLabel ', {
	'position': 'static'
},

'.dijitMenuExpandA11y ', {
	'display': 'none'
},
'.dijit_a11y .dijitMenuExpandA11y ', {
	'display': 'inline'
},

'.dijitMenuSeparator td ', {
	'border': '0',
	'padding': '0'
},

'.dijitMenuSeparatorTop ', {
	'height': '50%',
	'margin': '0',
	'margin-top': '3px',
	'font-size': '1px'
},

'.dijitMenuSeparatorBottom ', {
	'height': '50%',
	'margin': '0',
	'margin-bottom': '3px',
	'font-size': '1px'
},

'.dijitCheckedMenuItemIconChar ', {
	'vertical-align': 'middle',
	'visibility': 'hidden'
},
'.dijitCheckedMenuItemChecked .dijitCheckedMenuItemIconChar ', {
	'visibility': 'visible'
},
'.dijit_a11y .dijitCheckedMenuItemIconChar ', {
	'display': 'inline !important'
},
'.dijit_a11y .dijitCheckedMenuItemIcon ', {
	'display': 'none'
},

'.dijitStackController .dijitToggleButtonChecked * ', {
	'cursor': 'default'
},

'.dijitTabContainerNoLayout ', {
	'width': '100%'	
},

'.dijitTabContainerBottom-tabs, .dijitTabContainerTop-tabs, .dijitTabContainerLeft-tabs, .dijitTabContainerRight-tabs ', {
	'overflow': 'visible !important' 
},

'.dijitTabContainerBottom-container, .dijitTabContainerTop-container, .dijitTabContainerLeft-container, .dijitTabContainerRight-container ', {
	'z-index': '0',
	'overflow': 'hidden',
	'border': '1px solid black'
},
'.dijitTabContainer .nowrapTabStrip ', {
	'width': '50000px',
	'display': 'block',
	'position': 'relative'
},
'.dijitTabContainer .dijitTabListWrapper ', {
	'overflow': 'hidden'
},

'.dijit_a11y .dijitTabContainer .tabStripButton img ', {
	
	'display': 'none'
},

'.dijitTabContainerTop-tabs ', {
	'border-bottom': '1px solid black'
},
'.dijitTabContainerTop-container ', {
	'border-top': '0px'
},

'.dijitTabContainerLeft-tabs ', {
	'border-right': '1px solid black',
	'float': 'left'
},
'.dijitTabContainerLeft-container ', {
	'border-left': '0px'
},

'.dijitTabContainerBottom-tabs ', {
	'border-top': '1px solid black'
},
'.dijitTabContainerBottom-container ', {
	'border-bottom': '0px'
},

'.dijitTabContainerRight-tabs ', {
	'border-left': '1px solid black',
	'float': 'left'
},
'.dijitTabContainerRight-container ', {
	'border-right': '0px'
},

'div.dijitTabBtnDisabled, .dj_ie div.dijitTabBtnDisabled ', {
	'cursor': 'auto'
},

'div.dijitTabBtnDisabled img ', {
	'opacity': '0.3'
},

'.dj_ie div.dijitTabBtnDisabled img ', {
	'filter': 'gray() alpha(opacity=30)'
},

'.dijitTab ', {
	'position': 'relative',
	'cursor': 'pointer',
	'white-space': 'nowrap',
	'z-index': '3'
},
'.dijitTab * ', {
	
	'vertical-align': 'middle'
},
'.dijitTabChecked ', {
	'cursor': 'default'	
},

'.dijitTabButtonIcon ', {
	'height': '18px'
},

'.dijitTabContainerTop-tabs .dijitTab ', {
	'top': '1px'
},
'.dijitTabContainerBottom-tabs .dijitTab ', {
	'top': '-1px'
},
'.dijitTabContainerLeft-tabs .dijitTab ', {
	'left': '1px'
},
'.dijitTabContainerRight-tabs .dijitTab ', {
	'left': '-1px'
},

'.dijitTabContainerTop-tabs .dijitTab, .dijitTabContainerBottom-tabs .dijitTab ', {
	
	'display': 'inline-block',			
	'#zoom': '1', 
	'#display': 'inline'
},

'.dijitTabInnerDiv ', {
	'position': 'relative'
},

'.tabStripButton ', {
	'z-index': '12'
},

'.dijitTabButtonDisabled .tabStripButton ', {
	'display': 'none'
},

'.dijitTab .closeButton ', {
	'margin-left': '1em'
},

'.dijitTab .closeText ', {
	'display': 'none'
},

'.dijit_a11y .closeText ', {
	'display': 'inline',
	'margin': '0px 6px'
},

'.dijit_a11y .dijitTab .closeImage ', {
	'display': 'none'
},

'.dijit_a11y .closeButton-hover .closeText ', {
	'border': 'thin solid'
},
'.dijit_a11y .dijitTabChecked ', {
	'border-style': 'dashed !important'
},

'.dijit_a11y .dijitTabInnerDiv ', {
	'border-left': 'none !important'
 },

'.dijitTabPane, .dijitStackContainer-child, .dijitAccordionContainer-child ', {
	
	'border': 'none !important'
},

'.dijitInlineEditor ', {
	
	'position': 'relative',
	'vertical-align': 'bottom'
},
'.dj_ie .dijitInlineEditor ', {
	'vertical-align': 'middle'
},

'.dijitInlineValue ', {
	
},

'.dijitInlineEditor .dijitButtonContainer ', {
	
	'position': 'absolute',
	'right': '0',
	'overflow': 'visible'
},

'.dijitInlineEditor .saveButton, .dijitInlineEditor .cancelButton ', {
},

'.dijitTreeIndent ', {
	
	'width': '19px'
},

'.dijitTreeRow, .dijitTreeContent ', {
	'white-space': 'nowrap'
},

'.dijitTreeRow img ', {
	
	'vertical-align': 'middle'
},

'.dijitTreeContent ', {
	'cursor': 'default'
},

'.dijitExpandoText ', {
	'display': 'none'
},

'.dijit_a11y .dijitExpandoText ', {
	'display': 'inline',
	'padding-left': '10px',
	'padding-right': '10px',
	'font-family': 'monospace',
	'border-style': 'solid',
	'border-width': 'thin',
	'cursor': 'pointer'
},

'.dijitTreeLabel ', {
	'margin': '0px 4px'
},

'.dijitDialog ', {
	'position': 'absolute',
	'z-index': '999',
	'padding': '1px',
	'overflow': 'hidden'  
},

'.dijitDialogFixed div.dijitDialogTitleBar ', {
	'cursor': 'default'
},

'.dijitDialogUnderlayWrapper ', {
	'position': 'absolute',
	'left': '0',
	'top': '0',
	'z-index': '998',
	'display': 'none',
	'background': 'transparent !important'
},

'.dijitDialogUnderlay ', {
	'background': '#eee',
	'opacity': '0.5'
},

'.dj_ie .dijitDialogUnderlay ', {
	'filter': 'alpha(opacity=50)'
},

'.dijit_a11y .dijitInputLayoutContainer, .dijit_a11y .dijitDialog ', {
	'opacity': '1 !important',
	'background-color': 'white !important'
},

'.dijitDialog .closeText ', {
	'display': 'none',
	
	'position': 'absolute'
},

'.dijit_a11y .dijitDialog .closeText ', {
	'display': 'inline'
},

'.dijitSliderMoveable ', {
	'z-index': '99',
	'position': 'absolute !important',
	'display': 'block',
	'vertical-align': 'middle'
},

'.dijitSliderMoveableH ', {
	'right': '0'
},

'.dijit_a11y div.dijitSliderImageHandle, .dijitSliderImageHandle ', {
	'margin': '0',
	'padding': '0',
	'position': 'absolute !important',
	'border': '8px solid gray',
	'width': '0',
	'height': '0'
},
'.dijit_a11y .dijitSliderFocused .dijitSliderImageHandle ', {
	'border': '4px solid #000',
	'height': '8px',
	'width': '8px'
},

'.dijitSliderImageHandleV ', {
	'top': '-8px',
	'left': '-6px'
},

'.dijitSliderImageHandleH ', {
	'left': '-8px',
	'top': '-5px',
	'vertical-align': 'top'
},

'.dijitSliderBar ', {
	'border-style': 'solid',
	'border-color': 'black'
},

'.dijitSliderBarContainerV ', {
	'position': 'relative',
	'height': '100%',
	'z-index': '1'
},

'.dijitSliderBarContainerH ', {
	'position': 'relative',
	'z-index': '1'
},

'.dijitSliderBarH ', {
	'height': '4px',
	'border-width': '1px 0'
},

'.dijitSliderBarV ', {
	'width': '4px',
	'border-width': '0 1px'
},

'.dijitSliderProgressBar ', {
	'background-color': 'red',
	'z-index': '1'
},

'.dijitSliderProgressBarV ', {
	'position': 'static !important',
	'height': '0%',
	'vertical-align': 'top',
	'text-align': 'left'
},

'.dijitSliderProgressBarH ', {
	'position': 'absolute !important',
	'width': '0%',
	'vertical-align': 'middle',
	'overflow': 'visible'
},

'.dijitSliderRemainingBar ', {
	'overflow': 'hidden',
	'background-color': 'transparent',
	'z-index': '1'
},

'.dijitSliderRemainingBarV ', {
	'height': '100%',
	'text-align': 'left'
},

'.dijitSliderRemainingBarH ', {
	'width': '100% !important'
},

'.dijitSliderBumper ', {
	'overflow': 'hidden',
	'z-index': '1'
},

'.dijitSliderBumperV ', {
	'width': '4px',
	'height': '8px',
	'border-width': '0 1px'
},

'.dijitSliderBumperH ', {
	'width': '8px',
	'height': '4px',
	'border-width': '1px 0'
},

'.dijitSliderBottomBumper, .dijitSliderLeftBumper ', {
	'background-color': 'red'
},

'.dijitSliderTopBumper, .dijitSliderRightBumper ', {
	'background-color': 'transparent'
},

'.dijitSliderDecorationH ', {
	'text-align': 'center'
},

'.dijitSlider .dijitSliderButton ', {
	'font-family': 'monospace',
	'margin': '0',
	'padding': '0',
	'display': 'block'
},

'.dijit_a11y .dijitSliderButtonInner ', {
	'visibility': 'visible !important'
},

'.dijitSliderButtonContainer ', {
	'text-align': 'center',
	'height': '0'
},

'.dijitSlider .dijitButtonNode ', {
	'padding': '0',
	'display': 'block'
},

'.dijitRuleContainer ', {
	'position': 'relative',
	'overflow': 'visible'
},

'.dijitRuleContainerV ', {
	'height': '100%',
	'line-height': '0',
	'float': 'left',
	'text-align': 'left'
},

'.dj_opera .dijitRuleContainerV ', {
	'line-height': '2%'
},

'.dj_ie .dijitRuleContainerV ', {
	'line-height': 'normal'
},

'.dj_gecko .dijitRuleContainerV ', {
	'margin': '0 0 1px 0'
},

'.dijitRuleMark ', {
	'position': 'absolute',
	'border': '1px solid black',
	'line-height': '0',
	'height': '100%'
},

'.dijitRuleMarkH ', {
	'width': '0',
	'border-top-width': '0 !important',
	'border-bottom-width': '0 !important',
	'border-left-width': '0 !important'
},

'.dijitRuleLabelContainer ', {
	'position': 'absolute'
},

'.dijitRuleLabelContainerH ', {
	'text-align': 'center',
	'display': 'inline-block'
},

'.dijitRuleLabelH ', {
	'position': 'relative',
	'left': '-50%'
},

'.dijitRuleMarkV ', {
	'height': '0',
	'border-right-width': '0 !important',
	'border-bottom-width': '0 !important',
	'border-left-width': '0 !important',
	'width': '100%',
	'left': '0'
},

'.dj_ie .dijitRuleLabelContainerV ', {
	'margin-top': '-.55em'
},

'.dijit_a11y .dijitButtonContents .dijitButtonText, .dijit_a11y .dijitTab .tabLabel ', {
	'display': 'inline !important'
},
'.dj_ie7 .dijitButtonNode > BUTTON.dijitButtonContents > * ', {
	'position': 'relative'
},

'.dijitTextArea ', {
	'width': '100%',
	'overflow-y': 'auto'
},
'.dijitTextArea[cols] ', {
	'width': 'auto' 
},
'.dj_ie .dijitTextAreaCols ', {
	'width': 'auto'
},
'.dijitTextArea > DIV ', {
	'text-decoration': 'none',
	'overflow': 'auto',
	'min-height': '1.40em'
},

'.dj_ie .dijitTextArea p ', {
	'margin-top': '0',
	'margin-bottom': '0',
	'line-height': 'normal !important'
},

'.dijitToolbarSeparator ', {
	'height': '18px',
	'width': '5px',
	'padding': '0 1px',
	'margin': '0'
},

'.dijitIEFixedToolbar ', {
	'position': 'absolute',
	
	'top': 'expression(eval((document.documentElement||document.body).scrollTop))'
},

'.RichTextEditable ', {
	'display': 'block'
},

'.dijitTimePickerItemInner ', {
	'text-align': 'center',
	'border': '0',
	'padding': '2px 8px 2px 8px'
},

'.dijitTimePickerTick, .dijitTimePickerMarker ', {
	'border-bottom': '1px solid gray'
},

'.dijitTimePicker .dijitDownArrowButton ', {
	'border-top': 'none !important'
},

'.dijitTimePickerTick ', {
	'color': '#CCC'
},

'.dijitTimePickerMarker ', {
	'color': 'black',
	'background-color': '#CCC'
},

'.dijitTimePickerItemSelected ', {
	'font-weight': 'bold',
	'color': '#333',
	'background-color': '#b7cdee'
},

'.dijitTimePickerItemHover ', {
	'background-color': 'gray',
	'color': 'white',
	'cursor': 'pointer'
},

'.dijit_a11y .dijitTimePickerItem ', {
	'border-bottom': '1px solid #333'
},

'.dijitToggleButtonIconChar ', {
	'display': 'none !important'
},
'.dijit_a11y .dijitToggleButtonIconChar ', {
	'display': 'inline !important'
},

'.dijit_a11y .dijitToggleButtonIconChar ', {
	'visibility': 'hidden'
},
'.dijit_a11y .dijitToggleButtonChecked .dijitToggleButtonIconChar ', {
	'visibility': 'visible !important'
},

'.dijitArrowButtonChar ', {
	'display': 'none !important'
},
'.dijit_a11y .dijitArrowButtonChar ', {
	'display': 'inline !important'
},
'.dijitInputLayoutContainer ', {
	'position': 'relative',
	'overflow': 'hidden'
},
'.dijitSpinnerButtonContainer ', {
	'float': 'right',
	'width': '18px',
	'position': 'relative',
	'overflow': 'hidden'
},
'.dijitSpinner .dijitInputLayoutContainer .dijitArrowButton ', {
	'height': '50%',
	'width': '16px',
	'overflow': 'hidden'
},
'.dijitSpinner .dijitInputLayoutContainer .dijitArrowButtonInner ', {
	'overflow': 'hidden',
	'line-height': '50%'
},
'.dijit_a11y .dijitSpinner .dijitInputLayoutContainer .dijitArrowButton ', {
	'width': '100%'
},
'.dijit_a11y .dijitSpinner .dijitArrowButton .dijitArrowButtonChar ', {
	'font-size': '0.4em',
	'vertical-align': 'top'
},
'.dijit_a11y .dijitSpinnerButtonContainer ', {
	'width': '0.5em',
	'margin-left': '2px',
	'overflow': 'visible'
},
'.dijit_a11y .dijitSpinnerButtonContainer .dijitButtonNode ', {
	'border-width': '1px 0px 0px 1px',
	'border-style': 'solid !important'
},

'.dijitSelect ', {
	'margin': '0.2em'
},
'.dj_ie .dijitSelect, .dj_ie7 .dijitSelect, .dj_iequirks .dijitSelect ', {
	'vertical-align': 'middle'
},
'.dj_ie8 .dijitSelect .dijitButtonText ', {
	'vertical-align': 'top'
},
'.dijitSelect .dijitButtonNode ', {
	'text-align': 'left'
},
'.dijitRtl .dijitSelect .dijitButtonNode ', {
	'text-align': 'right'
},
'.dijitToolbar .dijitSelect ', {
	'margin': '0'
},
'.dj_webkit .dijitToolbar .dijitSelect ', {
	'padding-left': '0.3em'
},
'.dijit_a11y .dijitSelectDisabled .dijitButtonNode ', {
	'border-style': 'outset!important',
	'border-width': 'medium!important',
	'border-color': '#999 !important',
	'color': '#999 !important'
},
'.dijitSelect .dijitButtonContents ', {
	'padding': '0px',
	'background': 'transparent none'
},
'.dijitSelectFixedWidth .dijitButtonContents ', {
	'width': '100%'
},
'.dijitSelect .dijitArrowButton ', {
	'width': '16px'
},

'.dj_ie6 .dijitSelectMenu .dijitMenuItemLabel, .dj_ie7 .dijitSelectMenu .dijitMenuItemLabel ', {
	
	'position': 'static'
},

'.dijitSelectLabel *',
{
	'vertical-align': 'baseline'
},

'.dijitSelectSelectedOption * ', {
	'font-weight': 'bold'
},

'.dijitSelectMenu ', {
	'border-width': '1px'
},

'.dijitSelect .dijitButtonContents ', {
	'white-space': 'nowrap'
},

'.dijitSelectMenu .dijitMenuTable ', {
	'margin': '0px',
	'background-color': 'transparent'
},

'.dijitTextBoxReadOnly, .dijitComboBoxReadOnly, .dijitSpinnerReadOnly, .dijitTextAreaReadOnly, .dijitTextBoxDisabled, .dijitComboBoxDisabled, .dijitSpinnerDisabled, .dijitTextAreaDisabled ', {
	'color': 'gray'
},
'.dj_webkit .dijitTextBoxDisabled INPUT, .dj_webkit .dijitComboBoxDisabled INPUT, .dj_webkit .dijitSpinnerDisabled INPUT ', {
	'color': '#eee'
},
'.dj_webkit INPUT.dijitTextBoxDisabled, .dj_webkit TEXTAREA.dijitTextAreaDisabled ', {
	'color': '#333'
},

'.dijit_a11y .dijitSliderReadOnly, .dijit_a11y .dijitSliderDisabled ', {
	'opacity': '0.6'
},
'.dj_ie .dijit_a11y .dijitSliderReadOnly .dijitSliderBar, .dj_ie .dijit_a11y .dijitSliderDisabled .dijitSliderBar ', {
	'filter': 'alpha(opacity=40)'
},

'.dijit_a11y .dijitSlider .dijitSliderButtonContainer DIV ', {
	'font-family': 'monospace', 
	'font-size': '1em',
	'line-height': '1em',
	'height': 'auto',
	'width': 'auto',
	'margin': '0px 4px'
},
'.dijitForceStatic ', {
	'position': 'static !important'
}	                            
	]);
	/*
	 * Menu Style
	 */
	awfuler.css.addCss('Menu',[
".dijitMenu, .dijitMenuBar", {
	'border': '1px solid #7eabcd',
	'margin': '0px',
	'padding': '0px',
	'background-color': '#f7f7f7'
},

".dijitBorderContainer .dijitMenuBar", {
	'border': '1px solid #ccc'
},

".dijitMenuItem", {
	'font-family': 'sans-serif',
	'margin': '0'
},

".dijitMenuBar .dijitMenuItem", {
	'padding': '4px 5px'
},

".dijitMenuPreviousButton, .dijitMenuNextButton", {
	'font-style': 'italic'
},
".dijitMenuItem td", {
	'padding': '2px'
},

".dijitMenuPassive .dijitMenuItemHover, .dijitMenuItemSelected", {
	'background-color': '#3559ac',
	'color': '#fff'
},

".dijitMenuItemIcon", {
	'width': '16px',
	'height': '16px'
},

".dijitMenuExpand", {
	'width': '7px',
	'height': '7px',
	//'background-image': url('images/spriteArrows.png'),
	'background-position': '-14px 0px'
},
".dj_ie6 .dijitMenuExpand", {
	//'background-image': url('images/spriteArrows.gif'),
},

".dijitMenuSeparatorTop", {
	'border-bottom': '1px solid #9b9b9b'
},

".dijitMenuSeparatorBottom", {
	'border-top': '1px solid #e8e8e8'
},

".dijitCheckedMenuItemIconChar", {
	'display': 'none'
},

".dijitCheckedMenuItemIcon", {
	//'background-image': url('images/checkmark.png'),
	'background-position': '-80px'
},

".dj_ie6 .dijitCheckedMenuItemIcon", {
	//'background-image': url('images/checkmark.gif'),
},

".dijitCheckedMenuItemChecked .dijitCheckedMenuItemIcon", {
	'background-position': '-64px'
}
]);
	/*
	 * Awfulbar Style
	 */
	awfuler.css.addCss('awfulbar',[
'.awfulbar', {
	"width": "100%",
	"height": '34px'
},
'.awfulbar_l', {
	"position": 'fixed',
	"bottom": '0px',
	"left": '16px',
	"width": '100%'
},
'.awfulbar_l', {
	"background-image": url('blue_bar_l.png'),
	"background-repeat": 'no-repeat',
	"height": '34px'
},
'.awfulbar_r', {
	"background-image": url('blue_bar_r.png'),
	"background-repeat": 'no-repeat',
	"height": '34px',
	"width": '8px',
	"float": 'right',
	"margin-right": '-8px'
},
'.awfulbar_bg', {
	"width": '100%',
	"float": 'left',
	"background-image": url('blue_bar_bg.png'),
	"background-repeat": 'repeat-x',
	"height": '34px',
	"margin-left": '8px',
	"margin-right": '8px'
},
'.awfulbarTab', {
	"cursor": "pointer",
	"color": "#fff",
	"font-weight": "bold",
	"border-left": '2px solid #006485',
	"float": 'left',
	"padding": '4px',
	"margin-top": '2px',
	"height": '26px'
},
'.awfulbarTab.Hover, .awfulbarTab.Active', {
	"border": '2px solid #8F8F8F',
	"margin-top": '-2px',
	"margin-bottom": '2px',
	"height": '32px',
	"background-repeat": 'repeat-x',
	"background-color": '#8F8F8F',
	"background-image": url('gray_gradient_20px.gif')
},
'.awfulbarTab.Active', {
	"border": '2px solid #FF0000'
}
]);
	awfuler.css.renderCss();
});

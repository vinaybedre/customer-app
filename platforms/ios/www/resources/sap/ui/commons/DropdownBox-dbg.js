/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.DropdownBox.
jQuery.sap.declare("sap.ui.commons.DropdownBox");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.ComboBox");


/**
 * Constructor for a new DropdownBox.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSearchHelpEnabled searchHelpEnabled} : boolean (default: false)</li>
 * <li>{@link #getSearchHelpText searchHelpText} : string</li>
 * <li>{@link #getSearchHelpAdditionalText searchHelpAdditionalText} : string</li>
 * <li>{@link #getSearchHelpIcon searchHelpIcon} : sap.ui.core.URI</li>
 * <li>{@link #getMaxHistoryItems maxHistoryItems} : int (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.DropdownBox#event:searchHelp searchHelp} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.ComboBox#constructor sap.ui.commons.ComboBox}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The control provides a field that allows end users to an entry out of a list of pre-defined items. The choosable items can be provided in the form of complete list boxes or single list items.
 * Binding (see DataBinding) is also supported for list items.
 * @extends sap.ui.commons.ComboBox
 * @version 1.24.4
 *
 * @constructor
 * @public
 * @name sap.ui.commons.DropdownBox
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.commons.ComboBox.extend("sap.ui.commons.DropdownBox", { metadata : {

	publicMethods : [
		// methods
		"clearHistory"
	],
	library : "sap.ui.commons",
	properties : {
		"searchHelpEnabled" : {type : "boolean", group : "Behavior", defaultValue : false},
		"searchHelpText" : {type : "string", group : "Appearance", defaultValue : null},
		"searchHelpAdditionalText" : {type : "string", group : "Appearance", defaultValue : null},
		"searchHelpIcon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"maxHistoryItems" : {type : "int", group : "Behavior", defaultValue : 0}
	},
	events : {
		"searchHelp" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.DropdownBox with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.commons.DropdownBox.extend
 * @function
 */

sap.ui.commons.DropdownBox.M_EVENTS = {'searchHelp':'searchHelp'};


/**
 * Getter for property <code>searchHelpEnabled</code>.
 * Whether the DropdownBox's search help should be enabled.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>searchHelpEnabled</code>
 * @public
 * @name sap.ui.commons.DropdownBox#getSearchHelpEnabled
 * @function
 */

/**
 * Setter for property <code>searchHelpEnabled</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSearchHelpEnabled  new value for property <code>searchHelpEnabled</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.DropdownBox#setSearchHelpEnabled
 * @function
 */


/**
 * Getter for property <code>searchHelpText</code>.
 * (optional) The text to use for the search help entry.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>searchHelpText</code>
 * @public
 * @name sap.ui.commons.DropdownBox#getSearchHelpText
 * @function
 */

/**
 * Setter for property <code>searchHelpText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSearchHelpText  new value for property <code>searchHelpText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.DropdownBox#setSearchHelpText
 * @function
 */


/**
 * Getter for property <code>searchHelpAdditionalText</code>.
 * (optional) The additional Text to use for the search help entry.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>searchHelpAdditionalText</code>
 * @public
 * @name sap.ui.commons.DropdownBox#getSearchHelpAdditionalText
 * @function
 */

/**
 * Setter for property <code>searchHelpAdditionalText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSearchHelpAdditionalText  new value for property <code>searchHelpAdditionalText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.DropdownBox#setSearchHelpAdditionalText
 * @function
 */


/**
 * Getter for property <code>searchHelpIcon</code>.
 * (optional) The src of the icon to use for the search help entry.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>searchHelpIcon</code>
 * @public
 * @name sap.ui.commons.DropdownBox#getSearchHelpIcon
 * @function
 */

/**
 * Setter for property <code>searchHelpIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sSearchHelpIcon  new value for property <code>searchHelpIcon</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.DropdownBox#setSearchHelpIcon
 * @function
 */


/**
 * Getter for property <code>maxHistoryItems</code>.
 * Maximum number of history items in the list.
 * If 0 no history is displayed or stored. The history is locally stored on the client. Therefore do not activate this feature when this control handles confidential data.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>maxHistoryItems</code>
 * @public
 * @name sap.ui.commons.DropdownBox#getMaxHistoryItems
 * @function
 */

/**
 * Setter for property <code>maxHistoryItems</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMaxHistoryItems  new value for property <code>maxHistoryItems</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.DropdownBox#setMaxHistoryItems
 * @function
 */


/**
 * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and F4 key is pressed.
 *
 * @name sap.ui.commons.DropdownBox#searchHelp
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.value The current value of the DropdownBox.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'searchHelp' event of this <code>sap.ui.commons.DropdownBox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.DropdownBox</code>.<br/> itself. 
 *  
 * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and F4 key is pressed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.DropdownBox</code>.<br/> itself.
 *
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.DropdownBox#attachSearchHelp
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'searchHelp' event of this <code>sap.ui.commons.DropdownBox</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.DropdownBox#detachSearchHelp
 * @function
 */

/**
 * Fire event searchHelp to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code> The current value of the DropdownBox.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.DropdownBox#fireSearchHelp
 * @function
 */


/**
 * Using this method the history of the DropdownBox can be cleared.
 * This might be necessary if the items of the DropdownBox have changed. Otherwise invalid items may appear in the history.
 *
 * @name sap.ui.commons.DropdownBox#clearHistory
 * @function
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap\ui\commons\DropdownBox.js
jQuery.sap.require("sap.ui.core.History");
jQuery.sap.require("sap.ui.core.SeparatorItem");

/**
 * Initialization method.
 * @private
 */
sap.ui.commons.DropdownBox.prototype.init = function() {
	sap.ui.commons.ComboBox.prototype.init.apply(this, arguments);
	this._oValueBeforePaste = null;
	this._oValueBeforeOpen = null;
	this.__aItems = null;
	this._iCursorPosBeforeBackspace = null;
	/** 
	 * Array of ListItems containing SearchHelp followed by Separator 
	 * @type {sap.ui.core.ListItem[]} 
	 * @private 
	 */
	this._searchHelpItem = null;
	this._iItemsForHistory = 10; // UX defined history shall appear if there are more than 10 items
	this._oHistory = new sap.ui.core.History(this.getId());
};

/**
 * Cleanup instance.
 * @private
 */
sap.ui.commons.DropdownBox.prototype.exit = function() {
	var sIdPrefix = this.getId() + "-h-",i;
	// destroys searchHelpItems
	if ( this._searchHelpItem ) {
		this._searchHelpItem[0].destroy();
		this._searchHelpItem[1].destroy();
		this._searchHelpItem = null;
	}

	sap.ui.commons.ComboBox.prototype.exit.apply(this, arguments);
	// check for and remaining history items and destroy them
	function remove(id) {
	  var oItem = sap.ui.getCore().byId(id);
	  oItem && oItem.destroy();
	}
	for(var i = 0; i < this.getMaxHistoryItems(); i++) {
	  remove(sIdPrefix+i);
	}
	if (this.__oSeparator) {
		this.__oSeparator.destroy();
		this.__oSeparator = null;
	}
	this._oHistory = null;

	this.__aItems = null;
	this._sWantedValue = undefined;
};

/**
 * Ensure that handed in ListBoxes are taken from the visible UI immediately.
 * @param {object} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onAfterRendering = function(oEvent){

	sap.ui.commons.ComboBox.prototype.onAfterRendering.apply(this, arguments);

	if (!this._sHandleItemsChanged) {
		// if _handleItemsChanges is executed, checkValueInItems is executed inside
		this.checkValueInItems();
	}

};

/*
 * Handle items aggregation (if Popup is opened, ListBox has invalid data because of history and filter)
 */
sap.ui.commons.DropdownBox.prototype.getItems = function(){

	if (this.oPopup && this.oPopup.isOpen()) {
		// take items from typeAhead array
		return this.__aItems;
	}else{
		return sap.ui.commons.ComboBox.prototype.getItems.apply(this, arguments);
	}

};
sap.ui.commons.DropdownBox.prototype.insertItem = function(oItem, iIndex){
	if (this.oPopup && this.oPopup.isOpen()) {
		// take items from typeAhead array
		this.__aItems.splice(iIndex, 0, oItem);
		if (this.__aItems.length <= this._iItemsForHistory && !this._searchHelpItem) {
			// if no history ListBox is not changed -> update ListBox too
			this._getListBox().insertItem(oItem, iIndex);
		}
		if (!this.bNoItemCheck) {
			// history might be not up do date -> rebuild; suppose the text before cursor is just typed in to use filter
			var $Ref = jQuery(this.getInputDomRef());
			var iCursorPos = $Ref.cursorPos();
			this._doTypeAhead($Ref.val().substr(0, iCursorPos), "");
		}
		return this;
	}else{
		return sap.ui.commons.ComboBox.prototype.insertItem.apply(this, arguments);
	}
};
sap.ui.commons.DropdownBox.prototype.addItem = function(oItem){
	if (this.oPopup && this.oPopup.isOpen()) {
		// take items from typeAhead array
		this.__aItems.push(oItem);
		if (this.__aItems.length <= this._iItemsForHistory && !this._searchHelpItem) {
			// if no history ListBox is not changed -> update ListBox too
			this._getListBox().addItem(oItem);
		}
		if (!this.bNoItemCheck) {
			// history might be not up do date -> rebuild; suppose the text before cursor is just typed in to use filter
			var $Ref = jQuery(this.getInputDomRef());
			var iCursorPos = $Ref.cursorPos();
			this._doTypeAhead($Ref.val().substr(0, iCursorPos), "");
		}
		return this;
	}else{
		return sap.ui.commons.ComboBox.prototype.addItem.apply(this, arguments);
	}
};
sap.ui.commons.DropdownBox.prototype.removeItem = function(vElement) {
	if (this.oPopup && this.oPopup.isOpen()) {
		// take items from typeAhead array
		var oItem = null;
		var vOriginalElement = vElement;

		if (typeof(vElement) == "string") { // ID of the element is given
			vElement = sap.ui.getCore().byId(vElement);
		}

		if (typeof(vElement) == "object") { // the element itself is given or has just been retrieved
			for (var i = 0; i < this.__aItems.length; i++) {
				if (this.__aItems[i] == vElement) {
					vElement = i;
					break;
				}
			}
		}

		if (typeof(vElement) == "number") { // "vElement" is the index now
			if (vElement < 0 || vElement >= this.__aItems.length) {
				jQuery.sap.log.warning("Element.removeAggregation called with invalid index: Items, " + vElement);

			} else {
				oItem = this.__aItems[vElement];
				this.__aItems.splice(vElement, 1);
			}
		}
		if (this.__aItems.length <= this._iItemsForHistory && !this._searchHelpItem) {
			// if no history ListBox is not changed -> update ListBox too
			this._getListBox().removeItem(vOriginalElement);
		}
		if (!this.bNoItemCheck) {
			// history might be not up do date -> rebuild; suppose the text before cursor is just typed in to use filter
			var $Ref = jQuery(this.getInputDomRef());
			var iCursorPos = $Ref.cursorPos();
			this._doTypeAhead($Ref.val().substr(0, iCursorPos), "");
		}
		return oItem;
	}else{
		return sap.ui.commons.ComboBox.prototype.removeItem.apply(this, arguments);
	}
};
sap.ui.commons.DropdownBox.prototype.removeAllItems = function() {
	if (this.oPopup && this.oPopup.isOpen()) {
		// take items from typeAhead array
		var aItems = this.__aItems;
		if (!aItems) {
			return [];
		}

		// as an empty list can not have an history or an searchHelp just clear List
		sap.ui.commons.ComboBox.prototype.removeAllItems.apply(this, arguments);

		this.__aItems = new Array();

		return aItems;
	}else{
		return sap.ui.commons.ComboBox.prototype.removeAllItems.apply(this, arguments);
	}
};
sap.ui.commons.DropdownBox.prototype.indexOfItem = function(oItem){
	if (this.oPopup && this.oPopup.isOpen()) {
		// take items from typeAhead array
		if (this.__aItems) {
			if (this.__aItems.length == undefined) {
				return -2;
			} // not a multiple aggregation

			for (var i = 0; i < this.__aItems.length; i++) {
				if (this.__aItems[i] == oItem) {
					return i;
				}
			}
		}
		return -1;
	}else{
		return sap.ui.commons.ComboBox.prototype.indexOfItem.apply(this, arguments);
	}
};
sap.ui.commons.DropdownBox.prototype.destroyItems = function(){
	if (this.oPopup && this.oPopup.isOpen()) {
		// take items from typeAhead array
		if (!this.__aItems) {
			return this;
		}

		// first remove all items from ListBox and then destroy them,
		// do not use destroy function from ListBox because history items and search field item
		// must not be destroyed
		this._getListBox().removeAllItems();

		for (var i = 0; i < this.__aItems.length; i++) {
			if (this.__aItems[i]) {
				this.__aItems[i].destroy();
			}
		}
		this.__aItems = new Array();

		return this;
	}else{
		return sap.ui.commons.ComboBox.prototype.destroyItems.apply(this, arguments);
	}
};

sap.ui.commons.DropdownBox.prototype.updateItems = function(){

	sap.ui.commons.ComboBox.prototype.updateItems.apply(this, arguments);

	if (this.oPopup && this.oPopup.isOpen()) {
		// history might be not up do date -> rebuild; suppose the text before cursor is just typed in to use filter
		var $Ref = jQuery(this.getInputDomRef());
		var iCursorPos = $Ref.cursorPos();
		this._doTypeAhead($Ref.val().substr(0, iCursorPos), "");
	}

};

sap.ui.commons.DropdownBox.prototype._handleItemsChanged = function(oEvent, bDelayed){

	if (this.bNoItemCheck) {
		return;
	}

	if (this.__aItems && (!this.oPopup || !this.oPopup.isOpen())) {
		// if popup is closed internal typeAhead item array must be cleared -> otherwise items could be inconsistent
		throw new Error("DropdownBox "+this.getId()+" : this.__aItems is not empty!");
	}
	if (this.getListBox() && this.oPopup && this.oPopup.isOpen()) {
		// items are maintained directly on ListBox adjust internal item array
		if (this.__aItems.length > this._iItemsForHistory || this._searchHelpItem) {
			switch (oEvent.getParameter("event")) {
			case "destroyItems":
				// destroy items not destroyed from ListBox
				for (var i = 0; i < this.__aItems.length; i++) {
					oItem = this.__aItems[i];
					if ( !oItem.bIsDestroyed ) {
						oItem.destroy();
					}
				}
				this.__aItems = new Array();
				if (this.getSearchHelpEnabled()) {
					// recreate search help and separator item
					this._searchHelpItem = null;
					this.setSearchHelpEnabled(this.getSearchHelpEnabled(), this.getSearchHelpText(), this.getSearchHelpAdditionalText(), this.getSearchHelpIcon());
				}
				break;
			case "removeAllItems":
				this.__aItems = new Array();
				break;
			case "removeItem":
				var oItem = oEvent.getParameter("item");
				for (var i = 0; i < this.__aItems.length; i++) {
					if (this.__aItems[i] == oItem) {
						this.__aItems.splice(i, 1);
						break;
					}
				}
				if (this.__aItems.length <= this._iItemsForHistory) {
					// now we don't have a filter or history any longer -> set all items to ListBox
					this._getListBox().setItems(this.__aItems, false, true);
				}
				break;
			case "insertItem":
				this.__aItems.splice(oEvent.getParameter("index"), 0, oEvent.getParameter("item"));
				break;
			case "addItem":
				this.__aItems.push(oEvent.getParameter("item"));
				break;
			case "setItems":
				this.__aItems = oEvent.getParameter("items");
				break;
			case "updateItems":
				// destroy items not destroyed from ListBox
				for (var i = 0; i < this.__aItems.length; i++) {
					oItem = this.__aItems[i];
					if ( !oItem.bIsDestroyed ) {
						oItem.destroy();
					}
				}
				if (this.getSearchHelpEnabled()) {
					// recreate search help and separator item
					this._searchHelpItem = null;
					this.setSearchHelpEnabled(this.getSearchHelpEnabled(), this.getSearchHelpText(), this.getSearchHelpAdditionalText(), this.getSearchHelpIcon());
				}
				this.__aItems = this._getListBox().getItems();
				break;
			default:
				break;
			}
		}else{
			// no filter, no additional items
			this.__aItems = this._getListBox().getItems();
		}
		// history might be not up do date -> rebuild; suppose the text before cursor is just typed in to use filter
		var $Ref = jQuery(this.getInputDomRef());
		var iCursorPos = $Ref.cursorPos();
		this._doTypeAhead($Ref.val().substr(0, iCursorPos), "");
	}

	sap.ui.commons.ComboBox.prototype._handleItemsChanged.apply(this, arguments);

	this.checkValueInItems();
};

//***********************************************************
//Mouse handling...
//***********************************************************

/**
 * Handle the click event happening in the DropdownBox
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onclick = function(oEvent) {

	if(!this.mobile && this.getEnabled && this.getEnabled() && this.getEditable()){
		if(this.oPopup && this.oPopup.isOpen()){
			this._close();
		} else if(!this._F4ForClose) {
			this._open();
		}
		this.focus();
	}
	this._F4ForClose = false;

};

/**
 * Handle mouseup event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onmouseup = function(oEvent) {
	if(oEvent.target == this.getF4ButtonDomRef() || this.mobile) {
		return;
	}

	this._doSelect();
	oEvent.preventDefault();

};

sap.ui.commons.DropdownBox.prototype.onmousedown = function(oEvent){

	if(!this.getEnabled() || !this.getEditable()) {
		return;
	}

	// DropdownBox opens and closes on cleck on F4-Button and on input field
	if(this.oPopup && this.oPopup.isOpen()){
		this._F4ForClose = true;
	} else {
		this._F4ForOpen = true;
	}

	sap.ui.commons.ComboBox.prototype.onmousedown.apply(this, arguments);

};


//***********************************************************
//Keyboard handling...
//***********************************************************

/**
 * Handle sapshow pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsapshow = function(oEvent){

	if (this.mobile) {
		return;
	}

	if (!this.getEnabled() || !this.getEditable()) {
		oEvent.preventDefault();
		oEvent.stopImmediatePropagation();
		return;
	}

	if(oEvent.which === jQuery.sap.KeyCodes.F4 && this._searchHelpItem){
		this._close();
		this.fireSearchHelp({value: jQuery(this.getInputDomRef()).val()});
		oEvent.preventDefault();
		oEvent.stopImmediatePropagation();
		return;
	}
	if(this.oPopup && this.oPopup.isOpen()) {
		this._close();
	} else {
		this._open();
		var oLB = this._getListBox();
		oLB.scrollToIndex(oLB.getSelectedIndex());
		this._doSelect();
	}
	oEvent.preventDefault();
	oEvent.stopImmediatePropagation();
};

/**
 * Handle keydown event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onkeydown = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no own keyboard handling
		return;
	}

	if((!!sap.ui.Device.browser.internet_explorer && (oEvent.which == jQuery.sap.KeyCodes.DELETE || oEvent.which == jQuery.sap.KeyCodes.BACKSPACE)) ||
	   (!!sap.ui.Device.browser.webkit && (oEvent.which == jQuery.sap.KeyCodes.DELETE || oEvent.which == jQuery.sap.KeyCodes.BACKSPACE))) {
		//as IE and Webkit do not fire keypress event for DELETE or BACKSPACE
		this.onkeypress(oEvent);
	}

	if(!!!sap.ui.Device.browser.internet_explorer || oEvent.which !== jQuery.sap.KeyCodes.BACKSPACE) {
		return;
	}

	// Quite a trick to solve the issue with 'delete from last cursorPos' vs. 'delete last (proposed / auto-completed) character in IE
	this._iCursorPosBeforeBackspace = jQuery(this.getInputDomRef()).cursorPos();
};

/**
 * Handle paste event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onpaste = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no own keyboard handling
		return;
	}

	//prevent 'multiple-pastes' by e.g. holding down paste combination.
	if(this._oValueBeforePaste === null) {
		this._oValueBeforePaste = jQuery(this.getInputDomRef()).val();
	}
};

/**
 * Handle keyup event
 * This must only be considered if it is from Backspace-key in IE or after paste.
 * In case there is a keyup with a tab this results from being entered via tabbing and can be ignored, too.
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onkeyup = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no own keyboard handling
		return;
	}

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	var iKC = oEvent.which,
		oKC = jQuery.sap.KeyCodes;

	// call keyup function of TextField to get liveChange event
	sap.ui.commons.TextField.prototype.onkeyup.apply(this, arguments);

	if(!(!!sap.ui.Device.browser.internet_explorer && iKC === oKC.BACKSPACE) && this._oValueBeforePaste === null || iKC === oKC.TAB) {
		return;
	}
	// it's either backspace in IE or after paste (cumulating potentially multiple pastes, too)

	// as it is keyboard interaction, open the proposal list (if not yet done)
	if(!this.oPopup || !this.oPopup.isOpen()){
		this.noTypeAheadByOpen = true; // no typeahead and rerendering during open because of ARIA update issues
		this._open();
		this.noTypeAheadByOpen = undefined;
	}
	var $Ref = jQuery(this.getInputDomRef()),
		bValid = false;
	// the first case (backspace-handling) could only be true in IE. For FF we do this (less 'tricky') in keypress handler
	if(iKC === oKC.BACKSPACE && this._iCursorPosBeforeBackspace !== null) {
		var iCursorPos = $Ref.cursorPos();
		if(this._iCursorPosBeforeBackspace !== iCursorPos) {
			iCursorPos++;
		} // 'normalize' cursor position for upcoming handling... especially IE8
		this._iCursorPosBeforeBackspace = null; // forget being called by backspace handling
		bValid = this._doTypeAhead($Ref.val().substr(0, iCursorPos-1), "");
	}
	// this must happen to check for valid entry after paste and if required -> rollback
	else if(!(bValid = this._doTypeAhead("", $Ref.val()))){
		$Ref.val(this._oValueBeforePaste);
	}
	// Ensure visibility as well as filtering and new height is applied
	if(bValid) {
		this._getListBox().rerender();
	}

	this._oValueBeforePaste = null;
};

/**
 * Handle pseudo event onsaphome
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsaphome = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no own keyboard handling
		return;
	}

	if((!this.oPopup || !this.oPopup.isOpen()) && this.getEditable() && this.getEnabled()) {
		sap.ui.commons.TextField.prototype.onsaphome.apply(this, arguments); // before setting the cursor to have old cursor position in there
		var $Ref = jQuery(this.getInputDomRef());
		$Ref.cursorPos(0);
		this._updateSelection();
		oEvent.preventDefault();
	} else {
		sap.ui.commons.ComboBox.prototype.onsaphome.apply(this, arguments);
	}
};

/**
 * Handle pseudo event onsapdelete.
 * If triggered with open dropdown and current item provided by history feature,
 * removes the selected item from this instance's history.
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsapdelete = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no own keyboard handling
		return;
	}

	if(!this.oPopup || !this.oPopup.isOpen()) {
		return;
	}
	var oLB = this._getListBox(),
		oItem = oLB.getSelectedItem(),
		aMatches = oItem.getId().match(/\-h\-([0-4])/),
		iIdx = oLB.getSelectedIndex();
	if(aMatches && aMatches.length === 2){
		this._oHistory.remove(oItem.getText());
		oLB.removeItem(iIdx);
		var iLength = this._oHistory.get().length;
		if(iLength === 0) {// remove separator element, too
			oLB.removeItem(0);
		}
		oLB.rerender();
		var iNewIndex = iIdx + (this._searchHelpItem?2:0);
		if (iNewIndex == iLength) {
			// seperator item can not selected
			iNewIndex++;
		}
		oLB.setSelectedIndex(iNewIndex);
		this.setValue(oLB.getSelectedItem().getText());
	}
};

/**
 * Handle keypress event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onkeypress = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no own keyboard handling
		return;
	}

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	var iKC = oEvent.which,
		iKeyCode = oEvent.keyCode,
		oKC = jQuery.sap.KeyCodes;
	if(( sap.ui.commons.ComboBox._isHotKey(oEvent)
		    || ( !!sap.ui.Device.browser.firefox && iKeyCode === oKC.HOME ) || // IE & webkit fires no keypress on HOME, but "$" has the same keyCode
			iKeyCode === oKC.F4 && oEvent.which === 0 ) /*this is the Firefox case and ensures 's' with same charCode is accepted*/
			&& !(oEvent.ctrlKey && oEvent.which == 120)/*Ctrl+X*/ ) {
		return;
	}else if(iKeyCode == oKC.ESCAPE){
		var sValue = this.getProperty("value");
		var oInput = this.getInputDomRef();
		if(oInput && oInput.value !== sValue) {
			jQuery(oInput).val(sValue);
		}
		return;
	}
	var oNewChar = String.fromCharCode(iKC),
		$Ref = jQuery(this.getInputDomRef()),
		iCursorPos = $Ref.cursorPos(),
		sVal = $Ref.val();
	//jQuery.sap.log.debug("current value is: " + sVal + " with cursorPos: " + iCursorPos + " and newChar is: " + oNewChar);

	if(!this.oPopup || !this.oPopup.isOpen()){
		this.noTypeAheadByOpen = true; // no typeahead and rerendering during open because of ARIA update issues
		this._open();
		this.noTypeAheadByOpen = undefined;
	}
	var bValid = false;
	if(iKC === oKC.BACKSPACE) {// only happens in FF or other non-IE-browsers. IE does not support BACKSPACE in keypress
		bValid = this._doTypeAhead(sVal.substr(0, iCursorPos-1), "");
	} else {
		bValid = this._doTypeAhead(sVal.substr(0, iCursorPos), oNewChar);
	}

	oEvent.preventDefault();
};

/**
 * Move the cursor one step to the right (and adapt selection)
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsapright = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no own keyboard handling
		return;
	}

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	var bRtl = sap.ui.getCore().getConfiguration().getRTL();
	if (!bRtl) {
		this._updateSelection(1);
	} else {
		this._updateSelection(-1);
	}
	oEvent.preventDefault();
};

/**
 * Move the cursor one step to the left (and adapt selection)
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsapleft = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no own keyboard handling
		return;
	}

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	var bRtl = sap.ui.getCore().getConfiguration().getRTL();
	if (!bRtl) {
		this._updateSelection(-1);
	} else {
		this._updateSelection(1);
	}
	oEvent.preventDefault();
};


//***********************************************************
// Focus handling...
//***********************************************************

/**
 * Handle focusin event
 * Ensures the text gets selected when focus gets into the field
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onfocusin = function(oEvent) {

	if (!this.oPopup || !this.oPopup.isOpen() || this._bFocusByOpen) {
		// if popup is open the text-selection is made by doTypeAhead
		// do not select all text in this case
		var $Ref = jQuery(this.getInputDomRef()),
		l = $Ref.val().length;
		if(l > 0 && !this.mobile){
			this._doSelect(0, l);
		}
		this._bFocusByOpen = undefined;
	}
	sap.ui.commons.ComboBox.prototype.onfocusin.apply(this, arguments);
};


//***********************************************************
// Text selection handling...
//***********************************************************

/**
 * Handle the select event happening in the DropdownBox
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onselect = function(oEvent) {

	var iTimeStamp = new Date().getTime();

	if(this._bIgnoreSelect) {
		this._bIgnoreSelect = false;
		this.iOldTimestamp = iTimeStamp;
		return;
	}
	if (this.iOldTimestamp && iTimeStamp - this.iOldTimestamp < 50) {
		// prevent double call of event in IE9 and jQuery 1.7.1
		return;
	}
	this.iOldTimestamp = undefined;

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	var $Ref = jQuery(this.getInputDomRef()),
		iNewCursor = $Ref.cursorPos(),
		sVal = $Ref.val();
	if(sVal.length > 0 && iNewCursor > 0) {
		// if nothing is selected do not initialate value
		this._doTypeAhead(sVal.substr(0,iNewCursor), "");
		if (!this.oPopup || !this.oPopup.isOpen()) {
			// as popup is not open restore listbox item like on popup close
			this._cleanupClose(this._getListBox())
		}
	}
	oEvent.preventDefault();
};

sap.ui.commons.DropdownBox.prototype._determinePosinset = function(aItems, iNewIndex){

	var iPos = iNewIndex + 1;

	if(this.oPopup && this.oPopup.isOpen()){
		this.dontSetPoisinset = undefined;
		var oItem = aItems[iNewIndex];
		// history and search help only available if open
		var bHistory = aItems[0].getId().search(this.getId() + "-h-") != -1;

		if (oItem.getId().search(this.getId() + "-h-") == -1) {
			// no history item
			if (bHistory) {
				//but history items available-> remove separator from index
				iPos = iPos - 1;
			}
			if (this._searchHelpItem) {
				// search help -> remove from index
				iPos = iPos - 2;
			}
		}
	}

	return iPos;

}

/**
 * Selects the text of the InputDomRef in the given range
 * @param {int} [iStart=0] start position of the text selection
 * @param {int} [iEnd=<length of text>] end position of the text selection
 * @return {sap.ui.commons.DropdownBox} this DropdownBox instance
 * @private
 */
sap.ui.commons.DropdownBox.prototype._doSelect = function(iStart, iEnd){

	this._bIgnoreSelect = true;

	var oDomRef =this.getInputDomRef();

	if (oDomRef) {
		//if no Dom-Ref - no selection (Maybe popup closed)
		var $Ref = jQuery(oDomRef);
		// do not call focus in DropdownBox
		$Ref.selectText(iStart ? iStart : 0, iEnd ? iEnd : $Ref.val().length);
	}

	return this;

};

/**
 * Adapt the selection to the cursor position and move the curser beforehand (if parameter iMoveBy is given)
 * @param {int} iMoveBy the number of places the cursor should move (can be positive (move right) or negative (move left))
 * @private
 */
sap.ui.commons.DropdownBox.prototype._updateSelection = function(iMoveBy) {
	var $Ref = jQuery(this.getInputDomRef()),
		iNewCursor = $Ref.cursorPos() + (iMoveBy || 0),
		sVal = $Ref.val();
	this._doTypeAhead(sVal.substr(0,iNewCursor), "");
	if (!this.oPopup || !this.oPopup.isOpen()) {
		// as popup is not open restore listbox item like on popup close
		this._cleanupClose(this._getListBox())
	}else{
		this._getListBox().rerender();
	}
};


//***********************************************************
// Type ahead and list box related
//***********************************************************

/*
 * Returns whether the new value is a valid one
 * @param {object} oValue the value before the event
 * @param {string} oNewChar the newly added character
 * @param {boolean} bNoFilter omit the filtering (e.g. when opening the listbox)
 * @param {int} iItemIndex use this item, only mix up hitory and filter
 * @returns {boolean} whether the new value is a valid one
 * @private
 */
sap.ui.commons.DropdownBox.prototype._doTypeAhead = function(oValue, oNewChar, bNoFilter, iItemIndex){
	if(this.__doTypeAhead === true){
		return; // recursive from opening the Popup and the _prepareOpen-method
	}
	this.__doTypeAhead = true;
	this._sWantedSelectedKey = undefined; // something typed -> do not search again for not existing items
	this._sWantedSelectedItemId = undefined;
	this._sWantedValue = undefined;

	var oLB = this._getListBox(),
		//oSelectedItem = oLB.getSelectedItem(),
		iMaxPopupItems = this.getMaxPopupItems(),
		aItems = this.__aItems || oLB.getItems(),
		iVisibleItemsCnt = aItems.length,
		// filtering and history only apply when more than a certain number of items is there
		bHistory = aItems.length > this._iItemsForHistory,
		bFilter = !bNoFilter && bHistory,
		oNewValue = oValue + oNewChar,
		oSpecials = new RegExp("[.*+?|()\\[\\]{}\\\\]", "g"), // .*+?|()[]{}\
		sRegExpValue = oNewValue.toLowerCase().replace(oSpecials, "\\$&"), //escape special characters
		rValFilter = RegExp("^" +sRegExpValue + ".*$"),
		iMove = oNewChar && oNewChar.length || 0,
		$Ref = jQuery(this.getInputDomRef());

	this.__aItems = aItems;

	if (iVisibleItemsCnt <= 0) {
		// no items -> no typeAhead possible -> everything is wrong
		this.__doTypeAhead = false;
		return false;
	}

	var aCurrentItems,
		// identify items matching already entered value (for autocomplete, item selection)
		aFilteredItems = this._getFilteredItems(aItems, rValFilter),
		bValid = aFilteredItems.length > 0;

	if (!bValid){
		// if not valid just show all items
		bFilter = false;
	}
	// in case we have to filter, only the matching subset of the current items (the configured set) is relevant for display
	if(bFilter) {
		aCurrentItems = aFilteredItems;
	}
	else {
		aCurrentItems = aItems.slice(0);
	}

	var aHistoryItems = [];
	if(bHistory) {
		aHistoryItems = this._addHistoryItems(aCurrentItems, bFilter && rValFilter);
		oLB.setItems(aCurrentItems, false, true); // fire no itemsChanged event because this would update Value property
		iVisibleItemsCnt = aCurrentItems.length;
	}
	oLB.setVisibleItems(iMaxPopupItems < iVisibleItemsCnt ? iMaxPopupItems : -1);

	var oItem,
	iHistLength = aHistoryItems.length;

	if (iItemIndex >= 0) {
		// use the required item
		oItem = aItems[iItemIndex];
	}
	// if there is no filter (e.g. when opening) but a history, try to find the current value in the history
	if(!bFilter && iHistLength > 0 && bValid) {
		aHistoryItems = this._getFilteredItems(aHistoryItems, rValFilter);
		oItem = aHistoryItems[0];
	}
	// in case there is filtering in place, select the first (valid) item
	if(bFilter) {
		oItem = aFilteredItems[0];
	} else if(!oItem) {
		// in case there was no filtering and no valid item from history
		// select the first of the filtered non-history items
		if(aFilteredItems.length > 0) {
			oItem = aFilteredItems[0];
		}else {// use last valid item
			var sOldValue = $Ref.val();
			for ( var i = 0; i < aCurrentItems.length; i++) {
				var oCheckItem = aCurrentItems[i];
				if (oCheckItem.getEnabled() && oCheckItem.getText() == sOldValue) {
					oItem = oCheckItem;
					break;
				}
			}
			if(!oItem) {// still no item found - use first one (can this happen???)
				oItem = aCurrentItems[0];
			}
		}
	}
	// OK, we know what to select, let's insert search help if required
	var oSHI = this._searchHelpItem;
	if(oSHI){
		aCurrentItems.splice(iHistLength++, 0, oSHI[0], oSHI[1]);
		oLB.setItems(aCurrentItems, false, true); // fire no itemsChanged event because this would update Value property
	}
	// find and select the item and update the text and the selection in the inputfield
	var i = oLB.indexOfItem(oItem),
	oText = oItem.getText();
	var iPos = i + 1;
	var iSize = aCurrentItems.length;
	if (aHistoryItems.length > 0){
		iSize = iSize - 1;
	}
	if (oSHI){
		iSize = iSize - 2;
	}
	if (iPos > aHistoryItems.length) {
		if (aHistoryItems.length > 0){
			// no history item but history available -> remove separator from position
			iPos = iPos - 1;
		}
		if(oSHI){
			// search help -> remove search help item and separator from position
			iPos = iPos - 2;
		}
	}
	$Ref.attr("aria-posinset", iPos);
	$Ref.attr("aria-setsize", iSize);
	$Ref.val(oText);
	this._sTypedChars = oNewValue;
	this._doSelect(oValue.length + iMove, oText.length);

	oLB.setSelectedIndex(i);
	if(oSHI && i == 2){
		// special case -> search help item exist and first real item selected -> show search help too
		oLB.scrollToIndex(0);
	}else{
		oLB.scrollToIndex(i);
	}
	this._iClosedUpDownIdx = i;

	if (!bValid){
		$Ref = this.$();
		$Ref.addClass("sapUiTfErr");
		jQuery.sap.delayedCall(300, $Ref, "removeClass", ["sapUiTfErr"]);
		// move cursor back to old position and select from there
		$Ref.cursorPos(oValue.length);
		this._doSelect(oValue.length, oText.length);
	}
	this.__doTypeAhead = false;
	return bValid;
};

/**
 * Walks over the list of available items in the given oListBox and updates the visual selection.
 * Also updates the Popup to show the right content.
 *
 * @param {sap.ui.commons.ListBox} oListBox listBox belonging to this ComboBox instance.
 * @param {sap.ui.core.Popup} oPopup the instance of the Popup functionality used for opening the proposal list
 * @returns {sap.ui.commons.DropdownBox}
 * @private
 */
sap.ui.commons.DropdownBox.prototype._prepareOpen = function(oListBox, oPopup){
	this._oValueBeforeOpen = this.$().val();

	// remember we opening the popup (needed in applyFocusInfo called after rerendering of ListBox)
	this._Opening = true;

	if (!this.noTypeAheadByOpen) {
		// there might be items with same text -> try to find out what is currently selected.
		var aItems = this.getItems();
		var iItemIndex;
		if (this._iClosedUpDownIdx >= 0) {
			iItemIndex = this._iClosedUpDownIdx;
		} else if(this.getSelectedItemId()){
			iItemIndex = this.indexOfItem(sap.ui.getCore().byId(this.getSelectedItemId()));
		}
		this._doTypeAhead("", jQuery(this.getInputDomRef()).val(), true, iItemIndex);
	}
	return this;
};

sap.ui.commons.DropdownBox.prototype._handleOpened = function(){

	sap.ui.commons.ComboBox.prototype._handleOpened.apply(this, arguments);

	if (!sap.ui.Device.browser.internet_explorer) {
		// because in IE already async made in ComboBox
		jQuery(this.getInputDomRef()).focus();
	}else{
		this._bFocusByOpen = true;
	}

};

/**
 * Ensures the given listbox is 'cleaned-up'.
 * @param {sap.ui.commons.ListBox} oListBox the listBox to clean up
 * @returns {sap.ui.commons.DropdownBox} this instance of DropdownBox
 * @private
 */
sap.ui.commons.DropdownBox.prototype._cleanupClose = function(oListBox){
	if(this.__aItems) {
		// restore selected Item
		var oSelectedItem = oListBox.getSelectedItem();
		oListBox.setItems(this.__aItems, false, true); // fire no itemsChanged event because this would update Value property
		this._iClosedUpDownIdx = oListBox.indexOfItem(oSelectedItem);
		oListBox.setSelectedIndex(this._iClosedUpDownIdx);
		this.__aItems = undefined;
	}
	this._oValueBeforeOpen = null;
	this._Opening = undefined;
	return this;
};

/**
 * Returns an array of ListItems matching given rValFilter.
 *
 * @param {sap.ui.core.ListItem[]} aItems array of list items to be filtered
 * @param {RegExp} rValFilter filter expression that can be used to identify valid items
 * @returns {sap.ui.core.ListItem[]} array of list items matching given rValFilter
 * @private
 */
sap.ui.commons.DropdownBox.prototype._getFilteredItems = function(aItems, rValFilter){
	var aTmpItems = aItems.slice(0),
		oItem;
	for (var i = aTmpItems.length - 1; i >= 0; i--){
		oItem = aTmpItems[i];
		if(!rValFilter.test(oItem.getText().toLowerCase()) || !oItem.getEnabled()) {
			aTmpItems.splice(i,1);
		}
	}
	return aTmpItems;
};

/**
 * Enriches provided array of listitems with history if history entries matching given rFilter exist.
 *
 * @param {sap.ui.core.ListItem[]} aItems array of list items to be enriched by history
 * @param {RegExp} rFilter filter expression that can be used to identify valid history items
 * @returns {sap.ui.core.ListItem[]} array of new 'history-list-items' (comprising separator)
 * @private
 */
sap.ui.commons.DropdownBox.prototype._addHistoryItems = function(aItems, rFilter) {
	var sIdPrefix = this.getId() + "-h-",
		oItem,
		aHistory = this._oHistory.get(),
		l = aHistory.length,
		aNewItems = [];
	// add items from history still matching given set of items
	for(var i = 0, j = 0; j < this.getMaxHistoryItems() && i < l; i++){
		if(!rFilter || rFilter.test(aHistory[i])) {
			oItem = (oItem = sap.ui.getCore().byId(sIdPrefix + j)) && oItem.setText(aHistory[i]) || new sap.ui.core.ListItem(sIdPrefix + j, {text: aHistory[i]});
			aNewItems.push(oItem);
			j++;
		}
	}

	if(aNewItems.length > 0) {
		var sSepId = sIdPrefix + "separator",
			oSeparator = this._getSeparator(sSepId);
		aNewItems.push(oSeparator);
	}
	aItems.unshift.apply(aItems, aNewItems);
	return aNewItems;
};

/**
 * Returns the separator instance for this DropdownBox.
 * If sSepId is given, this id will be used to either find or create the Separator.
 * If sSepId is omitted, only previously found separator will be returned but no new Separator would be created.
 *
 * @param {string} [sSepId] id of the separator to find or create. If omitted, only previously found separator will be returned.
 * @returns {sap.ui.core.SeparatorItem} separator item if found or created or null.
 */
sap.ui.commons.DropdownBox.prototype._getSeparator = function(sSepId){
	if(!this.__oSeparator && sSepId){
		this.__oSeparator = sap.ui.getCore().byId(sSepId) || new sap.ui.core.SeparatorItem(sSepId);
	}
	return this.__oSeparator || null;
};


//***************************************************
// Overwritten methods from API
//***************************************************

/* overwrite standard generated fireChange method */
sap.ui.commons.DropdownBox.prototype.fireChange = function(mArguments) {
	this.fireEvent("change", mArguments);
	if(mArguments.newValue && (this.getMaxHistoryItems() > 0)){
		this._oHistory.add(mArguments.newValue);
	}

	this._sWantedValue = undefined;
	return this;
};

/* overrides generated setValue-method */
sap.ui.commons.DropdownBox.prototype.setValue = function(sValue, bNotSetSelectedKey) {
	// normalize 'empty'  values
	sValue = (sValue === undefined || sValue === null || sValue === "") ? "" : sValue;
	var aItems = this.getItems(),
		sText,
		bValueOK = false,
		sFirstEnabledValue;

	// it might be necessary to also check for history... but as this should only contain valid entries, don't worry.
	for (var i = 0, l = aItems.length; i < l && !bValueOK; i++){
		var oItem = aItems[i];
		var bEnabled = oItem.getEnabled();
		sText = oItem.getText();
		if ( bEnabled && !sFirstEnabledValue) {
			sFirstEnabledValue = sText;
		}
		bValueOK = sText === sValue && bEnabled;
	}

	// only set the value in case the given one is valid
	if(bValueOK) {
		sap.ui.commons.ComboBox.prototype.setValue.call(this, sValue, bNotSetSelectedKey);
		this._sWantedValue = undefined;
	}else if (sValue === "" && aItems.length > 0){
		// initialize Dropdownbox to first valid Value
		sap.ui.commons.ComboBox.prototype.setValue.call(this, sFirstEnabledValue, bNotSetSelectedKey);
	}else{
		// remember wanted value for check if items are updated
		this._sWantedValue = sValue;
	}

	return this;
};


//***********************************************************
//Focus information handling and rendering related
//***********************************************************

/**
 * Applies the focus info and ensures the typeAhead feature is re-established again.
 *
 * @param {object} oFocusInfo the focus information belonging to this dropdown
 * @private
 */
sap.ui.commons.DropdownBox.prototype.applyFocusInfo = function(oFocusInfo){
 var $Inp = jQuery(this.getInputDomRef());
 if(jQuery.sap.startsWithIgnoreCase(this.getValue(), oFocusInfo.sTypedChars)) {
	 $Inp.val(oFocusInfo.sTypedChars);
	 this.focus();
	 if (!this.getSelectedItemId() || sap.ui.getCore().byId(this.getSelectedItemId()).getText() != oFocusInfo.sTypedChars) {
		// text entred before and is not the currently selected item -> just restore type-ahead
		 this._doTypeAhead(oFocusInfo.sTypedChars, "");
	}
	 if (!this._Opening && (!this.oPopup || !this.oPopup.isOpen())) {
		 // as popup is not open restore listbox item like on popup close
		 this._cleanupClose(this._getListBox())
	 }
 } else {
	 oFocusInfo.sTypedChars = "";
//	 $Inp.val(this.getValue()); // enable if really needed
	 this.focus();
	 this._doSelect();
 }
 return this;
};

/*
 * Handle the sapfocusleave pseudo event and ensure that when the focus moves to the list box,
 * the check change functionality (incl. fireChange) is not triggered.
 * Before the change event the value must be checked again if it fits to the items, because
 * it might be manipulated using DOM manipulation or a IME tool for entering foreign characters
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsapfocusleave = function(oEvent) {

	var oLB = this._getListBox();
	if(oEvent.relatedControlId && jQuery.sap.containsOrEquals(oLB.getFocusDomRef(), sap.ui.getCore().byId(oEvent.relatedControlId).getFocusDomRef())){
		this.focus();
	} else {
		// we left the DropdownBox to another (unrelated) control and thus have to fire the change (if needed).
		var $Inp = jQuery(this.getInputDomRef());
		var sValue = $Inp.val();
		if (!this.getSelectedItemId() || sap.ui.getCore().byId(this.getSelectedItemId()).getText() != sValue) {
			// text entred before and is not the currently selected item -> just restore type-ahead
			this._doTypeAhead(sValue, "");
			if (!this._Opening && (!this.oPopup || !this.oPopup.isOpen())) {
				// as popup is not open restore listbox item like on popup close
				this._cleanupClose(this._getListBox())
			}
		}

		sap.ui.commons.TextField.prototype.onsapfocusleave.apply(this, arguments);
	}

};

/**
 * Extends the method inherited from sap.ui.core.Element by providing information on Search Help access (if needed)
 *
 * @return {string} string tooltip or undefined
 * @public
 */
sap.ui.commons.DropdownBox.prototype.getTooltip_AsString = function() {
	var sTooltipString = sap.ui.commons.ComboBox.prototype.getTooltip_AsString.apply(this, arguments);
	if(!this._searchHelpItem) {
		return sTooltipString;
	} else {
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
		// ResourceBundle always returns the key if the text is not found
		var sSearchHelp = rb.getText("DDBX_SHI_ARIA");
		sSearchHelp = sSearchHelp === "DDBX_SHI_ARIA"?"Open search help via {0}":sSearchHelp;
		var sAdditionalText = this._searchHelpItem[0] && this._searchHelpItem[0].getAdditionalText() || rb.getText("DDBX_SHIF4");
		sAdditionalText = sAdditionalText === "DDBX_SHIF4"?"F4":sAdditionalText;
		sSearchHelp = sSearchHelp.replace("{0}", sAdditionalText);
		return (sTooltipString?sTooltipString + " - ":"") + sSearchHelp;
	}
};


//***************************************************
// Handling of list events
//***************************************************

/**
 * This method is attached to the ListBox instance when it is open
 * to handle the click event occurring in the ListBox.
 * It additionally closes the Popup.
 * If clicked on SearchHelp entry triggers the appropriate handling
 *
 * @param {sap.ui.base.Event} oControlEvent The event that was raised by the Listbox
 * @private
 */
sap.ui.commons.DropdownBox.prototype._handleSelect = function(oControlEvent) {
	if(this._searchHelpItem && oControlEvent.getParameter("selectedItem") === this._searchHelpItem[0]){
		var oEvent = jQuery.Event("sapshow");
		oEvent.which = jQuery.sap.KeyCodes.F4;
		this.onsapshow(oEvent);
	} else {
		// if history item is selected search for corresponding real item in list
		var oItem = oControlEvent.getParameter("selectedItem");
		if(!oItem){
			// not from ListBox, from ComboBox _open
			oItem = sap.ui.getCore().byId(oControlEvent.getParameter("selectedId"));
		}
		if (oItem.getId().search(this.getId() + "-h-") != -1) {
			// history item selected
			var oLB = this._getListBox(),
				aItems = oLB.getItems();
			var iLength = this._oHistory.get().length;
			if (iLength > this.getMaxHistoryItems()) {
				iLength = Math.max(this.getMaxHistoryItems(), 0);
			}
			for ( var iIndex = iLength; iIndex < aItems.length; iIndex++) {
				if (aItems[iIndex].getText() == oItem.getText() && aItems[iIndex].getEnabled()) {
					// Item found -> set in event data
					oControlEvent.mParameters.selectedIndex = iIndex;
					if(!oControlEvent.getParameter("selectedIndices")){
						//create arrays
						oControlEvent.mParameters.selectedIndices = new Array(1);
						oControlEvent.mParameters.aSelectedIndices = new Array(1);
					}
					oControlEvent.mParameters.selectedIndices[0] = iIndex;
					oControlEvent.mParameters.aSelectedIndices[0] = iIndex;
					oControlEvent.mParameters.selectedItem = aItems[iIndex];
					break;
				}
			}
		}

		this._sWantedValue = undefined;
		return sap.ui.commons.ComboBox.prototype._handleSelect.apply(this, arguments);
	}
};


//***************************************************
// API method implementation
//***************************************************

/**
 * Overwrite of Setter for property <code>searchHelpEnabled</code>.
 * This method accepts additional parameter to be compatiple with the
 * previous functionality
 *
 * Default value is <code>false</code>
 *
 * @param {boolean} bEnabled new value for property <code>searchHelpEnabled</code>
 * @param {string} sText new value for property <code>searchHelpText</code>
 * @param {string} sAdditionalText new value for property <code>searchHelpAdditionalText</code>
 * @param {string} sIcon new value for property <code>searchHelpIcon</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpEnabled = function(bEnabled, sText, sAdditionalText, sIcon) {

	this.setProperty("searchHelpEnabled", bEnabled);

	// set additional optional properties
	if (sText) {
		this.setProperty("searchHelpText", sText);
	}else{
		sText = this.getSearchHelpText();
	}
	if (sAdditionalText) {
		this.setProperty("searchHelpAdditionalText", sAdditionalText);
	}else{
		sAdditionalText = this.getSearchHelpAdditionalText();
	}
	if (sIcon) {
		this.setProperty("searchHelpIcon", sIcon);
	}else{
		sIcon = this.getSearchHelpIcon();
	}

	if(bEnabled) {
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
		if ( rb ) {
			// ResourceBundle always returns the key if the text is not found
			sText = sText || rb.getText("DDBX_SHI");
			sText = sText === "DDBX_SHI"?"Search Help":sText;
			sAdditionalText = sAdditionalText || rb.getText("DDBX_SHIF4");
			sAdditionalText = sAdditionalText === "DDBX_SHIF4"?"F4":sAdditionalText;
		}
		sIcon = sIcon || sap.ui.resource("sap.ui.commons", "images/dropdown/ico12_f4.gif");
		if(!this._searchHelpItem) {
			this._searchHelpItem = [new sap.ui.core.ListItem(this.getId() + "_shi", {
				text: sText,
				additionalText: sAdditionalText,
				enabled: true,
				icon: sIcon
				}),
				new sap.ui.core.SeparatorItem()];
		} else {
			this._searchHelpItem[0].setText(sText).setAdditionalText(sAdditionalText).setIcon(sIcon);
		}
	} else {
		if ( this._searchHelpItem ) {
			this._searchHelpItem[0].destroy();
			this._searchHelpItem[1].destroy();
			this._searchHelpItem = null;
		}
	}

	return this;
};

/**
 * Overwrite of Setter for property <code>searchHelpText</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sSearchHelpText new value for property <code>searchHelpText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpText = function(sSearchHelpText) {
 this.setProperty("searchHelpText", sSearchHelpText);

 this.setSearchHelpEnabled(this.getSearchHelpEnabled(), sSearchHelpText, this.getSearchHelpAdditionalText(), this.getSearchHelpIcon());

 return this;
};

/**
 * Overwrite of Setter for property <code>searchHelpAdditionalText</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sSearchHelpAdditionalText new value for property <code>searchHelpAdditionalText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpAdditionalText = function(sSearchHelpAdditionalText) {
 this.setProperty("searchHelpAdditionalText", sSearchHelpAdditionalText);

 this.setSearchHelpEnabled(this.getSearchHelpEnabled(), this.getSearchHelpText(), sSearchHelpAdditionalText, this.getSearchHelpIcon());

 return this;
};

/**
 * Overwrite of Setter for property <code>searchHelpIcon</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sSearchHelpIcon new value for property <code>searchHelpIcon</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpIcon = function(sSearchHelpIcon) {
 this.setProperty("searchHelpIcon", sSearchHelpIcon);

 this.setSearchHelpEnabled(this.getSearchHelpEnabled(), this.getSearchHelpText(), this.getSearchHelpAdditionalText(), sSearchHelpIcon);

 return this;
};

/**
 * Check if value fits to items. If not, set to first item
 * @private
 */
sap.ui.commons.DropdownBox.prototype.checkValueInItems = function() {

	var sValue = this.getValue();
	var aItems = this.getItems();
	// save and restore wanted item
	var sWantedSelectedKey = this._sWantedSelectedKey;
	var sWantedSelectedItemId = this._sWantedSelectedItemId;

	// only check the value in the items when items are available
	// TODO: reset the value?
	if (aItems && aItems.length > 0) {

		var bValueOK = false;
		var sFirstEnabledValue;

		if (this._sWantedValue) {
			// value set but item not exists -> check now
			for (var i = 0, l = aItems.length; i < l && !bValueOK; i++){
				var oItem = aItems[i];
				var bEnabled = oItem.getEnabled();
				var sText = oItem.getText();
				if ( bEnabled && !sFirstEnabledValue) {
					sFirstEnabledValue = sText;
				}
				bValueOK = sText === this._sWantedValue && bEnabled;
			}

			if(bValueOK){
				sValue = this._sWantedValue;
				this._sWantedValue = undefined;
				sWantedSelectedKey = undefined;
				sWantedSelectedItemId = undefined;
				sap.ui.commons.ComboBox.prototype.setValue.call(this, sValue);
			}
		}

		if(!bValueOK) {
			for (var i = 0, l = aItems.length; i < l && !bValueOK; i++){
				var oItem = aItems[i];
				var bEnabled = oItem.getEnabled();
				var sText = oItem.getText();
				if ( bEnabled && !sFirstEnabledValue) {
					sFirstEnabledValue = sText;
				}
				bValueOK = sText === sValue && bEnabled;
			}
		}

		if(!bValueOK) {
			sValue = sFirstEnabledValue;
			sap.ui.commons.ComboBox.prototype.setValue.call(this, sValue);
		}

	}else{
		// no items
		sValue = "";
		sap.ui.commons.ComboBox.prototype.setValue.call(this, sValue);

	}

	this._sWantedSelectedKey = sWantedSelectedKey;
	this._sWantedSelectedItemId = sWantedSelectedItemId;
	return sValue;

};

/*
 * Overwrite generated setter to delete old history items if not longer needed
 */
sap.ui.commons.DropdownBox.prototype.setMaxHistoryItems = function(iMaxHistoryItems) {

	var iOldMaxHistoryItems = this.getMaxHistoryItems();
	var sIdPrefix = this.getId() + "-h-";
	var oItem;

	this.setProperty('maxHistoryItems', iMaxHistoryItems, true); // No re-rendering

	if (iMaxHistoryItems < iOldMaxHistoryItems) {
		// delete not longer visible history items
		var oListBox = this._getListBox();
		for ( var i = Math.max(iMaxHistoryItems, 0); i < iOldMaxHistoryItems; i++) {
			oItem = sap.ui.getCore().byId(sIdPrefix + i);
			if (oItem) {
				oListBox.removeItem(oItem);
				oItem.destroy();
			}
		}
		if (iMaxHistoryItems <= 0 && this.__oSeparator) {
			// remove separator but do not destroy it because it might be used again
			oListBox.removeItem(this.__oSeparator);
		}
	}
	// new items are added automatically by opening listbox (no support to change property while 
	// listbox is open)

};

sap.ui.commons.DropdownBox.prototype.clearHistory = function() {

	this._oHistory.clear();

	var sIdPrefix = this.getId() + "-h-";
	var oListBox = this._getListBox();
	var oItem;

	for(var i = 0; i < this.getMaxHistoryItems(); i++) {
		if (oItem = sap.ui.getCore().byId(sIdPrefix + i)) {
			oListBox.removeItem(oItem);
			oItem.destroy();
		}
	}
	if (this.__oSeparator) {
		// remove separator but do not destroy it because it might be used again
		oListBox.removeItem(this.__oSeparator);
	}

};

sap.ui.commons.DropdownBox.prototype.ondrop = function(oEvent) {

	// dropping text in DropdownBox makes no sense.
	oEvent.preventDefault();

};

/*
 * in ComboBox an empty selected Key is not allowed (execute same logig as for defined keys)
 */
sap.ui.commons.ComboBox.prototype._isSetEmptySelectedKeyAllowed = function() {

		return false;

};

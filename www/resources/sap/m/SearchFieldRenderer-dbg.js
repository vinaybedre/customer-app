/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.SearchFieldRenderer");

/**
 * @class SearchField renderer.
 * @static
 */
sap.m.SearchFieldRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oSF an object representation of the control that should be rendered
 */
sap.m.SearchFieldRenderer.render = function(rm, oSF){
	// render nothing if control is invisible
	if (!oSF.getVisible()) {
		return;
	}

	var bShowMagnifier = oSF.getShowMagnifier();
	var sPlaceholder = oSF.getPlaceholder();
	var sValue = oSF.getValue();
	var sWidth = oSF.getProperty("width");

	// container
	rm.write("<div");
	rm.writeControlData(oSF);
	if (sWidth) { rm.writeAttribute("style", "width:" + sWidth + ";"); }

	rm.addClass("sapMSF");

	if(sValue){
		rm.addClass("sapMSFVal");
	}
	if (!oSF.getEnabled()){
		rm.addClass("sapMSFDisabled");
	}

	rm.writeClasses();
	var sTooltip = oSF.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">");

	var sId = oSF.getId();
	var bShowSearchBtn = oSF.getShowSearchButton();

		// 1. Input type="search".
		//    Enclose input into a <form> to show a correct keyboard
		//    method="post" to prevent unneeded "?" at the end of URL
		rm.write('<form method="post" action="javascript:void(0);"');
		rm.addClass('sapMSFF');
		if(!bShowSearchBtn){
			rm.addClass("sapMSFNS"); //no search button
		} else if(oSF.getShowRefreshButton()){
			rm.addClass('sapMSFReload');
		}
		rm.writeClasses();
		rm.write('>');
	
		// self-made placeholder
		if (!oSF._hasPlacehoder && sPlaceholder) {
			rm.write("<label ");
			rm.writeAttribute("id", sId + "-P");
			rm.writeAttribute("for", sId + "-I");
	
			rm.addClass("sapMSFPlaceholder");
			rm.writeClasses();
			rm.write(">");
			rm.writeEscaped(sPlaceholder);
			rm.write("</label>");
		}
	
		rm.write('<input type="search" autocorrect="off"');
		rm.writeAttribute("id", oSF.getId() + "-I");
	
		rm.addClass("sapMSFI");
	
		if(sap.ui.Device.os.android && sap.ui.Device.os.version >= 4 && sap.ui.Device.os.version < 4.1 ){
			rm.addClass("sapMSFIA4"); // specific CSS layout for Android 4.0x
		}
	
		rm.writeClasses();
	
		if (!oSF.getEnabled()){ rm.writeAttribute("disabled","disabled"); }
		if (sPlaceholder) { rm.writeAttributeEscaped("placeholder", sPlaceholder); }
		if (oSF.getMaxLength()) { rm.writeAttribute("maxLength", oSF.getMaxLength()); }
		if (sValue) { rm.writeAttributeEscaped("value", sValue); }
	
		rm.write(">");
	
		if (oSF.getEnabled()) {
			// 2. Reset button
			rm.write("<div");
			rm.writeAttribute("id", oSF.getId() + "-reset");
			rm.addClass("sapMSFR"); // reset
			rm.addClass("sapMSFB"); // button
			if(!bShowSearchBtn){
				rm.addClass("sapMSFNS"); //no search button
			}
			rm.writeClasses();
			rm.write("></div>");
	
			// 3. Search/Refresh button
			if(bShowSearchBtn){
				rm.write("<div");
				rm.writeAttribute("id", oSF.getId() + "-search");
				rm.addClass("sapMSFS"); // search
				rm.addClass("sapMSFB"); // button
				rm.writeClasses();
				if(oSF.getRefreshButtonTooltip()){
					rm.writeAttributeEscaped("title", oSF.getRefreshButtonTooltip());
				}
				rm.write( "></div>");
			}
		}
	
		rm.write("</form>");

	rm.write("</div>");

};

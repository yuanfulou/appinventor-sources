'use strict';

goog.provide('Blockly.Layer');

Blockly.BlockLayer = function(block) {
  alert("?");
};
//to get list of layer
Blockly.SetLayerList = function() {
	var topBlocks = Blockly.mainWorkspace.getTopBlocks(false);
	var llist=[]
	for (var i = 0; i < topBlocks.length; i++) {
		if(topBlocks[i].layerLabel!=null){
			if(llist.indexOf(topBlocks[i].layerLabel)==-1){
    		llist.push(topBlocks[i].layerLabel);
    	}
    }
	//Blockly.dosortByLayerLabel();
  }
  //console.log("Layer List: "+llist.toString());
}

Blockly.GetLayerList = function() {
	var topBlocks = Blockly.mainWorkspace.getTopBlocks(false);
	var llist=[]
	for (var i = 0; i < topBlocks.length; i++) {
		if(topBlocks[i].layerLabel!=null){
			if(llist.indexOf(topBlocks[i].layerLabel)==-1){
    		llist.push(topBlocks[i].layerLabel);
    	}
    }
	//Blockly.dosortByLayerLabel();
  }
  return llist.toString();
  //console.log("Layer List: "+llist.toString());
}

Blockly.CollapseByLayer = function(collapsed,layer) {//if collapse==1 collapse, else expand
	var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
	targetlayer=layer.split(", ");
	for (var i = 0; i < targetlayer.length; i++) {
    for (var j = 0; j < topblocks.length; j++) {
      if(targetlayer[i]===topblocks[j].layerLabel && collapsed==1){
        topblocks[j].setCollapsed(true);
      }
      else if(targetlayer[i]===topblocks[j].layerLabel && collapsed==0){
      	topblocks[j].setCollapsed(false);
      }
    }
  }
}

Blockly.DisableByLayer = function(disabled,layer) {//if disabled==1 disabled, else expand
	var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
	targetlayer=layer.split(", ");
	for (var i = 0; i < targetlayer.length; i++) {
    for (var j = 0; j < topblocks.length; j++) {
      if(targetlayer[i]===topblocks[j].layerLabel && disabled==1){
        topblocks[j].setDisabled(true);
      }
      else if(targetlayer[i]===topblocks[j].layerLabel && disabled==0){
      	topblocks[j].setDisabled(false);
      }
    }
  }
}

Blockly.ShowLayerList = function() {

}
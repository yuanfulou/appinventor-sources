'use strict';

goog.provide('Blockly.Layer');

Blockly.BlockLayer = function(block) {
  alert("?");
};
//to get list of layer
Blockly.GetLayerList = function() {
	var topBlocks = Blockly.mainWorkspace.getTopBlocks(false);
	var llist=[]
	for (var i = 0; i < topBlocks.length; i++) {
    llist.push(topBlocks[i].layerLabel);
  }
  Blockly.resetWorkspaceArrangements();
  console.log("Layer List: "+llist.toString());
}
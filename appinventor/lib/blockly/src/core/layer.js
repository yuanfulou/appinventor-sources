'use strict';

goog.provide('Blockly.Layer');

Blockly.LayerBoxInit = function() {
  if(document.getElementById('layerbox')==null){
    var layerbox = document.createElement('div');
    layerbox.id = 'layerbox';
    document.body.appendChild(layerbox);
    //layerbox=document.getElementById('layerbox');
    layerbox.style.position = 'absolute';
    layerbox.style.zIndex = '2';
    layerbox.style.left = '85%';
    layerbox.style.top = '1%';
    layerbox.style.visibility = 'visible';

    var layerboxtitle = document.createElement('div');
    layerboxtitle.id = 'layerboxtitle';
    layerboxtitle.innerHTML = 'LAYERBOX';
    layerbox.appendChild(layerboxtitle);
    layerboxtitle.style.background = '#8fc202';

    var layerboxhide = document.createElement('input');
    //var t=document.createTextNode('Hide');
    layerboxhide.src = 'media/min.gif';
    layerboxhide.type = 'image';
    layerboxhide.align = 'middle';
    layerboxtitle.appendChild(layerboxhide);
    //layerboxhide.appendChild(t);
    layerboxhide.setAttribute('onclick', ('Blockly.ShowLayerBoxContent();'));

    var layerboxcontent = document.createElement('div')
    layerboxcontent.id = 'layerboxcontent';
    layerbox.appendChild(layerboxcontent);
    layerboxcontent.style.visibility = 'visible';
    layerboxcontent.setAttribute('style', 'background-color:rgba(102,153,0,0.3);');
    layerboxcontent.style.overflow = 'auto';
    Blockly.LayerBoxUpdate();
  }
  else{
    Blockly.LayerBoxUpdate();
  }
  Blockly.haslayerbox = true;
  Blockly.LayerBoxListerners();
}

Blockly.LayerBoxUpdate = function() {

  document.getElementById('layerboxcontent').innerHTML = '';//empty first

  var llist = Blockly.GetLayerList();
  var tbl = document.createElement('table');
  tbl.style.width = '100%';

  tbl.setAttribute('border','1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < llist.length; i++) {
    var tr = document.createElement('tr');
    if(llist[i]!=null){
      var td = document.createElement('td');
      var layerlist = document.createElement('div');
      layerlist.id = llist[i];
      layerlist.innerHTML = llist[i];
      layerlist.setAttribute('onclick', ('Blockly.EditLayerName(this.id);'));
      td.appendChild(layerlist);
      tr.appendChild(td);
      for(var j = 0; j<4; j++){
        var td = document.createElement('td');//show
        var x = document.createElement('div');
        if(j == 0){
          x.setAttribute('id', llist[i] + "show");
          x.setAttribute('name', llist[i]);
          var image = document.createElement("img");
          image.src = 'media/closedeye.gif';
          x.appendChild(image);
          x.setAttribute('selected', false);
          x.setAttribute('onclick', ('Blockly.LayerViewer(this.id);'));
        }
        else if(j == 1){
          x.setAttribute('id', llist[i]);
          var image = document.createElement("img");
          image.src = 'media/copy.gif';
          x.appendChild(image);
          x.setAttribute('onclick', ('Blockly.DuplicateByLayer(this.id);'));
        }
        else if(j == 2){
          x.setAttribute('id', llist[i] + "disabled");
          x.setAttribute('name', llist[i]);
          var image = document.createElement("img");
          image.src = 'media/red.gif';
          x.appendChild(image);
          x.setAttribute('selected', false);
          x.setAttribute('onclick', ('Blockly.DisableByLayer(this.id);'));
        }
        else if(j == 3){
          x.setAttribute('id', llist[i] + "collapsed");
          x.setAttribute('name', llist[i]);
          var image = document.createElement("img");
          image.src = 'media/min.gif';
          x.appendChild(image);
          x.setAttribute('selected', false);
          x.setAttribute('onclick', ('Blockly.CollapseByLayer(this.id);'));
        }
        td.appendChild(x);
        tr.appendChild(td);
      }

    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  layerboxcontent = document.getElementById('layerboxcontent');
  layerboxcontent.appendChild(tbl);

  var layergather = document.createElement('BUTTON');
  var t = document.createTextNode('Gather');
  layerboxcontent.appendChild(layergather);
  layergather.appendChild(t);
  layergather.setAttribute('onclick', ('Blockly.doshowLayerBlockwithother();'));

  var sortbylayer = document.createElement('BUTTON');
  var t = document.createTextNode('SBL');
  layerboxcontent.appendChild(sortbylayer);
  sortbylayer.appendChild(t);
  sortbylayer.setAttribute('onclick', ('Blockly.dosortByLayerLabel();'));
}

Blockly.ShowLayerBox = function(){
  document.getElementById('layerbox').style.visibility = 'visible';
  //console.log('ShowLayerBox');
}

Blockly.LayerBoxListerners = function (){
  document.getElementById('layerbox').addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp()
{
  window.removeEventListener('mousemove', LBMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', LBMove, true);
}

function LBMove(e){
  var LB = document.getElementById('layerbox');
  LB.style.position = 'absolute';
  LB.style.top = e.clientY + 'px';
  LB.style.left = e.clientX + 'px';
}

Blockly.ShowLayerBoxContent = function() {
  layerboxcontent=document.getElementById('layerboxcontent');
  if(layerboxcontent.style.visibility=='hidden'){
    layerboxcontent.style.visibility='visible';
  }
  else{
    layerboxcontent.style.visibility='hidden';
  }
}

Blockly.EditLayerName = function(oldname) {
  var newlayername=prompt('Please enter the Layer Label','Layer1');
  var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
  for (var i = 0; i < topblocks.length; i++) {
    if(topblocks[i].layerLabel===oldname && newlayername!=null){
      topblocks[i].setLayerLabel(newlayername);
      console.log('LOL');
    }
  }
}

Blockly.LayerView = [];

Blockly.LayerViewer = function(id){
  var x=document.getElementById(id);
  selected=x.getAttribute("selected");
  name=x.getAttribute("name");

  if(selected=="false"){
    x.setAttribute("selected",true);
    x.innerHTML="";
    var image = document.createElement("img");
    image.src='media/eye.gif';
    x.appendChild(image);
    
    if(Blockly.LayerView.indexOf(name)==-1){//avoid repeat
      Blockly.LayerView.push(name);
    }
    console.log("!?");
  }
  else if(selected=="true"){
    x.setAttribute("selected",false);
    x.innerHTML="";
    var image = document.createElement("img");
    image.src='media/closedeye.gif';
    x.appendChild(image);

    for(var i = 0; i<Blockly.LayerView.length; i++){
      if(Blockly.LayerView[i]==name)
        Blockly.LayerView.splice(i,1);
    }
  }
  Blockly.doshowLayerBlock();
  if(Blockly.LayerView.length==0)
    Blockly.dosortByLayerLabel();
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
  }
  llist.sort();
  return llist;
}

Blockly.DuplicateByLayer = function(layer) {//if disabled==1 disabled, else expand
  var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
  targetlayer=layer.split(', ');
  for (var i = 0; i < targetlayer.length; i++) {
    for (var j = 0; j < topblocks.length; j++) {
      if(targetlayer[i]===topblocks[j].layerLabel){
        topblocks[j].duplicate_();
      }
    }
  }
}

Blockly.DisableByLayer = function(id) {//if disabled==1 disabled, else expand
  var x=document.getElementById(id);
  disabled=x.getAttribute("selected");
  name=x.getAttribute("name");
  var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
  targetlayer=name.split(', ');
  for (var i = 0; i < targetlayer.length; i++) {
    for (var j = 0; j < topblocks.length; j++) {
      if(targetlayer[i]===topblocks[j].layerLabel && disabled=="false"){
        x.setAttribute("selected",true);
        x.innerHTML="";
        var image = document.createElement("img");
        image.src='media/green.gif';
        x.appendChild(image);
        topblocks[j].setDisabled(true);
      }
      else if(targetlayer[i]===topblocks[j].layerLabel && disabled=="true"){
        x.setAttribute("selected",false);
        x.innerHTML="";
        var image = document.createElement("img");
        image.src='media/red.gif';
        x.appendChild(image);
        topblocks[j].setDisabled(false);
      }
    }
  }
}

Blockly.CollapseByLayer = function(id) {//if collapse==1 collapse, else expand
  var x=document.getElementById(id);
  collapsed=x.getAttribute("selected");
  name=x.getAttribute("name");
  var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
  targetlayer=name.split(', ');
	for (var i = 0; i < targetlayer.length; i++) {
    for (var j = 0; j < topblocks.length; j++) {
      if(targetlayer[i]===topblocks[j].layerLabel && collapsed=="false"){
        x.setAttribute("selected",true);
        x.innerHTML="";
        var image = document.createElement("img");
        image.src='media/max.gif';
        x.appendChild(image);
        topblocks[j].setCollapsed(true);
      }
      else if(targetlayer[i]===topblocks[j].layerLabel && collapsed=="true"){
        x.setAttribute("selected",false);
        x.innerHTML="";
        var image = document.createElement("img");
        image.src='media/min.gif';
        x.appendChild(image);
      	topblocks[j].setCollapsed(false);
      }
    }
  }
}

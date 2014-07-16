'use strict';

goog.provide('Blockly.Layer');

Blockly.LayerBoxInit = function() {//initialize layerbox
  if(document.getElementById('layerbox')==null){
    var layerbox = document.createElement('div');
    layerbox.setAttribute('id', 'layerbox');
    layerbox.setAttribute('style', 'position:absolute; zIndex:2; left:85%; top:1%; visibility:visible; font-family:sans-serif;');
    document.body.appendChild(layerbox);
    

    var layerboxtitle = document.createElement('div');
    layerboxtitle.setAttribute('id', 'layerboxtitle');
    layerboxtitle.innerHTML = 'LayerBox';
    layerboxtitle.setAttribute('style', 'background:#8fc202;')
    layerbox.appendChild(layerboxtitle);

    var layerboxhide = document.createElement('input');
    layerboxhide.src = 'media/min.gif';
    layerboxhide.type = 'image';
    layerboxhide.height = '12';
    layerboxhide.setAttribute('onclick', ('Blockly.ShowLayerBoxContent();'));
    layerboxhide.setAttribute('style', 'position:absolute; left:50%; top:1%;');
    layerboxtitle.appendChild(layerboxhide);

    var layerexport = document.createElement('input');
    layerexport.src = 'media/export.png';
    layerexport.type = 'image';
    layerexport.height = '12';
    //layerboxhide.setAttribute('onclick', ('Blockly.ShowLayerBoxContent();'));
    layerexport.setAttribute('style', 'position:absolute; left:60%; top:1%;');
    layerboxtitle.appendChild(layerexport);

    var layerimport = document.createElement('input');
    layerimport.src = 'media/import.png';
    layerimport.type = 'image';
    layerimport.height = '12';
    //layerboxhide.setAttribute('onclick', ('Blockly.ShowLayerBoxContent();'));
    layerimport.setAttribute('style', 'position:absolute; left:70%; top:1%;');
    layerboxtitle.appendChild(layerimport);

    var layerboxcontent = document.createElement('div')
    layerboxcontent.id = 'layerboxcontent';
    layerboxcontent.setAttribute('style', 'background-color:rgb(202,220,169); visibility:visible; overflow:auto');
    layerbox.appendChild(layerboxcontent);

    Blockly.LayerBoxUpdate();
  }
  else{
    Blockly.LayerBoxUpdate();
  }
  Blockly.haslayerbox = true;
  Blockly.LayerBoxListerners();
}

Blockly.LayerBoxUpdate = function() {//update layerbox if there's any change for layerlist
  document.getElementById('layerboxcontent').innerHTML = '';//empty first

  var llist = Blockly.GetLayerList();
  var tbl = document.createElement('table');
  tbl.setAttribute('style','width:100%;');
  tbl.setAttribute('border','1;');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < llist.length; i++) {
    var tr = document.createElement('tr');
    if(llist[i]!=null){//won't create table if layerlabel is null
      var td = document.createElement('td');
      var layercheckdiv = document.createElement('div');
      var layercheck = document.createElement('input');
      layercheck.setAttribute("type", "checkbox");
      layercheckdiv.appendChild(layercheck);
      td.appendChild(layercheckdiv);
      tr.appendChild(td);

      var td = document.createElement('td');
      var layerlist = document.createElement('div');
      layerlist.id = llist[i];
      layerlist.innerHTML = llist[i];
      layerlist.setAttribute('onclick', ('Blockly.EditLayerName(this.id);'));
      td.appendChild(layerlist);
      tr.appendChild(td);

      for(var j = 0; j<4; j++){
        var td = document.createElement('td');
        var x = document.createElement('div');
        if(j == 0){//show by layer
          x.setAttribute('id', llist[i] + "show");
          x.setAttribute('name', llist[i]);
          name = llist[i];
          var image = document.createElement("img");
          //use fuction to set src
          if(Blockly.LayerView.length==0){
            image.src = 'media/eye.gif';
          }
          else{
            image.src = Blockly.CheckView(name);
          }
          x.appendChild(image);
          x.setAttribute('selected', Blockly.CheckSelect(name));
          x.setAttribute('onclick', ('Blockly.LayerViewer(this.id);'));
        }
        else if(j == 1){//duplicate by layer
          x.setAttribute('id', llist[i]);
          var image = document.createElement("img");
          image.src = 'media/copy.gif';
          x.appendChild(image);
          x.setAttribute('onclick', ('Blockly.DuplicateByLayer(this.id);'));
        }
        else if(j == 2){//diable by layer
          x.setAttribute('id', llist[i] + "disabled");
          x.setAttribute('name', llist[i]);
          var image = document.createElement("img");
          image.src = 'media/red.gif';
          x.appendChild(image);
          x.setAttribute('selected', false);
          x.setAttribute('onclick', ('Blockly.DisableByLayer(this.id);'));
        }
        else if(j == 3){//collapse by layer
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

  var layerother = document.createElement('BUTTON');
  var t = document.createTextNode('other');
  layerboxcontent.appendChild(layerother);
  layerother.appendChild(t);
  layerother.setAttribute('onclick', ('Blockly.doshowLayerBlockwithother();'));

  var sortbylayer = document.createElement('BUTTON');
  var t = document.createTextNode('SBL');
  layerboxcontent.appendChild(sortbylayer);
  sortbylayer.appendChild(t);
  sortbylayer.setAttribute('onclick', ('Blockly.dosortByLayerLabel();'));

  var sortbyc = document.createElement('BUTTON');
  var t = document.createTextNode('SBC');
  layerboxcontent.appendChild(sortbyc);
  sortbyc.appendChild(t);
  sortbyc.setAttribute('onclick', ('Blockly.dosortByC();'));  
}

Blockly.CheckView = function (name){
  if(Blockly.LayerView.indexOf(name)!=-1){//avoid repeat
    return 'media/eye.gif';
  }
  else{
    return 'media/closedeye.gif';
  }
}

Blockly.CheckSelect = function (name){
  if(Blockly.LayerView.indexOf(name)!=-1){//avoid repeat
    return true;
  }
  else{
    return false;
  }
}

Blockly.LayerBoxListerners = function (){//makes LB dragable
  document.getElementById('layerboxtitle').addEventListener('mousedown', mouseDown, false);
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

Blockly.ShowLayerBoxContent = function() {//user can hide LBContent if they want
  layerboxcontent=document.getElementById('layerboxcontent');
  if(layerboxcontent.style.visibility=='hidden'){
    layerboxcontent.style.visibility='visible';
  }
  else{
    layerboxcontent.style.visibility='hidden';
  }
}

Blockly.EditLayerName = function(oldname) {//user can edit the name of layer by clicking it
  var newlayername = prompt('Please enter the Layer Label','Layer1');
  var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
  for (var i = 0; i < topblocks.length; i++) {
    if(topblocks[i].layerLabel === oldname && newlayername != null){
      topblocks[i].setLayerLabel(newlayername);
    }
  }
  for(var i = 0; i<Blockly.LayerView.length; i++){
      if(Blockly.LayerView[i] == oldname)
        Blockly.LayerView.splice(i,1);
    }
}

Blockly.LayerView = [];

Blockly.LayerViewer = function(id){//dicide how to show by layerlabel
  var x =document.getElementById(id);
  selected = x.getAttribute("selected");
  name = x.getAttribute("name");

  if(selected == "false"){
    x.setAttribute("selected",true);
    x.innerHTML = "";
    var image = document.createElement("img");
    image.src = 'media/eye.gif';
    x.appendChild(image);
    
    if(Blockly.LayerView.indexOf(name) == -1){//avoid repeat
      Blockly.LayerView.push(name);
    }
  }
  else if(selected == "true"){
    x.setAttribute("selected",false);
    x.innerHTML = "";
    var image = document.createElement("img");
    image.src = 'media/closedeye.gif';
    x.appendChild(image);

    for(var i = 0; i<Blockly.LayerView.length; i++){
      if(Blockly.LayerView[i] == name)
        Blockly.LayerView.splice(i,1);
    }
  }
  Blockly.doshowLayerBlock();
  if(Blockly.LayerView.length == 0)
    Blockly.dosortByLayerLabel();
  Blockly.LayerBoxUpdate();
}

Blockly.DuplicateByLayer = function(layer) {//duplicate by layer
  var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
  targetlayer = layer.split(', ');
  for (var i = 0; i < targetlayer.length; i++) {
    for (var j = 0; j < topblocks.length; j++) {
      if(targetlayer[i] === topblocks[j].layerLabel){
        topblocks[j].duplicate_();
      }
    }
  }
}

Blockly.DisableByLayer = function(id) {//disable by layer
  var x = document.getElementById(id);
  disabled = x.getAttribute("selected");
  name = x.getAttribute("name");
  var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
  targetlayer = name.split(', ');
  for (var i = 0; i < targetlayer.length; i++) {
    for (var j = 0; j < topblocks.length; j++) {
      if(targetlayer[i] === topblocks[j].layerLabel && disabled == "false"){
        x.setAttribute("selected",true);
        x.innerHTML = "";
        var image = document.createElement("img");
        image.src = 'media/green.gif';
        x.appendChild(image);
        topblocks[j].setDisabled(true);
      }
      else if(targetlayer[i] === topblocks[j].layerLabel && disabled == "true"){
        x.setAttribute("selected",false);
        x.innerHTML = "";
        var image = document.createElement("img");
        image.src = 'media/red.gif';
        x.appendChild(image);
        topblocks[j].setDisabled(false);
      }
    }
  }
}

Blockly.CollapseByLayer = function(id) {//collapse by layer
  var x = document.getElementById(id);
  collapsed = x.getAttribute("selected");
  name = x.getAttribute("name");
  var topblocks = Blockly.mainWorkspace.getTopBlocks(false);
  targetlayer = name.split(', ');
	for (var i = 0; i < targetlayer.length; i++) {
    for (var j = 0; j < topblocks.length; j++) {
      if(targetlayer[i] === topblocks[j].layerLabel && collapsed == "false"){
        x.setAttribute("selected",true);
        x.innerHTML = "";
        var image = document.createElement("img");
        image.src = 'media/max.gif';
        x.appendChild(image);
        topblocks[j].setCollapsed(true);
      }
      else if(targetlayer[i] === topblocks[j].layerLabel && collapsed == "true"){
        x.setAttribute("selected",false);
        x.innerHTML = "";
        var image = document.createElement("img");
        image.src = 'media/min.gif';
        x.appendChild(image);
      	topblocks[j].setCollapsed(false);
      }
    }
  }
}

Blockly.GetLayerList = function() {//return the layerlist
  var topBlocks = Blockly.mainWorkspace.getTopBlocks(false);
  var llist = []
  for (var i = 0; i < topBlocks.length; i++) {
    if(topBlocks[i].layerLabel != null){
      if(llist.indexOf(topBlocks[i].layerLabel) == -1){
        llist.push(topBlocks[i].layerLabel);
      }
    }
  }
  llist.sort();
  return llist;
}
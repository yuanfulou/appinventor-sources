// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2009-2011 Google, All Rights reserved
// Copyright 2011-2012 MIT, All rights reserved
// Released under the MIT License https://raw.github.com/mit-cml/app-inventor/master/mitlicense.txt

package com.google.appinventor.client.boxes;

import static com.google.appinventor.client.Ode.MESSAGES;
import com.google.appinventor.client.widgets.boxes.Box;

/**
 * Box implementation for Layer panels.
 *
 */
public final class LayerBox extends Box {

  // Singleton layer box instance
  private static final LayerBox INSTANCE = new LayerBox();

  /**
   * Return the layer box.
   *
   * @return  layer box
   */
  public static LayerBox getLayerBox() {
    return INSTANCE;
  }

  /**
   * Creates new layer box.
   */
  private LayerBox() {
    super(MESSAGES.layerBoxCaption(),
        300,    // height
        false,  // minimizable
        false); // removable

  }
}

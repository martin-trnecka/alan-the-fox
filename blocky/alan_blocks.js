Blockly.Blocks['krok'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("krok");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("krok vpřed");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['opakuj'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Opakuj")
        .appendField(new Blockly.FieldNumber(0, 0), "i");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['seber_slepici'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("seber slepici");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['otoc_vlevo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("otoč se vlevo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

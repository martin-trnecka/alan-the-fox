Blockly.Blocks['krok'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("krok");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e27305");
 this.setTooltip("krok vpřed");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['opakuj'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("opakuj")
        .appendField(new Blockly.FieldNumber(0, 0), "i");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#25b8bf");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['opakuj_p1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("opakuj dokud není")
        .appendField(new Blockly.FieldImage("./assets/grass3.svg", 32, 32));
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#25b8bf");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['seber_slepici'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("seber slepici")
        .appendField(new Blockly.FieldImage("./assets/chicken1.svg", 32, 32));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#99d20d");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['otoc_vlevo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("otoč se vlevo")
        .appendField(new Blockly.FieldImage("./assets/fox4.svg", 32, 32));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#aaaaaa");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['otoc_vpravo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("otoč se vpravo")
        .appendField(new Blockly.FieldImage("./assets/fox2.svg", 32, 32));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#aaaaaa");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

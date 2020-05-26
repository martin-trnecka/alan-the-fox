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

Blockly.Blocks['opakuj_p'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("opakuj dokud není")
        .appendField(new Blockly.FieldDropdown([
            [{'src': './assets/flower1.svg', 'width': 32, 'height': 32, 'alt': 'podminka 1'}, 'P1'],
            [{'src': './assets/flower2.svg', 'width': 32, 'height': 32, 'alt': 'podminka 2'}, 'P2'],
            [{'src': './assets/flower3.svg', 'width': 32, 'height': 32, 'alt': 'podminka 3'}, 'P3'],            
        ]), 'PODMINKA');        
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#25b8bf");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_p'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pokud je")
        .appendField(new Blockly.FieldDropdown([
            [{'src': './assets/flower1.svg', 'width': 32, 'height': 32, 'alt': 'podminka 1'}, 'P1'],
            [{'src': './assets/flower2.svg', 'width': 32, 'height': 32, 'alt': 'podminka 2'}, 'P2'],
            [{'src': './assets/flower3.svg', 'width': 32, 'height': 32, 'alt': 'podminka 3'}, 'P3'],            
        ]), 'PODMINKA');        
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#19737c");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['function'] = {
  init: function() {
    var nameField = new Blockly.FieldTextInput('', Blockly.Procedures.rename);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField("Funkce")
        .appendField(nameField, 'NAME');        
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour("#e84d4d");
 this.setTooltip("");
 this.setHelpUrl("");
  },
  decompose: function(workspace) {
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

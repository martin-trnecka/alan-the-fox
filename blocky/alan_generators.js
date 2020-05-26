/*
Generování kódu
*/

// elementarni operace
Blockly.JavaScript['krok'] = function(block) {
  return 'KROK\n';;
};

Blockly.JavaScript['seber_slepici'] = function(block) {
  return  'SEBER_SLEPICI\n';
};

Blockly.JavaScript['otoc_vlevo'] = function(block) {
  return 'OTOC_VLEVO\n';
};

Blockly.JavaScript['otoc_vpravo'] = function(block) {
  return 'OTOC_VPRAVO\n';
};


// složitější operace
Blockly.JavaScript['opakuj'] = function(block) {
  var number_i = block.getFieldValue('i');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

  var code = 'OPAKUJ ' + number_i +' \n';
  code += statements_name;
  code += 'END\n';

  return code;
};

Blockly.JavaScript['opakuj_p'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_podminka = block.getFieldValue('PODMINKA');

  var code = 'WHILE '+ statements_podminka +' \n';
  code += statements_name;
  code += 'END\n';
  return code;
};

Blockly.JavaScript['if_p'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_podminka = block.getFieldValue('PODMINKA');

  var code = 'IF '+ statements_podminka +' \n';
  code += statements_name;
  code += 'END\n';
  return code;
};

Blockly.JavaScript['function_1'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

  var code = 'F1 \n';
  code += statements_name;
  code += 'END\n';

  return code;
};

// volání funkce
Blockly.JavaScript['call_f1'] = function(block) {
  return 'F1()\n';
};

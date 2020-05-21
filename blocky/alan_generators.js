Blockly.JavaScript['krok'] = function(block) {
  //var code = 'hra.proved("hra.krok()");\n';
  var code = 'KROK\n';
  return code;
};

Blockly.JavaScript['opakuj'] = function(block) {
  var number_i = block.getFieldValue('i');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = '';

  var code = 'OPAKUJ ' + number_i +' \n';
  code += statements_name;
  code += 'END\n';

  return code;
};

Blockly.JavaScript['opakuj_p1'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = '';

  var code = 'WHILE P1 \n';
  code += statements_name;
  code += 'END\n';
  return code;
};

Blockly.JavaScript['seber_slepici'] = function(block) {
  //var code = 'hra.proved("hra.seber_slepici()");\n';
  var code = 'SEBER_SLEPICI\n';
  return code;
};

Blockly.JavaScript['otoc_vlevo'] = function(block) {
  //var code = 'hra.proved("hra.otoc_vlevo()");\n';
  var code = 'OTOC_VLEVO\n';
  return code;
};

Blockly.JavaScript['otoc_vpravo'] = function(block) {
  //var code = 'hra.proved("hra.otoc_vpravo()");\n';
  var code = 'OTOC_VPRAVO\n';
  return code;
};

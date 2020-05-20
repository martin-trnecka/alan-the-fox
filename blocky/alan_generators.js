Blockly.JavaScript['krok'] = function(block) {
  var code = 'hra.proved("hra.krok()");\n';
  return code;
};

Blockly.JavaScript['opakuj'] = function(block) {
  var number_i = block.getFieldValue('i');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

  var code = '{let i='+number_i+';\n';
  code += 'while(i > 0) {\n';
  code += statements_name;
  code += 'i--;}}\n';
  return code;
};

Blockly.JavaScript['seber_slepici'] = function(block) {
  var code = 'hra.proved("hra.seber_slepici()");\n';
  return code;
};

Blockly.JavaScript['otoc_vlevo'] = function(block) {
  var code = 'hra.proved("hra.otoc_vlevo()");\n';
  return code;
};

Blockly.JavaScript['otoc_vpravo'] = function(block) {
  var code = 'hra.proved("hra.otoc_vpravo()");\n';
  return code;
};

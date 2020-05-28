var levels =
[
// zacatek levelu
{
  popis: "Vyhněte se psovi, který se pohybuje mezi boudama. S každým Alanovým pohybem udělá pes jeden krok.",
  kategorie: "Pokročilý",
  mapa: [[ 31, 31, 36, 34,  1,  1,  1,  7, 34, 31],
         [ 32,  1,  1,  1,  2,  1,  1,  1, 33, 37],
         [  2,  1,  1,  1,  1,  2,  1,  1, 31, 31],
         [  1,  3,  1,  6,  1,  1,  1,  7,  1,  1],
         [  1,  1,  1,  2,  2,  1,  2,  1,  2,  2],
         [ 41,  1,  1,  1,  1,  3,  2,  1,  1, 41],
         [  1,  7,  1,  1,  2,  1,  2,  6,  2,  1],
         [  1,  2,  1,  2,302,  1,  1, 31, 31, 31],
         [ 31,  2,  2,  2,  1,  1, 33, 31, 31, 35],
         [ 31, 33, 31,  1,  1,  1, 31, 32, 33, 31]],
  pozice_lisky: [3, 5, 2],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [[6, 2, 1], [6, 3, 1], [6, 5, 1], [6, 6, 1], [6, 7, 1], [6, 8, 1], [6, 9, 1], [6, 9, 2], [6, 9, 3], [6, 8, 3], [6, 7, 3], [6, 6, 3], [6, 5, 3], [6, 4, 3], [6, 3, 3], [6, 2, 3], [6, 2, 4]], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,otoc_vlevo:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity}, // jake příkazy mohou být použity

}, // konec levelu

];

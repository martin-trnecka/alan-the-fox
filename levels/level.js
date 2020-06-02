var levels =
[
  // zacatek levelu
  {
    popis: "Bonusový level 0.",
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
  
// zacatek levelu
{
  popis: "Úkolem lišáka Alana je posbírat všechny slepice z mapy. <br> Umí udělat krok a sebrat slepici. Přetažením jednotlivých bloků do hlavní funkce mu řekněte, co musí udělat, aby sebral slepici.",
  kategorie: "Začátečník",
  mapa: [[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  1,  1,301,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
  pozice_lisky: [4, 3, 1],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,seber_slepici:Infinity}, // jake příkazy mohou být použity

}, // konec levelu

// zacatek levelu
{
  popis: "V tomto kole se lišák umí kromě kroku a sebrání slepice, také otáčet vlevo a vpravo.",
  kategorie: "Začátečník",
  mapa: [[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,302,  0,  0,  0,  0,  0],
         [  0,  0,  0,  1,  1,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
  pozice_lisky: [4, 3, 1],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,otoc_vlevo:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity}, // jake příkazy mohou být použity

}, // konec levelu

// zacatek levelu
{
  popis: "Alan se musí vyhýbat stromům.",
  kategorie: "Začátečník",
  mapa: [[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  1,  1,  1,  1,  1,  0,  0,  0],
         [  0,  0,  1,  1,  1,  1,  1,  0,  0,  0],
         [  0,  0,  1,  1, 11,  1,302,  0,  0,  0],
         [  0,  0,  1,  1,  1,  1,  1,  0,  0,  0],
         [  0,  0,  1,  1,  1,  1,  1,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
  pozice_lisky: [4, 2, 1],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,otoc_vlevo:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity}, // jake příkazy mohou být použity

}, // konec levelu

// zacatek levelu
{
  popis: "Alan se musí vyhýbat stromům.",
  kategorie: "Začátečník",
  mapa: [[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  7,  2,  1,  1,  2,  0,  0,  0],
         [  0,  0,  1,  1,  1,  1,  3,  0,  0,  0],
         [  0,  0,  1, 14, 12, 13, 11,  0,  0,  0],
         [  0,  0,  1,  2,  1,  1,301,  0,  0,  0],
         [  0,  0,  3,  1,  1,  2,  1,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
  pozice_lisky: [3, 6, 3],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,otoc_vlevo:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity}, // jake příkazy mohou být použity

}, // konec levelu

// zacatek levelu
{
  popis: "Zkuste vyřešit tento úkol, když se Alan nebude umět otočit vlevo.",
  kategorie: "Začátečník",
  mapa: [[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0, 31, 35, 31, 36, 35, 31, 31,  0,  0],
         [  0, 31, 11,  1,  1,  1,  2, 33,  0,  0],
         [  0, 31,  1,  2,  1,  1,  3, 34,  0,  0],
         [  0, 31,  1, 11, 12, 13, 11, 31,  0,  0],
         [  0, 32,  1,  2,  1,  1,301, 31,  0,  0],
         [  0, 31,  1,  1,  2,  2,  1, 31,  0,  0],
         [  0, 33, 31, 37, 31, 35, 31, 33,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
  pozice_lisky: [3, 6, 3],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity}, // jake příkazy mohou být použity

}, // konec levelu

// zacatek levelu
{
  popis: "Některé části kódu se často opakují. Místo opakování stejných částí používá cyklus, ve ktrém se zadá, co se má vykonat a také kolikrát.<br>Zkuste toto kolo vyřešit tak, že každá instrukce se použije jen jednou.",
  kategorie: "Začátečník",
  mapa: [[ 12, 11, 11, 12, 12, 11, 11, 12, 12, 11],
         [ 11, 11, 11, 11, 11, 12, 12, 11, 11, 12],
         [  6,  1,  7,  1,  2,  3,  1,  1,  1,  1],
         [  1,  1,  1,  2,  1,  1,  1,  1,  2,  1],
         [301,  1,  1,  1,  2,  1,  1,  1,  7,  3],
         [  1,  2,  3,  2,  1,  1,  2,  6,  1,  1],
         [  1,  7,  1,  1,  2,  2,  1,  1,  7,  1],
         [ 32, 36, 31, 31, 31, 35, 31, 31, 31, 31],
         [ 31, 31, 31, 35, 31, 31, 31, 31, 33, 34],
         [ 31, 31, 31, 31, 35, 31, 31, 33, 37, 33]],
  pozice_lisky: [4, 9, 3],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:1,seber_slepici:1,opakuj:1}, // jake příkazy mohou být použity

}, // konec levelu

// zacatek levelu
{
  popis: "Instrukci kroku můžete použít ve svém kódu jen 4x. Využijte vhodně cyklu.",
  kategorie: "Pokročilý",
  mapa: [[ 37, 32, 11, 12, 14, 13, 12, 12, 11, 14],
         [ 31, 35,  1,  1,  2,  1,  1,  1,  1,  2],
         [ 32,  1,  1,  1,  2,  2,  1,  1,  7,  1],
         [ 31,  3,  1,301,  1,301,  1,  2,  2,  1],
         [ 11,  1,  1,  1, 12,  1, 12,  1,  1,  2],
         [  1,  2,  1,301,  1,302,  1,302,  7,  1],
         [ 11,  1,  1,  1, 12,  1, 12,  1,  1,  1],
         [  1,  2,  1,302,  1,301,  1,301,  1,  2],
         [ 14,  2,  6,  2,  1,  1,  6,  7,  1,  1],
         [ 12,  2,  1,  1,  7,  1,  1,  1,  2,  1]],
  pozice_lisky: [3, 7, 2],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:4,otoc_vpravo:Infinity,seber_slepici:Infinity,opakuj:Infinity}, // jake příkazy mohou být použity

}, // konec levelu

// zacatek levelu
{
  popis: "Pozor na psa Gisberta. Musíte se mu při sbírání slepic vyhnout.",
  kategorie: "Začátečník",
  mapa: [[ 13, 14,  1, 12, 11, 13, 12, 12, 11, 11],
         [  1,  1,  1,  1,  2,  1,  1,  6,  1,  2],
         [  2,  7,  1,  1,  2,  2,  1,  1,  7,  1],
         [  1,  1,  1, 11, 12, 11, 12, 11, 11,  1],
         [ 11,  1,  1,  1,  2,  1,  2,  1,  3,  2],
         [  1,  2, 11, 12,  1, 12, 12, 12, 12,  1],
         [ 11,  1,301,  1,  2,  6,  2,  1,302,  1],
         [  1,  2,  1,  2,  1,  1,  1,  6,  1,  2],
         [ 12,  7,  2,  2,  3,  1,  7,  1,  1, 33],
         [ 12,  2,  1,  1,  1,  1,  1,  1, 35, 31]],
  pozice_lisky: [4, 8, 3],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [[4,3,1]], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity,opakuj:Infinity}, // jake příkazy mohou být použity

}, // konec levelu

// zacatek levelu
{
  popis: "Další překážkou, kterou musí Alan obejít jsou kopce.",
  kategorie: "Pokročilý",
  mapa: [[ 11, 12,  43,  1,  1,  1,  1,  1,  5,301],
         [ 51, 42,  2,  1,  2,  1,  1,302,301,302],
         [ 52,  1,  1,  1,  2,  2,  4,302,  4,  1],
         [ 53, 11,  1,  1,  1,301,301,302,  1,  1],
         [ 51,  1,  1,  2,  4,302,  5,  1,  2,  2],
         [ 51,  1,  1,301,302,302,  2,  1,  1,  1],
         [ 52,  1,  5,301,  4,  1,  2,  1,  2,  1],
         [ 51,302,301,302,  1,  1,  1,  1,  1, 33],
         [  4,302,  5,  2,  1,  1,  1,  1, 34, 33],
         [  1,301,  1,  1,  1,  1,  1, 31, 31, 31]],
  pozice_lisky: [9, 0, 1],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity,opakuj:Infinity}, // jake příkazy mohou být použity

}, // konec levelu


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
  pozice_lisky: [2, 4, 2],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [[5, 1, 1], [5, 2, 1], [5, 3, 1], [5, 4, 1], [5, 5, 1], [5, 6, 1], [5, 7, 1], [5, 8, 1], [5, 8, 2], [5, 8, 3], [5, 7, 3], [5, 6, 3], [5, 5, 3], [5, 4, 3], [5, 3, 3], [5, 2, 3], [5, 1, 3], [5, 1, 4]], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,otoc_vlevo:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity,opakuj:Infinity}, // jake příkazy mohou být použity

}, // konec levelu

// zacatek levelu
{
  popis: "Mapa je krásně symetrická.",
  kategorie: "Pokročilý",
  mapa: [[302,  1,  1, 11, 12, 11, 11,  6,  1,302],
         [  1, 31,  1,  2,  6,  1,  1,  1, 31,  1],
         [  2,  1, 32, 32, 34, 31, 31, 35,  2,  1],
         [ 11,  7, 31, 31, 31, 31, 31, 35,  1, 11],
         [ 12,  1, 31, 31,  2,  2, 31, 31,  6, 11],
         [ 12,  3, 31, 35, 41,  7, 31, 32,  1, 12],
         [ 11,  1, 36, 31, 31, 31, 31, 34,  7, 12],
         [  2,  1, 31, 31, 31, 32, 31, 33,  1,  1],
         [  1, 32,  1,  2,  7,  1,  1,  1, 33,  1],
         [301,  1,  1, 12, 12, 12, 13,  1,  7,301]],
  pozice_lisky: [2, 8, 2],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [[4, 5, 2],[4, 5, 2],[4, 5, 2],[4, 5, 2],[4, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 3],[5, 5, 4],[5, 5, 4],[5, 5, 4],[5, 5, 4],[5, 5, 4],[5, 5, 4],[5, 5, 4],[4, 5, 4],[4, 5, 4],[4, 5, 4],[4, 5, 1]], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p"
  instrukcni_sada: {krok:Infinity,otoc_vlevo:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity,opakuj:Infinity}, // jake příkazy mohou být použity

}, // konec levelu


// zacatek levelu
{
  popis: "Mapa je krásně symetrická.",
  kategorie: "Pokročilý",
  mapa: [[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,301,  0,  0,  0,302,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,203,  0,  0,  0,204,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
  pozice_lisky: [2, 8, 2],      // x,y,smer

  // pes na původní desce není. Toto pole určuje jeho postavení. Pokud je prázdné pes se nezobrazí, pokud se nemá hýbat, je jednoprvkové.
  instrukce_psa: [[4, 5, 2],[4, 5, 2],[4, 5, 2],[4, 5, 2],[4, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 2],[5, 5, 3],[5, 5, 4],[5, 5, 4],[5, 5, 4],[5, 5, 4],[5, 5, 4],[5, 5, 4],[5, 5, 4],[4, 5, 4],[4, 5, 4],[4, 5, 4],[4, 5, 1]], // souřadnice pohybu, může být prázné

  //  "krok","seber_slepici","otoc_vlevo","otoc_vpravo","opakuj","opakuj_p","if_p", "function_1" , "function_2"
  instrukcni_sada: {krok:Infinity,otoc_vlevo:Infinity,otoc_vpravo:Infinity,seber_slepici:Infinity,opakuj:Infinity,function_1:Infinity,function_2:Infinity}, // jake příkazy mohou být použity

}, // konec levelu


];

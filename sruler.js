// Ruler 2015
// Based on a TRS-80 Game

// Javascript equivalent for initializing random number generator
// CLEAR : RANDOMIZE TIMER: 

//DEFINT A-Z: DEFSTR S: DEFSNG N, Z: DEFDBL P: SC = CHR$(30): ZV = 30

function fnrmd( max ) {
	var min = 1;
	return Math.floor(Math.random() * (max - min)) + min;
}


// Opening title screen - and menu

20 COLOR 15, 1: CLS :  S = STRING$(29, 32) + Ruler 2015": GOSUB 8250
21 Q$ = "Big Orc Software": LOCATE 9, (40 - INT(LEN(Q$) / 2)): COLOR 11, 1: PRINT Q$; : COLOR 15, 1
22 Q$ = "Proudly Presents": LOCATE 10, 40 - INT(LEN(Q$) / 2): COLOR 13, 1: PRINT Q$; : COLOR 15, 1
23 LOCATE 11, 22: PRINT " >>>>>>  Ruler 2015 "; : COLOR 30, 1: PRINT "PLUS"; : COLOR 15, 1: PRINT "  <<<<<<"
30 LOCATE 13, 19: COLOR 10, 1: PRINT "Converted from the Original TRS-80 Version": COLOR 15, 1
40 LOCATE 16, 28: PRINT "Press <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 15, 1: PRINT "> to Continue."
70  IF INKEY$ = CHR$(13) THEN 200 ELSE GOTO 70
200  CLS :   PRINT STRING$(80, "*"): LOCATE 5, 65:  PRINT STRING$(80, "*")
205 LOCATE 3, 1:  GOSUB 9600: PRINT "Would you like to recall a SAVED Game ? "; : GOSUB 8400:   IF I = 1 THEN LOCATE 4, 19: GOSUB 9600: PRINT "Are you Sure ?"; : GOSUB 8400:  IF I = 1 THEN ZY = 1: PN = 9: GOSUB 230: GOSUB 8800:  GOTO 400: _
                                                                                ELSE LOCATE 4, 19: GOSUB 9600:
207 LOCATE 3, 1:  GOSUB 9600: PRINT "Would you like to Customize ? "; : GOSUB 8400:   IF I = 1 THEN GOSUB 9500
210 LOCATE 3, 1:  GOSUB 9600: PRINT "How Many HUMAN Countries ? "; :  GOSUB 8900: PH = I:  IF I = 9 THEN PN = I: GOTO 230
220 LOCATE 4, 17:  GOSUB 9600: : LOCATE 3, 1: GOSUB 9600: PRINT "How Many COMPUTER Countries ? "; : GOSUB 8900:   IF I > 9 - PH THEN LOCATE 5, 1: GOSUB 9600: PRINT "Maximum is"; 9 - PH; "!"; : SLEEP 5: LOCATE 5, 1: GOSUB 9600: GOTO 220: _
                                 ELSE PC = I: PN = PC + PH: IF PN < 2 THEN LOCATE 5, 1: GOSUB 9600: PRINT "You Must Have at Least 2 Countries !"; : SLEEP 5: LOCATE 5, 1: GOSUB 9600: GOTO 210
230  DIM P(PN, ZV), PO(PN), PB(PN, 2), PA(PN, PN), P$(PN), S(3), SI(2), N$(2, 5), PR(10)
235  FOR T = 1 TO 2: FOR X = 1 TO 5: READ N$(T, X): NEXT: NEXT
 




REM the following is prefixes (5) and suffixes (5) for Computer Countries.
DATA  Micro,Parma,Compu,Dos,IBM
DATA  land,way,lia,ton,town

240 F2$ = "###,###,###  ":   F1$ = "$##," + F2$:   F3$ = "$###," + F2$:   P$(0) = "World Mrkt":   S(1) = "Income Tax         ":   S(0) = "Corporate Tax      ":   S(2) = "Sales Tax          ":   S(3) = "Import Duty        ":   H = 100:   G = 1000: SA _
 = SC + "How Much ": SB = "Recommended "
250 SI(0) = "Defense": SI(1) = "Agriculture": SI(2) = "Other"
255  IF ZY = 1 THEN ZY = 0: RETURN
260  IF PH > 0 THEN LOCATE 3, 33: PRINT CHR$(31); : LOCATE 5, 65:    PRINT STRING$(80, "-"):   FOR T = 1 TO PH: LOCATE 3, 1: GOSUB 9600: PRINT "Name of HUMAN Country #"; T; " :  "; : ID = 0: IT = 0: IL = 10: GOSUB 8500: P$(T) = S: NEXT
265 IF PC = 0 THEN 280
270  LOCATE 5, 65: PRINT STRING$(80, "="):
275  FOR T = 1 TO PC: LOCATE 3, 1: GOSUB 9600: PRINT "Name of COMPUTER country #"; T; ": ";
276  IL = 10: ID = 1: S = N$(1, FNRMD!(5)) + N$(2, FNRMD!(5)) + CHR$(T + PH + 48): IT = 0: GOSUB 8500: P$(T + PH) = S:  LOCATE 4, 1: GOSUB 9600: PRINT "Choose :    <1> Defensive, <2> Regular, or <3> Agressive ? ";
277  S = "2": ID = 1: IT = 1: IL = 1: GOSUB 8500: PR(T + PH) = I - 2: LOCATE 4, 1: GOSUB 9600: NEXT
280  FOR T = 1 TO ZV: READ P(1, T): NEXT: FOR T = 2 TO PN: FOR X1 = 1 TO ZV: P(T, X1) = P(1, X1): NEXT: NEXT: IF PC > 0 THEN FOR T = PH + 1 TO PN: P(T, 30) = PR(T): NEXT
290  DATA  100000000,0,20,1750000,50000,0,0,14,0,7500,80,500,100000000,40,30,10,15,100,100,100,50000,20000,100,10000,1,100,0,100,100,0
300  FOR T = 1 TO PN: P(T, 5) = 51000! + FNRMD!(1100): P(T, 11) = 80 + FNRMD!(2): P(T, 12) = 500 + FNRMD!(10): NEXT
400 REM
410 TN = TN + 1: CLS : S = "     Year " + STR$(TN): GOSUB 8150: TI = 7 + FNRMD!(4):  TW = H - FNRMD!(FNRMD!(FNRMD!(70))) - FNRMD!(25): LOCATE 4, 14: PRINT "Weather Quality (in Percent)  : "; TW; "%"; :    LOCATE 5, 25:    PRINT "ARMY STATISTICS  : " _
;
420  FOR T = 1 TO PN: PB(T, 1) = P(T, 11): PB(T, 2) = P(T, 12): NEXT
421 GOSUB 4400: N = 0: P7 = 0
422 FOR T = 1 TO PN
423 IF P(T, 7) <> 0 THEN N = N + P(T, 7): P7 = P7 + P(T, 7) * P(T, 6)
424 NEXT
430 TF = FNRMD!(5) + 48 + (100 - TW) / 5: IF N > 0 THEN P7 = P7 + 1E+08 * TF: N = N + 1E+08: TF = P7 / N + FNRMD!(5): IF TF > 999 THEN TF = 999
440  LOCATE 16, 13: GOSUB 8300
450  GOSUB 9000
500  FOR CP = 1 TO PN: C = PO(CP): IF P(C, 0) = 1 THEN 3550 ELSE z$ = P$(C): S = "Year" + STR$(TN) + " Report for " + z$: GOSUB 8150: z = P(C, 4): ZA = P(C, 1): ZC = P(C, 10): ZD = P(C, 5): ZE = P(C, 11): ZF = P(C, 12)
505  IF P(C, 26) > 0 THEN P(C, 3) = TI + (205 - P(C, 26)) / 7: IF P(C, 3) < TI THEN P(C, 3) = TI
507 P(0, 6) = 345 - P(C, 26) * 3 + TF: IF P(0, 6) < TF THEN P(0, 6) = TF
510 ZQ = P(C, 23): ZS = P(C, 25): P(0, 7) = (50000000# + FNRMD!(10000) * H) * SGN(P(C, 26)): P = (ZC * (P(C, 20) / H) * SQR(P(C, 18) / H) * SQR(P(C, 19) / H) + 10000) / 2: P = (P / 6) * ((FNRMD!(H) + 950) / G): IF ZS < .9 THEN P = P * SQR(ZS)
520  IF ZQ < H THEN P = P * (ZQ / H)
530 P1 = z * .85 * P * (P(C, 15) / H):   P1 = P1 * ((FNRMD!(15) + H) / H)
540 P2 = P * (P(C, 20) / H) * SQR(P(C, 18) / H) * ((z) * ((FNRMD!(10) + 45) / H)) * (P(C, 14) / H):   P3 = P * z * ((FNRMD!(30) + 50) / H) * (P(C, 16) / H):   P4 = (ZC / 7500) * (z * 450) * ((FNRMD!(15) + 85) / H) * (P(C, 17) / H)
542 P7 = 0: IF P(C, 24) < 5000 AND TA = 1 THEN IF ZC < 7500 AND ZF < 100 AND z < 800000! AND P1 + P2 + P3 + P4 < 5E+08 AND P(C, 26) > 0 THEN LOCATE 5, 28: PRINT USING "Wrld Mrkt Subsidy   " + F1$; 1E+08; : P7 = 1E+08
545 LOCATE 4, 26:    PRINT USING "Previous Balance    " + F1$; ZA; :      ZA = ZA + P7:   P6 = ZA * (P(C, 8) / H):   LOCATE 5, 8:    PRINT "INCOME  : "; :    LOCATE 6, 26:    PRINT USING "Interest on Treas.  " + F1$; P6;
550 LOCATE 7, 26:    PRINT USING S(1) + " " + F1$; P1; :     LOCATE 8, 26:    PRINT USING S(0) + " " + F1$; P2; :     LOCATE 9, 26:    PRINT USING S(2) + " " + F1$; P3; :     LOCATE 10, 26:    PRINT USING S(3) + " " + F1$; P4;
570 P7 = P(C, 13) / 50 + z * (P(C, 20) / H) * (P(C, 18) / H) * ((FNRMD!(H) + 950) / 10):   ZA = P1 + P2 + P3 + P4 + P5 + P6 + P7 + ZA:   LOCATE 11, 26:    PRINT USING "Other Income        " + F1$; P7; :      LOCATE 12, 46:    PRINT "---------------" _
; : LOCATE 13, 18: PRINT "TOTAL TREASURY   : "; : LOCATE 13, 46: PRINT USING F1$; ZA; :
572 LOCATE 14, 46:    PRINT "==============="; : LOCATE 7, 2: PRINT "Interest Rates: "; : LOCATE 8, 2: PRINT USING "On Treasury   : ##.# %"; P(C, 8); : LOCATE 9, 2: PRINT USING "On Loans      :###.# %"; P(C, 3);
575 LOCATE 10, 2:  PRINT "Current Loan  : "; : LOCATE 11, 5: PRINT USING F1$; P(C, 2); :
579 REM had to break long computation into multiple parts for compiling
580 P1 = (z / 20) * SQR((P * 6) / ZC) * SQR(30 / (P(C, 15) + 10))
581 P1 = P1 * SQR(P(C, 20) / H) * (ZS) * (P(C, 24) / 10000) * SQR(SQR((z / H) / (P(C, 22) + G)))
582 P1 = P1 * SQR(ZC / 7500) * (ZQ / H) ^ 1.5 * ((FNRMD!(H) + 950) / G)
588 P1 = P1 * (180 / (z / P(C, 24)))
589 REM:temp1=Z/20:temp2=sqr((P*6)/ZC):temp3=sqr(30/(P(C,15)+10)):temp4
590  p96 = (z / 20): P1 = P1 + p96: P1 = INT(P1 / 2)
5915 P2 = INT((z / 20) * ((z / 20) / P1) * ((FNRMD!(H) + 950) / G)): P2 = P2 * (7500 / ZC)
591  IF P2 > z THEN P2 = z
592 LOCATE 13, 5: GOSUB 8300
595  CLS : S = S + " (Page 2)": GOSUB 8150: LOCATE 4, 10: PRINT USING "Previous Population  : " + F2$; z + ZD;
600 LOCATE 6, 4: PRINT USING "Immigrants  :    " + F2$; P1; :      LOCATE 7, 4:    PRINT USING "Emigrants   :    " + F2$; P2; :      z = z + P1 - P2
610 P3 = INT(((z + ZD) / 67) * SQR(ZS) * SQR(ZQ / H) * ((FNRMD!(H) + 950) / G)): P4 = INT(((z + ZD) / H) * SQR(1 / ZS) / (ZQ / H) ^ 2 * ((FNRMD!(H) + 950) / G) + z / G): IF P4 > z + P3 THEN P4 = z + P3
620 LOCATE 6, 36:    PRINT USING "Births    :    " + F2$; P3; :      LOCATE 7, 36:    PRINT USING "Deaths    :    " + F2$; P4; :      z = z + P3 - P4:   P1 = z / G * (FNRMD!(50) + H) / H:   ZD = ZD + P1:   z = z - P1
630 LOCATE 9, 2:    PRINT USING "General Population  : " + F2$; z; :      LOCATE 9, 37:    PRINT USING "Army Personnel  : ####,###"; ZD; :      LOCATE 10, 10:    PRINT USING "TOTAL Population     : " + F2$; z + ZD;
640 LOCATE 12, 4:    PRINT USING "No. of Volunteer Soldiers  : ##,###       GNP/c  :  $##,###"; P1; ZC; : LOCATE 13, 5: PRINT USING "(Treasury  : " + F1$ + ")"; ZA;
900 LOCATE 16, 4: IF z < 75000! + FNRMD!(30000) THEN GOSUB 8300: CLS : PRINT "The VERY FEW Civilians Remaining in "; z$; " Have Decided to Leave for Greener Pastures!"; z$; " Is Now Non-existent!!!"; :  GOSUB 9070:   GOTO 3540
925  IF P(C, 26) > 0 THEN P(C, 26) = P(C, 26) + ((ZA / z) / G - .9) + (ZC / 750 - 10): P = SQR(z * (ZC / 7500) ^ 2 / 1800000!) * 100: IF P < P(C, 26) THEN P(C, 26) = P:                      ELSE :  ELSE IF P(C, 26) < 0 THEN P(C, 26) = 0
930 P = (ZC / 7500) * (ZC / 7500) * SQR(20 / (P(C, 16) + 10)) * SQR(50 / (P(C, 14) + 20)) * SQR(SQR(P(C, 28) / H)):   P(C, 18) = SQR((P * (ZE / 110) * H + P(C, 18)) / 200) * 100 * SQR(SQR((P(C, 28) + P(C, 29)) / 200)):   P(C, 20) = SQR((P * H + P(C _
, 20)) / 200) * H
935 P(C, 19) = SQR((P * SQR(TW + 20) * 10 + P(C, 19)) / 200) * H
940 LOCATE 13, 5: IF C > PH THEN 3000 ELSE GOSUB 8300
950 REM
1300  COLOR 12, 1: CLS : PRINT "*** Tax Rates:  ("; z$; ")"; TAB(28); STRING$(51, "*"): COLOR 15, 1: PRINT STRING$(80, "="): LOCATE 10, 4: PRINT USING "Treasury :" + F1$; ZA; : LOCATE 10, 44: PRINT USING "GNP/c : $##,###"; ZC; : LOCATE 13, 1: PRINT  _
"------Industry Conditions : "; STRING$(35, "-"); : LOCATE 14, 1
1305  FOR X = 0 TO 2: PRINT USING "\         \  : ####  " + CHR$(219) + " "; SI(X); P(C, 18 + X); : NEXT: LOCATE 9, 1: PRINT STRING$(80, "-");
1310 LOCATE 4, 1:  FOR X = 0 TO 3: PRINT X + 1; S(X); P(C, 14 + X); "%  ", : NEXT: LOCATE 7, 1: PRINT CHR$(30); "Input the Proper Number to Change, or <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 15, 1: PRINT ">  :  "; : GOSUB 8910: IF I > 4 THEN 1310  _
ELSE IF I = 0 THEN 1330 ELSE T = I
1320 LOCATE 7, 1: GOSUB 9600: PRINT "New Rate  :  "; : IL = 2: ID = 0: IT = 1: GOSUB 8500: IF I > 60 THEN LOCATE 8, 1: PRINT "Maximum is 60 % !"; : GOTO 1320 ELSE P(C, 13 + T) = I: LOCATE 7, 1: GOSUB 9600: LOCATE 8, 1: GOSUB 9600: GOTO 1310
1330 REM
1400  COLOR 12, 1: CLS : GOSUB 9080:   PRINT "Food Supply (in Food Units) :   ("; z$; ")"; TAB(47); : PRINT USING "(Weather  : ### %)"; TW; : COLOR 15, 1: LOCATE 2, 1: PRINT STRING$(80, "-"); : PRINT USING "Harvest: " + F2$; P1; : PRINT USING  _
" Reserve: " + F2$; P(C, 21); : P(C, 21) = VAL(STR$(P(C, 21) + P1))
1410  PRINT " TOTAL: ": PRINT : PRINT USING SB + " Minimum to Distribute to People:" + F2$; z
1420 LOCATE 3, 53:  PRINT USING F2$; P(C, 21); : LOCATE 6, 1:  PRINT STRING$(80, 205); :  PRINT "  *** WORLD MARKET for Food Units ***":   PRINT "   Country        Avail.  $/u. :   Country        Avail.  $/u.":   PRINT STRING$(80, "-");
1421 FOR X = 0 TO PN: LOCATE 10 + INT(X / 2), 1 + (X AND 1) * 32: GOSUB 9600
1430 IF P(X, 7) > 0 AND P(X, 0) = 0 THEN PRINT USING "## \        \  ##,###,###  ### :"; X; P$(X); P(X, 7); P(X, 6);
1431 NEXT
1440 P = 0: FOR X = 1 TO PN: P = P + P(X, 7) * ABS(P(X, 0) - 1): NEXT: LOCATE 15, 1: PRINT STRING$(80, 205): PRINT "Choose :   <1> to BUY Food,  <2> to SELL Food, or <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 15, 1: PRINT ">  :  "; : GOSUB 8910: IF I _
 > 2 THEN 1440 ELSE ON I GOTO 1450, 1470: GOTO 1490
1450  IF P <> 0 THEN LOCATE 16, 1: GOSUB 9600: PRINT "From which Country (Give number, or <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 31, 1: PRINT ">)  :  "; : S = "99": ID = 1: IL = 2: IT = 1: GOSUB 8500: IF I = 99 THEN 1440 ELSE IF I > PN THEN 1450  _
ELSE IF P(I, 7) = 0 THEN 1450 ELSE : ELSE I = 0: IF P(0, 7) = 0 THEN 1440
1455 T = I: P = ZA / P(I, 6): IF P > P(I, 7) OR I = C THEN P = INT(VAL(STR$(P(I, 7)))): P(I, 7) = P
1460  GOSUB 9197: LOCATE 16, 1:  PRINT USING SA + "(Max. =" + F2$ + ") in units  :  "; P; : GOSUB 8920: N = INT(N): IF N > P OR N < 0 THEN 1460 ELSE P(C, 21) = P(C, 21) + N: P(T, 7) = P(T, 7) - N: IF T <> C THEN ZA = ZA - N * P(T, 6): P(T, 1) = P(T _
, 1) + N * P(T, 6): IF ZA < 0 THEN ZA = 0: GOTO 1420: ELSE 1420 ELSE 1420
1470 LOCATE 16, 1: PRINT SA; "Would You Like to Put on the Market ? "; : GOSUB 8920: N = INT(VAL(STR$(N))):        IF N > P(C, 21) OR N < 0 THEN 1470 ELSE IF N = 0 THEN 1420 ELSE P(C, 21) = P(C, 21) - N: P = N
1480 LOCATE 16, 1:  GOSUB 9600: PRINT "What Price ? "; : ID = 0: IT = 1: IL = 3: GOSUB 8500: IF N = 0 THEN 1480 ELSE P1 = P(C, 7) * P(C, 6) + P * N: P(C, 7) = P(C, 7) + P: P(C, 6) = P1 / P(C, 7): GOTO 1420
1490 P(C, 21) = VAL(STR$(P(C, 21))): LOCATE 16, 1: GOSUB 9600: LOCATE 16, 1: PRINT SA; "for the Population ? "; : S = STR$(FIX(z)): GOSUB 8930: N = INT(N):    IF N < P(C, 21) / 2 AND N < (z) / 2 THEN LOCATE 16, 1: GOSUB 9600: PRINT  _
"You Must Release More !!"; : FOR X = 1 TO 1500: NEXT: GOTO 1490
1495  IF N > P(C, 21) THEN 1490 ELSE P(C, 21) = P(C, 21) - N: ZS = N
1550  GOSUB 4510
1600  COLOR 12, 1: CLS : PRINT "*****  Government Services  -  Spending  ***************************************": COLOR 15, 1: PRINT STRING$(80, "="): PRINT "Government Services Include :All; Municipal; Projects, Roads,"; CHR$(10);  _
" Public; Facillities, Medicare,Education, Social Security,"; CHR$(10); " Unemployment,  ETC."
1605  PRINT STRING$(80, "-"): LOCATE 12, 1: PRINT USING "Total Available Treasury  :  " + F1$; ZA;
1610 LOCATE 8, 1: PRINT USING "Total Population  : " + F2$; z + ZD: PRINT USING "Current Quality of Government Services :#### %"; ZQ:  GOSUB 9090: P1 = VAL(STR$(P1)): GOSUB 9190: LOCATE 11, 1: PRINT USING SB + " Minimum Amount to Spend : " + F1$; P1 _
;
1620 LOCATE 14, 1: PRINT SA; "Would You like to Spend ? "; : S = STR$(FIX(P1)):  GOSUB 8940:   IF N < 0 OR N > ZA THEN 1620 ELSE IF N < ZA / 2 AND N < P1 / 2 THEN LOCATE 15, 1: PRINT "You Must Spend More Than That !"; : GOTO 1620: _
                                                                       ELSE GOSUB 9120
1700 A$ = "": FOR I = 1 TO 3: PR(I) = 0: NEXT:   CLS : S = "     Industry Conditions   (" + z$ + ")": GOSUB 8200: LOCATE 5, 43: PRINT USING "GNP/c : $##,###"; ZC;
1705 LOCATE 9, 1: PRINT "Conditions of Industries (Relative to Start of Year 1) :": S = " # \        \ :####% " + CHR$(219): LOCATE 7, 1: FOR I = 0 TO 2: PRINT USING S; I + 1; SI(I); P(C, 18 + I); : NEXT
1710 LOCATE 5, 2: PRINT USING "Treasury  : " + F1$; ZA; : FOR I = 1 TO 45 STEP 22: LOCATE 7, I + 2: PRINT " "; : LOCATE 7, I + 16: PRINT " "; : NEXT
1720 LOCATE 12, 1: PRINT "If you would like to Subsidize an"; A$; " Industry then"; : GOSUB 9600: PRINT "Type the Number of that Industry,  otherwise just <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 15, 1: PRINT ">  :  "; : GOSUB 8910: IF I > 3 THEN  _
1710 ELSE IF I = 0 THEN GOSUB 1740: GOTO 1800 ELSE T = I: LOCATE 7, 3 + (I - 1) * 22: PRINT ">"; STRING$(13, 28); "<";
1730  GOSUB 9190: A$ = "other": LOCATE 12, 1: GOSUB 9600: LOCATE 13, 1: PRINT SA + "would you like to Subsidize it  :  "; : AZ = AY: GOSUB 8950: IF N > ZA THEN 1730 ELSE PR(T) = PR(T) + N: LOCATE 8, 2 + (T - 1) * 22: PRINT USING F1$; PR(T); : GOSUB  _
9150: GOTO 1710
1740  FOR I = 18 TO 20: P = P(C, I): IF P > 120 THEN P = SQR(P / H) * H + 11: IF P > 150 THEN P = SQR(P / H) * H + 15:
1750 P(C, I) = P: NEXT I:  FOR X = 14 TO 17: T = P(C, X) - (40 + FNRMD!(8)): IF T > 0 THEN X1 = 100 + T * 2: FOR T = 18 TO 20: P(C, T) = SQR(P(C, T) / X1) * H: NEXT T
1760  NEXT X:    RETURN
1800 ZE = INT(ZE):   CLS : S = "     The " + z$ + " ARMY": GOSUB 8200: LOCATE 4, 1: PRINT "CURRENT STANDING:": LOCATE 5, 35: PRINT USING " Units Available :  ##,###"; ZF; : LOCATE 4, 35: PRINT " Efficiency : "; ZE; "%": LOCATE 6, 36: PRINT USING  _
"Maximum Units:##,###"; INT(ZD / (200 - P(C, 28))): LOCATE 5, 1: PRINT USING " No. of Soldiers :####,###"; ZD;
1805 LOCATE 6, 2: PRINT USING "Soldiers per Unit ###"; 200 - P(C, 28): PRINT USING "Soldiers Drafted last Year :" + F2$; P(C, 22): LOCATE 9, 1: PRINT USING " Technology Rating : ###.#     Defensive Strength : ###.#"; P(C, 28); P(C, 29);
1810  GOSUB 9100: LOCATE 11, 1:  PRINT USING "Minimum Pay " + SB + ": " + F1$; P1: PRINT USING "Minimum Operations/Maintenance " + SB + " : " + F1$; P2
1820  GOSUB 1860: P = P1: N = 0: IF ZA THEN LOCATE 15, 1: GOSUB 9700: PRINT SA; "to Spend on Soldier's Pay ? "; : AZ = AY: S = STR$(FIX(P1)): GOSUB 8940:  IF N > ZA THEN 1820
1830  GOSUB 9110: GOSUB 1860: P = P2: N = 0: IF ZA THEN LOCATE 15, 1: GOSUB 9700: PRINT SA; "to Spend on Oper./Maint. ? "; : AZ = AY: S = STR$(FIX(P2)): GOSUB 8940:  IF N > ZA THEN 1830
1832  GOSUB 9110: GOSUB 1860: IF ZA THEN LOCATE 15, 1: GOSUB 9700: PRINT SA; "to Spend on Research/Development ? "; : GOSUB 8950: IF N > ZA THEN 1832 ELSE ZA = ZA - N: P1 = N
1834  GOSUB 1860:   IF ZA THEN LOCATE 15, 1: GOSUB 9700: PRINT SA; "to Spend on Defense ? "; : GOSUB 8950:  IF N > ZA THEN 1834 ELSE ZA = ZA - N: P2 = N: GOSUB 9250
1840  GOSUB 1860:   IF ZA THEN LOCATE 16, 1: GOSUB 9600: PRINT "Units cost $2,000,000 each"; : LOCATE 15, 1: GOSUB 9700: PRINT SA; "to Spend on New Equipment ? "; : GOSUB 8950: IF N > ZA THEN 1840 ELSE ZA = ZA - N: P(C, 9) = P(C, 9) + N: LOCATE 16,  _
1: GOSUB 9600
1850  GOSUB 1860: P = INT(z / 80): LOCATE 15, 1: GOSUB 9700: PRINT USING SC + "How Many Soldiers (Max =###,###) to Draft ? "; P; : S = STR$(P): GOSUB 8930: IF N > P THEN 1850 ELSE GOSUB 9130:  GOTO 1900
1860  GOSUB 9190:   LOCATE 13, 1:   PRINT USING "Current Treasury  :  " + F1$; ZA; :       RETURN
1900  CLS :    S = "     Battle Plans for " + z$:    GOSUB 8200:   T = 0:   LOCATE 4, 1:   PRINT "Army Efficiency  :  "; PB(C, 1); :    LOCATE 4, 41:    PRINT USING "Weather :### %"; TW; :      LOCATE 6, 1:    PRINT STRING$(80, 205):  LOCATE 16, 1: _
                    GOSUB 9600
1910  GOSUB 1940: LOCATE 16, 1:   PRINT "Type the number of the Country to Attack, or <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 15, 1: PRINT "> : "; : GOSUB 8910: IF I = 0 THEN 1950 ELSE IF I > PN OR I = C THEN 1910 ELSE IF P(I, 0) = 1 THEN LOCATE  _
16, 1: GOSUB 9600: PRINT "That Number Is Not An Active Country !"; : FOR X = 1 TO 1500: NEXT: GOTO 1910 ELSE T1 = I
1920 LOCATE 7 + T, 1: PRINT USING "##  \       \   :"; T1; P$(T1); : LOCATE 16, 1: GOSUB 9600: PRINT "How many Units to send ? "; : IL = 5: IT = 1: ID = 0: GOSUB 8500: IF I = 0 THEN LOCATE 7 + T, 1: GOSUB 9600: GOTO 1910: _
                                                  ELSE IF I > PB(C, 2) THEN 1920 ELSE LOCATE 7 + T, 21: PRINT I; "Units"; : PB(C, 2) = PB(C, 2) - I
1930 PA(C, T1) = PA(C, T1) + I: T = T + 1: IF T < 9 THEN GOTO 1910 ELSE LOCATE 16, 1: GOSUB 8300: GOTO 1950
1940 LOCATE 5, 1: PRINT "Army Units Still Available : "; PB(C, 2); : GOSUB 9600:   RETURN
1950  GOTO 3500
3000  PRINT "Please Wait a Bit..."; : GOSUB 9600: SLEEP 2:  REM Comp
3002 TC = P(C, 30)
3005 P1 = P(C, 26) ^ 2 * 100000! + 1000: P = P(C, 2): P = P + P * P(C, 3) / 100:
3010 P2 = ZA - z * G: IF P2 < 0 THEN IF P < P1 THEN P = P + ABS(P2): ZA = ZA + ABS(P2): FOR X = 15 TO 17: P(C, X) = P(C, X) + FNRMD!(3) + 1: NEXT:                       ELSE FOR X = 14 TO 17: P(C, X) = 41: NEXT:  ELSE IF P2 > z * 250 THEN IF P > 0  _
THEN P = P - P2: ZA = ZA - P2
3012  IF P2 > z * 250 THEN FOR X = 14 TO 15: IF P(C, X) > 27 THEN P(C, X) = P(C, X) - 3
30121 NEXT
3013  IF P2 > z * 250 THEN FOR X = 16 TO 17: P(C, X) = P(C, X) - 1: NEXT: IF P(C, 16) < 10 THEN P(C, 16) = 10: IF P(C, 17) < 0 THEN P(C, 17) = 0:                      ELSE :  ELSE :  ELSE : IF P > P1 THEN P = P - ZA / 10: ZA = ZA * .9
3014  IF P > ZA + P1 THEN P(C, 0) = 2: GOTO 3015
30145 FOR X = 14 TO 17: IF P(C, X) > 40 THEN P(C, X) = 41
30146 NEXT
3015  IF P <= 0 THEN ZA = ZA + ABS(P): P(C, 2) = 0: P(C, 26) = P(C, 26) + 1:  ELSE P(C, 2) = P: IF P > P1 THEN P(C, 26) = P(C, 26) - 1
3035  IF TC = 1 THEN X3 = 1 ELSE X3 = 0
3040  GOSUB 9080: P1 = P(C, 21) + P1: P = (z): IF P1 < P THEN IF P(C, 7) > 0 THEN P1 = P1 + P(C, 7): P(C, 7) = 0
3050  IF P1 < P AND P(0, 6) < 150 + FNRMD!(10) THEN P2 = P - P1 + 50000: P1 = P1 + P2: ZA = ZA - P2 * P(C, 6):                           ELSE IF P1 > 3 * P AND X3 = 0 THEN P(C, 7) = INT(P(C, 7) + P1 / 4): P1 = P1 * .75: P(C, 6) = 275 + FNRMD!(50)
3055  IF X3 = 1 AND P(0, 6) < 110 AND ZA > z * G THEN P1 = P1 + z: ZA = ZA - z * P(0, 6)
3060  IF X3 = 0 THEN IF P1 < P * 1.5 THEN P2 = P1:                      ELSE P2 = P * 1.5:  ELSE P2 = P1
3070 P1 = P1 - P2: P(C, 21) = INT(P1): ZS = P2: GOSUB 9090: P3 = P1: GOSUB 9100: P = P1 + P2: IF ZA < P THEN N = ZA / 2:                        ELSE IF P < ZA * .1 THEN N = P * (.9 + FNRMD!(9) / 10):  ELSE IF ZA < P3 THEN N = P / 2:  ELSE P2 = P3 *  _
.75 + P: IF ZA < P2 THEN N = P * .6: ELSE IF ZA < P2 * 2 THEN N = P * (.9 + FNRMD!(9) / 10): ELSE N = ZA * (.2)
3075  IF TC = -1 THEN N = N * .94
3080  GOSUB 9110: P1 = P3:  IF P1 > ZA * (.7) THEN N = ZA * (.7):                      ELSE IF P1 > ZA * .5 THEN N = ZA * (.58):  ELSE N = P1 * (1.1)
3090  GOSUB 9120: N = INT(z / 80): P1 = ZA * (.6 + TC / 6) - P(C, 9): P(C, 9) = P(C, 9) + P1: ZA = ZA - P1: GOSUB 9130: IF TC = -1 THEN P2 = ZA / 4: P1 = 0: ZA = ZA * .8:                      ELSE IF TC = 0 THEN P2 = ZA / 5: P1 = P2 / 2: ZA = ZA *  _
.7: ELSE P2 = ZA * .1: P1 = P2 * 2: ZA = ZA * .7:
3095 P(C, 9) = P(C, 9) / 2:   P1 = P1 + P(C, 9):    GOSUB 9250:   T = 3:   N = ZA * (50 + FNRMD!(6)) / 100:    GOSUB 9150:   T = 1:   N = ZA * .45:    GOSUB 9150:   T = 2:   N = ZA:    GOSUB 9150:    GOSUB 1740
3097  IF TW < 60 + FNRMD!(5) THEN 3130
3098  IF ZF > 450 + FNRMD!(100) AND TC > -1 THEN TC = 1: X3 = 1:                       ELSE IF TC = 1 AND ZF < 200 THEN TC = -1: X3 = 0
3100  IF TN = 1 THEN X4 = FNRMD!(PN): IF X4 = C THEN 3130 ELSE T = PB(C, 2) * (FNRMD!(20) + 10 + X3 * 20) / 100: PA(C, X4) = T: PB(C, 2) = PB(C, 2) - T: GOTO 3130
3105  N = 0: X4 = 0: FOR X = 1 TO PN
3106  IF P(X, 0) = 1 OR X = C THEN 3108
3107  P = P(X, 12) * P(X, 11) * P(X, 29) / 100: IF P > N THEN N = P: X4 = X
3108  NEXT
3110  IF X4 = 0 THEN 3130 ELSE IF FNRMD!(10) < (5 + TC * 2) THEN PA(C, X4) = INT(PB(C, 2) * (.6 + TC * .2)): PB(C, 2) = PB(C, 2) - PA(C, X4):                          ELSE X = FNRMD!(PN): IF P(X, 0) = 0 AND X <> C AND TC > -1 THEN T = PB(C, 2) * .6: _
                          PA(C, X) = T: PB(C, 2) = PB(C, 2) - T
3120  IF FNRMD!(5) < 3 + TC THEN X = FNRMD!(PN): IF P(X, 0) = 0 AND PA(C, X) = 0 AND X <> C THEN T = PB(C, 2) * (.5 + TC * .2): PA(C, X) = T: PB(C, 2) = PB(C, 2) - T
3125  IF P(C, 0) = 2 THEN PA(C, X4) = PB(C, 2): : PB(C, 2) = 0
3130 LOCATE 13, 5: GOSUB 8300
3500 REM End-of-turn
3510 P(C, 8) = FNRMD!(5) + ZC / G + 1:   ZS = (ZS + z / 10) / z
3520 REM
3521  ZC1 = SQR((ZQ + 2) / H): ZC2 = SQR(P(C, 18) / H): ZC3 = SQR(P(C, 19) / H): ZC4 = SQR(SQR(P(C, 28) / H))
35215 ZC5 = SQR(SQR(ZS)): ZC6 = SQR(75 / (P(C, 14) + 35)): ZC7 = SQR(75 / (P(C, 16) + 60)): ZC8 = SQR(60 / (P(C, 17) + 40)): ZC9 = SQR(SQR(80 / (P(C, 15) + 50)))
35216 ZC10 = ZC2 * ZC3 * ZC4 * ZC5 * ZC6 * ZC7 * ZC8 * ZC9
3522  ZC = SQR(SQR((ZC * ZC1 * P(C, 20) / H * ZC10) / 7500)) * 7500 + FNRMD!(10)
3530  IF P(C, 7) THEN GOTO 35315 ELSE GOTO 3540
35315 IF P(C, 6) < (45 + FNRMD!(15)) THEN GOSUB 3532
3531  GOTO 3540
3532  ZA = ZA + P(C, 7) * P(C, 6): P(C, 7) = 0
3534  RETURN
3540  P(C, 4) = z: P(C, 1) = ZA: P(C, 10) = ZC: P(C, 5) = ZD: P(C, 11) = ZE:   P(C, 12) = ZF:   P(C, 23) = ZQ:   P(C, 25) = ZS
3550  NEXT CP:    CLS :    S = " End of Year " + STR$(TN): GOSUB 8200: z = 0:   PB(0, 1) = 100:   PB(0, 2) = 50000!
3560  GOSUB 9000:   FOR CP = 0 TO PN
3561  C = PO(CP): IF P(C, 0) = 1 THEN 4000
3562  FOR T = 1 TO PN
3563  IF T = C OR P(T, 0) = 1 OR PA(C, T) = 0 THEN GOTO 3651
3565  IF TU = 0 THEN : GOSUB 9220: LOCATE 4, 1:   GOSUB 9600: PRINT "BATTLE  : ": LOCATE 6, 1: GOSUB 9600: PRINT P$(C); " On the Offence With"; PA(C, T); "Units,":  ELSE LOCATE 3, 33: PRINT  _
"Attacker    Units    Defender      Units  :   A-dstr D-dstr   Land";
3567  IF TU = 1 THEN LOCATE 4 + T, 1: PRINT USING "\       \ #####      \         \ #####    :  "; P$(C); PA(C, T); P$(T); PB(T, 2); :  ELSE GOSUB 9600: PRINT "Against "; P$(T); " With"; PB(T, 2); "Units : "
3570  z = z + 1:   PB(T, 2) = PB(T, 2) + 2:   P1 = INT(PA(C, T) * PB(C, 1) / 100 * (92 + FNRMD!(16)) / 100 * SQR(TW / 100) / (P(T, 29) / 100))
3575 P2 = INT(PB(T, 2) * PB(T, 1) / 100 * (90 + FNRMD!(20)) / 100): P3 = PB(T, 2) - P1: P4 = PA(C, T) - P2: IF P3 < 0 THEN P1 = ABS(P3): P3 = 0
3580  IF P(T, 24) = 0 THEN PB(T, 2) = 0: IF TU = 0 THEN LOCATE 9, 1: PRINT CHR$(31); P$(T); " Has No More Land !!": LOCATE 13, 1: PRINT STRING$(80, 219); : LOCATE 12, 17: GOSUB 8300: GOTO 3651 ELSE PRINT "   No More Land !": GOTO 3637
3590 P4 = SGN(SGN(P4) + 1) * P4: P2 = PA(C, T) - P4: P5 = PB(T, 2) - P3: P(T, 12) = P(T, 12) - P5: PB(T, 2) = P3: P6 = 0: IF P3 = 0 THEN P6 = P1 * 500: IF P(T, 4) < P6 THEN P6 = P(T, 4): P(T, 4) = 0:                      ELSE P(T, 4) = P(T, 4) - P6
3600  IF P3 = 0 THEN IF P2 + P1 > PA(C, T) THEN P2 = PA(C, T):  ELSE P2 = P2 + P1
3610 ZA = P(T, 12): P(T, 12) = SGN(SGN(ZA) + 1) * ZA: P(C, 12) = P(C, 12) - P2: P7 = INT(P5 * 2 + P6 / 60): IF P7 > P(T, 24) THEN P7 = P(T, 24)
3620 P1 = P7 / P(T, 24):   P = P(T, 4) * P1:   P6 = P6 + P:   P(T, 4) = P(T, 4) - P:   P(T, 5) = P(T, 5) - P(T, 5) * P1:   P(T, 13) = P(T, 13) - P(T, 13) * P1:   P(T, 1) = P(T, 1) - P(T, 1) * P1:   P(T, 26) = P(T, 26) - P1 * 10:   P(C, 24) = P(C, 24 _
) + P7: P(T, 24) = P(T, 24) - P7: P(C, 12) = SGN(SGN(P(C, 12)) + 1) * P(C, 12)
3630  IF TU = 0 THEN LOCATE 9, 1: GOSUB 9600: PRINT P$(C); " Units Destroyed  : "; P2: GOSUB 9175: GOSUB 9600: PRINT "Land Taken over by "; P$(C); "  :   "; P7; " Sq. km": GOSUB 9600: PRINT P$(T); " Civilian Casualties :"; : PRINT USING F2$; P6: _
                                                 LOCATE 13, 17: T1 = T: GOSUB 8300: T = T1: GOTO 3640
3635  PRINT USING "#####  #####  ##,###"; P2; SGN(SGN(P5 - 2) + 1) * (P5 - 2); P7
3637  IF z = 9 THEN z = 1: LOCATE 12, 17: T1 = T: GOSUB 8300: T = T1: LOCATE 4, 17: PRINT CHR$(31); : LOCATE 13, 1:     PRINT STRING$(80, 219);
3638  IF P(T, 24) = 0 THEN GOTO 3651
3640 P(T, 5) = P(T, 5) - (P5 - 2) * (200 - P(T, 28)): IF P(T, 5) < P(T, 12) * (200 - P(T, 28)) THEN P(T, 5) = P(T, 12) * (200 - P(T, 28) + FNRMD!(5))
3650 P(C, 5) = P(C, 5) - P2 * (200 - P(C, 28)): IF P(C, 5) < P(C, 12) * (200 - P(C, 28)) THEN P(C, 5) = P(C, 12) * (200 - P(C, 28) + FNRMD!(5))
3651 NEXT
4000  NEXT CP:   GOSUB 9180:   GOSUB 9010:   CLS : S = "  Year" + STR$(TN) + " Summary.": GOSUB 8200
4010 LOCATE 4, 1:  PRINT "  Country       Land  Population   GNP/c Ind. Conditions (%) Cr Rate   Serv.":    FOR X = 1 TO PN: IF P(X, 0) = 0 THEN PRINT USING "# \       \   ##,### " + F2$ + "##,###  D:### A:### O:### ####.# %  ###.# %"; X; P$(X); P(X _
, 24); P(X, 4) + P(X, 5); P(X, 10); P(X, 18); P(X, 19); P(X, 20); P(X, 26); P(X, 23)
4015  FOR T = 1 TO PN: PA(X, T) = 0: IF P(T, 26) < 0 THEN P(T, 26) = 0
4020  NEXT: PA(0, X) = 0:  NEXT X: LOCATE 12, 17: GOSUB 8700:   GOSUB 9050:   IF T = 1 THEN CLS :  PRINT "":   GOSUB 9160:   PRINT P$(T); " is the WINNER !!!"; : END
4030  GOTO 400
4400 REM Disp. Army
4410 LOCATE 6, 6:  PRINT "   Country       Personnel  Units Eff%  Def.  Tech."; : QZ = 0
4411  FOR T = 1 TO PN
44115 QZ = QZ + 1: IF P(T, 0) = 1 THEN GOTO 4412 ELSE LOCATE (6 + QZ), 6: PRINT USING "## \        \ ###,###,### ##,###  ###  ####   ####"; T; P$(T); P(T, 5); PB(T, 2); PB(T, 1); P(T, 29); P(T, 28);
4412  NEXT: RETURN
4510 P2 = 0: P3 = 0: P4 = 0: CLS : S = "     World Market Loans    (" + z$ + ")": GOSUB 8200: P(C, 2) = VAL(STR$(P(C, 2))): P1 = P(C, 26) ^ 2 * 100000! + 1000
4520 LOCATE 4, 1:  PRINT USING "Your Credit Rating  : #,###.#"; P(C, 26); : LOCATE 5, 1:  PRINT USING "Your Treasury  :  " + F1$; ZA:  IF P(C, 2) > 0 THEN LOCATE 6, 1: PRINT USING "Current Loan  : " + F1$; P(C, 2); : P2 = P(C, 2) * P(C, 3) / H: _
                   LOCATE 7, 1: PRINT USING "Interest      : " + F1$; P2;
4522  IF P(C, 26) > 0 THEN LOCATE 4, 33: PRINT USING "Current Interest Rate  : ###.# %"; P(C, 3); :                      ELSE P(C, 3) = 0: LOCATE 7, 33: PRINT "CREDIT CANCELLED !!!"; : IF ZA > 7E+08 AND P(C, 2) > 0 THEN LOCATE 12, 1: PRINT  _
"The World Market will take Drastic Action unless you Repay !";
4523  IF P(C, 26) > 0 AND P(C, 3) > 0 THEN IF P(C, 26) < 12 THEN LOCATE 12, 17: PRINT "Your Credit Rating is Very Low! The World Market is Not Happy!";
4524 LOCATE 9, 1: IF P(C, 2) > 0 THEN P(C, 2) = P(C, 2) + P2: LOCATE 8, 1: PRINT USING "TOTAL Amount   :   " + F1$; P(C, 2); : LOCATE 9, 1: PRINT "Additional ";
4526  PRINT "Amount of Loan Available  : "; : P3 = P1 - P(C, 2): IF P3 <= 0 THEN PRINT "  NONE."; : P(C, 27) = P(C, 27) + 1:                      ELSE P(C, 27) = 0: PRINT USING F1$; P3; : IF P(C, 2) > 0 THEN 4540 ELSE 4545
4528 P4 = ABS(P3):   P4 = VAL(STR$(P4)): LOCATE 10, 1:    PRINT USING SB + "Amount to Repay  : " + F1$; P4:
4530 P(C, 2) = INT(VAL(STR$(P(C, 2)))): LOCATE 12, 1:    PRINT SA; "to Pay Back ? "; : AZ = AY: S = STR$(FIX(P4)): IL = 11: IT = 3: S1 = F1$: ID = SGN(P4): GOSUB 8500: IF N > P(C, 2) OR N > ZA THEN 4530 ELSE P(C, 2) = P(C, 2) - N: ZA = ZA - N: P5 =  _
P(C, 26): IF N < P4 THEN P5 = P5 - 1: IF N < P2 THEN P5 = P5 - 1
4531  IF P(C, 2) < 10000 THEN P(C, 2) = 0:                      ELSE IF N = 0 AND P4 > 0 THEN P5 = P5 - 2
4532  IF P(C, 2) > P1 THEN P5 = P5 - 2: IF P(C, 2) > 1.5 * P1 THEN P5 = P5 - 2 - (1 - N / ZA) * P(C, 27) - (P(C, 2) / P1) * 3:                      ELSE :  ELSE P6 = N / 5E+08: IF N > P(C, 2) / 3 + P2 THEN P5 = P5 + P6: IF N > P(C, 2) / 2 + P2 THEN  _
P5 = P5 + P6: IF N >= P(C, 2) THEN P5 = P5 + P6
4533  IF P5 <= 0 THEN P5 = 0: IF N < ZA / 3 AND N < P(C, 2) / 5 THEN IF ZA > 1E+08 * (FNRMD!(3) + 7) THEN IF P(C, 27) > FNRMD!(2) THEN P(C, 27) = 0: PA(0, C) = P(C, 30) * 90 + FNRMD!(10) + 30: P(C, 30) = P(C, 30) + 1:  ELSE PA(0, C) = P(C, 30) * 100 _
 + 50 + FNRMD!(5)
4535 P(C, 26) = P5:    RETURN
4540 LOCATE 11, 33:  PRINT "Choose  :   <1> Take More loan, or <2> Pay Back, or <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 15, 1: PRINT ">  :  "; : GOSUB 8910: IF I > 2 THEN 4540
4543  ON I GOTO 4550, 4530:  RETURN
4545 P(C, 26) = P(C, 26) * 1.02 + .5:   LOCATE 11, 33:    PRINT "Would you like to take out a loan  (<Y> or <N>) ?"; : GOSUB 8400: IF I THEN 4550 ELSE RETURN
4550 P3 = VAL(STR$(P3)): LOCATE 11, 1: PRINT USING SA + "to Take (Max. =" + F1$ + "):"; P3; : S = STR$(FIX(P3)): GOSUB 8940: IF N > P3 THEN 4550 ELSE P(C, 2) = P(C, 2) + N: ZA = ZA + N: RETURN
8150 REM PGPRTA10/LIB
8160  CLS : PRINT STRING$(80, 205); : LOCATE 3, 1: PRINT STRING$(80, 205); : LOCATE 2, 25: COLOR 12, 1: PRINT S; : COLOR 15, 1: RETURN
8200 REM PGPRTB10/LIB
8210  CLS : LOCATE 1, 1: PRINT STRING$(80, 205); : LOCATE 2, 50: PRINT STRING$(80, 205); : LOCATE 14, 1:  PRINT STRING$(80, 205); : COLOR 12, 1: LOCATE 1, 69: PRINT S; : COLOR 15, 1: RETURN

8250  CLS : LOCATE 1, 1: PRINT STRING$(80, 205); : LOCATE 2, 50: PRINT STRING$(80, 205); : LOCATE 25, 1:  PRINT STRING$(80, 205); : COLOR 12, 1: LOCATE 1, 69: PRINT S; : COLOR 15, 1: RETURN

8300 REM
8310 PRINT "Please Press <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 15, 1: PRINT "> to Continue.";
8320 S4 = INKEY$: IF S4 <> CHR$(13) THEN IF S4 = "P" OR S4 = "p" THEN S4 = S: GOSUB 9400: S = S4: GOTO 8320:  ELSE PRINT ""; : GOTO 8320
8330 RETURN
8400 REM
8410 X2 = 0
8420 COLOR 31, 1: S2 = INKEY$: IF S2 = "" GOTO 8420 ELSE IF S2 = "Y" OR S2 = "y" THEN COLOR 26, 1: PRINT "Yes"; : COLOR 15, 1: I = 1:  ELSE IF S2 = "N" OR S2 = "n" THEN COLOR 26, 1: PRINT "No "; : COLOR 15, 1: I = 0:  ELSE 8420
8430 S2 = INKEY$: IF S2 = CHR$(13) THEN COLOR 15, 1: RETURN ELSE IF S2 = CHR$(8) THEN PRINT STRING$(3, 29); "   "; STRING$(3, 29); : GOTO 8420:      ELSE 8430
8500 COLOR 10, 1: REM main all purpose get input into "S" routine.
8510 IF IT < 3 THEN PRINT STRING$(IL, 95); STRING$(IL, 29); :  ELSE PRINT STRING$(LEN(S1), 32); STRING$(LEN(S1), 29);
8520 S4 = CHR$(29) + CHR$(95) + CHR$(29): X2 = 0: S2 = S: S = ""
8530 S3 = INKEY$: IF S3 = "" THEN 8530
8540 X3 = ASC(S3): IF X3 > 44 THEN IF (IT) AND (((X3 < 45) OR (X3 > 57)) OR (X3 = 47)) THEN 8530 ELSE IF ((IT = 1 OR IT = 3) AND (X3 < 48)) OR LEN(S) = IL THEN IF X3 = 46 AND LEN(S) < IL - 2 AND IT = 3 THEN S = S + "000": GOTO 8600:  ELSE 8530 ELSE  _
S = S + S3: IF IT = 3 THEN 8600 ELSE PRINT S3; : GOTO 8530
8550 IF IL = LEN(S) THEN PRINT "";
8560 IF X3 = 8 AND LEN(S) > 0 THEN S = LEFT$(S, LEN(S) - 1): IF IT = 3 THEN 8600 ELSE IF IL = LEN(S) + 1 THEN PRINT S4; : GOTO 8530:  ELSE PRINT S4; : GOTO 8530:  ELSE IF X3 = 24 AND LEN(S) > 0 THEN IF IT = 3 THEN S = "": GOTO 8600:  ELSE PRINT S4;  _
: FOR X = 1 TO LEN(S): PRINT S4; : NEXT: S = "": GOTO 8530
8570 IF X3 <> 13 THEN 8530 ELSE IF AZ = 1 THEN GOTO 8595
8580 IF LEN(S) = 0 AND ID THEN S = S2: IF IT < 3 THEN PRINT S; :  ELSE PRINT USING S1; CDBL(VAL(S)); : PRINT STRING$(LEN(S1), 29); : GOTO 8530
8590 N = 0: I = 0: IF IT = 3 THEN X3 = -1: GOTO 8600 ELSE PRINT STRING$(IL - LEN(S) + 1, 32); : IF S <> "" THEN N = VAL(S): N = VAL(STR$(N)): IF N > 32767 OR N < -32768! THEN COLOR 15, 1: RETURN ELSE I = N: COLOR 15, 1: RETURN ELSE COLOR 15, 1: _
           RETURN
8595 AZ = 0: IF LEN(S) > ZA / 2 THEN S4 = CHR$(63): GOTO 8530:   ELSE 8580
8600 IF LEN(S) = 0 THEN PRINT STRING$(LEN(S1) + 1, 32); : LOCATE CSRLIN, (POS(0) - (LEN(S1) + 1)): GOTO 8530:  ELSE PRINT USING S1; CDBL(VAL(S)); : PRINT STRING$(LEN(S1), 29); : IF X3 < 0 THEN N = VAL(S): COLOR 15, 1: RETURN:  ELSE IF LEN(S) > 1 AND _
 RIGHT$(S, 1) = "0" THEN GOTO 8530: ELSE 8530
8700 REM
8705  ON ERROR GOTO 0: LOCATE 15, 1: GOSUB 9600: X0 = 0: PRINT "Press <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 15, 1: PRINT "> to Continue,  OR  <"; : COLOR 31, 1: PRINT "S"; : COLOR 15, 1: PRINT ">ave, <"; : COLOR 31, 1: PRINT "P"; : COLOR 15, 1: _
     PRINT ">rint, or <"; : COLOR 20, 1: PRINT "E"; : COLOR 15, 1: PRINT ">nd.";
8710 S4 = INKEY$: IF S4 = CHR$(13) THEN 8715 ELSE IF S4 <> "" THEN S4 = CHR$(ASC(S4) AND 95):
8711  IF S4 = "S" THEN 8750 ELSE IF S4 = "E" THEN GOSUB 9200: GOTO 8700:  ELSE IF S4 = "P" THEN GOSUB 9350: GOTO 8700
8712  IF X0 > 21 THEN X0 = 0: GOTO 8710:   ELSE 8710
8715  GOSUB 9600: RETURN
8750 REM
8755 LOCATE 15, 1:  GOSUB 9600: PRINT "<"; : COLOR 31, 1: PRINT "D"; : COLOR 15, 1: PRINT ">isk, or <"; : COLOR 31, 1: PRINT "A"; : COLOR 15, 1: PRINT ">bort? "; : ID = 1: S = "D": IL = 1: IT = 0: GOSUB 8500: IF S = "A" OR S = "a" THEN LOCATE 15, 1 _
: GOSUB 9600: GOTO 8700: ELSE IF S <> "d" AND S <> "D" THEN 8755
8760 LOCATE 15, 1:  GOSUB 9600: PRINT "Saving ..."; : ON ERROR GOTO 8775: OPEN "SRGAME.DAT" FOR OUTPUT AS #1: PRINT #1, 123456!:  PRINT #1, TN; TW; TI; PH; PC; PN; TA; TF; TC; TU; TV; TW; TX; TY; TZ: FOR X = 1 TO PN: PRINT #1, P$(X): FOR X0 = 0 TO  _
ZV: PRINT #1, P(X, X0): NEXT X0: NEXT X: CLOSE : ON ERROR GOTO 0
8765 LOCATE 15, 1:  GOSUB 9600: PRINT "Would you like to <"; : COLOR 31, 1: PRINT "C"; : COLOR 15, 1: PRINT ">ontinue, or <"; : COLOR 28, 1: PRINT "E"; : COLOR 15, 1: PRINT ">nd ? "; : ID = 1: S = "C": IL = 1: IT = 0: GOSUB 8500: IF S = "C" OR S =  _
"c" THEN RETURN: ELSE IF S <> "E" AND S <> "e" THEN 8765 ELSE GOSUB 9200
8770  ON ERROR GOTO 0: END:     RETURN
8775 LOCATE 16, 1: COLOR 4, 1: PRINT CHR$(7); "Disk Error. Save not completed."; : SLEEP 5: LOCATE 16, 1: GOSUB 9600: CLOSE : COLOR 15, 1: RESUME 8700
8790  GOTO 8765
8800 REM
8805 LOCATE 4, 1:  GOSUB 9600: : LOCATE 3, 1: GOSUB 9600: PRINT "Load from <"; : COLOR 31, 1: PRINT "D"; : COLOR 15, 1: PRINT ">isk, or <"; : COLOR 31, 1: PRINT "A"; : COLOR 15, 1: PRINT ">bort ? "; : ID = 1: S = "D": IL = 1: IT = 0: GOSUB 8500: S  _
= CHR$(ASC(S) AND 95): IF S = "A" THEN RUN
8810  IF S <> "D" THEN 8805 ELSE LOCATE 3, 1: GOSUB 9600: PRINT "Loading ...":  ON ERROR GOTO 8890: OPEN "SRGAME.DAT" FOR INPUT AS #1: INPUT #1, N: IF N <> 123456! THEN ERROR 99 ELSE INPUT #1, TN, TW, TI, PH, PC, PN, TA, TF, TC, TU, TV, TW, TX, TY,  _
TZ
8811  FOR X = 1 TO PN: INPUT #1, P$(X)
8815  FOR X0 = 0 TO ZV: INPUT #1, P(X, X0): NEXT X0:    NEXT X:     CLOSE : ON ERROR GOTO 0: RETURN
8870  ON ERROR GOTO 0: RETURN
8890  IF ERR = 106 THEN LOCATE 3, 1: GOSUB 9600: PRINT "Can't find Save-Game file.":  ELSE LOCATE 3, 1: GOSUB 9600: PRINT "An ERROR has occurred while attempting to Restore the Game..."
8893  PRINT "Press <"; : COLOR 30, 1: PRINT "Enter"; : COLOR 15, 1: PRINT "> to try again, or <"; : COLOR 20, 1: PRINT "A"; : COLOR 15, 1: PRINT "> to Abort & Restart Program.": GOSUB 9210: IF S = CHR$(13) THEN RESUME 8800 ELSE RUN
8900 ID = 0:   IL = 1:   IT = 1:    GOTO 8500
8910 ID = 1:   S = "0":   IL = 1:   IT = 1:    GOTO 8500
8920 ID = 0:   IL = 8:   IT = 3:   S1 = F2$:    GOTO 8500
8930 ID = 1:   IL = 8:   IT = 3:   S1 = F2$:    GOTO 8500
8935 ID = 1:   IL = 8:   IT = 0:   S1 = F2$:    GOTO 8500
8940 ID = 1:   IL = 11:   IT = 3:   S1 = F3$:    GOTO 8500
8950 ID = 0:   IL = 11:   IT = 3:   S1 = F3$:    GOTO 8500
8960 ID = 1: IL = 11: IT = 0: S1 = F3$: GOTO 8500
9000  FOR X = 1 TO PN: PO(X) = X: NEXT:
9001  FOR X = 1 TO PN * 2: X1 = FNRMD!(PN): X2 = FNRMD!(PN): X3 = PO(X1): PO(X1) = PO(X2): PO(X2) = X3
9002  NEXT: RETURN
9010 N = 0: CLS :   FOR X = 1 TO PN:
9011 IF P(X, 0) = 1 THEN 9040 ELSE IF P(X, 4) > 100000! AND P(X, 24) > 500 THEN 9040 ELSE PRINT P$(X); " Has Been Destroyed !! The few remaining civilians have fled !!": PRINT "Any remaining land has been taken by the other Countries."
9020 P(X, 0) = 1: P(X, 7) = 0: GOSUB 9050: IF T = 0 THEN PRINT "But ... ALL COUNTRIES HAVE BEEN DESTROYED !!! The World Market has moved in to take over.": END
9021 P = INT(P(X, 24) / T): FOR X1 = 1 TO PN
9022 IF P(X1, 0) = 0 THEN P(X1, 24) = P(X1, 24) + P: X2 = X1
9030 NEXT: IF T = 1 THEN PRINT P$(X2): PRINT "Is The Winner !!! All Other Countries Have Been Taken Over !!! Congratulations!!": END: GOSUB 8300:  ELSE GOSUB 8300
9040  IF (N = 0 AND P(X, 0) = 2) THEN PRINT : PRINT P$(X); " Has SURRENDERED !!": PRINT "     Its remaining land will be divided up.":  GOTO 9020
9041  NEXT X: RETURN
9050 T = 0: FOR X1 = 1 TO PN: IF P(X1, 0) = 0 THEN T = T + 1
9060  NEXT:     RETURN
9070 N = 1:   X = C:    GOTO 9020
9080 P1 = (220 * P(C, 24) * (P(C, 19) / H) ^ 2) * ((TW + 15) / H): RETURN
9090 P1 = (z) * 500:    RETURN
9100 P1 = ZD * 1500:   P2 = ZF * 500000!:    RETURN
9110 ZA = ZA - N: ZE = (ZE + (N + G) / (P + G) * 80) / 2: IF ZE > H THEN ZE = SQR(ZE / H) * H: IF ZE > 120 THEN ZE = SQR(ZE / H) * H + 10: RETURN:  ELSE RETURN:  ELSE RETURN
9120 ZQ = (ZQ + SQR(N / P1) * H) / 2:   ZA = ZA - N:    RETURN
9130 P(C, 22) = N: ZD = ZD + N: P = INT(P(C, 9) / 2000000!): N = INT(ZD / (200 - P(C, 28)) - ZF): IF P > N THEN P = N
9140 ZE = INT((P * 80 + ZF * ZE) / (P + ZF + 1)):     ZF = INT(ZF + P + .5):     P(C, 9) = P(C, 9) - P * 2000000!:    RETURN
9150 ZA = ZA - N: P(C, 13) = P(C, 13) + N / 10: IF T = 1 THEN P(C, 18) = P(C, 18) + N / (ZF * 100000! + ZD * H + 1000000!) * 5: RETURN:  ELSE P(C, 17 + T) = P(C, 17 + T) + N / z * .2: RETURN
9160  FOR X = 1 TO PN: IF P(X, 0) = 0 THEN T = X
9170  NEXT:     RETURN
9175 N = SGN(SGN(P5 - 2) + 1) * (P5 - 2): IF N > 0 THEN GOSUB 9600: PRINT P$(T); " Units Destroyed  : "; N: RETURN:  ELSE RETURN
9180  IF z = 0 THEN LOCATE 4, 17: PRINT "No Battles.": LOCATE 12, 36: GOSUB 8300:  RETURN:  ELSE IF TU = 1 THEN LOCATE 12, 17: GOSUB 8300: RETURN:  ELSE RETURN
9190 ZA = VAL(STR$(ZA)): IF ZA < 0 THEN ZA = 0: RETURN:  ELSE RETURN
9195 N = VAL(STR$(N)): RETURN
9197 P = INT(VAL(STR$(P))): RETURN
9200 LOCATE 15, 1: GOSUB 9600: PRINT "Are you SURE that you want to End this game ? "; : GOSUB 8400:   IF I = 0 THEN RETURN ELSE END
9210 S = INKEY$: IF S = CHR$(13) OR S = "A" OR S = "a" THEN RETURN ELSE 9210
9220  FOR X = 1 TO 200: NEXT:    RETURN
9250 P(C, 28) = (P(C, 28) * (P(C, 28) / H * 7E+07) + P1) / (P(C, 28) / H * 7E+07): IF P(C, 28) > 190 THEN P(C, 28) = 190
9252 P(C, 29) = (P(C, 29) * (P(C, 29) / H * 5E+07) + P2) / (P(C, 29) / H * 5E+07):   RETURN
9350 REM
9351 DEF SEG = &H40: statusport& = PEEK(9) * 256 + PEEK(8) + 1
9352  IF INP(statusport&) <> 223 THEN LOCATE 15, 1: GOSUB 9600: COLOR 20, 1: PRINT "   >PRINTER NOT READY<"; : COLOR 15, 1: SLEEP 3: LOCATE 15, 1: GOSUB 9600: RETURN
9355 LOCATE 15, 17:  GOSUB 9600: PRINT " Press <"; : COLOR 20, 1: PRINT "A"; : COLOR 15, 1: PRINT "> to Abort."; : LPRINT "--- END OF YEAR "; TN: LPRINT " ": LPRINT "  Country     Land   Population  GNP/c  Ind. Conditions  (%)  Cr Rate   Serv.": _
                 LPRINT STRING$(79, "-")
9360  FOR X = 1 TO PN: IF P(X, 0) = 0 THEN LPRINT USING "# \       \ ##,### " + F2$ + "##,###  D: ### A: ### O: ### ####.# %  ###.# %"; X; P$(X); P(X, 24); P(X, 4) + P(X, 5); P(X, 10); P(X, 18); P(X, 19); P(X, 20); P(X, 26); P(X, 23)
9370 S = INKEY$: IF S = "A" OR S = "a" THEN X = PN
9371 NEXT: RETURN
9400 REM
9410 FOR X3 = 1 TO 5: LOCATE 13, 10: PRINT "   >  PRINTER NOT  READ Y <" + STRING$(16, " "); : FOR X4 = 1 TO 500: NEXT: LOCATE 13, 10: PRINT STRING$(40, " "); : NEXT: LOCATE 13, 1: PRINT S; : RETURN
9425 LPRINT "      "; STRING$(80, "="): PRINT "      "; S3; S; S3: S1 = INKEY$: IF S1 <> "" THEN GOSUB 9435 ELSE LPRINT "      "; S3; STRING$(62, "-"); S3
9430 RETURN
9435  IF S1 = "A" OR S1 = "a" THEN X3 = 14: RETURN:  ELSE RETURN
9450 S = S: IF MID$(S, 24, 1) > CHR$(127) THEN S = RIGHT$(S, 23) + "!" + MID$(S, ASC(S) - 24): RETURN:  ELSE RETURN
9500 LOCATE 1, 6: PRINT "  CUSTOMIZE  ";
9510 LOCATE 4, 1: GOSUB 9600: LOCATE 3, 1: GOSUB 9600: PRINT "Would you like Struggling Countries to be given": PRINT "Financial Assistance (Subsidies) by the World Market ? "; : GOSUB 8400:   TA = I
9515 LOCATE 4, 1: GOSUB 9600: LOCATE 3, 1: GOSUB 9600: PRINT "Would you like to have a Single Page Battle Report ? "; : GOSUB 8400:   TU = I
9520 LOCATE 4, 1: GOSUB 9600: LOCATE 3, 1: GOSUB 9600: PRINT "Would you like to Engage the >Double Check< Feature ? "; : GOSUB 8400:   AY = I
9595 LOCATE 4, 1: GOSUB 9600: LOCATE 3, 1: GOSUB 9600: PRINT : LOCATE 1, 2: PRINT STRING$(32, "*"); : RETURN
9600 cursorx = POS(0): cursory = CSRLIN: PRINT SPC(80 - cursorx); : LOCATE cursory, cursorx: RETURN
9700 cursorx = POS(0): cursory = CSRLIN: LOCATE 14, 40: PRINT STRING$(40, 205); : LOCATE cursory, cursorx: RETURN

NORESET:
txt$ = "               ...............I'm Sorry Dave, I can't allow you to do this right now.  Exit properly...............               "
GOSUB INFORM
RETURN

INFORM:
FOR length = 1 TO LEN(txt$)
LOCATE 20, 32: PRINT MID$(txt$, length, 15);
FOR xx = 1 TO 16000: NEXT: NEXT: RETURN



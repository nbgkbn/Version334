var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED =  "NV=\"7701003\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_APPLICABLE ="NV=\"7701001\" xsi:nil=\"true\"/>" ;
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var eSituation = new Object;
var E05 = new Object;

var _retArray = [];


_retArray.push = "<eSituation>";
var seteSituation = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
    }


    if(typeof businessObject["eSituation"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["eSituation"].length);
       
         
        _val = getValue(businessObject.elements, "eSituation.01");
        if (_val == null)
        {
            _retArray.push("<eSituation.01" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.01"] = v3NOT_RECORDED;
            E05.E5_01 = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.01"] = _val[0];
            E05.E5_01 =  _val;
            _retArray.push("<eSituation.01>" + _val[0] + "</eSituation.01>");
        }; 

    
        _val = getValue(businessObject.elements, "eSituation.02");
        if (_val == null)
        {
            if(isRequiredStateElement("eSituation.02"))
            {
                _retArray.push("<eSituation.02" + NIL_V3NOT_RECORDED );
                eSituation["dSituation.02"] = v3NOT_RECORDED;
                E09.E9_04 = v2NOT_RECORDED;
            }            
        }
        else 
        {
            eSituation["dSituation.02"] = _val[0];
            E09.E9_04  =  _val[0];
            _retArray.push("<eSituation.02>" + _val[0] + "</eSituation.02>");
        }; 


        _val = getValue(businessObject.elements, "eSituation.07");
        if (_val == null)
        {
            _retArray.push("<eSituation.07" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.07"] = v3NOT_RECORDED;
            E09.E09_11 = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.07"] = _val[0];
            E09.E09_11 =  _val[0];
            _retArray.push("<eSituation.07>" + _val[0] + "</eSituation.07>");
        }; 
                
        _val = getValue(businessObject.elements, "eSituation.08");
        if (_val == null)
        {
            _retArray.push("<eSituation.08" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.08"] = v3NOT_RECORDED;
            E09.E09_12 = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.08"] = _val[0];
            E09.E09_12 =  _val[0];
            _retArray.push("<eSituation.08>" + _val[0] + "</eSituation.08>");
        }; 


        _val = getValue(businessObject.elements, "eSituation.09");
        if (_val == null)
        {
            _retArray.push("<eSituation.09" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.09"] = v3NOT_RECORDED;
            E09.E09_13  = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.09"] = _val[0];
            E09.E09_13  =  _val[0];
            _retArray.push("<eSituation.09>" + _val[0] + "</eSituation.09>");
        }; 

        _val = getValue(businessObject.elements, "eSituation.10");
        if (_val == null)
        {
            _retArray.push("<eSituation.10" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.10"] = v3NOT_RECORDED;
            E09.E09_14  = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.10"] = _val[0];
            E09.E09_14  =  _val[0];
            _retArray.push("<eSituation.10>" + _val[0] + "</eSituation.10>");
        }; 

        _val = getValue(businessObject.elements, "eSituation.11");
        if (_val == null)
        {
            _retArray.push("<eSituation.11" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.11"] = v3NOT_RECORDED;
            E09.E09_15 = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.11"] = _val[0];
            E09.E09_15 =  _val[0];
            _retArray.push("<eSituation.11>" + _val[0] + "</eSituation.11>");
        }; 



        _val = getValue(businessObject.elements, "eSituation.12");
        if (_val == null)
        {
            _retArray.push("<eSituation.12" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.12"] = v3NOT_RECORDED;                    
            E09.E09_16 =  v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.12"] = _val[0];  
            E09.E09_16 = _val[0];
            _retArray.push("<eSituation.12>" + _val[0] + "</eSituation.12>");
        }; 


        _val = getValue(businessObject.elements, "dSituation.13");
        if (_val == null)
        {                   
            _retArray.push("<eSituation.13" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.13"] = v3NOT_RECORDED;                    
        }
        else 
        {            
            eSituation["dSituation.13"] = _val[0];                    
            _retArray.push("<eSituation.13>" + _val[0] + "</eSituation.13>");
        }; 
        _retArray.push("<WorkRelatedGroup>");

        _val = getValue(businessObject.elements, "eSituation.14");
        if (_val == null)
        {
            if(isRequiredStateElement("eSituation.14"))
            {
                if(isRequiredStateElement("eSituation.14"))
                {
                    _retArray.push("<eSituation.14" + NIL_V3NOT_RECORDED );
                    eSituation["dSituation.14"] = v3NOT_REPORTING;
                    E07.E07_15 = v2NOT_REPORTING;
                }            
                else
                {
                    _retArray.push("<eSituation.14" + NIL_V3NOT_REPORTING );
                    eSituation["dSituation.14"] = v3NOT_RECORDED;
                    E07.E07_15 = v2NOT_RECORDED;
                }
            }
            else 
            {
                eSituation["dSituation.14"] = _val[0];
                E07.E07_15 =  _val[0];
                _retArray.push("<eSituation.14>" + _val[0] + "</eSituation.14>");
            }; 
      
            

            _val = getValue(businessObject.elements, "eSituation.15");
            if (_val == null)
            {
            }
            else 
            {
                eSituation["dSituation.15"] = _val[0];
                E07.E07_16 =  _val[0];
                _retArray.push("<eSituation.15>" + _val[0] + "</eSituation.15>");
            }; 

            _val = getValue(businessObject.elements, "eSituation.16");
            if (_val == null)
            {
            }
            else 
            {
                E07.E07_17 =  _val[0];
                eSituation["dSituation.16"] = _val[0];
                _retArray.push("<eSituation.16>" + _val[0] + "</eSituation.16");
            }; 
            _retArray.push("</WorkRelatedGroup>");
            _val = getValue(businessObject.elements, "eSituation.17");
            if (_val == null)
            {
                if(isRequiredStateElement("eSituation.17"))
                {
                    if(isRequiredStateElement("eSituation.17"))
                    {
                        _retArray.push("<eSituation.17" + NIL_V3NOT_RECORDED );
                        eSituation["dSituation.17"] = v3NOT_REPORTING;
                    }            
                    else
                    {
                        _retArray.push("<eSituation.17" + NIL_V3NOT_REPORTING );
                        eSituation["dSituation.17"] = v3NOT_RECORDED;
                    }
                }
                else 
                {
                    eSituation["dSituation.17"] = _val[0];
                    _retArray.push("<eSituation.17>" + _val[0] + "</eSituation.17>");
                }; 
            };
            _retArray.push("</eSituation>");
        };    //end of function   


        var setComplaintGroup = function(groupObject)
        {
            var _retVal = [];
            _retArray.push("<PatientComplaintGroup>");
            FOR LOOP
            _val = getValue(businessObject.elements, "eSituation.03");
            if (_val == null)
            {
                if(isRequiredStateElement("eSituation.03"))
                {
                    if(isRequiredStateElement("eSituation.03"))
                    {
                        _retArray.push("<eSituation.03" + NIL_V3NOT_RECORDED );
                        eSituation["dSituation.03"] = v3NOT_REPORTING;
                    }            
                    else
                    {
                        _retArray.push("<eSituation.03" + NIL_V3NOT_REPORTING );
                        eSituation["dSituation.03"] = v3NOT_RECORDED;
                    }
                }
                else 
                {
                    eSituation["dSituation.03"] = _val[0];
                    _retArray.push("<eSituation.03>" + _val[0] + "</eSituation.17>");
                }; 


                _val = getValue(businessObject.elements, "eSituation.04");
                if (_val == null)
                {
                    if(isRequiredStateElement("eSituation.04"))
                    {
                        if(isRequiredStateElement("eSituation.04"))
                        {
                            _retArray.push("<eSituation.04" + NIL_V3NOT_RECORDED );
                            eSituation["dSituation.04"] = V3NOT_RECORDED;
                            E09.E09_05 =  V2NOT_RECORDED;
                        }            
                        else
                        {
                            _retArray.push("<eSituation.04" + NIL_V3NOT_REPORTING );
                            eSituation["dSituation.04"] = v3NOT_REPORTING;
                            E09.E09_05 =  v2NOT_REPORTING;
                        }
                    }
                    else 
                    {
                        eSituation["dSituation.04"] = _val[0];
                        _retArray.push("<eSituation.04>" + _val[0] + "</eSituation.04>");
                    }; 

                    _val = getValue(businessObject.elements, "eSituation.05");
                    if (_val == null)
                    {
                        if(isRequiredStateElement("eSituation.05"))
                        {
                            _retArray.push("<eSituation.05" + NIL_V3NOT_RECORDED );
                            eSituation["dSituation.05"] = V3NOT_RECORDED;
                            E09.E09_06 =  V2NOT_RECORDED;
                        }            
                        else
                        {
                            _retArray.push("<eSituation.05" + NIL_V3NOT_REPORTING );
                            eSituation["dSituation.05"] = v3NOT_REPORTING;
                            E09.E09_06 =  v2NOT_REPORTING;
                        }
                    }
                    else 
                    {
                        eSituation["dSituation.05"] = _val[0];
                        _retArray.push("<eSituation.05>" + _val[0] + "</eSituation.05>");
                    }; 

                    _val = getValue(businessObject.elements, "eSituation.06");
                    if (_val == null)
                    {
                        if(isRequiredStateElement("eSituation.06"))
                        {
                            _retArray.push("<eSituation.06" + NIL_V3NOT_RECORDED );
                            eSituation["dSituation.06"] = V3NOT_RECORDED;
                            E09.E09_07 =  V2NOT_RECORDED;
                        }            
                        else
                        {
                            _retArray.push("<eSituation.06" + NIL_V3NOT_REPORTING );
                            eSituation["dSituation.06"] = v3NOT_REPORTING;
                            E09.E09_07 =  v2NOT_REPORTING;
                        }
                    }
                    else 
                    {
                        eSituation["dSituation.06"] = _val[0];
                        _retArray.push("<eSituation.06>" + _val[0] + "</eSituation.06>");
                    }; 
                } //END LOOP
                _retArray.push("<PatientComplaintGroup>");
            };

            var isRequiredStateElement = function (elementID) {
                return true;
            };
            var getValue = function (payload, valueObject) {


                var _retValue = null;
                var _bFound = false;
                i = 0;
                while (i < payload.length) {
                    if (_bFound == false) {
                        _retVal = null;
                        if (payload[i].name == valueObject) {
                            _bFound = true;
                            if (payload[i].values == undefined) {

                                _retVal = null;
                            }
                            else {
                                _retVal = payload[i].values;
                            }
                        }
                    }
                    i++;
                }
                return _retVal;
            };

            function setD2(NEMSISElementNumber, valueArray) {
                //    console.log(NEMSISElementNumber);
                var _retArray = [];
                //    console.log(valueArray);
                switch (NEMSISElementNumber) {
                    case "dAgency.09":

                        if (dAgency09CodeMap[valueArray[0]] == undefined) {
                            _retArray.push(valueArray[0] + "UNDEFINED");
                        }
                        else {
                            _retArray.push(dAgency09CodeMap[valueArray[0]]);
                        }
                        break;
                    case "dAgency.10":
                        for (i = 0; i < valueArray.length; i++) {
                            if (dAgency10CodeMap[valueArray[i]] == undefined) {
                                _retArray.push(valueArray[i] + "UNDEFINED");
                            }
                            else {
                                _retArray.push(dAgency09CodeMap[valueArray[i]]);
                            }
                        }
                        break;
                    case "dAgency.11":

                        if (dAgency11CodeMap[valueArray[0]] == undefined) {
                            _retArray.push(valueArray[0] + "UNDEFINED");
                        }
                        else {
                            _retArray.push(dAgency11CodeMap[valueArray[0]]);
                        }
                        break;
                    default:
                        _retArray.push(NEMSISElementNumber = " version 2 not found");
                }

                return _retArray;

            };


            function SetNotApplicable() 
            {
                eSituation["eSituation.01"] = V3NOT_APPLICABLE
                E05.E05_01 = NULL;
                _retArray.push("<eSituation.01" + NIL_V3NOT_APPLICABLE );

                eSituation["eSituation.02"] = V3NOT_APPLICABLE
                E09.E09_04 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.02" + NIL_V3NOT_APPLICABLE );

                PatientComplaintGroup["eSituation.03"] = V3NOT_APPLICABLE
                _retArray.push("<eSituation.03" + NIL_V3NOT_APPLICABLE );

                PatientComplaintGroup["eSituation.04"] = V3NOT_APPLICABLE
                E09.E09_05 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.04" + NIL_V3NOT_APPLICABLE );
    
                PatientComplaintGroup["eSituation.05"] = V3NOT_APPLICABLE
                E09.E09_06 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.05" + NIL_V3NOT_APPLICABLE );

                PatientComplaintGroup["eSituation.06"] = V3NOT_APPLICABLE
                E09.E09_07 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.06" + NIL_V3NOT_APPLICABLE );

                eSituation["eSituation.07"] = V3NOT_APPLICABLE
                E09.E09_11 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.07" + NIL_V3NOT_APPLICABLE );

                eSituation["eSituation.08"] = V3NOT_APPLICABLE
                E09.E09_12 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.08" + NIL_V3NOT_APPLICABLE );

                eSituation["eSituation.09"] = V3NOT_APPLICABLE
                E09.E09_13 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.09" + NIL_V3NOT_APPLICABLE );

                eSituation["eSituation.10"] = V3NOT_APPLICABLE
                E09.E09_14 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.10" + NIL_V3NOT_APPLICABLE );
    
                eSituation["eSituation.11"] = V3NOT_APPLICABLE
                E09.E09_15 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.11" + NIL_V3NOT_APPLICABLE );
    
                eSituation["eSituation.12"] = V3NOT_APPLICABLE
                E09.E09_16 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.12" + NIL_V3NOT_APPLICABLE );
    
                eSituation["eSituation.13"] = V3NOT_APPLICABLE
                _retArray.push("<eSituation.13" + NIL_V3NOT_APPLICABLE );

                WorkRelatedGroup["eSituation.14"] = V3NOT_APPLICABLE
                E09.E09_15 = v2NOT_APPLICABLE;
                _retArray.push("<eSituation.14" + NIL_V3NOT_APPLICABLE );

                eSituation["eSituation.17"] = V3NOT_APPLICABLE
                _retArray.push("<eSituation.17" + NIL_V3NOT_APPLICABLE );
    
            }
        };
        var eSituation06 = {
            2806001	1235
2806003	1240
2806005	1245
2806007	1250
2806009	1255
2806011	1260
2806013	1265
    }

    var SecondaryComplaintTimeUnits = {
        2806001	1270
2806003	1275
2806005	1280
2806007	1285
2806009	1290
2806011	1295
2806013	1300
}

var eSituation07 = {2807001	1305
2807003	1310
2807005	1315
2807007	1320
2807009	1325
2807011	1330
2807013	1335
2807015	1340
2807017	1345};

var eSituation08 = {
    2808003	1350
2808005	1355
2808007	1360
2808009	1365
2808011	1370
2808015	1375
2808017	1380
2808001	1385
2808019	1390
2808021	1395
	1400};

var eSituation09 = {
    "R58, N92.6
N93.9, O47
R00.2
R04.0
R04.2, R58
R60.0
R60.9
R61"	1405
"R05, R06.00, R06.01, R06.02, R06.1, R06.2, R06.3, R06.4
R06.6, R06.7, R06.81, R06.83, R07.0, R07.1, R09.2
R09.81"	1410
"R19.30, R55
R56.0
R56.9
R57.0
R57.1"	1415
"R09.01, R13.0
R13.10"	1420
1425
1430
R19.7	1435
"R30.0
R31
R32
R33.9
R35.8"	1440
R50.9	1445
"H53.14, R47.01
R47.02
R47.81
R49.0, R53.1
R53.81
R53.83"	1450
1455
"R40.1
R40.20
R41.0
R41.3
R41.82
R41.840
R42
R44.0
R44.1
R45.0
R45.1
R45.3
R45.4
R45.6
R45.7
R45.81
R45.82
R45.83
R45.850
R45.851
R46.2
R46.3
R46.4"	1460
"H53.14, K92.0, R11.0
R11.10
R11.12, R14.0
R14.2
R14.3
R15, R63.0
R63.1
R63.3
R63.4
R63.5
R64, R68.2"	1465
1470
"G44.53, H54.7, H57.10, H91.90, H92.09, J02
K08.8, K59.00, N48.3, N92.6, R07.82, R07.89
R07.9, R09.2, R09.81, R10.0, R10.1, R10.13, R10.2
R10.3, R10.33, R10.81, R10.82
R10.83
R10.84, R12, R51
R52, R68.84"	1475
1480
"L29.9
L50, R20.0
R20.1
R20.2
R21, R23.0
R23.1
R23.2
R23.8"	1485
R22	1490
E66.3, G40.3, G47.00	1495
"G81, G81.9, G83.10, R25.1
R25.2
R25.3
R25.8
R26.0
R26.2
R26.89
R27.0
R29.0
R29.6
R29.810, R40.0"	1500
1505}
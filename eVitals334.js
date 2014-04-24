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
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var eVitals = new Object;
var D01 = new Object;

var _retArray = [];
var V2XMLArray = [];

_retArray.push = "<eVitals>";
var seteVitals = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        //SetNotApplicable();
    }

_retArray.push("<dVitals.VitalsGroup>");

    if(typeof businessObject["dVitals.VitalsGroup"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["dVitals.VitalsGroup"].length);
        
        for (var xx = 0; xx < businessObject["dVitals.VitalsGroup"].length; xx++) 
        {
            console.log(businessObject["dVitals.VitalsGroup"][xx]);
            _val = getValue(businessObject.elements, "dVitals.01");
            if (_val == null)
            {
                VitalsGroup["dVitals.01"] = v3NOT_RECORDED;
                E14.E14_01 = v2NOT_RECORDED
                _retArray.push("<eVitals.01" + NIL_V3NOT_RECORDED);
            }         
            else 
            {
                _retArray.push("<eVitals.01>" + val[0] + "</eVitals.01>");
                dVitalsVitalsGroup["dVitals.01"] = _val[0];
                E14.E14_01 = _val[0];
            };

            _val = getValue(businessObject.elements, "dVitals.02");
            if (_val == null)
            {
                VitalsGroup["dVitals.02"] = v3NOT_RECORDED;
                E14.E14_02 = _val[0];
                _retArray.push("<eVitals.02" + NIL_V3NOT_RECORDED );
            }
            else 
            {
                VitalsGroup["dVitals.02"] = _val[0];
                E14.E14_02 = D2Val("dVitals.02", _val[0]);
                _retArray.push("<eVitals.02>" + val[0] + "</eVitals.02>");
            };

_retArray.push("<dVitals.CardiacRhythmGroup>");

            _val = getValue(businessObject.elements, "dVitals.03");
            if (_val == null)
            {
                if(isRequiredStateElement("eVitals.03"))
                {
                    if(_val[0] == 8801019)
                    {
                        _retArray.push("<eVitals.03" + PN_REFUSED_IS_NILLABLE);

                    }
                    else if(_val[0] == 8801023)
                    {
                        _retArray.push("<eVitals.03" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                    }
                    else{
                        _retArray.push("<eVitals.03" + NIL_V3NOT_RECORDED );
                        VitalsGroup["dVitals.03"] = v3NOT_RECORDED;
                        E14.E14_03 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                    VitalsGroup["dVitals.03"] = _val;
                    E14.E14_13 = D2Val("dVitals.03", _val);
                    _retArray.push("<eVitals.03>" + val + "</eVitals.03>");
                }; 

                _val = getValue(businessObject.elements, "dVitals.04");
                if (_val == null)
                {
                    _retArray.push("<eVitals.04" + NIL_V3NOT_RECORDED );
                    VitalsGroup["dVitals.04"] = v3NOT_RECORDED;                    
               }
               else 
               {
                    VitalsGroup["dVitals.04"] = _val;                    
                    _retArray.push("<eVitals.04>" + val + "</eVitals.04>");
               }; 

                _val = getValue(businessObject.elements, "dVitals.05");
                if (_val == null)
                {
                    _retArray.push("<eVitals.05" + NIL_V3NOT_RECORDED );
                    VitalsGroup["dVitals.05"] = v3NOT_RECORDED;
                }
                else 
                {
                    VitalsGroup["dVitals.05"] = _val;
                    _retArray.push("<eVitals.05>" + val + "</eVitals.05>");
                };            
_retArray.push("</dVitals.CardiacRhythmGroup>");          
_retArray.push("<dVitals.BloodPressureGroup>");

                _val = getValue(businessObject.elements, "dVitals.06");
                if (_val == null)
                {
                    if(_val[0] == 8801019)
                    {
                        _retArray.push("<eVitals.06" + PN_REFUSED_IS_NILLABLE);

                    }
                    else if(_val[0] == 8801023)
                    {
                        _retArray.push("<eVitals.06" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                    }
                    else if(_val[0] == 8801005)
                    {
                        _retArray.push("<eVitals.06" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                    }                         
                    else
                    {
                        _retArray.push("<eVitals.06" + NIL_V3NOT_RECORDED );
                        VitalsGroup["dVitals.06"] = v3NOT_RECORDED;
                        E14.E14_04 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                    VitalsGroup["dVitals.06"] = _val[0];
                    E14.E14_04 = D2Val("dVitals.06", _val[0]);
                    _retArray.push("<eVitals.06>" + val[0] + "</eVitals.06>");
                }; 

                _val = getValue(businessObject.elements, "dVitals.07");
                if (_val == null)
                {
                    if(isRequiredStateElement("eVitals.07"))
                    {
                        if(_val[0] == 8801019)
                        {
                            _retArray.push("<eVitals.07" + PN_REFUSED_IS_NILLABLE);
                        }
                        else if(_val[0] == 8801023)
                        {
                            _retArray.push("<eVitals.07" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                        }
                        else if(_val[0] == 8801005)
                        {
                            _retArray.push("<eVitals.07" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                        }            
                        else
                        {
                            _retArray.push("<eVitals.07" + NIL_V3NOT_RECORDED );
                            VitalsGroup["dVitals.07"] = v3NOT_RECORDED;
                            E14.E14_05 = v2NOT_RECORDED;
                        }            
                    }
                    else 
                    {   
                        _retArray.push("<eVitals.07" + NIL_V3NOT_REPORTING );
                        VitalsGroup["dVitals.07"] = v3NOT_REPORTING;
                        E14.E14_05 = v2NOT_REPORTING;}
                    }
                else
                {
                    VitalsGroup["dVitals.07"] = _val;
                    E14.E14_05 = D2Val("dVitals.07", _val);
                    _retArray.push("<eVitals.07>" + val + "</eVitals.07>");
                };
                
                _val = getValue(businessObject.elements, "dVitals.08");
                if (_val == null)
                {
                    _retArray.push("<eVitals.08" + NIL_V3NOT_RECORDED );
                    VitalsGroup["dVitals.08"] = v3NOT_RECORDED;
                    E14.E14_06 = v2NOT_RECORDED;                              
                }
                else 
                {
                    VitalsGroup["dVitals.08"] = _val;
                    E14.E14_04 = D2Val("dVitals.08", _val);
                    _retArray.push("<eVitals.08>" + val + "</eVitals.08>");
                }; 

                _val = getValue(businessObject.elements, "dVitals.09");
                if (_val == null)
                {            
                }                
                }
                else 
                {
                    VitalsGroup["dVitals.09"] = _val[0];
                    _retArray.push("<eVitals.09>" + val[0] + "</eVitals.09>");
                };
_retArray.push("</dVitals.BloodPressureGroup>");
_retArray.push("<dVitals.HeartRateGroup>");

            _val = getValue(businessObject.elements, "dVitals.10");
            if (_val == null)
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eVitals.10" + PN_REFUSED_IS_NILLABLE);

                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eVitals.10" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                }
                else if(_val[0] == 8801005)
                {
                    _retArray.push("<eVitals.10" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }                         
                else
                {
                    _retArray.push("<eVitals.10" + NIL_V3NOT_RECORDED );
                    VitalsGroup["dVitals.10"] = v3NOT_RECORDED;
                    E14.E14_04 = v2NOT_RECORDED;
                }            
            }
            else 
            {
                VitalsGroup["dVitals.10"] = _val[0];
                E14.E14_04 = D2Val("dVitals.10", _val[0]);
                _retArray.push("<eVitals.10>" + val[0] + "</eVitals.10>");
            }; 
            _val = getValue(businessObject.elements, "dVitals.11");
            if (_val == null)
            {            
            }                
            else 
            {
                VitalsGroup["dVitals.11"] = _val[0];
                _retArray.push("<eVitals.11>" + val[0] + "</eVitals.11>");
            };

_retArray.push("</dVitals.HeartRateGroup>");
_retArray.push("<dVitals.GlasgowScoreGroup>");
            
            _val = getValue(businessObject.elements, "dVitals.19");
            if (_val == null)
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eVitals.19" + PN_REFUSED_IS_NILLABLE);

                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eVitals.19" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                }
                else
                {
                    _retArray.push("<eVitals.19" + NIL_V3NOT_RECORDED );
                    VitalsGroup["dVitals.19"] = v3NOT_RECORDED;
                    E14.E14_15 = v2NOT_RECORDED;
                }            
            }
            else 
            {
                VitalsGroup["dVitals.19"] = _val[0];
                E14.E14_15 = D2Val("dVitals.19", _val[0]);
                _retArray.push("<eVitals.19>" + val[0] + "</eVitals.19>");
            }; 

            _val = getValue(businessObject.elements, "dVitals.20");
            if (_val == null)
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eVitals.20" + PN_REFUSED_IS_NILLABLE);

                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eVitals.20" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                }
                else
                {
                    _retArray.push("<eVitals.20" + NIL_V3NOT_RECORDED );
                    VitalsGroup["dVitals.20"] = v3NOT_RECORDED;
                    E14.E14_16 = v2NOT_RECORDED;
                }            
            }
            else 
            {
                VitalsGroup["dVitals.20"] = _val[0];
                E14.E14_16 = D2Val("dVitals.20", _val[0]);
                _retArray.push("<eVitals.20>" + val[0] + "</eVitals.20>");
            }; 

            _val = getValue(businessObject.elements, "dVitals.21");
            if (_val == null)
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eVitals.21" + PN_REFUSED_IS_NILLABLE);

                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eVitals.21" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                }
                else
                {
                    _retArray.push("<eVitals.21" + NIL_V3NOT_RECORDED );
                    VitalsGroup["dVitals.21"] = v3NOT_RECORDED;
                    E14.E14_17 = v2NOT_RECORDED;
                }            
            }
            else 
            {
                VitalsGroup["dVitals.21"] = _val[0];
                E14.E14_17 = D2Val("dVitals.21", _val[0]);
                _retArray.push("<eVitals.21>" + val[0] + "</eVitals.21>");
            };

            _val = getValue(businessObject.elements, "dVitals.22");
            if (_val == null)
            {              
                _retArray.push("<eVitals.22" + NIL_V3NOT_RECORDED );
                VitalsGroup["dVitals.22"] = v3NOT_RECORDED;
                E14.E14_12 = v2NOT_RECORDED;
              
            }
            else 
            {
                VitalsGroup["dVitals.22"] = _val[0];
                E14.E14_12 = D2Val("dVitals.22", _val[0]);
                _retArray.push("<eVitals.22>" + val[0] + "</eVitals.22>");
            };
      

            _val = getValue(businessObject.elements, "dVitals.23");
            if (_val == null)
            {
                if(isRequiredStateElement("eVitals.23"))
                {
                    if(_val[0] == 8801019)
                    {
                        _retArray.push("<eVitals.23" + PN_REFUSED_IS_NILLABLE);
                    }
                    else if(_val[0] == 8801023)
                    {
                        _retArray.push("<eVitals.23" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                    }
                    else if(_val[0] == 8801005)
                    {
                        _retArray.push("<eVitals.23" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                    }            
                    else
                    {
                        _retArray.push("<eVitals.23" + NIL_V3NOT_RECORDED );
                        VitalsGroup["dVitals.23"] = v3NOT_RECORDED;
                        E14.E14_05 = v2NOT_RECORDED;
                    }            
                }
                else 
                {   
                    _retArray.push("<eVitals.23" + NIL_V3NOT_REPORTING );
                    VitalsGroup["dVitals.23"] = v3NOT_REPORTING;
                    E14.E14_19 = v2NOT_REPORTING;}
            }
            else
            {
                VitalsGroup["dVitals.23"] = _val;
                E14.E14_19 = D2Val("dVitals.23", _val);
                _retArray.push("<eVitals.23>" + val + "</eVitals.23>");
            };
      
_retArray.push("</dVitals.GlasgowScoreGroup>");
_retArray.push("<dVitals.TemperatureGroup>");
        _val = getValue(businessObject.elements, "dVitals.23");
        if (_val == null)
        {
            if(isRequiredStateElement("eVitals.24"))
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eVitals.24" + PN_REFUSED_IS_NILLABLE);
                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eVitals.24" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                }
                else if(_val[0] == 8801005)
                {
                    _retArray.push("<eVitals.24" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }            
                else
                {
                    _retArray.push("<eVitals.24" + NIL_V3NOT_RECORDED );
                    VitalsGroup["dVitals.24"] = v3NOT_RECORDED;
                    E14.E14_20 = v2NOT_RECORDED;
                }            
            }
            else 
            {   
                _retArray.push("<eVitals.24" + NIL_V3NOT_REPORTING );
                VitalsGroup["dVitals.24"] = v3NOT_REPORTING;
                E14.E14_20 = v2NOT_REPORTING;}
        }
        else
        {
            VitalsGroup["dVitals.24"] = _val;
            E14.E14_19 = D2Val("dVitals.24", _val);
            _retArray.push("<eVitals.24>" + val + "</eVitals.24>");
        };


        if (_val == null)
        {
            _retArray.push("<eVitals.25" + NIL_V3NOT_RECORDED );
            VitalsGroup["dVitals.25"] = v3NOT_RECORDED;
            E14.E14_21 v2NOT_RECORDED;
        }
        else 
        {
            VitalsGroup["dVitals.25"] = _val[0];
            E14.E14_21 = D2Val("dVitals.25", _val[0]);
            _retArray.push("<eVitals.25>" + val[0] + "</eVitals.25>");
        };

_retArray.push("</dVitals.TemperatureGroup>");
_retArray.push("<dVitals.PainScaleGroup>");
_val = getValue(businessObject.elements, "dVitals.20");
    if (_val == null)
    {
        if(_val[0] == 8801019)
        {
            _retArray.push("<eVitals.27" + PN_REFUSED_IS_NILLABLE);

        }
        else if(_val[0] == 8801023)
        {
            _retArray.push("<eVitals.27" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
        }
        else
        {
            _retArray.push("<eVitals.27" + NIL_V3NOT_RECORDED );
            VitalsGroup["dVitals.27"] = v3NOT_RECORDED;
            E14.E14_27 = v2NOT_RECORDED;
        }            
    }
    else 
    {
        VitalsGroup["dVitals.27"] = _val[0];
        E14.E14_27 = D2Val("dVitals.27", _val[0]);
        _retArray.push("<eVitals.27>" + val[0] + "</eVitals.27>");
    }; 

    _val = getValue(businessObject.elements, "dVitals.28");
    if (_val == null)
    {
        if(isRequiredStateElement("eVitals.28"))
        {
            _retArray.push("<eVitals.28" + NIL_V3NOT_RECORDED );
            VitalsGroup["dVitals.28"] = v3NOT_RECORDED;
        }            
        else 
        {   
            _retArray.push("<eVitals.28" + NIL_V3NOT_REPORTING );
            VitalsGroup["dVitals.28"] = v3NOT_REPORTING;        
        }
    }
    else
    {
        VitalsGroup["dVitals.28"] = _val;     
        _retArray.push("<eVitals.28>" + val + "</eVitals.28>");
    };


_retArray.push("</dVitals.PainScaleGroup>");
_retArray.push("<dVitals.StrokeScaleGroup>");
        _val = getValue(businessObject.elements, "dVitals.29");
        if (_val == null)
        {
            if(_val[0] == 8801019)
            {
                _retArray.push("<eVitals.29" + PN_REFUSED_IS_NILLABLE);

            }
            else if(_val[0] == 8801023)
            {
                _retArray.push("<eVitals.29" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
            }
            else
            {
                _retArray.push("<eVitals.29" + NIL_V3NOT_RECORDED );
                VitalsGroup["dVitals.29"] = v3NOT_RECORDED;
                E14.E14_24 = v2NOT_RECORDED;
            }            
        }
        else 
        {
            VitalsGroup["dVitals.29"] = _val[0];
            E14.E14_24 = D2Val("dVitals.29", _val[0]);
            _retArray.push("<eVitals.29>" + val[0] + "</eVitals.27>");
        }; 

        _val = getValue(businessObject.elements, "dVitals.30");
        if (_val == null)
        {
            _retArray.push("<eVitals.30" + NIL_V3NOT_RECORDED );
            VitalsGroup["dVitals.30"] = v3NOT_RECORDED;         
        }
        else 
        {
            VitalsGroup["dVitals.30"] = _val[0];
            E14.E14_24 = D2Val("dVitals.30", _val[0]);
            _retArray.push("<eVitals.30>" + val[0] + "</eVitals.30>");
        }; 

_retArray.push("</dVitals.StrokeScaleGroup>");
        };

        } // loop term
        _retArray.push("</dVitals.VitalsGroup>");
};

};    //end of function   




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

}
eVitals02Map = {
"9923001": "0",	
"9923003": "1"
};


eVitals03Map = {
"9901023":	"3005",
"9901025"	"3010",	
"9901027"	"3015",	
"9901001":	"3020",	
"9901005":	"3025",
"9901003":	"3030",	
"9901007":	"3035",	
"9901011":	"3040",	
"9901013":	"3045",	
"9901015":	"3050",	
"9901017":	"3055",	
"9901019":	"3060",	
"9901021":	"3065",	
"9901047":	"3070",	
"9901031":	"3075",	
"9901033":	"3080",	
"9901035":	"3085",	
"9901037":	"3090",	
"9901039":	"3095",	
"9901041":	"3100",	
"9901043":	"3105",
"9901045":	"3110",	
"9901049":	"3115",	
"9901059":	"3120",	
"9901061":	"3125",	
"9901063":	"3130",
"9901065":	"3135",	
"9901067":	"3140",	
"9901031":	"3145"};

eVitals08Map = {
"3308001":"3150",
"3308003":"3150",
"3308005":"3155",
"3308007":"3160",
"3308009":"3165",
"3308011":"3170"};

eVitals13Map = {
"3313003":"3175",
"3313001":"3180"};

eVitals15Map = {
"3315001":"3195",	
"3315003":"3190",	
"3315005":"3200",	
"3315007":"3185",
"3315009":"3190",
"3315011":"3195",	
"3315013":"3195"};

eVitals19Map = {
"1":"1",	
"2":"2",	
"3":"3",	
"4":"4"};

eVitals20Map = {
"1":"1",	
"2":"2",	
"3":"3",	
"4":"4",
"5":"5"};

eVitals21Map = {
"1":"1",	
"2":"2",	
"3":"3",	
"4":"4",
"5":"5",
"6":"6"
};
	
eVitals22Map = {
"3322001": "-5",
"3322003":	"3210",
"3322005":	"3225",
"3322007":	"3215",	
"3322009":	"3220"};

eVitals25Map = {
"3325001":	"3230",
"3325003":	"3230",
"3325005":	"3230",
"3325007":	"3235",
"3325009":	"3240",	
"3325013":	"3245",	
"3325015":	"3250"};

eVitals26Map = {
"3326001":	"3255",	
"3326003":	"3260",	
"3326005":	"3265",	
"3326007":	"3270"};

eVitals29Map = {
"3329001":	"3275",	
"3329003":	"3280",
"3329005":	"3285"};

eVitals31Map = {
"3331001":"3305",	
"3331003":"3310",
"3331005":"3315"};


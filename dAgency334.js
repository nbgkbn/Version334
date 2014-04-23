var ErrorList = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_AVAILABLE = "-5"
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";

var dAgency334 = new Object;
var D01 = new Object;
var setdAgency = function (businessObject) {
    var _retArray = [];
    _bdAgencyServiceGroupFound = false;
    _bdAgencyYearFound = false;

  // console.log(businessObject);
    _val = getValue(businessObject.elements, "dAgency.01");
    if (_val == null) {
        ErrorList.push("dAgency.01 National Element");
    }
    else {
        dAgency334["dAgency.01"] = _val[0];
        _retArray.push("<dAgency.01>" + val[0] + "</dAgency.01>");
    };
        
    _val = getValue(businessObject.elements, "dAgency.02");
    if (_val == null) {
        ErrorList.unshift("dAgency.02 National Element");
    }
    else {
        D01.D01_01 = _val[0];
        dAgency334["dAgency.02"] = _val [0];
        _retArray.push("<dAgency.02>" + val[0] + "</dAgency.02>");

    };
    
    _val = getValue(businessObject.elements, "dAgency.03");
    if( _val == null) 
    {
        if (isRequiredStateElement("dAgency.03") == true) {
            ErrorList.push("dAgency.03 required");
            _retArray.push("<dAgency.03" + NIL_V3NOT_RECORDED );
            D01.D01_02= v2NOT_RECORDED;
        }
        else 
        {
            VitalsGroup["dAgency.03"] = v3NOT_REPORTING;
             D01.D01_02= v2NOT_REPORTING;
            _retArray.push("<dAgency.03" + NIL_V3NOT_REPORTING);
        }
    }
    else 
    {
        D01.D01_02 = _val[0];
        _retArray.push("<dAgency.03>" + val[0] + "</dAgency.03>");
    };

    _val = getValue(businessObject.elements, "dAgency.04");
    if (_val == null) {
        ErrorList.push("dAgency.04 National Element");
    }
    else {
        dAgency334["dAgency.04"] = _val[0];
        D01.D01_03 = _val[0];
       _retArray.push("<dAgency.04>" + val[0] + "</dAgency.04>");

    };


    _val = getValue(businessObject.elements, "dAgency.09");
    if (_val == null) {
        ErrorList.unshift("dAgency.09 National Element");
    }
    else {
        dAgency334["dAgency.09"] = _val[0];
        D01.D01_05 = setD2("dAgency.09", _val)[0];
       _retArray.push("<dAgency.09>" + val[0] + "</dAgency.09>");
        
    };

    _val = getValue(businessObject.elements, "dAgency.10");
    if (_val == null) {
        if (isRequiredStateElement("dAgency.10") == true) {
            ErrorList.push("dAgency.10 required");
 			_retArray.push("<dAgency.03" + NIL_V3NOT_RECORDED );
 			D01.D01_06 = v2NOT_RECORDED;
        }
        else
        {
			_retArray.push("<dAgency.03" + NIL_V3NOT_REPORTING );
            D01.D01_06= v2NOT_REPORTING;
        }
    }
    else {
        D01.D01_06 = setD2("dAgency.10", _val);
        dAgency334["dAgency.10"] = _val;
       _retArray.push("<dAgency.10>" + val + "</dAgency.10>");

    };

    _val = getValue(businessObject.elements, "dAgency.11");
    if (_val == null) {
        ErrorList.push("dAgency.11 National Element");
        D01.D01_07 = "MISSING MANDATORY VALUE"    
        dAgency334["dAgency.11"] = "MISSING MANDATORY VALUE";
    }
    else {
        D01.D01_07 = setD2("dAgency.11", _val)[0];
        dAgency334["dAgency.11"] = _val;
        _retArray.push("<dAgency.11>" + val + "</dAgency.11>");

    };

    _val = getValue(businessObject.elements, "dAgency.12");
    if (_val == null) {
        ErrorList.unshift("dAgency.12 National Element");
        D01.D01_09 = v2NOT_RECORDED;    
        dAgency334["dAgency.12"] = "MISSING MANDATORY VALUE";
    }
    else {
        D01.D01_09 = setD2("dAgency.12", _val)[0];
        dAgency334["dAgency.12"] = _val[0];
        _retArray.push("<dAgency.12>" + val + "</dAgency.12>");

    };

    _val = getValue(businessObject.elements, "dAgency.13");
    if (_val == null) {
        ErrorList.unshift("dAgency.13 National Element");
        D01.D01_08 = "MISSING MANDATORY VALUE";
        dAgency334["dAgency.13"] = "MISSING MANDATORY VALUE";
    }
    else {
        D01.D01_08 = setD2("dAgency.13", _val)[0];
        dAgency334["dAgency.13"] = _val[0];
        _retArray.push("<dAgency.13>" + val + "</dAgency.13>");
    };

    _val = getValue(businessObject.elements, "dAgency.14");
    if (_val == null) {
        ErrorList.unshift("dAgency.14 National Element");
        dAgency334["dAgency.14"] = "MISSING MANDATORY VALUE";
    }
    else {
        dAgency334["dAgency.14"] = _val[0];
        _retArray.push("<dAgency.14>" + val + "</dAgency.14>");

    };

    _val = getValue(businessObject.elements, "dAgency.23");
    if (_val == null) {
        dAgency334["dAgency.23"] = null;
        D01.D01_19 = null;
    }
    else
    {
        dAgency334["dAgency.23"] = _val;
        D01.D01_19 = _val;   
        _retArray.push("<dAgency.23>" + val + "</dAgency.23>");

    };
    _val = getValue(businessObject.elements, "dAgency.24");
    if (_val == null) {
        dAgency334["dAgency.24"] = null;
        D01.D01_20 = null;
    }
    else 
    {
        dAgency334["dAgency.24"] = _val;
        D01.D01_20 = _val;
        _retArray.push("<dAgency.24>" + val + "</dAgency.24>");
    };
    _val = getValue(businessObject.elements, "dAgency.25");
    if (_val == null) {
        ErrorList.unshift("dAgency.25 National Element");
        _retArray.push("<dAgency.25" + NIL_V3NOT_RECORDED);
        dAgency334["dAgency.25"] = v3NOT_RECORDED;
        D01.D01_21 = v2NOT_RECORDED;
    }
    else
    {
        dAgency334["dAgency.25"] = _val;
        D01.D01_21 = _val[0];
        _retArray.push("<dAgency.25>" + val + "</dAgency.25>");

    };

    _val = getValue(businessObject.elements, "dAgency.26");
    if (_val == null) {
        ErrorList.unshift("dAgency.26 National Element");
        dAgency334["dAgency.26"] = v3NOT_RECORDED;
        _retArray.push("<dAgency.26" + NIL_V3NOT_RECORDED);

    }

    else {
        dAgency334["dAgency.26"] = _val;
        _retArray.push("<dAgency.26>" + val + "</dAgency.26>");


    };    

    if (businessObject["dAgency.AgencyServiceGroup"] != undefined) {
        var AgencyServiceGroup = new Object;
        AgencyServiceGroup = setAgencyServiceGroup(businessObject["dAgency.AgencyServiceGroup"]);
        console.log("AgencyServiceGroup  ");
        console.log(AgencyServiceGroup);    }
    else {
        ErrorList.unshift("Agency Group Requires National Element");
    };

    console.log(businessObject);
    if (businessObject["dAgency.AgencyYearGroup"] != undefined) {
        var AgencyYearGroup = new Object;
        AgencyYearGroup = setAgencyYearGroup(businessObject["dAgency.AgencyYearGroup"]);
        console.log("AgencyYearGroup  ");
        console.log(AgencyYearGroup);
    }
    else {
        ErrorList.unshift("Agency Year Requires National Element");
    }
};
var setAgencyServiceGroup = function (groupObject) {
    var _val = null;
    var _retArray = [];
    var AgencyServiceGroup = new Object;

    for (var i = 0; i < groupObject.length ; i++)
    {        
        _val = (groupObject[i].elements, "dAgency.05");
        if (_val == null)
        {
            ErrorList.push("dAgency.05 National Element");
        }
        else
        {
            AgencyServiceGroup["dAgency.05"] = _val[0];
            _retArray.push("<dAgency.05>" + val + "</dAgency.05>");

        };

        _val = getValue(groupObject[i].elements, "dAgency.06");
        if (_val == null)
        {
            ErrorList.unshift("dAgency.06 National Element");
        }
        else
        {
            AgencyServiceGroup["dAgency.06"] = _val;
            D01.D01_21 = _val;
        	_retArray.push("<dAgency.06>" + val + "</dAgency.06>");

        };

        _val = getValue(groupObject[i].elements, "dAgency.07");
        if (_val == null)
        {
            ErrorList.push("dAgency.07 required");
            AgencyServiceGroup["dAgency.07"] = v3NOT_RECORDED;  
            _retArray.push("<dAgency.07" + NIL_V3NOT_RECORDED);
      
        }
        else
        {
            AgencyServiceGroup["dAgency.07"] = _val;
            _retArray.push("<dAgency.07>" + val + "</dAgency.07>");

        };

        _val = getValue(groupObject[i].elements, "dAgency.08");
        if (_val == null)
        {
            ErrorList.push("dAgency.08 required");
            AgencyServiceGroup["dAgency.08"] = v3NOT_RECORDED;
            _retArray.push("<dAgency.08" + NIL_V3NOT_RECORDED);
            
        }
        else
        {
            AgencyServiceGroup["dAgency.08"] = _val;
            _retArray.push("<dAgency.08>" + val + "</dAgency.08>");

        };
//        console.log(AgencyServiceGroup);
        _retArray.push(AgencyServiceGroup)
    };
    
    
    
    return _retArray;
}
var setAgencyYearGroup = function (groupObject) {
    var _retArray = [];
    var _val ="";
    var AgencyYearGroup = new Object;

    for (var i = 0; i < groupObject.length ; i++) {
        _val = (groupObject[i].elements, "dAgency.15");
        if (_val == null) {
            ErrorList.push("dAgency.15 National Element");
        }
        else {
            AgencyYearGroup["dAgency.15"] = _val[0];
            D01.D01_10 = _val[0];
            _retArray.push("<dAgency.15>" + val + "</dAgency.15>");
        };

        _val = getValue(groupObject[i].elements, "dAgency.16");
        if (_val == null) {
            ErrorList.push("dAgency.16 required");
            AgencyYearGroup["dAgency.16"] = v3NOT_RECORDED;
          _retArray.push("<dAgency.16" + NIL_V3NOT_RECORDED);
            D01.D01_12 = null;
        }
        else {
            AgencyYearGroup["dAgency.16"] = _val[0];
            D01.D01_12 = _val[0];
            _retArray.push("<dAgency.16>" + val[0] + "</dAgency.16>");

        };

        _val = getValue(groupObject[i].elements, "dAgency.17");
        if (_val == null) {
            ErrorList.push("dAgency.17 required");
            AgencyYearGroup["dAgency.17"] = v3NOT_RECORDED;
            _retArray.push("<dAgency.17" + NIL_V3NOT_RECORDED);
            D01.D01_13 = null;
        }
        else {
            AgencyYearGroup["dAgency.17"] = _val[0];
            D01.D01_13 = _val[0];
          _retArray.push("<dAgency.17>" + val[0] + "</dAgency.17>");

        };

        _val = getValue(groupObject[i].elements, "dAgency.18");
        if (_val == null) {
            ErrorList.push("dAgency.18 required");
            AgencyYearGroup["dAgency.18"] = v3NOT_RECORDED;
         	_retArray.push("<dAgency.18" + NIL_V3NOT_RECORDED);
            D01.D01_14 = null;
        }
        else {
            AgencyYearGroup["dAgency.18"] = _val[0];
            D01.D01_14 = _val[0];
		    _retArray.push("<dAgency.18>" + val[0] + "</dAgency.18>");
        };
        _val = getValue(groupObject[i].elements, "dAgency.19");
        if (_val == null) {
            ErrorList.push("dAgency.19 required");
            AgencyYearGroup["dAgency.19"] = v3NOT_RECORDED;
            _retArray.push("<dAgency.19" + NIL_V3NOT_RECORDED);
            D01.D01_15 = null;
        }
        else {
            AgencyYearGroup["dAgency.19"] = _val[0];
            D01.D01_15 = _val[0];
		    _retArray.push("<dAgency.19>" + val[0] + "</dAgency.19>");

        };


        _val = getValue(groupObject[i].elements, "dAgency.20");
        if (_val == null) {
            ErrorList.push("dAgency.20 required");
            AgencyYearGroup["dAgency.20"] = v3NOT_RECORDED;
            _retArray.push("<dAgency.20" + NIL_V3NOT_RECORDED);
            D01.D01_16 = null;
        }
        else {
            AgencyYearGroup["dAgency.20"] = _val[0];
            D01.D01_16 = _val[0];
		    _retArray.push("<dAgency.20>" + val[0] + "</dAgency.20>");

        };

        _val = getValue(groupObject[i].elements, "dAgency.21");
        if (_val == null) {
            ErrorList.push("dAgency.21 required");
            AgencyYearGroup["dAgency.21"] = v3NOT_RECORDED;
            _retArray.push("<dAgency.21" + NIL_V3NOT_RECORDED);
            D01.D01_17 = null;
        }
        else {
            AgencyYearGroup["dAgency.21"] = _val[0];
            D01.D01_17 = _val[0];
    		_retArray.push("<dAgency.21>" + val[0] + "</dAgency.21>");

        };

        _val = getValue(groupObject[i].elements, "dAgency.22");
        if (_val == null) {
            if (isRequiredStateElement("dAgency.22") == true) {
                ErrorList.push("dAgency.22 required");
                AgencyYearGroup["dAgency.22"] = v3NOT_RECORDED;
               _retArray.push("<dAgency.22" + NIL_V3NOT_RECORDED);
                D01.D01_18 = null;
            }
        }
        else {
            AgencyYearGroup["dAgency.22"] = _val[0];
            D01.D01_18 = _val[0];
        	_retArray.push("<dAgency.22>" + val[0] + "</dAgency.22>");

        };

        _retArray.push(AgencyYearGroup);
    }
    return _retArray;
};


var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (payload, valueObject) {
    if (valueObject == "dAgency.05") {
    //    console.log(payload);
     //   console.log(valueObject);
    }
        
    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < payload.length) {
        if (_bFound == false)
        {
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
var dAgency09CodeMap = {	
"9920001":	"5610",
"9920003":	"5620",
"9920005":	"5630",
"9920007":	"5660",
"9920011":	"5640",
"9920013":	"5650",
"9920015":	"5670",
"9920017":	"5660",
"9920015":	"5670",	
"9920019":	"5680"};

var dAgency10CodeMap = {	
"9920001":	"5690",	
"9920003":	"5700",	
"9920005":	"5710",
"9920007":	"5710",
"9920011":	"5720",	
"9920013":	"5730",
"9920015":	"5750",
"9920017":	"5750",	
"9920019":	"5760"};

var dAgency11CodeMap = {
"9917001": "6010",
"9917003": "6100",
"9917005": "6100",
"9917007": "6110",
"9917011": "6090",
"9917013": "6100",	
"9917015": "6110",	
"9917017": "6111",	
"9917019": "6112",	
"9917009": "6120",	
"9917021": "6110",
"9917023": "6110",
"9917025": "6111", 
"9917027": "6111", 
"9917029": "6111",
"9917031": "6111"};

var dAgency12CodeMap = {
"1016001": "5870",
"1016001": "5880",
"1016001": "5890"};

var dAgency13CodeMap = {
"9912001":	"5820",
"9912003":	"5830",	
"9912005":	"5840",	
"9912007":	"5850",	
"9912009":	"5860"	
};

var dAgency23CodeMap = {
"1027017":	"5900",	
"1027015":	"5910",	
"1027013":	"5920",	
"1027011":	"5930",	
"1027009":	"5940",	
"1027007":	"5950",	
"1027005":	"5960",	
"1027003":	"5970",	
"1027001":	"5960",	

};

var dAgency24CodeMap = {
"9923001":	"0",
"9923003":	"1"
};
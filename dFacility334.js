var ErrorList = [];

var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_AVAILABLE = "-5"
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";

var dFacility334 = new Object;
var D01 = new Object;

var setdFacility = function (businessObject) 
{
    var _retArray = [];
    console.log(businessObject);
    console.log(businessObject["FacilityGroup"].length);
    
    
    _val = getValue(businessObject.elements, "dFacility.01");
    if (_val == null)
    {
    	dFacility["dFacility.01"] = null;
    	D04.D04_15=null;
    }
    else 
    {
        dFacility["dFacility.01"] = _val[0];
        D04.D04_15=setD2("dFacility.01", _val[0]);
    }
};
    var FacilityGroup = function (groupObject) {
    var _val = null;
    var FacilityGroup = new Object;
    for (var xx = 0; xx < businessObject["FacilityGroup"].length; xx++) 
    {
        console.log(businessObject["FacilityGroup"][xx]);
        _val = getValue(businessObject.elements, "dFacility.02");
        if (_val == null)
        {
        	D04.D04_15	= null;
           	FacilityGroup["dFacility.02"] = null;
        }
        else 
        {
           	D04.D04_15 = _val[0];
        	FacilityGroup["dFacility.02"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dFacility.03");
        if (_val == null)
        {
        	D04.D04_12	= null;
           	FacilityGroup["dFacility.03"] = null;
        }
        else 
        {
           	D04.D04_12 = _val[0];
        	FacilityGroup["dFacility.03"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dFacility.04");
        if (_val == null)
        {
           	FacilityGroup["dFacility.04"] = null;
        }
        else 
        {
        	FacilityGroup["dFacility.04"] = _val;
        };

        _val = getValue(businessObject.elements, "dFacility.05");
        if (_val == null)
        {
            FacilityGroup["dFacility.05"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.05"] = _val[0];
        };


        _val = getValue(businessObject.elements, "dFacility.06");
        if (_val == null)
        {
            FacilityGroup["dFacility.06"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.06"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dFacility.07");
        if (_val == null)
        {
            FacilityGroup["dFacility.07"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.07"] = _val[0];
        };
        
        _val = getValue(businessObject.elements, "dFacility.08");
        if (_val == null)
        {
            FacilityGroup["dFacility.08"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.08"] = _val[0];
        };


        _val = getValue(businessObject.elements, "dFacility.09");
        if (_val == null)
        {
            FacilityGroup["dFacility.09"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.09"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dFacility.10");
        if (_val == null)
        {
            FacilityGroup["dFacility.10"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.10 "] = _val[0];
        };

        _val = getValue(businessObject.elements, "dFacility.11");
        if (_val == null)
        {
            FacilityGroup["dFacility.11"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.11 "] = _val[0];
        };
        _val = getValue(businessObject.elements, "dFacility.12");
        if (_val == null)
        {
            FacilityGroup["dFacility.12"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.12 "] = _val[0];
        };
        _val = getValue(businessObject.elements, "dFacility.13");
        if (_val == null)
        {
            FacilityGroup["dFacility.13"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.13 "] = _val[0];
        };
        _val = getValue(businessObject.elements, "dFacility.14");
        if (_val == null)
        {
            FacilityGroup["dFacility.14"] = null;
        }
        else 
        {
            FacilityGroup["dFacility.14 "] = _val[0];
        };
	return FacilityGroup;
	        
    } // loop term
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
        case "dFacility.01":

            if (dFacility01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dAgency09CodeMap[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}
var dFacility01 = {

"1701001":	"7320",	
"1701005":	"7280",	
"1701003":	"7290",	
"1701009":	"7300",
"1701007":	"7320",	
"1701011":	"7280",	

};
console.log("7270, 7340, 7360, 7300, 7350");
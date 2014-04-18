var ErrorList = [];

var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_AVAILABLE = "-5"
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";

var dLocation334 = new Object;
var D01 = new Object;

var setdLocation = function (businessObject) 
{
    var _retArray = [];
    console.log(businessObject);
    console.log(businessObject["LocationGroup"].length);

    for (var xx = 0; xx < businessObject["LocationGroup"].length; xx++) 
    {
        console.log(businessObject["LocationGroup"][xx]);
        _val = getValue(businessObject.elements, "dLocation.01");
        if (_val == null)
        {
           	LocationGroup["dLocation.01"] = null;
        }
        else 
        {
        	LocationGroup["dLocation.01"] = _val[0];
        };
        
        _val = getValue(businessObject.elements, "dLocation.02");
        if (_val == null)
        {
        	D05.D05_01	= null;
           	LocationGroup["dLocation.02"] = null;
        }
        else 
        {
           	D05.D05_01	 = _val[0];
        	LocationGroup["dLocation.02"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dLocation.02");
        if (_val == null)
        {
        	D05.D05_01	= null;
           	LocationGroup["dLocation.02"] = null;
        }
        else 
        {
           	D05.D05_01	 = _val[0];
        	LocationGroup["dLocation.02"] = _val[0];
        };


        _val = getValue(businessObject.elements, "dLocation.03");
        if (_val == null)
        {
        	D05.D05_02	= null;
           	LocationGroup["dLocation.03"] = null;
        }
        else 
        {
           	D05.D05_02	 = _val[0];
        	LocationGroup["dLocation.03"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dLocation.04");
        if (_val == null)
        {
        	D05.D05_04	= null;
           	LocationGroup["dLocation.04"] = null;
        }
        else 
        {
           	D05.D05_04	 = _val[0];
        	LocationGroup["dLocation.04"] = _val[0];
        };


        _val = getValue(businessObject.elements, "dLocation.05");
        if (_val == null)
        {
            LocationGroup["dLocation.05"] = null;
        }
        else 
        {
            LocationGroup["dLocation.05"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dLocation.06");
        if (_val == null)
        {
        	D05.D05_05	= null;
           	LocationGroup["dLocation.06"] = null;
        }
        else 
        {
           	D05.D05_05	 = _val[0];
        	LocationGroup["dLocation.06"] = _val[0];
        };

         _val = getValue(businessObject.elements, "dLocation.07");
        if (_val == null)
        {
        	D05.D05_06	= null;
           	LocationGroup["dLocation.07"] = null;
        }
        else 
        {
           	D05.D05_06 = _val[0];
        	LocationGroup["dLocation.07"] = _val[0];
        };

         _val = getValue(businessObject.elements, "dLocation.08");
        if (_val == null)
        {
        	D05.D05_07	= null;
           	LocationGroup["dLocation.08"] = null;
        }
        else 
        {
           	D05.D05_07 = _val[0];
        	LocationGroup["dLocation.08"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dLocation.09");
        if (_val == null)
        {
            LocationGroup["dLocation.09"] = null;
            D05.D05_08 = null;
        }
        else 
        {
            LocationGroup["dLocation.09"] = _val[0];
        	D05.D05_08 = _val[0];
        };

        _val = getValue(businessObject.elements, "dLocation.10");
        if (_val == null)
        {
            LocationGroup["dLocation.10"] = null;
        }
        else 
        {              	
            LocationGroup["dLocation.10 "] = _val[0];
        };

        _val = getValue(businessObject.elements, "dLocation.11");
        if (_val == null)
        {
            LocationGroup["dLocation.11"] = null;
        }
        else 
        {
            LocationGroup["dLocation.11 "] = _val[0];
        };
        _val = getValue(businessObject.elements, "dLocation.12");
        if (_val == null)
        {
            LocationGroup["dLocation.12"] = null;
        	D05.D05_08 = null;
        }
        else 
        {
            LocationGroup["dLocation.12 "] = _val[0];
        	D05.D05_09 = _val[0];
        };

	return LocationGroup;
	        
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
        case "dLocation.01":

            if (dLocation01[valueArray[0]] == undefined) {
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
var dLocation01 = {

"1701001":	"7320",	
"1701005":	"7280",	
"1701003":	"7290",	
"1701009":	"7300",
"1701007":	"7320",	
"1701011":	"7280",	

};
console.log("7270, 7340, 7360, 7300, 7350");
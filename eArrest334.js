var ErrorList = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_AVAILABLE = "-5"
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";

var dArrest334 = new Object;
var E11 = new Object;
var setdArrest = function (businessObject) {


  _val = getValue(businessObject.elements, "dArrest.01");
    if( _val == null) {
        if (isRequiredStateElement("dArrest.01") == true) {
            ErrorList.push("dArrest.01 required");
            _val= v3NOT_RECORDED;
            _val2= v2NOT_RECORDED;
        }
        dArrest334["dArrest.01"] = _val;
        E11.E11_01 = _val2;
    }
    else {
        E11.E11_01 = _val[0];
        dArrest334["dArrest.01"] = _val[0];
    };



  _val = getValue(businessObject.elements, "dArrest.02);
    if( _val == null) {
        if (isRequiredStateElement("dArrest.02") == true) {
            ErrorList.push("dArrest.02 required");
            _val= v3NOT_RECORDED;
            _val2= v2NOT_RECORDED;
        }
        dArrest334["dArrest.02"] = _val;
        E11.E11_02 = _val2;
    }
    else {
        E11.E11_02 = _val[0];
        dArrest334["dArrest.02"] = _val[0];
    };


  _val = getValue(businessObject.elements, "dArrest.03);
    if( _val == null) {
        if (isRequiredStateElement("dArrest.03") == true) {
            ErrorList.push("dArrest.03 required");
            _val= v3NOT_RECORDED;
            _val2= v2NOT_RECORDED;
        }
        dArrest334["dArrest.03"] = _val;
        E11.E11_03 = _val2;
    }
    else {
        E11.E11_03 = setD2("dArrest.03", _val);
        dArrest334["dArrest.03"] = _val;
    };


 _val = getValue(businessObject.elements, "dArrest.04);
    if( _val == null) {
        if (isRequiredStateElement("dArrest.04") == true) {
            ErrorList.push("dArrest.04 required");
            _val= v3NOT_RECORDED;
            _val2= v2NOT_RECORDED;
        }
        dArrest334["dArrest.04"] = _val;
        E11.E11_04 = _val2;
    }
    else {
        E11.E11_04 = setD2("dArrest.04", _val);
        dArrest334["dArrest.04"] = _val;
    };


 _val = getValue(businessObject.elements, "dArrest.05);
    if( _val == null) {
        if (isRequiredStateElement("dArrest.05") == true) {
            ErrorList.push("dArrest.05 required");
            _val= v3NOT_RECORDED;
            _val2= v2NOT_RECORDED;
        }
        dArrest334["dArrest.05"] = _val;
        E11.E11_05 = _val2;
    }
    else {
        E11.E11_05 = setD2("dArrest.05", _val);
        dArrest334["dArrest.05"] = _val;
    };




    _val = getValue(businessObject.elements, "dArrest.06");
    if( _val == null) {
    	if (isRequiredStateElement("dArrest.06") == true) 
    	{
       		dArrest334["dArrest.06"] = null;
       		ErrorList.push("dArrest.06 required");
   	 	}
   	 	else
   	 	{
   	 	     dArrest334["dArrest.06"] = null;
		}
   	 	
    else 
    {
        dArrest334["dArrest.06"] = _val;
    };

 _val = getValue(businessObject.elements, "dArrest.07);
    if( _val == null) {
        if (isRequiredStateElement("dArrest.07") == true) {
            ErrorList.push("dArrest.07 required");
            _val= v3NOT_RECORDED;
        }
        dArrest334["dArrest.07"] = _val;
    }
    else {
        dArrest334["dArrest.04"] = _val;
    };


 _val = getValue(businessObject.elements, "dArrest.08);
    if( _val == null) {
        if (isRequiredStateElement("dArrest.08") == true) 
        {
            ErrorList.push("dArrest.08 required");
        }
    else 
    {
        dArrest334["dArrest.08"] = _val;
    };


 _val = getValue(businessObject.elements, "dArrest.09);
    if( _val == null) {
        if (isRequiredStateElement("dArrest.09") == true) {
            ErrorList.push("dArrest.09 required");
        	dArrest334["dArrest.09"] = = v3NOT_RECORDED;
        }
        else
        {
        	dArrest334["dArrest.09"] = null;
    }
    else {
        dArrest334["dArrest.09"] = _val;
    };
    
    
    _val = getValue(businessObject.elements, "dArrest.10");
    if (_val == null) {
        if (isRequiredStateElement("dArrest.10") == true) {
            ErrorList.push("dArrest.10 required");
            _val= v3NOT_RECORDED;
        }
        else
        {
            _val= v3NOT_REPORTING;
        }
    }
    else {
        dArrest334["dArrest.10"] = _val;
    };

    _val = getValue(businessObject.elements, "dArrest.11");
    if (_val == null) {
        ErrorList.push("dArrest.11 National Element");
        E11.E11_05 = v32OT_RECORDED   
        dArrest334["dArrest.11"] =v3NOT_RECORDED
    }
    else 
    {
        E11.E11_05  = setD2("dArrest.11", _val)[0];
        dArrest334["dArrest.11"] = _val;
    };

    _val = getValue(businessObject.elements, "dArrest.12");
    if (_val == null) {
        ErrorList.unshift("dArrest.12 National Element");
        E11.E11_06 = v2NOT_RECORDED;    
        dArrest334["dArrest.12"] = v3NOT_RECORDED;
    }
    else {
        E11.E11_06 = setD2("dArrest.12", _val)[0];
        dArrest334["dArrest.12"] = _val[0];
    };

    _val = getValue(businessObject.elements, "dArrest.13");
    if (_val == null) {
       	E11.E11_06 = null;
        dArrest334["dArrest.13"] = null;
    }
    else {
        E11.E11_06 = setD2("dArrest.13", _val)[0];
        dArrest334["dArrest.13"] = _val[0];
    };

    _val = getValue(businessObject.elements, "dArrest.14");
 	if (_val == null) {
        ErrorList.unshift("dArrest.14 National Element");
        E11.E11_08 = v2NOT_RECORDED;    
        dArrest334["dArrest.14"] = v3NOT_RECORDED;
    }
    else {
        E11.E11_06 = setD2("dArrest.14", _val)[0];
        dArrest334["dArrest.14"] = _val[0];
    };

    _val = getValue(businessObject.elements, "dArrest.15");
 	if (_val == null) {
        ErrorList.unshift("dArrest.15 National Element");
        E11.E11_09 = v2NOT_RECORDED;    
        dArrest334["dArrest.15"] = v3NOT_RECORDED;
    }
    else
    {
        E11.E11_09 = v2NOT_REPORTING;    
        dArrest334["dArrest.15"] = v23OT_REPORTING;
    }
    else {
        E11.E11_06 = setD2("dArrest.14", _val)[0];
        dArrest334["dArrest.14"] = _val[0];
    };


    _val = getValue(businessObject.elements, "dArrest.16");
 	if (_val == null) {
        ErrorList.unshift("dArrest.16 National Element");
        E11.E11_10 = v2NOT_RECORDED;    
        dArrest334["dArrest.16"] = v3NOT_RECORDED;
    }
    else {
        E11.E11_10 = setD2("dArrest.16", _val)[0];
        dArrest334["dArrest.16"] = _val[0];
    };

    _val = getValue(businessObject.elements, "dArrest.17");
 	if (_val == null) {
        E11.E11_11 = v2NOT_RECORDED;    
        dArrest334["dArrest.17"] = v3NOT_RECORDED;
    }
    else {
        E11.E11_11 = setD2("dArrest.17", _val)[0];
        dArrest334["dArrest.17"] = _val[0];
    };

    _val = getValue(businessObject.elements, "dArrest.18");
 	if (_val == null) {
        dArrest334["dArrest.18"] = v3NOT_RECORDED;
    }
    else {
        dArrest334["dArrest.18"] = _val[0];
    };
};

var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (payload, valueObject) {
    if (valueObject == "dArrest.05") {
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
        case "dArrest.09":

            if (dArrest09CodeMap[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dArrest09CodeMap[valueArray[0]]);
            }
            break;
        case "dArrest.10":
            for (i = 0; i < valueArray.length; i++) {
                if (dArrest10CodeMap[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(dArrest09CodeMap[valueArray[i]]);
                }
            }
            break;
        case "dArrest.11":

            if (dArrest11CodeMap[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dArrest11CodeMap[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}

var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED = "NV=\"7701003\" xsi:nil=\"true\"/>";
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>";
var NIL_V3NOT_APPLICABLE = "NV=\"7701001\" xsi:nil=\"true\"/>";
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";
var FAX = "PhoneNumberType=\"9913001\"";
var HOME = "PhoneNumberType=\"9913003\"";
var MOBILE = "PhoneNumberType=\"9913005\"";
var PAGER = "PhoneNumberType=\"9913007\"";
var WORD = "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL = "EmailAddressType=\"9904001\"";
var WORKEMAIL = "EmailAddressType=\"9904003\"";


var seteArrest = function (businessObject) {
    alert("NEED v2 NOTS");
    if (typeof businessObject == undefined) {
        SetNotApplicable();
    }

    console.log(isDefined("eAirway"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];

    console.log(businessObject);
    _retArray.push = "<eArrest>";

    //eArrest.01////////////////
    _val = getValue(businessObject.elements, "eArrest.01");
    if (_val == null) 
    {
        ErrorList.push("eArrest.01 required");
        E11.E11_01 = v2NOT_RECORDED;
        _retArray.push("<eArrest.01" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.01"] = v3NOT_RECORDED;
    }
    else
    {
        eArrest["eArrest.01"] = _val[0];
        E11.E11_01 = SetV2("eArrest.01", _val[0]);
        _retArray.push("<eArrest.01>" + _val[0] + "</eArrest.01>");
    };


    //eArrest.02//////////////
    _val = getValue(businessObject.elements, "eArrest.02");
    if (_val == null) {
        ErrorList.push("eArrest.02 required");
        E11.E11_02 = v2NOT_RECORDED;
        _retArray.push("<eArrest.02" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.02"] = v3NOT_RECORDED;

    }
    else {
        eArrest["eArrest.02"] = _val[0];
        E11.E11_02 = SetV2("eArrest.02", _val[0]);
        _retArray.push("<eArrest.02>" + _val[0] + "</eArrest.02>");
    };

    //eArrest.03/////////////
    _val = getValue(businessObject.elements, "eArrest.03");
    if (_val == null) {
        ErrorList.push("eArrest.03 required");
        E11.E11_023 = v2NOT_RECORDED;
        _retArray.push("<eArrest.03" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.03"] = v3NOT_RECORDED;

    }
    else {
        eArrest["eArrest.03"] = _val[0];
        E11.E11_03 = SetV2("eArrest.03", _val[0]);
        _retArray.push("<eArrest.03>" + _val[0] + "</eArrest.03>");
    };

    //eArrest.04//////////////
    _val = getValue(businessObject.elements, "eArrest.04");
    if (_val == null) 
    {
        ErrorList.push("eArrest.04 required");
        E11.E11_04 = SetV2("eArrest.04", _val[0]);
        _retArray.push("<eArrest.04" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.04"] = v3NOT_RECORDED;
    }
    else 
    {     
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1[i]=_val[i];
            arr2[i] = SetV2("eArrest.04", _val[0]);
            _retArray.push("<eArrest.04>" + val[i] + "</eArrest.04>");
        }
        eArrest["eArrest.04"] = arr1.slice(0);
        E11.E11_04 = arr2.slice(0);
        };

    //eArrest.05///////////////
    _val = getValue(businessObject.elements, "eArrest.05");
    if (_val == null) {
        ErrorList.push("eArrest.05 required");
        E11.E11_05 = v2NOT_RECORDED;
        _retArray.push("<eArrest.05" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.05"] = v3NOT_RECORDED;

    }
    else {
        eArrest["eArrest.05"] = _val[0];
        E11.E11_05 = SetV2("eArrest.05", _val[0]);
        _retArray.push("<eArrest.05>" + _val[0] + "</eArrest.05>");
    };

    //eArrest..06/////////////////////
    _val = getValue(businessObject.elements, "eArrest.06");
    if (_val == null) {
        if (isRequiredStateElement("eArrest.06")) 
        {
            _retArray.push("<eArrest.06" + NIL_V3NOT_RECORDED);
            eArrest["eArrest.06"] = v3NOT_RECORDED;
            E11.E11_06 = v2NOT_RECORDED;
        }
        else 
        {
            _retArray.push("<eArrest.06" + NIL_V3NOT_REPORTING);
            eArrest["eArrest.06"] = v3NOT_REPORTING;
            E11.E11_06  = v2NOT_REPORTING;
        }
    }
    else {

        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++)
        {
            arr1[i] = _val[i];
            _retArray.push("<eArrest.06>" + val[i] + "</eArrest.06>");
        }
        eArrest["eArrest.06"] = arr1.slice(0);
        E11.E11_04 = arr2.slice(0);

    };

    //eArrest.07/////////////////
    _val = getValue(businessObject.elements, "eArrest.07");
    if (_val == null) {
        ErrorList.push("eArrest.07 required");        
        _retArray.push("<eArrest.07" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.07"] = v3NOT_RECORDED;

    }
    else {
        eArrest["eArrest.07"] = _val[0];
        _retArray.push("<eArrest.07>" + _val[0] + "</eArrest.07>");
    };


    //eArrest.08//////////////
    _val = getValue(businessObject.elements, "eArrest.08");
    if (_val == null) {
        if (isRequiredStateElement("eArrest.08")) {
            _retArray.push("<eArrest.08" + NIL_V3NOT_RECORDED);
            eArrest["eArrest.08"] = v3NOT_RECORDED;
        }
        else {
            _retArray.push("<eArrest.08" + NIL_V3NOT_REPORTING);
            eArrest["eArrest.08"] = v3NOT_REPORTING;
        }
    }
    else {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++)
        {
            arr1[i] = _val[i];
            _retArray.push("<eArrest.08>" + _val[i] + "</eArrest.08>");
        }
        eArrest["eArrest.06"] = arr1.slice(0);        
    };

    //eArrest.09////////////
    _val = getValue(businessObject.elements, "eArrest.09");
    if (_val == null) {
        ErrorList.push("eArrest.09 required");
        _retArray.push("<eArrest.09" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.09"] = v3NOT_RECORDED;
    }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1[i]=_val[i];
            _retArray.push("<eArrest.09>" + _val[i] + "</eArrest.09>");
        }
        eArrest["eArrest.09"] = arr1.slice(0);
    };


    //eArrest.10///////////////////
    _val = getValue(businessObject.elements, "eArrest.10");
    if (_val == null) {
        ErrorList.push("eArrest.10 required");
        _retArray.push("<eArrest.10" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.10"] = v3NOT_RECORDED;

    }
    else {
        eArrest["eArrest.10"] = _val[0];
        _retArray.push("<eArrest.10>" + _val[0] + "</eArrest.10>");
    };

    //eArrest.11///////////////
    _val = getValue(businessObject.elements, "eArrest.11");
    if (_val == null) {
        ErrorList.push("eArrest.11 required");
        _retArray.push("<eArrest.11" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.11"] = v3NOT_RECORDED;

    }
    else {
        eArrest["eArrest.11"] = _val[0];
        _retArray.push("<eArrest.11>" + _val[0] + "</eArrest.11>");
    };

    //eArrest.12//////////////
    _val = getValue(businessObject.elements, "eArrest.12");
    if (_val == null) {
        ErrorList.push("eArrest.12 required");
        E11.E11_06 = v2NOT_RECORDED;
        _retArray.push("<eArrest.12" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.12"] = v3NOT_RECORDED;

    }
    else 
    {    
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1[i]=_val[i];
            arr2[i] = SetV2("eArrest.12", _val[0]);
            _retArray.push("<eArrest.12>" + _val[i] + "</eArrest.12>");

        }
        eArrest["eArrest.12"] = arr1.slice(0);
        E11.E11_06 = arr2.slice(0);
    };

    //eArrest.13//////////////
    _val = getValue(businessObject.elements, "eArrest.13");
    if (_val == null) 
    {
        E11.E11_07 = v2NOT_KNOWN;
    }
    else {
        eArrest["eArrest.13"] = _val[0];
        E11.E11_07 = SetD2("eArrest.13",_val[0]);
        _retArray.push("<eArrest.13>" + -val[0] + "</eArrest.13>");
    };

    //eArrest.14////////////////////
    _val = getValue(businessObject.elements, "eArrest.14");
    if (_val == null) {
        ErrorList.push("eArrest.14 required");
        E11.E11_08 = v2NOT_RECORDED;
        _retArray.push("<eArrest.14" + NIL_V3NOT_RECORDED);
        eArrest["eArrest.14"] = v3NOT_RECORDED;

    }
    else 
    {
        eArrest["eArrest.14"] = _val[0];
        E11.E11_08 = _val[0];
        _retArray.push("<eArrest.14>" +_val[0] + "</eArrest.14>");
    };


    //eArrest.15/////////////////////
    _val = getValue(businessObject.elements, "eArrest.15");
    if (_val == null) {
        if (isRequiredStateElement("eArrest.15")) {
            _retArray.push("<eArrest.15" + NIL_V3NOT_RECORDED);
            eArrest["eArrest.15"] = v3NOT_RECORDED;
            E11.E11_09 = v2NOT_RECORDED;
        }
        else {
            _retArray.push("<eArrest.15" + NIL_V3NOT_REPORTING);
            eArrest["eArrest.15"] = v3NOT_REPORTING;
            E11.E11_09 = v2NOT_REPORTING;
        }
    }
    else {
        eArrest["eArrest.15"] = _val[0];
        E11.E11_09 =  _val[0];
        _retArray.push("<eArrest.15>" + _val[0] + "</eArrest.15>");
    };

    //eArrest.16/////////////
    _val = getValue(businessObject.elements, "eArrest.16");
    if (_val == null) 
    {
        if (isRequiredStateElement("eArrest.16")) {
            _retArray.push("<eArrest.16" + NIL_V3NOT_RECORDED);
            eArrest["eArrest.16"] = v3NOT_RECORDED;
            E11.E11_10 = v2NOT_RECORDED;
        }
        else 
        {
            _retArray.push("<eArrest.16" + NIL_V3NOT_REPORTING);
            eArrest["eArrest.16"] = v3NOT_REPORTING;
            E11.E11_10 = v2NOT_REPORTING;
        }
    }

    else {
        eArrest["eArrest.16"] = _val[0];
        E11.E11_10 =  _val[0];
        _retArray.push("<eArrest.15>" + val + "</eArrest.15>");
    };

    //eArrest.17////////////////
    _val = getValue(businessObject.elements, "eArrest.17");
    if (_val == null) 
    {
        if (isRequiredStateElement("eArrest.17")) {
            _retArray.push("<eArrest.17" + NIL_V3NOT_RECORDED);
            eArrest["eArrest.17"] = v3NOT_RECORDED;
            E11.E11_11 = v2NOT_RECORDED;
        }
        else 
        {
            _retArray.push("<eArrest.17" + NIL_V3NOT_REPORTING);
            eArrest["eArrest.17"] = v3NOT_REPORTING;
            E11.E11_11 = v2NOT_REPORTING;
        }
    }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1[i]=_val[i];
            arr2[i] = SetV2("eArrest.17", _val[0]);
            _retArray.push("<eArrest.17>" + _val[i] + "</eArrest.17>");

        }
        eArrest["eArrest.17"] = arr1.slice(0);
        E11.E11_11 = arr2.slice(0);

    };

    //eArrest.18////////////////
    _val = getValue(businessObject.elements, "eArrest.18");
    if (_val == null) 
    {
        if (isRequiredStateElement("eArrest.18")) {
            _retArray.push("<eArrest.18" + NIL_V3NOT_RECORDED);
            eArrest["eArrest.18"] = v3NOT_RECORDED;
        }
        else 
        {
            _retArray.push("<eArrest.18" + NIL_V3NOT_REPORTING);
            eArrest["eArrest.18"] = v3NOT_REPORTING;
        }
    }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1[i]=_val[i];
            _retArray.push("<eArrest.18>" + _val[i] + "</eArrest.18>");
        }
        eArrest["eArrest.18"] = arr1.slice(0);
    };
     
    return _retArray;
};


var setNotApplicable = function (elementID) {

    _retArray.push("<eArrest.01" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.01"] = v3NOT_APPLICABLE;
    E11.E11_01 = v2NOT_APPLICABLE;
    

    _retArray.push("<eArrest.01" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.01"] = v3NOT_APPLICABLE;
    E11.E11_02 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.03" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.03"] = v3NOT_APPLICABLE;
    E11.E11_03 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.04" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.04"] = v3NOT_APPLICABLE;
    E11.E11_04 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.05" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.05"] = v3NOT_APPLICABLE;
    
    _retArray.push("<eArrest.06" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.06"] = v3NOT_APPLICABLE;

    _retArray.push("<eArrest.07" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.07"] = v3NOT_APPLICABLE;

    _retArray.push("<eArrest.08" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.08"] = v3NOT_APPLICABLE;

    _retArray.push("<eArrest.09" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.09"] = v3NOT_APPLICABLE;

    _retArray.push("<eArrest.10" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.10"] = v3NOT_APPLICABLE;

    _retArray.push("<eArrest.11" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.11"] = v3NOT_APPLICABLE;
    E11.E11_05 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.12" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.12"] = v3NOT_APPLICABLE;
    E11.E11_06 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.14" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.14"] = v3NOT_APPLICABLE;
    E11.E11_08 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.15" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.15"] = v3NOT_APPLICABLE;
    E11.E11_09 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.16" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.16"] = v3NOT_APPLICABLE;
    E11.E11_10 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.17" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.17"] = v3NOT_APPLICABLE;
    E11.E11_11 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.15" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.15"] = v3NOT_APPLICABLE;
    E11.E11_10 = v2NOT_APPLICABLE;

    _retArray.push("<eArrest.18" + NIL_V3NOT_APPLICABLE);
    eAirway["eArrest.18"] = v3NOT_APPLICABLE;
    
}


};



////////////////////////////////////////////////////
var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (businessObject, valueObject) {
    //console.log(businessObject.length);
    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < businessObject.length) {
        if (_bFound == false) {
            if (businessObject[i].attributes.title == valueObject) {
                _bFound = true;
                if (businessObject[i].attributes.value == undefined) {

                    _retVal = null;
                }
                else {
                    _retVal = businessObject[i].attributes.value;
                }
            }
        }
        i++;
    }
    return _retVal;
};

function SetNotApplicable() 
{
    eArrest["eArrest.01"] = V3NOT_APPLICABLE
    E11.E11_01 = v2NOT_APPLICABLE;
    _retArray.push("<eArrest.01" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.02"] = V3NOT_APPLICABLE
    E11.E11_02 = v2NOT_APPLICABLE;
    _retArray.push("<eArrest.02" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.03"] = V3NOT_APPLICABLE
    E11.E11_03 = v2NOT_APPLICABLE;
    _retArray.push("<eArrest.03" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.04"] = V3NOT_APPLICABLE
    E11.E11_04 = v2NOT_APPLICABLE;
    _retArray.push("<eArrest.04" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.05"] = V3NOT_APPLICABLE
    _retArray.push("<eArrest.05" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.06"] = V3NOT_APPLICABLE
    _retArray.push("<eArrest.06" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.07"] = V3NOT_APPLICABLE   
    _retArray.push("<eArrest.07" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.08"] = V3NOT_APPLICABLE
    _retArray.push("<eArrest.08" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.09"] = V3NOT_APPLICABLE
    _retArray.push("<eArrest.09" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.10"] = V3NOT_APPLICABLE
    _retArray.push("<eArrest.10" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.11"] = V3NOT_APPLICABLE
    E11.E11_05 = v2NOT_APPLICABLE;
    _retArray.push("<eArrest.11" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.12"] = V3NOT_APPLICABLE
    E11.E11_06 = v2NOT_APPLICABLE;
    _retArray.push("<eArrest.12" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.14"] = V3NOT_APPLICABLE
    E11.E11_08 = v2NOT_APPLICABLE;
    _retArray.push("<eArrest.14" + NIL_V3NOT_APPLICABLE );
    
    eArrest["eArrest.15"] = V3NOT_APPLICABLE
    E11.E11_09 = v2NOT_APPLICABLE;
    _retArray.push("<eArrest.15" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.16"] = V3NOT_APPLICABLE
    E11.E11_10 = v2NOT_APPLICABLE;
    _retArray.push("<eArrest.16" + NIL_V3NOT_APPLICABLE );

    eArrest["eArrest.17"] = V3NOT_APPLICABLE
    E11.E11_11= v2NOT_APPLICABLE;
    _retArray.push("<eArrest.17" + NIL_V3NOT_APPLICABLE );
        
    eArrest["eArrest.18"] = V3NOT_APPLICABLE
    _retArray.push("<eArrest.18" + NIL_V3NOT_APPLICABLE );

};


function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eArrest.02":

            if (eArrest02[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest02[valueArray[0]]);
            }
            break;
        case "eArrest.02":
            for (i = 0; i < valueArray.length; i++) {
                if (eArrest02[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eArrest02[valueArray[i]]);
                }
            }
            break;
        case "eArrest.03":
            if (eArrest03[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest03[valueArray[0]]);
            }
            break;

        case "eArrest.04":
            if (eArrest04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest04[valueArray[0]]);
            }
            break;

        
        case "eArrest.11":
            if (eArrest11[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest11[valueArray[0]]);
            }
            break;

        case "eArrest.12":
            if (eArrest12[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest12[valueArray[0]]);
            }
            break;

        case "eArrest.13":
            if (eArrest13[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest13[valueArray[0]]);
            }
            break;

        case "eArrest.14":
            if (eArrest14[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest14[valueArray[0]]);
            }
            break;

      
        case "eArrest.16":
            if (eArrest16[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest16[valueArray[0]]);
            }
            break;

                  
        case "eArrest.17":
            if (eArrest17[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest17[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}
var eArrest01 = {
    "3001001":"0",
    "3001003":"2240",
    "3001005":"2245"};
};

var eArrest02 = {
    "3002001":"2250",
    "3002015":"2255",
    "3002003":"2260",
    "3002013":"2265",
    "3002007":"2270",
    "3002011":"2275"
};

var eArrest03 = {
    "3003001":"2280",
    "3003003":"2285",
    "3003005":"2290",
    "3003007":"2295",
    "3003009":"2300",
    "3003011":"2305"
};

var eArrest04 = {
    "3004005":"2310",
    "3004007":"2315",
    "3004001":"2320"
};

var eArrest11 = {
    "3011001":"2325",
    "3011003":"2330",
    "3011005":"2345",
    "3011007":"2350",
    "3011009":"2355",
    "3011011":"2360",
    "3011013":"2365"
};

var eArrest12 = {
    "3012001":"2380",
    "3012003":"2370",
    "3012005":"2375",
    "301200":"2375"
};

var eArrest13 = {
    "3013001":"2380", 
    "3013003":"2380",
    "3013005":"2385",
    "3013007":"2385"
};

var eArrest14 = function (estTimeEvent, estTimeArrival) 
{
    var _diff = Math.abs(new Date(estTimeCal) - new Date(estTimeArrival));
    var _minuteCount = Math.floor((diff/1000)/60);
    if(_minuteCount > 20)
    {
        _eArrest14 = "2390";
    }
    else if(_minuteCount > 15  && _mincount >=20)
    {
        _eArrest14 = "2395";
    }
    else if(_minuteCount > 10  && _mincount >=15)
    {
        _eArrest14 = "2400";
    }
    else if(_minuteCount > 8  && _mincount >=10)
    {
        _eArrest14 = "2405";
    }
    else if(_minuteCount > 6  && _mincount >=8)
    {
        _eArrest14 = "2410";
    }
    else if(_minuteCount > 4  && _mincount >=6)
    {
        _eArrest14 = "2415";
    }
    else if(_minuteCount > 2  && _mincount >=4)
    {
        _eArrest14 = "2420";
    }
    else if(_minuteCount > 0  && _mincount >=2)
    {
        _eArrest14 = "2425";
    }
    else
    {
        _eArrest14 = "-10";
    }	
    return _eArrest14;
}
var eArrest16 = {
    "3016001":"2430",
    "3016003":"2435",
    "3016005":"2440",
    "3016007":"-10",
    "3016009":"2445",
    "3016011":"2450"};
	
	
var eArrest17 = {	
    "9901001":"2470",
    "9901003":"2480",
    "9901005":"2475",
    "9901007":"2485",
    "9901009":"2485",
    "9901011":"2490",
    "9901013":"2495",
    "9901015":"2500",
    "9901017":"2505",
    "9901019":"2510",
    "9901021":"2515",
    "9901023":"-5",
    "9901025":"-5",
    "9901027":"-5",
    "9901029":"-5",
    "9901031":"2525",
    "9901033":"2530",
    "9901035":"2535",
    "9901037":"2540",
    "9901039":"2545",
    "9901041":"2550",
    "9901043":"2555",
    "9901045":"2560",
    "9901047":"2520",
    "9901049":"2565",
    "9901051":"-5",
    "9901053":"-5",
    "9901055":"-5",
    "9901057":"-5",
    "9901059":"2570",
    "9901061":"2575",
    "9901063":"2580",
    "9901065":"2585",
    "9901067":"2590",
    "9901069":"2565",
    "9901071":"2595"};
	


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


var seteResponseGroup = function (businessObject) {
    console.log(isDefined("TimeGroup"));

    var _retArray = [];
    _retArray.push("<eResponse>");
    _retArray.push("<eResponse.AgencyGroup>");


    console.log(businessObject);

    _val = getValue(businessObject.elements, "eResponse.01");
    if (_val == null) {
        ErrorList.push("eResponse.01 required");
        _retArray.push("<eResponse.01" + NIL_V3NOT_RECORDED);
        E02.E02_01 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eResponse.01>" + _val + "</eResponse.01>")
        E02.E02_01 = _val;
    };

    _val = getValue(businessObject.elements, "eResponse.02");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.02") == true) {
            _retArray.push("<eResponse.02" + NIL_V3NOT_RECORDED);
        }
    }
    else {
        _retArray.push("<eResponse.02>" + _val + "</eResponse.02>");
    };


    _retArray.push("</eResponse.AgencyGroup>");

    _val = getValue(businessObject.elements, "eResponse.03");
    if (_val == null) {
        ErrorList.push("eResponse.03 required");
        _retArray.push("<eResponse.03" + NIL_V3NOT_RECORDED);
        E02.E02_02 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eResponse.03>" + _val + "</eResponse.03>")
        E02.E02_02 = _val;
    };


    _val = getValue(businessObject.elements, "eResponse.04");
    if (_val == null) {
        ErrorList.push("eResponse.04 required");
        _retArray.push("<eResponse.04" + NIL_V3NOT_RECORDED);
        E02.E02_03 = v2NOT_RECORDED;

    }
    else {
        _retArray.push("<eResponse.04>" + _val + "</eResponse.04>")
        E02.E02_03 = _val;
    };

    _retArray.push("<eResponse.ServiceGroup>");

    _val = getValue(businessObject.elements, "eResponse.05");
    if (_val == null) {
        ErrorList.push("eResponse.05 required");
        _retArray.push("<eResponse.05" + NIL_V3NOT_RECORDED);
        E02.E02_04 = v2NOT_RECORDED;

    }
    else {
        _retArray.push("<eResponse.05>" + _val + "</eResponse.05>")
        E02.E02_04 = _val;
    };

    _val = getValue(businessObject.elements, "eResponse.06");
    if (_val == null) {

    }
    else {
        _retArray.push("<eResponse.06>" + _val + "</eResponse.06>")
    };


    _retArray.push("</eResponse.ServiceGroup>");

    _val = getValue(businessObject.elements, "eResponse.07");
    if (_val == null) {
        ErrorList.push("eResponse.07 Mandatoruy");
    }
    else {
        _retArray.push("<eResponse.07>" + _val + "</eResponse.05>")
        E02.E02_05 = SetD2("eResponse.07",_val);
    };



    _val = getValue(businessObject.elements, "eResponse.08");
    if (_val == null) {
        ErrorList.push("eResponse.08 required");
        _retArray.push("<eResponse.08" + NIL_V3NOT_RECORDED);
        E02.E02_06 = v2NOT_RECORDED;

    }
    else {
        _retArray.push("<eResponse.08>" + _val + "</eResponse.08>")
        E02.E02_08 = SetD2("eResponse.08",_val);
    };

    _val = getValue(businessObject.elements, "eResponse.09");
    if (_val == null) {
        ErrorList.push("eResponse.09 required");
        _retArray.push("<eResponse.09" + NIL_V3NOT_RECORDED);
        E02.E02_07 = v2NOT_RECORDED;

    }
    else {
        _retArray.push("<eResponse.09>" + _val + "</eResponse.09>")
        E02.E02_07 = SetD2("eResponse.09",_val);
    };


    _val = getValue(businessObject.elements, "eResponse.10");
    if (_val == null) {
        ErrorList.push("eResponse.10 required");
        _retArray.push("<eResponse.10" + NIL_V3NOT_RECORDED);
        E02.E02_08 = v2NOT_RECORDED;

    }
    else {
        _retArray.push("<eResponse.10>" + _val + "</eResponse.10>")
        E02.E02_08 = SetD2("eResponse.10",_val);
    };

    _val = getValue(businessObject.elements, "eResponse.11");
    if (_val == null) {
        ErrorList.push("eResponse.11 required");
        _retArray.push("<eResponse.11" + NIL_V3NOT_RECORDED);
        E02.E02_09 = v2NOT_RECORDED;

    }
    else {
        _retArray.push("<eResponse.11>" + _val + "</eResponse.11>")
        E02.E02_09 = SetD2("eResponse.11",_val);
    };


    _val = getValue(businessObject.elements, "eResponse.12");
    if (_val == null) {
        ErrorList.push("eResponse.12 required");
        _retArray.push("<eResponse.12" + NIL_V3NOT_RECORDED);
        E02.E02_10 = v2NOT_RECORDED;

    }
    else {
        _retArray.push("<eResponse.12>" + _val + "</eResponse.12>")
        E02.E02_10 = SetD2("eResponse.12",_val);
    };


    _val = getValue(businessObject.elements, "eResponse.13");
    if (_val == null) {
        ErrorList.push("eResponse.13 Mandatory");     

    }
    else {
        _retArray.push("<eResponse.13>" + _val + "</eResponse.13>")
        E02.E02_11 = _val;
    }

    _val = getValue(businessObject.elements, "eResponse.14");
    if (_val == null) {
        ErrorList.push("eResponse.14 Mandatory");     

    }
    else {
        _retArray.push("<eResponse.14>" + _val[0] + "</eResponse.14>")
        E02.E02_12 = _val[0];
    }


    _val = getValue(businessObject.elements, "eResponse.15");
    if (_val == null) {
        ErrorList.push("eResponse.15 Mandatory");     

    }
    else {
        _retArray.push("<eResponse.15>" + _val[0] + "</eResponse.15>")
    }


    _val = getValue(businessObject.elements, "eResponse.16");
    if (_val == null) {

    }
    else {
        _retArray.push("<eResponse.16>" + _val[0] + "</eResponse.16>")
        E02.E02_13 = _val[0];
    }



    _val = getValue(businessObject.elements, "eResponse.17");
    if (_val == null) {

    }
    else {
        _retArray.push("<eResponse.17>" + _val + "</eResponse.17>")
        E02.E02_15 = _val;

    };


    _val = getValue(businessObject.elements, "eResponse.18");
    if (_val == null) {

    }
    else {
        _retArray.push("<eResponse.18>" + _val + "</eResponse.18>")
    };

    _val = getValue(businessObject.elements, "eResponse.19");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.19") == true) {
            _retArray.push("<eResponse.19>" + _val + "</eResponse.19>")
            E02.E02_16 = _val;
        }       
    };


    _val = getValue(businessObject.elements, "eResponse.20");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.20") == true) {
            _retArray.push("<eResponse.20>" + _val + "</eResponse.20>")
            E02.E02_17 = _val;
        }       
    };


    _val = getValue(businessObject.elements, "eResponse.21");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.21") == true) {
            _retArray.push("<eResponse.21>" + _val + "</eResponse.21>")
            E02.E02_18 = _val;
        }       
    };



    _val = getValue(businessObject.elements, "eResponse.22");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.22") == true) {
            _retArray.push("<eResponse.21>" + _val + "</eResponse.22>")
            E02.E02_19 = _val;
        }       
    };


    _val = getValue(businessObject.elements, "eResponse.23");
    if (_val == null) {
        ErrorList.push("eResponse.23 Mandatory");     

    }
    else {
        _retArray.push("<eResponse.23>" + _val[0] + "</eResponse.23>")
        E02.E02_20 = _val;

    }

    _val = getValue(businessObject.elements, "eResponse.24");
    if (_val == null) {
        ErrorList.push("eResponse.24 required");
        _retArray.push("<eResponse.24" + NIL_V3NOT_RECORDED);

    }
    else {
        _retArray.push("<eResponse.24>" + _val + "</eResponse.24>")
      
    };

    _retArray.push("/<eResponse>");

    return _retArray;
};

var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (businessObject, valueObject) {
    //console.log(businessObject.length);
    var _retValue = null;
    var _bFound = false;
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
}


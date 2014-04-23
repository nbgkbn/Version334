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
var PN_CONTRAINDICATION_NOTED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801001\"/>";
var PN_DENIED_BY_ORDER_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801003\"/>";



var seteProcedures = function (businessObject) {
    alert("NEED v2 NOTS");

    console.log(isDefined("eProcedures"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];

    console.log(businessObject);

    _retArray.push("<eProcedures.ProcedureGroup>")


    _val = getValue(businessObject.elements, "eProcedures.01");
    if (_val == null) {
        ErrorList.push("eProcedures.01 required");
        _retArray.push("<eProcedures.01" + NIL_V3NOT_RECORDED);
        E19.E19_01 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eProcedures.01>" + _val[0] + "</eProcedures.01>")
        E19.E19_01 = _val[0];
    };

    _val = getValue(businessObject.elements, "eProcedures.02");
    if (_val == null) {
        ErrorList.push("eProcedures.02 required");
        _retArray.push("<eProcedures.02" + NIL_V3NOT_RECORDED);
        E19.E19_02 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eProcedures.02>" + _val[0] + "</eProcedures.02>")
        E19.E19_02 = _val[0];
    };

    _val = getValue(businessObject.elements, "eProcedures.03");
    if (_val == null)
    {
        if(isRequiredStateElement("eProcedures.03"))
        {
            if(_val[0] == 8801019)
            {
                _retArray.push("<eProcedures.03" + PN_REFUSED_IS_NILLABLE);

            }
            else if(_val[0] == 8801023)
            {
                _retArray.push("<eProcedures.03" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
            }

            else if(_val[0] == 8801001)
            {
                _retArray.push("<eProcedures.03" + PN_CONTRAINDICATION_NOTED_IS_NILLABLE);
            }
            else if(_val[0] == 8801003)
            {
                _retArray.push("<eProcedures.03" + PN_DENIED_BY_ORDER_IS_NILLABLE);
            }
            else{
                _retArray.push("<eProcedures.03" + NIL_V3NOT_RECORDED );
                E19.E19_03  = v2NOT_RECORDED;
            }            
        }
        else 
        {
            E19.E19_03 = _val;
            _retArray.push("<eProcedures.03>" + val + "</eProcedures.03>");
        }; 

        _val = getValue(businessObject.elements, "eProcedures.04");
    if (_val == null) {

    }
    else {
        _retArray.push("<eProcedures.04>" + _val + "</eProcedures.04>")
        E19.E19_04 = _val;
    };

   
    _val = getValue(businessObject.elements, "eProcedures.05");
    if (_val == null) {
        _retArray.push("<eProcedures.05" + NIL_V3NOT_RECORDED);
        E19.E19_05 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eProcedures.05>" + _val[0] + "</eProcedures.05>")
        E19.E19_05 = _val[0];
    };


    _val = getValue(businessObject.elements, "eProcedures.06");
    if (_val == null) {
        _retArray.push("<eProcedures.06" + NIL_V3NOT_RECORDED);
        E19.E19_06 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eProcedures.06>" + _val[0] + "</eProcedures.06>")
        E19.E19_06 = _val[0];
    };

    _val = getValue(businessObject.elements, "eProcedures.07");
    if (_val == null) {
        _retArray.push("<eProcedures.07" + NIL_V3NOT_RECORDED);
        E19.E19_07 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eProcedures.07>" + _val + "</eProcedures.07>")
        E19.E19_07 = SetD2("eProcedures.07", _val);
    };

    _val = getValue(businessObject.elements, "eProcedures.08");
    if (_val == null) {
        _retArray.push("<eProcedures.08" + NIL_V3NOT_RECORDED);
        E19.E19_08 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eProcedures.08>" + _val + "</eProcedures.08>")
        E19.E19_08 = SetD2("eProcedures.08", _val);
    };
    _val = getValue(businessObject.elements, "eProcedures.09");
    if (_val == null) {
        if (isRequiredStateElement("eProcedures.09") == true) {
            ErrorList.push("eProcedures.09 required");
            _retArray.push("<eProcedures.09" + NIL_V3NOT_RECORDED);
            E19.E19_09 = v2NOT_RECORDED;
        }
        else {
            _retArray.push("<eProcedures.09" + NIL_V3NOT_REPORTING);
            E19.E19_09 = v2NOT_REPORTING;

        }
    }
    else {
        _retArray.push("<eProcedures.09>" + _val + "</eProcedures.09>")
        E19.E19_08 = SetD2("eProcedures.09", _val);    
    };

    _val = getValue(businessObject.elements, "eProcedures.10");
    if (_val == null) {
        _retArray.push("<eProcedures.10" + NIL_V3NOT_RECORDED);
    }
    else {
        _retArray.push("<eProcedures.10>" + _val + "</eProcedures.10>")
    };

    _val = getValue(businessObject.elements, "eProcedures.11");
    if (_val == null) {
       
    }
    else {
        _retArray.push("<eProcedures.11>" + _val + "</eProcedures.11>")
        E19.E19_08 = SetD2("eProcedures.11", _val);    
    };

    _val = getValue(businessObject.elements, "eProcedures.12");
    if (_val == null) {
       
    }
    else {
        _retArray.push("<eProcedures.12>" + _val[0] + "</eProcedures.12>")
        E19.E19_08 = _val[0];    
    };

    _val = getValue(businessObject.elements, "eProcedures.13");
    if (_val == null) {
        if (isRequiredStateElement("eProcedures.13") == true) {
            ErrorList.push("eProcedures.13 required");
            _retArray.push("<eProcedures.13" + NIL_V3NOT_RECORDED);
            E19.E19_12 = v2NOT_RECORDED;
        }
        else {
            _retArray.push("<eProcedures.13" + NIL_V3NOT_REPORTING);
            E19.E19_12 = v2NOT_REPORTING;

        }
    }
    else {
        _retArray.push("<eProcedures.13>" + _val[0] + "</eProcedures.13>")
        E19.E19_12 =  _val[0];    
    };

    _retArray.push("</eProcedures.ProcedureGroup>")

    return _retArray;
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
}

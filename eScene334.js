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
PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";



var seteScene = function (businessObject) {

    var _retArray = [];
    _retArray.push("<eScene>");

    console.log(businessObject);

    _val = getValue(businessObject.elements, "eScene.01");
    if (_val == null)
    {
        ErrorList.push("eScene.01 required");
        eSituation["dSituation.01"] = v3NOT_RECORDED;
    }
    else {
        _retArray.push("<eScene.01>" +_val + "</eScene.01>")
    };



    _val = getValue(businessObject.elements, "eScene.05");
    if (_val == null) {

    }
    else {
        _retArray.push("<eScene.05>" + _val + "</eScene.05>")
        E08.E08_04 = _val;
    };

    if (getValue(businessObject.elements, "eScene.06") == null) {
        ErrorList.push("eScene.06 required");
        _retArray.push("<eScene.06" + NIL_V3NOT_RECORDED);
        E08.E08_05 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eScene.06>" + _val + "</eScene.06>");
        E08.E08_05 = _val;
    };


    _val = getValue(businessObject.elements, "eScene.07");
    if (_val == null){
        ErrorList.push("eScene.07 required");
        _retArray.push("<eScene.07" + NIL_V3NOT_RECORDED);
        E08.E08_06 = v2NOT_RECORDED;
    }
    else {
        _retArray.push("<eScene.07>" + _val + "</eScene.07>")
        E08.E08_06 = _val;
    };

    _val = getValue(businessObject.elements, "eScene.08");
    if (_val == null){
        ErrorList.push("eScene.08 required");
        _retArray.push("<eScene.08" + NIL_V3NOT_RECORDED);
    }
    else {
        _retArray.push("<eScene.08>" + _val + "</eScene.08>")
    };

    _val = getValue(businessObject.elements, "eScene.09");
    if (_val == null){
        ErrorList.push("eScene.09 required");
        _retArray.push("<eScene.09" + NIL_V3NOT_RECORDED);
        E08.E08_07 = v2NOT_RECORDED;

    }
    else {
        _retArray.push("<eScene.09>" + _val + "</eScene.09>")
        E08.E08_07 = _val;
    };

    _val = getValue(businessObject.elements, "eScene.10");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.10") == true) 
        {
            _retArray.push("<eScene.10" + NIL_V3NOT_RECORDED);
            E08.E08_08 = v2NOT_RECORDED;
        }
        else
        {
            _retArray.push("<eScene.10" + NIL_V3NOT_REPORTING);
            E08.E08_08 = v2NOT_REPORTING;
        }
    }
    else {
        _retArray.push("<eScene.10>" + _val + "</eScene.10>");
        E08.E08_08 = _val;
    };

    _val = getValue(businessObject.elements, "eScene.11");
    if (_val == null){
        if (isRequiredStateElement("eScene.11") == true) {
            _retArray.push("<eScene.11" + NIL_V3NOT_RECORDED);
            E08.E08_10 = v2NOT_RECORDED;
        }
        else {
            _retArray.push("<eScene.11" + NIL_V3NOT_REPORTING);
            E08.E08_10 = v2NOT_REPORTING;
        }
    }
    else {
        _retArray.push("<eScene.11>" +_val + "</eScene.11>");
        E08.E08_10 = _val;
    };


    _val = getValue(businessObject.elements, "eScene.12");
    if (_val == null){
        if (isRequiredStateElement("eScene.12") == true) {
            _retArray.push("<eScene.12" + NIL_V3NOT_RECORDED);
        }
        else {
            _retArray.push("<eScene.12" + NIL_V3NOT_REPORTING);
        }
    }
    else {
        _retArray.push("<eScene.12>" + _val + "</eScene.12>");
    };

    _val = getValue(businessObject.elements, "eScene.13");
    if (_val == null){
        if (isRequiredStateElement("eScene.13") == true) {
            _retArray.push("<eScene.13" + NIL_V3NOT_RECORDED);
        }
        else {
            _retArray.push("<eScene.13" + NIL_V3NOT_REPORTING);
        }
    }
    else {
        _retArray.push("<eScene.13>" + _val + "</eScene.13>");
    };

        _val = getValue(businessObject.elements, "eScene.14");
        if (_val == null)
        {
        if (isRequiredStateElement("eScene.14") == true) 
            {
            _retArray.push("<eScene.14" + NIL_V3NOT_RECORDED);
            }
            else 
            {
            _retArray.push("<eScene.14" + NIL_V3NOT_REPORTING);
            }
    }
    else 
    {
        _retArray.push("<eScene.14>" + _val + "</eScene.14>");
    };

        _val = getValue(businessObject.elements, "eScene.15");
        if (_val == null)
        {
            if (isRequiredStateElement("eScene.15") == true) 
            {
                _retArray.push("<eScene.15" + NIL_V3NOT_RECORDED);
                E08.E08_15 = v2NOT_RECORDED;
            }
            else 
            {
                _retArray.push("<eScene.15" + NIL_V3NOT_REPORTING);
                E08.E08_15 = v2NOT_REPORTING;
            }
        }
        else 
        {
            _retArray.push("<eScene.15>" + _val + "</eScene.15>");
        };

    _val = getValue(businessObject.elements, "eScene.16");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.16") == true) 
        {
            _retArray.push("<eScene.16" + NIL_V3NOT_RECORDED);        }
        else 
        {
            _retArray.push("<eScene.16" + NIL_V3NOT_REPORTING);           
        }
    }
    else 
    {
        _retArray.push("<eScene.16>" + _val + "</eScene.16>");
    };


    _val = getValue(businessObject.elements, "eScene.17");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.17") == true)
        {
            ErrorList.push("eScene.17 required");
            _retArray.push("<eScene.17" + NIL_V3NOT_RECORDED);
            E08.E08_12 = v2NOT_RECORDED;
        }
        else
        {
            _retArray.push("<eScene.17" + NIL_V3NOT_REPORTING);
            E08.E08_12 = v2NOT_REPORTING;
        }
    }
    else {
        _retArray.push("<eScene.17>" + _val + "</eScene.17>")
        E08.E08_12 = _val;
    };



    _val = getValue(businessObject.elements, "eScene.18");
        if (_val == null){
        ErrorList.push("eScene.18 required");
        _retArray.push("<eScene.18" + NIL_V3NOT_RECORDED);
        E08.E08_14 = v2NOT_RECORDED;

    }
    else {
        _retArray.push("<eScene.18>" + _val + "</eScene.18>")
        E08.E08_14 = _val;

    };

        _val = getValue(businessObject.elements, "eScene.19");
        if (_val == null)
        {
            ErrorList.push("eScene.19 required");
            _retArray.push("<eScene.19" + NIL_V3NOT_RECORDED);
            E08.E08_15 = v2NOT_RECORDED;

    }
    else {
         _retArray.push("<eScene.19>" + _val + "</eScene.19>");
        E08.E08_15 = v2NOT_RECORDED;
    };


        _val = getValue(businessObject.elements, "eScene.20");
        if (_val == null)
        {
            if (isRequiredStateElement("eScene.20") == true) {
                ErrorList.push("eScene.20 required");
                _retArray.push("<eScene.20" + NIL_V3NOT_RECORDED);
            }
            else
            {
                _retArray.push("<eScene.20" + NIL_V3NOT_REPORTING);                
            }
        }
        else
        {
            _retArray.push("<eScene.20>" +_val + "</eScene.20>");
        };


        _val = getValue(businessObject.elements, "eScene.21");
        if (_val == null){
            if (isRequiredStateElement("eScene.21") == true) {
                ErrorList.push("eScene.21 required");
                _retArray.push("<eScene.21" + NIL_V3NOT_RECORDED);
                E08.E08_13 = v2NOT_RECORDED;
            }
            else {
                _retArray.push("<eScene.21" + NIL_V3NOT_REPORTING);
                E08.E08_13 = v2NOT_REPORTING;
            }
    }
    else {
        _retArray.push("<eScene.21>" + _val + "</eScene.21>");
        E08.E08_13 = _val
    };



    _val = getValue(businessObject.elements, "eScene.22");
    if (_val == null)
    {     
    }
    else 
    {
        _retArray.push("<eScene.22>" + _val + "</eScene.22>")
    };

    _val = getValue(businessObject.elements, "eScene.07");
    if (_val == null) {
     
    }
   else
   {
     _retArray.push("<eScene.23>" + _val + "</eScene.23>")
    };


    _retArray.push("/<eScene>");

    return _retArray;
};

function eSceneResponderGroup(groupObject) {
    var _retArray = [];
    _retArray.push("<eScene.ResponderGroup>");

    _val = getValue(businessObject.elements, "eScene.02");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.02") == true)
        {
            ErrorList.push("eScene.02 required");
            _retArray.push("<eScene.02" + NIL_V3NOT_RECORDED);
            04
        }
        else
        {
            _retArray.push("<eScene.02" + NIL_V3NOT_REPORTING);
            E08.E08_01 = v2NOT_REPORTING;
        }
    }
    else
    {
        _retArray.push("<eScene.02>" + _val + "</eScene.02>")
        E08.E08_01 = _val;
    };

    _val = getValue(businessObject.elements, "eScene.03");
    if (_val == null) {
    }
    else {
        _retArray.push("<eScene.03>" + _val + "</eScene.03>")
    };

    _val = getValue(businessObject.elements, "eScene.04");
    if (_val == null) {
    }
    else {
        _retArray.push("<eScene.04>" +_val + "</eScene.04>")
        E08.E08_02 = _val;
    };

    _retArray.push("</eScene.ResponderGroup>");

    return _retArray;
}
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


var ErrorList = [];
var V3XMLArray = [];
var V2XMLArray = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_AVAILABLE = "-5"
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";

var dContact334 = new Object;
var D01 = new Object;

var setdContact = function (businessObject) 
{
    var _retArray = [];
    console.log(businessObject);
    console.log(businessObject["dContact.ContactInfoGroup"].length);
    for (var xx = 0; xx < businessObject["dContact.ContactInfoGroup"].length; xx++) 
    {
        console.log(businessObject["dContact.ContactInfoGroup"][xx]);
        _val = getValue(businessObject.elements, "dContact.01");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.01") ==- true)
            {
                dContact.ContactInfoGroup["dContact.01"] = v3NOT_RECORDED;
            }
            else
            {
                dContact.ContactInfoGroup["dContact.01"] = v2NOT_REPORTING
            }
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.01"] = _val;
        };

        _val = getValue(businessObject.elements, "dContact.02");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.02") ==- true)
            {
                dContact.ContactInfoGroup["dContact.02"] = v3NOT_RECORDED;
                D2.D02_01 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.02"] = v2NOT_REPORTING
                D2.D02_01 = v2NOT_REPORTING
            }
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.02"] = _val[0];
            D2.D02_01 = _val[0];
        };

        _val = getValue(businessObject.elements, "dContact.03");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.03") ==- true)
            {
                dContact.ContactInfoGroup["dContact.03"] = v3NOT_RECORDED;
                D2.D02_03 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.03"] = v2NOT_REPORTING
                D2.D02_03 = v2NOT_REPORTING
            }
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.03"] = _val[0];
            D2.D02_03 = _val[0];
        };

        _val = getValue(businessObject.elements, "dContact.04");
        if (_val == null)
        {
            dContact.ContactInfoGroup["dContact.04"] = null;
            D2.D02_03 = v2NOT_RECORDED
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.04"] = _val[0];
            D2.D02_02 = _val[0];
        };


        _val = getValue(businessObject.elements, "dContact.05");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.05") ==- true)
            {
                dContact.ContactInfoGroup["dContact.05"] = v3NOT_RECORDED;
                D2.D02_04 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.05"] = v2NOT_REPORTING
                D2.D02_04 = v2NOT_REPORTING
            }
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.05"] = _val[0];
            D2.D02_04 = _val[0];
        };

        
        _val = getValue(businessObject.elements, "dContact.06");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.06") ==- true)
            {
                dContact.ContactInfoGroup["dContact.06"] = v3NOT_RECORDED;
                D2.D02_06 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.06"] = v2NOT_REPORTING
                D2.D02_06 = v2NOT_REPORTING
            }
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.06"] = _val[0];
            D2.D02_06 = _val[0];
        };


        _val = getValue(businessObject.elements, "dContact.07");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.07") ==- true)
            {
                dContact.ContactInfoGroup["dContact.07"] = v3NOT_RECORDED;
                D2.D02_07 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.07"] = v2NOT_REPORTING
                D2.D02_07 = v2NOT_REPORTING
            }
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.07"] = _val[0];
            D2.D02_07 = _val[0];
        };

        _val = getValue(businessObject.elements, "dContact.09");
        if (_val == null)
        {
            dContact.ContactInfoGroup["dContact.09"] = null;
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.09"] = _val[0];
        };



        _val = getValue(businessObject.elements, "dContact.10");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.10") ==- true)
            {
                dContact.ContactInfoGroup["dContact.10"] = v3NOT_RECORDED;
                D2.D02_08 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.10"] = v2NOT_REPORTING
                D2.D02_08 = v2NOT_REPORTING
            }
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.10"] = _val;
            D2.D02_08 = _val;
        };

        _val = getValue(businessObject.elements, "dContact.11");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.11") ==- true)
            {
                dContact.ContactInfoGroup["dContact.11"] = v3NOT_RECORDED;
                D2.D02_10 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.11"] = v2NOT_REPORTING
                D2.D02_10 = v2NOT_REPORTING
            }
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.11"] = _val;
            D2.D02_10 = _val;
        };

        _val = getValue(businessObject.elements, "dContact.12");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.12") ==- true)
            {
                dContact.ContactInfoGroup["dContact.12"] = v3NOT_RECORDED;
                D2.D02_11 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.12"] = v2NOT_REPORTING
                D2.D02_11 = v2NOT_REPORTING
            }
        }
        else 
        {
            dContact.ContactInfoGroup["dContact.12"] = _val;
            D2.D02_11 = _val;
        };

        EMSMedicalDirectorGroup = setEMSMedicalDirectorGroup(businessObject["dContact.EMSMedicalDirectorGroup"]);
        
    } // loop term
};    //end of function   

var EMSMedicalDirectorGroup = function (groupObject) {
    var _val = null;
    var EMSMedicalDirectorGroup = new Object;

    _val = getValue(businessObject.elements, "dContact.13");
    if (_val == null)
    {
        if(isRequiredStateElement("dContact.13") ==- true)
        {
            EMSMedicalDirectorGroup["dContact.13"] = v3NOT_RECORDED;
        }
        else
        {
            EMSMedicalDirectorGroup["dContact.13"] = v2NOT_REPORTING
        }
    }
    else 
    {
        EMSMedicalDirectorGroup["dContact.13"] = _val[0];
    };

    _val = getValue(businessObject.elements, "dContact.14");
    if (_val == null)
    {
        if(isRequiredStateElement("dContact.14") ==- true)
        {
            EMSMedicalDirectorGroup["dContact.14"] = v3NOT_RECORDED;
        }
        else
        {
            EMSMedicalDirectorGroup["dContact.14"] = v2NOT_REPORTING
        }
    }
    else 
    {
        EMSMedicalDirectorGroup["dContact.14"] = _val;
    };

    _val = getValue(businessObject.elements, "dContact.15");
    if (_val == null)
    {
        EMSMedicalDirectorGroup["dContact.15"] = null;
    }
    else 
    {
        EMSMedicalDirectorGroup["dContact.15"] = _val;
    };

    _val = getValue(businessObject.elements, "dContact.16");
    if (_val == null)
    {
        EMSMedicalDirectorGroup["dContact.16"] = null;
    }
    else 
    {
        EMSMedicalDirectorGroup["dContact.16"] = _val;
    };


    return EMSMedicalDirectorGroup;
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

}
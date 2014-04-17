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

var dConfiguration334 = new Object;
var D01 = new Object;

var setdConfiguration = function (businessObject) {
    var _retArray = [];
    console.log(businessObject);
    console.log(businessObject["dConfiguration.ConfigurationGroup"].length);
    for (var xx = 0; xx < businessObject["dConfiguration.ConfigurationGroup"].length; xx++)
    {
        console.log(businessObject["dConfiguration.ConfigurationGroup"][xx]);
        // 
        _val = getValue(businessObject.elements, "dConfiguration.01");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.01 National Element");
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.01"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dConfiguration.02");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.02 National Element");
        }
        else
        {
            D04.D04_01 = _val;
            dConfiguration.ConfigurationGroup["dConfiguration.02"] = _val;
        };

        _val = getValue(businessObject.elements, "dConfiguration.03");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.03 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.03"] = v2NOT_RECORDED;
        }
        else
        {
            D04.D04_01 = _val;
            dConfiguration.ConfigurationGroup["dConfiguration.03"] = _val;
        };

        _val = getValue(businessObject.elements, "dConfiguration.04");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.04 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.04"] = v2NOT_RECORDED;
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.04"] = _val;
        };


        _val = getValue(businessObject.elements, "dConfiguration.05");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.04 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.05"] = v2NOT_RECORDED;
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.05"] = _val;
        };

        _val = getValue(businessObject.elements, "dConfiguration.10");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.10 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.10"] = v2NOT_RECORDED;
        }
        else
        {
            D04.D04_08 = setD2("dConfiguration.10", _val)[0];
            dConfiguration.ConfigurationGroup["dConfiguration.10"] = _val;
        };


        _val = getValue(businessObject.elements, "dConfiguration.11");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.11 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.11"] = "MISSING MANDATORY VALUE";
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.11"] = _val;
        };

        _val = getValue(businessObject.elements, "dConfiguration.12");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.12 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.12"] = null;
            D04.D04_10 = null;
        }
        else
        {
            D04.D04_08 = setD2("dConfiguration.12", _val)[0];
            dConfiguration.ConfigurationGroup["dConfiguration.12"] = _val;
        };

        _val = getValue(businessObject.elements, "dConfiguration.14");
        if (_val == null)
        {
            if (isRequiredStateElement("dConfiguration.14") == - true) {
                dConfiguration.ConfigurationGroup["dConfiguration.13"] = v3NOT_RECORDED;
                D04.D04_17 = v2NOT_RECORDED;
            }
            else
            {
                D04.D04_17 = v2NOT_REPORTING
                dConfiguration.ConfigurationGroup["dConfiguration.14"] = v2NOT_REPORTING
            }
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.14"] = _val;
            D04.D04_17 = _val;
        };
        _val = getValue(businessObject.elements, "dConfiguration.15");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.15 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.15"] = "MISSING MANDATORY VALUE";
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.15"] = _val;
        };

        _val = getValue(businessObject.elements, "dConfiguration.16");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.16 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.16"] = "MISSING MANDATORY VALUE";
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.16"] = _val;
            D04.D04_02 = _val;
        };

        _val = getValue(businessObject.elements, "dConfiguration.17");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.17 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.17"] = "MISSING MANDATORY VALUE";
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.17"] = _val;
        };

        if (businessObject["dConfiguration.ProcedureGroup"] != undefined)
        {
            var ProcedureGroup = new Object;
            ProcedureGroup = setProcedureGroup(businessObject["dConfiguration.ProcedureGroup"]);
        }
        else
        {
            ErrorList.unshift("Agency Group Requires National Element");
        };
        console.log(businessObject);
        if (businessObject["dConfiguration.MedicationGroup"] != undefined)
        {
            var MedicationGroup = new Object;
            MedicationGroup = setMedicationGroup(businessObject["dConfiguration.MedicationGroup"]);
            console.log("MedicationGroup");
            console.log(MedicationGroup);
        }
        else
        {
            ErrorList.unshift("Agency Year Requires National Element");
        }
    }
};
var setProcedureGroup = function (groupObject)
{
    var _val = null;
    var _retArray = [];
    var ProcedureGroup = new Object;

    for (var i = 0; i < groupObject.length ; i++)
    {
        _val = (groupObject[i].elements, "dConfiguration.06");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.06 National Element");
        }
        else
        {
            ProcedureGroup["dConfiguration.06"] = _val[0];
            D04.D04_05 = setD2("dConfiguration.06", _val)[0];
        };

        _val = getValue(groupObject[i].elements, "dConfiguration.07");
        if (_val == null)
        {
            ErrorList.unshift("dConfiguration.07 National Element");
        }
        else
        {
            ProcedureGroup["dConfiguration.07"] = _val;
            D04.D04_04 = setD2("dConfiguration.06", _val);                        
        };
        _retArray.push(ProcedureGroup)  
    }
    return _retArray;
};
var setMedicationGroup = function (groupObject)
{
    var _retArray = [];
    var _val = "";
    var MedicationGroup = new Object;

    for (var i = 0; i < groupObject.length ; i++)
    {
        _val = (groupObject[i].elements, "dConfiguration.08");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.08 National Element");
        }
        else
        {
            MedicationGroup["dConfiguration.08"] = _val[0];
            D04.D04_07 = _val[0];
        };

        _val = getValue(groupObject[i].elements, "dConfiguration.09");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.09 required");
            MedicationGroup["dConfiguration.09"] = v3NOT_RECORDED;            
        }
        else
        {
            AgencyYearGroup["dConfiguration.09"] = _val;
            D04.D04_07= _val;
        };


        _retArray.push(MedicationGroup);
    }
    return _retArray;
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
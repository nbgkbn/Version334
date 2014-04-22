var ErrorList = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_AVAILABLE = "-5"
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";

var dVehicle334 = new Object;
var D01 = new Object;

var setdVehicle = function (businessObject) 
{
    var _retArray = [];
    console.log(businessObject);
    console.log(businessObject["dVehicle.VehicleGroup"].length);
    for (var xx = 0; xx < businessObject["dVehicle.VehicleGroup"].length; xx++) 
    {
        console.log(businessObject["dVehicle.VehicleGroup"][xx]);
        _val = getValue(businessObject.elements, "dVehicle.01");
        if (_val == null)
        {
            if(isRequiredStateElement("dVehicle.01") ==- true)
            {
                VehicleGroup["dVehicle.01"] = v3NOT_RECORDED;
                D6.D06_01 = v2NOT_RECORDED
            }
            else
            {
                VehicleGroup["dVehicle.01"] = v2NOT_REPORTING
                D6.D06_01 = v2NOT_REPORTING
            }
        }
        else 
        {
            dVehicleVehicleGroup["dVehicle.01"] = _val[0];
            D6.D06_01 = _val[0];
        };

        _val = getValue(businessObject.elements, "dVehicle.02");
        if (_val == null)
        {
            VehicleGroup["dVehicle.02"] = null;            
        }
        else 
        {
            VehicleGroup["dVehicle.02"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dVehicle.03");
        if (_val == null)
        {
            VehicleGroup["dVehicle.03"] = null;            
        }
        else 
        {
            VehicleGroup["dVehicle.03"] = _val[0];
        };

        _val = getValue(businessObject.elements, "dVehicle.04");
        if (_val == null)
        {
            if(isRequiredStateElement("dVehicle.04") ==- true)
            {
                VehicleGroup["dVehicle.04"] = v3NOT_RECORDED;
                D6.D06_03 = v2NOT_RECORDED
            }
            else
            {
                VehicleGroup["dVehicle.04"] = v2NOT_REPORTING
                D6.D06_03 = v2NOT_REPORTING
            }
        }
        else 
        {
            dVehicleVehicleGroup["dVehicle.04"] = _val[0];
            D6.D06_03 = _val[0];
        };

        _val = getValue(businessObject.elements, "dVehicle.09");
        if (_val == null)
        {
            VehicleGroup["dVehicle.09"] = null;            
            D6.D06_03 = null;
        }
        else 
        {
            VehicleGroup["dVehicle.09"] = _val[0];
            D6.D06_06 = _val[0];
        };

        _val = getValue(businessObject.elements, "dVehicle.10");
        if (_val == null)
        {
            if(isRequiredStateElement("dVehicle.10") ==- true)
            {
                VehicleGroup["dVehicle.10"] = v3NOT_RECORDED;
                D6.D06_07 = v2NOT_RECORDED
            }
            else
            {
                VehicleGroup["dVehicle.10"] = v2NOT_REPORTING
                D6.D06_07 = v2NOT_REPORTING
            }
        }
        else 
        {
            dVehicleVehicleGroup["dVehicle.10"] = _val[0];
            D6.D06_07 = _val[0];
        };

        VehicleCertificationLevelsGroup = setVehicleCertificationLevelsGroup(businessObject["dVehicle.VehicleCertificationLevelsGroup"]);
        VehicleYearGroup = setYearGroup(businessObject["dVehicle.VehicleYearGroup"]);
        
    } // loop term
};    //end of function   

var setYearGroup = function (groupObject) {
    var _val = null;
    var VehicleYearsGroup = new Object;

    _val = getValue(businessObject.elements, "dVehicle.11");
    if (_val == null)
    {
        VehicleYearsGroup["dVehicle.11"] = null;
        D06.D06_08 = null;
    }
    else 
    {
        VehicleYearsGroup["dVehicle.11"] = _val[0];
        D06.D06_08 =  _val;
    };

    _val = getValue(businessObject.elements, "dVehicle.12");
    if (_val == null)
    {
        VehicleYearsGroup["dVehicle.12"] = null;
        D06.D06_09 = null;
    }
    else 
    {
        VehicleYearsGroup["dVehicle.12"] = _val[0];
        D06.D06_09 =  _val;
    };
    _val = getValue(businessObject.elements, "dVehicle.12");
    if (_val == null)
    {
        VehicleYearsGroup["dVehicle.12"] = null;
        D06.D06_09 = null;
    }
    else 
    {
        VehicleYearsGroup["dVehicle.12"] = _val[0];
        D06.D06_09 =  _val;
    };

    _val = getValue(businessObject.elements, "dVehicle.13");
    if (_val == null)
    {
        VehicleYearsGroup["dVehicle.13"] = null;
        D06.D06_10 = null;
    }
    else 
    {
        VehicleYearsGroup["dVehicle.13"] = _val[0];
        D06.D06_10 =  _val;
    };


};


return VehicleYearsGroup;
};
 = function (groupObject) {
    var _val = null;
    var VehicleCertificationLevelsGroup = new Object;

    _val = getValue(businessObject.elements, "dVehicle.05");
    if (_val == null)
    {
        VehicleCertificationLevelsGroup["dVehicle.05"] = null;
        D06.D06_04 = null;
    }
    else 
    {
        VehicleCertificationLevelsGroup["dVehicle.05"] = _val[0];
        D06.D06_04 = setD2("dVehicle.05", _val)[0];
    };

    _val = getValue(businessObject.elements, "dVehicle.06");
    if (_val == null)
    {
        VehicleCertificationLevelsGroup["dVehicle.06"] = null;
        D06.D06_05 = null;
    }
    else 
    {
        VehicleCertificationLevelsGroup["dVehicle.06"] = _val[0];
        D06.D06_05 = setD2("dVehicle.06", _val)[0];
    };

    _val = getValue(businessObject.elements, "dVehicle.07");
    if (_val == null)
    {
        VehicleCertificationLevelsGroup["dVehicle.07"] = null;
    }
    else 
    {
        VehicleCertificationLevelsGroup["dVehicle.07"] = _val[0];
    };
    _val = getValue(businessObject.elements, "dVehicle.08");
    if (_val == null)
    {
        VehicleCertificationLevelsGroup["dVehicle.08"] = null;
    }
    else 
    {
        VehicleCertificationLevelsGroup["dVehicle.08"] = _val[0];
    };
};


return VehicleCertificationLevelsGroup;
};



var setVehicleCertificationLevelsGroup = function (groupObject) {
    var _val = null;
    var VehicleCertificationLevelsGroup = new Object;

    _val = getValue(businessObject.elements, "dVehicle.05");
    if (_val == null)
    {
        VehicleCertificationLevelsGroup["dVehicle.05"] = null;
        D06.D06_04 = null;
    }
    else 
    {
        VehicleCertificationLevelsGroup["dVehicle.05"] = _val[0];
        D06.D06_04 = setD2("dVehicle.05", _val)[0];
    };

    _val = getValue(businessObject.elements, "dVehicle.06");
    if (_val == null)
    {
        VehicleCertificationLevelsGroup["dVehicle.06"] = null;
        D06.D06_05 = null;
    }
    else 
    {
        VehicleCertificationLevelsGroup["dVehicle.06"] = _val[0];
        D06.D06_05 = setD2("dVehicle.06", _val)[0];
    };

    _val = getValue(businessObject.elements, "dVehicle.07");
    if (_val == null)
    {
        VehicleCertificationLevelsGroup["dVehicle.07"] = null;
    }
    else 
    {
        VehicleCertificationLevelsGroup["dVehicle.07"] = _val[0];
    };
    _val = getValue(businessObject.elements, "dVehicle.08");
    if (_val == null)
    {
        VehicleCertificationLevelsGroup["dVehicle.08"] = null;
    }
    else 
    {
        VehicleCertificationLevelsGroup["dVehicle.08"] = _val[0];
    };
    };


return VehicleCertificationLevelsGroup;
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
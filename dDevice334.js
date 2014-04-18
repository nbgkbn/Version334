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

var dDevice334 = new Object;
var D01 = new Object;

var setdDevice = function (businessObject) 
{
    var _retArray = [];
    console.log(businessObject);
    console.log(businessObject["dDevice.DeviceGroup"].length);
    
    for (var xx = 0; xx < businessObject["dDevice.DeviceInfoGroup"].length; xx++) 
    {
        console.log(businessObject["dDevice.DeviceInfoGroup"][xx]);
        
        _val = getValue(businessObject.elements, "dDevice.01");
        if (_val == null)
        {
        	D09.D09_01 = null;
        	dDevice.DeviceGroup["dDevice.01"] = null;   
        }
        else 
        {
        	D09.D09_01 = _val;
        	dDevice.DeviceGroup["dDevice.01"] = _val[0];        
        };

         _val = getValue(businessObject.elements, "dDevice.02");
        if (_val == null)
        {
        	D09.D09_02 = null;
        	dDevice.DeviceGroup["dDevice.02"] = null;   
        }
        else 
        {
        	D09.D09_02 = _val[0];
        	dDevice.DeviceGroup["dDevice.02"] = _val[0];        
        };

         _val = getValue(businessObject.elements, "dDevice.03");
        if (_val == null)
        {
        	dDevice.DeviceGroup["dDevice.03"] = null;   
        }
        else 
        {
        	dDevice.DeviceGroup["dDevice.03"] = _val;        
        };
          _val = getValue(businessObject.elements, "dDevice.04");
        if (_val == null)
        {
        	dDevice.DeviceGroup["dDevice.04"] = null;   
        }
        else 
        {
        	dDevice.DeviceGroup["dDevice.04"] = _val[0];        
        };
        
        _val = getValue(businessObject.elements, "dDevice.05");
        if (_val == null)
        {
        	D09.D09_04 = null;
        	dDevice.DeviceGroup["dDevice.05"] = null;   
        }
        else 
        {
        	D09.D09_04 = _val[0];
        	dDevice.DeviceGroup["dDevice.05"] = _val[0];        
        };
        
        _val = getValue(businessObject.elements, "dDevice.06");
        if (_val == null)
        {
        	D09.D09_05 = null;
        	dDevice.DeviceGroup["dDevice.06"] = null;   
        }
        else 
        {
        	D09.D09_05 = _val[0];
        	dDevice.DeviceGroup["dDevice.06"] = _val[0];        
        };

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

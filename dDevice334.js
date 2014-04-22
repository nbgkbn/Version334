var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED =  "NV=\"7701003\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_APPLICABLE ="NV=\"7701001\" xsi:nil=\"true\"/>" ;
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";


var dDevice334 = new Object;
var D01 = new Object;

var setdDevice = function (businessObject) 
{
    var _retArray = [];
    _retArray.push("<DeviceInfoGroup>");

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
        	D09.D09_01 = _val[0];
        	dDevice.DeviceGroup["dDevice.01"] = _val[0];
            _retArray.push("<dDevice.01>" + val + "</dDevice.01>");
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
            _retArray.push("<dDevice.02>" + val + "</dDevice.02>");
        };

        _val = getValue(businessObject.elements, "dDevice.03");
        if (_val == null)
        {
        	dDevice.DeviceGroup["dDevice.03"] = null;   
        }
        else 
        {
        	dDevice.DeviceGroup["dDevice.03"] = _val;  
            _retArray.push("<dDevice.03>" + val + "</dDevice.03>");
      
        };
         _val = getValue(businessObject.elements, "dDevice.04");
        if (_val == null)
        {
        	dDevice.DeviceGroup["dDevice.04"] = null;   
        }
        else 
        {
        	dDevice.DeviceGroup["dDevice.04"] = _val[0]; 
          _retArray.push("<dDevice.04>" + val + "</dDevice.04>");
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
          _retArray.push("<dDevice.05>" + val + "</dDevice.05>");
        
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
          _retArray.push("<dDevice.06>" + val + "</dDevice.06>");
     
        };

    } // loop term
    _retArray.push("</DeviceInfoGroup>");

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

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
PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var eTimes = new Object;
var D01 = new Object;

var _retArray = [];
var V2XMLArray = [];

_retArray.push = "<eTimess>";
var seteTimes = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
    }


    if(typeof businessObject["eTimes"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["eTimes"].length);
       
        //eTimes.01//////////////////
        _val = getValue(businessObject.elements, "eTimes.01");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.01"))
            {
                _retArray.push("<eTimes.01" + NIL_V3NOT_RECORDED );
                eTimes["dTimes.01"] = v3NOT_RECORDED;
                E05.E5_02 = null;
            }
            else
            {
                _retArray.push("<eTimes.01" + NIL_V3NOT_APPLICABLE );
                 eTimes["dTimes.01"] = v3NOT_APPLICABLE;
                E05.E5_02 = null;                
            }
        }
        else 
        {
            eTimes["dTimes.01"] = _val[0];
            E05.E5_02 =  _val[0];
            _retArray.push("<eTimes.01>" + _val[0] + "</eTimes.01>");
        }; 

        //eTimes.02//////////////////
        _val = getValue(businessObject.elements, "dTimes.02");
        if (_val == null)
        {                   
        }
        else 
        {
            E05.E5_03 =  _val[0];
            eTimes["dTimes.02"] = _val[0];                    
            _retArray.push("<eTimes.02>" + _val[0] + "</eTimes.02>");
        }; 

        //eTimes.03//////////////////
        _val = getValue(businessObject.elements, "dTimes.03");
        if (_val == null)
        {                   
            ErrorList.push("eTimes 03 Mandatory");
            v3ErrorList.push("E05.E5_04 Mandatory")
        }
        else 
        {
            E05.E5_04 =  _val[0];
            eTimes["dTimes.03"] = _val[0];                    
            _retArray.push("<eTimes.03>" + _val[0] + "</eTimes.03>");
        }; 

        //eTimes.04//////////////////
        _val = getValue(businessObject.elements, "dTimes.04");
        if (_val == null)
        {                   
        }
        else 
        {
            eTimes["dTimes.04"] = _val[0];                    
            _retArray.push("<eTimes.04>" + _val[0] + "</eTimes.04>");
        }; 

        //eTimes.05//////////////////
        _val = getValue(businessObject.elements, "eTimes.05");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.05"))
            {
                _retArray.push("<eTimes.05" + NIL_V3NOT_RECORDED );
                eTimes["dTimes.05"] = v3NOT_RECORDED;
                E05.E5_05 = v2NOT_RECORDED;
            }
            else
            {
                _retArray.push("<eTimes.05" + NIL_V3NOT_APPLICABLE );
                eTimes["dTimes.05"] = v3NOT_APPLICABLE;
                E05.E5_05 = null;                
            }
        }
        else 
        {
            eTimes["dTimes.05"] = _val[0];
            E05.E5_05 =  _val[0];
            _retArray.push("<eTimes.05>" + _val[0] + "</eTimes.05>");
        }; 


        //eTimes.06//////////////////
        _val = getValue(businessObject.elements, "eTimes.06");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.06"))
            {
                _retArray.push("<eTimes.06" + NIL_V3NOT_RECORDED );
                eTimes["dTimes.06"] = v3NOT_RECORDED;
                E05.E5_06 = v2NOT_RECORDED;
            }
            else
            {
                _retArray.push("<eTimes.06" + NIL_V3NOT_APPLICABLE );
                eTimes["dTimes.06"] = v3NOT_APPLICABLE;
                E05.E5_06 = null;                
            }
        }
        else 
        {
            eTimes["dTimes.06"] = _val[0];
            E05.E5_06 =  _val[0];
            _retArray.push("<eTimes.06>" + _val[0] + "</eTimes.06>");
        }; 

        //eTimes.07//////////////////
        _val = getValue(businessObject.elements, "eTimes.07");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.07"))
            {
                _retArray.push("<eTimes.07" + NIL_V3NOT_RECORDED );
                eTimes["dTimes.07"] = v3NOT_RECORDED;
                E05.E5_07 = v2NOT_RECORDED;
            }
            else
            {
                _retArray.push("<eTimes.07" + NIL_V3NOT_APPLICABLE );
                eTimes["dTimes.07"] = v3NOT_APPLICABLE;
                E05.E5_07 = null;                
            }
        }
        else 
        {
            eTimes["dTimes.07"] = _val[0];
            E05.E5_07 =  _val[0];
            _retArray.push("<eTimes.07>" + _val[0] + "</eTimes.07>");
        }; 
                
        //eTimes.08//////////////////
        _val = getValue(businessObject.elements, "eTimes.08");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.08"))
            {
                _retArray.push("<eTimes.08" + NIL_V3NOT_RECORDED );
                eTimes["dTimes.08"] = v3NOT_RECORDED;
                E05.E5_08 = v2NOT_RECORDED;
            }  
            else
            {
                _retArray.push("<eTimes.08" + NIL_V3NOT_APPLICABLE );
                eTimes["dTimes.08"] = v3NOT_APPLICABLE;
                E05.E5_08 = null;                
            }
        }
        else 
        {
            eTimes["dTimes.08"] = _val[0];
            E05.E5_08 =  _val[0];
            _retArray.push("<eTimes.08>" + _val[0] + "</eTimes.08>");
        }; 


        //eTimes.09//////////////////
        _val = getValue(businessObject.elements, "eTimes.09");
        if (_val == null)
            if(isRequiredStateElement("eTimes.09"))
            {
                _retArray.push("<eTimes.09" + NIL_V3NOT_RECORDED );
                eTimes["dTimes.09"] = v3NOT_RECORDED;
                E05.E5_09 = v2NOT_RECORDED;
            }  
            else
            {
                _retArray.push("<eTimes.09" + NIL_V3NOT_APPLICABLE );
                eTimes["dTimes.09"] = v3NOT_APPLICABLE;
                E05.E5_09 = null;                
            }
        else 
        {
            eTimes["dTimes.09"] = _val[0];
            E05.E5_09 =  _val[0];
            _retArray.push("<eTimes.09>" + _val[0] + "</eTimes.09>");
        }; 

        //eTimes.10//////////////////
        _val = getValue(businessObject.elements, "dTimes.10");
        if (_val == null)
        {                   
        }
        else 
        {
            eTimes["dTimes.10"] = _val[0];                    
            _retArray.push("<eTimes.10>" + _val[0] + "</eTimes.10>");
        }; 

        //eTimes.11//////////////////
        _val = getValue(businessObject.elements, "eTimes.11");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.11"))
            {
                _retArray.push("<eTimes.11" + NIL_V3NOT_RECORDED );
                eTimes["dTimes.11"] = v3NOT_RECORDED;
                E05.E5_11 = v2NOT_RECORDED;
            }  
            else
            {
                _retArray.push("<eTimes.11" + NIL_V3NOT_APPLICABLE );
                eTimes["dTimes.11"] = v3NOT_APPLICABLE;
                E05.E5_11 = null;                
            }
        }
        else 
        {
            eTimes["dTimes.11"] = _val[0];
            E05.E5_10 =  _val[0];
            _retArray.push("<eTimes.11>" + _val[0] + "</eTimes.11>");
        }; 


        //eTimes.12//////////////////
        _val = getValue(businessObject.elements, "eTimes.12");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.12"))
            {
                _retArray.push("<eTimes.12" + NIL_V3NOT_RECORDED );
                eTimes["dTimes.12"] = v3NOT_RECORDED;
            }  
            else
            {
                _retArray.push("<eTimes.12" + NIL_V3NOT_APPLICABLE );
                eTimes["dTimes.12"] = v3NOT_APPLICABLE;
            }          
        }
        else 
        {
            eTimes["dTimes.12"] = _val[0];                    
            _retArray.push("<eTimes.12>" + _val[0] + "</eTimes.12>");
        }; 

        //eTimes.13//////////////////
        _val = getValue(businessObject.elements, "dTimes.13");
        if (_val == null)
        {                   
            ErrorList.push("eTimes 13 Mandatory");
        }
        else 
        {
            E05.E5_11 =  _val[0];
            eTimes["dTimes.13"] = _val[0];                    
            _retArray.push("<eTimes.13>" + _val[0] + "</eTimes.13>");
        }; 


        //eTimes.14//////////////////
        _val = getValue(businessObject.elements, "eTimes.14");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.14"))
            {
                _retArray.push("<eTimes.14" + NIL_V3NOT_RECORDED );
                eTimes["dTimes.14"] = v3NOT_RECORDED;
                E05.E5_12 = v2NOT_RECORDED;
            }  
            else
            {
                _retArray.push("<eTimes.14" + NIL_V3NOT_APPLICABLE );
                eTimes["dTimes.14"] = v3NOT_APPLICABLE;
                E05.E5_12 = null;                
            }
        }
        else 
        {
            eTimes["dTimes.14"] = _val[0];
            E05.E5_12 =  _val[0];
            _retArray.push("<eTimes.14>" + _val[0] + "</eTimes.14>");
        }; 


        //eTimes.15//////////////////
        _val = getValue(businessObject.elements, "eTimes.15");
        if (_val == null)
        {
            _retArray.push("<eTimes.15" + NIL_V3NOT_RECORDED );
            eTimes["dTimes.15"] = v3NOT_RECORDED;
        }
        else 
        {
            eTimes["dTimes.15"] = _val[0];
            E05.E5_13 =  _val[0];
            _retArray.push("<eTimes.15>" + _val[0] + "</eTimes.15>");
        }; 

        //eTimes.16/////////////////
        _val = getValue(businessObject.elements, "eTimes.16");
        if (_val == null)
        {
        }
        else 
        {
            eTimes["dTimes.16"] = _val[0];
            _retArray.push("<eTimes.16>" + _val[0] + "</eTimes.16");
        }; 

        };

   
    _retArray.push("</eTimes>");
};

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


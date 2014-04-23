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
        //SetNotApplicable();
    }


    if(typeof businessObject["eTimes"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["eTimes"].length);
       
         
            _val = getValue(businessObject.elements, "eTimes.01");
            if (_val == null)
            {
                if(isRequiredStateElement("eTimes.01"))
                {
                    _retArray.push("<eTimes.01" + NIL_V3NOT_RECORDED );
                    eTimes["dTimes.01"] = v3NOT_RECORDED;
                    E05.E5_02 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                eTimes["dTimes.01"] = _val[0];
                    E05.E5_02 =  _val;
                    _retArray.push("<eTimes.01>" + _val[0] + "</eTimes.01>");
                }; 

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

                _val = getValue(businessObject.elements, "dTimes.03");
                if (_val == null)
                {                   
                    ErrorList.push("eTimes 03 Mandatory");
                }
                else 
                {
                    E05.E5_04 =  _val[0];
                    eTimes["dTimes.03"] = _val[0];                    
                    _retArray.push("<eTimes.03>" + _val[0] + "</eTimes.03>");
                }; 

                _val = getValue(businessObject.elements, "dTimes.04");
                if (_val == null)
                {                   
                }
                else 
                {
                    eTimes["dTimes.04"] = _val[0];                    
                    _retArray.push("<eTimes.04>" + _val[0] + "</eTimes.04>");
                }; 

                _val = getValue(businessObject.elements, "eTimes.05");
                if (_val == null)
                {
                    if(isRequiredStateElement("eTimes.05"))
                    {
                        _retArray.push("<eTimes.05" + NIL_V3NOT_RECORDED );
                        eTimes["dTimes.05"] = v3NOT_RECORDED;
                        E05.E5_05 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                    eTimes["dTimes.05"] = _val[0];
                    E05.E5_05 =  _val[0];
                    _retArray.push("<eTimes.05>" + _val[0] + "</eTimes.05>");
                }; 


                _val = getValue(businessObject.elements, "eTimes.06");
                if (_val == null)
                {
                    if(isRequiredStateElement("eTimes.06"))
                    {
                        _retArray.push("<eTimes.06" + NIL_V3NOT_RECORDED );
                        eTimes["dTimes.06"] = v3NOT_RECORDED;
                        E05.E5_06 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                    eTimes["dTimes.06"] = _val[0];
                    E05.E5_06 =  _val[0];
                    _retArray.push("<eTimes.06>" + _val[0] + "</eTimes.06>");
                }; 

                _val = getValue(businessObject.elements, "eTimes.07");
                if (_val == null)
                {
                    _retArray.push("<eTimes.07" + NIL_V3NOT_RECORDED );
                    eTimes["dTimes.07"] = v3NOT_RECORDED;
                    E05.E5_07 = v2NOT_RECORDED;
                }
                else 
                {
                    eTimes["dTimes.07"] = _val[0];
                    E05.E5_07 =  _val[0];
                    _retArray.push("<eTimes.07>" + _val[0] + "</eTimes.07>");
                }; 
                
                _val = getValue(businessObject.elements, "eTimes.08");
                if (_val == null)
                {
                    if(isRequiredStateElement("eTimes.08"))
                    {
                        _retArray.push("<eTimes.08" + NIL_V3NOT_RECORDED );
                        eTimes["dTimes.08"] = v3NOT_RECORDED;
                        E05.E5_08 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                    eTimes["dTimes.08"] = _val[0];
                    E05.E5_08 =  _val[0];
                    _retArray.push("<eTimes.08>" + _val[0] + "</eTimes.08>");
                }; 

                _val = getValue(businessObject.elements, "eTimes.09");
                if (_val == null)
                {
                    _retArray.push("<eTimes.09" + NIL_V3NOT_RECORDED );
                    eTimes["dTimes.09"] = v3NOT_RECORDED;
                    E05.E5_09 = v2NOT_RECORDED;
                }
                else 
                {
                    eTimes["dTimes.09"] = _val[0];
                    E05.E5_09 =  _val[0];
                    _retArray.push("<eTimes.09>" + _val[0] + "</eTimes.09>");
                }; 

                _val = getValue(businessObject.elements, "dTimes.10");
                if (_val == null)
                {                   
                }
                else 
                {
                    eTimes["dTimes.10"] = _val[0];                    
                    _retArray.push("<eTimes.10>" + _val[0] + "</eTimes.10>");
                }; 

                _val = getValue(businessObject.elements, "eTimes.11");
                if (_val == null)
                {
                    _retArray.push("<eTimes.11" + NIL_V3NOT_RECORDED );
                    eTimes["dTimes.11"] = v3NOT_RECORDED;
                    E05.E5_10 = v2NOT_RECORDED;
                }
                else 
                {
                    eTimes["dTimes.11"] = _val[0];
                    E05.E5_10 =  _val[0];
                    _retArray.push("<eTimes.11>" + _val[0] + "</eTimes.11>");
                }; 



                _val = getValue(businessObject.elements, "eTimes.12");
                if (_val == null)
                {
                    _retArray.push("<eTimes.12" + NIL_V3NOT_RECORDED );
                    eTimes["dTimes.12"] = v3NOT_RECORDED;                    
                }
                else 
                {
                    eTimes["dTimes.12"] = _val[0];                    
                    _retArray.push("<eTimes.12>" + _val[0] + "</eTimes.12>");
                }; 


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


                _val = getValue(businessObject.elements, "eTimes.14");
                if (_val == null)
                {
                    if(isRequiredStateElement("eTimes.14"))
                    {
                      //  _retArray.push("<eTimes.14" + NIL_V3NOT_RECORDED );
                     //   eTimes["dTimes.14"] = v3NOT_RECORDED;
                      //  E05.E5_08 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                    eTimes["dTimes.14"] = _val[0];
                    E05.E5_12 =  _val[0];
                    _retArray.push("<eTimes.14>" + _val[0] + "</eTimes.14>");
                }; 


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
*/
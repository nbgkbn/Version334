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

var eSituation = new Object;
var D01 = new Object;

var _retArray = [];
var V2XMLArray = [];

_retArray.push = "<eSituation>";
var seteSituation = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        //SetNotApplicable();
    }


    if(typeof businessObject["eSituation"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["eSituation"].length);
       
         
        _val = getValue(businessObject.elements, "eSituation.01");
        if (_val == null)
        {
            _retArray.push("<eSituation.01" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.01"] = v3NOT_RECORDED;
            E05.E5_01 = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.01"] = _val[0];
            E05.E5_01 =  _val;
            _retArray.push("<eSituation.01>" + _val[0] + "</eSituation.01>");
        }; 

    
        _val = getValue(businessObject.elements, "eSituation.02");
        if (_val == null)
        {
            if(isRequiredStateElement("eSituation.02"))
            {
                _retArray.push("<eSituation.02" + NIL_V3NOT_RECORDED );
                eSituation["dSituation.02"] = v3NOT_RECORDED;
                E09.E9_04 = v2NOT_RECORDED;
            }            
        }
        else 
        {
            eSituation["dSituation.02"] = _val[0];
            E09.E9_04  =  _val[0];
            _retArray.push("<eSituation.02>" + _val[0] + "</eSituation.02>");
        }; 


      _val = getValue(businessObject.elements, "eSituation.07");
        if (_val == null)
        {
            _retArray.push("<eSituation.07" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.07"] = v3NOT_RECORDED;
            E09.E09_11 = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.07"] = _val[0];
            E09.E09_11 =  _val[0];
            _retArray.push("<eSituation.07>" + _val[0] + "</eSituation.07>");
        }; 
                
        _val = getValue(businessObject.elements, "eSituation.08");
        if (_val == null)
        {
            _retArray.push("<eSituation.08" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.08"] = v3NOT_RECORDED;
            E09.E09_12 = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.08"] = _val[0];
            E09.E09_12 =  _val[0];
            _retArray.push("<eSituation.08>" + _val[0] + "</eSituation.08>");
        }; 


        _val = getValue(businessObject.elements, "eSituation.09");
        if (_val == null)
        {
            _retArray.push("<eSituation.09" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.09"] = v3NOT_RECORDED;
            E09.E09_13  = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.09"] = _val[0];
            E09.E09_13  =  _val[0];
            _retArray.push("<eSituation.09>" + _val[0] + "</eSituation.09>");
        }; 

        _val = getValue(businessObject.elements, "eSituation.10");
        if (_val == null)
        {
            _retArray.push("<eSituation.10" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.10"] = v3NOT_RECORDED;
            E09.E09_14  = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.10"] = _val[0];
            E09.E09_14  =  _val[0];
            _retArray.push("<eSituation.10>" + _val[0] + "</eSituation.10>");
        }; 

        _val = getValue(businessObject.elements, "eSituation.11");
        if (_val == null)
        {
            _retArray.push("<eSituation.11" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.11"] = v3NOT_RECORDED;
            E09.E09_15 = v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.11"] = _val[0];
            E09.E09_15 =  _val[0];
            _retArray.push("<eSituation.11>" + _val[0] + "</eSituation.11>");
        }; 



        _val = getValue(businessObject.elements, "eSituation.12");
        if (_val == null)
        {
            _retArray.push("<eSituation.12" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.12"] = v3NOT_RECORDED;                    
            E09.E09_16 =  v2NOT_RECORDED;
        }
        else 
        {
            eSituation["dSituation.12"] = _val[0];  
            E09.E09_16 = _val[0];
            _retArray.push("<eSituation.12>" + _val[0] + "</eSituation.12>");
        }; 


        _val = getValue(businessObject.elements, "dSituation.13");
        if (_val == null)
        {                   
            _retArray.push("<eSituation.13" + NIL_V3NOT_RECORDED );
            eSituation["dSituation.13"] = v3NOT_RECORDED;                    
        }
        else 
        {            
            eSituation["dSituation.13"] = _val[0];                    
            _retArray.push("<eSituation.13>" + _val[0] + "</eSituation.13>");
        }; 
_retArray.push("<WorkRelatedGroup>");

        _val = getValue(businessObject.elements, "eSituation.14");
        if (_val == null)
        {
            if(isRequiredStateElement("eSituation.14"))
            {
                if(isRequiredStateElement("eSituation.14"))
                {
                    _retArray.push("<eSituation.14" + NIL_V3NOT_RECORDED );
                    eSituation["dSituation.14"] = v3NOT_REPORTING;
                    E07.E07_15 = v2NOT_REPORTING;
                }            
                else
                {
                    _retArray.push("<eSituation.14" + NIL_V3NOT_REPORTING );
                    eSituation["dSituation.14"] = v3NOT_RECORDED;
                    E07.E07_15 = v2NOT_RECORDED;
                }
        }
        else 
        {
            eSituation["dSituation.14"] = _val[0];
            E07.E07_15 =  _val[0];
            _retArray.push("<eSituation.14>" + _val[0] + "</eSituation.14>");
        }; 
      
            

        _val = getValue(businessObject.elements, "eSituation.15");
        if (_val == null)
        {
        }
        else 
        {
            eSituation["dSituation.15"] = _val[0];
            E07.E07_16 =  _val[0];
            _retArray.push("<eSituation.15>" + _val[0] + "</eSituation.15>");
        }; 

        _val = getValue(businessObject.elements, "eSituation.16");
        if (_val == null)
        {
        }
        else 
        {
            E07.E07_17 =  _val[0];
            eSituation["dSituation.16"] = _val[0];
            _retArray.push("<eSituation.16>" + _val[0] + "</eSituation.16");
        }; 
_retArray.push("</WorkRelatedGroup>");
        _val = getValue(businessObject.elements, "eSituation.17");
        if (_val == null)
        {
            if(isRequiredStateElement("eSituation.17"))
            {
                if(isRequiredStateElement("eSituation.17"))
                {
                    _retArray.push("<eSituation.17" + NIL_V3NOT_RECORDED );
                    eSituation["dSituation.17"] = v3NOT_REPORTING;
                }            
                else
                {
                    _retArray.push("<eSituation.17" + NIL_V3NOT_REPORTING );
                    eSituation["dSituation.17"] = v3NOT_RECORDED;
                }
            }
        else 
        {
            eSituation["dSituation.17"] = _val[0];
            _retArray.push("<eSituation.17>" + _val[0] + "</eSituation.17>");
        }; 
    };
        _retArray.push("</eSituation>");
};    //end of function   


    var setComplaintGroup = function(groupObject)
    {
        var _retVal = [];
        _retArray.push("<PatientComplaintGroup>");
        FOR LOOP
        _val = getValue(businessObject.elements, "eSituation.03");
        if (_val == null)
        {
            if(isRequiredStateElement("eSituation.03"))
            {
                if(isRequiredStateElement("eSituation.03"))
                {
                    _retArray.push("<eSituation.03" + NIL_V3NOT_RECORDED );
                    eSituation["dSituation.03"] = v3NOT_REPORTING;
                }            
                else
                {
                    _retArray.push("<eSituation.03" + NIL_V3NOT_REPORTING );
                    eSituation["dSituation.03"] = v3NOT_RECORDED;
                }
            }
            else 
            {
                eSituation["dSituation.03"] = _val[0];
                _retArray.push("<eSituation.03>" + _val[0] + "</eSituation.17>");
            }; 


            _val = getValue(businessObject.elements, "eSituation.04");
            if (_val == null)
            {
                if(isRequiredStateElement("eSituation.04"))
                {
                    if(isRequiredStateElement("eSituation.04"))
                    {
                        _retArray.push("<eSituation.04" + NIL_V3NOT_RECORDED );
                        eSituation["dSituation.04"] = V3NOT_RECORDED;
                        E09.E09_05 =  V2NOT_RECORDED;
                    }            
                    else
                    {
                        _retArray.push("<eSituation.04" + NIL_V3NOT_REPORTING );
                        eSituation["dSituation.04"] = v3NOT_REPORTING;
                        E09.E09_05 =  v2NOT_REPORTING;
                    }
                }
                else 
                {
                    eSituation["dSituation.04"] = _val[0];
                    _retArray.push("<eSituation.04>" + _val[0] + "</eSituation.04>");
                }; 

                _val = getValue(businessObject.elements, "eSituation.05");
                if (_val == null)
                {
                    if(isRequiredStateElement("eSituation.05"))
                    {
                        _retArray.push("<eSituation.05" + NIL_V3NOT_RECORDED );
                        eSituation["dSituation.05"] = V3NOT_RECORDED;
                        E09.E09_06 =  V2NOT_RECORDED;
                    }            
                    else
                    {
                        _retArray.push("<eSituation.05" + NIL_V3NOT_REPORTING );
                        eSituation["dSituation.05"] = v3NOT_REPORTING;
                        E09.E09_06 =  v2NOT_REPORTING;
                    }
                }
                else 
                {
                    eSituation["dSituation.05"] = _val[0];
                    _retArray.push("<eSituation.05>" + _val[0] + "</eSituation.05>");
                }; 

                _val = getValue(businessObject.elements, "eSituation.06");
                if (_val == null)
                {
                    if(isRequiredStateElement("eSituation.06"))
                    {
                        _retArray.push("<eSituation.06" + NIL_V3NOT_RECORDED );
                        eSituation["dSituation.06"] = V3NOT_RECORDED;
                        E09.E09_07 =  V2NOT_RECORDED;
                    }            
                    else
                    {
                        _retArray.push("<eSituation.06" + NIL_V3NOT_REPORTING );
                        eSituation["dSituation.06"] = v3NOT_REPORTING;
                        E09.E09_07 =  v2NOT_REPORTING;
                    }
                }
                else 
                {
                    eSituation["dSituation.06"] = _val[0];
                    _retArray.push("<eSituation.06>" + _val[0] + "</eSituation.06>");
                }; 
            } //END LOOP
            _retArray.push("<PatientComplaintGroup>");
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
*/
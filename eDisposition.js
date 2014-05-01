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
var FAX= "PhoneNumberType=\"9913001\"";
var HOME= "PhoneNumberType=\"9913003\"";
var MOBILE= "PhoneNumberType=\"9913005\"";
var PAGER= "PhoneNumberType=\"9913007\"";
var WORD= "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL= "EmailAddressType=\"9904001\"";
var WORKEMAIL= "EmailAddressType=\"9904003\"";


var eP = new Object;
var D01 = new Object;

var _retArray = [];
var V2XMLArray = [];

var seteDisposition = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
    }

    if(typeof businessObject["eDisposition"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["eDisposition"].length);
                
        _retArray.push = "<eDisposition>";
        _retArray.push = "<DestinationGroup>";

        //eDisposition.01/////////////////
        _val = getValue(businessObject.elements, "eDisposition.01");
        if (_val == null)
        {
            if(isRequiredStateElement("eDisposition.01"))
            {
                _retArray.push("<eDisposition.01" + NIL_V3NOT_RECORDED );
                DestinationGroup["eDisposition.01"] = V3NOT_RECORDED;
                E20.E20_01 =  V2NOT_RECORDED;
            }            
            else
            {
                _retArray.push("<eDisposition.01" + NIL_V3NOT_REPORTING );
                DestinationGroup["eDisposition.01"] = v3NOT_REPORTING;
                E20.E20_01  =  v2NOT_REPORTING;
            }
        }
        else 
        {
            DestinationGroup["eDisposition.01"] = _val[0];
            E20.E20_01 = _val[0];
            _retArray.push("<eDisposition.01>" + _val[0] + "</eDisposition.01>");
        }; 

        //eDisposition.02////////////////
        _val = getValue(businessObject.elements, "eDisposition.02");
        if (_val == null)
        {
            if(isRequiredStateElement("eDisposition.02"))
            {
                _retArray.push("<eDisposition.02" + NIL_V3NOT_RECORDED );
                DestinationGroup["eDisposition.02"] = V3NOT_RECORDED;
                E20.E20_02 =  V2NOT_RECORDED;
            }            
            else
            {
                _retArray.push("<eDisposition.02" + NIL_V3NOT_REPORTING );
                DestinationGroup["eDisposition.02"] = v3NOT_REPORTING;
                E20.E20_02  =  v2NOT_REPORTING;
            }
        }
        else 
        {
            DestinationGroup["eDisposition.02"] = _val[0];
            E20.E20_02 = _val[0];
            _retArray.push("<eDisposition.02>" + _val[0] + "</eDisposition.02>");
        }; 

        //eDisposition.03////////////
        _val = getValue(businessObject.elements, "eDisposition.03");
        if (_val == null)
        {
            if(isRequiredStateElement("eDisposition.03"))
            {
                _retArray.push("<eDisposition.03" + NIL_V3NOT_RECORDED );
                DestinationGroup["eDisposition.03"] = V3NOT_RECORDED;
                E20.E20_03 =  V2NOT_RECORDED;
            }            
            else
            {
                _retArray.push("<eDisposition.03" + NIL_V3NOT_REPORTING );
                DestinationGroup["eDisposition.03"] = v3NOT_REPORTING;
                E20.E20_03  =  v2NOT_REPORTING;
            }
        }
        else 
        {
            DestinationGroup["eDisposition.03"] = _val[0];
            E20.E20_03 = _val[0];
            _retArray.push("<eDisposition.03>" + _val[0] + "</eDisposition.03>");
        }; 

        //eDisposition.04////////////        
        _val = getValue(businessObject.elements, "eDisposition.04");
        if (_val == null)
        {
            if(isRequiredStateElement("eDisposition.04"))
            {
                _retArray.push("<eDisposition.04" + NIL_V3NOT_RECORDED );
                DestinationGroup["eDisposition.04"] = V3NOT_RECORDED;
                E20.E20_04 =  V2NOT_RECORDED;
            }            
            else
            {
                _retArray.push("<eDisposition.04" + NIL_V3NOT_REPORTING );
                DestinationGroup["eDisposition.04"] = v3NOT_REPORTING;
                E20.E20_04  =  v2NOT_REPORTING;
            }
        }
        else 
        {
            DestinationGroup["eDisposition.04"] = _val[0];
            E20.E20_04 = _val[0];
            _retArray.push("<eDisposition.04>" + _val[0] + "</eDisposition.04>");
        }; 
        
        //eDisposition.05////////////
        _val = getValue(businessObject.elements, "eDisposition.05");
        if (_val == null) 
        {
            _retArray.push("<eDisposition.05" + NIL_V3NOT_RECORDED);
            E20.E20_05= v2NOT_RECORDED;
            DestinationGroup["eDisposition.05"] =V3NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.05>" + _val[0] + "</eDisposition.05>")
            E20.E20_05 = _val[0];
            DestinationGroup["eDisposition.05"] = _val[0];
        };

        //eDisposition.06//////////
        _val = getValue(businessObject.elements, "eDisposition.06");
        if (_val == null) 
        {
            _retArray.push("<eDisposition.06" + NIL_V3NOT_RECORDED);
            E20.E20_06= v2NOT_RECORDED;
            DestinationGroup["eDisposition.06"] =V3NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.06>" + _val[0] + "</eDisposition.06>")
            E20.E20_06 = _val[0];
            DestinationGroup["eDisposition.06"] = _val[0];
        };

        //eDisposition.07////////////
        _val = getValue(businessObject.elements, "eDisposition.07");
        if (_val == null) 
        {
            _retArray.push("<eDisposition.07" + NIL_V3NOT_RECORDED);
            E20.E20_07= v2NOT_RECORDED;
            DestinationGroup["eDisposition.07"] =V3NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.07>" + _val[0] + "</eDisposition.07>")
            E20.E20_07 = _val[0];
            DestinationGroup["eDisposition.07"] = _val[0];
        };

        //eDisposition.07//////////
        _val = getValue(businessObject.elements, "eDisposition.08");
        if (_val == null) 
        {
        }
        else {
            _retArray.push("<eDisposition.08>" + _val[0] + "</eDisposition.08>")
            DestinationGroup["eDisposition.08"] = _val[0];
        };

        //eDisposition.09////////////
        _val = getValue(businessObject.elements, "eDisposition.09");
        if (_val == null) 
        {
        }
        else 
        {
            _retArray.push("<eDisposition.09>" + _val[0] + "</eDisposition.09>")
            E20.E20_08 = _val[0];
            DestinationGroup["eDisposition.09"] = _val[0];
        };

        //eDisposition.10//////////////
        _val = getValue(businessObject.elements, "eDisposition.10");
        if (_val == null) 
        {
        }
        else {
            _retArray.push("<eDisposition.10>" + _val[0] + "</eDisposition.10>")
            DestinationGroup["eDisposition.10"] = _val[0];
        };

        _retArray.push = "</DestinationGroup>";

        //eDisposition.11//////////////
        _val = getValue(businessObject.elements, "eDisposition.11");
        if (_val == null) 
        {
            _retArray.push("<eDisposition.11" + NIL_V3NOT_RECORDED);
            eDisposition["eDisposition.11"] =V3NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.11>" + _val[0] + "</eDisposition.11>")
            eDisposition["eDisposition.11"] = _val[0];
        };

        //eDisposition.12/////////////
        _val = getValue(businessObject.elements, "eDisposition.12");
        if (_val == null) {
            _retArray.push("<eDisposition.12" + NIL_V3NOT_RECORDED);
            E20.E20_10= v2NOT_RECORDED;
            eDisposition["eDisposition.12"] =V3NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.12>" + _val[0] + "</eDisposition.12>")
            E20.E20_10 = SetD2("eDisposition.12",_val[0]);
            eDisposition["eDisposition.12"] = _val[0];
        };

        //eDisposition.13/////////////
        _val = getValue(businessObject.elements, "eDisposition.13");
        if (_val == null) 
        {
            E20.E20_11 = v2NOT_KNOWN;
        }
        else {
            _retArray.push("<eDisposition.13>" + _val[0] + "</eDisposition.13>")
            E20.E20_11 = SetD2("eDisposition.13",_val[0]);
            eDisposition["eDisposition.13"] = _val[0];
        };

        //eDisposition.14/////////////
        _val = getValue(businessObject.elements, "eDisposition.14");
        if (_val == null) 
        {
            E20.E20_12 =v2NOT_KNOWN;
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1[i]=_val[i];
                arr2[i] = SetV2("eDisposition.14", _val[i]);
                _retArray.push("<eDisposition.14>" + _val[i] + "</eDisposition.14>");
            }
            eDisposition["eDisposition.14"] = arr1.slice(0);
            E11.E11_06 = arr2.slice(0);
        };


        //eDisposition.15/////////////
        _val = getValue(businessObject.elements, "eDisposition.15");
        if (_val == null) 
        {
            E20.E20_15 =v2NOT_KNOWN;
        }
        else {
            _retArray.push("<eDisposition.15>" + _val[0] + "</eDisposition.15>")
            E20.E20_13 = SetD2("eDisposition.15",_val[0]);
            eDisposition["eDisposition.15"] = _val[0];
        };

        //eDisposition.16/////////////
        _val = getValue(businessObject.elements, "eDisposition.16");
        if (_val == null) {

            _retArray.push("<eDisposition.16" + NIL_V3NOT_RECORDED);
            eDisposition["eDisposition.16"] =V3NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.16>" + _val[0] + "</eDisposition.16>")
            eDisposition["eDisposition.16"] = _val[0];
        };


        //eDisposition.17/////////////
        _val = getValue(businessObject.elements, "eDisposition.17");
        if (_val == null) {
            ErrorList.push("eDisposition.17 required");
            _retArray.push("<eDisposition.17" + NIL_V3NOT_RECORDED);
            eDisposition["eDisposition.17"] =V3NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.17>" + _val[0] + "</eDisposition.17>")
            E20.E20_14 = SetD2("eDisposition.17",_val[0]);
            eDisposition["eDisposition.17"] = _val[0];
        };

        //eDisposition.18/////////////
        _val = getValue(businessObject.elements, "eDisposition.18");
        if (_val == null) 
        {
            _retArray.push("<eDisposition.18" + NIL_V3NOT_RECORDED);
            eDisposition["eDisposition.18"] =V3NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.18>" + _val[0] + "</eDisposition.18>")
            eDisposition["eDisposition.18"] = _val[0];
        };

        //eDisposition.19/////////////
        _val = getValue(businessObject.elements, "eDisposition.19");
        if (_val == null) 
        {
            _retArray.push("<eDisposition.19" + NIL_V3NOT_RECORDED);
            eDisposition["eDisposition.19"] =V3NOT_RECORDED;
            E20.E20_15= v2NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.19>" + _val[0] + "</eDisposition.19>")
            E20.E20_15 = SetD2("eDisposition.19",_val[0]);
            eDisposition["eDisposition.19"] = _val[0];
        };


        //eDisposition.20/////////////
        _val = getValue(businessObject.elements, "eDisposition.20");
        if (_val == null) 
        {         
            _retArray.push("<eDisposition.20" + NIL_V3NOT_RECORDED);
            eDisposition["eDisposition.20"] =V3NOT_RECORDED;
            E20.E20_16= v2NOT_RECORDED;

        }
        else {
            _retArray.push("<eDisposition.20>" + _val + "</eDisposition.20>")
            E20.E20_16 = SetD2("eDisposition.20",_val);
            eDisposition["eDisposition.20"] = _val;
        };

        //eDisposition.21/////////////
        _val = getValue(businessObject.elements, "eDisposition.21");
        if (_val == null) 
        {
            _retArray.push("<eDisposition.21" + NIL_V3NOT_RECORDED);
            eDisposition["eDisposition.21"] =V3NOT_RECORDED;
            E20.E20_17= v2NOT_RECORDED;

        }
        else {
            _retArray.push("<eDisposition.21>" + _val[0] + "</eDisposition.21>")
            E20.E20_17 = SetD2("eDisposition.21",_val[0]);
            eDisposition["eDisposition.21"] = _val[0];
        };

        //eDisposition.22/////////////
        _val = getValue(businessObject.elements, "eDisposition.22");
        if (_val == null) 
        {        
            _retArray.push("<eDisposition.22" + NIL_V3NOT_RECORDED);
            eDisposition["eDisposition.22"] =V3NOT_RECORDED;

        }
        else 
        {
            _retArray.push("<eDisposition.22>" + _val[0] + "</eDisposition.22>")
            eDisposition["eDisposition.22"] = _val[0];
        };

        //eDisposition.23/////////////
        _val = getValue(businessObject.elements, "eDisposition.23");
        if (_val == null) 
        {         
            _retArray.push("<eDisposition.23" + NIL_V3NOT_RECORDED);
            eDisposition["eDisposition.23"] =V3NOT_RECORDED;
        }
        else {
            _retArray.push("<eDisposition.23>" + _val[0] + "</eDisposition.23>")
            eDisposition["eDisposition.23"] = _val[0];
        };

      
        //eDisposition.26////////////////
        _val = getValue(businessObject.elements, "eDisposition.26");
        if (_val == null) 
        {

        }
        else {
            _retArray.push("<eDisposition.26>" + _val + "</eDisposition.26>")
            eDisposition["eDisposition.26"] = _val;
        };


        _retArray.push("</eDisposition>");
    };    //end of function   

    var SetHospitalTeamActivationGroup = function (groupObject)
    {
        for (var i = 0; i < businessObject ; i++)
        {
            _retArray.push = "<HospitalTeamActivationGroup>";
            
            //eDisposition.24/////////////
            _val = getValue(businessObject.elements, "eDisposition.24");
            if (_val == null) 
            {         
                _retArray.push("<eDisposition.24" + NIL_V3NOT_RECORDED);
                eDisposition["eDisposition.24"] =V3NOT_RECORDED;
            }
            else {
                _retArray.push("<eDisposition.24>" + _val[0] + "</eDisposition.24>")
                eDisposition["eDisposition.24"] = _val[0];
            };

            //eDisposition.25//////////////
            _val = getValue(businessObject.elements, "eDisposition.25");
            if (_val == null) 
            {         
                _retArray.push("<eDisposition.25" + NIL_V3NOT_RECORDED);
                eDisposition["eDisposition.25"] =V3NOT_RECORDED;
            }
            else {
                _retArray.push("<eDisposition.25>" + _val[0] + "</eDisposition.25>")
                eDisposition["eDisposition.25"] = _val[0];
            };


            _retArray.push = "</HospitalTeamActivationGroup>";
        }
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

    
    function SetNotApplicable() 
    {
        DestinationGroup["eDisposition.01"] = V3NOT_APPLICABLE
        E20.E20_01 = v2NOT_APPLICABLE;
        _retArray.push("<eDisposition.01" + NIL_V3NOT_APPLICABLE );

        DestinationGroup["eDisposition.02"] = V3NOT_APPLICABLE
        E20.E20_02 = v2NOT_APPLICABLE;
        _retArray.push("<eDisposition.02" + NIL_V3NOT_APPLICABLE );

        DestinationGroup["eDisposition.03"] = null
        E20.E20_03 = v2NOT_APPLICABLE;
        
        DestinationGroup["eDisposition.04"] = null
        E20.E20_04 = v2NOT_APPLICABLE;

        DestinationGroup["eDisposition.05"] = V3NOT_APPLICABLE
        E20.E20_05  = v2NOT_APPLICABLE;
        _retArray.push("<eDisposition.05" + NIL_V3NOT_APPLICABLE );

        DestinationGroup["eDisposition.06"] = V3NOT_APPLICABLE
        E20.E20_06 = v2NOT_APPLICABLE;
        _retArray.push("<eDisposition.06" + NIL_V3NOT_APPLICABLE );

        DestinationGroup["eDisposition.07"] = V3NOT_APPLICABLE
        E20.E20_07 = v2NOT_APPLICABLE;
        _retArray.push("<eDisposition.07" + NIL_V3NOT_APPLICABLE );

        eDisposition["eDisposition.11"] = V3NOT_APPLICABLE      
        _retArray.push("<eDisposition.11" + NIL_V3NOT_APPLICABLE );

        eDisposition["eDisposition.16"] = V3NOT_APPLICABLE      
        _retArray.push("<eDisposition.16" + NIL_V3NOT_APPLICABLE );

        E20.E20_11 = v2NOT_APPLICABLE;
        E20.E20_12 = v2NOT_APPLICABLE;
        E20.E20_13 = v2NOT_APPLICABLE;

        eDisposition["eDisposition.17"] = V3NOT_APPLICABLE
        E20.E20_14 = v2NOT_APPLICABLE;
        _retArray.push("<eDisposition.17" + NIL_V3NOT_APPLICABLE );

        eDisposition["eDisposition.18"] = V3NOT_APPLICABLE
        _retArray.push("<eDisposition.18" + NIL_V3NOT_APPLICABLE );
        
        eDisposition["eDisposition.19"] = V3NOT_APPLICABLE
        E20.E20_15 = v2NOT_APPLICABLE;
        _retArray.push("<eDisposition.19" + NIL_V3NOT_APPLICABLE );

        eDisposition["eDisposition.20"] = V3NOT_APPLICABLE
        E20.E20_16 = v2NOT_APPLICABLE;
        _retArray.push("<eDisposition.20" + NIL_V3NOT_APPLICABLE );

        eDisposition["eDisposition.21"] = V3NOT_APPLICABLE
        E20.E20_17 = v2NOT_APPLICABLE;
        _retArray.push("<eDisposition.21" + NIL_V3NOT_APPLICABLE );

        eDisposition["eDisposition.22"] = V3NOT_APPLICABLE
        _retArray.push("<eDisposition.22" + NIL_V3NOT_APPLICABLE );

        eDisposition["eDisposition.23"] = V3NOT_APPLICABLE
        _retArray.push("<eDisposition.23" + NIL_V3NOT_APPLICABLE );

        eDisposition["eDisposition.24"] = V3NOT_APPLICABLE
        _retArray.push("<eDisposition.24" + NIL_V3NOT_APPLICABLE );

        eDisposition["eDisposition.25"] = V3NOT_APPLICABLE
        _retArray.push("<eDisposition.25" + NIL_V3NOT_APPLICABLE );

    };

    function setD2(NEMSISElementNumber, valueArray) {
        //    console.log(NEMSISElementNumber);
        var _retArray = [];
        //    console.log(valueArray);
        switch (NEMSISElementNumber) {
            case "eDisposition.12":

                if (eDisposition12[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition12[valueArray[0]]);
                }
                break;
            case "eDisposition.13":
                for (i = 0; i < valueArray.length; i++) {
                    if (eDisposition13[valueArray[i]] == undefined) {
                        _retArray.push(valueArray[i] + "UNDEFINED");
                    }
                    else {
                        _retArray.push(eDisposition13[valueArray[i]]);
                    }
                }
                break;
            case "eDisposition.14":

                if (eDisposition14[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition14[valueArray[0]]);
                }
                break;

            case "eDisposition.15":

                if (eDisposition15[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition15[valueArray[0]]);
                }
                break;
                
            case "eDisposition.17":

                if (eDisposition17[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition17[valueArray[0]]);
                }
                break;

                
            case "eDisposition.19":

                if (eDisposition19[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition19[valueArray[0]]);
                }
                break;

            case "eDisposition.20":

                if (eDisposition20[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition20[valueArray[0]]);
                }
                break;

                
            case "eDisposition.21":

                if (eDisposition21[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition21[valueArray[0]]);
                }
                break;
            default:
                _retArray.push(NEMSISElementNumber = " version 2 not found");
        }

        return _retArray;

    }
    var eDisposition12 = {
        "4212001":"4845",
        "4212003":"4850",
        "4212005":"4845",
        "4212007":"4815",
        "4212009":"4815",
        "4212011":"4825",
        "4212013":"4820",
        "4212015":"4820",
        "4212017":"4820",
        "4212019":"4820",
        "4212021":"4830",
        "4212023":"4835",
        "4212025":"4835",
        "4212027":"4840",
        "4212029":"4840",
        "4212031":"4845",
        "4212033":"4850",
        "4212035":"4855",
        "4212037":"4860",
        "4212039":"4830",
        "4212041":"4830",
        "4212043":"4830"
    };

    var eDisposition13 = {
        "9909001":"4865",
        "9909003":"4885",
        "9909005":"4885",
        "9909007":"4870",
        "9909009":"4885",
        "9909011":"4875",
        "9909013":"4880",
        "9909015":"4885"
    };

    var eDisposition14 = {
        "4214001":"4890",
        "4214003":"4895",
        "4214005":"4900",
        "4214007":"4900",
        "4214009":"4925",
        "4214011":"4905",
        "4214013":"4910",
        "4214015":"4915",
        "4214017":"4920",
        "4214019":"4925"
    };

    var eDisposition15 = {
        "9909001":"4930",
        "9909003":"4950",
        "9909005":"4950",
        "9909007":"4935",
        "9909009":"4950",
        "9909011":"4940",
        "9909013":"4945",
        "9909015":"4950""

};

var eDisposition17 = {
    "4217001":"4965",
    "4217003":"4955",
    "4217005":"4970",
    "4217007":"4960"
};

var eDisposition19 = {
    "9916001":"4975",
    "9916003":"4980",
    "9916005":"4985"
}

var eDisposition20 = {
    "4220001":"4990",
    "4220003":"4995",
    "4220005":"5000",
    "4220007":"5005",
    "4220009":"5010",
    "4220011":"5015",
    "4220013":"5020",
    "4220015":"5025",
    "4220017":"5030",
    "4220019":"5035",
    "4220021":"5040"
};

var eDisposition21 = {
    "4221001":"7270",
    "4221003":"7280",
    "4221005":"7290",
    "4221007":"7290",
    "4221009":"7300",
    "4221011":"7310",
    "4221013":"7330",
    "4221015":"7340",
    "4221017":"7350",
    "4221019":"7360"
}

    // JavaScript source code

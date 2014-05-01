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
var PN_NONE_REPORTED = "xsi:nil=\"true\" PN=\"8801015\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";
var PN_NO_KNOWN_DRUG_ALLERGY = "xsi:nil=\"true\" PN=\"8801013\"/>";	
var PN_UNRESPONSIVE = "xsi:nil=\"true\" PN=\"8801021\"/>";	
var FAX= "PhoneNumberType=\"9913001\"";
var HOME= "PhoneNumberType=\"9913003\"";
var MOBILE= "PhoneNumberType=\"9913005\"";
var PAGER= "PhoneNumberType=\"9913007\"";
var WORD= "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL= "EmailAddressType=\"9904001\"";
var WORKEMAIL= "EmailAddressType=\"9904003\"";
var ICD10_CODE_TYPE = "CodeType=\"9924001\"";
var RXNORM_CODE_TYPE = "CodeType=\"9924003\"";


var _retArray = [];


var seteDispatch = function (businessObject) {
    alert("NEED v2 NOTS");

    console.log(isDefined("eDispatch")); 
    return;
    var _retArray = [];

    console.log(businessObject);

    _retArray.push = "<eDispatch>";
    _val = getValue(businessObject.elements, "eDispatch.01");
    if (_val == null) {
        ErrorList.push("eDispatch.01 required");
        _retArray.push("<eDispatch.01" + NIL_V3NOT_RECORDED);
        E03.E03_01 = v2NOT_RECORDED;
        eDispatch["eDispatch.01"] =V3NOT_RECORDED;
    }
    else {
        _retArray.push("<eDispatch.01>" + _val[0] + "</eDispatch.01>")
        E12E03.E03_01= SetD2("eDispatch.01", _val[0]);
        eDispatch["eDispatch.01"] = _val[0];
    };


    _val = getValue(businessObject.elements, "eDispatch.02");
    if (_val == null)
    {
        if (isRequiredStateElement("eDispatch.02"))
        {
            _retArray.push("<eDispatch.02" + NIL_V3NOT_RECORDED);
            eDispatch["eDispatch.02"] = V3NOT_RECORDED;
            E03.E03_02 = V2NOT_RECORDED;

        }
        else {
            _retArray.push("<eDispatch.02" + NIL_V3NOT_REPORTING);
            eDispatch["eDispatch.02"] = v3NOT_REPORTING;
            E03.E03_02 = v2NOT_REPORTING;
        }

    }
    else 
    {
        eDispatch["eDispatch.02"] = _val[0];
        E03.E03_02  = SetD2("eDispatch.02",_val[0]);
        _retArray.push("<eDispatch.02>" + _val[0] + "</eDispatch.02>");
    }; 


    _val = getValue(businessObject.elements, "eDispatch.03");
    if (_val == null)
    {    
    }
    else 
    {
        eDispatch["eDispatch.03"] = _val[0];
        E03.E03_03  = val[0];
        _retArray.push("<eDispatch.03>" + _val[0] + "</eDispatch.03>");
    }; 

    
    _val = getValue(businessObject.elements, "eDispatch.04");
    if (_val == null)
    {    
    }
    else 
    {
        eDispatch["eDispatch.04"] = _val[0];
        _retArray.push("<eDispatch.04>" + _val[0] + "</eDispatch.04>");
    }; 

    _val = getValue(businessObject.elements, "eDispatch.05");
    if (_val == null)
    {    
    }
    else 
    {
        eDispatch["eDispatch.05"] = _val[0];
        _retArray.push("<eDispatch.05>" + _val[0] + "</eDispatch.05>");
    }; 


    _retArray.push("</eDispatch>")

};
var setNotApplicable = function (elementID) {

    _retArray.push("<eDispatch.02" + NIL_V3NOT_APPLICABLE);
    eAirway["eDispatch.02"] = v3NOT_APPLICABLE;
    E03.E03_02 = v2NOT_APPLICABLE;

    return _retArray;
};


////////////////////////////////////////////////////
    var isRequiredStateElement = function(elementID)
    {
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
    };

    function setD2(NEMSISElementNumber, valueArray) {
        //    console.log(NEMSISElementNumber);
        var _retArray = [];
        //    console.log(valueArray);
        switch (NEMSISElementNumber) {
            case "eDispatch.01":

                if (eDispatch01[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDispatch01[valueArray[0]]);
                }
                break;

            case "eDispatch.02":

                if (eDispatch02[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDispatch02[valueArray[0]]);
                }
                break;

            default:
                _retArray.push(NEMSISElementNumber = " version 2 not found");
        }

        return _retArray;

    }

    var eDispatch01 = {
    "2301001":"400",
    "2301003":"405",
    "2301005":"410",
    "2301007":"415",
    "2301009":"540",
    "2301011":"420",
    "2301013":"425",
    "2301015":"430",
    "2301017":"435",
    "2301019":"440",
    "2301021":"445",
    "2301023":"450",
    "2301025":"455",
    "2301027":"460",
    "2301029":"470",
    "2301031":"475",
    "2301033":"480",
    "2301035":"-10",
    "2301037":"485",
    "2301039":"560",
    "2301041":"490",
    "2301043":"495",
    "2301045":"500",
    "2301047":"505",
    "2301049":"-10",
    "2301051":"-10",
    "2301053":"510",
    "2301057":"515",
    "2301059":"520",
    "2301061":"	525",
    "2301063":"530",
    "2301065":"-10",
    "2301067":"535",
    "2301069":"540",
    "2301071":"560",
    "2301073":"545",
    "2301075":"-10",
    "2301077":"550",
    "2301079":"555",
    "2301081":"465",
    "2301083":"-10"
    };
var eDispatch02 = {
   "2302001":"0",
   "2302003":"570",
   "2302005":"575",
   "2302007":"575"
};

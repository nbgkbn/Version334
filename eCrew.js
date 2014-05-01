var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED = "NV=\"7701003\" xsi:nil=\"true\"/>";
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>";
var NIL_V3NOT_APPLICABLE = "NV=\"7701001\" xsi:nil=\"true\"/>";
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";
var FAX = "PhoneNumberType=\"9913001\"";
var HOME = "PhoneNumberType=\"9913003\"";
var MOBILE = "PhoneNumberType=\"9913005\"";
var PAGER = "PhoneNumberType=\"9913007\"";
var WORD = "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL = "EmailAddressType=\"9904001\"";
var WORKEMAIL = "EmailAddressType=\"9904003\"";


var seteCrew = function (businessObject) {
    console.log(isDefined("Crew"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];


    if (typeof businessObject == undefined) {
        SetNotApplicable();
    }
    for (var i = 0; i < businessObject ; i++)
    {

        console.log(businessObject);
        _retArray.push = "<CrewGroup>";
        _val = getValue(businessObject.elements, "eCrew.01");
        if (_val == null)
        {
            if(isRequiredStateElement("eCrew.01"))
            {
                _retArray.push("<eCrew.01" + NIL_V3NOT_RECORDED );
                eCrew["eCrew.01"] = V3NOT_RECORDED;
                E04.E04_01 =  V2NOT_RECORDED;
            }            
            else
            {
                _retArray.push("<eCrew.01" + NIL_V3NOT_REPORTING );
                eCrew["eCrew.01"] = v3NOT_REPORTING;
                E04.E04_01  =  v2NOT_REPORTING;
            }
        }
        else 
        {
            eCrew["eCrew.01"] = _val[0];
            E04.E04_01 = _val[0] ;
            _retArray.push("<eCrew.01>" + _val[0] + "</eCrew.06>");
        }; 



        _val = getValue(businessObject.elements, "eCrew.02");
        if (_val == null) {
            ErrorList.push("eCrew.02 required");
            E04.E04_01 = v2NOT_RECORDED;
            _retArray.push("<eCrew.02" + NIL_V3NOT_RECORDED);
            eArrest["eCrew.02"] = v3NOT_RECORDED;

        }
        else {
            eArrest["eCrew.02"] = _val[0];
            E04.E04_01 = SetV2("eCrew.02", _val[0]);
            _retArray.push("<eCrew.02>" + val[0] + "</eCrew.02>");
        };


        _val = getValue(businessObject.elements, "eCrew.03");
        if (_val == null) {
            ErrorList.push("eCrew.03 required");
            E04.E04_01 = v2NOT_RECORDED;
            _retArray.push("<eCrew.03" + NIL_V3NOT_RECORDED);
            eArrest["eCrew.03"] = v3NOT_RECORDED;

        }
        else {
            eArrest["eCrew.03"] = _val[0];
            E04.E04_01 = SetV2("eCrew.03", _val[0]);
            _retArray.push("<eCrew.03>" + val + "</eCrew.03>");
        };



    };

    var setNotApplicable = function (elementID) {

        _retArray.push("<eCrew.01" + NIL_V3NOT_APPLICABLE);
        eCrew["eCrew.01"] = v3NOT_APPLICABLE;
        E04.E04_01 = v2NOT_APPLICABLE;

        _retArray.push("<eCrew.02" + NIL_V3NOT_APPLICABLE);
        eCrew["eCrew.02"] = v3NOT_APPLICABLE;
        E04.E04_03 = v2NOT_APPLICABLE;

        _retArray.push("<eCrew.03" + NIL_V3NOT_APPLICABLE);
        eCrew["eCrew.03"] = v3NOT_APPLICABLE;
        E04.E04_02 = v2NOT_APPLICABLE;
    };
    ////////////////////////////////////////////////////
    var isRequiredStateElement = function (elementID) {
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
            case "eCrew.01":

                if (eCrew02[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eCrew01[valueArray[0]]);
                }
                break;
            case "eCrew.02":
                for (i = 0; i < valueArray.length; i++) {
                    if (eCrew02[valueArray[i]] == undefined) {
                        _retArray.push(valueArray[i] + "UNDEFINED");
                    }
                    else {
                        _retArray.push(eCrew02[valueArray[i]]);
                    }
                }
                break;
            case "eCrew.03":
                if (eCrew03[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eCrew03[valueArray[0]]);
                }
                break;

            default:
                _retArray.push(NEMSISElementNumber = " version 2 not found");
        }

        return _retArray;


var eCrew03 = {
    "2403001":"580",
    "2403003":"580",
    "2403005":"595",
    "2403007":"590",
    "2403009":"600",	
    "2403011":"585",
    "2403013":"590"	};	
	
var eCrew02 = {
    "9925001":"6110",
    "9925003":"6100",
    "9925005":"6090",
    "9925007":"6110",
    "9925013":"	6120",
    "9925015":"	6090",
    "9925017":"	6100",
    "9925019":"	6110",
    "9925021":"	6111",
    "9925023":"	640",
    "9925025":"	645",
    "9925027":"	6112",
    "9925031":"635",
    "9925033":"6110",
    "9925034":"610",
    "9925037":"611"}

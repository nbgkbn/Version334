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


var eP = new Object;
var D01 = new Object;

var _retArray = [];
var V2XMLArray = [];

_retArray.push = "<eHistory>";

var seteHistory = function (businessObject)
{
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
    }

    if(typeof businessObject["eHistory"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["eHistory"].length);

        //eHistory.01//////////////
        _val = getValue(businessObject.elements, "eHistory.01");
        if (_val == null) {
            _retArray.push("<eHistory.01" + NIL_V3NOT_RECORDED);
            E21.E21_01 = v2NOT_RECORDED;
            eHistory["eHistory.01"] =V3NOT_RECORDED;
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1[i]=_val[i];
                arr2[i] = SetV2("eHistory.01", _val[i]);
                _retArray.push("<eHistory.01>" + val[i] + "</eHistory.01>");
            }
            eHistory["eHistory.01"] =  arr1.slice(0);
            E12.E12_01 = arr2.slice(0);

        };

        //eHistory.05//////////
        _val = getValue(businessObject.elements, "eHistory.05");
        if (_val == null)
        {
            if (isRequiredStateElement("eHistory.05"))
            {
                _retArray.push("<eHistory.05" + NIL_V3NOT_RECORDED);
                eHistory["eHistory.05"] = V3NOT_RECORDED;
                E12.E12_07 = V2NOT_RECORDED;

            }
            else {
                _retArray.push("<eHistory.05" + NIL_V3NOT_REPORTING);
                eHistory["eHistory.05"] = v3NOT_REPORTING;
                E12.E12_07 = v2NOT_REPORTING;
            }

        }
        else
        {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _val.length; i++)
                    {
                        arr1[i]=_val[i];
                        arr2[i] = SetV2("eHistory.05", _val[i]);
                        _retArray.push("<eHistory.05>" + val[i] + "</eHistory.05>");
                    }
                    eHistory["eHistory.05"] =  arr1.slice(0);
                    E12.E12_07 = arr2.slice(0);
        };

        //eHistory.06///////////////
        _val = getValue(businessObject.elements, "eHistory.06");
        if (_val == null)
        {
            if (isRequiredStateElement("eHistory.06"))
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eHistory.06" + PN_REFUSED_IS_NILLABLE);
                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eHistory.06" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                }
                else if (_val[0] == 8801013)
                {
                    _retArray.push("<eHistory.06" + PN_NO_KNOWN_DRUG_ALLERGY);
                }
                else
                {
                    _retArray.push("<eHistory.06" + NIL_V3NOT_RECORDED );
                    eHistory["eHistory.06"] = v3NOT_RECORDED;
                    E12.E12_08 = v2NOT_REPORTING;
                }
            }
            else
            {
                _retArray.push("<eHistory.06" + NIL_V3NOT_REPORTING );
                eHistory["eHistory.06"] = v3NOT_REPORTING;
                E12.E12_08 = v2NOT_RECORDED;
            }
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1[i]=_val[i];
                arr2[i] = SetV2("eHistory.05", _val[i]);
                if(_codeType =+ "9924001")
                {
                    _retArray.push("<eHistory.06" + ICD10_CODE_TYPE + ">" + val[i] + "</eHistory.06>");
                }
                else if(_codeType =+ "9924003")
                {
                    _retArray.push("<eHistory.06" + RXNORM_CODE_TYPE+ ">" + val[i] + "</eHistory.06>");}
                else
                {
                    _retArray.push("<eHistory.06>" + val[i] + "</eHistory.06>");
                }
            }
            eHistory["eHistory.06"] =  arr1.slice(0);
            E12.E12_08 = arr2.slice(0);
        };

        //eHistory.07/////////////
        _val = getValue(businessObject.elements, "eHistory.07");

        if (_val == null)
        {

        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1[i]=_val[i];
                arr2[i] = SetV2("eHistory.07", _val[i]);
                _retArray.push("<eHistory.07>" + val[i] + "</eHistory.07>");
            }
            eHistory["eHistory.07"] =  arr1.slice(0);
            E12.E12_07 = arr2.slice(0);
       };



        _val = getValue(businessObject.elements, "eHistory.08");
        if (_val == null)
        {
            if (isRequiredStateElement("eHistory.08"))
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eHistory.06" + PN_REFUSED_IS_NILLABLE);
                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eHistory.08" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                }
                else if (_val[0] == 8801015)
                {
                    _retArray.push("<eHistory.08" + PN_NONE_REPORTED);
                }
                else if(_val[0] == 8801021)
                {
                    _retArray.push("<eHistory.08" + PN_UNRESPONSIVE);
                }

                else
                {
                    _retArray.push("<eHistory.08" + NIL_V3NOT_RECORDED );
                    eHistory["eHistory.08"] = v3NOT_RECORDED;
                    E12.E12_10 = v2NOT_REPORTING;
                }
            }
            else
            {
                _retArray.push("<eHistory.08" + NIL_V3NOT_REPORTING );
                eHistory["eHistory.08"] = v3NOT_REPORTING;
                E12.E12_10 = v2NOT_RECORDED;
            }
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1[i]=_val[i];
                arr2[i] = SetV2("eHistory.08", _val[i]);
                _retArray.push("<eHistory.08>" + val[i] + "</eHistory.08>");
            }
            eHistory["eHistory.08"] =  arr1.slice(0);
            E12.E12_10 = arr2.slice(0);
        };



        //eHistory.09//////////
        _val = getValue(businessObject.elements, "eHistory.09");
        if (_val == null)
        {
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1[i]=_val[i];
                arr2[i] = SetV2("eHistory.09", _val[i]);
                _retArray.push("<eHistory.09>" + val[i] + "</eHistory.09>");
            }
            eHistory["eHistory.09"] =  arr1.slice(0);
            E12.E12_11 = arr2.slice(0);
        };


        //eHistory.15////////////
        _val = getValue(businessObject.elements, "eHistory.15");
        if (_val == null) {
        }
        else {
            _retArray.push("<eHistory.15>" + _val[0] + "</eHistory.15>")
            E12.E12_16 = SetD2("eHistory.15", _val[0]);
            eHistory["eHistory.15"] = _val[0];
        };


        //eHistory.16/////////////////
        _val = getValue(businessObject.elements, "eHistory.16");
        if (_val == null) {
        }
        else {
            _retArray.push("<eHistory.16>" + _val[0] + "</eHistory.16>")
            E12.E12_16 = SetD2("eHistory.16", _val[0]);
            eHistory["eHistory.16"] = _val[0];
        };


        //eHistory.17/////////////
        _val = getValue(businessObject.elements, "eHistory.17");
        if (_val == null) {
            if (isRequiredStateElement("eHistory.17")) {
                if (_val[0] == 8801019) {
                    _retArray.push("<eHistory.17" + PN_REFUSED_IS_NILLABLE);
                }
                else if (_val[0] == 8801023) {
                    _retArray.push("<eHistory.17" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                }
                else if (_val[0] == 8801015) {
                    _retArray.push("<eHistory.17" + PN_NONE_REPORTED);
                }
                else if (_val[0] == 8801019) {
                    _retArray.push("<eHistory.17" + PN_REFUSED_IS_NILLABLE);
                }
                else {
                    _retArray.push("<eHistory.17" + NIL_V3NOT_RECORDED);
                    eHistory["eHistory.17"] = v3NOT_RECORDED;
                    E12.E12_19 = v2NOT_REPORTING;
                }
            }
            else {
                _retArray.push("<eHistory.17" + NIL_V3NOT_REPORTING);
                eHistory["eHistory.17"] = v3NOT_REPORTING;
                E12.E12_19 = v2NOT_RECORDED;
            }
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1[i]=_val[i];
                arr2[i] = SetV2("eHistory.17", _val[i]);
                _retArray.push("<eHistory.17>" + val[i] + "</eHistory.17>");
            }
            eHistory["eHistory.17"] =  arr1.slice(0);
            E12.E12_19 = arr2.slice(0);

        };

        //eHistory.18//////////////
        _val = getValue(businessObject.elements, "eHistory.18");
        if (_val == null) {

            if (_val[0] == 8801019)
            {
                _retArray.push("<eHistory.18" + PN_REFUSED_IS_NILLABLE);
            }
            else (_val[0] == 8801023)
            {
                _retArray.push("<eHistory.18" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
            }
        }
        else {
            eHistory["eHistory.18"] = _val[0];
            E12.E12_19 = D2Val("eHistory.18", _val[0]);
            _retArray.push("<eHistory.18>" + _val[0] + "</eHistory.18>");
        }


        _val = getValue(businessObject.elements, "eHistory.18");
        if (_val == null) {

        }
        else {
            eHistory["eHistory.19"] = _val[0];
            _retArray.push("<eHistory.19>" + _val[0] + "</eHistory.19>");
        }

        return _retArray;

    };

    var SetPractitionerGroup = function (groupObject)
    {
        for (var i = 0; i < businessObject ; i++)
        {
            _retArray.push = "<PractitionerGroup>";

            //eHistory.02//////////
            _val = getValue(businessObject.elements, "eHistory.02");
            if (_val == null)
            {
                 E12.E12_06 = v2NOT_KNOWN;
            }
            else
            {
                PractitionerGroupC["eHistory.02"] = _val[0];
                E12.E12_06 = _val[0];
                _retArray.push("<eHistory.02>" + _val[0] + "</eHistory.02>");
            };

            //eHistory.03/////////
            _val = getValue(businessObject.elements, "eHistory.03");
            if (_val == null)
            {
                 E12.E12_04 = v2NOT_KNOWN;
             }
            else
            {
                PractitionerGroupC["eHistory.03"] = _val[0];
                E12.E12_04 = _val[0];
                _retArray.push("<eHistory.03>" + _val[0] + "</eHistory.03>");
            };

            //eHistory.04///////////
            _val = getValue(businessObject.elements, "eHistory.04");
            if (_val == null)
            {
                 E12.E12_05 = v2NOT_KNOWN;
            }
            else
            {
                PractitionerGroupC["eHistory.04"] = _val[0];
                E12.E12_05 = _val[0];
                _retArray.push("<eHistory.04>" + _val[0] + "</eHistory.04>");
            };

            _retArray.push = "</PractitionerGroup>";
        }
        return _retArray;
    };

    var SetCurrentMedsGroup= function (groupObject)
    {
        for (var i = 0; i < businessObject ; i++)
        {
            _retArray.push = "<CurrentMedsGroup>";

            //eHistory.12
            _val = getValue(businessObject.elements, "eHistory.12");
            if (_val == null) {
                if (isRequiredStateElement("eHistory.12")) {
                    if (_val[0] == 8801019) {
                        _retArray.push("<eHistory.12" + PN_REFUSED_IS_NILLABLE);
                    }
                    else if (_val[0] == 8801023) {
                        _retArray.push("<eHistory.12" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                    }
                    else if (_val[0] == 8801015) {
                        _retArray.push("<eHistory.12" + PN_NONE_REPORTED);
                    }
                    else if (_val[0] == 8801019) {
                        _retArray.push("<eHistory.12" + PN_REFUSED_IS_NILLABLE);
                    }
                    else if (_val[0] == 8801021) {
                        _retArray.push("<eHistory.12" + PN_UNRESPONSIVE);
                    }
                    else {
                        _retArray.push("<eHistory.12" + NIL_V3NOT_RECORDED);
                        eHistory["eHistory.12"] = v3NOT_RECORDED;
                        E12.E12_14 = v2NOT_REPORTING;
                    }
                }
                else {
                    _retArray.push("<eHistory.12" + NIL_V3NOT_REPORTING);
                    eHistory["eHistory.12"] = v3NOT_REPORTING;
                    E12.E12_14 = v2NOT_RECORDED;
                }
            }
            else {
                eHistory["eHistory.12"] = _val[0];
                E12.E12_10 = D2Val("eHistory.12", _val[0]);
                _retArray.push("<eHistory.12>" + _val[0] + "</eHistory.12>");
            }

            //eHistory.13///////////
            _val = getValue(businessObject.elements, "eHistory.13");
            if (_val == null) {
            }
            else {
                _retArray.push("<eHistory.13>" + _val[0] + "</eHistory.13>")
                E12.E12_15 =  _val[0];
                eHistory["eHistory.13"] = _val[0];
            };

            //eHistory.14///////
            _val = getValue(businessObject.elements, "eHistory.14");
            if (_val == null) {
            }
            else {
                _retArray.push("<eHistory.14>" + _val[0] + "</eHistory.14>")
                E12.E12_16 = SetD2("eHistory.14", _val[0]);
                eHistory["eHistory.14"] = _val[0];
            };
            _retArray.push = "</CurrentMedsGroup>";
        }
        return _retArray;
    };

var setNotApplicable = function (elementID) {

    _retArray.push("<eHistory.01" + NIL_V3NOT_APPLICABLE);
    eHistory["eHistory.01"] = v3NOT_APPLICABLE;
    E12.E12_01 = v2NOT_APPLICABLE;

    _retArray.push("<eHistory.05" + NIL_V3NOT_APPLICABLE);
    eHistory["eHistory.05"] = v3NOT_APPLICABLE;
    E12.E12_07 = v2NOT_APPLICABLE;

    _retArray.push("<eHistory.06" + NIL_V3NOT_APPLICABLE);
    eHistory["eHistory.06"] = v3NOT_APPLICABLE;
    E12.E12_08 = v2NOT_APPLICABLE;

    _retArray.push("<eHistory.08" + NIL_V3NOT_APPLICABLE);
    eHistory["eHistory.08"] = v3NOT_APPLICABLE;
    E12.E12_10 = v2NOT_APPLICABLE;

    _retArray.push("<eHistory.17" + NIL_V3NOT_APPLICABLE);
    eHistory["eHistory.17"] = v3NOT_APPLICABLE;
    E12.E12_19 = v2NOT_APPLICABLE;

    _retArray.push("<eHistory.12" + NIL_V3NOT_APPLICABLE);
    eHistory["eHistory.12"] = v3NOT_APPLICABLE;
    E12.E12_14 = v2NOT_APPLICABLE;

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

    };

    var eHistory01 = {
    "3101001":""2610",
    "3101003":"2600",
    "3101005":"2605",
    "3101007":"2610",
    "3101009":"2615",
    "3101011":"2620",
    "3101013":"2620",
    "3101015":"2620",
    "3101017":"2625",
    "3101019":"2600",
    "3101021":"2620",
    "3101023":"2630",
    "3101025":"2635",
    "3101027":"2640",
    "3101029":"2625"
    };

 var eHistory05 = {
"3105001":"2660",
"3105003":"2655",
"3105005":"2670",
"3105007":"2655",
"3105009":"2650",
"3105011":"2650"
};

var eHistory07 = {
"307427009":"2675",
"414285001":"2680",
"300916003":"2685",
"419199007":"2690",
"106190000":"2695"
	        2700
};

var eHistory09 = {

"3109001":"2705",
"3109003":"2710",
"3109005":"2715",
"3109007":"2725"
}

var eHistory10 = {
"9910001":"2730",
"9910003":"",
"9910005":"2735",
"9910007":"2740",
"9910009":"2745",
"9910011":"2750",
"9910013":"",
"9910015":"",
"9910017":"2755",
"9910019":"2755",
"9910021":"",
"9910023":"",
"9910025":"2760",
"9910027":"",
"9910029":"",
"9910031":"2765",
"9910033":"2765",
"9910035":"",
"9910037":"",
"9910039":"",
"9910041":"2770",
"9910043":"2775",
"9910045":"",
"9910047":"",
"9910049":"2780",
"9910051":"2775"

};

var eHistory14 = {
"3114001":"2785",
"3114003":"2785",
"3114005":"2855",
"3114007":"2790",
"3114009":"2795",
"3114011":"2800",
"3114013":"2805",
"3114015":"2810",
"3114017":"2815",
"3114019":"2820",
"3114021":"2825",
"3114023":"2830",
"3114025":"2830",
"3114027":"2855",
"3114029":"2835",
"3114031":"2840",
"3114033":"2840",
"3114037":"2845",
"3114039":"2850",
"3114041":"2855",
"3114043":"2860",
"3114045":"2850",

};

var eHistory15 = {
"9927001":"2975",
"9927003":"2920",
"9927005":"2865",
"9927007":"2870",
"9927009":"2875",
"9927011":"2895",
"9927013":"28980",
"9927015":"2880",
"9927019":"2890",
"9927021":"-10",
"9927023":"2895",
"9927025":"2900",
"9927027":"2910",
"9927029":"2960",
"9927031":"2935",
"9927033":"2915",
"9927035":"2920",
"9927037":"2925",
"9927039":"2930",
"9927041":"2935",
"9927043":"2940",
"9927045":"2945",
"9927047":"2950",
"9927049":"2955",
"9927051":"2960",
"9927053":"2965",
"9927055":"2970",
"9927057":"2975",
"9927059":"2980"
};

var eHistory16 = {
"9923001":"0";
"9923003":"1"
};

var eHistory17 = {
"3117001":"3000",
"3117003":"3000",
"3117005":"2990",
"3117007":"2995"
"3117009":"2995",
"3117011":"2985",

};

var eHistory18 - {
"3118001":"0";
"3118003":"-10";
"3118005":"1";
"3118007":"1";
"3118009":"1";
"3118011":"1";

}

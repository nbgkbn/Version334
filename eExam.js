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



var _retArray = [];

var seteExam = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        setNotApplicable("eExam");
    }

    if(typeof businessObject["eExam"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["eExam"].length);
        _retArray.push = "<eExam>";                
        //eExam.01///////////
        _val = getValue(businessObject.elements, "eExam.01");
        if (_val == null)
        {
            if(isRequiredStateElement("eExam.01"))
            {
                if(_val[0] == 8801023 )
                {
                    _retArray.push("<eExam.01" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);

                }
                else
                {
                    _retArray.push("<eExam.01" + NIL_V3NOT_RECORDED );
                    eExam["eExam.01"] = V3NOT_RECORDED;
                    E16.E16_01 =  V2NOT_RECORDED;
                }
            }            
            else
            {
                _retArray.push("<eExam.01" + NIL_V3NOT_REPORTING );
                eExam["eExam.01"] = v3NOT_REPORTING;
                E16.E16_01   =  v2NOT_REPORTING;
            }
        }
        else 
        {
            eExam["eExam.01"] = _val[0];
            E16.E16_01  = _val[0];
            _retArray.push("<eExam.01>" + _val[0] + "</eExam.01>");
        }; 

        //eExam.02///////////
        _val = getValue(businessObject.elements, "eExam.02");
        if (_val == null)
        {
            if(isRequiredStateElement("eExam.02"))
            {
                if(_val[0] == 8801023 )
                {
                    _retArray.push("<eExam.02" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);

                }
                else if(_val[0] == 8801019)
                {
                    _retArray.push("<eExam.02" + PN_REFUSED_IS_NILLABLE);

                }
                else
                {
                    _retArray.push("<eExam.02" + NIL_V3NOT_RECORDED );
                    eExam["eExam.02"] = V3NOT_RECORDED;
                    E16.E16_02 =  V2NOT_RECORDED;
                }
            }            
            else
            {
                _retArray.push("<eExam.02" + NIL_V3NOT_REPORTING );
                eExam["eExam.02"] = v3NOT_REPORTING;
                E16.E16_02   =  v2NOT_REPORTING;
            }
        }
        else 
        {
            eExam["eExam.02"] = _val[0];
            E16.E16_02  = SetD2("eExam",_val[0]);
            _retArray.push("<eExam.02>" + _val[0] + "</eExam.02>");
        }; 

        _retArray = SetAssessmentGroup(businessObject)

        return _retArray;
    };

    var SetAssessmentGroupGroup = function (groupObject)
    {
        for (var i = 0; i < businessObject ; i++)
        {
            _retArray.push = "<AssessmentGroup>";

            //eExam.03/////////////
            _val = getValue(businessObject.elements, "eExam.03");
            if (_val == null)
            {
                E16.E16_03 = null;
            }      
            else 
            {
                AssessmentGroup["eExam.03"] = _val[0];
                E16.E16_03 = _val[0];
                _retArray.push("<eExam.03>" + _val[0] + "</eExam.03>");
            }; 

            
            //eExam.04/////////////
            _val = getValue(businessObject.elements, "eExam.04");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AssessmentGroup["eExam.04"] = 8801005;
                    E16.E16_04 = null;
                    _retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
                else
                {
                    AssessmentGroup["eExam.04"] = null;
                    E16.E16_04 = null;
                }
            }      
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.04", _val[i]);
                    _retArray.push("<eExam.04>" + _val[i] + "</eExam.04>");
                }
                AssessmentGroup["eExam.04"] = arr1.slice(0);
                E16.E16_04 = arr2.slice(0);                
            }; 
        
            //eExam.05/////////////
            _val = getValue(businessObject.elements, "eExam.05");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AssessmentGroup["eExam.05"] = 8801005;
                    E16.E16_05 = null;
                    _retArray.push("<eExam.05>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    AssessmentGroup["eExam.05"] = null;
                    E16.E16_05 = null;
                }
            }
            else 
            {

                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.05", _val[i]);
                    _retArray.push("<eExam.05>" + _val[i] + "</eExam.05>");
                }
                AssessmentGroup["eExam.05"] = arr1.slice(0);
                E16.E16_05 = arr2.slice(0);              
            }; 

            //eExam.06/////////////////
            _val = getValue(businessObject.elements, "eExam.06");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AssessmentGroup["eExam.06"] = 8801005;
                    _retArray.push("<eExam.06>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    AssessmentGroup["eExam.06"] = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.06", _val[i]);
                    _retArray.push("<eExam.06>" + _val[i] + "</eExam.06>");
                }
                AssessmentGroup["eExam.06"] = arr1.slice(0);
                E16.E16_05 = arr2.slice(0);              

            }; 

            _val = getValue(businessObject.elements, "eExam.07");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AssessmentGroup["eExam.07"] = 8801005;
                    E16.E16_06 = null;
                    _retArray.push("<eExam.07>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    AssessmentGroup["eExam.07"] = null;
                    E16.E16_06 = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.07", _val[i]);
                    _retArray.push("<eExam.07>" + _val[i] + "</eExam.06>");
                }
                AssessmentGroup["eExam.07"] = arr1.slice(0);
                E16.E16_06 = arr2.slice(0);        
                
            }; 
                
            //eExam08/////////////
            _val = getValue(businessObject.elements, "eExam.08");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AssessmentGroup["eExam.08"] = 8801005;
                    E16.E16_07 = null;
                    _retArray.push("<eExam.08>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    AssessmentGroup["eExam.08"] = null;
                    E16.E16_07 = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.08", _val[i]);
                    _retArray.push("<eExam.08>" + _val[i] + "</eExam.08>");
                }
                AssessmentGroup["eExam.08"] = arr1.slice(0);
                E16.E16_07 = arr2.slice(0);        
            }; 
                
            //eExam.09////////////
            _val = getValue(businessObject.elements, "eExam.09");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AssessmentGroup["eExam.09"] = 8801005;
                    E16.E16_07 = null;
                    _retArray.push("<eExam.09>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    AssessmentGroup["eExam.09"] = null;
                    E16.E16_07 = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.09", _val[i]);
                    _retArray.push("<eExam.09>" + _val[i] + "</eExam.09>");
                }
                AssessmentGroup["eExam.09"] = arr1.slice(0);
                E16.E16_08 = arr2.slice(0);        
            }; 

        
            //eExam.12///////////////
            _val = getValue(businessObject.elements, "eExam.12");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AssessmentGroup["eExam.12"] = 8801005;
                    E16.E16_13 = null;
                    _retArray.push("<eExam.12>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    AssessmentGroup["eExam.12"] = null;
                    E16.E16_13 = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {

                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.12", _val[i]);
                    _retArray.push("<eExam.12>" + _val[i] + "</eExam.12>");
                }
                AssessmentGroup["eExam.12"] = arr1.slice(0);
                E16.E16_13 = arr2.slice(0);        
                AssessmentGroup["eExam.12"] = _val;
            }; 

            //eExam.19/////////////
            _val = getValue(businessObject.elements, "eExam.19");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AssessmentGroup["eExam.19"] = 8801005;
                    E16.E16_23 = null;
                    _retArray.push("<eExam.19>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    AssessmentGroup["eExam.19"] = null;
                    E16.E16_23 = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {

                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.19", _val[i]);
                    _retArray.push("<eExam.19>" + _val[i] + "</eExam.19>");
                }
                AssessmentGroup["eExam.19"] = arr1.slice(0);
                E16.E16_23 = arr2.slice(0);        
            }; 


            //eExam.20////////////////
            _val = getValue(businessObject.elements, "eExam.20");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AssessmentGroup["eExam.20"] = 8801005;
                    E16.E16_24 = null;
                    _retArray.push("<eExam.20>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    AssessmentGroup["eExam.20"] = null;
                    E16.E16_24 = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {

                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.20", _val[i]);
                    _retArray.push("<eExam.20>" + _val[i] + "</eExam.20>");
                }
                AssessmentGroup["eExam.20"] = arr1.slice(0);
                E16.E16_24 = arr2.slice(0);        
            }; 
            _retArray.push = "</AssessmentGroup>";
        }
        return _retArray;
    };
            



    var SetAbdomenGroup= function (groupObject)
    {
        for (var i = 0; i < businessObject ; i++)
        {
            _retArray.push = "<AbdomenGroup>";
            
            //eExam.10///////////////
            _val = getValue(businessObject.elements, "eExam.10");
            if (_val == null) 
            {
 
            }
            else {
                _retArray.push("<eExam.10>" + _val[0] + "</eExam.10>")
                AbdomenGroup["eExam.10"] = _val[0];
            };

        
            //eExam.11///////////////////
            _val = getValue(businessObject.elements, "eExam.11");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    AbdomenGroup["eExam.11"] = 8801005;
                    E16.E16_09 = null;
                    _retArray.push("<eExam.11>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    AbdomenGroup["eExam.11"] = null;
                    E16.E16_09 = null;
                }
            }
            else 
            {

                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.11", _val[i]);
                    _retArray.push("<eExam.11>" + _val[i] + "</eExam.11>");
                }
                AbdomenGroup["eExam.11"] = arr1.slice(0);
                E16.E16_09 = arr2.slice(0);        
            }; 
            _retArray.push = "</AbdomenGroup>";
        }
        return _retArray;
    };


    var SetSpineGroup= function (groupObject)
    {
        for (var i = 0; i < businessObject ; i++)
        {
            _retArray.push = "<SpineGroup>";
            
            //eExam.13//////////////////////
            _val = getValue(businessObject.elements, "eExam.13");
            if (_val == null) {
   

            }
            else {
                _retArray.push("<eExam.13>" + _val[0] + "</eExam.13>")
                SpineGroup["eExam.13"] = _val[0];
            };

            //eExam.14/////////////////////
            _val = getValue(businessObject.elements, "eExam.14");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    SpineGroup["eExam.14"] = 8801005;
                    E16.E16_14 = null;
                    _retArray.push("<eExam.14>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    SpineGroup["eExam.14"] = null;
                    E16.E16_14 = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {

                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.14", _val[i]);
                    _retArray.push("<eExam.14>" + _val[i] + "</eExam.14>");
                }
                SpineGroup["eExam.14"] = arr1.slice(0);
                E16.E16_14 = arr2.slice(0);        
            }; 
            _retArray.push = "</SpineGroup>";
        }
        return _retArray;
    };


    var SetExtremityGroup= function (groupObject)
    {
        for (var i = 0; i < businessObject ; i++)
        {
            _retArray.push = "<ExtremityGroup>";
            
            //eExam.15//////////////////////
            _val = getValue(businessObject.elements, "eExam.15");
            if (_val == null) {
   

            }
            else {
                _retArray.push("<eExam.15>" + _val[0] + "</eExam.15>")
                ExtremityGroup["eExam.15"] = _val[0];
            };

            //eExam.16////////////////////////
            _val = getValue(businessObject.elements, "eExam.16");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    ExtremityGroup["eExam.16"] = 8801005;
                    E16.E16_17 = null;
                    _retArray.push("<eExam.16>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    ExtremityGroup["eExam.16"] = null;
                    E16.E16_17 = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.16", _val[i]);
                    _retArray.push("<eExam.16>" + _val[i] + "</eExam.16>");
                }
                ExtremityGroup["eExam.16"] = arr1.slice(0);
                E16.E16_17 = arr2.slice(0);        
            }; 
            _retArray.push = "</ExtremityGroup>";
        }
        return _retArray;
    };


    var SetEyeGroup= function (groupObject)
    {
        for (var i = 0; i < businessObject ; i++)
        {
            _retArray.push = "<EyeGroup>";
            
            //eExam.17/////////////////
            _val = getValue(businessObject.elements, "eExam.17");
            if (_val == null) {
   

            }
            else {
                _retArray.push("<eExam.17>" + _val[0] + "</eExam.17>")
                EyeGroup["eExam.17"] = _val[0];
            };

            //eExam.18//////////////////////
            _val = getValue(businessObject.elements, "eExam.18");
            if (_val == null)
            {
                if(_val == "8801005")
                {
                    EyeGroup["eExam.18"] = 8801005;
                    E16.E16_21 = null;
                    _retArray.push("<eExam.18>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);                
                }      
                else
                {
                    EyeGroup["eExam.18"] = null;
                    E16.E16_21 = null;
                    //_retArray.push("<eExam.04>" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    arr2[i] = SetV2("eExam.18", _val[i]);
                    _retArray.push("<eExam.18>" + _val[i] + "</eExam.18>");
                }
                EyeGroup["eExam.18"] = arr1.slice(0);
                E16.E16_21 = arr2.slice(0);        

            }; 
            _retArray.push = "</ExtremityGroup>";
        }
        return _retArray;
    };

    var setNotApplicable = function (elementID) {

        _retArray.push("<eExam.01" + NIL_V3NOT_APPLICABLE);
        eExam["eExam.01"] = v3NOT_APPLICABLE;
        E16.E16_01 = v2NOT_APPLICABLE;

        _retArray.push("<eExam.02" + NIL_V3NOT_APPLICABLE);
        eExam["eExam.02"] = v3NOT_APPLICABLE;
        E16.E16_02 = v2NOT_APPLICABLE;

    }


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

    var eExam02 = {3502001	3375
    3502003	3380
3502005	3385
3502007	3390
3502009	3395
3502011	3400
3502013	3405
3502015	3410
3502017	3415};

var eExam04 ={3504021	3420
3504023	3425
3504001	3430
3504003	3435
3504005	3440
3504015	3445
3504017	3450
3504019	3455
3504025	3460
3504033	3465}

var eExam05={3505033	3470
3505035	3475
	3480
3505021	3485
3505031	3490
3505049	3495}

var eExam07 = {3507029	3500
3507031	3505
3507025	3510
3507037	3515
3507039	3520
3507045	3525}

var eExam08 = {3508053	3530
3508055	3535
3508005	3540
3508011	3545
3508013	3550
3508037	3555
3508039	3560
3508047	3565
3508021	3570
3508065	3575
3508075	3580
3508085	3585
3508087	3590};

var eExam09 = {3509009	3595
3509011	3600
3509003	3605
3509007	3610};

var eExam 11 = 
    3615		if eExam.10 = 3510005= 3511037
3620		if eExam.10 = 3510005  = 3511039
3625		if eExam.10 = 3510005= 3511021
3630		if eExam.10 = 3510005= 3511025
3635		if eExam.10 = 3510005= 3511033
3640		if eExam.10 = 3510005= 3511051

3645		if eExam.10 = 3510003= 3511037
3650		if eExam.10 = 3510003= 3511039
3655		if eExam.10 = 3510003= 3511021
3660		if eExam.10 = 3510003= 3511025
3665		if eExam.10 = 3510003= 3511033
3670		if eExam.10 = 3510003= 3511051

3675		if eExam.10 = 3510011  = 3511037
3680		if eExam.10 = 3510011  = 3511039
3685		if eExam.10 = 3510011  = 3511021
3690		if eExam.10 = 3510011  = 3511025
3695		if eExam.10 = 3510011  = 3511033
3700		if eExam.10 = 3510011  = 3511051

3705		if eExam.10 = 3510009= 3511037
3710		if eExam.10 = 3510009= 3511039
3715		if eExam.10 = 3510009= 3511021
3720		if eExam.10 = 3510009= 3511025
3725		if eExam.10 = 3510009= 3511033
3730		if eExam.10 = 3510009= 3511051

var eExam12 = {
3512037	3735
3512039	3740
3512049	3745
3512027	3750
3512057	3755
3512039	3760}

var eExam14 = 
    3765		if eExam.13 = 3513001 = 3514027
3770		if eExam.13 = 3513001 = 3514029
3775		if eExam.13 = 3513001 = 3514033
3780		if eExam.13 = 3513001 = 3514045
3785		if eExam.13 = 3513001 = 3514043

3790		if eExam.13 = 3513015, 3513017,3513019 = 3514027
3795		if eExam.13 = 3513015, 3513017,3513019 = 3514029
3800		if eExam.13 = 3513015, 3513017,3513019 =3514033
3805		if eExam.13 = 3513015, 3513017,3513019 =3514045
3810		if eExam.13 = 3513015, 3513017,3513019 =3514043

3815		if eExam.13 = 3513001 = 3514027
3820		if eExam.13 = 3513001 = 3514029
3825		if eExam.13 = 3513001 = 3514033
3830		if eExam.13 = 3513001 = 3514045
3835		if eExam.13 = 3513001 = 3514043

var eExam16 = 3840		if eExam.15 = 3515003, 3515007, 3515011, 3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095 = 3516049
3845		if eExam.15 = 3515003, 3515007, 3515011, 3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095 = 3516051
3850		if eExam.15 = 3515003, 3515007, 3515011, 3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095 = 3516057
3855		if eExam.15 = 3515003, 3515007, 3515011, 3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095 = 3516065
3860		if eExam.15 = 3515003, 3515007, 3515011, 3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095 = 3516029
3865		if eExam.15 = 3515003, 3515007, 3515011, 3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095 = 3516075
3870		if eExam.15 = 3515003, 3515007, 3515011, 3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095 = 3516043

3875		if eExam.15 = 3515031, 3515035, 3515051, 3515059, 3515063, 3515075, 3515079, 3515083, 3515087, 3515091 = 3516049
3880		if eExam.15 = 3515031, 3515035, 3515051, 3515059, 3515063, 3515075, 3515079, 3515083, 3515087, 3515091 = 3516051
3885		if eExam.15 = 3515031, 3515035, 3515051, 3515059, 3515063, 3515075, 3515079, 3515083, 3515087, 3515091 = 3516057
3890		if eExam.15 = 3515031, 3515035, 3515051, 3515059, 3515063, 3515075, 3515079, 3515083, 3515087, 3515091 = 3516065
3895		if eExam.15 = 3515031, 3515035, 3515051, 3515059, 3515063, 3515075, 3515079, 3515083, 3515087, 3515091 = 3516029
3900		if eExam.15 = 3515031, 3515035, 3515051, 3515059, 3515063, 3515075, 3515079, 3515083, 3515087, 3515091 = 3516075
3905		if eExam.15 = 3515031, 3515035, 3515051, 3515059, 3515063, 3515075, 3515079, 3515083, 3515087, 3515091 = 3516043

}

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
var PN_CONTRAINDICATION_NOTED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801001\"/>";
var PN_DENIED_BY_ORDER_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801003\"/>";


var seteDevice = function (businessObject) {
    alert("NEED v2 NOTS");

    console.log(isDefined("eDevice"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];

    console.log(businessObject);

    _retArray.push("<eDeviceGroup>")

    //eDevice.01/////////////
    _val = getValue(businessObject.elements, "eDevice.01");
    if (_val == null)
    {
        eDeviceGroup["eDevice.01"] = null;
    }
    else {
        _retArray.push("<eDevice.01>" + _val[0] + "</eDevice.01>")
        eDeviceGroup["eDevice.01"] = _val[0];
    };


    //eDevice.02////////////
    _val = getValue(businessObject.elements, "eDevice.02");
    if (_val == null) {
        E21.E21_01 = null;
        eDeviceGroup["eDevice.02"] = null;
    }
    else
    {

        _retArray.push("<eDevice.02>" + _val[0] + "</eDevice.02>")
        E21.E21_01 = _val[0];
        eDeviceGroup["eDevice.02"] = _val[0];
    };

    //eDevice.03////////////
    _val = getValue(businessObject.elements, "eDevice.03");
    if (_val == null)
    {
        eDeviceGroup["eDevice.03"] = null;
        E21.E21_02 = null;
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1[i] = _val[i];
            arr2[i] = SetV2("eDevice.03", _val[0]);
            _retArray.push("<eDevice.03>" + _val[0] + "</eDevice.03>")
        }
        eDeviceGroup["eDevice.03"] = arr1.slice(0);
        E21.E21_02 = arr2.slice(0);
    };


    _retArray.push("<WaveformGroup>")
    //eDevice.04///////////////
    _val = getValue(businessObject.elements, "eDevice.04");
    if (_val == null)
    {

    }
    else {
        _retArray.push("<eDevice.04>" + _val[0] + "</eDevice.04>")
        E21.E21_03 = _val[0];
        eDeviceGroup["eDevice.04"] = _val[0];
    };

    //eDevice.05//////////////////
    _val = getValue(businessObject.elements, "eDevice.05");
    if (_val == null)
    {

    }
    else {
        _retArray.push("<eDevice.05>" + _val[0] + "</eDevice.05>")
        E21.E21_04 = _val[0];
        eDeviceGroup["eDevice.05"] = _val[0];
    };

    //eDevice.06////////////////
    _val = getValue(businessObject.elements, "eDevice.06");
    if (_val == null) {

    }
    else
    {
        _retArray.push("<eDevice.06>" + _val[0] + "</eDevice.06>")
        E21.E21_05 = SetD2("eDevice.06", _val[0]);
        eDeviceGroup["eDevice.06"] = _val[0];
    };

    _retArray.push("</WaveformGroup>")

    //eDevice.07////////////////
    _val = getValue(businessObject.elements, "eDevice.07");
    if (_val == null)
    {
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++)
        {
            arr1[i] = _val[i];
            arr2[i] = SetV2("eDevice.07", _val[0]);
            _retArray.push("<eDevice.07>" + _val[i] + "</eDevice.07>");
        }
        eArrest["eDevice.07"] = arr1.slice(0);
        E21.E21_06 = arr2.slice(0);
    };

    //eDevice.08////////////
    _val = getValue(businessObject.elements, "eDevice.08");
    if (_val == null)
    {

    }
    else {
        _retArray.push("<eDevice.08>" + _val[0] + "</eDevice.08>")
        E21.E21_07 = _val[0];
        eDeviceGroup["eDevice.08"] = _val[0];
    };

    _retArray.push("<ShockGroup>")

    //eDevice.09///////////
    _val = getValue(businessObject.elements, "eDevice.09");
    if (_val == null)
    {

    }
    else {
        _retArray.push("<eDevice.09>" + _val[0] + "</eDevice.09>")
        E21.E21_08 = SetD2("eDevice.09", _val[0]);
        eDeviceGroup["eDevice.09"] = _val[0];
    };

    //eDevice.10//////////////
    _val = getValue(businessObject.elements, "eDevice.10");
    if (_val == null)
    {
    }
    else {
        _retArray.push("<eDevice.10>" + _val[0] + "</eDevice.10>")
        E21.E21_09 = _val[0];
        eDeviceGroup["eDevice.10"] = _val[0];
    };

    //eDevice.11//////////////
    _val = getValue(businessObject.elements, "eDevice.11");
    if (_val == null)
    {
    }
    else
    {
        _retArray.push("<eDevice.11>" + _val[0] + "</eDevice.11>")
        E21.E21_10 = _val[0];
        eDeviceGroup["eDevice.11"] = _val[0];
    };

    //eDevice.12//////////////////////
    _val = getValue(businessObject.elements, "eDevice.12");
    if (_val == null) {

    }
    else {
        _retArray.push("<eDevice.12>" + _val[0] + "</eDevice.12>")
        E21.E21_11 = _val[0];
        eDeviceGroup["eDevice.12"] = _val[0];
    };
    _retArray.push("</ShockGroup>")
    _retArray.push("</DeviceGroup>")
    _retArray.push("</eDevice>")

    return _retArray;
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
}


function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eDevice.02":

            if (eDevice02[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice02[valueArray[0]]);
            }
            break;
        case "eDevice.03":
            for (i = 0; i < valueArray.length; i++) {
                if (eDevice03[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDevice03[valueArray[i]]);
                }
            }
            break;
        case "eDevice.04":
            if (eDevice04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice04[valueArray[0]]);
            }
            break;

        case "eDevice.06":
            if (eDevice06[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice06[valueArray[0]]);
            }
            break;

        
        case "eDevice.07":
            if (eDevice07[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice07[valueArray[0]]);
            }
            break;

        case "eDevice.08":
            if (eDevice08[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice08[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;


var eDevice03 = {
    "4103001": "5090",
    "4103003": "5095",
    "4103005": "5100",
    "4103007": "5105",
    "4103009": "5110",
    "4103011": "5115",
    "4103013": "5120",
    "4103015": "5125",
    "4103017": "5130",
    "4103019": "5135",
    "4103021": "5140",
    "4103025": "5145",
    "4103027": "5150",
    "4103029": "5155",
    "4103031": "5160",
    "4103033": "5165",
    "4103035": "5170",
    "4103037": "5175",
    "4103039": "5180",
    "4103041": "5185",
    "4103043": "5190",
    "4103045": "5195"
};

var eDevice04 = {
    "JPG": "5200",
    "PDF": "5205"
};

var eDevice06 = {
    "4106001": "5220",
    "4106003": "5210",
    "4106005": "5225",    
    "4106007": "5215",
    "4106009": "5235",
    "4106011": "5230",
    
    "4106013": "5240"
};

var eDevice07 = {
    "4107001": "5245",
    "4107003": "5250",
    "4107005": "5255",
    "4107007": "5260",
    "4107009": "5265",
    "4107011": "5270",
    "4107013": "5305",
    "4107015": "5305",
    "4107017": "5275",
    "4107019": "5280",
    "4107021": "5285",
    "4107025": "5290",
    "4107029": "5295",
    "4107033": "5300",
    "4107035": "5300",
    "4107037": "5300",
    "4107039": "5300",
    "4107041": "5300"
};

var eDevice09 = {
    "4109001":"5310",
    "4109003":"5311"
}

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


var dConfiguration334 = new Object;
var D01 = new Object;

var setdConfiguration = function (businessObject) {
    var _retArray = [];
    _retArray.push("<dConfiguration>");

    console.log(businessObject);
    console.log(businessObject["dConfiguration.ConfigurationGroup"].length);
    for (var xx = 0; xx < businessObject["dConfiguration.ConfigurationGroup"].length; xx++)
    {
        _retArray.push("<dConfiguration.ConfigurationGroup>");

        console.log(businessObject["dConfiguration.ConfigurationGroup"][xx]);


        // dConfiguration.01/////////////
        _val = getValue(businessObject.elements, "dConfiguration.01");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.01 National Element");
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.01"] = _val[0];
            _retArray.push("<dConfiguration.01>" + val[0] + "</dConfiguration.01>");

        };

        // dConfiguration.02/////////////
        _val = getValue(businessObject.elements, "dConfiguration.02");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.02 National Element");
        }
        else
        {
        	var _v2valArray = [];
        	var _valArray = [];

        	for (var i = 0; i < businessObject.length ; i++)
			{
        		_v2valArray= setD2("dConfiguration.02", _val[i]);
	      	  	_valArray.push(_val[i]);
    	   		_retArray.push("<dConfiguration.02>" + val[i] + "</dConfiguration.02>");
			}
			D04.D04_01 = _v2valArray;
            dConfiguration.ConfigurationGroup["dConfiguration.02"] = _valArray;
		 };


        // dConfiguration.03/////////////
        _val = getValue(businessObject.elements, "dConfiguration.03");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.03 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.03"] = v2NOT_RECORDED;
        }
        else
        {
        	var _valArray = [];
    		for (var i = 0; i < businessObject.length ; i++)
			{
	    		_valArray.push(_val[i]);
    	 		_retArray.push("<dConfiguration.03>" + val[i] + "</dConfiguration.03>");
			}
        };

          // dConfiguration.04/////////////
        _val = getValue(businessObject.elements, "dConfiguration.04");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.04 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.04"] = v2NOT_RECORDED;
        }
        else
        {
        	var _valArray = [];
    		for (var i = 0; i < businessObject.length ; i++)
			{
	    		_valArray.push(_val[i]);
    	 		_retArray.push("<dConfiguration.04>" + val[i] + "</dConfiguration.04>");
			}
		};

        // dConfiguration.05/////////////
        _val = getValue(businessObject.elements, "dConfiguration.05");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.04 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.05"] = v2NOT_RECORDED;
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.05"] = _val;
        };

        // dConfiguration.10/////////////
        _val = getValue(businessObject.elements, "dConfiguration.10");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.10 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.10"] = v2NOT_RECORDED;
        }
        else
        {
           	var _v2valArray = [];
            var _valArray = [];
    		for (var i = 0; i < businessObject.length ; i++)
			{
				_v2valArray = setD2("dConfiguration.10", _val[i]);
	    		_valArray.push(_val[i]);
    	 		_retArray.push("<dConfiguration.10>" + val[i] + "</dConfiguration.10>");
			}
            D04.D04_08 = _v2valArray
            dConfiguration.ConfigurationGroup["dConfiguration.10"] = _valArray;
        };

          // dConfiguration.11/////////////
        _val = getValue(businessObject.elements, "dConfiguration.11");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.11 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.11"] = "MISSING MANDATORY VALUE";
        }
        else
        {
        	var _valArray = [];
    		for (var i = 0; i < businessObject.length ; i++)
			{
      		  	_valArray.push(_val[i]);
    	 		_retArray.push("<dConfiguration.11>" + val[i] + "</dConfiguration.11>");
			}
              dConfiguration.ConfigurationGroup["dConfiguration.11"] = _val;
        };

          // dConfiguration.12/////////////
        _val = getValue(businessObject.elements, "dConfiguration.12");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.12 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.12"] = null;
            D04.D04_10 = null;
        }
        else
        {
            D04.D04_08 = setD2("dConfiguration.12", _val[0]);
            dConfiguration.ConfigurationGroup["dConfiguration.12"] = _val[0];
        	_retArray.push("<dConfiguration.12>" + val[0] + "</dConfiguration.12>");

        };

          // dConfiguration.13/////////////
     	_val = getValue(businessObject.elements, "dConfiguration.13");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.13 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.13"] = null;
        }
        else
        {
            dConfiguration.ConfigurationGroup["dConfiguration.13"] = _val[0];
        	_retArray.push("<dConfiguration.13>" + val[0] + "</dConfiguration.13>");

        };


          // dConfiguration.14/////////////
        _val = getValue(businessObject.elements, "dConfiguration.14");
        if (_val == null)
        {
            if (isRequiredStateElement("dConfiguration.14") == - true) {
                dConfiguration.ConfigurationGroup["dConfiguration.13"] = v3NOT_RECORDED;
                v2ErrorList.push("dConfiguration.14 REQUIRED element");
            }
            else
            {
        		dConfiguration.ConfigurationGroup["dConfiguration.13"] = v3NOT_REPORTING;
                v2ErrorList.push("dConfiguration.14 REQUIRED element");
            }
        }
        else
        {
          	var _v2valArray = [];
        	var _valArray = [];
          	for (var i = 0; i < businessObject.length ; i++)
			{
        		_v2valArray= setD2("dConfiguration.14", _val[i]);
	       		_valArray.push(_val[i]);
    	   		_retArray.push("<dConfiguration.14>" + val[i] + "</dConfiguration.14>");
			}
            D04.D04_17 = _v2valArray
            dConfiguration.ConfigurationGroup["dConfiguration.14"] = _retArray;
        };

          // dConfiguration.15/////////////
        _val = getValue(businessObject.elements, "dConfiguration.15");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.15 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.15"] = "MISSING MANDATORY VALUE";
        }
        else
        {
           	var _valArray = [];
          	for (var i = 0; i < businessObject.length ; i++)
			{
	       		_valArray.push(_val[i]);
    	   		_retArray.push("<dConfiguration.15>" + val[i] + "</dConfiguration.15>");
			}
            dConfiguration.ConfigurationGroup["dConfiguration.15"] = _retArray;
        };


          // dConfiguration.16/////////////
        _val = getValue(businessObject.elements, "dConfiguration.16");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.16 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.16"] = "MISSING MANDATORY VALUE";
        }
        else
        {
        	var _v2valArray = [];
        	var _valArray = [];
          	for (var i = 0; i < businessObject.length ; i++)
			{
	       		_valArray.push(_val[i]);
           		_v2valArray= setD2("dConfiguration.16", _val[i]);
    	   		_retArray.push("<dConfiguration.16>" + val[i] + "</dConfiguration.16>");
			}
            dConfiguration.ConfigurationGroup["dConfiguration.16"] = _retArray;
            D04.D04_02 = _v2valArray;
        };

          // dConfiguration.17/////////////
        _val = getValue(businessObject.elements, "dConfiguration.17");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.17 National Element");
            dConfiguration.ConfigurationGroup["dConfiguration.17"] = "MISSING MANDATORY VALUE";
        }
        else
        {
    		var _valArray = [];
    		for (var i = 0; i < businessObject.length ; i++)
			{
	    		_valArray.push(_val[i]);
    	 		_retArray.push("<dConfiguration.17>" + val[i] + "</dConfiguration.17>");
			}
            dConfiguration.ConfigurationGroup["dConfiguration.17"] = _retArray;
        };

        if (businessObject["dConfiguration.ProcedureGroup"] != undefined)
        {
            var ProcedureGroup = new Object;
            ProcedureGroup = setProcedureGroup(businessObject["dConfiguration.ProcedureGroup"]);
        }
        else
        {
            ErrorList.push("Agency Group Requires National Element");
        };
        console.log(businessObject);
        if (businessObject["dConfiguration.MedicationGroup"] != undefined)
        {
            var MedicationGroup = new Object;
            MedicationGroup = setMedicationGroup(businessObject["dConfiguration.MedicationGroup"]);
            console.log("MedicationGroup");
            console.log(MedicationGroup);
        }
        else
        {
            ErrorList.push("Agency Year Requires National Element");
        }
        _retArray.push("</dConfiguration.ConfigurationGroup>");
    }
    _retArray.push("</dConfiguration>");
};
var setProcedureGroup = function (groupObject)
{
    var _val = null;
    var _retArray = [];
    var ProcedureGroup = new Object;

    for (var i = 0; i < groupObject.length ; i++)
    {
         _retArray.push("<ProcedureGroup>");

        // dConfiguration.06/////////////
        _val = (groupObject[i].elements, "dConfiguration.06");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.06 National Element");
        }
        else
        {
            ProcedureGroup["dConfiguration.06"] = _val[0];
            D04.D04_05 = setD2("dConfiguration.06", _val)[0];
        };

        // dConfiguration.07/////////////
        _val = getValue(groupObject[i].elements, "dConfiguration.07");
        if (_val == null)
        {
            ErrorList.unshift("dConfiguration.07 National Element");
        }
        else
        {
			var _v2valArray = [];
        	var _valArray = [];
          	for (var i = 0; i < businessObject.length ; i++)
			{
        		_v2valArray= setD2("dConfiguration.07", _val[i]);
	        	_valArray.push(_val[i]);
    	   		_retArray.push("<dConfiguration.07>" + val[i] + "</dConfiguration.07>");
			}
        	dAgency334["dConfiguration.07"] = _valArray;
        	D04.D04_04 = _v2valArray;
        };
        _retArray.push("</ProcedureGroup>");
    }
    return _retArray;
};
var setMedicationGroup = function (groupObject)
{
    var _retArray = [];
    var _val = "";
    var MedicationGroup = new Object;

    for (var i = 0; i < groupObject.length ; i++)
    {
        _retArray.push("<MedicationGroup>");

        // dConfiguration.08/////////////
        _val = (groupObject[i].elements, "dConfiguration.08");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.08 National Element");
        }
        else
        {
            MedicationGroup["dConfiguration.08"] = _val[0];
            D04.D04_07 = _val[0];
        };

        // dConfiguration.09////////////
        _val = getValue(groupObject[i].elements, "dConfiguration.09");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.09 required");
            MedicationGroup["dConfiguration.09"] = v3NOT_RECORDED;
        }
        else
        {
    		var _v2valArray = [];
        	var _valArray = [];
          	for (var i = 0; i < businessObject.length ; i++)
			{
        		_v2valArray= setD2("dConfiguration.09", _val[i]);
	        	_valArray.push(_val[i]);
    	   		_retArray.push("<dConfiguration.09>" + val[i] + "</dConfiguration.09>");
			}
            MedicationGroup["dConfiguration.09"] = _valArray;
            D04.D04_07= _v2valArray;
        };

		_retArray.push("</MedicationGroup>");
}
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

}

var dConfiguration02 = {
"9911001":"6090",
"9911003":"6120",
"9911005":"6110",
"9911009":"6090",
"9911011":"6100",
"9911013":"6110",
"9911015":"6111",
"9911017":"6111",
"9911019":"6111",
"9911021":"6112",
"9911023":"6110",
"9911025":"6110",
"9911027":"6111",
"9911029":"6111",
"9911031":"6111"};

var dConfiguration06 = {
"9917001":"6090",
"9917003":"6120",
"9917005":"6110",
"9917007":"6090",
"9917009":"6100",
"9917011":"6110",
"9917013":"6111",
"9917015":"6111",
"9917017":"6111",
"9917019":"6112",
"9917021":"6110",
"9917023":"6110",
"9917025":"6110"
"9917027":"6111"
"9917029":"6111"
"9917031":"6111"
};

var dConfiguration08 = {
"9917001":"6090",
"9917003":"6120",
"9917005":"6110",
"9917007":"6090",
"9917009":"6100",
"9917011":"6110",
"9917013":"6111",
"9917015":"6111",
"9917017":"6111",
"9917019":"6112",
"9917021":"6110",
"9917023":"6110",
"9917025":"6110"
"9917027":"6111"
"9917029":"6111"
"9917031":"6111"
};


var dConfiguration10 = {
"9914001":"6730",
"9914003":"6740",
"9914105":"7000",
"9914007":"6760
"9914109":"6720",
"9914011":"6790",
"9914013":"6850",
"9914015":"7150",
"9914017":"7230",
"9914019":"7130",
"9914021":"6785",
"9914023":"6875",
"9914029":"6960",
"9914031":"6980",
"9914033":"6911",
"9914035":"6912",
"9914037":"6913",
"9914039":"7160",
"9914041":"6925",
"9914043":"6914",
"9914047":"6915",
"9914049":"6916",
"9914051":"6800",
"9914053":"6810",
"9914055":"6791",
"9914057":"6880",
"9914059":"6910",
"9914061":"6930",
"9914063":"7000",
"9914065":"6881",
"9914067":"6990",
"9914069":"6925",
"9914071":"7040",
"9914073":"7180",
"9914075":"7220",
"9914077":"7215",
"9914079":"6820",
"9914081":"6820",
"9914083":	CUSTOME
"9914085":"6840",
"9914087":"7214",
"9914089":	CUSTOM
"9914091":"6892",
"9914093":"6890",
"9914095":"6900",
"9914097":"6920",
"9914099":"6925",
9914103	Injury-Impaled Object
9914105	Injury-Multisystem
"9914107":"7175",
	9914109	Medical-Abdominal Pain
"9914111":"6770",
"9914113":"6780",
"9914115":"6830",
"9914117":"6860",
"9914119":"6885",
"9914121":"6945",
"9914123":"6950",
"9914125":"6965",
"9914127":"6970",
9914129	Medical-Influenza-Like Illness/ Upper Respiratory Infection

"9914131":"7251",
"9914133":"7010",
"9914135":"7030",
"9914137":"7140",
"9914139":"7160",
"9914141":"7170",
"9914145":"7200",
"9914147":"7232",
"9914149":"7210",
"9914151":"7240
	9914153	Not Done
"9914155":"6870",
"9914159":"6935",
	9914161	OB/GYN-Pregnancy Related Emergencies
9914163	OB/GYN-Post-partum Hemorrhage
"9914167	Exposure-Carbon Monoxide
 9914169	Cardiac Arrest-Do Not Resuscitate
 9914171	Cardiac Arrest-Special Resuscitation Orders
 9914173	Exposure-Smoke Inhalation
 9914175	General-Community Paramedicine / Mobile Integrated Healthcare
 9914177	General-Exception Protocol
 9914179	General-Extended Care Guidelines
 9914181	General-Interfacility Transfers
 9914183	General-Law Enforcement - Blood for Legal Purposes
 9914185	General-Law Enforcement - Assist with Law Enforcement Activity
 9914187	General-Neglect or Abuse Suspected
 9914189	General-Refusal of Care
 9914191	Injury-Mass/Multiple Casualties
 9914193	Injury-Thoracic
 9914195	Medical-Adrenal Insufficiency
 9914197	Medical-Apparent Life Threatening Event (ALTE)
 9914199	Medical-Tachycardia
9914165":"6917"
"",
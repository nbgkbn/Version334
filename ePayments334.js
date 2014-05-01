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

var ePayment = new Object;
var D01 = new Object;

var _retArray = [];
var V2XMLArray = [];

_retArray.push = "<ePayment>";
var setePayment = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        //SetNotApplicable();
    }

    if(typeof businessObject["ePayment"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["ePayment"].length);
                
        _val = getValue(businessObject.elements, "ePayment.01");
        if (_val == null) {
            ErrorList.push("ePayment.01 required");
            _retArray.push("<ePayment.01" + NIL_V3NOT_RECORDED);
            E07.E07_01 = v2NOT_RECORDED;
        }
        else {
            _retArray.push("<ePayment.01>" + _val[0] + "</ePayment.01>")
            E07.E07_01 = _val[0];
            ePayment[ePayment.01]= +val[0];
        };

        _retArray.push = "<CertificateGroup>";

        _val = getValue(businessObject.elements, "ePayment.02");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.02>" + _val[0] + "</ePayment.02>")
            E07.E07_02 = _val[0];
        };



        _val = getValue(businessObject.elements, "ePayment.03");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.03>" + _val[0] + "</ePayment.03>")
        };

                
        
        _val = getValue(businessObject.elements, "ePayment.04");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.04>" + _val + "</ePayment.04>")
        };


        
        _val = getValue(businessObject.elements, "ePayment.05");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.05>" + _val[0] + "</ePayment.05>")
        };

        _val = getValue(businessObject.elements, "ePayment.06");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.06>" + _val[0] + "</ePayment.06>")
        };
        
        _val = getValue(businessObject.elements, "ePayment.07");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.07>" + _val[0] + "</ePayment.07>")
        };

        _retArray.push = "</CertificateGroup>";

        _val = getValue(businessObject.elements, "ePayment.08");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.08>" + _val[0] + "</ePayment.08>")
        };

        _retArray.push("<ClosestRelativeGroup>");
        _val = getValue(businessObject.elements, "ePayment.23");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.23>" + _val[0] + "</ePayment.23>")
            E07.E07_18 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.24");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.24>" + _val[0] + "</ePayment.24>")
            E07.E07_19 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.25");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.25>" + _val[0] + "</ePayment.25>")
            E07.E07_20 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.26");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.26>" + _val[0] + "</ePayment.26>")
            E07.E07_21 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.27");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.27>" + _val[0] + "</ePayment.27>")
            E07.E07_22 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.28");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.28>" + _val[0] + "</ePayment.28>")
            E07.E07_23 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.29");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.29>" + _val[0] + "</ePayment.29>")
            E07.E07_24 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.30");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.30>" + _val[0] + "</ePayment.30>")
        };

        _val = getValue(businessObject.elements, "ePayment.31");
        if (_val == null) {
        }
        else {
            if(PhoneNumberType[i] == 9913001  )
            {
                _phoneType = FAX;
            }
            else if(PhoneNumberType[i] == 9913003  )
            {
                _phoneType = HOME;
            }
            else if(PhoneNumberType[i] == 9913005  )
            {
                _phoneType = MOBILE;
            }
            else if(PhoneNumberType[i] == 9913007  )
            {
                _phoneType = PAGER;
            }
            else if(PhoneNumberType[i] == 9913009  )
            {
                _phoneType = WORK;
            }

            _retArray.push("<ePayment.31 " + _phoneType +">" + _val[0] + "</ePayment.31>")
            E07.E07_25 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.32");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.32>" + _val[0] + "</ePayment.32>")
            E07.E07_26 = SetD2("ePayment.32",_val[0]);
        };

        _retArray.push("</ClosestRelativeGroup>");
        _retArray.push("<EmployerGroup>");
        _val = getValue(businessObject.elements, "ePayment.33");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.33>" + _val[0] + "</ePayment.33>")
            E07.E07_27 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.34");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.34>" + _val[0] + "</ePayment.34>")
            E07.E07_28 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.35");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.35>" + _val[0] + "</ePayment.35>")
            E07.E07_29 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.36");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.36>" + _val[0] + "</ePayment.36>")
            E07.E07_30 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.37");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.37>" + _val[0] + "</ePayment.37>")
            E07.E07_31 = _val[0];
        };

        _val = getValue(businessObject.elements, "ePayment.38");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.38>" + _val[0] + "</ePayment.38>")
        };

        _val = getValue(businessObject.elements, "ePayment.39");
        if (_val == null) {
        }
        else {
            if(PhoneNumberType[i] == 9913001  )
            {
                _phoneType = FAX;
            }
            else if(PhoneNumberType[i] == 9913003  )
            {
                _phoneType = HOME;
            }
            else if(PhoneNumberType[i] == 9913005  )
            {
                _phoneType = MOBILE;
            }
            else if(PhoneNumberType[i] == 9913007  )
            {
                _phoneType = PAGER;
            }
            else if(PhoneNumberType[i] == 9913009  )
            {
                _phoneType = WORK;
            }
            _retArray.push("<ePayment.39 " + _phoneType +">" + _val[0] + "</ePayment.39>")
            E07.E07_32 = _val[0];
        };
        _retArray.push("</EmployerGroup>");

        _val = getValue(businessObject.elements, "ePayment.40");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.40>" + _val[0] + "</ePayment.40>")
            E07.E07_33 = SetD2("ePayment.40",_val[0]);
        };

        _val = getValue(businessObject.elements, "ePayment.41");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.41>" + _val + "</ePayment.41>");
        };

        _val = getValue(businessObject.elements, "ePayment.42");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.42>" + _val + "</ePayment.42>");
        };

        _val = getValue(businessObject.elements, "ePayment.43");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.43>" + _val + "</ePayment.43>");
        };

        _val = getValue(businessObject.elements, "ePayment.44");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.44>" + _val + "</ePayment.44>");
        };

        _val = getValue(businessObject.elements, "ePayment.45");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.45>" + _val + "</ePayment.45>");
        };

        _val = getValue(businessObject.elements, "ePayment.46");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.46>" + _val[0] + "</ePayment.46>");
        };

        _val = getValue(businessObject.elements, "ePayment.47");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.47>" + _val[0] + "</ePayment.47>");
        };

        _val = getValue(businessObject.elements, "ePayment.48");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.48>" + _val[0] + "</ePayment.48>");
        };
        _val = getValue(businessObject.elements, "ePayment.49");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.49>" + _val[0] + "</ePayment.49>");
        };

        _val = getValue(businessObject.elements, "ePayment.51");
        if (_val == null)
        {
            if(isRequiredStateElement("ePayment.51"))
            {
                _retArray.push("<ePayment.51" + NIL_V3NOT_RECORDED );
                E05.E5_34 = v2NOT_RECORDED;
            }            
        }
        else 
        {
            E07.E7_34 =  _val[0];
            _retArray.push("<ePayment.51>" + _val[0] + "</ePayment.51>");
        }; 

        _val = getValue(businessObject.elements, "ePayment.51");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.51>" + _val[0] + "</ePayment.51>");
        };

        _val = getValue(businessObject.elements, "ePayment.52");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.52>" + _val + "</ePayment.52>");
            E07.E07_37 = SetD2("ePayment.52",_val);

        };

        _val = getValue(businessObject.elements, "ePayment.53");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.53>" + _val + "</ePayment.53>");            
        };

        _val = getValue(businessObject.elements, "ePayment.54");
        if (_val == null) {
        }
        else {
            _retArray.push("<ePayment.54>" + _val + "</ePayment.54>");            
        };

        _retArray.push("</ePayment>");
        };    //end of function   

    var setSupplyItemGroup = function(groupObject)
    {
        var _retVal = [];

        for(var i=0;i<groupObject.length-1; i++) 
        {
            _retArray.push("<SupplyItemGroup>");
            _val = getValue(businessObject.elements, "ePayment.55");
            if (_val == null) {
            }
            else {
                _retArray.push("<ePayment.55>" + _val + "</ePayment.55>");            
            };

            _val = getValue(businessObject.elements, "ePayment.56");
            if (_val == null) {
            }
            else {
                _retArray.push("<ePayment.56>" + _val + "</ePayment.56>");            
            };
            _retArray.push("</SupplyItemGroup>");
        }
        return _retArray;  
    };

    var setInsuranceGroup = function(groupObject)
        {
            var _retVal = [];
            _retArray.push("<InsuranceGroup>");
            FOR LOOP
            _val = getValue(businessObject.elements, "ePayment.09");
            if (_val == null) {
            }
            else {
                _retArray.push("<ePayment.09>" + _val[0] + "</ePayment.09>")
                E07.E07_03  = v2NOT_RECORDED;

            };

            _val = getValue(businessObject.elements, "ePayment.10");
            if (_val == null) {
            }
            else {
                _retArray.push("<ePayment.10>" + _val[0] + "</ePayment.10>")
            };

            _val = getValue(businessObject.elements, "ePayment.11");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.11>" + _val[0] + "</ePayment.11>")
                E07.E07_04  = SetD2("ePayment.11", _val[0]);
            }; 


            _val = getValue(businessObject.elements, "ePayment.12");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.12>" + _val[0] + "</ePayment.12>")
                E07.E07_05  =  _val[0];
            }; 


            _val = getValue(businessObject.elements, "ePayment.13");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.13>" + _val[0] + "</ePayment.13>")
                E07.E07_06  =  _val[0];
            }; 


            _val = getValue(businessObject.elements, "ePayment.14");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.14>" + _val[0] + "</ePayment.14>")
                E07.E07_07  =  _val[0];
            }; 

            _val = getValue(businessObject.elements, "ePayment.15");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.15>" + _val[0] + "</ePayment.15>")
                E07.E07_08  =  _val[0];
            }; 

            _val = getValue(businessObject.elements, "ePayment.16");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.16>" + _val[0] + "</ePayment.16>")
            }; 

            _val = getValue(businessObject.elements, "ePayment.17");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.17>" + _val[0] + "</ePayment.17>")
                E07.E07_09  =  _val[0];
            }; 

            _val = getValue(businessObject.elements, "ePayment.18");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.18>" + _val[0] + "</ePayment.18>")
                E07.E07_10  =  _val[0];
            }; 

            _val = getValue(businessObject.elements, "ePayment.19");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.19>" + _val[0] + "</ePayment.19>")
                E07.E07_11  =  _val[0];
            }; 

            _val = getValue(businessObject.elements, "ePayment.20");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.20>" + _val[0] + "</ePayment.20>")
                E07.E07_12  =  _val[0];
            }; 

            _val = getValue(businessObject.elements, "ePayment.21");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.21>" + _val[0] + "</ePayment.21>")
                E07.E07_13  =  _val[0];
            };

            _val = getValue(businessObject.elements, "ePayment.22");
            if (_val == null)
            {
            }
            else 
            {
                _retArray.push("<ePayment.22>" + _val[0] + "</ePayment.22>")
                E07.E07_14  =  SetD2("ePayment.22",_val[0]);
            };

                } //END LOOP
    _retArray.push("<InsuranceGroup>");
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

 
 var ePayment32CodeMap = {	

 
 
 
ePayment.32Map = {
"2632001": "950",	
"2632003":"970",
"2632005":"955",
"2632007":	"960",	
"2632009":	"965",
"2632011":	"965",	
"2632013":	"965",	
"2632015":	"975",
"2632017":	"965",
"2632019":	"975",
"2632021":	"-10"
};

ePayment40Map = {
"2640001":	"980",	
"2640003":	"985"};

ePayment50Map = {
"2650001":	"1000",	
"2650003":	"1005",	
"2650005":	"1010",	
"2650007":	"990",	
"2650009":	"995",
"2650011":	"1025",	
"2650013":	"1015",	
"2650015":	"1020",	
"2650017":	"1030"};


ePayment52Map = {
"C1":"1035",	
"C2": "1036",	
"C6":	"1037",	
"C4":	"1038",	
"C5":	"1039",	
"C3":	"1040",	
"D1":	"1041",	
"D2":	"1042",	
"D3":	"1043",	
"D4":	"1044"}

ePayment.51",
	"-15",	"ElementNumber :"	"ePayment.51",
	"-10",	"ElementNumber :"	"ePayment.51",
	"-5",	"ElementNumber :"	"ePayment.51",
	"8001",	"ElementNumber :"	"ePayment.51",
	"8002",	"ElementNumber :"	"ePayment.51",
	"8003",	"ElementNumber :"	"ePayment.51",
	"8004",	"ElementNumber :"	"ePayment.51",
	"8005",	"ElementNumber :"	"ePayment.51",
	"8006",	"ElementNumber :"	"ePayment.51",
	"8007",	"ElementNumber :"	"ePayment.51",
	"8008",	"ElementNumber :"	"ePayment.51",
	"8009",	"ElementNumber :"	"ePayment.51",
	"8010",	"ElementNumber :"	"ePayment.51",
	"8011",	"ElementNumber :"	"ePayment.51",
	"8012",	"ElementNumber :"	"ePayment.51",
	"8013",	"ElementNumber :"	"ePayment.51",
	"8014",	"ElementNumber :"	"ePayment.51",
	"8015",	"ElementNumber :"	"ePayment.51",
	"8016",	"ElementNumber :"	"ePayment.51",
	"8017",	"ElementNumber :"	"ePayment.51",
	"8018",	"ElementNumber :"	"ePayment.51",
	"8019",	"ElementNumber :"	"ePayment.51",
	"8020",	"ElementNumber :"	"ePayment.51",
	"8021",	"ElementNumber :"	"ePayment.51",
	"8022",	"ElementNumber :"	"ePayment.51",
	"8023",	"ElementNumber :"	"ePayment.51",
	"8024",	"ElementNumber :"	"ePayment.51",
	"8025",	"ElementNumber :"	"ePayment.51",
	"8026",	"ElementNumber :"	"ePayment.51",
	"8027",	"ElementNumber :"	"ePayment.51",
	"8028",	"ElementNumber :"	"ePayment.51",
	"8029",	"ElementNumber :"	"ePayment.51",
	"8030",	"ElementNumber :"	"ePayment.51",
	"8031",	"ElementNumber :"	"ePayment.51",
	"8032",	"ElementNumber :"	"ePayment.51",
	"8033",	"ElementNumber :"	"ePayment.51",
	"8034",	"ElementNumber :"	"ePayment.51",
	"8035",	"ElementNumber :"	"ePayment.51",
	"8036",	"ElementNumber :"	"ePayment.51",
	"8037",	"ElementNumber :"	"ePayment.51",
	"8038",	"ElementNumber :"	"ePayment.51",
	"8039",	"ElementNumber :"	"ePayment.51",
	"8040",	"ElementNumber :"	"ePayment.51",
	"8041",	"ElementNumber :"	"ePayment.51",
	"8042",	"ElementNumber :"	"ePayment.51",
	"8043",	"ElementNumber :"	"ePayment.51",
	"8044",	"ElementNumber :"	"ePayment.51",
	"8045",	"ElementNumber :"	"ePayment.51",
	"8046",	"ElementNumber :"	"ePayment.51",
	"8047",	"ElementNumber :"	"ePayment.51",
	"8048",	"ElementNumber :"	"ePayment.51",
	"8049",	"ElementNumber :"	"ePayment.51",
	"8050",	"ElementNumber :"	"ePayment.51",
	"8051",	"ElementNumber :"	"ePayment.51",
	"8052",	"ElementNumber :"	"ePayment.51",
	"8053",	"ElementNumber :"	"ePayment.51",
	"8054",	"ElementNumber :"	"ePayment.51",
	"8055",	"ElementNumber :"	"ePayment.51",
	"8056",	"ElementNumber :"	"ePayment.51",
	"8057",	"ElementNumber :"	"ePayment.51",
	"8058",	"ElementNumber :"	"ePayment.51",
	"8059",	"ElementNumber :"	"ePayment.51",
	"8060",	"ElementNumber :"	"ePayment.51",
	"8061",	"ElementNumber :"	"ePayment.51",
	"8062",	"ElementNumber :"	"ePayment.51",
	"8063",	"ElementNumber :"	"ePayment.51",
	"8064",	"ElementNumber :"	"ePayment.51",
	"8065",	"ElementNumber :"	"ePayment.51",
	"8066",	"ElementNumber :"	"ePayment.51",
	"8067",	"ElementNumber :"	"ePayment.51",
	"8068",	"ElementNumber :"	"ePayment.51",
	"8069",	"ElementNumber :"	"ePayment.51",
	"8070",	"ElementNumber :"	"ePayment.51",
	"8071",	"ElementNumber :"	"ePayment.51",
	"8072",	"ElementNumber :"	"ePayment.51",
	"8073",	"ElementNumber :"	"ePayment.51",
	"8074",	"ElementNumber :"	"ePayment.51",
	"-25",	"ElementNumber :"	
	"-10",	"ElementNumber :"	
	"-5",	"ElementNumber :"	
	"10001",	"ElementNumber :"	
	
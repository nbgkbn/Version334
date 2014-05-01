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


var dContact334 = new Object;
var D01 = new Object;

var setdContact = function (businessObject)
{
    var _retArray = [];
    console.log(businessObject);
    console.log(businessObject["dContact.ContactInfoGroup"].length);
    for (var xx = 0; xx < businessObject["dContact.ContactInfoGroup"].length; xx++)
    {
        console.log(businessObject["dContact.ContactInfoGroup"][xx]);

        // dContact.01/////////////
        _val = getValue(businessObject.elements, "dContact.01");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.01") == true)
            {
                _retArray.push("<dContact.01" + NIL_V3NOT_RECORDED);
            }
            else
            {
 				_retArray.push("<dContact.01" + NIL_V3NOT_REPORTING );            }
        	}
        }
        else
        {
            _retArray.push("<dContact.01>" + val[0] + "</dContact.01>");
        };

        // dContact.02/////////////
        _val = getValue(businessObject.elements, "dContact.02");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.02") ==- true)
            {
                dContact.ContactInfoGroup["dContact.02"] = v3NOT_RECORDED;
                _retArray.push("<dContact.02" + NIL_V3NOT_RECORDED);
                D02.D02_01 = null
            }
            else
            {
                dContact.ContactInfoGroup["02"] = v2NOT_REPORTING
                D02.D02_01 = v2NOT_REPORTING;
   				_retArray.push("<dContact.02" + NIL_V3NOT_REPORTING );            }
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.02"] = _val[0];
            retArray.push("<dContact.02>" + val[0] + "</dContact.02>");
            D02.D02_01 = _val[0];
        };

        // dContact.03/////////////
        _val = getValue(businessObject.elements, "dContact.03");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.03") ==- true)
            {
                dContact.ContactInfoGroup["dContact.03"] = v3NOT_RECORDED;
                D02.D02_03 = v2NOT_RECORDED;
            	_retArray.push("<dContact.03" + NIL_V3NOT_RECORDED);
            }
            else
            {
                dContact.ContactInfoGroup["dContact.03"] = v2NOT_REPORTING
                D02.D02_03 = v2NOT_REPORTING;
   				_retArray.push("<dContact.03" + NIL_V3NOT_REPORTING );            }
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.03"] = _val[0];
            retArray.push("<dContact.03>" + val[0] + "</dContact.03>");
            D02.D02_03 = _val[0];
        };

        // dContact.04/////////////
        _val = getValue(businessObject.elements, "dContact.04");
        if (_val == null)
        {
             D02.D02_02 = v2NOT_KNOWN;
        }
        else
        {
            dContact.ContactInfoGroup["dContact.04"] = _val[0];
            D02.D02_02 = _val[0];
            retArray.push("<dContact.04>" + val[0] + "</dContact.04>");

        };


        // dContact.05/////////////
        _val = getValue(businessObject.elements, "dContact.05");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.05") ==- true)
            {
              	_retArray.push("<dContact.05" + NIL_V3NOT_RECORDED);
                D02.D02_04 = v2NOT_RECORDED;
            }
            else
            {
                dContact.ContactInfoGroup["dContact.05"] = v2NOT_REPORTING;
                D02.D02_04 = v2NOT_REPORTING;
    			_retArray.push("<dContact.05" + NIL_V3NOT_REPORTING );            }
            }
        }
        else
        {
            retArray.push("<dContact.05>" + val[0] + "</dContact.05>");
            dContact.ContactInfoGroup["dContact.05"] = _val[0];
            D02.D02_04 = _val[0];
        };

        // dContact.06/////////////
        _val = getValue(businessObject.elements, "dContact.06");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.06") ==- true)
            {
                _retArray.push("<dContact.06" + NIL_V3NOT_RECORDED);
                dContact.ContactInfoGroup["dContact.06"] = v3NOT_RECORDED;
                D2.D02_05 = v2NOT_RECORDED;
            }
            else
            {
                dContact.ContactInfoGroup["dContact.06"] = v2NOT_REPORTING;
                D2.D02_05 = v2NOT_REPORTING;
        		_retArray.push("<dContact.06" + NIL_V3NOT_REPORTING );            }
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.06"] = _val[0];
            D2.D02_05 = _val[0];
            retArray.push("<dContact.06>" + val[0] + "</dContact.06>");

        };

        // dContact.07/////////////
        _val = getValue(businessObject.elements, "dContact.07");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.07") ==- true)
            {
                dContact.ContactInfoGroup["dContact.07"] = v3NOT_RECORDED;
                D2.D02_06 = v2NOT_RECORDED;
             	_retArray.push("<dContact.07" + NIL_V3NOT_RECORDED);
            }
            else
            {
                dContact.ContactInfoGroup["dContact.07"] = v2NOT_REPORTING;
                D2.D02_06 = v2NOT_REPORTING;
            	_retArray.push("<dContact.07" + NIL_V3NOT_REPORTING );
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.07"] = _val[0];
            D2.D02_06 = _val[0];
            retArray.push("<dContact.07>" + val[0] + "</dContact.07>");

        };

        // dContact.08/////////////
        _val = getValue(businessObject.elements, "dContact.08");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.08") ==- true)
            {
                dContact.ContactInfoGroup["dContact.08"] = v3NOT_RECORDED;
                D2.D02_07 = v2NOT_RECORDED;
             	_retArray.push("<dContact.08" + NIL_V3NOT_RECORDED);
            }
            else
            {
                dContact.ContactInfoGroup["dContact.08"] = v2NOT_REPORTING;
                D2.D02_07 = v2NOT_REPORTING;
            	_retArray.push("<dContact.08" + NIL_V3NOT_REPORTING );
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.08"] = _val[0];
            D2.D02_07 = _val[0];
            retArray.push("<dContact.08>" + val[0] + "</dContact.08>");
        };


        // dContact.09/////////////
        _val = getValue(businessObject.elements, "dContact.09");
        if (_val == null)
        {
            dContact.ContactInfoGroup["dContact.09"] = null;
        }
        else
        {
            dContact.ContactInfoGroup["dContact.09"] = _val[0];
            retArray.push("<dContact.09>" + val[0] + "</dContact.09>");
        };


        // dContact.10/////////////
       _val = getValue(businessObject.elements, "dContact.10");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.10") ==- true)
            {
                dContact.ContactInfoGroup["dContact.10"] = v3NOT_RECORDED;
                D2.D02_08 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.10"] = v2NOT_REPORTING
                D2.D02_08 = v2NOT_REPORTING;
                _retArray.push("<dContact.08" + NIL_V3NOT_REPORTING );
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.10"] = _val;
            D2.D02_08 = _val;
            retArray.push("<dContact.10>" + val[0] + "</dContact.10>");
        };

        // dContact.11/////////////
        _val = getValue(businessObject.elements, "dContact.11");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.11") ==- true)
            {
                dContact.ContactInfoGroup["dContact.11"] = v3NOT_RECORDED;
                D2.D02_10 = v2NOT_RECORDED;
                _retArray.push("<dContact.11" + NIL_V3NOT_RECORDED);
            }
            else
            {
                dContact.ContactInfoGroup["dContact.11"] = v2NOT_REPORTING;
			    _retArray.push("<dContact.11" + NIL_V3NOT_REPORTING );
                D2.D02_10 = v2NOT_REPORTING;
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.11"] = _val;
            D2.D02_10 = _val;
            retArray.push("<dContact.11>" + val[0] + "</dContact.11>");
        };

        // dContact.12/////////////
        _val = getValue(businessObject.elements, "dContact.12");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.12") ==- true)
            {
                dContact.ContactInfoGroup["dContact.12"] = v3NOT_RECORDED;
                D2.D02_11 = v2NOT_RECORDED
            }
            else
            {
                dContact.ContactInfoGroup["dContact.12"] = v2NOT_REPORTING
                D2.D02_11 = v2NOT_REPORTING
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.12"] = _val;
            D2.D02_11 = _val;
            retArray.push("<dContact.12>" + val[0] + "</dContact.12>");

        };

    retArray.push("<EMSMedicalDirectorGroup>");

        // dContact.13/////////////
        _val = getValue(businessObject.elements, "dContact.13");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.13") ==- true)
            {
                dContact.ContactInfoGroup["dContact.13"] = v3NOT_RECORDED;
            }
            else
            {
                dContact.ContactInfoGroup["dContact.13"] = v2NOT_REPORTING
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.13"] = _val;
            retArray.push("<dContact.13>" + val[0] + "</dContact.13>");
        };

        // dContact.14/////////////
        _val = getValue(businessObject.elements, "dContact.14");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.14") ==- true)
            {
                dContact.ContactInfoGroup["dContact.14"] = v3NOT_RECORDED;
            }
            else
            {
                dContact.ContactInfoGroup["dContact.14"] = v2NOT_REPORTING
            }
        }
        else
        {
            dContact.ContactInfoGroup["dContact.14"] = _val;
            retArray.push("<dContact.14>" + val + "</dContact.14>");
        };

        // dContact.15/////////////
        _val = getValue(businessObject.elements, "dContact.15");
        if (_val == null)
        {
        }
        else
        {
            dContact.ContactInfoGroup["dContact.15"] = _val;
            retArray.push("<dContact.15>" + val + "</dContact.15>");
        };

        // dContact.16/////////////
        _val = getValue(businessObject.elements, "dContact.16");
        if (_val == null)
        {
        }
        else
        {
            dContact.ContactInfoGroup["dContact.16"] = _val;
            retArray.push("<dContact.16>" + val + "</dContact.16>");
        };



    retArray.push("</EMSMedicalDirectorGroup>");

    } // loop term
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
}

};
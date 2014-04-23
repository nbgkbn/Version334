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

var dPersonnel334 = new Object;
var D01 = new Object;
var setdPersonnel = function (businessObject) {
    var _retArray = [];


  // console.log(businessObject);

  	_retArray.push("<PersonnelGroup>");  
	_val = getValue(businessObject.elements, "dPersonnel.01");
    if( _val == null) 
    {
        if (isRequiredStateElement("dPersonnel.01") == true) 
        {
            ErrorList.push("dPersonnel.01 required");
            _retArray.push("<dPersonnel.01" + NIL_V3NOT_RECORDED );
            _val2= v2NOT_RECORDED;
        }
        else 
        {
		_retArray.push("<dPersonnel.09" + NIL_V3NOT_REPORTING);
        _val2= v2NOT_REPORTING;
        }
        D08.D08_01 = _val2;
    }
    else 
    {
       	D08.D08_01= _val[0];
        NameGroup["dPersonnel.01"] = _val[0];
    	_retArray.push("<dPersonnel.01>" + val[0] + "</dPersonnel.01>");

    };
        
	_val = getValue(businessObject.elements, "dPersonnel.02");
    if( _val == null) 
    {
        if (isRequiredStateElement("dPersonnel.02") == true) 
        {
            ErrorList.push("dPersonnel.02 required");
            _retArray.push("<dPersonnel.02" + NIL_V3NOT_RECORDED );
            _val2= v2NOT_RECORDED;
        }
        else 
        {
			_retArray.push("<dPersonnel.02" + NIL_V3NOT_REPORTING);
            _val2= v2NOT_REPORTING;
        }
        D08.D08_03 = _val2;
    }
    else 
    {
       	D08.D08_03= _val[0];
        NameGroup["dPersonnel.02"] = _val[0];
    	_retArray.push("<dPersonnel.02>" + val[0] + "</dPersonnel.02>");

    };
    
    _val = getValue(businessObject.elements, "dPersonnel.03");
    if( _val == null) 
    {
        if (isRequiredStateElement("dPersonnel.03") == true) 
        {
            ErrorList.push("dPersonnel.03 required");
            _retArray.push("<dPersonnel.03" + NIL_V3NOT_RECORDED );
            _val2= v2NOT_RECORDED;
        }
        else 
        {
			_retArray.push("<dPersonnel.03" + NIL_V3NOT_REPORTING);
            _val2= v2NOT_REPORTING;
        }
        NameGroup["dPersonnel.03"] = _val;
        D08.D08_03= = _val2;
    }
    else 
    {
        D08.D08_03= = _val[0];
        NameGroup["dPersonnel.03"] = _val[0];
    	_retArray.push("<dPersonnel.03>" + val[0] + "</dPersonnel.03>");

    };
  _val = getValue(businessObject.elements, "dPersonnel.09");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.09") == true) {
            ErrorList.push("dPersonnel.09 required");
            _retArray.push("<dPersonnel.09" + NIL_V3NOT_RECORDED);
            _val2 = v2NOT_RECORDED;
        }
        else
        {
		_retArray.push("<dPersonnel.09" + NIL_V3NOT_REPORTING);
            _val2= v2NOT_REPORTING;
        }
       	D08.D08_12 =  _val2;
    	PersonnelGroup["dPersonnel.09"] = _val;
    }
    else {
        D08.D08_12 =  _val[0];
        PersonnelGroup["dPersonnel.09"] = _val[0];
    	_retArray.push("<dPersonnel.09>" + val[0] + "</dPersonnel.09>");

    };


    _val = getValue(businessObject.elements, "dPersonnel.10");
    if (_val == null) {
        PersonnelGroup["dPersonnel.10"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.10"] = _val;
        D08.D08_10 = _val;
        _retArray.push("<dPersonnel.10>" + val[0] + "</dPersonnel.10>");

    };
    
    _val = getValue(businessObject.elements, "dPersonnel.11");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.11") == true) {
            ErrorList.push("dPersonnel.11 required");
            _retArray.push("<dPersonnel.11" + NIL_V3NOT_RECORDED);
            _val2 = v2NOT_RECORDED;
        }
        else
        {
		_retArray.push("<dPersonnel.11" + NIL_V3NOT_REPORTING);
            _val2= v2NOT_REPORTING;
        }
        D08.D08_11 =  _val2;
        PersonnelGroup["dPersonnel.11"] = _val;
    }
    else 
    {
        D08.D08_11 =  _val[0];
        PersonnelGroup["dPersonnel.11"] = _val[0];
        _retArray.push("<dPersonnel.11>" + val[0] + "</dPersonnel.11>");

    };

    _val = getValue(businessObject.elements, "dPersonnel.12");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.12") == true) {
            ErrorList.push("dPersonnel.12 required");
            _retArray.push("<dPersonnel.11" + NIL_V3NOT_RECORDED);
            _val2 = v2NOT_RECORDED;
        }
        else
        {
		_retArray.push("<dPersonnel.11" + NIL_V3NOT_REPORTING);
            _val2= v2NOT_REPORTING;
        }
       	D08.D08_12 =  _val2;
    	PersonnelGroup["dPersonnel.12"] = _val;
    }
    else {
        D08.D08_12 =  _val[0];
        PersonnelGroup["dPersonnel.12"] = _val[0];
    	_retArray.push("<dPersonnel.12>" + val[0] + "</dPersonnel.12>");

    };
    
    _val = getValue(businessObject.elements, "dPersonnel.13");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.13") == true) {
            ErrorList.push("dPersonnel.13 required");
            _retArray.push("<dPersonnel.11" + NIL_V3NOT_RECORDED);
            _val2 = v2NOT_RECORDED;
        }
        else
        {
		_retArray.push("<dPersonnel.11" + NIL_V3NOT_REPORTING);
            _val2= v2NOT_REPORTING;
        }
       	D08.D08_13 =  _val2;
    	PersonnelGroup["dPersonnel.13"] = _val;
    }
    else {
        D08.D08_13 =  setD2("dPersonnel.13", _val);
        PersonnelGroup["dPersonnel.13"] = _val;
    	_retArray.push("<dPersonnel.13>" + val[0] + "</dPersonnel.13>");
    };

    _val = getValue(businessObject.elements, "dPersonnel.14");
    if (_val == null) {
       
        PersonnelGroup["dPersonnel.14"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.14"] = _val[0];
    	_retArray.push("<dPersonnel.14>" + val[0] + "</dPersonnel.14>");

    };

    _val = getValue(businessObject.elements, "dPersonnel.15");
    if (_val == null) {
       
        PersonnelGroup["dPersonnel.15"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.15"] = _val[0];
    	_retArray.push("<dPersonnel.15>" + val[0] + "</dPersonnel.15>");

    };

    _val = getValue(businessObject.elements, "dPersonnel.16");
    if (_val == null) {
       
        PersonnelGroup["dPersonnel.16"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.16"] = _val;
    	_retArray.push("<dPersonnel.16>" + val[0] + "</dPersonnel.16>");

    };

    _val = getValue(businessObject.elements, "dPersonnel.17");
    if (_val == null) {
       
        PersonnelGroup["dPersonnel.17"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.17"] = _val;
    	_retArray.push("<dPersonnel.17>" + val[0] + "</dPersonnel.17>");

    };
    
    _val = getValue(businessObject.elements, "dPersonnel.20");
    if (_val == null) {
        PersonnelGroup["dPersonnel.20"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.20"] = _val[0];
    	_retArray.push("<dPersonnel.20>" + val[0] + "</dPersonnel.20>");

    };

    _val = getValue(businessObject.elements, "dPersonnel.21");
    if (_val == null) {
        D07.D07_01 =  null;
        PersonnelGroup["dPersonnel.21"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.21"] = _val;
	    D07.D07_01 =  _val[0];
    	_retArray.push("<dPersonnel.21>" + val[0] + "</dPersonnel.21>");

    };

    _val = getValue(businessObject.elements, "dPersonnel.28");
    if (_val == null) {
        PersonnelGroup["dPersonnel.28"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.28"] = _val[0];
    	_retArray.push("<dPersonnel.28>" + val[0] + "</dPersonnel.28>");

    };
    
    _val = getValue(businessObject.elements, "dPersonnel.29");
    if (_val == null) {
        PersonnelGroup["dPersonnel.29"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.29"] = _val[0];
    	_retArray.push("<dPersonnel.29>" + val[0] + "</dPersonnel.29>");

    };
    
    _val = getValue(businessObject.elements, "dPersonnel.30");
    if (_val == null) {
        PersonnelGroup["dPersonnel.30"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.30"] = _val[0];
    	_retArray.push("<dPersonnel.30>" + val[0] + "</dPersonnel.30>");

    };
    
    _val = getValue(businessObject.elements, "dPersonnel.31");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.31") == true) {
            ErrorList.push("dPersonnel.13 required");
            _retArray.push("<dPersonnel.11" + NIL_V3NOT_RECORDED);
            _val2 = v2NOT_RECORDED;
        }
        else
        {
		_retArray.push("<dPersonnel.11" + NIL_V3NOT_REPORTING);
            _val2= v2NOT_REPORTING;
        }
       	D07.D07_03 =  _val2;
    	PersonnelGroup["dPersonnel.31"] = _val;
    }
    else {
        D07.D07_03 =  setD2("dPersonnel.31",_val);
        PersonnelGroup["dPersonnel.31"] = _val;
    	_retArray.push("<dPersonnel.31>" + val[0] + "</dPersonnel.31>");

    };  
    
	_val = getValue(businessObject.elements, "dPersonnel.32");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.32") == true) {
            ErrorList.push("dPersonnel.32 required");
            _retArray.push("<dPersonnel.11" + NIL_V3NOT_RECORDED);
            _val2 = v2NOT_RECORDED;
        }
        else
        {
		_retArray.push("<dPersonnel.11" + NIL_V3NOT_REPORTING);
            _val2= v2NOT_REPORTING;
        }
       	D07.D07_04 =  _val2;
    	PersonnelGroup["dPersonnel.32"] = _val;
    }
    else {
        D07.D07_04 =  _val;
        PersonnelGroup["dPersonnel.32"] = _val;
    	_retArray.push("<dPersonnel.32>" + val[0] + "</dPersonnel.32>");

    };
    
    _val = getValue(businessObject.elements, "dPersonnel.33");
    if (_val == null) {
    	PersonnelGroup["dPersonnel.33"] = null;
    }
    else {
        D07.D07_04 =  _val;
        PersonnelGroup["dPersonnel.33"] = _val[0];
    	_retArray.push("<dPersonnel.33>" + val[0] + "</dPersonnel.33>");

    }; 
   
   	_val = getValue(businessObject.elements, "dPersonnel.34");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.34") == true) {
            ErrorList.push("dPersonnel.34 required");
            _retArray.push("<dPersonnel.11" + NIL_V3NOT_RECORDED);
        }
        else
        {
		_retArray.push("<dPersonnel.11" + NIL_V3NOT_REPORTING);
        }
    	PersonnelGroup["dPersonnel.34"] = _val;
    }
    else {
        PersonnelGroup["dPersonnel.34"] = _val;
    	_retArray.push("<dPersonnel.34>" + val[0] + "</dPersonnel.34>");

    }; 
    
       	_val = getValue(businessObject.elements, "dPersonnel.35");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.35") == true) {
            ErrorList.push("dPersonnel.35 required");
            _retArray.push("<dPersonnel.11" + NIL_V3NOT_RECORDED);
        }
        else
        {
			_retArray.push("<dPersonnel.11" + NIL_V3NOT_REPORTING);
        }
    	PersonnelGroup["dPersonnel.35"] = _val;
    }
    else {
        PersonnelGroup["dPersonnel.35"] = _val;
    	_retArray.push("<dPersonnel.35>" + val[0] + "</dPersonnel.35>");

    }; 
    
    _val = getValue(businessObject.elements, "dPersonnel.36");
    if (_val == null) {
        D08.D08_19 =  null;
        PersonnelGroup["dPersonnel.36"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.36"] = _val[0];
	     D08.D08_19 =  _val[0];
    	_retArray.push("<dPersonnel.36>" + val[0] + "</dPersonnel.36>");

    };
    _val = getValue(businessObject.elements, "dPersonnel.37");
    if (_val == null) {
        D08.D08_20 =  null;
        PersonnelGroup["dPersonnel.37"] = null;
    }
    else {
        PersonnelGroup["dPersonnel.21"] = _val[0];
	     D08.D08_20 =  _val[0];
    	_retArray.push("<dPersonnel.21>" + val[0] + "</dPersonnel.21>");

    };
    	_retArray.push("</PersonnelGroup>");  

    return 
};
var setAgencyServiceGroup = function (groupObject) {
    var _val = null;
    var _retArray = [];
    var AgencyServiceGroup = new Object;

    for (var i = 0; i < groupObject.length ; i++)
    {        
        _val = (groupObject[i].elements, "dPersonnel.05");
        if (_val == null)
        {
            ErrorList.push("dPersonnel.05 National Element");
        }
        else
        {
            AgencyServiceGroup["dPersonnel.05"] = _val[0];
        	_retArray.push("<dPersonnel.05>" + val[0] + "</dPersonnel.05>");

        };

        _val = getValue(groupObject[i].elements, "dPersonnel.06");
        if (_val == null)
        {
            ErrorList.unshift("dPersonnel.06 National Element");
        }
        else
        {
            AgencyServiceGroup["dPersonnel.06"] = _val;
            D01.D01_21 = _val;
        	_retArray.push("<dPersonnel.05>" + val[0] + "</dPersonnel.05>");
        };

        _val = getValue(groupObject[i].elements, "dPersonnel.07");
        if (_val == null)
        {
            ErrorList.push("dPersonnel.07 required");
            AgencyServiceGroup["dPersonnel.07"] = v3NOT_RECORDED;        
        }
        else
        {
            AgencyServiceGroup["dPersonnel.07"] = _val;
            	_retArray.push("<dPersonnel.05>" + val[0] + "</dPersonnel.05>");

        };

        _val = getValue(groupObject[i].elements, "dPersonnel.08");
        if (_val == null)
        {
            ErrorList.push("dPersonnel.08 required");
            AgencyServiceGroup["dPersonnel.08"] = v3NOT_RECORDED            
        }
        else
        {
            AgencyServiceGroup["dPersonnel.08"] = _val;
            	_retArray.push("<dPersonnel.05>" + val[0] + "</dPersonnel.05>");

        };
//        console.log(AgencyServiceGroup);
        _retArray.push(AgencyServiceGroup)
    };
    
    
    
    return _retArray;
}
var setAgencyYearGroup = function (groupObject) {
    var _retArray = [];
    var _val ="";
    var AgencyYearGroup = new Object;

    for (var i = 0; i < groupObject.length ; i++) {
        _val = (groupObject[i].elements, "dPersonnel.15");
        if (_val == null) {
            ErrorList.push("dPersonnel.15 National Element");
        }
        else {
            AgencyYearGroup["dPersonnel.15"] = _val[0];
            D01.D01_10 = _val[0];
        	_retArray.push("<dPersonnel.15>" + val[0] + "</dPersonnel.15>");

        };

        _val = getValue(groupObject[i].elements, "dPersonnel.16");
        if (_val == null) {
            ErrorList.push("dPersonnel.16 required");
            _retArray.push("<dPersonnel.16" + NIL_V3NOT_RECORDED);
            D01.D01_12 = null;
        }
        else {
            AgencyYearGroup["dPersonnel.16"] = _val[0];
            D01.D01_12 = _val[0];
        	_retArray.push("<dPersonnel.16>" + val[0] + "</dPersonnel.16>");

        };

        _val = getValue(groupObject[i].elements, "dPersonnel.17");
        if (_val == null) {
            ErrorList.push("dPersonnel.17 required");
            _retArray.push("<dPersonnel.17" + NIL_V3NOT_RECORDED);
            D01.D01_13 = null;
        }
        else {
            AgencyYearGroup["dPersonnel.17"] = _val[0];
            D01.D01_13 = _val[0];
        	_retArray.push("<dPersonnel.17>" + val[0] + "</dPersonnel.17>");

        };

        _val = getValue(groupObject[i].elements, "dPersonnel.18");
        if (_val == null) {
            ErrorList.push("dPersonnel.18 required");
            _retArray.push("<dPersonnel.18" + NIL_V3NOT_RECORDED);
            D01.D01_14 = null;
        }
        else {
            AgencyYearGroup["dPersonnel.18"] = _val[0];
            D01.D01_14 = _val[0];
        	_retArray.push("<dPersonnel.18>" + val[0] + "</dPersonnel.18>");

        };
        _val = getValue(groupObject[i].elements, "dPersonnel.19");
        if (_val == null) {
            ErrorList.push("dPersonnel.19 required");
            _retArray.push("<dPersonnel.19" + NIL_V3NOT_RECORDED);
            D01.D01_15 = null;
        }
        else {
            AgencyYearGroup["dPersonnel.19"] = _val[0];
            D01.D01_15 = _val[0];
        	_retArray.push("<dPersonnel.19>" + val[0] + "</dPersonnel.19>");

        };


        _val = getValue(groupObject[i].elements, "dPersonnel.20");
        if (_val == null) {
            ErrorList.push("dPersonnel.20 required");
            _retArray.push("<dPersonnel.20" + NIL_V3NOT_RECORDED);
            D01.D01_16 = null;
        }
        else {
            AgencyYearGroup["dPersonnel.20"] = _val[0];
            D01.D01_16 = _val[0];
        	_retArray.push("<dPersonnel.20>" + val[0] + "</dPersonnel.20>");

        };

        _val = getValue(groupObject[i].elements, "dPersonnel.21");
        if (_val == null) {
            ErrorList.push("dPersonnel.21 required");
            _retArray.push("<dPersonnel.21" + NIL_V3NOT_RECORDED);
            D01.D01_17 = null;
        }
        else {
            AgencyYearGroup["dPersonnel.21"] = _val[0];
            D01.D01_17 = _val[0];
        	_retArray.push("<dPersonnel.21>" + val[0] + "</dPersonnel.21>");

        };

        _val = getValue(groupObject[i].elements, "dPersonnel.22");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.22") == true) {
                ErrorList.push("dPersonnel.22 required");
                _retArray.push("<dPersonnel.22" + NIL_V3NOT_RECORDED);
                D01.D01_18 = null;
            }
        }
        else {
            AgencyYearGroup["dPersonnel.22"] = _val[0];
            D01.D01_18 = _val[0];
        	_retArray.push("<dPersonnel.22>" + val[0] + "</dPersonnel.22>");

        };

        _retArray.push(AgencyYearGroup);
    }
    return _retArray;
};


var setNameGroup = function(businessObject)
{
	var NameGroup = new Object:
 
	return NameGroup;
};
var setCertificationLevelGroup = function(businessObject)
{
	var CertificationLevelGroup = new Object:
	for (var i = 0; i < groupObject.length ; i++)
    {   
 	_val = getValue(businessObject.elements, "dPersonnel.38");
    if( _val == null) 
    {
        CertificationLevelGroup["dPersonnel.38"] = null;
        D07.D07_05 = null;
    }
    else 
    {
       	D07.D07_05= _val[0];
        CertificationLevelGroup["dPersonnel.38"] = _val[0];
    };
    
     _val = getValue(businessObject.elements, "dPersonnel.38");
    if( _val == null) 
    {
        CertificationLevelGroup["dPersonnel.38"] = null;
        D07.D07_06 = null;
    }
    else 
    {
       	D07.D07_06= _val[0];
        CertificationLevelGroup["dPersonnel.38"] = _val[0];
    };
}
	return CertificationLevelGroup;
};



var setAddressGroup = function(businessObject)
{
	var AddressGroup = new Object:
 	_val = getValue(businessObject.elements, "dPersonnel.04");
    if( _val == null) 
    {
        AddressGroup["dPersonnel.01"] = null;
        D08.D08_04 = null;
    }
    else 
    {
       	D08.D08_04= _val[0];
        AddressGroup["dPersonnel.04"] = _val[0];
    };
    
     _val = getValue(businessObject.elements, "dPersonnel.05");
    if( _val == null) 
    {
        AddressGroup["dPersonnel.05"] = null;
        D08.D08_05 = null;
    }
    else 
    {
       	D08.D08_05= _val[0];
        AddressGroup["dPersonnel.05"] = _val[0];
    };
        
     _val = getValue(businessObject.elements, "dPersonnel.06");
    if( _val == null) 
    {
        AddressGroup["dPersonnel.06"] = null;
        D08.D08_06 = null;
    }
    else 
    {
       	D08.D08_06= _val[0];
        AddressGroup["dPersonnel.06"] = _val[0];
    };
        
     _val = getValue(businessObject.elements, "dPersonnel.07");
    if( _val == null) 
    {
        AddressGroup["dPersonnel.07"] = null;
        D08.D08_07 = null;
    }
    else 
    {
       	D08.D08_07= _val[0];
        AddressGroup["dPersonnel.07"] = _val[0];
    };
        
	_val = getValue(businessObject.elements, "dPersonnel.08");
    if( _val == null) 
    {
        AddressGroup["dPersonnel.08"] = null;
    }
    else 
    {
        AddressGroup["dPersonnel.08"] = _val[0];
    };
    
	return AddressGroup;
};

var setLicensureGroup= function(businessObject)
{
	var LicensureGroup = new Object:
	for (var i = 0; i < groupObject.length ; i++)
    {   
    _val = getValue(businessObject.elements, "dPersonnel.22");
    if( _val == null) 
    {
        if (isRequiredStateElement("dPersonnel.22") == true) 
        {
            ErrorList.push("dPersonnel.22 required");
            _val= v3NOT_RECORDED;
        }
        else 
        {
            _val= v3NOT_REPORTING;
        }
        LicensureGroup["dPersonnel.22"] = _val;
    }
    else 
    {
        LicensureGroup["dPersonnel.22"] = _val[0];
    };
    
    _val = getValue(businessObject.elements, "dPersonnel.23");
    if( _val == null) 
    {
        if (isRequiredStateElement("dPersonnel.23") == true) 
        {
            ErrorList.push("dPersonnel.23 required");
            _val= v3NOT_RECORDED;
            _val2= v2NOT_RECORDED;
        }
        else 
        {
            _val= v3NOT_REPORTING;
            _val2= v2NOT_REPORTING;
        }
        LicensureGroup["dPersonnel.23"] = _val;
        D07.D07_02= = _val2;
    }
    else 
    {
        D07.D07_02= = _val[0];
        LicensureGroup["dPersonnel.23"] = _val[0];
    };  
    
    _val = getValue(businessObject.elements, "dPersonnel.24");
    if( _val == null) 
    {
        if (isRequiredStateElement("dPersonnel.24") == true) 
        {
            ErrorList.push("dPersonnel.24 required");
            _val= v3NOT_RECORDED;
            _val2= v2NOT_RECORDED;
        }
        else 
        {
            _val= v3NOT_REPORTING;
            _val2= v2NOT_REPORTING;
        }
        LicensureGroup["dPersonnel.24"] = _val;
        D08.D08_15= = _val2;
    }
    else 
    {
        D08.D08_15= = _val[0];
        LicensureGroup["dPersonnel.24"] = _val[0];
    };  
    
    _val = getValue(businessObject.elements, "dPersonnel.25");
    if( _val == null) 
    {
        LicensureGroup["dPersonnel.25"] = null;
        D08.D08_17 = null;
    }
    else 
    {
       	D08.D08_17= _val[0];
        LicensureGroup["dPersonnel.25"] = _val[0];
    };
        
     _val = getValue(businessObject.elements, "dPersonnel.26");
    if( _val == null) 
    {
        LicensureGroup["dPersonnel.26"] = null;
        D08.D08_18 = null;
    }
    else 
    {
       	D08.D08_18= _val[0];
        LicensureGroup["dPersonnel.26"] = _val[0];
    };
        
     _val = getValue(businessObject.elements, "dPersonnel.27");
    if( _val == null) 
    {
        LicensureGroup["dPersonnel.27"] = null;
    }
    else 
    {
        LicensureGroup["dPersonnel.27"] = _val[0];
    };
	}  
	return LicensureGroup;
};



var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (payload, valueObject) {
    if (valueObject == "dPersonnel.05") {
    //    console.log(payload);
     //   console.log(valueObject);
    }
        
    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < payload.length) {
        if (_bFound == false)
        {
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
        case "dPersonnel.09":

            if (dPersonnel09CodeMap[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dPersonnel09CodeMap[valueArray[0]]);
            }
            break;
        case "dPersonnel.10":
            for (i = 0; i < valueArray.length; i++) {
                if (dPersonnel10CodeMap[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(dPersonnel09CodeMap[valueArray[i]]);
                }
            }
            break;
        case "dPersonnel.11":

            if (dPersonnel11CodeMap[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dPersonnel11CodeMap[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}

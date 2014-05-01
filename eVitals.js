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

var eVitals = new Object;
var E14 = new Object;

var _retArray = [];

_retArray.push = "<eVitals>";
var seteVitals = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
    }

_retArray.push("<eVitals.VitalsGroup>");

    if(typeof businessObject["eVitals.VitalsGroup"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["eVitals.VitalsGroup"].length);
        
        for (var xx = 0; xx < businessObject["eVitals.VitalsGroup"].length; xx++) 
        {
            console.log(businessObject["eVitals.VitalsGroup"][xx]);

            //eVital.01/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.01");
            if (_val == null)
            {
                VitalsGroup["eVitals.01"] = v3NOT_RECORDED;
                E14.E14_01 = null
                _retArray.push("<eVitals.01" + NIL_V3NOT_RECORDED);
            }         
            else 
            {
                _retArray.push("<eVitals.01>" + val[0] + "</eVitals.01>");
                VitalsVitalsGroup["eVitals.01"] = _val[0];
                E14.E14_01 = _val[0];
            };


            //eVital.02/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.02");
            if (_val == null)
            {
                VitalsGroup["eVitals.02"] = v3NOT_RECORDED;
                E14.E14_02 = v2NOT_RECORDED;
                _retArray.push("<eVitals.02" + NIL_V3NOT_RECORDED );
            }
            else 
            {
                VitalsGroup["eVitals.02"] = _val[0];
                E14.E14_02 = D2Val("eVitals.02", _val[0]);
                _retArray.push("<eVitals.02>" + val[0] + "</eVitals.02>");
            };

            _retArray.push("<CardiacRhythmGroup>");

            //eVital.03/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.03");
            if (_val == null)
            {
                if(isRequiredStateElement("eVitals.03"))
                {
                    if(_val[0] == 8801019)
                    {
                        _retArray.push("<eVitals.03" + PN_REFUSED_IS_NILLABLE);
                        E14.E14_03 = v2NOT_KNOWN;
                    }
                    else if(_val[0] == 8801023)
                    {
                        _retArray.push("<eVitals.03" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                        E14.E14_03 = v2NOT_KNOWN;
                    }
                    else{
                        _retArray.push("<eVitals.03" + NIL_V3NOT_RECORDED );
                        CardiacRhythmGroup["eVitals.03"] = v3NOT_RECORDED;
                        E14.E14_03 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                    var arr1 = [];
                    var arr2 = [];
                    VitalsGroup["eVitals.03"] = _val;
                    for (var i = 0; i < businessObject.elements; i++) {
                    {
                        arr2[i] = D2Val("eVitals.03", _val[i]);
                        arr1[i]=_val[i];
                        _retArray.push("<eVitals.03>" + val[i] + "</eVitals.03>");
                    }
                    E14.E14_13 = arr2.slice(0);;
                    VitalsGroup["eVitals.03"] = arr1.slice(0);
                }; 

                //eVital.04/////////////////////////////
                 _val = getValue(businessObject.elements, "eVitals.04");
                if (_val == null)
                {
                    _retArray.push("<eVitals.04" + NIL_V3NOT_RECORDED );
                    VitalsGroup["eVitals.04"] = v3NOT_RECORDED;                    
                }
                else 
                {
                    VitalsGroup["eVitals.04"] = _val[0];                    
                    _retArray.push("<eVitals.04>" + val[0] + "</eVitals.04>");
                }; 


                    //eVital.05/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.05");
                if (_val == null)
                {
                    _retArray.push("<eVitals.05" + NIL_V3NOT_RECORDED );
                    VitalsGroup["eVitals.05"] = v3NOT_RECORDED;
                }
                else 
                {
                    var arr1 = [];
                    for (var i = 0; i < businessObject.elements; i++) {
                        {
                            arr2[i] = D2Val("eVitals.05", _val[i]);
                            arr1[i]=_val[i];
                            _retArray.push("<eVitals.05>" + val[i] + "</eVitals.03>");
                        }
                        VitalsGroup["eVitals.05"] = arr1.slice(0);
                };            
                _retArray.push("</CardiacRhythmGroup>");          
                
                _retArray.push("<BloodPressureGroup>");


                //eVital.06/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.06");
                if (_val == null)
                {
                    if(_val[0] == 8801019)
                    {
                        _retArray.push("<eVitals.06" + PN_REFUSED_IS_NILLABLE);
                        E14.E14_04 = v2NOT_KNOWN;

                    }
                    else if(_val[0] == 8801023)
                    {
                        _retArray.push("<eVitals.06" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                        E14.E14_04 = v2NOT_KNOWN;
                    }
                    else if(_val[0] == 8801005)
                    {
                        _retArray.push("<eVitals.06" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                        E14.E14_04 = v2NOT_KNOWN;
                    }                         
                    else
                    {
                        _retArray.push("<eVitals.06" + NIL_V3NOT_RECORDED );
                        VitalsGroup["eVitals.06"] = v3NOT_RECORDED;
                        E14.E14_04 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                    VitalsGroup["eVitals.06"] = _val[0];
                    E14.E14_04 =  _val[0];
                    _retArray.push("<eVitals.06>" + val[0] + "</eVitals.06>");
                }; 


                //eVitals.07/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.07");
                if (_val == null)
                {
                    if(isRequiredStateElement("eVitals.07"))
                    {
                        if(_val[0] == 8801019)
                        {
                            _retArray.push("<eVitals.07" + PN_REFUSED_IS_NILLABLE);
                            E14.E14_05 = v2NOT_KNOWN;
                        }
                        else if(_val[0] == 8801023)
                        {
                            _retArray.push("<eVitals.07" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                            E14.E14_05 = v2NOT_KNOWN;
                        }
                        else if(_val[0] == 8801005)
                        {
                            _retArray.push("<eVitals.07" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                            E14.E14_05 = v2NOT_KNOWN;
                        }            
                        else
                        {
                            _retArray.push("<eVitals.07" + NIL_V3NOT_RECORDED );
                            VitalsGroup["eVitals.07"] = v3NOT_RECORDED;
                            E14.E14_05 = v2NOT_RECORDED;
                        }            
                    }
                    else 
                    {   
                        _retArray.push("<eVitals.07" + NIL_V3NOT_REPORTING );
                        VitalsGroup["eVitals.07"] = v3NOT_REPORTING;
                        E14.E14_05 = v2NOT_REPORTING;}
                    }
                else
                {
                    VitalsGroup["eVitals.07"] = _val[0];
                    E14.E14_05 = D2Val("eVitals.07", _val[0]);
                    _retArray.push("<eVitals.07>" + val[0] + "</eVitals.07>");
                };
                
                //eVital.08/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.08");
                if (_val == null)
                {
                    _retArray.push("<eVitals.08" + NIL_V3NOT_RECORDED );
                    VitalsGroup["eVitals.08"] = v3NOT_RECORDED;
                    E14.E14_06 = v2NOT_RECORDED;                              
                }
                else 
                {
                    VitalsGroup["eVitals.08"] = _val[0];
                    E14.E14_04 = D2Val("eVitals.08", _val[0]);
                    _retArray.push("<eVitals.08>" + _val[0] + "</eVitals.08>");
                }; 

                
                //eVital.09/////////////////////////////               
                _val = getValue(businessObject.elements, "eVitals.09");
                if (_val == null)
                {
                    VitalsGroup["eVitals.09"] = null;
                    _retArray.push("<eVitals.09>" + null+ "</eVitals.09>");
                }
                else 
                {
                    VitalsGroup["eVitals.09"] = _val[0];
                    _retArray.push("<eVitals.09>" + val[0] + "</eVitals.09>");
                };
        
            _retArray.push("<BloodPressureGroup>");
            _retArray.push("<HeartRateGroup>");

                //eVital.10/////////////////////////////               
                _val = getValue(businessObject.elements, "eVitals.10");
                if (_val == null)
                {
                    if(_val[0] == 8801019)
                    {
                        _retArray.push("<eVitals.10" + PN_REFUSED_IS_NILLABLE);
                        E14.E14_07 = v2NOT_KNOWN;

                    }
                    else if(_val[0] == 8801023)
                    {
                        _retArray.push("<eVitals.10" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                        E14.E14_07 = v2NOT_KNOWN;

                    }
                    else if(_val[0] == 8801005)
                    {
                        _retArray.push("<eVitals.10" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                        E14.E14_07 = v2NOT_KNOWN;
                    }                         
                    else
                    {
                        _retArray.push("<eVitals.10" + NIL_V3NOT_RECORDED );
                        VitalsGroup["eVitals.10"] = v3NOT_RECORDED;
                        E14.E14_07 = v2NOT_RECORDED;
                    }            
                }
                else 
                {
                    VitalsGroup["eVitals.10"] = _val[0];
                    E14.E14_04 = D2Val("eVitals.10", _val[0]);
                    _retArray.push("<eVitals.10>" + val[0] + "</eVitals.10>");
                }; 


                //eVital.11/////////////////////////////               
                _val = getValue(businessObject.elements, "eVitals.11");
                if (_val == null)
                {            
                }                
                else 
                {
                    VitalsGroup["eVitals.11"] = _val[0];
                    _retArray.push("<eVitals.11>" + val[0] + "</eVitals.11>");
                };

            _retArray.push("</HeartRateGroup>");
            _retArray.push("<GlasgowScoreGroup>");
            
            //eVital.19/////////////////////////////               
            _val = getValue(businessObject.elements, "eVitals.19");
            if (_val == null)
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eVitals.19" + PN_REFUSED_IS_NILLABLE);
                    E14.E14_15 = v2NOT_KNOWN;
                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eVitals.19" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                    E14.E14_15 = v2NOT_KNOWN;
                }
                else
                {
                    _retArray.push("<eVitals.19" + NIL_V3NOT_RECORDED );
                    VitalsGroup["eVitals.19"] = v3NOT_RECORDED;
                    E14.E14_15 = v2NOT_RECORDED;
                }            
            }
            else 
            {
                VitalsGroup["eVitals.19"] = _val[0];
                E14.E14_15 = D2Val("eVitals.19", _val[0]);
                _retArray.push("<eVitals.19>" + val[0] + "</eVitals.19>");
            }; 


            //eVital.20/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.20");
            if (_val == null)
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eVitals.20" + PN_REFUSED_IS_NILLABLE);
                    E14.E14_16 = v2NOT_KNOWN;
                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eVitals.20" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                    E14.E14_16 = v2NOT_KNOWN;
                }
                else
                {
                    _retArray.push("<eVitals.20" + NIL_V3NOT_RECORDED );
                    VitalsGroup["eVitals.20"] = v3NOT_RECORDED;
                    E14.E14_16 = v2NOT_RECORDED;
                }            
            }
            else 
            {
                VitalsGroup["eVitals.20"] = _val[0];
                E14.E14_16 = D2Val("eVitals.20", _val[0]);
                _retArray.push("<eVitals.20>" + val[0] + "</eVitals.20>");
            }; 

            //eVital.21/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.21");
            if (_val == null)
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eVitals.21" + PN_REFUSED_IS_NILLABLE);
                    E14.E14_17 = v2NOT_KNOWN;

                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eVitals.21" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                    E14.E14_17 = v2NOT_KNOWN;
                }
                else
                {
                    _retArray.push("<eVitals.21" + NIL_V3NOT_RECORDED );
                    VitalsGroup["eVitals.21"] = v3NOT_RECORDED;
                    E14.E14_17 = v2NOT_RECORDED;
                }            
            }
            else 
            {
                VitalsGroup["eVitals.21"] = _val[0];
                E14.E14_17 = D2Val("eVitals.21", _val[0]);
                _retArray.push("<eVitals.21>" + val[0] + "</eVitals.21>");
            };

                    //eVital.22/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.22");
            if (_val == null)
            {              
                _retArray.push("<eVitals.22" + NIL_V3NOT_RECORDED );
                VitalsGroup["eVitals.22"] = v3NOT_RECORDED;
                E14.E14_12 = v2NOT_RECORDED;              
            }
            else 
            {             
                var arr1 = [];
                var arr2 = [];
                VitalsGroup["eVitals.22"] = _val;
                for (var i = 0; i < businessObject.elements; i++) 
                {
                    arr2[i] = D2Val("eVitals.22", _val[i]);
                    arr1[i]=_val[i];
                    _retArray.push("<eVitals.22>" + val[i] + "</eVitals.22>");
                }
                E14.E14_18 = arr2.slice(0);;
                VitalsGroup["eVitals.22"] = arr1.slice(0);                
            };
      

            //eVital.23/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.23");
            if (_val == null)
            {
                if(isRequiredStateElement("eVitals.23"))
                {
                    if(_val[0] == 8801019)
                    {
                        _retArray.push("<eVitals.23" + PN_REFUSED_IS_NILLABLE);
                        E14.E14_19 = v2NOT_KNOWN;
                    }
                    else if(_val[0] == 8801023)
                    {
                        _retArray.push("<eVitals.23" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                        E14.E14_19 = v2NOT_KNOWN;
                    }
                    else if(_val[0] == 8801005)
                    {
                        _retArray.push("<eVitals.23" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                        E14.E14_19 = v2NOT_KNOWN;
                    }            
                    else
                    {
                        _retArray.push("<eVitals.23" + NIL_V3NOT_RECORDED );
                        VitalsGroup["eVitals.23"] = v3NOT_RECORDED;
                        E14.E14_19 = v2NOT_RECORDED;
                    }            
                }
                else 
                {   
                    _retArray.push("<eVitals.23" + NIL_V3NOT_REPORTING );
                    VitalsGroup["eVitals.23"] = v3NOT_REPORTING;
                    E14.E14_19 = v2NOT_REPORTING;}
            }
            else
            {
                VitalsGroup["eVitals.23"] = _val[0];
                E14.E14_19 = _val[0];
                _retArray.push("<eVitals.23>" + _val[0] + "</eVitals.23>");
            };
      
        _retArray.push("</GlasgowScoreGroup>");
        _retArray.push("<TemperatureGroup>");
        
        //eVital.23/////////////////////////////        
        _val = getValue(businessObject.elements, "eVitals.24");
        if (_val == null)
        {
            if(isRequiredStateElement("eVitals.24"))
            {
                if(_val[0] == 8801019)
                {
                    _retArray.push("<eVitals.24" + PN_REFUSED_IS_NILLABLE);
                    E14.E14_20 = v2NOT_KNOWN;

                }
                else if(_val[0] == 8801023)
                {
                    _retArray.push("<eVitals.24" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                    E14.E14_20 = v2NOT_KNOWN;

                }
                else if(_val[0] == 8801005)
                {
                    _retArray.push("<eVitals.24" + PN_FINDING_NOT_PRESENT_IS_NILLABLE);
                    E14.E14_20 = v2NOT_KNOWN;
                }            
                else
                {
                    _retArray.push("<eVitals.24" + NIL_V3NOT_RECORDED );
                    VitalsGroup["eVitals.24"] = v3NOT_RECORDED;
                    E14.E14_20 = v2NOT_RECORDED;
                }            
            }
            else 
            {   
                _retArray.push("<eVitals.24" + NIL_V3NOT_REPORTING );
                VitalsGroup["eVitals.24"] = v3NOT_REPORTING;
                E14.E14_20 = v2NOT_REPORTING;
            }
        }
        else
        {
            VitalsGroup["eVitals.24"] = _val[0];
            E14.E14_19 = _val[0];
            _retArray.push("<eVitals.24>" + _val[0] + "</eVitals.24>");
        };



        //eVital.25/////////////////////////////   
        _val = getValue(businessObject.elements, "eVitals.25");
        if (_val == null)
        {
            _retArray.push("<eVitals.25" + NIL_V3NOT_RECORDED );
            VitalsGroup["eVitals.25"] = v3NOT_RECORDED;
            E14.E14_21 = v2NOT_RECORDED;
        }
        else 
        {
            VitalsGroup["eVitals.25"] = _val[0];
            E14.E14_21 = D2Val("eVitals.25", _val[0]);
            _retArray.push("<eVitals.25>" + val[0] + "</eVitals.25>");
        };

    _retArray.push("</TemperatureGroup>");
    _retArray.push("<PainScaleGroup>");
                    
                    //eVital.20/////////////////////////////   
    _val = getValue(businessObject.elements, "eVitals.20");
    if (_val == null)
    {
        if(_val[0] == 8801019)
        {
            _retArray.push("<eVitals.27" + PN_REFUSED_IS_NILLABLE);
            E14.E14_16 = v2NOT_KNOWN;
        }
        else if(_val[0] == 8801023)
        {
            _retArray.push("<eVitals.27" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
            E14.E14_16 = v2NOT_KNOWN;
        }
        else
        {
            _retArray.push("<eVitals.27" + NIL_V3NOT_RECORDED );
            VitalsGroup["eVitals.27"] = v3NOT_RECORDED;
            E14.E14_27 = v2NOT_RECORDED;
        }            
    }
    else 
    {
        VitalsGroup["eVitals.27"] = _val[0];
        E14.E14_27 = D2Val("eVitals.27", _val[0]);
        _retArray.push("<eVitals.27>" + val[0] + "</eVitals.27>");
    }; 


    //eVital.28/////////////////////////////   
    _val = getValue(businessObject.elements, "eVitals.28");
    if (_val == null)
    {
        if(isRequiredStateElement("eVitals.28"))
        {
            _retArray.push("<eVitals.28" + NIL_V3NOT_RECORDED );
            VitalsGroup["eVitals.28"] = v3NOT_RECORDED;
        }            
        else 
        {   
            _retArray.push("<eVitals.28" + NIL_V3NOT_REPORTING );
            VitalsGroup["eVitals.28"] = v3NOT_REPORTING;        
        }
    }
    else
    {
        VitalsGroup["eVitals.28"] = _val[0]   
        _retArray.push("<eVitals.28>" + _val[0] + "</eVitals.28>");
    };


        _retArray.push("</PainScaleGroup>");
        _retArray.push("<StrokeScaleGroup>");
    
        
        //eVital.29/////////////////////////////   
        _val = getValue(businessObject.elements, "eVitals.29");
        if (_val == null)
        {
            if(_val[0] == 8801019)
            {
                _retArray.push("<eVitals.29" + PN_REFUSED_IS_NILLABLE);
                E14.E14_24 = v2NOT_KNOWN;

            }
            else if(_val[0] == 8801023)
            {
                _retArray.push("<eVitals.29" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
                E14.E14_24 = v2NOT_KNOWN;
            }
            else
            {
                _retArray.push("<eVitals.29" + NIL_V3NOT_RECORDED );
                VitalsGroup["eVitals.29"] = v3NOT_RECORDED;
                E14.E14_24 = v2NOT_RECORDED;
            }            
        }
        else 
        {
            VitalsGroup["eVitals.29"] = _val[0];
            E14.E14_24 = D2Val("eVitals.29", _val[0]);
            _retArray.push("<eVitals.29>" + val[0] + "</eVitals.29>");
        }; 



        //eVital.30/////////////////////////////   
        _val = getValue(businessObject.elements, "eVitals.30");
        if (_val == null)
        {
            _retArray.push("<eVitals.30" + NIL_V3NOT_RECORDED );
            VitalsGroup["eVitals.30"] = v3NOT_RECORDED;         
        }
        else 
        {
            VitalsGroup["eVitals.30"] = _val[0];
            _retArray.push("<eVitals.30>" + val[0] + "</eVitals.30>");
        }; 

        _retArray.push("</StrokeScaleGroup>");
        };

        } // loop term
        _retArray.push("</VitalsGroup>");
    };

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
};

function SetNotApplicable() 
{
    VitalsGroup["eVitals.01"] = V3NOT_APPLICABLE
    E14.E14_01 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.01" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.02"] = NIL_V3NOT_APPLICABLE
    E14.E14_02 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.02" + NIL_V3NOT_APPLICABLE );
    
    _retArray.push("<eVitals.03" + NIL_V3NOT_APPLICABLE );
    CardiacRhythmGroup["eVitals.03"] = v3NOT_APPLICABLE;
    E14.E14_03 = v2NOT_APPLICABLE;

    _retArray.push("<eVitals.04" + NIL_V3NOT_APPLICABLE );
    CardiacRhythmGroup["eVitals.04"] = v3NOT_APPLICABLE;

    _retArray.push("<eVitals.05" + NIL_V3NOT_APPLICABLE );
    CardiacRhythmGroup["eVitals.05"] = v3NOT_APPLICABLE;

    BloodPressureGroup["eVitals.06"] = V3NOT_APPLICABLE
    E14.E14_04 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.06" + NIL_V3NOT_APPLICABLE );

    BloodPressureGroup["eVitals.07"] = V3NOT_APPLICABLE
    E14.E14_05 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.07" + NIL_V3NOT_APPLICABLE );

    BloodPressureGroup["eVitals.08"] = V3NOT_APPLICABLE
    E14.E14_06 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.08" + NIL_V3NOT_APPLICABLE );

    HeartRateGroup["eVitals.10"] = V3NOT_APPLICABLE
    E14.E14_07 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.10" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.12"] = V3NOT_APPLICABLE
    E14.E14_09 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.12" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.14"] = V3NOT_APPLICABLE
    E14.E14_11 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.14" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.16"] = V3NOT_APPLICABLE
    E14.E14_13 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.16" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.17"] = V3NOT_APPLICABLE
    _retArray.push("<eVitals.17" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.18"] = V3NOT_APPLICABLE
    E14.E14_14 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.18" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.19"] = V3NOT_APPLICABLE
    E14.E14_15 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.19" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.20"] = V3NOT_APPLICABLE
    E14.E14_16 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.20" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.21"] = V3NOT_APPLICABLE
    E14.E14_17 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.21" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.22"] = V3NOT_APPLICABLE
    E14.E14_18 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.22" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.23"] = V3NOT_APPLICABLE
    E14.E14_19 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.23" + NIL_V3NOT_APPLICABLE );

    TemperatureGroup["eVitals.24"] = V3NOT_APPLICABLE
    E14.E14_20 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.24" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.26"] = V3NOT_APPLICABLE
    E14.E14_22 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.26" + NIL_V3NOT_APPLICABLE );

    PainScaleGroup["eVitals.27"] = V3NOT_APPLICABLE
    E14.E14_23 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.27" + NIL_V3NOT_APPLICABLE );
    

    StrokeScaleGroup["eVitals.29"] = V3NOT_APPLICABLE
    E14.E14_24 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.29" + NIL_V3NOT_APPLICABLE );

    StrokeScaleGroup["eVitals.30"] = V3NOT_APPLICABLE
    _retArray.push("<eVitals.30" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.31"] = V3NOT_APPLICABLE
    E14.E14_25 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.31" + NIL_V3NOT_APPLICABLE );

}



    
    function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eVitals.02":

            if (eVitals02[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals02[valueArray[0]]);
            }
            break;
        case "eVitals.03":
            for (i = 0; i < valueArray.length; i++) {
                if (eVitals03[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eVitals03[valueArray[i]]);
                }
            }
            break;
        case "eVitals.08":
            if (eVitals08[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals08[valueArray[0]]);
            }
            break;
        case "eVitals.13":
            if (eVitals13[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals13[valueArray[0]]);
            }
            break;
        case "eVitals.15":
            if (eVitals15[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals15[valueArray[0]]);
            }
            break;
        case "eVitals.19":
            if (eVitals19[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals19[valueArray[0]]);
            }
            break;
        case "eVitals.20":
            if (eVitals20[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals20[valueArray[0]]);
            }
            break;
        case "eVitals.21":
            if (eVitals21[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals21[valueArray[0]]);
            }
            break;
        case "eVitals.22":
            if (eVitals22[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals22[valueArray[0]]);
            }
            break;
        case "eVitals.25":
            if (eVitals25[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals25[valueArray[0]]);
            }
            break;
        case "eVitals.26":
            if (eVitals26[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals26[valueArray[0]]);
            }
            break;
        case "eVitals.29":
            if (eVitals29[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals29[valueArray[0]]);
            }
            break;
        case "eVitals.31":
            if (eVitals31[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals31[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}
eVitals02 = {
    "9923001": "0",	
    "9923003": "1"
};


eVitals03Map = {
    "9901023":	"3005",
    "9901025":	"3010",	
    "9901027":	"3015",	
    "9901001":	"3020",	
    "9901005":	"3025",
    "9901003":	"3030",	
    "9901007":	"3035",	
    "9901011":	"3040",	
    "9901013":	"3045",	
    "9901015":	"3050",	
    "9901017":	"3055",	
    "9901019":	"3060",	
    "9901021":	"3065",	
    "9901047":	"3070",	
    "9901031":	"3075",	
    "9901033":	"3080",	
    "9901035":	"3085",	
    "9901037":	"3090",	
    "9901039":	"3095",	
    "9901041":	"3100",	
    "9901043":	"3105",
    "9901045":	"3110",	
    "9901049":	"3115",	
    "9901059":	"3120",	
    "9901061":	"3125",	
    "9901063":	"3130",
    "9901065":	"3135",	
    "9901067":	"3140",	
    "9901031":	"3145"};

eVitals08Map = {
    "3308001":"3150",
    "3308003":"3150",
    "3308005":"3155",
    "3308007":"3160",
    "3308009":"3165",
    "3308011":"3170"};

eVitals13Map = {
    "3313003":"3175",
    "3313001":"3180"};

eVitals15Map = {
    "3315001":"3195",	
    "3315003":"3190",	
    "3315005":"3200",	
    "3315007":"3185",
    "3315009":"3190",
    "3315011":"3195",	
    "3315013":"3195"};

eVitals19Map = {
    "1":"1",	
    "2":"2",	
    "3":"3",	
    "4":"4"};

eVitals20Map = {
    "1":"1",	
    "2":"2",	
    "3":"3",	
    "4":"4",
    "5":"5"};

eVitals21Map = {
    "1":"1",	
    "2":"2",	
    "3":"3",	
    "4":"4",
    "5":"5",
    "6":"6"
};
	
eVitals22Map = {
    "3322001": "-5",
    "3322003":	"3210",
    "3322005":	"3225",
    "3322007":	"3215",	
    "3322009":	"3220"};

eVitals25Map = {
    "3325001":	"3230",
    "3325003":	"3230",
    "3325005":	"3230",
    "3325007":	"3235",
    "3325009":	"3240",	
    "3325013":	"3245",	
    "3325015":	"3250"};

eVitals26Map = {
    "3326001":	"3255",	
    "3326003":	"3260",	
    "3326005":	"3265",	
    "3326007":	"3270"};

eVitals29Map = {
    "3329001":	"3275",	
    "3329003":	"3280",
    "3329005":	"3285"};

eVitals31Map = {
    "3331001":"3305",	
    "3331003":"3310",
    "3331005":"3315"};


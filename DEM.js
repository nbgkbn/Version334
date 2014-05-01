//After a PCR has been saved, generate the outputs for it.
/*
  Parse.Cloud.afterSave("PCR", function(request) {
  var pcr = request.object;
  createEMSOutput(pcr);
  });
*/

//Generate the DEMDataSet Object for an agency
generateDEMDataSet = function(agencyId, callback){
    var Agency = Parse.Object.extend("Agency");
    var Section = Parse.Object.extend("Section");
    var query = new Parse.Query(Agency);
    var promise = query.get(agencyId, {
	success: function(agency){
	    return(agency);
	},
	error: function(object, error){
	    console.log("Error: " + error.message);
	}
    }).then(function(agency){
	//Get all sections in agency
	var sectionIds = [];
	for(var section in agency.attributes){
	    sectionIds.push(agency.attributes[section].id);
	}

	var query = new Parse.Query(Section);
	query.include("elements");
	query.include("sections.elements");
	query.include("sections.sections.elements");
	query.containedIn('objectId', sectionIds);
	query.find({
	    success: function(sections){
		//sort sections
		sections.sort(compare);
		//console.log(sections);
		callback(sections);
	    },
	    error: function(error){
		console.log("Error: " + error.message);
	    }
	});
    });
    return promise;
}

//Generate XML
generateXML = function(data, type, version, callback){

    //Init xml writer
    var doc = new XMLWriter('UTF-8');
    doc.formatting = 'indented';
    doc.indentChar = '  ';
    doc.indentation = 2;

    var d     = new Date();
    var year  = d.getFullYear();
    var month = d.getMonth() + 1;
    var day   = d.getDate();
    var hour  = d.getHours();
    var min   = d.getMinutes();
    var sec   = d.getSeconds();
    if(month < 10){
	month = "0" + month;
    }
    if(day < 10){
	day = "0" + day;
    }
    var date = year + "-" + month + "-" + day + "T" + hour + ":" + min + ":" + sec;

    //For DEMDataSet
    if(type == "dem"){
	doc.writeStartDocument();
	doc.writeStartElement( 'DEMDataSet' );
	doc.writeAttributeString( 'xsi:schemaLocation', 'http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.3/3.3.3.130926/XSDs/NEMSIS_XSDs_v3.3.3.130926/DEMDataSet_v3.xsd');
	doc.writeStartElement( 'DemographicReport');
	doc.writeAttributeString( 'timeStamp', date);
    }

    //For EMSDataSet
    if(type == "ems"){
	doc.writeStartDocument();
	doc.writeStartElement( 'EMSDataSet' );
	doc.writeAttributeString( 'xsi:schemaLocation', 'http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.3/3.3.3.130926/XSDs/NEMSIS_XSDs_v3.3.3.130926/DEMDataSet_v3.xsd');
	doc.writeStartElement( 'Header');
	doc.writeStartElement( 'DemographicGroup');
	//Add stuff here

    }

    //For MedDeviceDataSet
    if(type == "med"){
	doc.writeStartDocument();
	doc.writeStartElement( 'MedDeviceDataSet' );
	doc.writeAttributeString( 'xsi:schemaLocation', 'http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.3/3.3.3.130926/XSDs/NEMSIS_XSDs_v3.3.3.130926/MedDeviceDataSet_v3.xsd');
    }

    //Output the xml for each section
    data.forEach(function(section){
	var currentSection1 = section;
	var count = 1;
	var inc   = 0;
	var fail  = 0;
	var startStack = [];
	var endStack = [];
	var level2Done = false;
	var level3Done = false;
	var level4Done = false;

	doc.writeStartElement(currentSection1.get('name'));
	startStack.push(currentSection1.get('name'));

	while(count < maxElement(currentSection1)){
	    //Check Level 1
	    if(hasElement(count, currentSection1)){
		doc   = addSequence(count, currentSection1, doc);
		count = getSequence(count, currentSection1);
	    }
	    //Check Level 2
	    if(typeof currentSection1.get('sections') !== "undefined"){
		var currentSections2 = currentSection1.get('sections');
		currentSections2.forEach(function(section){
		    if(hasElement(count, section)){
			if(startStack.indexOf(section.get('name')) == -1){
			    doc.writeStartElement(section.get('name'));
			    startStack.push(section.get('name'));
			}
			doc   = addSequence(count, section, doc);
			count = getSequence(count, section);
			if((level3Done && level4Done) || (maxElement(section) <= count)){
			    doc.writeEndElement();
			    endStack.push(section.get('name'));
			}
		    }
		    //Check Level 3
		    if(typeof section.get('sections') !== "undefined"){
			var currentSections3 = section.get('sections');
			currentSections3.forEach(function(section){
			    if(hasElement(count, section)){
				if(startStack.indexOf(section.get('name')) == -1){
				    doc.writeStartElement(section.get('name'));
				    startStack.push(section.get('name'));
				}
				doc   = addSequence(count, section, doc);
				count = getSequence(count, section);
				if(level4Done || (maxElement(section) <= count)){
				    doc.writeEndElement();
				    endStack.push(section.get('name'));
				}
			    }
			    //Check Level 4
			    if(typeof section.get('sections') !== "undefined"){
				var currentSections4 = section.get('sections');
				currentSections4.forEach(function(section){
				    if(hasElement(count, section)){
					if(stick.indexOf(section.get('name')) == -1){
					    doc.writeStartElement(section.get('name'));
					    startStack.push(section.get('name'));
					}
					doc   = addSequence(count, section, doc);
					count = getSequence(count, section);
					if(maxElement(section) <= count){
					    doc.writeStartElement(section.get('name'));
					    end.push(section.get('name'));
					}
				    }
				});
			    } else{ level4Done = true;}
			});
		    } else { level3Done = true; level4Done = true;}
		});
	    }
	}
	//End Section Name
	for(var n = 0; n < (startStack.length - endStack.length); n++){
	    doc.writeEndElement();
	}
    });

    doc.writeEndElement();
    doc.writeEndElement();
    doc.writeEndDocument();
    var xml = doc.flush();
    callback(xml);
}




//Returns the number of the highest element in the Section
function maxElement(section){
    var max = 0;

    //Level 1
    if(typeof section.get('elements') !== "undefined"){
	section.get('elements').forEach(function(element){
	    if(getNumber(element) > max){
		max = getNumber(element);
	    }
	});
    }

    //Level 2
    if(typeof section.get('sections') !== "undefined"){
	var sections2 = section.get('sections');
	sections2.forEach(function(section){
	    if(typeof section.get('elements') !== "undefined"){
		section.get('elements').forEach(function(element){
		    if(getNumber(element) > max){
			max = getNumber(element);
		    }
		});
	    }
	    //Level 3
	    if(typeof section.get('sections') !== "undefined"){
		var sections3 = section.get('sections');
		sections3.forEach(function(section){
		    if(typeof section.get('elements') !== "undefined"){
			section.get('elements').forEach(function(element){
			    if(getNumber(element) > max){
				max = getNumber(element);
			    }
			});
		    }
		    if(typeof section.get('sections') !== "undefined"){
			var sections4 = section.get('sections');
			sections4.forEach(function(section){
			    if(typeof section.get('elements') !== "undefined"){
				section.get('elements').forEach(function(element){
				    if(getNumber(element) > max){
					max = getNumber(element);
				    }
				});
			    }
			});
		    }
		});
	    }
	});
    }
    return max;
}

//Add elements in sequency to doc
function addSequence(count, section, doc){
    var elements = section.get('elements');
    var inc = true;
    while(inc){
	inc = false;
	elements.forEach(function(element){
	    if(getNumber(element) == count){
		doc.writeStartElement(element.get('title'));
		doc.writeString(element.get('value'));
		doc.writeEndElement();
		inc = true;
	    }
	});
	count++;
    }
    return doc;
}

//Returns the new element count after a sequence has been added
function getSequence(count, section){
    var elements = section.get('elements');
    var inc = true;
    while(inc){
	inc = false;
	elements.forEach(function(element){
	    if(getNumber(element) == count){
		inc = true;
	    }
	});
	count++;
    }
    return --count;
}

//Returns element number
function getNumber(element){
    var number = parseInt(element.get('title').slice(-2));
    return number;
}

//Returns true if element is in section             ***not Tested, at all... seriously, shit might be broke.
function hasElement(count, section){
    var has = false;
    if(typeof section.get('elements') !== "undefined"){
	var elements = section.get('elements');
	for(var i = 0; i < elements.length; i++){
	    var title = elements[i].get('title').slice(-2);
	    if(parseInt(title) == count){
		has = true;
	    }
	}
    }
    return has;
}


//Array sort by nested value
function compare(a,b) {
    if (a.get('name') < b.get('name'))
	return -1;
    if (a.get('name') > b.get('name'))
	return 1;
    return 0;
}

//xml writer
function XMLWriter( encoding, version ){
    if( encoding )
	this.encoding = encoding;
    if( version )
	this.version = version;
};
(function(){

    XMLWriter.prototype = {
	encoding:'ISO-8859-1',// what is the encoding
	version:'1.0', //what xml version to use
	formatting: 'indented', //how to format the output (indented/none)  ?
	indentChar:'\t', //char to use for indent
	indentation: 1, //how many indentChar to add per level
	newLine: '\n', //character to separate nodes when formatting
	//start a new document, cleanup if we are reusing
	writeStartDocument:function( standalone ){
	    this.close();//cleanup
	    this.stack = [ ];
	    this.standalone = standalone;
	},
	//get back to the root
	writeEndDocument:function(){
	    this.active = this.root;
	    this.stack = [ ];
	},
	//set the text of the doctype
	writeDocType:function( dt ){
	    this.doctype = dt;
	},
	//start a new node with this name, and an optional namespace
	writeStartElement:function( name, ns ){
	    if( ns )//namespace
		name = ns + ':' + name;

	    var node = { n:name, a:{ }, c: [ ] };//(n)ame, (a)ttributes, (c)hildren

	    if( this.active ){
		this.active.c.push(node);
		this.stack.push(this.active);
	    }else
		this.root = node;
	    this.active = node;
	},
	//go up one node, if we are in the root, ignore it
	writeEndElement:function(){
	    this.active = this.stack.pop() || this.root;
	},
	//add an attribute to the active node
	writeAttributeString:function( name, value ){
	    if( this.active )
		this.active.a[name] = value;
	},
	//add a text node to the active node
	writeString:function( text ){
	    if( this.active )
		this.active.c.push(text);
	},
	//shortcut, open an element, write the text and close
	writeElementString:function( name, text, ns ){
	    this.writeStartElement( name, ns );
	    this.writeString( text );
	    this.writeEndElement();
	},
	//add a text node wrapped with CDATA
	writeCDATA:function( text ){
	    this.writeString( '<![CDATA[' + text + ']]>' );
	},
	//add a text node wrapped in a comment
	writeComment:function( text ){
	    this.writeString('<!-- ' + text + ' -->');
	},
	//generate the xml string, you can skip closing the last nodes
	flush:function(){
	    if( this.stack && this.stack[0] )//ensure it's closed
		this.writeEndDocument();

	    var
	    chr = '', indent = '', num = this.indentation,
	    formatting = this.formatting.toLowerCase() == 'indented',
	    buffer = '<?xml version="'+this.version+'" encoding="'+this.encoding+'"';

	    if( this.standalone !== undefined )
		buffer += ' standalone="'+!!this.standalone+'"';
	    buffer += ' ?>';

	    buffer = [buffer];

	    if( this.doctype && this.root )
		buffer.push('<!DOCTYPE '+ this.root.n + ' ' + this.doctype+'>');

	    if( formatting ){
		while( num-- )
		    chr += this.indentChar;
	    }

	    if( this.root )//skip if no element was added
		format( this.root, indent, chr, buffer );

	    return buffer.join( formatting ? this.newLine : '' );
	},
	//cleanup, don't use again without calling startDocument
	close:function(){
	    if( this.root )
		clean( this.root );
	    this.active = this.root = this.stack = null;
	},
	getDocument: window.ActiveXObject
	    ? function(){ //MSIE
		var doc = new ActiveXObject('Microsoft.XMLDOM');
		doc.async = false;
		doc.loadXML(this.flush());
		return doc;
	    }
	: function(){// Mozilla, Firefox, Opera, etc.
	    return (new DOMParser()).parseFromString(this.flush(),'text/xml');
	}
    };

    //utility, you don't need it
    function clean( node ){
	var l = node.c.length;
	while( l-- ){
	    if( typeof node.c[l] == 'object' )
		clean( node.c[l] );
	}
	node.n = node.a = node.c = null;
    };

    //utility, you don't need it
    function format( node, indent, chr, buffer ){
	var
	xml = indent + '<' + node.n,
	nc = node.c.length,
	attr, child, i = 0;

	for( attr in node.a )
	    xml += ' ' + attr + '="' + node.a[attr] + '"';

	xml += nc ? '>' : ' />';

	buffer.push( xml );

	if( nc ){
	    do{
		child = node.c[i++];
		if( typeof child == 'string' ){
		    if( nc == 1 )//single text node
			return buffer.push( buffer.pop() + child + '</'+node.n+'>' );
		    else //regular text node
			buffer.push( indent+chr+child );
		}else if( typeof child == 'object' ) //element node
		    format(child, indent+chr, chr, buffer);
	    }while( i < nc );
	    buffer.push( indent + '</'+node.n+'>' );
	}
    };

})();

(function(win, doc, $)
{

	function addFormDatestamp(fieldsRequiringDatestamp, lookupString, includeTimestamp)
	{
		var now;
		var month;
		var day;
		var year;
		var datestamp;
		var hours;
		var minutes;
		var timestamp;
		var inputs;
		var newAttributeVal;

		// Get new Date object
		now = new Date();

		// Create datestamp
		month = ("0" + (now.getMonth() + 1)).slice(-2);
		day = ("0" + now.getDate()).slice(-2);
		year = now.getFullYear();
		datestamp = month + "/" + day + "/" + year;

		// Create timestamp
		hours = ("0" + now.getHours()).slice(-2);
		minutes = ("0" + now.getMinutes()).slice(-2);
		timestamp = hours + ":" + minutes;

		// The new attribute value will always contain at least the date:
		newAttributeVal = datestamp;

		// Shall we include a timestamp?
		if (includeTimestamp)
		{
			newAttributeVal += " " + timestamp;
		}

		// Set those input(s) value attribute to our newAttributeVal:
		fieldsRequiringDatestamp.val(newAttributeVal);

	};

	// Identifying string for fields where date/time stamp should be inserted
	var requiresDatestampFieldString = "Timestamp";

	// Get any input fields where we need to insert a date/timestamp on submitting the form
	$requiresDatestamp = $("form")
		.find("input[name='" + requiresDatestampFieldString + "']");

	$("form.elq-form").on("submit", function(e)
	{
		// Add timestamp to form before submitting:
		addFormDatestamp($requiresDatestamp, requiresDatestampFieldString, true);
	});

})(window, document, jQuery);

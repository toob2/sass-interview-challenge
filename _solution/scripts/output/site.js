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

(function(win, doc, $, undefined)
{

	/**
	 * Form validation logic
	 */

	// These are all required (must not be empty) and depending on field type also requires a special format (like email)
	var requiredFields = [
		{
			fieldName: "emailAddress",
			type: "email",
			selector: $("input[name='emailAddress']")
		},
		{
			fieldName: "termsAndConditions",
			type: "checkbox",
			selector: $("input[name='termsAndConditions']")
		}
	];

	function getErrorMessageContainer(fieldName)
	{
		return (".err-" + fieldName);
	}

	function isEmailAddress(str)
	{
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(str).toLowerCase());
	}

	function validateField(oField)
	{
		console.log("validateField: ", oField);
		console.log("validateField value: " + oField.selector.val());

		$(getErrorMessageContainer(oField.fieldName)).removeClass("shown");

		if (oField.type === "email")
		{
			if (isEmailAddress(oField.selector.val()))
			{
				return true;
			}
		}

		if (oField.type === "text")
		{
			if (oField.selector.val() !== "")
			{
				return true;
			}
		}

		if (oField.type === "checkbox") {
			if (oField.selector.is(":checked")) {
				return true;
			}
		}

		$(getErrorMessageContainer(oField.fieldName)).addClass("shown");

		return false;
	}

	function validateFields(requiredFields)
	{
		console.log("validateFields");

		for (var field in requiredFields)
		{
			if (!validateField(requiredFields[field]))
			{
				return false;
			}
		}

		return true;
	}

	$("form.elq-form")
		.on("submit", function(e)
		{
			if (!validateFields(requiredFields))
			{
				console.log("Form did not validate properly");

				e.preventDefault();
			}
		});

})(window, document, jQuery);

/**
 * The dropdown changes text colour and classes depending item selected...
 */
(function(win, doc, $, undefined)
{
	$dropdown = $(".titles-list");

	$($dropdown)
		.change(function()
		{
			var self = $(this);

			if (!self.val() || self.val() == "")
			{
				self.addClass("empty");
			}
			else
			{
				self.removeClass("empty")
			}
		});
	$($dropdown)
		.change();

})(window, document, jQuery);

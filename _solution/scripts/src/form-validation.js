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

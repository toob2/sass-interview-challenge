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

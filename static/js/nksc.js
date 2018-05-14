jQuery(function() {
    var handleAddValueAction = function (e) {
        e.preventDefault();

		$link = jQuery(this);

		jQuery
	        .get(RT.Config.WebHomePath + $link.attr('href'))
		    .done(function(response) {
				toastr.success('<b>' + response.message + '</b>');
		    })
		    .fail(function(error) {
		    	if (error.responseJSON && error.responseJSON.message) {
					toastr.error('<b>'  + error.responseJSON.message + '</b>');
				} else {
					toastr.error('<b>' + error.responseText + '</b>');
				}
		    });
	};

    jQuery('body').on('click', '.add-cf-value', handleAddValueAction);
});

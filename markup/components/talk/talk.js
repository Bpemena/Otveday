$(document).ready(function() {
  	$('form').validate();
});
$(document).ready(function() {
  	$(".message").each(function() {
        var it = $(this);
        it.validate({
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true
                }
            },
            messages: {
            	name: 'Please specify your name',
            	phone: 'Please specify your phone'
            },
            highlight: function(element, errorClass) {
                $(element).css('outline', '1px solid red');
            },
        });
    });
});
$( document ).ready(function() 
{

	'use strict';

	// Add New Login Account
	var addNewLoginAccount = $('.account-wrapper .login #add_login');
	addNewLoginAccount.on('click', openAddLoginPanel);

	function openAddLoginPanel(e)
	{

		e.preventDefault();
		var fade = 20;
		var addNewLoginPanel = $('.add-login-overlay');
		var dismiss = addNewLoginPanel.find('.add-new-login #dismiss');
		addNewLoginPanel.fadeIn(fade);
		dismiss.on('click', function()
		{
			addNewLoginPanel.fadeOut(fade);
			$(this).off('click');
		});

	}

	

});
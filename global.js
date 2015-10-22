$(document).ready(function(){
  /* ==========================================================================
     Simple Form - Contact Form
     ========================================================================== */

  $('#mailbox').submit(function(){
    $.ajax({
      dataType: 'jsonp',
      url: "http://getsimpleform.com/messages/ajax?form_api_token=8a9312030c1bc8dffeb1233b2e389f3a",
      data: $("#mailbox").serialize(),
      error: function() {
        $('#mailbox').hide();
        $('#formErrorMessage').show();
      }
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      $('#mailbox').hide();
      $('#formSuccessMessage').show();
    });
    return false; //to stop the form from submitting
  });
});
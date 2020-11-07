(function() {
		  'use strict';
		  window.addEventListener('load', function() {
		    
		    // Fetch all the forms we want to apply custom Bootstrap validation styles to
		    var forms = document.getElementsByClassName('needs-validation');
		    // Loop over them and prevent submission
		    var validation = Array.prototype.filter.call(forms, function(form) {
		      form.addEventListener('submit', function(event) {
		        if (form.checkValidity() == false) {
		          event.preventDefault();
		          event.stopPropagation();
		        // if form not valid
		        }else{
		        // if form valid
		        }
		        form.classList.add('was-validated');
		      }, false);
		    });
		  
		  // datepicker
		    $( "#dob" ).datepicker({
		      changeMonth: true,
		      changeYear: true,
		      showAnim : "",
		      dateFormat : "dd-mm-yy",
		      yearRange : "c-15:c+0",
		     // defaultDate:"-3",
		      showButtonPanel: true
		    });
		
		// reg form
		const regForm = $("#regForm");
		regForm.on({
			submit:function (e){
			e.preventDefault();
			$("#regForm .form-control, #regForm .form-select").each(function(){
				var _this = $(this);
				
				if(!(new RegExp(_this.attr("pattern")).test(_this.val()))){
					// if input is invalid then focus on field
					_this.focus();
					if(_this.val() == ""){
						// if input empty
						Swal.fire("Required field!","<strong> "+_this.data("field-name")+"</strong> is required field. Donn\'t leave it empty.");
					}else{
						// if input invalid
						Swal.fire("Invalid "+_this.data("field-name")+"!",_this.data('title'));
					}
					return false;
				} else {
					//alert("ok");
					/*$.ajax( regForm.attr("action"){
						
					});*/
					
				}
			})
		}
		});
		
		regForm.submit(function(){
		//alert('ok')
		})
		$("#regForm .form-control, #regForm .form-select").on({
			keyup:function(){
				var _this = $(this);
				if(!(new RegExp(_this.attr("pattern")).test(_this.val()))){
					_this.tooltip("show");
				}else{
					_this.tooltip("hide");
				}
			}
		});
		
		$('[data-toggle="tooltip"]').tooltip();
		
		
	}, false);
		
})();
		
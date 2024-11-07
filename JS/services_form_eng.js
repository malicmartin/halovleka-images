function toggleServicesFields(){const checkboxes=document.querySelectorAll('#storitve-obrazec input[type="checkbox"]');const additionalFields=document.getElementById('additional-fields-storitve');let anyChecked=!1;checkboxes.forEach(checkbox=>{if(checkbox.checked){anyChecked=!0}});additionalFields.style.display=anyChecked?'block':'none'}
function validateServicesForm(){const year=document.getElementById('letnik-storitve').value;if(year&&year<1900){alert('Vehicle year must be greater than 1900.');return!1}
return!0}
document.addEventListener('DOMContentLoaded',function(){const checkboxes=document.querySelectorAll('#storitve-obrazec input[type="checkbox"]');checkboxes.forEach(checkbox=>{checkbox.addEventListener('change',toggleServicesFields)})})

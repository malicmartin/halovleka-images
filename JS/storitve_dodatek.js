function toggleStoritveFields(){const checkboxes=document.querySelectorAll('#storitve-obrazec input[type="checkbox"]');const additionalFields=document.getElementById('additional-fields-storitve');let anyChecked=!1;checkboxes.forEach(checkbox=>{if(checkbox.checked){anyChecked=!0}});additionalFields.style.display=anyChecked?'block':'none'}
function validateStoritveForm(){const letnik=document.getElementById('letnik-storitve').value;if(letnik&&letnik<1900){alert('Letnik vozila mora biti večji od 1900.');return!1}
return!0}

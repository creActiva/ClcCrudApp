(function($){

$('#myModal').modal('hide');
$('#editar').submit(function(e){
   e.preventDefault();
   var nombre = $('#nombre').val();
   var apellido = $('#apellido').val();
   var rol = $('#rol').val();
   var telefono = $('#telefono').val();
   var email = $('#email').val();
   var cohorte = $('#cohorte').val();
   var observacion = $('#observacion').val();
   var url = new URL(window.location.href);
   var certificado = url.searchParams.get("certificado");//obtener valor de esa variable por url
   var id = url.searchParams.get('id');
   var update = {'id':id,'certificado':certificado,'nombre' : nombre,'apellido': apellido,'rol': rol,'telefono': telefono,'email':email,'cohorte':cohorte,'observacion':observacion};
   $.ajax({
      url:'recursos/update.php',
      data:update,
      method:'POST',
      success: function(respuesta){
         $('.modal-body').empty();
         $('.modal-body').append(respuesta);
         $('#myModal').modal('show');
      },
      error: function(x,y,z){
         alert('Tipo de error: '+y);
      }
   });
});
}(jQuery));
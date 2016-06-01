var app = document.getElementById("app");

app.crearDialogo = function(msg){
  app.mensaje = msg;
  app.$.dialogo.open();
};

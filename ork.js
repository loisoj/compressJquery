// function strChanger(){
//   var mass = [];
//   $('.name .imgess a div').each(function(index)
//   {
//   mass.push(this);
//   });
// for (var i = 0; i <= mass.length; i++) {
//   var iKov = 0;
//   var fx = mass[i].innerHTML;
//   var chfx = fx.replace(/"/g, function(){return (iKov++ % 2) ? '»' : '«'});
//   iKov = 1;
//   $(mass[i]).text(chfx);
// }
// }




function strChanger( stcid , stcfirst , stcsecond , stcmod){
  // var stcAddRecrusiver = 'g';
  var mass = [];
  $(stcid).each(function(index)
  {
  mass.push(this);
  });
for (var i = 0; i <= mass.length; i++) {
  var iKov = 0;
  var fx = mass[i].innerHTML;
  if(stcmod){
  var chfx = fx.replace(stcfirst, function(){return (iKov++ % 2) ? stcsecond : stcmod});
} else{
  var chfx = fx.replace(stcfirst, stcsecond);
}
  iKov = 1;
  $(mass[i]).text(chfx);
}
}

//ex:strChanger('.name .imgess a div' , /"/g , '»' , '«');

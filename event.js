var Body =
{
  setBackgroundColor : function(color){
    $('body').css('backgroundColor', color);
  },

  setColor : function(color){
    $('body').css('color', color);
  }
}

var A =
{
  setColor : function(color){
    $('a').css('color', color);
  }

}

var Id =
{
  setTopBorderBtmColor : function(color){
    $('#top').css('borderBottomColor', color);
  },

  setLeftBorderRgtColor : function(color){
    $('#left').css('borderRightColor', color);
  }
}

var Target =
{
  setLeftRight_A_Color : function(color)
  {
    var targetL = $('#left a');
    var iL = 0;
    //var name = (this.location.pathname.substr(1)).replace('.html', '');

    while(iL < targetL.length)
    {
      targetL[iL].style.color = color;
      iL++;
    }

    var targetR = $('#right a');
    var iR = 0;
    while(iR < targetR.length)
    {
      targetR[iR].style.color = color;
      iR++;
    }
  }
}

var Button =
{
  getValue : function()
  {
    var val = $('#indexBtn').attr('value');
    return val;
  } ,
  setValue : function(val)
  {
    $('#indexBtn').attr('value', val);
  }
}

// function BodyColorChange(self)
// {
//
//  var val = Button.getValue();
//
//  if(val == 'night')
//  {
//    Body.setBackgroundColor('gray');
//    Body.setColor('white');
//    A.setColor('white');
//    Id.setTopBorderBtmColor('white');
//    Id.setLeftBorderRgtColor('white');
//
//    Target.setLeftRight_A_Color('white');
//
//    Button.setValue('day');
//  }
//  else
//  {
//    Body.setBackgroundColor('white');
//    Body.setColor('black');
//    A.setColor('black');
//    Id.setTopBorderBtmColor('black');
//    Id.setLeftBorderRgtColor('black');
//
//    Target.setLeftRight_A_Color('black');
//
//    Button.setValue('night');
//  }
// }

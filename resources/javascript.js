// Your Javascript will go here!


$(document).ready(function() {

    // Change copyrite color
    $('#copyright').click(function(){
      $(this).css({ 'color': 'green', 'font-size': '20px' })
    })

    // change colors of section headings
    $('.section').hover(
      function(){ $(this).css({ 'background-color': 'black' }); },

      function(){ $(this).css({ 'background-color': 'orange' }); }
    )

    // hide main content
    $('#nav_header').click(function(){
      $('#main').toggle();
    })

    // toggles on/off ryan gosling
    $('#about_me').click(function() {
      $( ".ryan" ).toggleClass( "hidden_thing" );
      // alert('got it')
    });


    // replaces name and cycles through colors
    function replaceName() {
        var myNewName = window.prompt('Pick a new name!');
        colors = ['red', 'blue', 'green']
        index = Math.floor(Math.random()*3)
        current_color = colors[index]

        document.getElementById('user-name').innerHTML = myNewName;
        document.getElementById('user-name').style.cssText = "border-radius: 3px; padding: 5px; color: white; background-color:" + current_color;

        // document.getElementById('user-name').style.background = 'aqua';
        // document.getElementById('user-name').style.padding = '10px';
      }

      document.getElementById('user-name').onclick = replaceName;
});



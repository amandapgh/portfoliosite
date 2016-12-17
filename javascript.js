<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

$(document).ready(function() {
    Portfolio();
});

function Portfolio()
{
  $("#resume").hide();
  $("#about").hide();
  $("#contact").hide();
  $("#portfolio").fadeIn();
};
function Resume()
{
  $("#portfolio").hide();
  $("#about").hide();
  $("#contact").hide();
  $("#resume").fadeIn();
};
function About()
{
  $("#portfolio").hide();
  $("#resume").hide();
  $("#contact").hide();
  $("#about").fadeIn();
};
function Contact()
{
  $("#portfolio").hide();
  $("#about").hide();
  $("#resume").hide();
  $("#contact").fadeIn();
};

</script>

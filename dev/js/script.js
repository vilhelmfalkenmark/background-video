/**
 * Created by Vilhelm on 15-11-30.
 */
$( document ).ready(function() {

var videoRatio;
$( window ).load(function()
{
  var screenWidth = $(window).width();
  videoRatio = screenWidth *(0.5625); // Invers till 16:9 formatet
  scaleVideo(videoRatio);
});
$( window ).resize(function()
{
  var screenWidth = $(window).width();
  videoRatio = screenWidth *(0.5625);
  scaleVideo(videoRatio);
});

  function scaleVideo(videoRatio)
  {
    $(".header-container").css("height",videoRatio+"px");
    $(".yt-player").css("height",videoRatio+"px");

    if($(".modal-iframe").length)
    {
        $(".modal-iframe").css("height",videoRatio*0.9+"px");

      console.log("Finns")
    }
    if($(window).width()>768)
    {
      $(".white-overlay").css("height",videoRatio+"px");
    }
    else
    {
      $(".white-overlay").css("height","auto");
    }
  }

$(".read-more").click(function()
{
  console.log($(".yt-player").height());

  var overLayHeight = $(".yt-player").height();

  $(".white-overlay").css({
    "display":"block"
  });

})
$(".close-overlay").click(function()
{
  $(".white-overlay").css({
    "display":"none"
  });
})


$(".play-btn").click(function()
{
  var container = document.getElementsByClassName('container')[0];
  var modalVideo = document.createElement("div");
  modalVideo.className = "modal-video";
  var iFrame = document.createElement("iframe");
  iFrame.className = "modal-iframe";
  var sourceSet = document.getElementById("ytplayer");
  var sourceUrl = sourceSet.src;
  var resultUrl = sourceUrl.replace("controls=0","controls=1"); // Så att man ser kontrollerna i modalvyn
  iFrame.src = resultUrl;
  var screenWidth = $(window).width();
  var iframeHeight = (screenWidth*0.9)*(0.5625)
  iFrame.style.height = iframeHeight+"px";
  container.appendChild(iFrame);
  document.getElementsByClassName('close-video')[0].style.display ="block";
  document.getElementsByClassName('overlay')[0].style.display ="block";
});

$(".close-video").click(function()
{
  $(".modal-iframe").remove();
  $(".overlay").css("display","none");
  $(this).css("display","none");
});

/* TOGGLE LOGO */
$(".logo").click(function()
{


})


});

var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady() {
    player.playVideo();
    // Mute!
    player.mute();
}
//document.cookie="VISITOR_INFO1_LIVE=oKckVSqvaGw; path=/; domain=.youtube.com";window.location.reload();

---
title: Hello, World
date: "2018-05-02"
---


<div id="container">
  <h1>MOT</h1>
  <div id="water"></div>
</div>
<svg xlmns="http://www.w3.org/2000/svg" version="1.1">
  <filter id="turbulence" filterUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
    <feTurbulence id="feturbulence" type="fractalNoise" numOctaves="3" seed="2"></feTurbulence>
    <feDisplacementMap xChannelSelector="G" yChannelSelector="B" scale="20" in="SourceGraphic"></feDisplacementMap>
  </filter>
</svg><a id="codepen-link" href="https://www.codepen.io/seanfree" target="_blank"></a>

<script>
  var timeline = new TimelineMax({
    repeat: -1,
    yoyo: true
  }),
  feTurb = document.querySelector('#feturbulence');

timeline.add(
  TweenMax.to(feTurb, 8, {
    onUpdate: function() {
      var bfX = this.progress() * 0.005 + 0.015, //base frequency x
        bfY = this.progress() * 0.05 + 0.1, //base frequency y
        bfStr = bfX.toString() + ' ' + bfY.toString(); //base frequency string
      feTurb.setAttribute('baseFrequency', bfStr);
    }
  }), 0
);
</script>
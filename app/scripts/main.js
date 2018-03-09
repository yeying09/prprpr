var anglePI = 45 * 2 * Math.PI / 360,
  cosAngle = Math.cos(anglePI),
  sinAngle = Math.sin(anglePI); // transfer
var aR = cosAngle,
    bR = sinAngle,
    cR = -sinAngle,
    dR = cosAngle,
    eR = 0,
    fR = 0; // rotate
var aS = 0.8,
    bS = 0,
    cS = 0,
    dS = 0.8,
    eS = 0,
    fS = 0; // scale
var aT = 1,
    bT = 0,
    cT = 0,
    dT = 1,
    eT = 30,
    fT = 20; // translate

var aRST = aR*aS,
    bRST = (bR+bS+bT) * aS,
    cRST = (cR+cS+cT) * dS,
    dRST = dR*dS,
    eRST = eT*aRST + fT*cRST,
    fRST = eT*bRST + fT*dRST

$('#transform-box1').css('transform', 'matrix(' + aRST + ',' + bRST + ','+ cRST + ',' + dRST + ','+ eRST + ',' + fRST + ')');

$('#transform-box2').css('transform', 'rotate(45deg) scale(0.8) translate(30px, 20px)');

console.log(getComputedStyle($('#transform-box1')[0]).transform)
console.log(getComputedStyle($('#transform-box2')[0]).transform)

$('#transform-box1').click(function() {
  var _ = $(this);
  _.addClass('start-animation');
})

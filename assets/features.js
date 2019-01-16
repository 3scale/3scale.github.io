let nav_share = document.getElementById('nav_share')
let nav_secure = document.getElementById('nav_secure')
let nav_control = document.getElementById('nav_control')
let nav_analyze = document.getElementById('nav_analyze')
let nav_monetize = document.getElementById('nav_monetize')

let nav_share2share = new LeaderLine(
  LeaderLine.pointAnchor(nav_share, {x: '33.5%', y: '55%'}),
  LeaderLine.pointAnchor(share, {x: '10%', y: 0 }),
  {
    color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight'
  }
);

let nav_secure2secure = new LeaderLine(
  LeaderLine.pointAnchor(nav_secure, {x: '42.5%', y: '58%'}),
  LeaderLine.pointAnchor(secure, {x: '10%', y: 0 }),
  {
    color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight'
  }
);

let nav_control2control = new LeaderLine(
  LeaderLine.pointAnchor(nav_control, {x: '83%', y: '58%'}),
  LeaderLine.pointAnchor(control, {x: '10%', y: 0 }),
  {
    color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight'
  }
);

let nav_analyze2analyze = new LeaderLine(
  LeaderLine.pointAnchor(nav_analyze, {x: '39%', y: '64%'}),
  LeaderLine.pointAnchor(analyze, {x: '10%', y: 0 }),
  {
    color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight'
  }
);

let nav_monetize2monetize = new LeaderLine(
  LeaderLine.pointAnchor(nav_monetize, {x: '71.6%', y: '25%'}),
  LeaderLine.pointAnchor(monetize, {x: '10%', y: 0 }),
  {
    color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight'
  }
);

  // Update position delayed so it actually works as somehwo it wasn't on this page
  window.addEventListener('resize', function(/* event */) {
    setTimeout(function(){
      nav_share2share.position();
      nav_secure2secure.position();
      nav_control2control.position();
      nav_analyze2analyze.position();
      nav_monetize2monetize.position();
    }, 400);
  });

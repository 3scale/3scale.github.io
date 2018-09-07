let nav_share = document.getElementById('nav_share')
let nav_secure = document.getElementById('nav_secure')
let nav_distribute = document.getElementById('nav_distribute')
let nav_control = document.getElementById('nav_control')
let nav_monetize = document.getElementById('nav_monetize')

let nav_share2share = new LeaderLine(
  LeaderLine.pointAnchor(nav_share, {x: '28.5%', y: '55%'}),
  LeaderLine.pointAnchor(share, {x: '10%', y: 0 }),
  {
    //color: '#aaa',
    startPlug: 'disc',
    endPlug: 'arrow2',
    //dash: {animation: false},
    path: 'straight'
  }
);

let nav_secure2secure = new LeaderLine(
  LeaderLine.pointAnchor(nav_secure, {x: '42.5%', y: '58%'}),
  LeaderLine.pointAnchor(secure, {x: '10%', y: 0 }),
  {
    //color: '#00FF14',
    startPlug: 'disc',
    endPlug: 'arrow2',
    //dash: {animation: false},
    path: 'straight'
  }
);

let nav_distribute2distribute = new LeaderLine(
  LeaderLine.pointAnchor(nav_distribute, {x: '60%', y: '58%'}),
  LeaderLine.pointAnchor(distribute, {x: '10%', y: 0 }),
  {
    //color: '#AABB14',
    startPlug: 'disc',
    endPlug: 'arrow2',
    //dash: {animation: false},
    path: 'straight'
  }
);

let nav_control2control = new LeaderLine(
  LeaderLine.pointAnchor(nav_control, {x: '83%', y: '58%'}),
  LeaderLine.pointAnchor(control, {x: '10%', y: 0 }),
  {
    //color: '#DDFF22',
    startPlug: 'disc',
    endPlug: 'arrow2',
    //dash: {animation: false},
    path: 'straight'
  }
);

let nav_monetize2monetize = new LeaderLine(
  LeaderLine.pointAnchor(nav_monetize, {x: '71.6%', y: '25%'}),
  LeaderLine.pointAnchor(monetize, {x: '10%', y: 0 }),
  {
    //color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    //dash: {animation: false},
    path: 'straight'
  }
);

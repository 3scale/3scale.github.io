let nav_use = document.getElementById('nav_use')
let nav_install = document.getElementById('nav_install')
let use = document.getElementById('use')
let install = document.getElementById('install')

let nav_use2use = new LeaderLine(
  LeaderLine.pointAnchor(nav_use, {x: '-10%', y: '50%'}),
  LeaderLine.pointAnchor(use, {x: '10%', y: 0 }),
  {
    color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    //dash: {animation: false},
    path: 'straight'
  }
);

let nav_install2install = new LeaderLine(
  LeaderLine.pointAnchor(nav_install, {x: '50%', y: '100%'}),
  LeaderLine.pointAnchor(install, {x: '10%', y: 0 }),
  {
    color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    //dash: {animation: false},
    path: 'straight'
  }
);

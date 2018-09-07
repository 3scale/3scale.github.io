let nav_contribute = document.getElementById('nav_contribute')

let nav_contribute2contribute = new LeaderLine(
  LeaderLine.pointAnchor(nav_contribute, {x: '-5%', y: '50%'}),
  LeaderLine.pointAnchor(contribute, {x: '10%', y: 0 }),
  {
    color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    //dash: {animation: false},
    path: 'straight'
  }
);

let nav_404 = document.getElementById('nav_404')

let nav_contribute2contribute = new LeaderLine(
  LeaderLine.pointAnchor(nav_404, {x: '-5%', y: '50%'}),
  LeaderLine.pointAnchor(article_404, {x: '10%', y: 0 }),
  {
    color: '#FF7314',
    startPlug: 'disc',
    endPlug: 'arrow2',
    //dash: {animation: false},
    path: 'straight'
  }
);

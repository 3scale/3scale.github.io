let color_request = 'rgba(255, 115, 20, 1)'
let color_response = 'rgba(0, 136, 206, 1)'
let color_control = 'rgba(255, 115, 20, 1)'
let color_admin_portal = 'rgba(192, 192, 192, 1)'

let caption_outline_color = '#dadada'

let client = document.getElementById('client')
let apicast = document.getElementById('apicast')
let apisonator = document.getElementById('apisonator')
let apicenter = document.getElementById('apicenter')
let api = document.getElementById('api')

let client2policy_chain = new LeaderLine(
  LeaderLine.pointAnchor(client, {x: '77%', y: '100%'}),
  LeaderLine.pointAnchor(policy_chain, {x: '95%', y: '25%'}),
  {
    color: color_request,
    //startLabel: 'Request',
    startLabel: LeaderLine.captionLabel('Start: HTTP Request', {color: color_request, outlineColor: caption_outline_color, offset: [10, 0]}),
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    path: 'straight'
  }
);

let policy_chain2policy1 = new LeaderLine(
  LeaderLine.pointAnchor(policy_chain, {x: '95%', y: '60%'}),
  LeaderLine.pointAnchor(policy1, {x: '95%', y: '25%'}),
  {
    color: color_request,
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    path: 'straight'
  }
);


//client2policy1.setOptions({startSocket: 'bottom', endSocket: 'top'});



let policy12policy2 = new LeaderLine(
  LeaderLine.pointAnchor(policy1, {x: '95%', y: '60%'}),
  LeaderLine.pointAnchor(policy2, {x: '95%', y: '25%'}),
  {
     color: color_request,
     startPlug: 'disc',
     endPlug: 'arrow2',
     // dash: {animation: false},
     path: 'straight'
  }
);

let policy22policy3 = new LeaderLine(
  LeaderLine.pointAnchor(policy2, {x: '95%', y: '60%'}),
  LeaderLine.pointAnchor(policy3, {x: '95%', y: '25%'}),
  {
     color: color_request,
     startPlug: 'disc',
     endPlug: 'arrow2',
     // dash: {animation: false},
     path: 'straight'
  }
);

let policy32policy4 = new LeaderLine(
  LeaderLine.pointAnchor(policy3, {x: '95%', y: '60%'}),
  LeaderLine.pointAnchor(policy4, {x: '95%', y: '25%'}),
  {
     color: color_request,
     startPlug: 'disc',
     endPlug: 'arrow2',
     // dash: {animation: false},
     path: 'straight'
  }
);

let policy42policy5 = new LeaderLine(
  LeaderLine.pointAnchor(policy4, {x: '95%', y: '60%'}),
  LeaderLine.pointAnchor(policy5, {x: '95%', y: '35%'}),
  {
     color: color_request,
     startPlug: 'disc',
     endPlug: 'arrow2',
     // dash: {animation: false},
     path: 'straight'
  }
);
//policy12policy5.setOptions({startSocket: 'bottom', endSocket: 'top'});


let policy52api = new LeaderLine(
  LeaderLine.pointAnchor(policy5, {x: '95%', y: '75%'}),
  LeaderLine.pointAnchor(api, {x: '100%', y: '50%'}),
  {
    color: color_request,
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    path: 'straight'
  }
);

//policy52api.setOptions({startSocket: 'bottom', endSocket: 'top'});


let api2policy5 = new LeaderLine(
  LeaderLine.pointAnchor(api, {x: '70%', y: 0}),
  LeaderLine.pointAnchor(policy5, {x: '5%', y: '75%'}),
  {
    color: color_response,
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    path: 'straight'
  }
);

let policy52policy4 = new LeaderLine(
  LeaderLine.pointAnchor(policy5, {x: '5%', y: '25%' }),
  LeaderLine.pointAnchor(policy4, {x: '5%', y: '55%'}),
  {
    color: color_response,
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    path: 'straight'
  }
);

let policy42policy3 = new LeaderLine(
  LeaderLine.pointAnchor(policy4, {x: '5%', y: '15%'}),
  LeaderLine.pointAnchor(policy3, {x: '5%', y: '55%' }),
  {
    color: color_response,
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    path: 'straight'
  }
);

let policy32policy2 = new LeaderLine(
  LeaderLine.pointAnchor(policy3, {x: '5%', y: '15%'}),
  LeaderLine.pointAnchor(policy2, {x: '5%', y: '55%' }),
  {
    color: color_response,
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    path: 'straight'
  }
);

let policy22policy1 = new LeaderLine(
  LeaderLine.pointAnchor(policy2, {x: '5%', y: '15%'}),
  LeaderLine.pointAnchor(policy1, {x: '5%', y: '55%' }),
  {
    color: color_response,
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    path: 'straight'
  }
);

let policy12policy_chain = new LeaderLine(
  LeaderLine.pointAnchor(policy1, {x: '5%', y: '15%'}),
  LeaderLine.pointAnchor(policy_chain, {x: '5%', y: '55%' }),
  {
    color: color_response,
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    path: 'straight'
  }
);

let policy_chain2client = new LeaderLine(
  LeaderLine.pointAnchor(policy_chain , {x: '5%', y: '15%'}),
  LeaderLine.pointAnchor(client, {x: '10%', y: '100%'}),
  {
    color: color_response,
    startPlug: 'disc',
    endPlug: 'arrow2',
    // dash: {animation: false},
    endLabel: 'Response',
    endLabel: LeaderLine.captionLabel('End: HTTP Response', {color: color_response, outlineColor: caption_outline_color, offset: [10, 0]}),
    path: 'straight',
  }
);

//api2policy5.setOptions({startSocket: 'left', endSocket: 'left'});



//policy52policy1.setOptions({startSocket: 'top', endSocket: 'bottom'});





//policy12client.setOptions({startSocket: 'top', endSocket: 'bottom'});




let policy32authrep = new LeaderLine(
  LeaderLine.pointAnchor(policy3, {x: '95%', y: '20%'}),
  LeaderLine.pointAnchor(authenticate, {x: '5%', y: '15%'}),
  {
    color: color_control,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
    //endLabel: 'Control',
  }
);




let authenticate2authorize = new LeaderLine(
  LeaderLine.pointAnchor(authenticate, {x: '5%', y: '70%'}),
  LeaderLine.pointAnchor(authorize, {x: '5%', y: '20%'}),
  {
    color: color_control,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);

let authorize2policy3 = new LeaderLine(
  LeaderLine.pointAnchor(authorize, {x: '5%', y: '70%'}),
  LeaderLine.pointAnchor(policy3, {x: '95%', y: '60%'}),
  {
    color: color_control,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);

let authorize2report = new LeaderLine(
  LeaderLine.pointAnchor(authorize, {x: '5%', y: '70%'}),
  LeaderLine.pointAnchor(report, {x: '5%', y: '20%'}),
  {
    color: color_control,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);



// Apicenter

let report2analytics = new LeaderLine(
  LeaderLine.pointAnchor(report, {x: '80%', y: '50%'}),
  LeaderLine.pointAnchor(analytics, {x: '80%', y: '50%'}),
  {
    color: color_admin_portal,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);

let report2portal = new LeaderLine(
  LeaderLine.pointAnchor(report, {x: '90%', y: '50%'}),
  LeaderLine.pointAnchor(portal, {x: '90%', y: '50%'}),
  {
    color: color_admin_portal,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);

let services2pisoni = new LeaderLine(
  LeaderLine.pointAnchor(services, {x: '20%', y: '50%'}),
  LeaderLine.pointAnchor(pisoni, {x: '20%', y: '50%'}),
  {
    color: color_admin_portal,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);

let plans2pisoni = new LeaderLine(
  LeaderLine.pointAnchor(plans, {x: '15%', y: '50%'}),
  LeaderLine.pointAnchor(pisoni, {x: '15%', y: '50%'}),
  {
    color: color_admin_portal,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);

let apps2pisoni = new LeaderLine(
  LeaderLine.pointAnchor(apps, {x: '10%', y: '50%'}),
  LeaderLine.pointAnchor(pisoni, {x: '10%', y: '50%'}),
  {
    color: color_admin_portal,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);

let pisoni2internal_api = new LeaderLine(
  LeaderLine.pointAnchor(pisoni, {x: '25%', y: '50%'}),
  LeaderLine.pointAnchor(internal_api, {x: '25%', y: '50%'}),
  {
    color: color_admin_portal,
    startPlug: 'disc',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);

let policy_chain2services = new LeaderLine(
  LeaderLine.pointAnchor(policy_chain, {x: '100%', y: '50%'}),
  LeaderLine.pointAnchor(services, {x: '100%', y: '50%'}),
  {
    color: color_admin_portal,
    startPlug: 'arrow2',
    endPlug: 'arrow2',
    path: 'straight',
    // dash: {animation: false},
  }
);

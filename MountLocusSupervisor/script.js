//#region GLOBAL VARIABLES

var option;
var scrollDownTable = {},
  scrollDownGraph = {};
var image = {};
var tourists = {};
var dateArray = [];
var uniqueDateArray = new Set();
var refKey = {};
var touristsRef = {};
var counter = 0;
var dataFilterSelect = {};
var output = {};
var table = {};
var colours = {};
var traseeMontane = [];
var selectedNodes = {};
var selectedPredecesors = {};
var predecessorsSelected = false;

colours['green'] = '#006568';
colours['light orange'] = '#FF6F01';
colours['blue'] = '#90CAF9';
colours['yellow'] = '#FED000';
colours['light blue'] = '#D5E8FD';
colours['orange'] = '#FA8C05';

//#endregion

//#region FIREBASE

function initFirebase() {
  var config = {
    apiKey: 'AIzaSyAamzthwiIs-gY4SzeuH_fOu87QqF_fE60',
    authDomain: 'mountlocus.firebaseio.com',
    databaseURL: 'https://mountlocus.firebaseio.com',
    projectId: 'mountlocus',
    storageBucket: 'mountlocus.appspot.com',
  };

  firebase.initializeApp(config);

  ref = firebase.database().ref();
  touristsRef = firebase.database().ref('turisti/');

  processFirebaseData(ref);
}

function processFirebaseData(ref) {
  ref.on('value', function (snapshot) {
    tourists = {};
    counter = 0;
    $('#table').bootstrapTable('removeAll');

    snapshot.forEach(function (childSnapshot) {
      refKey = childSnapshot.key;
      childSnapshot.forEach(function (childData) {
        $('#table').bootstrapTable('append', {
          id: childData.key,
          'Nume si prenume': childData.val()['numePrenume'],
          Telefon: childData.val()['telefon'],
          GrupaMontana: childData.val()['grupaMontana'],
          DenumireTraseu: childData.val()['traseu']['denumire'],
          'Marcaj traseu': childData.val()['traseu']['marcajVizual'],
          Data: childData.val()['data'],
          Latitudine: childData.val()['latitudine'],
          Longitudine: childData.val()['longitudine'],
          Localizare:
            '<a class="locationRef" href="#scrolldown">Vezi locatia pe harta</a>',
          Imagine1:
            childData.val()['imagine1'] +
            '\n' +
            '<div class="img-container"><img class="centered" src=' +
            '"' +
            childData.val()['imagine1'] +
            '"></img></div>',
          Imagine2:
            childData.val()['imagine2'] +
            '\n' +
            '<div class="img-container"><img class="centered" src=' +
            '"' +
            childData.val()['imagine2'] +
            '"></img></div>',
        });
        tourists[childData.key] = childData.val();

        dateArray.push(childData.val()['data'].slice(0, -9));
      });
    });
    uniqueDateArray = new Set(dateArray);

    $('#selectpickerData').empty();
    uniqueDateArray.forEach((date) => {
      $('#selectpickerData').append('<option>' + date + '</option>');
    });

    $('#selectpickerData').selectpicker('refresh');
    $('#table').bootstrapTable('refresh');

    if ($('#selectpickerMasiv').val().length > 0)
      initGraph(
        traseeMontane.filter(
          (traseu) => traseu['denumire'] === $('#selectpickerMasiv').val()[0]
        )
      );
  });
}

//#endregion

//#region GRAPH

function addEdgeLabels() {
  cy.htmlLabel([
    {
      query: 'edge',
      // valign: "top",
      // halign: "right",
      valignBox: 'top',
      halignBox: 'center',
      ealign: 'midpoint',
      autorotate: true,
      cssClass: '',
      tpl: function (data) {
        return `<div class="edge-label">
                  <div class="edge-label-trail-tag">
                          <span class="trail-tag-${data.marcaj.replace(
                            ' ',
                            '-'
                          )}"></span>
                  </div>           
                </div>`;
      },
    },
  ]);
}

function processPerEdgeTouristsNumber(edges) {
  return edges.map((edge) => {
    var mappedEdge = { ...edge };
    Object.entries(tourists).forEach((tourist) => {
      if (
        tourist[1].traseu.denumire.indexOf(edge.source) !== -1 &&
        tourist[1].traseu.denumire.indexOf(edge.target) !== -1
      ) {
        mappedEdge.turisti += 1;
      }
    });
    return mappedEdge;
  });
}

function initGraph(graphData) {
  var cy = (window.cy = cytoscape({
    container: document.getElementById('cy'),
    wheelSensitivity: 0.1,
    animate: true,
    animationDuration: 2000,
    fit: true,
    autounselectify: false,

    style: [
      {
        selector: 'node',
        style: {
          width: '48px',
          height: '48px',
          'background-image': './assets/resources/tick-48.png',
          'background-color': 'white',
          //content: //"data(id)",
        },
      },

      {
        selector: 'edge',
        style: {
          'curve-style': 'bezier',
          'target-arrow-shape': 'triangle',
          'line-color': colours.orange,
          'curve-style': 'bezier',
          content: 'data(text)',
          'text-wrap': 'wrap',
          'text-margin-y': '15px',
          'font-size': '18',
          'font-family': 'Century Gothic,CenturyGothic,AppleGothic,sans-serif',
          'arrow-scale': 2.5,
        },
      },
    ],

    // elements: {
    //   //nodes: [{ data: { id: "a" } }, { data: { id: "b" } }],
    //   //edges: [{ data: { id: "ab", source: "a", target: "b" } }],
    // },
  }));

  //adding nodes

  var nodes = graphData[0].puncte;
  var edges = graphData[0].legaturi;

  edges = processPerEdgeTouristsNumber(edges);

  for (var k = 0; k < nodes.length; k++) {
    cy.add([
      {
        group: 'nodes',
        data: {
          id: nodes[k]['id'],
          // label: nodes[k]["id"],
        },
      },
    ]);
  }

  //adding edges

  for (var k = 0; k < edges.length; k++) {
    try {
      cy.add([
        {
          group: 'edges',
          data: {
            id: edges[k]['id'],
            source: edges[k]['source'],
            target: edges[k]['target'],
            text: edges[k]['turisti'],
            marcaj: edges[k]['marcaj'],
          },
        },
      ]);
    } catch (ex) {
      console.log(ex.message);
    }
  }

  addEdgeLabels();

  var bfLayout = { name: 'breadthfirst' };
  cy.layout(bfLayout).run();

  var cyNodes = cy.nodes();

  cy.animate(
    {
      fit: {
        eles: cyNodes,

        zoom: 2,
      },
    },
    {
      duration: 500,
    }
  );

  var domNodesSelection = Array.from(cy.nodes()).map((node) =>
    cy.getElementById(`${node._private.data.id}`)
  );

  // create tippy

  var makeTippy = function (ele, text) {
    var ref = ele.popperRef();

    // Since tippy constructor requires DOM element/elements, create a placeholder
    var dummyDomEle = document.createElement('div');

    var tip = tippy(dummyDomEle, {
      getReferenceClientRect: ref.getBoundingClientRect,
      trigger: 'manual', // mandatory
      // dom element inside the tippy:
      content: function () {
        // function can be better for performance
        var div = document.createElement('div');

        div.innerHTML = text;

        return div;
      },
      // your own preferences:
      arrow: true,
      placement: 'bottom',
      hideOnClick: false,
      sticky: 'reference',

      // if interactive:
      interactive: true,
      appendTo: document.body, // or append dummyDomEle to document.body
    });

    return tip;
  };

  // destroy previous tippys

  destroyTippys();

  domNodesSelection.forEach((domNode) => {
    makeTippy(domNode, domNode._private.data.id).show();
  });

  cy.on('select', 'node', function (event) {
    window['selectedNodes'] = cy.$('node:selected');
    selectedNodes = window['selectedNodes'];

    for (var i = 0; i < selectedNodes.length; i++) {
      selectedNodes[i].style('background-color', colours['green']);
    }
  });

  // cy.on("mouseup", "node", function (event) {
  //   var node = event.target;
  //   var timeout = 0;

  //   if (Array.from(selectedNodes).length == 0) {
  //     timeout = 1000;
  //   }

  //   setTimeout(function () {
  //     if (Array.from(selectedNodes).length == 0) {
  //       selectedNodes[0] = node;
  //     }
  //   }, timeout);

  //   //(async function () {
  //   //    if (checkOverlap(lastClickedNode)) {
  //   //        mergeMode = await mergeEnabler();
  //   //        if (mergeMode) {
  //   //            overlaping = checkOverlap(lastClickedNode);
  //   //            console.log('overlap ids:', overlaping);
  //   //            postMerge(parseMerge(parseInt(overlaping['src']), parseInt(overlaping['dst'])), sessionStorage.getItem("tabID"));
  //   //            location.reload();
  //   //            mergeMode = false;
  //   //        }
  //   //    }else {
  //   //        sendModifiedPosition(this.sessionStorage.getItem("tabID"), modifiedPosition);
  //   //    }
  //   //})()
  // });

  cy.on('click', 'node', function (event) {
    var node = event.target;

    if (predecessorsSelected) {
      selectedPredecesors['nodes'].animate(
        { style: { backgroundColor: colours['green'] } },
        { duration: 150 }
      );
      selectedPredecesors['edges'].animate(
        { style: { 'line-color': colours['orange'] } },
        { duration: 1 }
      );
    }

    //console.log("Connected edges", this.connectedEdges())
    //console.log("Connected edges targets", this.connectedEdges().targets())
    //console.log("Successors", this.successors()) //successor nodes and edges including self edges
    //console.log("Successor targets", this.successors().targets()) //successor nodes only
    //console.log("Predecessors", this.predecessors().nodes())
    //console.log("Incomers", this.incomers())

    if (predecessorsSelected == false) {
      selectedPredecesors['nodes'] = this.predecessors().nodes();
      selectedPredecesors['edges'] = this.predecessors().edges();
      selectedPredecesors['currentNode'] = node;

      selectedPredecesors['edges'].animate(
        { style: { 'line-color': colours['green'] } },
        { duration: 150 }
      );
      selectedPredecesors['nodes'].animate(
        { style: { 'background-color': colours['green'] } },
        { duration: 150 }
      );

      selectedPredecesors['currentNode'].animate(
        { style: { 'background-color': colours['green'] } },
        { duration: 150 }
      );

      predecessorsSelected = true;
    }
  });

  cy.on('click', function (event) {
    if ($.isEmptyObject(event.target._private.data)) {
      if (selectedNodes)
        for (var i = 0; i < selectedNodes.length; i++)
          selectedNodes[i].style('background-color', 'white');

      if (predecessorsSelected) {
        selectedPredecesors['edges'].animate({
          style: { 'line-color': colours['orange'] },
        });
        selectedPredecesors['nodes'].animate({
          style: { 'background-color': 'white' },
        });
        for (var i = 0; i < selectedNodes.length; i++)
          selectedNodes[i].style('background-color', 'white');

        predecessorsSelected = false;
      }

      window['selectedNodes'] = {};
      selectedNodes = window['selectedNodes'];
    }
  });
}

function initGraphData() {
  fetch('https://api.jsonbin.io/b/629febf8449a1f382100d214/5')
    .then((res) => res.json())
    .then((data) => {
      if (data.hasOwnProperty('trasee')) {
        traseeMontane = data['trasee'];
        initMasivSelectPicker(data['trasee']);
      } else {
        console.log('Unable to parse data from API');
      }
    })
    .catch((error) => console.log(error));
}

function initMasivSelectPicker(data) {
  $('#selectpickerMasiv').empty();
  data.forEach((traseu) => {
    if (traseu.hasOwnProperty('denumire'))
      $('#selectpickerMasiv').append(
        '<option>' + traseu['denumire'] + '</option>'
      );
  });
  $('#selectpickerMasiv').selectpicker('refresh');
}

function updateGraphTitle(newValue) {
  var graphTitle = document.querySelector('.cytoscape-graph-title span');
  if (graphTitle.childNodes.length > 1)
    graphTitle.removeChild(graphTitle.lastChild);
  graphTitle.appendChild(document.createTextNode(' din '.concat(newValue)));
}

//#endregion

//#region TABLE
var table = $('#table');

$('#remove').on('click', function () {
  var ids = $.map(table.bootstrapTable('getSelections'), function (row) {
    return row.id;
  });
  table.bootstrapTable('remove', {
    field: 'id',
    values: ids,
  });
});

$('#removeall').on('click', function () {
  table.bootstrapTable('removeAll');
});

function appendRow(dataTest) {
  $('#table').bootstrapTable('append', dataTest);
  console.log('Appended from function' + dataTest.name);
}

function detailFormatter(index, row) {
  var html = [];
  $.each(row, function (key, value) {
    html.push(
      '<p class="row" style = "width:100%"><b class="col-md-2">' +
        key +
        '</b><span class="col-md-10">: ' +
        value +
        '</span></p>'
    );
  });

  htmlFinal = html.slice(1);
  return htmlFinal.join('');
}

function totalFormatter() {
  return 'Total';
}

function amountFormatter(data) {
  return `${data.length}`;
}

$('table').on('click', 'tr', function (e) {
  var table = document.getElementById('table');

  var id = $(e.target).closest('tr').text().slice(4, 30);

  var isLocationClicked = false;
  var text = $(e.target).text();

  if (text == 'Vezi locatia pe harta') {
    isLocationClicked = true;
  }

  if (tourists[id] && isLocationClicked) {
    console.log('clicked');
    mymap.removeLayer(marker);
    pinOnMap(
      parseFloat(tourists[id].latitudine),
      parseFloat(tourists[id].longitudine)
    );
    mymap.setView(
      [
        parseFloat(tourists[id].latitudine),
        parseFloat(tourists[id].longitudine),
      ],
      11
    );
  }
});

//#endregion

//#region MAP

var mymap = {},
  marker = {};

function initMap() {
  mymap = L.map('mapid').setView([46.2167, 24.8], 6); //.setView([51.505, -0.09], 13);
  marker = L.marker([44.456675, 26.06423]).addTo(mymap);

  L.tileLayer(
    'https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=wG3vdHTAa4GLyvtsFXTg',
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }
  ).addTo(mymap);
}

function centerMapView() {
  mymap.setView([46.2167, 24.8], 6);
}

function removeLayersfromMap() {
  mymap.eachLayer(function (layer) {
    if (!!layer.toGeoJSON) {
      mymap.removeLayer(layer);
    }
  });
}

function pinOnMap(latitudine, longitudine) {
  marker = L.marker([latitudine, longitudine]).addTo(mymap);
}

//#endregion

//#region DOM-EVENTS

document.addEventListener('DOMContentLoaded', function () {
  var width = document.body.clientWidth;

  image = document.getElementById('mountainImage');
  scrollDownTable = document.getElementById('scrolldownTable');
  scrollDownGraph = document.getElementById('scrolldownGraph');

  initComponentsEvents();
  querySelectOnVariables();
  initFirebase();
  initGraphData();
  initMap();
});

function initComponentsEvents() {
  $('#selectpickerData').on(
    'changed.bs.select',
    function (e, clickedIndex, newValue, oldValue) {
      removeLayersfromMap();
      if (this.value.length == 0) {
        centerMapView();
      } else {
        for (var key in tourists) {
          if (key.includes(this.value)) {
            marker = L.marker([
              parseFloat(tourists[key].latitudine),
              parseFloat(tourists[key].longitudine),
            ]).addTo(mymap);
          }
        }
        mymap.setView([46.2167, 24.8], 7);
      }
    }
  );

  $('#selectpickerMasiv').on(
    'changed.bs.select',
    function (e, clickedIndex, newValue, oldValue) {
      updateGraphTitle(this.value);
      if (newValue) {
        initGraph(
          traseeMontane.filter((traseu) => traseu['denumire'] === this.value)
        );
      } else {
        document.querySelector('#cy').innerHTML = '';
        Array.from($('div[data-tippy-root]')).forEach((tippy) => {
          tippy._tippy.destroy();
        });
      }
      //initGraph(traseeMontane);
    }
  );

  scrollDownTable.addEventListener('click', function () {
    document
      .getElementById('TableContainer')
      //.getElementsByClassName("pic-ctn")[0]
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  scrollDownGraph.addEventListener('click', function () {
    document
      .getElementsByClassName('cytoscape-data')[0]
      //.getElementsByClassName("pic-ctn")[0]
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function querySelectOnVariables() {
  dataFilterSelect = document.getElementsByClassName('selectpicker')[0];
  output = document.getElementById('data');
  table = document.getElementById('table');
}

//#endregion

//#region UTILS
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function formatRgb(value) {
  if (value) return 'rgb(' + value.r + ',' + value.g + ',' + value.b + ')';
}

function destroyTippys() {
  Array.from($('div[data-tippy-root]')).forEach((tippy) => {
    tippy._tippy.destroy();
  });
}
//#endregion

//#region FUNCTIONALITY TESTS

// touristsRef.on('child_added', function(data) {
//   console.log('Child added', data.val()['numePrenume']);
//   // var tbody = document.querySelector('tbody');
//   // var trow = document.createElement('tr');
//   // tbody.append(trow);
//   var rowId = $('#table>tbody >tr').length;
//   datatest.name = data.val()['numePrenume'];
//   datatest.id = rowId;
//   datatest.start_date = data.val()['data'];
//   tourists[rowId] = datatest;
//   console.log('rand', rowId);

//#endregion

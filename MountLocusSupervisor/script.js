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

//#endregion

//#region FIREBASE

function initFirebase() {
  var config = {
    apiKey: "AIzaSyAamzthwiIs-gY4SzeuH_fOu87QqF_fE60",
    authDomain: "mountlocus.firebaseio.com",
    databaseURL: "https://mountlocus.firebaseio.com",
    projectId: "mountlocus",
    storageBucket: "mountlocus.appspot.com",
  };

  firebase.initializeApp(config);

  ref = firebase.database().ref();
  touristsRef = firebase.database().ref("turisti/");

  processFirebaseData(ref);
}

function processFirebaseData(ref) {
  ref.on("value", function (snapshot) {
    console.log("Updating database");
    tourists = {};
    counter = 0;
    $("#table").bootstrapTable("removeAll");

    snapshot.forEach(function (childSnapshot) {
      refKey = childSnapshot.key;
      childSnapshot.forEach(function (childData) {
        $("#table").bootstrapTable("append", {
          id: childData.key,
          "Nume si prenume": childData.val()["numePrenume"],
          Telefon: childData.val()["telefon"],
          GrupaMontana: childData.val()["grupaMontana"],
          DenumireTraseu: childData.val()["traseu"]["denumire"],
          "Marcaj traseu": childData.val()["traseu"]["marcajVizual"],
          Data: childData.val()["data"],
          Latitudine: childData.val()["latitudine"],
          Longitudine: childData.val()["longitudine"],
          Localizare:
            '<a class="locationRef" href="#scrolldown">Vezi locatia pe harta</a>',
          Imagine1:
            childData.val()["imagine1"] +
            "\n" +
            '<div class="img-container"><img class="centered" src=' +
            '"' +
            childData.val()["imagine1"] +
            '"></img></div>',
          Imagine2:
            childData.val()["imagine2"] +
            "\n" +
            '<div class="img-container"><img class="centered" src=' +
            '"' +
            childData.val()["imagine2"] +
            '"></img></div>',
        });
        tourists[childData.key] = childData.val();

        dateArray.push(childData.val()["data"].slice(0, -9));
      });
    });
    uniqueDateArray = new Set(dateArray);

    $("#selectpicker").empty();
    uniqueDateArray.forEach((date) => {
      $("#selectpicker").append("<option>" + date + "</option>");
    });

    $("#selectpicker").selectpicker("refresh");
    $("#table").bootstrapTable("refresh");
  });
}

//#endregion

//#region GRAPH

function initGraph(graphData) {
  var cy = (window.cy = cytoscape({
    container: document.getElementById("cy"),
    wheelSensitivity: 0.1,

    style: [
      {
        selector: "node",
        style: {
          content: "data(id)",
        },
      },

      {
        selector: "edge",
        style: {
          "curve-style": "bezier",
          "target-arrow-shape": "triangle",
        },
      },
    ],

    elements: {
      nodes: [{ data: { id: "a" } }, { data: { id: "b" } }],
      edges: [{ data: { id: "ab", source: "a", target: "b" } }],
    },

    layout: { name: "grid" },
  }));

  var a = cy.getElementById("a");
  var b = cy.getElementById("b");
  var ab = cy.getElementById("ab");

  var makeTippy = function (ele, text) {
    var ref = ele.popperRef();

    // Since tippy constructor requires DOM element/elements, create a placeholder
    var dummyDomEle = document.createElement("div");

    var tip = tippy(dummyDomEle, {
      getReferenceClientRect: ref.getBoundingClientRect,
      trigger: "manual", // mandatory
      // dom element inside the tippy:
      content: function () {
        // function can be better for performance
        var div = document.createElement("div");

        div.innerHTML = text;

        return div;
      },
      // your own preferences:
      arrow: true,
      placement: "bottom",
      hideOnClick: false,
      sticky: "reference",

      // if interactive:
      interactive: true,
      appendTo: document.body, // or append dummyDomEle to document.body
    });

    return tip;
  };

  var tippyA = makeTippy(a, "foo");

  tippyA.show();

  var tippyB = makeTippy(b, "bar");

  tippyB.show();

  var tippyAB = makeTippy(ab, "baz");

  tippyAB.show();
}

function initGraphData() {
  fetch("https://api.jsonbin.io/b/629febf8449a1f382100d214")
    .then((res) => res.json())
    .then((data) => {
      if (data.hasOwnProperty("trasee")) {
        initGraph(data["trasee"]);
      } else {
        console.log("Unable to parse data from API");
      }
    })
    .catch((error) => console.log(error));
}

//#endregion

//#region TABLE
var table = $("#table");

$("#remove").on("click", function () {
  var ids = $.map(table.bootstrapTable("getSelections"), function (row) {
    return row.id;
  });
  table.bootstrapTable("remove", {
    field: "id",
    values: ids,
  });
});

$("#removeall").on("click", function () {
  table.bootstrapTable("removeAll");
});

function appendRow(dataTest) {
  $("#table").bootstrapTable("append", dataTest);
  console.log("Appended from function" + dataTest.name);
}

function detailFormatter(index, row) {
  var html = [];
  $.each(row, function (key, value) {
    html.push(
      '<p class="row" style = "width:100%"><b class="col-md-2">' +
        key +
        '</b><span class="col-md-10">: ' +
        value +
        "</span></p>"
    );
  });

  htmlFinal = html.slice(1);
  return htmlFinal.join("");
}

function totalFormatter() {
  return "Total";
}

function amountFormatter(data) {
  return `${data.length}`;
}

$("table").on("click", "tr", function (e) {
  var table = document.getElementById("table");

  var id = $(e.target).closest("tr").text().slice(4, 30);

  var isLocationClicked = false;
  var text = $(e.target).text();

  if (text == "Vezi locatia pe harta") {
    isLocationClicked = true;
  }

  if (tourists[id] && isLocationClicked) {
    console.log("clicked");
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
  mymap = L.map("mapid").setView([46.2167, 24.8], 6); //.setView([51.505, -0.09], 13);
  marker = L.marker([44.456675, 26.06423]).addTo(mymap);

  L.tileLayer(
    "https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=wG3vdHTAa4GLyvtsFXTg",
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

document.addEventListener("DOMContentLoaded", function () {
  var width = document.body.clientWidth;

  image = document.getElementById("mountainImage");
  scrollDownTable = document.getElementById("scrolldownTable");
  scrollDownGraph = document.getElementById("scrolldownGraph");

  initComponentsEvents();
  querySelectOnVariables();
  initFirebase();
  initGraphData();
  initMap();
});

function initComponentsEvents() {
  $("#selectpicker").on(
    "changed.bs.select",
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

  scrollDownTable.addEventListener("click", function () {
    document
      .getElementById("TableContainer")
      //.getElementsByClassName("pic-ctn")[0]
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });

  scrollDownGraph.addEventListener("click", function () {
    document
      .getElementsByClassName("cytoscape-data")[0]
      //.getElementsByClassName("pic-ctn")[0]
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function querySelectOnVariables() {
  dataFilterSelect = document.getElementsByClassName("selectpicker")[0];
  output = document.getElementById("data");
  table = document.getElementById("table");
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

// make is a function that takes an instance of the
// elm runtime
// returns an object where:
//      keys are names to be accessed in pure Elm
//      values are either functions or values

var create = function(a) {

    var mymap = L.map('mapid').setView([48.816, 17.519], 14);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZG9tb2dsZWQiLCJhIjoiY2luN3piMWoxMDAyeXc5bHppNnN2dHVjbiJ9.FxeEPR3az9SV27KiLv3R1Q'
        // accessToken: 'pk.eyJ1IjoiZG9tb2dsZWQiLCJhIjoiY2luN3o3YmxyMDAzNndjbHpreThpdGRiMiJ9.KrcPrMys90cufj7wUtXQ0g'
    }).addTo(mymap);

  return mymap;
};


var make = function make(elm) {
    // If Native isn't already bound on elm, bind it!
    elm.Native = elm.Native || {};
    // then the same for our module
    elm.Native.Leaflet = elm.Native.Leaflet || {};

    // `values` is where the object returned by make ends up internally
    // return if it's already set, since you only want one definition of
    // values for speed reasons
    if (elm.Native.Leaflet.values) return elm.Native.Leaflet.values;

    // return the object of your module's stuff!
    return elm.Native.Leaflet.values = {
        'create': create
    };
};

// setup code for MyModule
// Elm.Native.MyModule should be an object with
// a property `make` which is specified above
Elm.Native.Leaflet = {};
Elm.Native.Leaflet.make = make;

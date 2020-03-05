var t0 = null; var t1 = null;
var prm = Sys.WebForms.PageRequestManager.getInstance();
prm.add_pageLoaded( function()
{
                console.log("in add_pageLoaded()");
                t1 = performance.now();
                console.log("Loading took " + ((t1 - t0)/1000) + " seconds.");
});
prm.add_pageLoading( function() { console.log("in add_pageLoading()"); });
prm.add_beginRequest( function() {
console.log("in add_beginRequest()");
                t0 = performance.now();
});

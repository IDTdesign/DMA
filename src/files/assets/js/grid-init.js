//##################################### CSGRID ##############################################################################################################################################
var csGrid = $("#csGrid");
var csData = [{name: "<a id='editCs' href='#fakelink'>First CS</a>", channel: "US", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Smith", actions: csGroup},
{name: "<a id='editCs' href='#fakelink'>Second CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: csGroup}];
csGrid.jqGrid({
	datatype: 'local',
    colNames:['Name','Channel','Start Date', 'End Date','Created','Actions'],
    colModel:[
        {name:'name', index:'name', editable: true},
        {name:'channel', index:'channel', editable: true},
        {name:'startDate', index:'startDate', editable: true},
        {name:'endDate', index:'endDate', editable: true},
        {name:'created', index:'created', editable: true},
        {name:'actions', index:'actions', editable: false, sortable: false, search: false},
               ],
    pager: "#pager",
    hidegrid: false,
    height: '100%',
    rowNum: 10,
    rowList: [10, 20, 30],
    viewrecords: true,		    
    autowidth: true,
    gridview: true,
    cellEdit: false,
    cellsubmit: 'clientArray',
    editurl: 'clientArray',
    data : csData,
	caption: 'Changsets',
});
	csGrid.jqGrid('navGrid','#pager',{add: false, edit: false, del:false, search:false, refresh: false}, //options
		{reloadAfterSubmit:false}, // del options
		{reloadAfterSubmit:false}, // del options
		{reloadAfterSubmit:false} // del options
	);
	csGrid.navButtonAdd('#pager',{
	   title:"Add new", 
	   caption: "Add new",
	   buttonicon:"fa fa-plus-circle", 
	   position:"first",
   	   onClickButton: function(){ 
	   		var nUrl = window.location.href.replace('changesets', '') + "cms-steps";
	   		window.location.href = nUrl;
	   }, 

	});
//##################################### ZONE CHANGE ##############################################################################################################################################
var zcGrid = $("#zcGrid");
var csData = [{name: "<a id='editCs' href='#fakelink'>First CS</a>", channel: "US", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Smith", actions: csGroup},
{name: "<a id='editCs' href='#fakelink'>Second CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: csGroup}];
zcGrid.jqGrid({
    datatype: 'local',
    colNames:['Name','Channel','Start Date', 'End Date','Created','Actions'],
    colModel:[
        {name:'name', index:'name', editable: true},
        {name:'channel', index:'channel', editable: true},
        {name:'startDate', index:'startDate', editable: true},
        {name:'endDate', index:'endDate', editable: true},
        {name:'created', index:'created', editable: true},
        {name:'actions', index:'actions', editable: false, sortable: false, search: false},
               ],
    pager: "#zcPager",
    hidegrid: false,
    height: '100%',
    rowNum: 10,
    rowList: [10, 20, 30],
    viewrecords: true,          
    autowidth: true,
    gridview: true,
    cellEdit: false,
    cellsubmit: 'clientArray',
    editurl: 'clientArray',
    data : csData,
    caption: 'Zone change',
});
    zcGrid.jqGrid('navGrid','#zcPager',{add: false, edit: false, del:false, search:false, refresh: false}, //options
        {reloadAfterSubmit:false}, // del options
        {reloadAfterSubmit:false}, // del options
        {reloadAfterSubmit:false} // del options
    );
    zcGrid.navButtonAdd('#zcPager',{
       title:"Add new", 
       caption: "Add new",
       buttonicon:"fa fa-plus-circle", 
       position:"first",
       onClickButton: function(){ 
            var nUrl = window.location.href.replace('changesets', '') + "cms-steps";
            window.location.href = nUrl;
       }, 

    });
//##################################### RESOURCE CHANGE ##############################################################################################################################################
var rcGrid = $("#rcGrid");
var csData = [{name: "<a id='editCs' href='#fakelink'>First CS</a>", channel: "US", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Smith", actions: csGroup},
{name: "<a id='editCs' href='#fakelink'>Second CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: csGroup}];
rcGrid.jqGrid({
    datatype: 'local',
    colNames:['Name','Channel','Start Date', 'End Date','Created','Actions'],
    colModel:[
        {name:'name', index:'name', editable: true},
        {name:'channel', index:'channel', editable: true},
        {name:'startDate', index:'startDate', editable: true},
        {name:'endDate', index:'endDate', editable: true},
        {name:'created', index:'created', editable: true},
        {name:'actions', index:'actions', editable: false, sortable: false, search: false},
               ],
    pager: "#rcPager",
    hidegrid: false,
    height: '100%',
    rowNum: 10,
    rowList: [10, 20, 30],
    viewrecords: true,          
    autowidth: true,
    gridview: true,
    cellEdit: false,
    cellsubmit: 'clientArray',
    editurl: 'clientArray',
    data : csData,
    caption: 'Resource change',
});
    rcGrid.jqGrid('navGrid','#rcPager',{add: false, edit: false, del:false, search:false, refresh: false}, //options
        {reloadAfterSubmit:false}, // del options
        {reloadAfterSubmit:false}, // del options
        {reloadAfterSubmit:false} // del options
    );
    rcGrid.navButtonAdd('#rcPager',{
       title:"Add new", 
       caption: "Add new",
       buttonicon:"fa fa-plus-circle", 
       position:"first",
       onClickButton: function(){ 
            var nUrl = window.location.href.replace('changesets', '') + "cms-steps";
            window.location.href = nUrl;
       }, 

    });

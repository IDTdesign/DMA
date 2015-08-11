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

//CSGRID NESTED
var myGridData = [
        // main grid data
        {id: "m1", col1: "11", col2: "12"},
        {id: "m2", col1: "21", col2: "22"},
        {id: "m3", col1: "31", col2: "32"}
    ],
    mySubgrids = {
        m1: [
            // data for subgrid for the id=m1
            {id: "s1a", c1: "aa", c2: "ab", c3: "ac"},
            {id: "s1b", c1: "ba", c2: "bb", c3: "bc"},
            {id: "s1c", c1: "ca", c2: "cb", c3: "cc"}
        ],
        m2: [
            // data for subgrid for the id=m2
            {id: "s2a", c1: "xx", c2: "xy", c3: "xz"},
            {id: "s2a", c1: "xx", c2: "xy", c3: "xz"},
            {id: "s2a", c1: "xx", c2: "xy", c3: "xz"}
        ],
        m3: [
            // data for subgrid for the id=m2
            {id: "s3a", c1: "x3", c2: "3y", c3: "3z"},
            {id: "s3a", c1: "x3", c2: "3y", c3: "3z"},
            {id: "s3a", c1: "x3", c2: "3y", c3: "3z"},
            {id: "s3a", c1: "x3", c2: "3y", c3: "3z"},
        ]
    },
    $grid = $("#csGridNested"),
    pagerSelector = "#nestedPager",
    myAddButton = function(options) {
        $grid.jqGrid('navButtonAdd',pagerSelector,options);
        $grid.jqGrid('navButtonAdd','#'+$grid[0].id+"_toppager",options);
    };

$grid.jqGrid({
    datatype: 'local',
    data: myGridData,
    colNames: ['Column 1', 'Column 2'],
    colModel: [
        { name: 'col1'},
        { name: 'col2'}
    ],
    autowidth: true,
    gridview: true,
    autoencode: true,
    sortname: 'col1',
    sortorder: 'desc',
    height: '100%',
    hidegrid: false,
    pager: '#nestedPager',
    toppager: true,
    caption: 'Subgrid example',
    subGrid: true,
    subGridRowExpanded: function (subgridDivId, rowId) {
        var subgridTableId = subgridDivId + "_t";
        var pagerId = "p_"+subgridTableId;
        $("#" + subgridDivId).html("<table id='" + subgridTableId + "'></table><div id='"+ pagerId +"' class='scroll'></div>");
        $("#" + subgridTableId).jqGrid({
            datatype: 'local',
            data: mySubgrids[rowId],
            colNames: ['Col 1', 'Col 2', 'Col 3'],
            colModel: [
                { name: 'c1'},
                { name: 'c2'},
                { name: 'c3'}
            ],
            gridview: true,
            autoencode: true,
            autowidth: true,
            sortname: 'col1',
            sortorder: 'desc',
            height: '100%',
            caption: 'Hi nested grid',
            hidegrid: false,
            pager: pagerId,
        });
        $("#"+subgridTableId).jqGrid('navGrid',"#"+pagerId,{edit:false,add:false,del:false,search:false,refresh: false})
        $("#"+subgridTableId).navButtonAdd("#"+pagerId,{
               title:"Add new",
               caption: "Add new",
               buttonicon:"fa fa-plus-circle",
               position:"first",
               onClickButton: function(){
                    var nUrl = window.location.href.replace('changesets', '') + "cms-steps";
                    window.location.href = nUrl;
                }
        });
        stripSubGrid(subgridTableId, rowId);
    }
});
$("#csGridNested").jqGrid('navGrid','#nestedPager',{cloneToTop: true, add: false, edit: false, del:false, search:false, refresh: false});
/*$("#csGridNested").navButtonAdd('#nestedPager',{
       title:"Add new",
       caption: "Add new",
       buttonicon:"fa fa-plus-circle",
       position:"first",
       onClickButton: function(){
            var nUrl = window.location.href.replace('changesets', '') + "cms-steps";
            window.location.href = nUrl;
        }
});*/
if($grid.attr('id') == "csGridNested"){
    myAddButton ({
           title:"Add new",
           caption: "Add new",
           buttonicon:"fa fa-plus-circle",
           position:"first",
           onClickButton: function(){
                var nUrl = window.location.href.replace('changesets', '') + "cms-steps";
                window.location.href = nUrl;
            }
    });
}
//##################################### ZONE CHANGE ##############################################################################################################################################
var zcGrid = $("#zcGrid");
var csData = [{name: "<a id='editCs' href='#fakelink'>First CS</a>", channel: "US", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Smith", actions: csGroup},
{name: "<a id='editCs' href='#fakelink'>Second CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: csGroup},
{name: "<a id='editCs' href='#fakelink'>Third CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: csGroup},
{name: "<a id='editCs' href='#fakelink'>Fifth CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: csGroup},
{name: "<a id='editCs' href='#fakelink'>Sixth CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: csGroup},
{name: "<a id='editCs' href='#fakelink'>Seventh CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: csGroup}];
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



function stripSubGrid(subgridTableId, rowId){
    $("#" + subgridTableId).addClass('table-hover table-striped');
}
zcGrid.jqGrid('filterToolbar');
rcGrid.jqGrid('filterToolbar');
//##################################### MESSAGES ##############################################################################################################################################
var msGrid = $("#msGrid");
var msData = [{name: "<a id='editCs' href='#fakelink'>First CS</a>", channel: "US", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Smith", actions: msGroup},
{name: "<a id='editCs' href='#fakelink'>Second CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: msGroup},
{name: "<a id='editCs' href='#fakelink'>Third CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: msGroup},
{name: "<a id='editCs' href='#fakelink'>Fifth CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: msGroup},
{name: "<a id='editCs' href='#fakelink'>Sixth CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: msGroup},
{name: "<a id='editCs' href='#fakelink'>Seventh CS</a>", channel: "ES", startDate: "01/01/2015", endDate: "01/07/2015", created: "12/31/2014 by J.Cole", actions: msGroup}];
msGrid.jqGrid({
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
    pager: "#msPager",
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
    data : msData,
    caption: 'Messages list',
});
    msGrid.jqGrid('navGrid','#msPager',{add: false, edit: false, del:false, search:false, refresh: false}, //options
        {reloadAfterSubmit:false}, // del options
        {reloadAfterSubmit:false}, // del options
        {reloadAfterSubmit:false} // del options
    );
    msGrid.navButtonAdd('#msPager',{
       title:"Add new",
       caption: "Add new",
       buttonicon:"fa fa-plus-circle",
       position:"first",
       onClickButton: function(){
            alert("Good job!");
       },

    });
$("body").on('click', "#sendMessage", function(){
	$("#sendModal").modal('show');
	$("#selectColor, #selectCity, #selectSea").select2({
		theme: "boss"
	});
});
$("body").on('click', "label.btn", function(){
	if($(this).children().hasClass("seleted-val")){
		$(this).parents(".form-group").find("input[type=text], select").removeAttr("disabled").focus();
		$(this).parents(".form-group").find("select").select2("open");
	} else {
		$(this).parents(".form-group").find("input[type=text], select").attr("disabled", "disabled");
		$(this).parents(".form-group").find("select").val(null).trigger('change');
	}
})

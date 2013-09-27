/*global Ext:false */
Ext.onReady(function() {
   
    var item1 = new Ext.Panel({
                title: 'Adres Sorgula',
                html: '&lt;empty panel&gt;',
                cls:'empty'
            });

            var item2 = new Ext.Panel({
                title: 'Bina Sorgula',
                html: '&lt;empty panel&gt;',
                cls:'empty'
            });

            var item3 = new Ext.Panel({
                title: 'Parsel Sorgula',
                html: '&lt;empty panel&gt;',
                cls:'empty'
            });

            var item4 = new Ext.Panel({
                title: 'Onemli yer sorgula',
                html: '&lt;empty panel&gt;',
                cls:'empty'
            });


            var accordion = new Ext.Panel({
                region:'east',
				collapsible:true,
                margins:'0 0 0 0',
				title:'CBS Sorgulama',
                split:true,
                width: 230,
				height:300,
                layout:'accordion',
                items: [item1, item2, item3, item4]
            });
   
Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
			height:40,
            html: '<div style=""><h1 class="x-panel-header" style="background-color: rgb(231, 236, 241);text-align: center;font-size: 25px;padding: 0px 14px 0px 0px;height: 69px;margin-top: 0px;color: darkblue;">Gungoren Belediyesi Cografi Bilgi Sistemi</h1></div>',
            border: false,
            margins: '0 0 0 0'
        },
		{
            region: 'east',
            title: 'Bilgilendirme',
		//	collapsed:true,
            collapsible: true,
            split: true,
            width: 230,
			xtype:'panel',
			items:[
			accordion,
			 {
				 
			    title: 'Katmanlar',
				collapsible:true,
				height:300,
                html: '<div >asdasdasdasdasd</div>'
            }
			]
			
        }
		, {
            region: 'south',
            title: 'South Panel',
			collapsed: true,
            collapsible: true,
            html: '<p id="aa"></p>',
            split: true,
            height: 170
        }, {
            region: 'west',
            title: 'Panogramik Görüntü',
			collapsed:true,
            collapsible: true,
            split: true,
            width: 230,
			layout:'border',

        }, {
            region: 'center',
            xtype: 'tabpanel',
            // TabPanel itself has no title
            activeTab: 0,
            // First tab active by default
            items: {
                title: 'Default Tab',
                html: '<div id="map" name="map" style="width: 1300px;background-color: rgb(231, 240, 245);height: 520px;"></div>'
            }
        }]
    });
			
	
var map=document.getElementById('map');
	var wms;
	var wms1;
	var bounds;
	var options;
	var popup;
	var dizi;
	var global_mah_konum;
	var vectors;
bounds = new OpenLayers.Bounds(404000.0368856075,4541290.715344564,407548.50061436987,4545454.193594995);
		
	  options = {
  			 controls: [new OpenLayers.Control.Navigation(), 
             new OpenLayers.Control.PanZoomBar()
			 ],
			 projection: new OpenLayers.Projection("EPSG:3137"),
             displayProjection: new OpenLayers.Projection("EPSG:3137"), 
             numZoomLevels: 10,
			 projection: "EPSG:3137" ,
			 maxExtent: bounds
			    };
     map = new OpenLayers.Map('map',options);
	 		
	  wms = new OpenLayers.Layer.WMS("rrrr", "http://localhost:8081/geoserver/gungoren_ilce/wms",
                {      
                        LAYERS: 'gungoren_ilce:ilce',
						 transparent: true,
						 tiled: true
						},
						{isBaseLayer: true}
            );
			
	  wms1 = new OpenLayers.Layer.WMS("gungoren_ilce:ilce - Tiled", "http://localhost:8081/geoserver/gungoren_ilce/wms",
                {      
                        LAYERS: 'gungoren_ilce:Mahalle, gungoren_ilce:Yol, gungoren_ilce:Yapi',
						 transparent: true, 
						 tiled: true
						},
						{isBaseLayer: false}
            );
			
		vectors = new OpenLayers.Layer.Vector( "Vector Katmani" );	
	    map.addLayers([wms,wms1,vectors]);
      
	    map.addControl(new OpenLayers.Control.LayerSwitcher());
	
		   
		map.zoomToMaxExtent();
		//updateFormats();
	
	
});

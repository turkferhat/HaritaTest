//DENEME AMACLI YAZILMIŞTIR
var anasayfa;
var map;
 anasayfa= Ext.application({
		requires:['Ext.container.Viewport'],		
		name:'Gungoren',
		appFolder:'app',
		controllers: ['katman_control','sorgu_control','bina_control','parsel_control'],
		launch:function()
			{

 
    var sorgulama = new Ext.Panel({
        //      title: 'Adres Sorgula',
                cls:'empty',
				layout:'absolute',
				height:134,
				margin:'0 0 0 1',
				width:222,
				items:[{
					x:10,
					y:20,
					xtype:'combox_mah'
					},
					{
					x:10,
					y:50,	
					xtype:'combo_sok'
					},{
					x:10,
					y:80,	
					xtype:'combox_kapno'
					}
					]
            });
		 var bina_sorgu_form = new Ext.Panel({
        //      title: 'Adres Sorgula',
                cls:'empty',
				layout:'absolute',
				height:134,
				margin:'0 0 0 1',
				width:222,
				items:[{
					x:0,
					y:0,
					xtype:'bina_form'
					}
					]
            });	

   
    var parsel_sorgu_form = new Ext.Panel({
        //      title: 'Adres Sorgula',
                cls:'empty',
				layout:'absolute',
				height:134,
				margin:'0 0 0 1',
				width:222,
				items:[{
					x:0,
					y:0,
					xtype:'parsel_form'
					}
					]
            });	
			
    var item1 = new Ext.Panel({
                title: 'Adres Sorgula',
                cls:'empty',
				//layout:'absolute',
				items:[sorgulama]
            });

            var item2 = new Ext.Panel({
                title: 'Bina Sorgula',
               items:[bina_sorgu_form]
            });

            var item3 = new Ext.Panel({
                title: 'Parsel Sorgula',
                items:[parsel_sorgu_form]
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
				height:270,
                layout:'accordion',
                items: [item1, item2, item3, item4]
            });
   
Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [/*{
            region: 'north',
			height:40,
            html: '<div style=""><h1 class="x-panel-header" style="background-color: rgb(231, 236, 241);text-align: center;font-size: 25px;padding: 0px 14px 0px 0px;height: 69px;margin-top: 0px;color: darkblue;">Gungoren Belediyesi Cografi Bilgi Sistemi</h1></div>',
            border: false,
            margins: '0 0 0 0'
        },*/
		{
            region: 'east',
            title: 'Bilgilendirme',
		//	collapsed:true,
            collapsible: true,
           // split: true,
            width: 230,
			xtype:'panel',
			items:[
			accordion,
			 {
				 
			     title: 'Katmanlar',
				collapsible:true,
				height:300,
				xtype:'panel',
				items:[{
					xtype:'deneme',
					//html:'<p>label one</p>'
					}/*,
					{
					xtype:'label',
					html:'<p>deneme 2</p>'
					}*/]
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
            layout: 'absolute',
			
items:[{
    title: 'Güngören Belediyesi Cografi Bilgi Sistemi',
    x: 0,
    y: 0,
	width:1200,
     html: '<div id="map" name="map" style="width: 1200px;background-color:white;height: 580px;"></div>'
}]
        }]
    });
			
	
map=document.getElementById('map');
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
	 		
	 wms = new OpenLayers.Layer.WMS("ilçe", "http://81.215.201.236:8081/geoserver/GungorenYeniWs/wms",
                {      
                        LAYERS: 'GungorenYeniWs:ilce',
						 transparent: true,
						 tiled: true
						},
						{isBaseLayer: true}
            );
			
	 wms1 = new OpenLayers.Layer.WMS("gungoren_ilce:ilce - Tiled", "http://81.215.201.236:8081/geoserver/GungorenYeniWs/wms",
                {      
                        LAYERS: 'GungorenYeniWs:mahalle, GungorenYeniWs:yol, GungorenYeniWs:yapi',
						 transparent: true, 
						 tiled: true
						},
						{isBaseLayer: false}
            );
		vectors = new OpenLayers.Layer.Vector( "Vector Katmani" );	
	    map.addLayers([wms,wms1,vectors]);
       	map.addControl(new OpenLayers.Control.LayerSwitcher());
		map.zoomToMaxExtent();
		
//Fonksiyon Başlangıcı	
	Ext.define('Gungoren.util.Fonksiyon', 
	{
    singleton: true,
   
    wkt_atama: function(adres) 
    {
	        var features = formats['in']['wkt'].read(adres);
		    var bounds;
	    if(features) 
		{
             if(features.constructor != Array) 
			 	{
                    features = [features];
                }
			  for(var i=0; i<features.length; ++i) 
			  {
                    if (!bounds) 
					{
                        bounds = features[i].geometry.getBounds();
                    } else {
				        bounds.extend(features[i].geometry.getBounds());
                		   }
			  }
			//Bir öncesini silme	
			 vectors.removeFeatures(vectors.features[0]);
		     vectors.addFeatures(features);
		     map.zoomToExtent(bounds);
	    } else {
 //               element.value = 'Bad input ' + type;
               }
    },
    wkt_update:function()
    {
	        var in_options = 
			{
                'internalProjection': map.baseLayer.projection
            };   
            var out_options = 
			{
                'internalProjection': map.baseLayer.projection
            };
            formats = 
			{
              'in': {
                wkt: new OpenLayers.Format.WKT(in_options),
                encoded_polyline: new OpenLayers.Format.EncodedPolyline(in_options)
            	    },
			  
              'out': 
			  		{
                wkt: new OpenLayers.Format.WKT(out_options),
                encoded_polyline: new OpenLayers.Format.EncodedPolyline(out_options)
		            }
            };
    },
ajax_veri_cek:function(url,data1,data2)
	{
		Ext.Ajax.request
		({
		    url: url,
			type: 'json',
		    params: 
			{
        	id1:data1,
			id2:data2,  
		    },
		    timeout: 3000,
		    method: 'POST',
		    success: function(donen_data) 
			{
				
			var response = donen_data.responseText;
		    response = response.replace('\n', '');
			
		//	alert(response + "dsdsdsds");
			
if(response=="")	{

   Ext.Msg.alert('Sorgulama Sonucu', 'Girmiş olduğunuz değerler yanlış yada hatalı Lütfen Tekrar Deneyiniz');
	
	}	
		Gungoren.util.Fonksiyon.wkt_update();
		Gungoren.util.Fonksiyon.wkt_atama(response);
	
		    }
		});
	
	}
    });//Burası Fonksiyon sonu

			}//lounch fonk sonu
});//application sonu

	 var genel_mah_id;
	 var genel_sok_ad;
	 Ext.define('Gungoren.controller.sorgu_control', {
    	extend: 'Ext.app.Controller',
	
		stores: ['mahalle','sokak','kapino'],	//Burada eklemis oldugumuz stores sayfsini burada tanimliyoruz
//	models: ['User'],
    	views: [
			'sorgu.mahalle',
			'sorgu.sokak',
			'sorgu.kapino'
    		],
    init: function() 
	{
		this.control
		 ({
            'combo[action=mbox]':
			{
                select:this.sokak_sorgula
            },
			'combo[action=sbox]':{
                select:this.kapino_sorgula//Bu kısımda kapınolar veritabanından alınarak dropdownda gösteriliyor aynı zamanda  sokak dropdownu olduğu için  mekansal gösterimide burada sağlanmıştır
            },
			'combo[action=kbox]':{
                select:this.kapino_mekansal//Bu kısım seçilen kapinoların haritada mekansal gösterimini sağlayacaktır
            },
		  });
    }, 
kapino_mekansal: function(secilen_kap_no) 
	{	
	//alert(genel_sok_ad + "  " + genel_mah_id + "  " + secilen_kap_no.getValue() );
	  	//Burası seçilen kapinumarasının mekansal konumunu getirecektir
		/*Ext.Ajax.request
		({
		    url: 'data/mekansal_sorgu/kapino.php',
			type: 'json',
		    params: 
			{
        	mah_id:genel_mah_id,
			sok_ad:genel_sok_ad, 
			kap_no: secilen_kap_no.getValue() 
		    },
		    timeout: 3000,
		    method: 'POST',
		    success: function(donen_data) 
			{
			var response = donen_data.responseText;
		    response = response.replace('\n', '');
			//alert(response);	
		Gungoren.util.Fonksiyon.wkt_update();
		Gungoren.util.Fonksiyon.wkt_atama(response);
	
		    }
		});*/
		
		Gungoren.util.Fonksiyon.wkt_update();
		Gungoren.util.Fonksiyon.wkt_atama(secilen_kap_no.getValue());
		
	},
sokak_sorgula: function(secilen_mah_id) 
	{
		genel_mah_id=secilen_mah_id.getValue();//Burada sokak konum aramada kullanacağımız mahalle id si ataması yapılmıştır
	
		Ext.Ajax.request
		({
		    url: 'data/sokak.php',
			type: 'json',
		    params: 
			{
        	foo: secilen_mah_id.getValue()
		    },
		    timeout: 3000,
		    method: 'POST',
		    success: function(donen_data) 
			{
			var test = Ext.getStore("sokak");
			var response = donen_data.responseText;
		    response = response.replace('\n', '');
            var jsonResponse = Ext.decode(response);
			test.loadData(jsonResponse, false);
               			
		    }
		});
		//Burası seçilen mahallenin mekansal konumunu getirecektir
		
		Ext.Ajax.request
		({
		    url: 'data/mekansal_sorgu/mahalle.php',
			type: 'json',
		    params: 
			{
        	id: secilen_mah_id.getValue()
		    },
		    timeout: 3000,
		    method: 'POST',
		    success: function(donen_data) 
			{
			var response = donen_data.responseText;
		    response = response.replace('\n', '');
			//alert(response);	
		Gungoren.util.Fonksiyon.wkt_update();
		Gungoren.util.Fonksiyon.wkt_atama(response);
	
		    }
		});
	},
	
kapino_sorgula: function(sokak_adi) 
	{
		
		genel_sok_ad=sokak_adi.getValue();
		Ext.Ajax.request
	({
    		url: 'data/kapino.php',
			type: 'json',
			
		    params: 
		{
        	sadi: sokak_adi.getValue(),
		},
		    timeout: 3000,
		    method: 'POST',
		
		    success: function(donen_data) 
		{
			
			var test = Ext.getStore("kapino");
			var response = donen_data.responseText;
            response = response.replace('\n', '');
		
            var jsonResponse = Ext.decode(response);
			test.loadData(jsonResponse, false);
        }
	});
	
	//alert(genel_mah_id + "  " + sokak_adi.getValue() );
		//Burası seçilen sokakların mekansal konumunu getirecektir
		Ext.Ajax.request
		({
		    url: 'data/mekansal_sorgu/sokak.php',
			type: 'json',
		    params: 
			{
        	id: genel_mah_id,
			sok_ad:sokak_adi.getValue()
		    },
		    timeout: 3000,
		    method: 'POST',
		    success: function(donen_data) 
			{
			var response = donen_data.responseText;
		    response = response.replace('\n', '');
			//alert(response);	
		Gungoren.util.Fonksiyon.wkt_update();
		Gungoren.util.Fonksiyon.wkt_atama(response);
	
		    }
		});
    },
	
});
 Ext.define('Gungoren.controller.bina_control', {
    extend: 'Ext.app.Controller',
//stores: ['mahalle','sokak'],	//Burada eklemis oldugumuz stores sayfsini burada tanimliyoruz
//	models: ['User'],
    views: [
		'bina_sorgu.form'
    ],
 refs: {
        home: '#bina_sorgu',
        LoginForm: '#loginForm',
    },	
    init: function() {
		
		this.control({
            
			'button[action=bina_buton]':
			{
                click:this.deneme
            }
					 });
					 
    	},deneme: function(aa) {

  var bina_kod=Ext.getCmp('bin_kod').getValue();
  
  var bina_ad=Ext.getCmp('bin_ad').getValue();
 
  var url='data/Bina_sorgu/bina_sorgu.php'
  
  Gungoren.util.Fonksiyon.ajax_veri_cek(url,bina_kod,bina_ad);
  
  
  
  }

	
});
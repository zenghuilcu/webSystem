var menu=(function(){

 	var linkList = [];
    var tabs = [];
	return {


		listAdd:function(obj){
			linkList.push(obj);
		},
		init: function(){
		    if(linkList.length == 0){
			return;
		    };
		   
			tabs.push("1000");
			var row = $('<div class="row"></div>');
			var count = 0;
			for(var i = 0; i < linkList.length; i++){
			   if (linkList[i].sysCategoryId == "1000"){
				row.append(this.getElement(linkList[i]));
				count++;
			   }
			   if(count == 2){
				$("#"+"1000").append(row);
				row = $('<div class="row"></div>');
				count = 0;
			   }
			}
			if(count != 0){
			    $("#"+"1000").append(row);
			}
		   
			tabs.push("1001");
			var row = $('<div class="row"></div>');
			var count = 0;
			for(var i = 0; i < linkList.length; i++){
			   if (linkList[i].sysCategoryId == "1001"){
				row.append(this.getElement(linkList[i]));
				count++;
			   }
			   if(count == 2){
				$("#"+"1001").append(row);
				row = $('<div class="row"></div>');
				count = 0;
			   }
			}
			if(count != 0){
			    $("#"+"1001").append(row);
			}
		   
			tabs.push("1002");
			var row = $('<div class="row"></div>');
			var count = 0;
			for(var i = 0; i < linkList.length; i++){
			   if (linkList[i].sysCategoryId == "1002"){
				row.append(this.getElement(linkList[i]));
				count++;
			   }
			   if(count == 2){
				$("#"+"1002").append(row);
				row = $('<div class="row"></div>');
				count = 0;
			   }
			}
			if(count != 0){
			    $("#"+"1002").append(row);
			}
		   
		   $("#menus label").eq(0).button("toggle");
		   this.tabClick();
		   this.showNotice();
		   $('[data-toggle="popover"]').popover({
			trigger:"hover focus",
			delay: { "show": 500, "hide": 100 }
		   });
		},
		getElement: function(obj){
		    var element = $('<div class="col-md-6" style="padding-left:5px; padding-right:5px;" data-content="'+obj.sysMessage+ '" data-toggle="popover" data-placement="top">' +
	                                '<div class="panel panel-'+obj.sysTabColor+'" style="margin-bottom:10px;">' +
	                                    '<div class="panel-heading" style="cursor:pointer;">' +
	                                        '<div class="row">' +
	                                            '<div class="col-xs-3" style="padding-left:0px;">' +
	                                                '<img src="assets/image/'+obj.image+'" class="img-thumbnail" style="height:30px;width:40px;background-color:white;"/>' +
	                                            '</div>' +
	                                            '<div class="col-xs-9 text-right" style="padding-left:0px;padding-right:0px;">' +
	                                                '<div style="text-shadow: 0px 0px 1px #fff;font-size:14px;">'+obj.sysName+'</div>' +
	                                            '</div>' +
	                                        '</div>' +
	                                    '</div>' +
	                                '</div>'+
	                            '</div>'
	            );
		    element.on('click',function(){
			if(loginTime < 7){
			    alert("サービス時間外です。サービス時間は 7:00 ～ 24:00  となります。");
	                    return;	
			}else{
			   window.open("openApp?code="+obj.sysId);
			}
		    });
		    return element;
		},
		tabClick: function(){
		    var vl = $('input:radio[name="tabchange"]:checked').val();
		    for(var i = 0; i < tabs.length; i++){
			if(vl == tabs[i]){
			    $("#"+tabs[i]).show();
			    var tabHeight = $("#"+tabs[i]).height();
			    if (tabHeight > $("#notice").height()){
				$("#notice").css("max-height", tabHeight + 30);
			    }
			}else{
			    $("#"+tabs[i]).hide();
			}
		    }
		},
		showNotice: function(){
		    for(var i = 0; i < $("#notice_body tr").length; i++){
	            	var dt = $("#notice_body tr").eq(i).find("td").eq(2).html();
	            	var cont = $("#notice_body tr").eq(i).find("td").eq(0).html();
	            	var listTime = new Date(dt);
	            	var nowdt = new Date();
	            	var t = (nowdt - listTime)/(3600*1000);
	            	if(t <= 24){
	                	$("#notice_body tr").eq(i).find("td").eq(0).html(cont+'<span class="badge alert-danger">新</span>');
	            	}
	            }
		}

	}


})();
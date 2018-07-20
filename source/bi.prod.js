var ProdModule=(function (){
		var init=function (option) {
			var upData=[];
			var upFlgObj={"JIGYOBU":2,"DIV":2,"LINE":2,"BUMON":2};
			var upHeadFlg={"JIGYOBU":1,"DIV":1,"LINE":1,"BUMON":1};
			var divId="proRow";
			var upClassNm={
					"JIGYOBU":"col-md-1",
			  		"DIV":"col-md-1",
			  		"LINE":"col-md-1",
			  		"BUMON":"col-md-1"
			};
			var downFlgObj={"CATEGORY":0,"SUBCATEGORY":0,"SEGMENT":0,"SUBSEGMENT":0};
			var downHeadFlg={"CATEGORY":1,"SUBCATEGORY":1,"SEGMENT":1,"SUBSEGMENT":1};
			var downClassNm={
					"CATEGORY":"col-md-1",
			  		"SUBCATEGORY":"col-md-1",
			  		"SEGMENT":"col-md-1",
			  		"SUBSEGMENT":"col-md-1"
			};
			
			if (option) {
				if (option.upData) {
					upData=option.upData;
				}
				if ( option.flgObj) {
					var flg=option.flgObj.split("-");
					upFlgObj={
							"JIGYOBU":flg[0],
							"DIV":flg[1],
							"LINE":flg[2],
							"BUMON":flg[3]
					}
					if (flg[3]==0) {
						downFlgObj={
								"CATEGORY":0,
								"SUBCATEGORY":0,
								"SEGMENT":0,
								"SUBSEGMENT":0
						}
					}else {
						downFlgObj={
								"CATEGORY":flg[4],
								"SUBCATEGORY":flg[5],
								"SEGMENT":flg[6],
								"SUBSEGMENT":flg[7]
						}
					}
					
				}
				
				if (option.headFlg) {
					var flg=option.headFlg.split("-");
			
					upHeadFlg.JIGYOBU=flg[0];
					upHeadFlg.DIV=flg[1];
					upHeadFlg.LINE=flg[2];
					upHeadFlg.BUMON=flg[3];
					 downHeadFlg.CATEGORY=flg[4],
					 downHeadFlg.SUBCATEGORY=flg[5],
					 downHeadFlg.SEGMENT=flg[6],
					 downHeadFlg.SUBSEGMENT=flg[7]
					 
					
				}
				
				if (option.divId) {
					divID=option.divId;
				}
				
				
				if (cnm=option.classNm) {
					upClassNm.JIGYOBU="";
					upClassNm.DIV="";
					upClassNm.LINE="";
					upClassNm.BUMON="";
					for (var i=0;i<cnm.JIGYOBU.length;i++) {
						upClassNm.JIGYOBU += " "+cnm.JIGYOBU[i];
					}
					for (var i=0;i<cnm.DIV.length;i++) {
						upClassNm.DIV += " "+cnm.DIV[i];	
					}
					for (var i=0;i<cnm.LINE.length;i++) {
						upClassNm.LINE += " "+cnm.LINE[i];
					}
					for (var i=0;i<cnm.BUMON.length;i++) {
						upClassNm.BUMON += " "+cnm.BUMON[i];
					}
					
					downClassNm.CATEGORY="";
					downClassNm.SUBCATEGORY="";
					downClassNm.SEGMENT="";
					downClassNm.SUBSEGMENT="";
					
					for (var i=0;i<cnm.CATEGORY.length;i++) {
						downClassNm.CATEGORY += " "+cnm.CATEGORY[i];
					}
					for (var i=0;i<cnm.SUBCATEGORY.length;i++) {
						downClassNm.SUBCATEGORY += " "+cnm.SUBCATEGORY[i];	
					}
					for (var i=0;i<cnm.SEGMENT.length;i++) {
						downClassNm.SEGMENT += " "+cnm.SEGMENT[i];
					}
					for (var i=0;i<cnm.SUBSEGMENT.length;i++) {
						downClassNm.SUBSEGMENT += " "+cnm.SUBSEGMENT[i];
					}
				
				}
			}	
			loadProduct(upData,upFlgObj,upHeadFlg,divId,upClassNm,downFlgObj,downHeadFlg,divId,downClassNm);
		}
		
		
		function loadProduct(upData,upFlgObj,upHeadFlg,divId,upClassNm,downFlgObj,downHeadFlg,divId,downClassNm) {
			/*
			 * _result --部门以上列表一个div -id='proParam'
			 * _resultDown --部门以下列表一个div -id='proParamDown'
			 * 
			 * */
			var _result=$("<div class='tab-content' id='proParam'>");
			var _resultDown=$("<div class='tab-content' id='proParamDown'>");
			var _jig,_div,_line,_bumon,_cate,_subcate,_seg,_subseg;
			/*
			 * 部门以上列表节点添加
			 * 
			 * */
			if (upFlgObj.JIGYOBU!=0) {
				var jig="";
				jig += '<div class="JIGYOBU_col '+upClassNm.JIGYOBU+'" >'+
						'	<div class="form-group">'+   
						'		<fieldset>'+
		                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">事業部</legend>' ;
				if (upFlgObj.JIGYOBU==1){
					jig +=  '			<select  id="JIGYOBU" class="form-control input-sm" style="display:none;"></select>';
				}else {
					jig +=  '			<select  id="JIGYOBU" class="form-control input-sm" multiple style="display:none;"></select>';
				}
				jig +=  '		</fieldset>'+
		                '	</div>'+
		        		'</div>'
		        _jig = $(jig);
				_result.append(_jig);
			}
			if (upFlgObj.DIV!=0) {
				var div = "";
				div += '<div class="DIV_col '+upClassNm.DIV+'" >'+
						'	<div class="form-group">'+   
						'		<fieldset>'+
		                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">DIV</legend>' ;
				if (upFlgObj.DIV==1) {
					div += '			<select  id="DIV" class="form-control input-sm" style="display:none;"></select>';
				}else {
					div +=  '			<select  id="DIV" class="form-control input-sm" multiple style="display:none;"></select>';
				}
		               
				div +=        '		</fieldset>'+
		                '	</div>'+
		        		'</div>';
				_div = $(div);
				_result.append(_div);
				
			}
			if (upFlgObj.LINE!=0) {
				var line="";
				line += '<div class="LINE_col '+upClassNm.LINE+'" >'+
						'	<div class="form-group">'+   
						'		<fieldset>'+
		                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">ライン</legend>' ;
				if (upFlgObj.LINE==1) {
					line += '			<select  id="LINE" class="form-control input-sm" style="display:none;"></select>';
				}else {
					line += '			<select  id="LINE" class="form-control input-sm" multiple style="display:none;"></select>';
				}
		                
				line += '		</fieldset>'+
		                '	</div>'+
		        		'</div>';
				_line = $(line);
				_result.append(_line);
			}
			if (upFlgObj.BUMON!=0) {
				var bumon ="";
				bumon += '<div class="BUMON_col '+upClassNm.BUMON+'" >'+
						'	<div class="form-group">'+   
						'		<fieldset>'+
		                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">部門</legend>' ;
				if (upFlgObj.BUMON==1) {
					bumon +='			<select  id="BUMON" class="form-control input-sm" style="display:none;"></select>';
				}else{
					bumon += '			<select  id="BUMON" class="form-control input-sm" multiple style="display:none;"></select>';
				}
		                
				bumon += '		</fieldset>'+
		                '	</div>'+
		        		'</div>' ;
				_bumon = $(bumon);
				_result.append(_bumon);
				
			}
			$("#"+ divId).append(_result);
			/*
			 * 部门以下列表节点添加
			 * 
			 * */	
			if (downFlgObj.CATEGORY!=0) {
				var cate="";
				cate += '<div class="CATEGORY_col '+downClassNm.CATEGORY+'" >'+
						'	<div class="form-group">'+   
						'		<fieldset>'+
		                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">カテゴリ</legend>' ;
				if (downFlgObj.CATEGORY==1){
					cate +=  '			<select  id="CATEGORY" class="form-control input-sm" style="display:none;" disabled></select>';
				}else {
					cate +=  '			<select  id="CATEGORY" class="form-control input-sm" multiple style="display:none;" disabled></select>';
				}
				cate +=  '		</fieldset>'+
		                '	</div>'+
		        		'</div>'
		        _cate = $(cate);
				_resultDown.append(_cate);
				
			}
			if (downFlgObj.SUBCATEGORY!=0) {
				var subcate = "";
				subcate += '<div class="SUBCATEGORY_col '+downClassNm.SUBCATEGORY+'" >'+
						'	<div class="form-group">'+   
						'		<fieldset>'+
		                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">サブカテゴリ</legend>' ;
				if (downFlgObj.SUBCATEGORY==1) {
					subcate += '			<select  id="SUBCATEGORY" class="form-control input-sm" style="display:none;" disabled></select>';
				}else {
					subcate +=  '			<select  id="SUBCATEGORY" class="form-control input-sm" multiple style="display:none;" disabled></select>';
				}
		               
				subcate +=        '		</fieldset>'+
		                '	</div>'+
		        		'</div>';
				_subcate = $(subcate);
				_resultDown.append(_subcate);
				
			}
			if (downFlgObj.SEGMENT!=0) {
				var seg="";
				seg += '<div class="SEGMENT_col '+downClassNm.SEGMENT+'" >'+
						'	<div class="form-group">'+   
						'		<fieldset>'+
		                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">セグメント</legend>' ;
				if (downFlgObj.SEGMENT==1) {
					seg += '			<select  id="SEGMENT" class="form-control input-sm" style="display:none;" disabled></select>';
				}else {
					seg += '			<select  id="SEGMENT" class="form-control input-sm" multiple style="display:none;" disabled></select>';
				}
		                
				seg += '		</fieldset>'+
		                '	</div>'+
		        		'</div>';
				_seg = $(seg);
				_resultDown.append(_seg);
			}
			if (downFlgObj.SUBSEGMENT!=0) {
				var subseg ="";
				subseg += '<div class="SUBSEGMENT_col '+downClassNm.SUBSEGMENT+'" >'+
						'	<div class="form-group">'+   
						'		<fieldset>'+
		                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">サブセグメント</legend>' ;
				if (downFlgObj.SUBSEGMENT==1) {
					subseg +='			<select  id="SUBSEGMENT" class="form-control input-sm" style="display:none;" disabled></select>';
				}else{
					subseg += '			<select  id="SUBSEGMENT" class="form-control input-sm" multiple style="display:none;" disabled></select>';
				}
		                
				subseg += '		</fieldset>'+
		                '	</div>'+
		        		'</div>' ;
				_subseg = $(subseg);
				_resultDown.append(_subseg);
			}
			
			$("#"+divId).append(_resultDown);
			
			//部门以上各列表绑定multiselect所需数据
			var data=upData;
			if (upHeadFlg.JIGYOBU==1) {
				var headJigyobu =[{"F0":"0000","F1":"全事業部","F2":"0000","F3":"全DIV","F4":"0000","F5":"全ライン","F6":"0000","F7":"全部門"}]
			}else {
				var headJigyobu =[];
			}
			if (upHeadFlg.DIV==1) {
				var headDiv =[{"F0":"0000","F1":"全事業部","F2":"0000","F3":"全DIV","F4":"0000","F5":"全ライン","F6":"0000","F7":"全部門"}]
			}else {
				var headDiv =[];
			}
			if (upHeadFlg.LINE==1) {
				var headLine =[{"F0":"0000","F1":"全事業部","F2":"0000","F3":"全DIV","F4":"0000","F5":"全ライン","F6":"0000","F7":"全部門"}]
			}else {
				var headLine =[];
			}
			if (upHeadFlg.BUMON==1) {
				var headBumon =[{"F0":"0000","F1":"全事業部","F2":"0000","F3":"全DIV","F4":"0000","F5":"全ライン","F6":"0000","F7":"全部門"}]
			}else {
				var headBumon =[];
			}
			
			//部门以上各列表绑定multiselect ---start

			if (upFlgObj.JIGYOBU!=0) {
				$('#JIGYOBU').multiselect({
				     disableIfEmpty: true,
				     buttonClass:"btn btn-default btn-block",
				     buttonContainer: '<div class="dropdown" />',
				     enableFiltering: true,//过滤搜索
				     enableCaseInsensitiveFiltering: true,//不区分大小写过滤
				     filterBehavior: 'both',//可使用value过滤
				     filterPlaceholder: '番号、名前',
				     includeSelectAllOption: true,//全选框
				     selectAllText: '全事業部',//全选checkbox文本
				     allSelectedText: '全事業部',//全选后显示文本
				     nonSelectedText: '全事業部',//全不选后显示文本
				     nSelectedText: ' 事業部',//超过选中项显示
//				     selectAllValue:'0000',
				     numberDisplayed:2,//按钮最多显示的选中项
				     maxHeight: 400 ,//下拉框显示高度
				     optionLabel: function(element) {  //option显示函数回调
				           return   $(element).attr("label"); 
				     },
				     onChange:function(option,checked){
				    	 var Selected = this.$select.val();  
				          if (Selected==null||Selected=="0000"||(Selected instanceof Array&&Selected.length==this.$select[0].options.length)){
				        	 if(upFlgObj.DIV!=0){
				        		 upFlgObj.DIV==1?bindData(getAllData(headDiv,filterHead(data)),"F2","F3","DIV","0"):bindData(filterHead(data),"F2","F3","DIV","all");

				        	 }else if(upFlgObj.LINE!=0){

				        		 upFlgObj.LINE==1?bindData(getAllData(headLine,filterHead(data)),"F4","F5","LINE","0"):bindData(filterHead(data),"F2","F3","LINE","all");
				        	 }else if(upFlgObj.BUMON!=0){

				        		 upFlgObj.BUMON==1?bindData(getAllData(headBumon,filterHead(data)),"F6","F7","BUMON","0"):bindData(filterHead(data),"F2","F3","BUMON","all");
				        	 }
				         }else {
			        	 		if (upFlgObj.DIV == 1) {
					        		 bindData(getAllData(headDiv,filterData(filterHead(data),"F0",Selected)),"F2","F3","DIV","0");
					        	 }else if(upFlgObj.DIV == 2){
					        		 bindData(filterData(filterHead(data),"F0",Selected),"F2","F3","DIV","all");
					        	 }else if (upFlgObj.LINE == 1) {
					        		 bindData(getAllData(headLine,filterData(filterHead(data),"F0",Selected)),"F4","F5","LINE","0");
					        	 }else if(upFlgObj.LINE == 2){
					        		 bindData(filterData(filterHead(data),"F0",Selected),"F2","F3","LINE","all");
					        	 }else if (upFlgObj.BUMON == 1) {
					        		 bindData(getAllData(headBumon,filterData(filterHead(data),"F0",Selected)),"F6","F7","BUMON","0");
					        	 }else if(upFlgObj.BUMON == 2){
					        		 bindData(filterData(filterHead(data),"F0",Selected),"F2","F3","BUMON","all");
					        	 }
//			        	 	}
			         }
				       }
				  });
				
			}
			if (upFlgObj.DIV!=0) { 
			  $('#DIV').multiselect({
			     disableIfEmpty: true,
			     buttonClass:"btn btn-default btn-block",
			     buttonContainer: '<div class="dropdown" />',
			       enableFiltering: true,//过滤搜索
			       enableCaseInsensitiveFiltering: true,//不区分大小写过滤
			       filterBehavior: 'both',//可使用value过滤
			       filterPlaceholder: '番号、名前',
			       includeSelectAllOption: true,//全选框
			       selectAllText: '全DIV',//全选checkbox文本
			       allSelectedText: '全DIV',//全选后显示文本
			       nonSelectedText: '全DIV',//全不选后显示文本
			       nSelectedText: ' DIV',//超过选中项显示
			       numberDisplayed:2,//按钮最多显示的选中项
			       maxHeight: 400 ,//下拉框显示高度
			       optionLabel: function(element) {  //option显示函数回调
			           return   $(element).attr("label"); 
			       },
			       onChange:function(option,checked){
				        
				         var Selected = this.$select.val();  
				        
				         if (Selected==null||Selected=="0000"||(Selected instanceof Array&&Selected.length==this.$select[0].options.length)){
				        	 if (upFlgObj.LINE == 1) {
			    		        	//JIGYOBU存在 -- １.ＪＩＧＹＯＢＵ全选、全不选　２.　ＪＩＧＹＯＢＵ选中某１或几个
				        		 	if (jigyobu=$("#JIGYOBU").val()) { 
				        		 		if (upFlgObj.JIGYOBU==1) {	// JIGYOBU单选 
				        		 			if (jigyobu=="0000") {	// JIGYOBU单选--全选
					     	 					bindData(getAllData(headLine,filterHead(data)),"F4","F5","LINE","0");
					     	 				}else {					// JIGYOBU单选--不全选
					     	 					bindData(getAllData(headLine,filterData(filterHead(data),"F0",jigyobu)),"F4","F5","LINE","0");
					     	 				}
				        		 		}else {		//JIGYOBU多选 
				        		 			if (jigyobu.length==$("#JIGYOBU")[0].options.length) { //JIGYOBU多选  --全选
				        		 				bindData(getAllData(headLine,filterHead(data)),"F4","F5","LINE","0");
				        		 			}else { //JIGYOBU多选  --不全选
				        		 				bindData(getAllData(headLine,filterData(filterHead(data),"F0",jigyobu)),"F4","F5","LINE","0");
				        		 			}
				        		 		}
				     	 				
				     	 			}else {	//JIFGYOBU不存在 或者 JIGYOBU值为null
				     	 				bindData(getAllData(headLine,filterHead(data)),"F4","F5","LINE","0");
				     	 			} 
			        			
				        	 }else if (upFlgObj.LINE == 2) {
				        		 if (jigyobu=$("#JIGYOBU").val()) { 
				        		 		if (upFlgObj.JIGYOBU==1) {	// JIGYOBU单选 
				        		 			if (jigyobu=="0000") {	// JIGYOBU单选--全选
					     	 					bindData(filterHead(data),"F4","F5","LINE","all");
					     	 				}else {					// JIGYOBU单选--不全选
					     	 					bindData(filterData(filterHead(data),"F0",jigyobu),"F4","F5","LINE","all");
					     	 				}
				        		 		}else {		//JIGYOBU多选 
				        		 			if (jigyobu.length==$("#JIGYOBU")[0].options.length) { //JIGYOBU多选  --全选
				        		 				
				        		 				bindData(filterHead(data),"F4","F5","LINE","all");
				        		 				
				        		 			}else { //JIGYOBU多选  --不全选
				        		 				bindData(filterData(filterHead(data),"F0",jigyobu),"F4","F5","LINE","all");
				        		 			}
				        		 		}
				     	 				
				     	 			}else {	//JIFGYOBU不存在 或者 JIGYOBU值为null
				     	 				bindData(filterHead(data),"F4","F5","LINE","all");
				     	 			}  
				        	 }else { //没有LINE列表 --BUMON列表判断
					        	 if (upFlgObj.BUMON == 1) {
					        		 if (jigyobu=$("#JIGYOBU").val()) { 
					        		 		if (upFlgObj.JIGYOBU==1) {	// JIGYOBU单选 
					        		 			if (jigyobu=="0000") {	// JIGYOBU单选--全选
						     	 					bindData(getAllData(headLine,filterHead(data)),"F6","F7","BUMON","0");
						     	 				}else {					// JIGYOBU单选--不全选
						     	 					bindData(getAllData(headLine,filterData(filterHead(data),"F0",jigyobu)),"F6","F7","BUMON","0");
						     	 				}
					        		 		}else {		//JIGYOBU多选 
					        		 			if (jigyobu.length==$("#JIGYOBU")[0].options.length) { //JIGYOBU多选  --全选
					        		 				bindData(getAllData(headLine,filterHead(data)),"F6","F7","BUMON","0");
					        		 			}else { //JIGYOBU多选  --不全选
					        		 				bindData(getAllData(headLine,filterData(filterHead(data),"F0",jigyobu)),"F6","F7","BUMON","0");
					        		 			}
					        		 		}
					     	 				
					     	 			}else {	//JIFGYOBU不存在 或者 JIGYOBU值为null
					     	 				bindData(getAllData(headLine,filterHead(data)),"F6","F7","BUMON","0");
					     	 			} 
					        	 }else if (upFlgObj.BUMON == 2) {

					        		 if (jigyobu=$("#JIGYOBU").val()) { 
					        		 		if (upFlgObj.JIGYOBU==1) {	// JIGYOBU单选 
					        		 			if (jigyobu=="0000") {	// JIGYOBU单选--全选
						     	 					bindData(filterHead(data),"F6","F7","BUMON","all");
						     	 				}else {					// JIGYOBU单选--不全选
						     	 					bindData(filterData(filterHead(data),"F0",jigyobu),"F6","F7","BUMON","all");
						     	 				}
					        		 		}else {		//JIGYOBU多选 
					        		 			if (jigyobu.length==$("#JIGYOBU")[0].options.length) { //JIGYOBU多选  --全选
					        		 				
					        		 				bindData(filterHead(data),"F6","F7","BUMON","all");
					        		 				
					        		 			}else { //JIGYOBU多选  --不全选
					        		 				bindData(filterData(filterHead(data),"F0",jigyobu),"F6","F7","BUMON","all");
					        		 			}
					        		 		}
					     	 				
					     	 			}else {	//JIFGYOBU不存在 或者 JIGYOBU值为null
					     	 				bindData(filterHead(data),"F6","F7","BUMON","all");
					     	 			}  
					        	 }
				        	 }
				         }	else {
				        	 if (upFlgObj.LINE == 1) {
				        		 bindData(getAllData(headLine,filterData(filterHead(data),"F2",Selected)),"F4","F5","LINE","0");
				        	 }else if (upFlgObj.LINE == 2) {
				        		 bindData(filterData(filterHead(data),"F2",Selected),"F4","F5","LINE","all");
				        	 }else {
					        	 if (upFlgObj.BUMON == 1) {
					        		 bindData(getAllData(headBumon,filterData(filterHead(data),"F2",Selected)),"F6","F7","BUMON","0");
					        	 }else if (upFlgObj.BUMON == 2) {
					        		 bindData(filterData(filterHead(data),"F2",Selected),"F4","F5","BUMON","all");
					        	 }

				        	 }
				         }	 
			        
			       }
			  });
			 
			  }
			if (upFlgObj.LINE!=0) {
				$('#LINE').multiselect({
				     disableIfEmpty: true,
				     buttonClass:"btn btn-default btn-block",
				     buttonContainer: '<div class="dropdown" />',
				       enableFiltering: true,//过滤搜索
				       enableCaseInsensitiveFiltering: true,//不区分大小写过滤
				       filterBehavior: 'both',//可使用value过滤
				       filterPlaceholder: '番号、名前',
				       includeSelectAllOption: true,//全选框
				       selectAllText: '全ライン',//全选checkbox文本
				       allSelectedText: '全ライン',//全选后显示文本
				       nonSelectedText: '全ライン',//全不选后显示文本
				       nSelectedText: ' ライン',//超过选中项显示
				       numberDisplayed:2,//按钮最多显示的选中项
				       maxHeight: 400 ,//下拉框显示高度
				       optionLabel: function(element) {  //option显示函数回调
				           return   $(element).attr("label"); 
				       },
				       onChange:function(option,checked){
				    	   var Selected = this.$select.val();
				    	  
					         if(Selected==null||Selected=="0000"||(Selected instanceof Array&&Selected.length==this.$select[0].options.length)){
					        	 if(upFlgObj.BUMON!=0) {
					        		
						        	 if ( div=$("#DIV").val()) {
						        			if (upFlgObj.DIV==1&&div=="0000"||upFlgObj.DIV==2&&div=="0000"&&div.length==$("#DIV")[0].options.length) {
					        	 					if (jigyobu=$("#JIGYOBU").val()) {
					        	 						if (upFlgObj.JIGYOBU==1 &&jigyobu=="0000"||upFlgObj.JIGYOBU==2&&jigyobu.length==$("#JIGYOBU")[0].options.length){
				   			        	 					upFlgObj.BUMON==1?bindData(getAllData(headBumon,filterHead(data)),"F6","F7","BUMON","0"):bindData(filterHead(data),"F6","F7","BUMON","all");
					        	 						}else {
					   			        	 					upFlgObj.BUMON==1?bindData(getAllData(headBumon,filterData(filterHead(data),"F0",jigyobu)),"F6","F7","BUMON","0"):bindData(filterData(filterHead(data),"F0",jigyobu),"F6","F7","BUMON","all");
			
					        	 						}
							        	 				
							        	 			}else {
							        	 				upFlgObj.BUMON==1?bindData(getAllData(headBumon,filterHead(data)),"F6","F7","BUMON","0"):bindData(filterHead(data),"F6","F7","BUMON","all");
							        	 			}
					        	 			}else {
					        	 					upFlgObj.BUMON==1?bindData(getAllData(headBumon,filterData(filterHead(data),"F2",div)),"F6","F7","BUMON","0"):bindData(filterData(filterHead(data),"F2",div),"F6","F7","BUMON","all");
					        	 			}
				        	 				
				        	 			}else if (jigyobu=$("#JIGYOBU").val()) {
				        	 						if (upFlgObj.JIGYOBU==1 &&jigyobu=="0000"||upFlgObj.JIGYOBU==2&&jigyobu.length==$("#JIGYOBU")[0].options.length){
				   			        	 					upFlgObj.BUMON==1?bindData(getAllData(headBumon,filterHead(data)),"F6","F7","BUMON","0"):bindData(filterHead(data),"F6","F7","BUMON","all");
				        	 						}else {
				   			        	 					upFlgObj.BUMON==1?bindData(getAllData(headBumon,filterData(filterHead(data),"F0",jigyobu)),"F6","F7","BUMON","0"):bindData(filterData(filterHead(data),"F0",jigyobu),"F6","F7","BUMON","all");

				        	 						}
				        	 			}else {
				        	 				upFlgObj.BUMON==1?bindData(getAllData(headBumon,filterHead(data)),"F6","F7","BUMON","0"):bindData(filterHead(data),"F6","F7","BUMON","all");
				        	 			}
					        	 }
					         }else {
					        	 if (upFlgObj.BUMON == 1) { 
					        		 bindData(getAllData(headBumon,filterData(filterHead(data),"F4",Selected)),"F6","F7","BUMON","0");
					        	 }else if (upFlgObj.BUMON == 2) {
					        		 bindData(filterData(filterHead(data),"F4",Selected),"F6","F7","BUMON","all");
					        	 }
					         }
					         
				       }
				 });
				
			}
			if(upFlgObj.BUMON==2) {
				 $('#BUMON').multiselect({
				     disableIfEmpty: true,
				     buttonClass:"btn btn-default btn-block",
				     buttonContainer: '<div class="dropdown" />',
				       enableFiltering: true,//过滤搜索
				       enableCaseInsensitiveFiltering: true,//不区分大小写过滤
				       filterBehavior: 'both',//可使用value过滤
				       filterPlaceholder: '番号、名前',
				       includeSelectAllOption: true,//全选框
				       selectAllText: '全部門',//全选checkbox文本
				       allSelectedText: '全部門',//全选后显示文本
				       nonSelectedText: '全部門',//全不选后显示文本
				       nSelectedText: ' 部門',//超过选中项显示
				       numberDisplayed:2,//按钮最多显示的选中项
				       maxHeight: 400 ,//下拉框显示高度
				       optionLabel: function(element) {  //option显示函数回调
				           return $(element).attr("label"); 
				       },
				       onDropdownHide:function(event) {
							
							if ($('#CATEGORY').length>0) {
								$('#CATEGORY').multiselect('disable')
								loadCategory([],downFlgObj,downHeadFlg,0);
							}
							if ($('#SUBCATEGORY').length>0) {
								$('#SUBCATEGORY').multiselect('disable')
								loadSubcategory([],downFlgObj,downHeadFlg,0);
							}

							if ($('#SEGMENT').length>0) {
								$('#SEGMENT').multiselect('disable');	
								loadSegment([],downFlgObj,downHeadFlg,0);
							}
							if ($('#SUBSEGMENT').length>0) {
								$('#SUBSEGMENT').multiselect('disable')
								loadSubsegment([],downFlgObj,downHeadFlg,0);
							}
				    	   var Selected = $("#BUMON").val();
				    		 if (Selected==null||Selected=="0000"||(Selected instanceof Array&&Selected.length==this.$select[0].options.length)){
					        	 loadCategory([],downFlgObj,downHeadFlg,0);
					         }else {
				    			   if (downFlgObj.CATEGORY!=0) {
				    				   var nowTime=new Date();
				    				   var bumoncd= Selected instanceof Array?Selected.join("_"):Selected;
				    				   
				    				   $.ajax({
					    					url: "getBumonDown.do",
					    					data: "shellParam=CATEGORY "+bumoncd+"&now="+nowTime,
					    					dataType: "json",
					    					success: function(src) {
					    						loadCategory(src.Rows,downFlgObj,downHeadFlg,1);
					    					}
					    				}); 
				    			   }
				    			   
					         }
				    	  }});
			}else if(upFlgObj.BUMON==1){
				$('#BUMON').multiselect({
				     disableIfEmpty: true,
				     buttonClass:"btn btn-default btn-block",
				     buttonContainer: '<div class="dropdown" />',
				       enableFiltering: true,//过滤搜索
				       enableCaseInsensitiveFiltering: true,//不区分大小写过滤
				       filterBehavior: 'both',//可使用value过滤
				       filterPlaceholder: '番号、名前',
				       includeSelectAllOption: true,//全选框
				       selectAllText: '全部門',//全选checkbox文本
				       allSelectedText: '全部門',//全选后显示文本
				       nonSelectedText: '全部門',//全不选后显示文本
				       nSelectedText: ' 部門',//超过选中项显示
				       numberDisplayed:2,//按钮最多显示的选中项
				       maxHeight: 400 ,//下拉框显示高度
				       optionLabel: function(element) {  //option显示函数回调
				           return $(element).attr("label"); 
				       },
				    	  onChange:function(option,checkd) {
//				    		  if ($(".BUMON_col").find("div[class='dropdown open']").length>0) {//在点击选项，不做任何操作
//				    		  }
				    		  if($(".BUMON_col").find("div[class='dropdown']").length>0) {//

									
									if ($('#CATEGORY').length>0) {
										$('#CATEGORY').multiselect('disable')
										loadCategory([],downFlgObj,downHeadFlg,0);
									}
									if ($('#SUBCATEGORY').length>0) {
										$('#SUBCATEGORY').multiselect('disable')
										loadSubcategory([],downFlgObj,downHeadFlg,0);
									}

									if ($('#SEGMENT').length>0) {
										$('#SEGMENT').multiselect('disable');	
										loadSegment([],downFlgObj,downHeadFlg,0);
									}
									if ($('#SUBSEGMENT').length>0) {
										$('#SUBSEGMENT').multiselect('disable')
										loadSubsegment([],downFlgObj,downHeadFlg,0);
									}
						    	   var Selected = $("#BUMON").val();
						    		 if (Selected==null||Selected=="0000"||(Selected instanceof Array&&Selected.length==this.$select[0].options.length)){
							        	 loadCategory([],downFlgObj,downHeadFlg,0);
							         }else {
						    			   if (downFlgObj.CATEGORY!=0) {
						    				   var nowTime=new Date();
						    				   var bumoncd= Selected instanceof Array?Selected.join("_"):Selected;
						    				   
						    				   $.ajax({
							    					url: "getBumonDown.do",
							    					data: "shellParam=CATEGORY "+bumoncd+"&now="+nowTime,
							    					dataType: "json",
							    					success: function(src) {
							    						loadCategory(src.Rows,downFlgObj,downHeadFlg,1);
							    					}
							    				}); 
						    			   }
						    			   
							         }
						    	    
				    		  }
				    	  }
				 });
			}
		//部门以上各列表绑定multiselect ---end
			
			 
		//部门以下各列表绑定multiselect ---start

				if (downFlgObj.CATEGORY ==2 ){
					$('#CATEGORY').multiselect({
					    disableIfEmpty: true,
					    buttonClass:"btn btn-default btn-block",
					    buttonContainer: '<div class="dropdown" />',
					      enableFiltering: true,//过滤搜索
					      enableCaseInsensitiveFiltering: true,//不区分大小写过滤
					      filterBehavior: 'both',//可使用value过滤
					      filterPlaceholder: '番号、名前',
					      includeSelectAllOption: true,//全选框
					      selectAllText: '全カテゴリ',//全选checkbox文本
					      allSelectedText: '全カテゴリ',//全选后显示文本
					      nonSelectedText: '全カテゴリ',//全不选后显示文本
					      nSelectedText: ' カテゴリ',//超过选中项显示
					      numberDisplayed:2,//按钮最多显示的选中项
					      maxHeight: 400 ,//下拉框显示高度
					      optionLabel: function(element) {  //option显示函数回调
					          return   $(element).attr("label"); 
					      },
					      onDropdownHide:function(event){
					    	  	var nowT=new Date();
							    var Selected =$('#CATEGORY').val();
							    if ($('#SUBCATEGORY').length>0) {
									$('#SUBCATEGORY').multiselect('disable')
									loadSubcategory([],downFlgObj,downHeadFlg,0);
								}
							    if ($('#SEGMENT').length>0) {
									$('#SEGMENT').multiselect('disable');	
									loadSegment([],downFlgObj,downHeadFlg,0);
								}
								if ($('#SUBSEGMENT').length>0) {
									$('#SUBSEGMENT').multiselect('disable')
									loadSubsegment([],downFlgObj,downHeadFlg,0);
								}
								if ($('#SUBCATEGORY').length>0) {
//									$('#SUBCATEGORY').multiselect('disable')
//									loadSubcategory([],downFlgObj,downHeadFlg,0);
									if(Selected==null||Selected=="0000"||(Selected instanceof Array && Selected.length==$("#CATEGORY")[0].options.length&&Selected.length!=1)){
								    	  loadSubcategory([],downFlgObj,downHeadFlg,0);
								      }else{
									    	var nowTime=new Date();
									        var bumon = $("#BUMON").val();
									        var category = $("#CATEGORY").val();
									        var bumoncd= bumon instanceof Array?bumon.join("_"):bumon;
									        var categorycd= category instanceof Array?category.join("_"):category;
									        //....
									        $.ajax({
									        	url: "getBumonDown.do",
									    		data: "shellParam=SUBCATEGORY "+bumoncd+" "+categorycd+"&now="+nowTime,
									    		dataType: "json",
									    		success: function(src) {
									    			loadSubcategory(src.Rows,downFlgObj,downHeadFlg,1);
									    		},
									    		error:function(e){
									    			alert("");
									    		}
									        });
								        
								      }
								}
							}
					      });
				}else if(downFlgObj.CATEGORY ==1){ 
					$('#CATEGORY').multiselect({
						disableIfEmpty: true,
					    buttonClass:"btn btn-default btn-block",
					    buttonContainer: '<div class="dropdown" />',
				      enableFiltering: true,//过滤搜索
				      enableCaseInsensitiveFiltering: true,//不区分大小写过滤
				      filterBehavior: 'both',//可使用value过滤
				      filterPlaceholder: '番号、名前',
				      includeSelectAllOption: true,//全选框
				      selectAllText: '全カテゴリ',//全选checkbox文本
				      allSelectedText: '全カテゴリ',//全选后显示文本
				      nonSelectedText: '全カテゴリ',//全不选后显示文本
				      nSelectedText: ' カテゴリ',//超过选中项显示
				      numberDisplayed:2,//按钮最多显示的选中项
				      maxHeight: 400 ,//下拉框显示高度
				      optionLabel: function(element) {  //option显示函数回调
				          return   $(element).attr("label"); 
				      },
				      onChange:function(option,checkd) {
								if($(".CATEGORY_col").find("div[class='dropdown']").length>0) {//
									if ($('#SUBCATEGORY').length>0) {
										$('#SUBCATEGORY').multiselect('disable')
									}
									if ($('#SEGMENT').length>0) {
										$('#SEGMENT').multiselect('disable');	
										loadSegment([],downFlgObj,downHeadFlg,0);
									}
									if ($('#SUBSEGMENT').length>0) {
										$('#SUBSEGMENT').multiselect('disable')
										loadSubsegment([],downFlgObj,downHeadFlg,0);
									}
						    	  	var nowT=new Date();
								    var Selected =$('#CATEGORY').val();  
									if ($('#SUBCATEGORY').length>0) {
//										$('#SUBCATEGORY').multiselect('disable')
//										loadSubcategory([],downFlgObj,downHeadFlg,0);
										if(Selected==null||Selected=="0000"||(Selected instanceof Array && Selected.length==$("#CATEGORY")[0].options.length&&Selected.length!=1)){
									    	  loadSubcategory([],downFlgObj,downHeadFlg,0);
									      }else{
										    	var nowTime=new Date();
										        var bumon = $("#BUMON").val();
										        var category = $("#CATEGORY").val();
										        var bumoncd= bumon instanceof Array?bumon.join("_"):bumon;
										        var categorycd= category instanceof Array?category.join("_"):category;
										        //....
										        $.ajax({
										        	url: "getBumonDown.do",
										    		data: "shellParam=SUBCATEGORY "+bumoncd+" "+categorycd+"&now="+nowTime,
										    		dataType: "json",
										    		success: function(src) {
										    			loadSubcategory(src.Rows,downFlgObj,downHeadFlg,1);
										    		},
										    		error:function(e){
										    			alert("");
										    		}
										        });
									      }
									}
								}
							}
					   });
//					
					 
				}
				
				if (downFlgObj.SUBCATEGORY ==2 ){
					$('#SUBCATEGORY').multiselect({
					    disableIfEmpty: true,
					    buttonClass:"btn btn-default btn-block",
					    buttonContainer: '<div class="dropdown" />',
					      enableFiltering: true,//过滤搜索
					      enableCaseInsensitiveFiltering: true,//不区分大小写过滤
					      filterBehavior: 'both',//可使用value过滤
					      filterPlaceholder: '番号、名前',
					      includeSelectAllOption: true,//全选框
					      selectAllText: '全サブカテゴリ',//全选checkbox文本
					      allSelectedText: '全サブカテゴリ',//全选后显示文本
					      nonSelectedText: '全サブカテゴリ',//全不选后显示文本
					      nSelectedText: ' サブカテゴリ',//超过选中项显示
					      numberDisplayed:2,//按钮最多显示的选中项
					      maxHeight: 400 ,//下拉框显示高度
					      optionLabel: function(element) {  //option显示函数回调
					          return   $(element).attr("label"); 
					      },
					      onDropdownHide:function(event){
					    	  if ($('#SEGMENT').length>0) {
									$('#SEGMENT').multiselect('disable');	
									loadSegment([],downFlgObj,downHeadFlg,0);
					    	  }
					    	  if ($('#SUBSEGMENT').length>0) {
									$('#SUBSEGMENT').multiselect('disable')
									loadSubsegment([],downFlgObj,downHeadFlg,0);
								}
					    	  var nowT=new Date();
							    var Selected =$('#SUBCATEGORY').val();  
								if ($('#SEGMENT').length>0) {
									
									if(Selected==null||Selected==0||(Selected instanceof Array && Selected.length==$("#SUBCATEGORY")[0].options.length&&Selected.length!=1)){
								    	  loadSegment([],downFlgObj,downHeadFlg,0);
								      }else{
								    	  var nowTime=new Date();
								    	  var bumon = $("#BUMON").val();
									      var category = $("#CATEGORY").val();
									      var subcategory = $("#SUBCATEGORY").val();
									      var bumoncd= bumon instanceof Array?bumon.join("_"):bumon;
									      var categorycd= category instanceof Array?category.join("_"):category;
									      var subcategorycd = subcategory instanceof Array?subcategory.join("_"):subcategory;
									      
								        //....
								        $.ajax({
								        	url: "getBumonDown.do",
								    		data: "shellParam=SEGMENT "+bumoncd+" "+categorycd+" "+subcategorycd+"&now="+nowTime,
								    		dataType: "json",
								    		success: function(src) {
								    			loadSegment(src.Rows,downFlgObj,downHeadFlg,1);
								    		},
								    		error:function(e){
								    			alert("");
								    		}
								        });
								      }
								}
						  }
					      });
				}else if(downFlgObj.SUBCATEGORY ==1){
					$('#SUBCATEGORY').multiselect({
					    disableIfEmpty: true,
					    buttonClass:"btn btn-default btn-block",
					    buttonContainer: '<div class="dropdown" />',
					      enableFiltering: true,//过滤搜索
					      enableCaseInsensitiveFiltering: true,//不区分大小写过滤
					      filterBehavior: 'both',//可使用value过滤
					      filterPlaceholder: '番号、名前',
					      includeSelectAllOption: true,//全选框
					      selectAllText: '全サブカテゴリ',//全选checkbox文本
					      allSelectedText: '全サブカテゴリ',//全选后显示文本
					      nonSelectedText: '全サブカテゴリ',//全不选后显示文本
					      nSelectedText: ' サブカテゴリ',//超过选中项显示
					      numberDisplayed:2,//按钮最多显示的选中项
					      maxHeight: 400 ,//下拉框显示高度
					      optionLabel: function(element) {  //option显示函数回调
					          return   $(element).attr("label"); 
					      },
						  onChange:function(option,checkd) {
							  if($(".SUBCATEGORY_col").find("div[class='dropdown']").length>0) {//
								  
								  if ($('#SEGMENT').length>0) {
										$('#SEGMENT').multiselect('disable');	
								  }
								  if ($('#SUBSEGMENT').length>0) {
										$('#SUBSEGMENT').multiselect('disable')
										loadSubsegment([],downFlgObj,downHeadFlg,0);
									}
						    	  var nowT=new Date();
								    var Selected =$('#SUBCATEGORY').val();  
									if ($('#SEGMENT').length>0) {
										if(Selected==null||Selected==0||(Selected instanceof Array && Selected.length==$("#SUBCATEGORY")[0].options.length&&Selected.length!=1)){
									    	  loadSegment([],downFlgObj,downHeadFlg,0);
									      }else{
									    	  var nowTime=new Date();
									    	  var bumon = $("#BUMON").val();
										      var category = $("#CATEGORY").val();
										      var subcategory = $("#SUBCATEGORY").val();
										      var bumoncd= bumon instanceof Array?bumon.join("_"):bumon;
										      var categorycd= category instanceof Array?category.join("_"):category;
										      var subcategorycd = subcategory instanceof Array?subcategory.join("_"):subcategory;
										      
									        //....
									        $.ajax({
									        	url: "getBumonDown.do",
									    		data: "shellParam=SEGMENT "+bumoncd+" "+categorycd+" "+subcategorycd+"&now="+nowTime,
									    		dataType: "json",
									    		success: function(src) {
									    			loadSegment(src.Rows,downFlgObj,downHeadFlg,1);
									    		},
									    		error:function(e){
									    			alert("");
									    		}
									        });
									        
									      }
										
									}
									
								  	
							  
								}	
						  
						  }
					  });
				}
				  
				  
				  if (downFlgObj.SEGMENT ==2 ){
					  $('#SEGMENT').multiselect({
						    disableIfEmpty: true,
						    buttonClass:"btn btn-default btn-block",
						    buttonContainer: '<div class="dropdown" />',
						      enableFiltering: true,//过滤搜索
						      enableCaseInsensitiveFiltering: true,//不区分大小写过滤
						      filterBehavior: 'both',//可使用value过滤
						      filterPlaceholder: '番号、名前',
						      includeSelectAllOption: true,//全选框
						      selectAllText: '全セグメント',//全选checkbox文本
						      allSelectedText: '全セグメント',//全选后显示文本
						      nonSelectedText: '全セグメント',//全不选后显示文本
						      nSelectedText: ' セグメント',//超过选中项显示
						      numberDisplayed:2,//按钮最多显示的选中项
						      maxHeight: 400 ,//下拉框显示高度
						      optionLabel: function(element) {  //option显示函数回调
						          return  $(element).attr("label");
						      },
						      onDropdownHide:function(event){
						    	  var nowT=new Date();
								    var Selected =$('#SEGMENT').val(); 
								   
									if ($('#SUBSEGMENT').length>0) {
										$('#SUBSEGMENT').multiselect('disable')
										loadSubsegment([],downFlgObj,downHeadFlg,0);
										if(Selected==null||Selected==0||(Selected instanceof Array && Selected.length==$("#SEGMENT")[0].options.length&&Selected.length!=1)){
									    	  loadSubsegment([],downFlgObj,downHeadFlg,0);
									      }else{
									    	  var nowTime=new Date();
									    	  var bumon = $("#BUMON").val();
										      var category = $("#CATEGORY").val();
										      var subcategory = $("#SUBCATEGORY").val();
										      var segment = $("#SEGMENT").val();
										      var bumoncd= bumon instanceof Array?bumon.join("_"):bumon;
										      var categorycd= category instanceof Array?category.join("_"):category;
										      var subcategorycd = subcategory instanceof Array?subcategory.join("_"):subcategory;
										      var segmentcd = segment instanceof Array?segment.join("_"):segment;
									        //....
									        $.ajax({
									        	url: "getBumonDown.do",
									    		data: "shellParam=SUBSEGMENT "+bumoncd+" "+categorycd+" "+subcategorycd+" "+segmentcd+"&now="+nowTime,
									    		dataType: "json",
									    		success: function(src) {
									    			loadSubsegment(src.Rows,downFlgObj,downHeadFlg,1);
									    		},
									    		error:function(e){
									    			alert("");
									    		}
									        });
									        
									      }
									}
								}
						      });
				  }else if(downFlgObj.SEGMENT ==1 ) {
					  $('#SEGMENT').multiselect({
						    disableIfEmpty: true,
						    buttonClass:"btn btn-default btn-block",
						    buttonContainer: '<div class="dropdown" />',
						      enableFiltering: true,//过滤搜索
						      enableCaseInsensitiveFiltering: true,//不区分大小写过滤
						      filterBehavior: 'both',//可使用value过滤
						      filterPlaceholder: '番号、名前',
						      includeSelectAllOption: true,//全选框
						      selectAllText: '全セグメント',//全选checkbox文本
						      allSelectedText: '全セグメント',//全选后显示文本
						      nonSelectedText: '全セグメント',//全不选后显示文本
						      nSelectedText: ' セグメント',//超过选中项显示
						      numberDisplayed:2,//按钮最多显示的选中项
						      maxHeight: 400 ,//下拉框显示高度
						      optionLabel: function(element) {  //option显示函数回调
						          return  $(element).attr("label");
						      },
								onChange:function(option,checkd) {
									if($(".SEGMENT_col").find("div[class='dropdown']").length>0) {//

								    	  var nowT=new Date();
										    var Selected =$('#SEGMENT').val();  
											if ($('#SUBSEGMENT').length>0) {
												$('#SUBSEGMENT').multiselect('disable')
												loadSubsegment([],downFlgObj,downHeadFlg,0);
												if(Selected==null||Selected==0||(Selected instanceof Array && Selected.length==$("#SEGMENT")[0].options.length&&Selected.length!=1)){
											    	  loadSubsegment([],downFlgObj,downHeadFlg,0);
											      }else{
											    	  var nowTime=new Date();
											    	  var bumon = $("#BUMON").val();
												      var category = $("#CATEGORY").val();
												      var subcategory = $("#SUBCATEGORY").val();
												      var segment = $("#SEGMENT").val();
												      var bumoncd= bumon instanceof Array?bumon.join("_"):bumon;
												      var categorycd= category instanceof Array?category.join("_"):category;
												      var subcategorycd = subcategory instanceof Array?subcategory.join("_"):subcategory;
												      var segmentcd = segment instanceof Array?segment.join("_"):segment;
											        //....
											        $.ajax({
											        	url: "getBumonDown.do",
											    		data: "shellParam=SUBSEGMENT "+bumoncd+" "+categorycd+" "+subcategorycd+" "+segmentcd+"&now="+nowTime,
											    		dataType: "json",
											    		success: function(src) {
											    			loadSubsegment(src.Rows,downFlgObj,downHeadFlg,1);
											    		},
											    		error:function(e){
											    			alert("");
											    		}
											        });
											        
											      }
											}
										
									}
								}
						  });
					
				  }
				  
				  if (downFlgObj.SUBSEGMENT !=0 ){
						
					  $('#SUBSEGMENT').multiselect({
						    disableIfEmpty: true,
						    buttonClass:"btn btn-default btn-block",
						    buttonContainer: '<div class="dropdown" />',
						      enableFiltering: true,//过滤搜索
						      enableCaseInsensitiveFiltering: true,//不区分大小写过滤
						      filterBehavior: 'both',//可使用value过滤
						      filterPlaceholder: '番号、名前',
						      includeSelectAllOption: true,//全选框
						      selectAllText: '全サブセグメント',//全选checkbox文本
						      allSelectedText: '全サブセグメント',//全选后显示文本
						      nonSelectedText: '全サブセグメント',//全不选后显示文本
						      nSelectedText: ' サブセグメント',//超过选中项显示
						      numberDisplayed:2,//按钮最多显示的选中项
						      maxHeight: 400 ,//下拉框显示高度
						      optionLabel: function(element) {  //option显示函数回调
						          
						          return   $(element).attr("label"); 
						      }
						     
						  });
					  
				  }
		 
		//部门以下各列表绑定multiselect ---end
			 
		//部门参数列表初始加载
					 if (upFlgObj.JIGYOBU!=0){
						 upFlgObj.JIGYOBU==1?bindData( getAllData(headJigyobu, data),"F0","F1","JIGYOBU","0"):bindData(data,"F0","F1","JIGYOBU","all");
					 }else if(upFlgObj.DIV!=0){
						 upFlgObj.DIV==1?bindData(getAllData(headDiv, data),"F2","F3","DIV","0"):bindData(data,"F2","F3","DIV","all");
					 }else if(upFlgObj.LINE!=0){
						 var datat = getAllData(headLine, data);
						 upFlgObj.LINE==1?bindData(datat,"F4","F5","LINE","0"):bindData(data,"F4","F5","LINE","all");
					 }else if(upFlgObj.BUMON!=0){
						 var datat = getAllData(headBumon, data);
						 upFlgObj.BUMON==1?bindData(datat,"F6","F7","BUMON","0"):bindData(data,"F6","F7","BUMON","all");
					 }

		};
		
		//加载mini部门数据
		function loadCategory(data,downFlgObj,downHeadFlg,flg){
			if (flg=="0") {
				if (downFlgObj.CATEGORY==1) {
//					if (downHeadFlg.CATEGORY==1) {
						bindData([{ "F0":"0000","F1":"全カテゴリ"}],"F0","F1","CATEGORY","single");
//					}
//					else {
//						bindData([],"F0","F1","CATEGORY","single");
//					}
			 	}else {
			 		bindData([],"F0","F1","CATEGORY","all");
			 	}
				$('#CATEGORY').multiselect('disable'); 
			}else {
				if (downFlgObj.CATEGORY==1) {
					if (downHeadFlg.CATEGORY==1) {
						bindData(getAllData([{ "F0":"0000","F1":"全カテゴリ"}], data),"F0","F1","CATEGORY","single");
					}else {
						bindData(data,"F0","F1","CATEGORY","single");
					}
			 	}else {
			 		bindData( data,"F0","F1","CATEGORY","all");
			 	}
				$('#CATEGORY').multiselect('enable');
			}
//			$("#CATEGORY").change();
			if ($('#SUBCATEGORY').length>0) {
				$('#SUBCATEGORY').multiselect('disable')
			}
			if ($('#SEGMENT').length>0) {
				$('#SEGMENT').multiselect('disable');	
			}
			if ($('#SUBSEGMENT').length>0) {
				$('#SUBSEGMENT').multiselect('disable')
			}
		}
		//加载品种数据
		function loadSubcategory(data,downFlgObj,downHeadFlg,flg){
			$('#SUBCATEGORY').multiselect('disable'); 
			if (flg=="0") {
				if (downFlgObj.SUBCATEGORY==1) {
//					if (downHeadFlg.SUBCATEGORY==1) {
						bindData([{ "F0":"0000","F1":"全サブカテゴリ"}],"F0","F1","SUBCATEGORY","single");
//					}
//					else {
//						bindData([],"F0","F1","SUBCATEGORY","single");
//					}
			 	}else {
			 		bindData([],"F0","F1","SUBCATEGORY","all");
			 	}
			 	$('#SUBCATEGORY').multiselect('disable'); 
			}else {
				if (downFlgObj.SUBCATEGORY==1) {
					if (downHeadFlg.SUBCATEGORY==1) {
						bindData(getAllData([{ "F0":"0000","F1":"全サブカテゴリ"}], data),"F0","F1","SUBCATEGORY","single");
					}else {
						bindData(data,"F0","F1","SUBCATEGORY","single");
					}
			 	}else {
			 		bindData( data,"F0","F1","SUBCATEGORY","all");
			 	}
				$('#SUBCATEGORY').multiselect('enable'); 
			}
//			$('#SUBCATEGORY').change();
			if ($('#SEGMENT').length>0) {
				$('#SEGMENT').multiselect('disable');	
			}
			if ($('#SUBSEGMENT').length>0) {
				$('#SUBSEGMENT').multiselect('disable')
			}
		}
		//加载品目数据
		function loadSegment(data,downFlgObj,downHeadFlg,flg){
			if (flg=="0") {
				if (downFlgObj.SEGMENT==1) {
//					if (downHeadFlg.SEGMENT==1) {
						bindData([{ "F0":"0000","F1":"全セグメント"}],"F0","F1","SEGMENT","single");
//					}
//					else {
//						bindData([],"F0","F1","SEGMENT","single");
//					}
			 	}else {
			 		bindData([],"F0","F1","SEGMENT","all");
			 	}
			 	$('#SEGMENT').multiselect('disable'); 
			}else {
				if (downFlgObj.SEGMENT==1) {
					if (downHeadFlg.SEGMENT==1) {
						bindData(getAllData([{ "F0":"0000","F1":"全セグメント"}], data),"F0","F1","SEGMENT","single");
					}else {
						bindData(data,"F0","F1","SEGMENT","single");
					}
				   
			 	}else {
			 		bindData(getAllData([], data),"F0","F1","SEGMENT","all");
			 	}
				$('#SEGMENT').multiselect('enable'); 
			}
//			$("#SEGMENT").change();
			if ($('#SUBSEGMENT').length>0) {
				$('#SUBSEGMENT').multiselect('disable')
			}
		};
		//加载subsegment数据
		function loadSubsegment(data,downFlgObj,downHeadFlg,flg){
			if (flg=="0") {
				if (downFlgObj.SUBSEGMENT==1) {
//					if (downHeadFlg.SUBSEGMENT==1 ){
						bindData([{ "F0":"0000","F1":"全サブセグメント"}],"F0","F1","SUBSEGMENT","single");
//					}
//					else {
//						bindData([],"F0","F1","SUBSEGMENT","single");
//					}
			 	}else {
			 		bindData([],"F0","F1","SUBSEGMENT","all");
			 	}
			 	$('#SUBSEGMENT').multiselect('disable'); 
			}else {
				if (downFlgObj.SUBSEGMENT==1) {
					if (downHeadFlg.SUBSEGMENT==1 ){
						bindData(getAllData([{ "F0":"0000","F1":"全サブセグメント"}], data),"F0","F1","SUBSEGMENT","single");
					}else {
						bindData(data,"F0","F1","SUBSEGMENT","single");
					}
			 	}else {
			 		bindData( data,"F0","F1","SUBSEGMENT","all");
			 	}
				$('#SUBSEGMENT').multiselect('enable'); 
			}
		}
		var bindData=function (filtdata ,valuecol, labelcol,id,multiple){ 
		  var data = Enumerable.From(filtdata).Distinct("$."+valuecol).OrderBy("$."+valuecol).ToArray();
		//  var data = Enumerable.From(filtdata).Distinct("$."+valuecol).ToArray();
		  var options=[];
		        for(var i=0;i<data.length;i++){
		          options.push({
		            label:data[i][labelcol],
		            title:data[i][labelcol],
		            value:data[i][valuecol]
		            });
		        }
		        $('#'+id).multiselect('dataprovider', options);
		        if(multiple=="all"){
		          //全选中  及び　onChange trigger
		          $('#'+id).multiselect('selectAll',false,true);
		          $('#'+id).multiselect('updateButtonText');          
//		          deselectAll
		        } else if(multiple=="none") {
		        	//全不选
		        	 $('#'+id).multiselect('deselectAll',false,true);
		             $('#'+id).multiselect('updateButtonText');          
		        } else if(multiple=="single"){
		          //第一项被选中　及び　onChange trigger
		          $('#'+id).multiselect('select',options[0].value,true);          
		        } else if(multiple=="1"){
		          //第一项被选中　及び　onChange trigger
		          $('#'+id).multiselect('select',options[1].value,true);          
		        } else {
		        //选中给定的值   及び　onChange trigger
		         $('#'+id).multiselect('select',multiple,true);
		        } 
		        
		} 
		var getAllData=function (data1,data2){
		  data1.reverse(); 
		  for(var i=0;i<data1.length;i++){
		    data2.splice(0,0,data1[i]);
		  }
		  return data2;
		}
		var filterData=function (data ,whereCd, filterVal){              
		  var result;           
		  var where="";                       
		    if(filterVal==null){              
		      result =data;           
		    }else{              
		      if(!$.isArray(filterVal)) {           
		            filterVal = [filterVal];            
		          }           
		      for (var i = 0; i < filterVal.length; i++) {            
		        where += "$."+whereCd+" == '" + filterVal[i] + "' || ";           
		      }           
		      where += "$."+whereCd+" == ''";           
		      result = Enumerable.From(data).Where(where).ToArray();            
		    }             
		    return result;              
		 }
		var filterHead=function (data){              
			  if(data[0].F0=="0000") {
				  data.splice(0,1);
			  }
			    return data;              
		}

		var setValue=function (id,value){
			if ($("#JIGYOBU").length>0){
				if ($("#JIGYOBU").attr("multiple")!="multiple") {
					bindData(getAllData(headJigyobu, dataAll),"F0","F1","JIGYOBU","0")
				}else {
					 $('#JIGYOBU').multiselect('selectAll',false,true);
					 $('#JIGYOBU').multiselect('updateButtonText');   
					
				}
			 }else if($("#DIV").length>0){
				 if ($("#DIV").attr("multiple")!="multiple") {
					 bindData(getAllData(headDiv, dataAll),"F2","F3","DIV","0")
					}else {
						 $('#DIV').multiselect('selectAll',false,true);
						 $('#DIV').multiselect('updateButtonText');          
					}
			 }else if($("#LINE").length>0){
				 if ($("#LINE").attr("multiple")!="multiple") {
					 bindData(getAllData(headLine, dataAll),"F4","F5","LINE","0")
					}else {
						 $('#LINE').multiselect('selectAll',false,true);
						 $('#LINE').multiselect('updateButtonText');          
					}
			 }else if($("#BUMON").length>0){
				 if ($("#BUMON").attr("multiple")!="multiple") {
					 bindData(getAllData(headBumon, dataAll),"F6","F7","BUMON","0")
					}else {
						$('#BUMON'+id).multiselect('selectAll',false,true);
						$('#BUMON').multiselect('updateButtonText');          
					}
			 }
			var upArr=["JIGYOBU","DIV","LINE","BUMON"];
			var valArr=value.split(",");
			if (upArr.indexOf(id)>-1) {
				$("#"+id).multiselect("deselectAll",false,true);
				for (var index in valArr) {
					var tmp=$("#"+id).next().children().find("input[value='"+valArr[index]+"']");
					if (tmp.length==0) {
						alert("请检查要设置的值是否存在");
					}else {
						$("#"+id).next().children().find("input[value='"+valArr[index]+"']")[0].click();
						$("#"+id).multiselect('updateButtonText');
					}
				}
			}
			$("#"+id).next().removeClass("open");
		}
		var getValue = function (id){
			 var value=$("#"+id).val();
			 var result=[];
			 if ($("#"+id).attr("multiple")=="multiple") {
			  if (value==null||(value.length==$("#"+id)[0].options.length&&$("#"+id)[0].options.length!=1)) {
			   result.push("0000");
			  }else {
			   result=value;
			  }
			 }else {
			  result.push(value);
			 }
			 return result;
			}
		var setClass=function (id,className) {
				var div=$("."+id+"_col");
				div.removeClass("col-md-1");
				div.addClass(className);
		}
		return {init:init,getValue:getValue,setValue:setValue};
})();
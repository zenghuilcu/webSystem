var StoreModule=(function (){
	var  init = function (option){
		var data=[];
		var flgObj=[0,0,0,0,0];
		var headFlg=[0,0,0,0,0];
		var divId="stoRow";
		var classNm={
				"FORMAT":["col-md-1"],
		  		"BRANCH":["col-md-1"],
		  		"BLOCK":["col-md-1"],
		  		"AREA":["col-md-1"],
		  		"STORE":["col-md-1"]
		};
		if (option) {
			data=option.data;
			flgObj=option.flgObj.split("-");
			headFlg=option.headFlg.split("-");
			divId=option.divId;
//			classNm=option.classNm;
			if (cnm=option.classNm) {
				classNm.FORMAT="";
				classNm.BRANCH="";
				classNm.BLOCK="";
				classNm.AREA="";
				classNm.STORE="";
				for (var i=0;i<cnm.FORMAT.length;i++) {
					classNm.FORMAT += " "+cnm.FORMAT[i];
				}
				for (var i=0;i<cnm.BRANCH.length;i++) {
					classNm.BRANCH += " "+cnm.BRANCH[i];	
				}
				for (var i=0;i<cnm.BLOCK.length;i++) {
					classNm.BLOCK += " "+cnm.BLOCK[i];
				}
				for (var i=0;i<cnm.AREA.length;i++) {
					classNm.AREA += " "+cnm.AREA[i];
				}
				for (var i=0;i<cnm.STORE.length;i++) {
					classNm.STORE += " "+cnm.STORE[i];
				}
			}
			
		}
		
		/*店铺列表是否需要手动加[すべて]选项---
		 * 多选时  --控件自带全选
		 * 单选时  --headflg为1时，有 全选 项，headflg为0时，无 全选 项，
		 */
		if (headFlg[0]==1&&flgObj[0]==1) { //
			var headFormat =[{"F0":"0000","F1":"全て","F2":"0000","F3":"全て","F4":"0000","F5":"全て","F6":"0000","F7":"全て","F8":"0000","F9":"全て"}]
		}else {
			var headFormat =[];
		}
		if (headFlg[1]==1&&flgObj[1]==1) {
			var headBranch =[{"F0":"0000","F1":"全て","F2":"0000","F3":"全て","F4":"0000","F5":"全て","F6":"0000","F7":"全て","F8":"0000","F9":"全て"}]
		}else {
			var headBranch =[];
		}
		if (headFlg[2]==1&&flgObj[2]==1) {
			var headBlock =[{"F0":"0000","F1":"全て","F2":"0000","F3":"全て","F4":"0000","F5":"全て","F6":"0000","F7":"全て","F8":"0000","F9":"全て"}]
		}else {
			var headBlock =[];
		}
		if (headFlg[3]==1&&flgObj[3]==1) {
			var headArea =[{"F0":"0000","F1":"全て","F2":"0000","F3":"全て","F4":"0000","F5":"全て","F6":"0000","F7":"全て","F8":"0000","F9":"全て"}]
		}else {
			var headArea =[];
		}
		if (headFlg[4]==1&&flgObj[4]==1) {
			var headStore =[{"F0":"0000","F1":"全て","F2":"0000","F3":"全て","F4":"0000","F5":"全て","F6":"0000","F7":"全て","F8":"0000","F9":"全て"}]
		}else {
			var headStore =[];
		}
		
		//页面填充
		var _result=$("<div class='tab-content' id='stoParam'>");
		var _format,_branch,_block,_area,_store;
		if (flgObj[0]!=0) {
			var format="";
			format += '<div class="FORMAT_col '+classNm.FORMAT+'" >'+
					'	<div class="form-group">'+   
					'		<fieldset>'+
	                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">地域</legend>' ;
			if (flgObj[0]==1){
				format +=  '			<select  id="FORMAT" class="form-control input-sm" style="display:none;"></select>';
			}else {
				format +=  '			<select  id="FORMAT" class="form-control input-sm" multiple style="display:none;"></select>';
			}
			format +=  '		</fieldset>'+
	                '	</div>'+
	        		'</div>'
	        _format = $(format);
			_result.append(_format);
		}
		if (flgObj[1]!=0) {
			var branch = "";
			branch += '<div class="BRANCH_col '+classNm.BRANCH+'" >'+
					'	<div class="form-group">'+   
					'		<fieldset>'+
	                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">大分類</legend>' ;
			if (flgObj[1]==1) {
				branch += '			<select  id="BRANCH" class="form-control input-sm" style="display:none;"></select>';
			}else {
				branch +=  '			<select  id="BRANCH" class="form-control input-sm" multiple style="display:none;"></select>';
			}
	               
			branch +=        '		</fieldset>'+
	                '	</div>'+
	        		'</div>';
			_branch = $(branch);
			_result.append(_branch);
			
		}
		if (flgObj[2]!=0) {
			var block="";
			block += '<div class="BLOCK_col '+classNm.BLOCK+'" >'+
					'	<div class="form-group">'+   
					'		<fieldset>'+
	                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">中分類</legend>' ;
			if (flgObj[2]==1) {
				block += '			<select  id="BLOCK" class="form-control input-sm" style="display:none;"></select>';
			}else {
				block += '			<select  id="BLOCK" class="form-control input-sm" multiple style="display:none;"></select>';
			}
	                
			block += '		</fieldset>'+
	                '	</div>'+
	        		'</div>';
			_block = $(block);
			_result.append(_block);
		}
		if (flgObj[3]!=0) {
			var area ="";
			area += '<div class="AREA_col '+classNm.AREA+'" >'+
					'	<div class="form-group">'+   
					'		<fieldset>'+
	                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">ユニット</legend>' ;
			if (flgObj[3]==1) {
				area +='			<select  id="AREA" class="form-control input-sm" style="display:none;"></select>';
			}else{
				area += '			<select  id="AREA" class="form-control input-sm" multiple style="display:none;"></select>';
			}
	                
			area += '		</fieldset>'+
	                '	</div>'+
	        		'</div>' ;
			_area = $(area);
			_result.append(_area);
		}
		if (flgObj[4]!=0) {
			var store ="";
			store += '<div class="STORE_col '+classNm.STORE+'" >'+
					'	<div class="form-group">'+   
					'		<fieldset>'+
	                '			<legend style="margin-bottom: 5px;text-align: center;font-size: 12px;">店舗</legend>' ;
			if (flgObj[4]==1) {
				store +='			<select  id="STORE" class="form-control input-sm" style="display:none;"></select>';
			}else{
				store += '			<select  id="STORE" class="form-control input-sm" multiple style="display:none;"></select>';
			}
	                
			store += '		</fieldset>'+
	                '	</div>'+
	        		'</div>' ;
			_store = $(store);
			_result.append(_store);
		}
//		$(".proRow").append(_result);
		$("#"+ divId).append(_result);
		if (flgObj[0]!=0) {
			$('#FORMAT').multiselect({
			     disableIfEmpty: true,
			     buttonClass:"btn btn-default btn-block",
			     buttonContainer: '<div class="dropdown" />',
			     enableFiltering: true,//过滤搜索
			     enableCaseInsensitiveFiltering: true,//不区分大小写过滤
			     filterBehavior: 'both',//可使用value过滤
			     filterPlaceholder: '番号、名前',
			     includeSelectAllOption: true,//全选框
			     selectAllText: '全て',//全选checkbox文本
			     allSelectedText: '全て',//全选后显示文本
			     nonSelectedText: '全て',//全不选后显示文本
			     nSelectedText: ' 地域',//超过选中项显示
			     numberDisplayed:2,//按钮最多显示的选中项
			     maxHeight: 400 ,//下拉框显示高度
			     optionLabel: function(element) {  //option显示函数回调
			           return   $(element).attr("label"); 
			     },
			     onChange:function (option,checked) {
			    	 var Selected = this.$select.val();  
			    	 if (Selected==null||Selected=="0000"||(Selected instanceof Array&&Selected.length==this.$select[0].options.length)) {//全选
			    		 if (flgObj[1]==1) {
				    		 bindStoData(getAllStoData(headBranch,filterStoHead(data)),"F0","F1","BRANCH","0");
				    	 }else if (flgObj[1]==2) {
				    		 bindStoData(filterStoHead(data),"F0","F1","BRANCH","all");
				    	 }else if (flgObj[2]==1) {
				    		 bindStoData(getAllStoData(headBlock,filterStoHead(data)),"F2","F3","BLOCK","0");
				    	 }else if (flgObj[2]==2) {
				    		 bindStoData(filterStoHead(data),"F2","F3","BLOCK","all");
				    	 } else if (flgObj[3]==1) {
				    		 bindStoData(getAllStoData(headArea,filterStoHead(data)),"F4","F5","AREA","0");
				    	 } else if (flgObj[3]==2) {
				    		 bindStoData(filterStoHead(data),"F4","F5","AREA","all");
				    	 } else if (flgObj[4]==1) {
				    		 bindStoData(getAllStoData(headStore,filterStoHead(data)),"F6","F7","STORE","0");
				    	 } else if (flgObj[4]==2) {
				    		 bindStoData(filterStoHead(data),"F6","F7","STORE","all"); 
				    	 }
			    	 }else {

			    		 if (flgObj[1]==1) {
				    		 bindStoData(getAllStoData(headBranch,filterData(filterStoHead(data),"F8",Selected)),"F0","F1","BRANCH","0");
				    	 }else if (flgObj[1]==2) {
				    		 bindStoData(filterData(filterStoHead(data),"F8",Selected),"F0","F1","BRANCH","all");
				    	 }else if (flgObj[2]==1) {
				    		 bindStoData(getAllStoData(headBlock,filterData(filterStoHead(data),"F8",Selected)),"F2","F3","BLOCK","0");
				    	 }else if (flgObj[2]==2) {
				    		 bindStoData(filterData(filterStoHead(data),"F8",Selected),"F2","F3","BLOCK","all");
				    	 } else if (flgObj[3]==1) {
				    		 bindStoData(getAllStoData(headArea,filterData(filterStoHead(data),"F8",Selected)),"F4","F5","AREA","0");
				    	 } else if (flgObj[3]==2) {
				    		 bindStoData(filterData(filterStoHead(data),"F8",Selected),"F4","F5","AREA","all");
				    	 } else if (flgObj[4]==1) {
				    		 bindStoData(getAllStoData(headStore,filterData(filterStoHead(data),"F8",Selected)),"F6","F7","STORE","0");
				    	 } else if (flgObj[4]==2) {
				    		 bindStoData(filterData(filterStoHead(data),"F8",Selected),"F6","F7","STORE","all"); 
				    	 } 
			    	 }
			    	 
			    	 
			     }
			});
		}
		if (flgObj[1]!=0) {
			$('#BRANCH').multiselect({
			     disableIfEmpty: true,
			     buttonClass:"btn btn-default btn-block",
			     buttonContainer: '<div class="dropdown" />',
			     enableFiltering: true,//过滤搜索
			     enableCaseInsensitiveFiltering: true,//不区分大小写过滤
			     filterBehavior: 'both',//可使用value过滤
			     filterPlaceholder: '番号、名前',
			     includeSelectAllOption: true,//全选框
			     selectAllText: '全て',//全选checkbox文本
			     allSelectedText: '全て',//全选后显示文本
			     nonSelectedText: '全て',//全不选后显示文本
			     nSelectedText: ' 大分類',//超过选中项显示
			     numberDisplayed:2,//按钮最多显示的选中项
			     maxHeight: 400 ,//下拉框显示高度
			     optionLabel: function(element) {  //option显示函数回调
			           return   $(element).attr("label"); 
			     },
			     onChange:function (option,checked) {
			    	 var Selected = this.$select.val();  
			    	 var formatcd=$("#FORMAT").val();
			    	 var dataTmp=[];
			    	 if (flgObj[0]==0||formatcd==null||flgObj[0]==1&&formatcd=="0000"||flgObj[0]==2&&formatcd.length==$("#FORMAT")[0].options.length) {//是单项选择全选  or 多项选择全选
			    		 dataTmp = data;
			    	 }else {
			    		 dataTmp = filterData(data,"F8",formatcd); 
			    	 }
			    	 
			    	 if (Selected==null||Selected=="0000"||(Selected instanceof Array&&Selected.length==this.$select[0].options.length)) {//全选

				    		 
				    			 if (flgObj[2]==1) {
						    		 bindStoData(getAllStoData(headBlock,filterStoHead(dataTmp)),"F2","F3","BLOCK","0");
						    	 }else if (flgObj[2]==2) {
						    		 bindStoData(filterStoHead(dataTmp),"F2","F3","BLOCK","all");
						    	 } else if (flgObj[3]==1) {
						    		 bindStoData(getAllStoData(headArea,filterStoHead(dataTmp)),"F4","F5","AREA","0");
						    	 } else if (flgObj[3]==2) {
						    		 bindStoData(filterStoHead(dataTmp),"F4","F5","AREA","all");
						    	 } else if (flgObj[4]==1) {
						    		 bindStoData(getAllStoData(headStore,filterStoHead(dataTmp)),"F6","F7","STORE","0");
						    	 } else if (flgObj[4]==2) {
						    		 bindStoData(filterStoHead(dataTmp),"F6","F7","STORE","all"); 
						    	 } 
				    		  
				    			 
				    			 
				    			 
				    		 
			    		 
			    	 
			    		   
			    	 }else {

			    		 if (flgObj[2]==1) {
				    		 bindStoData(getAllStoData(headBlock,filterData(filterStoHead(dataTmp),"F0",Selected)),"F2","F3","BLOCK","0");
				    	 }else if (flgObj[2]==2) {
				    		 bindStoData(filterData(filterStoHead(dataTmp),"F0",Selected),"F2","F3","BLOCK","all");
				    	 } else if (flgObj[3]==1) {
				    		 bindStoData(getAllStoData(headArea,filterData(filterStoHead(dataTmp),"F0",Selected)),"F4","F5","AREA","0");
				    	 } else if (flgObj[3]==2) {
				    		 bindStoData(filterData(filterStoHead(dataTmp),"F0",Selected),"F4","F5","AREA","all");
				    	 } else if (flgObj[4]==1) {
				    		 bindStoData(getAllStoData(headStore,filterData(filterStoHead(dataTmp),"F0",Selected)),"F6","F7","STORE","0");
				    	 } else if (flgObj[4]==2) {
				    		 bindStoData(filterData(filterStoHead(dataTmp),"F0",Selected),"F6","F7","STORE","all"); 
				    	 }
			    	 }
			    	 
			    	 
			      
			     }
			});
		}
		if (flgObj[2]!=0) {
			$('#BLOCK').multiselect({
			     disableIfEmpty: true,
			     buttonClass:"btn btn-default btn-block",
			     buttonContainer: '<div class="dropdown" />',
			     enableFiltering: true,//过滤搜索
			     enableCaseInsensitiveFiltering: true,//不区分大小写过滤
			     filterBehavior: 'both',//可使用value过滤
			     filterPlaceholder: '番号、名前',
			     includeSelectAllOption: true,//全选框
			     selectAllText: '全て',//全选checkbox文本
			     allSelectedText: '全て',//全选后显示文本
			     nonSelectedText: '全て',//全不选后显示文本
			     nSelectedText: ' 中分類',//超过选中项显示
			     numberDisplayed:2,//按钮最多显示的选中项
			     maxHeight: 400 ,//下拉框显示高度
			     optionLabel: function(element) {  //option显示函数回调
			           return   $(element).attr("label"); 
			     },
			     onChange:function (option,checked) {

			    	 var Selected = this.$select.val(); 
			    	 var formatcd=$("#FORMAT").val();
			    	 var dataTmp=[];
			    	 if (flgObj[0]==0||formatcd==null||flgObj[0]==1&&formatcd=="0000"||flgObj[0]==2&&formatcd.length==$("#FORMAT")[0].options.length) {//是单项选择全选  or 多项选择全选
			    		 dataTmp = data;
			    	 }else {
			    		 dataTmp = filterData(data,"F8",formatcd); 
			    	 }
			    	 if (Selected==null||Selected=="0000"||(Selected instanceof Array&&Selected.length==this.$select[0].options.length)) {//全选

				    		
			    		 var branchcd=$("#BRANCH").val();
			    		 if (flgObj[1]==0||branchcd==null||flgObj[1]==1&&branchcd=="0000"||flgObj[1]==2&&branchcd.length==$("#BRANCH")[0].options.length) {//是单项选择全选  or 多项选择全选) 

			    				 if (flgObj[3]==1) {
						    		 bindStoData(getAllStoData(headArea,filterStoHead(dataTmp)),"F4","F5","AREA","0");
						    	 } else if (flgObj[3]==2) {
						    		 bindStoData(filterStoHead(dataTmp),"F4","F5","AREA","all");
						    	 } else if (flgObj[4]==1) {
						    		 bindStoData(getAllStoData(headStore,filterStoHead(dataTmp)),"F6","F7","STORE","0");
						    	 } else if (flgObj[4]==2) {
						    		 bindStoData(filterStoHead(dataTmp),"F6","F7","STORE","all"); 
						    	 } 
			    		 
			    			 
			    			 
			    		 }else {
			    			 if (flgObj[3]==1) {
					    		 bindStoData(getAllStoData(headArea,filterData(filterStoHead(dataTmp),"F0",branchcd)),"F4","F5","AREA","0");
					    	 } else if (flgObj[3]==2) {
					    		 bindStoData(filterData(filterStoHead(dataTmp),"F0",branchcd),"F4","F5","AREA","all");
					    	 } else if (flgObj[4]==1) {
					    		 bindStoData(getAllStoData(headStore,filterData(filterStoHead(dataTmp),"F0",branchcd)),"F6","F7","STORE","0");
					    	 } else if (flgObj[4]==2) {
					    		 bindStoData(filterData(filterStoHead(dataTmp),"F0",branchcd),"F6","F7","STORE","all"); 
					    	 } 
			    			 
			    		 }
			    		 
			    	 
			    		 
			    		  
			    	 }else {

			    		 if (flgObj[3]==1) {
				    		 bindStoData(getAllStoData(headArea,filterData(filterStoHead(dataTmp),"F2",Selected)),"F4","F5","AREA","0");
				    	 } else if (flgObj[3]==2) {
				    		 bindStoData(filterData(filterStoHead(dataTmp),"F2",Selected),"F4","F5","AREA","all");
				    	 } else if (flgObj[4]==1) {
				    		 bindStoData(getAllStoData(headStore,filterData(filterStoHead(dataTmp),"F2",Selected)),"F6","F7","STORE","0");
				    	 } else if (flgObj[4]==2) {
				    		 bindStoData(filterData(filterStoHead(dataTmp),"F2",Selected),"F6","F7","STORE","all"); 
				    	 } 
			    	 }
			    	 
			    	 
			      
			      
			     }
			});
		}
		if (flgObj[3]!=0) {
			$('#AREA').multiselect({
			     disableIfEmpty: true,
			     buttonClass:"btn btn-default btn-block",
			     buttonContainer: '<div class="dropdown" />',
			     enableFiltering: true,//过滤搜索
			     enableCaseInsensitiveFiltering: true,//不区分大小写过滤
			     filterBehavior: 'both',//可使用value过滤
			     filterPlaceholder: '番号、名前',
			     includeSelectAllOption: true,//全选框
			     selectAllText: '全て',//全选checkbox文本
			     allSelectedText: '全て',//全选后显示文本
			     nonSelectedText: '全て',//全不选后显示文本
			     nSelectedText: ' ユニット',//超过选中项显示
			     numberDisplayed:2,//按钮最多显示的选中项
			     maxHeight: 400 ,//下拉框显示高度
			     optionLabel: function(element) {  //option显示函数回调
			           return   $(element).attr("label"); 
			     },
			     onChange:function (option,checked) {
			    	 var Selected = this.$select.val();
			    	 var formatcd=$("#FORMAT").val();
			    	 var dataTmp=[];
			    	 if (flgObj[0]==0||formatcd==null||flgObj[0]==1&&formatcd=="0000"||flgObj[0]==2&&formatcd.length==$("#FORMAT")[0].options.length) {//是单项选择全选  or 多项选择全选
			    		 dataTmp = data;
			    	 }else {
			    		 dataTmp = filterData(data,"F8",formatcd); 
			    	 }
			    	 if (Selected==null||Selected=="0000"||(Selected instanceof Array&&Selected.length==this.$select[0].options.length)) {//不是全选

			    		 
			    		 var blockcd=$("#BLOCK").val();
			    		 if (flgObj[2]==0||blockcd==null||flgObj[2]==1&&blockcd=="0000"||flgObj[2]==2&&blockcd.length==$("#BLOCK")[0].options.length) {//block 不存在 或者 存在但是全选

			    			 var branchcd=$("#BRANCH").val();
				    		 if (flgObj[1]==0||branchcd==null||flgObj[1]==1&&branchcd=="0000"||flgObj[1]==2&&branchcd.length==$("#BRANCH")[0].options.length) {//branch 不存在 或者 存在但是全选
					    			 if (flgObj[4]==1) {
							    		 bindStoData(getAllStoData(headStore,filterStoHead(dataTmp)),"F6","F7","STORE","0");
							    	 } else if (flgObj[4]==2) {
							    		 bindStoData(filterStoHead(dataTmp),"F6","F7","STORE","all"); 
							    	 }   
					    		
				    		 }else {
						    	 if (flgObj[4]==1) {
						    		 bindStoData(getAllStoData(headStore,filterData(filterStoHead(dataTmp),"F0",branchcd)),"F6","F7","STORE","0");
						    	 } else if (flgObj[4]==2) {
						    		 bindStoData(filterData(filterStoHead(dataTmp),"F0",branchcd),"F6","F7","STORE","all"); 
						    	 } 
				    			 
				    		 }
			    		 
			    		 }else {

			    			 if (flgObj[4]==1) {
					    		 bindStoData(getAllStoData(headStore,filterData(filterStoHead(dataTmp),"F2",blockcd)),"F6","F7","STORE","0");
					    	 } else if (flgObj[4]==2) {
					    		 bindStoData(filterData(filterStoHead(dataTmp),"F2",blockcd),"F6","F7","STORE","all"); 
					    	 } 
			    			 
			    		 }
			    		 
			    	 
			    		 
			    		 
			    	 }else {
			    		 if (flgObj[4]==1) {
				    		 bindStoData(getAllStoData(headStore,filterData(filterStoHead(dataTmp),"F4",Selected)),"F6","F7","STORE","0");
				    	 } else if (flgObj[4]==2) {
				    		 bindStoData(filterData(filterStoHead(dataTmp),"F4",Selected),"F6","F7","STORE","all"); 
				    	 }  
			    		 
			    	 }
			     }
			});
		}
		if (flgObj[4]!=0) {
			$('#STORE').multiselect({
			     disableIfEmpty: true,
			     buttonClass:"btn btn-default btn-block",
			     buttonContainer: '<div class="dropdown" />',
			     enableFiltering: true,//过滤搜索
			     enableCaseInsensitiveFiltering: true,//不区分大小写过滤
			     filterBehavior: 'both',//可使用value过滤
			     filterPlaceholder: '番号、名前',
			     includeSelectAllOption: true,//全选框
			     selectAllText: '全て',//全选checkbox文本
			     allSelectedText: '全て',//全选后显示文本
			     nonSelectedText: '全て',//全不选后显示文本
			     nSelectedText: ' 店舗',//超过选中项显示
			     numberDisplayed:2,//按钮最多显示的选中项
			     maxHeight: 400 ,//下拉框显示高度
			     optionLabel: function(element) {  //option显示函数回调
			           return   $(element).attr("label"); 
			     },
			     onChange:function (option,checked) {
			    	 
			     }
			});
		}
		if (flgObj[0]==1){
			 bindStoData(getAllStoData(headFormat, filterStoHead(data)),"F8","F9","FORMAT","0");
		 }else if(flgObj[0]==2) {
			 bindStoData(filterStoHead(data),"F8","F9","FORMAT","all");
		 }else if (flgObj[1]==1) {
			 bindStoData(getAllStoData(headBranch,filterStoHead(data)),"F0","F1","BRANCH","0");
		 }else if (flgObj[1]==2) {
			 bindStoData(filterStoHead(data),"F0","F1","BRANCH","all");
		 }else if (flgObj[2]==1) {
			 bindStoData(getAllStoData(headBlock,filterStoHead(data)),"F2","F3","BLOCK","0");
		 }else if (flgObj[2]==2) {
			 bindStoData(filterStoHead(data),"F2","F3","BLOCK","all");
		 } else if (flgObj[3]==1) {
			 bindStoData(getAllStoData(headArea,filterStoHead(data)),"F4","F5","AREA","0");
		 } else if (flgObj[3]==2) {
			 bindStoData(filterStoHead(data),"F4","F5","AREA","all");
		 } else if (flgObj[4]==1) {
			 bindStoData(getAllStoData(headStore,filterStoHead(data)),"F6","F7","STORE","0");
		 } else if (flgObj[4]==2) {
			 bindStoData(filterStoHead(data),"F6","F7","STORE","all"); 
		 } 

		
	}


	function bindStoData(filtdata ,valuecol, labelcol,id,multiple){ 
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
//	          deselectAll
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
	function getAllStoData(data1,data2){
	  data1.reverse(); 
	  for(var i=0;i<data1.length;i++){
	    data2.splice(0,0,data1[i]);
	  }
	  return data2;
	}
	function filterData(data ,whereCd, filterVal){              
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

	function filterStoHead(data){              
		  if(data[0].F0=="0000") {
			  data.splice(0,1);
		  }
		    return data;              
	}

	var setValue=function (id,value){
		if ($("#FORMAT").length>0){
			if ($("#FORMAT").attr("multiple")!="multiple") {
				$('#FORMAT').multiselect('select',$("#FORMAT")[0].options[0].value,true);          
			}else {
				 $('#FORMAT').multiselect('selectAll',false,true);
				 $('#FORMAT').multiselect('updateButtonText');   
				
			}

		 }else if($("#BRANCH").length>0){
			 if ($("#BRANCH").attr("multiple")!="multiple") {
				 $('#BRANCH').multiselect('select',$("#BRANCH")[0].options[0].value,true); 
				}else {
					 $('#BRANCH').multiselect('selectAll',false,true);
					 $('#BRANCH').multiselect('updateButtonText');          
					
				}
			 

		 }else if($("#BLOCK").length>0){
			 if ($("#BLOCK").attr("multiple")!="multiple") {
				 $('#BLOCK').multiselect('select',$("#BLOCK")[0].options[0].value,true);  
				}else {
					 $('#BLOCK').multiselect('selectAll',false,true);
					 $('#BLOCK').multiselect('updateButtonText');          
				}
		 }else if($("#AREA").length>0){
			 if ($("#AREA").attr("multiple")!="multiple") {
				 $('#AREA').multiselect('select',$("#AREA")[0].options[0].value,true);  
				}else {
					$('#AREA').multiselect('selectAll',false,true);
					$('#AREA').multiselect('updateButtonText');          
				}
		 }else if ($("#STORE").length>0) {
			 if ($("#STORE").attr("multiple")!="multiple") {
				 $('#STORE').multiselect('select',$("#STORE")[0].options[0].value,true);  
				}else {
					$('#STORE').multiselect('selectAll',false,true);
					$('#STORE').multiselect('updateButtonText');          
				}
			 
		 }
		var arr=["FORMAT","BRANCH","BLOCK","AREA","STORE"];
		if (value=="0000") {
			if (arr.indexOf(id)>-1) {
				if ($("#"+id).attr("multiple")=="multiple") {
					$('#'+id).multiselect('selectAll',false,true);
					$('#'+id).multiselect('updateButtonText');       
				}else {
					if ($("#"+id)[0].options[0].value=="0000") {
						$('#AREA').multiselect('select',"0000",true);  
					}else {
						alert("設定したい項目が存在しない");
					}
				}
			}else {
				alert("id="+id+"のselectが存在しない");
			}
			
		}else {
			var valArr=value.split(",");
			if (arr.indexOf(id)>-1) {
				$("#"+id).multiselect("deselectAll",false,true);
				for (var index in valArr) {
					var tmp=$("#"+id).next().children().find("input[value='"+valArr[index]+"']");
					if (tmp.length==0) {
						alert("設定したい項目が存在しない");
					}else {
						$("#"+id).next().children().find("input[value='"+valArr[index]+"']")[0].click();
						$("#"+id).multiselect('updateButtonText');
					}
					
					
				}
			}else{
				alert("id="+id+"のselectが存在しない");
			}
		}
		
		$("#"+id).next().removeClass("open");
		
	}


	var getValue=function (id){
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


	return {init:init,getValue:getValue,setValue:setValue,setClass:setClass};
})();



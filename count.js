function deal_form() {
	//续投期数
	var period=0;
	//获取form对象 
	var form = document.getElementById('user_info');
	var productName = form.productName.value;
	var firstDate = form.firstDate.value;
	var pattern = form.pattern.value;
	var money = form.money.value;
	var plan_periods = form.plan_periods.value;
	var periods = form.periods.value;
	var worth = form.worth.value;
	var percent = form.percent.value;
	//var nowDate = new Date();

	var money = parseInt(money, 10);
	var plan_periods = parseInt(plan_periods, 10);
	var periods = parseInt(periods, 10)+period;
	var worth = parseInt(worth, 10);
	//var percent=parseInt(percent,10);

	var ICP = worth;
	var A_C = 0;
	var i = 0;
	/*初始化现金价值*/
	var cashValue = ICP + A_C;
	/*退保成本（费率）*/
	var surrenderRate = new Array(0.93, 0.93, 0.93, 0.93, 0.93, 0.93, 0.93,
		0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92,
		0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91,
		0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90,
		0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89,
		0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88,
		0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86,
		0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82,
		0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78,
		0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74,
		0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70,
		0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65,
		0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60,
		0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56,
		0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52,
		0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49,
		0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45,
		0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40,
		0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32,
		0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26,
		0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20,
		0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14,
		0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	/*退保费用*/
	var surrenderCost = ICP * surrenderRate[i];
	/*退保后价值*/
	var surrenderValue = ICP * (1 - surrenderRate[i]) + A_C;
	/*每期缴费金额*/
	//var money = 1083;
	/*已缴费期数*/
	//var periods = 18;
	/*总本金*/
	var principal = money * periods;
	/*预计收益率*/
	//var percent = 0.07;

	/*初始化周期*/
	var T = 0;
	/*获取供款模式*/
	//var pattern="月供";
	/*根据供款模式选择*/
	switch(pattern) {
		case "月供":
			T = 12;
			break;
		case "季供":
			T = 4;
			break;
		case "半年供":
			T = 2;
			break;
		case "年供":
			T = 1;
			break;
	}
	/*月收益率*/
	var rate = Math.pow(1 + (percent / 100), 1 / T);
	/**/
	var policyFee1 = 0.005 / T;
	/**/
	var policyFee2 = -6.5;
	/**/
	var policyFee3 = 0.015 / T;
	/*账户管理费*/
	var accountFee = 0.04 / T;
	/*初始的现金价值/本金*/
	var cashValue_Principal = new Array(plan_periods);
	cashValue_Principal[i] = (ICP + A_C) / principal;
	/*初始的退保价值/本金*/
	var surrenderValue_Principal = new Array(plan_periods);
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
	/*初始化结束*/

	/*开始第一期缴费*/
	principal = principal + money;
	//A_C = money;
	A_C = money;
	//console.log(A_C);
	ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
	i++;
	cashValue = ICP + A_C;
	surrenderCost = ICP * surrenderRate[i];
	surrenderValue = cashValue - surrenderCost;
	cashValue_Principal[i] = (ICP + A_C) / principal;
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;

//var A=new Array();
//var I=new Array();
//设置标记，记录第一个相等点的坐标
var flag=0;
	/*循环开始下一期缴费*/
	for(i = 2; i <= 350; i++) {
		A_C = A_C * rate * (1 - policyFee3) - principal * policyFee1 + money;
		if(principal < money*plan_periods)
		{
			principal = principal + money;
		}
		ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
		//A[i]=A_C;
		//I[i]=ICP;

		cashValue = ICP + A_C;
		surrenderCost = ICP * surrenderRate[i];
		surrenderValue = cashValue - surrenderCost;
		cashValue_Principal[i] = (ICP + A_C) / principal;
		surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
		
		if(flag==0 && cashValue_Principal[i] == surrenderValue_Principal[i])
		{
			var x = i;
			var y = cashValue_Principal[i].toFixed(3);
			//falg置1，表示找到第一个相等的点
			flag=1;
		}
	}

	//初始图展示
	
	document.write("<title>模型计算结果的图表展示</title>");
	<!-- 为ECharts准备一个具备大小（宽高）的Dom -->
	document.write("<div id='main'  style='width: 350px;height:300px;'></div>");
	document.write("<div id='result'  style='width: 350px;height:300px;'><p>在第"+x+"期,比值第一次相等,比值为:"+y+"</p></div>");
	//document.write("<p>在第"+x+"期","比值第一次相等,比值为:"+y+"</p>");
	// 指定图表的配置项和数据
	var categories = new Array();
	for(var j = 0; j <= 324; j++) {
		categories[j] = "第" + j + "期";
	}
	var legends = new Array('现金价值/本金', '退保价值/本金');
	
	var myChart = echarts.init(document.getElementById('main'),'shine');
	
	var option = {
		title: {
                text: '初始图',
                x: 'center',
        		y: 30
            },
		tooltip: {
			trigger: 'axis',
			position:[40,300]
		},
		legend: {
			data: legends
		},
		toolbox: {
			show: true,
			feature: {
				mark: true,
				dataView: {
					readOnly: false
				},
				magicType: ['line', 'bar'],
				restore: true,
				saveAsImage: true
			}
		},

		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			data: categories,
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true,
			}
		}],
		series: [{
				
				name: '现金价值/本金',
				type: 'line',
				data: cashValue_Principal,
				markPoint: {
                data: [
                     {name: '某个坐标',coord: [x,y]},

                ]
            },
			},
			{
				name: '退保价值/本金',
				type: 'line',
				data: surrenderValue_Principal,
			}
		]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	
//续投12期

	var period=12;
	ICP=worth;
	A_C=0;
	var i = 0;
	/*初始化现金价值*/
	var cashValue = ICP + A_C;
    /*退保费用*/
	var surrenderCost = ICP * surrenderRate[i];
	/*退保后价值*/
	var surrenderValue = ICP * (1 - surrenderRate[i]) + A_C;
	/*总本金*/
	var principal = money * periods;
	/*初始化周期*/
	var T = 0;
	/*获取供款模式*/
	//var pattern="月供";
	/*根据供款模式选择*/
	switch(pattern) {
		case "月供":
			T = 12;
			break;
		case "季供":
			T = 4;
			break;
		case "半年供":
			T = 2;
			break;
		case "年供":
			T = 1;
			break;
	}
	/*月收益率*/
	var rate = Math.pow(1 + (percent / 100), 1 / T);
	/**/
	var policyFee1 = 0.005 / T;
	/**/
	var policyFee2 = -6.5;
	/**/
	var policyFee3 = 0.015 / T;
	/*账户管理费*/
	var accountFee = 0.04 / T;
	/*初始的现金价值/本金*/
	var cashValue_Principal = new Array(300);
	cashValue_Principal[i] = (ICP + A_C) / principal;
	/*初始的退保价值/本金*/
	var surrenderValue_Principal = new Array(plan_periods);
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
	/*初始化结束*/

	/*开始第一期缴费*/
	A_C = money;
	principal = principal + money;
	ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
	i++;
	cashValue = ICP + A_C;
	surrenderCost = ICP * surrenderRate[i];
	surrenderValue = cashValue - surrenderCost;
	cashValue_Principal[i] = (ICP + A_C) / principal;
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
	

//设置标记，记录第一个相等点的坐标
var flag1 = 0;
	/*循环开始下一期缴费*/
	for(i=2; i <= 350; i++) {
		A_C = A_C * rate * (1 - policyFee3) - principal * policyFee1 + money;
		if(principal < money*(periods+period-0))
		{
			principal = principal + money;
		}
		ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
		cashValue = ICP + A_C;
		surrenderCost = ICP * surrenderRate[i];
		surrenderValue = cashValue - surrenderCost;
		cashValue_Principal[i] = (ICP + A_C) / principal;
		surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
		
		if(flag1 == 0 && cashValue_Principal[i] == surrenderValue_Principal[i])
		{
			var x1 = i;
			var y1 = cashValue_Principal[i].toFixed(2);
			//falg置1，表示找到第一个相等的点
			flag1=1;
		}	
//console.log(cashValue_Principal[i]);
//console.log(surrenderValue_Principal[i]);
	}	
	
	document.write("<div id='main1'  style='width: 350px;height:300px;'></div>");
	document.write("<div id='result1'  style='width: 350px;height:300px;'><p>在第"+x1+"期,比值第一次相等,比值为:"+y1+"</p></div>");
	var myChart1 = echarts.init(document.getElementById('main1'),'shine');
	
	
var option1 = {
		title: {
                text: ' 续投12月',
                x: 'center',
        		y: 30
            },
		tooltip: {
			trigger: 'axis',
			position:[40,300]
		},
		legend: {
			data: legends
		},
		toolbox: {
			show: true,
			feature: {
				mark: true,
				dataView: {
					readOnly: false
				},
				magicType: ['line', 'bar'],
				restore: true,
				saveAsImage: true
			}
		},

		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			data: categories,
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true,
			}
		}],
		series: [{
				
				name: '现金价值/本金',
				type: 'line',
				data: cashValue_Principal,
				markPoint: {
                data: [
                     {name: '某个坐标',coord: [x1,y1]},

                ]
            },
			},
			{
				name: '退保价值/本金',
				type: 'line',
				data: surrenderValue_Principal,
			}
		]
	};
	myChart1.setOption(option1);
//续投24期

	var period=24;
	ICP=worth;
	A_C=0;
	var i = 0;
	/*初始化现金价值*/
	var cashValue = ICP + A_C;
    /*退保费用*/
	var surrenderCost = ICP * surrenderRate[i];
	/*退保后价值*/
	var surrenderValue = ICP * (1 - surrenderRate[i]) + A_C;
	/*每期缴费金额*/
	//var money = 1083;
	/*已缴费期数*/
	//var periods = 18;
	/*总本金*/
	var principal = money * periods;

	/*预计收益率*/
	//var percent = 0.07;

	/*初始化周期*/
	var T = 0;
	/*获取供款模式*/
	//var pattern="月供";
	/*根据供款模式选择*/
	switch(pattern) {
		case "月供":
			T = 12;
			break;
		case "季供":
			T = 4;
			break;
		case "半年供":
			T = 2;
			break;
		case "年供":
			T = 1;
			break;
	}
	/*月收益率*/
	var rate = Math.pow(1 + (percent / 100), 1 / T);
	/**/
	var policyFee1 = 0.005 / T;
	/**/
	var policyFee2 = -6.5;
	/**/
	var policyFee3 = 0.015 / T;
	/*账户管理费*/
	var accountFee = 0.04 / T;
	/*初始的现金价值/本金*/
	var cashValue_Principal = new Array(300);
	cashValue_Principal[i] = (ICP + A_C) / principal;
	/*初始的退保价值/本金*/
	var surrenderValue_Principal = new Array(plan_periods);
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
	/*初始化结束*/

	/*开始第一期缴费*/
	A_C = money;
	principal = principal + money;
	ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
	i++;
	cashValue = ICP + A_C;
	surrenderCost = ICP * surrenderRate[i];
	surrenderValue = cashValue - surrenderCost;
	cashValue_Principal[i] = (ICP + A_C) / principal;
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
var flag2=0;
	/*循环开始下一期缴费*/
	for(i = 2; i <= 350; i++) {
		A_C = A_C * rate * (1 - policyFee3) - principal * policyFee1 + money;
		if(principal < money*(periods+period))
		{
			principal = principal + money;
		}
		ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
		cashValue = ICP + A_C;
		surrenderCost = ICP * surrenderRate[i];
		surrenderValue = cashValue - surrenderCost;
		cashValue_Principal[i] = (ICP + A_C) / principal;
		surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
		if(flag2 == 0 && cashValue_Principal[i] == surrenderValue_Principal[i])
		{
			var x2 = i;
			var y2 = cashValue_Principal[i].toFixed(2);
			//falg置1，表示找到第一个相等的点
			flag2=1;
		}	

	}	
	document.write("<div id='main2'  style='width: 350px;height:300px;'></div>");
	document.write("<div id='result2'  style='width: 350px;height:300px;'><p>在第"+x2+"期,比值第一次相等,比值为:"+y2+"</p></div>");
	var myChart2 = echarts.init(document.getElementById('main2'),'shine');
	
var option2 = {
		title: {
                text: ' 续投24月',
                x: 'center',
        		y: 30
            },
		tooltip: {
			trigger: 'axis',
			position:[40,300]
		},
		legend: {
			data: legends
		},
		toolbox: {
			show: true,
			feature: {
				mark: true,
				dataView: {
					readOnly: false
				},
				magicType: ['line', 'bar'],
				restore: true,
				saveAsImage: true
			}
		},

		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			data: categories,
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true,
			}
		}],
		series: [{
				
				name: '现金价值/本金',
				type: 'line',
				data: cashValue_Principal,
				markPoint: {
                data: [
                     {name: '某个坐标',coord: [x2,y2]},

                ]
            },
			},
			{
				name: '退保价值/本金',
				type: 'line',
				data: surrenderValue_Principal,
			}
		]
	};
	myChart2.setOption(option2);

//续投36期

	var period=36;
	ICP=worth;
	A_C=0;
	var i = 0;
	/*初始化现金价值*/
	var cashValue = ICP + A_C;
    /*退保费用*/
	var surrenderCost = ICP * surrenderRate[i];
	/*退保后价值*/
	var surrenderValue = ICP * (1 - surrenderRate[i]) + A_C;
	/*每期缴费金额*/
	//var money = 1083;
	/*已缴费期数*/
	//var periods = 18;
	/*总本金*/
	var principal = money * periods;

	/*预计收益率*/
	//var percent = 0.07;

	/*初始化周期*/
	var T = 0;
	/*获取供款模式*/
	//var pattern="月供";
	/*根据供款模式选择*/
	switch(pattern) {
		case "月供":
			T = 12;
			break;
		case "季供":
			T = 4;
			break;
		case "半年供":
			T = 2;
			break;
		case "年供":
			T = 1;
			break;
	}
	/*月收益率*/
	var rate = Math.pow(1 + (percent / 100), 1 / T);
	/**/
	var policyFee1 = 0.005 / T;
	/**/
	var policyFee2 = -6.5;
	/**/
	var policyFee3 = 0.015 / T;
	/*账户管理费*/
	var accountFee = 0.04 / T;
	/*初始的现金价值/本金*/
	var cashValue_Principal = new Array(300);
	cashValue_Principal[i] = (ICP + A_C) / principal;
	/*初始的退保价值/本金*/
	var surrenderValue_Principal = new Array(plan_periods);
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
	/*初始化结束*/

	/*开始第一期缴费*/
	A_C = money;
	principal = principal + money;
	ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
	i++;
	cashValue = ICP + A_C;
	surrenderCost = ICP * surrenderRate[i];
	surrenderValue = cashValue - surrenderCost;
	cashValue_Principal[i] = (ICP + A_C) / principal;
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
var flag3=0;
	/*循环开始下一期缴费*/
	for(i = 2; i <= 350; i++) {
		A_C = A_C * rate * (1 - policyFee3) - principal * policyFee1 + money;
		if(principal < money*(periods+period))
		{
			principal = principal + money;
		}
		ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
		cashValue = ICP + A_C;
		surrenderCost = ICP * surrenderRate[i];
		surrenderValue = cashValue - surrenderCost;
		cashValue_Principal[i] = (ICP + A_C) / principal;
		surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
		if(flag3 == 0 && cashValue_Principal[i] == surrenderValue_Principal[i])
		{
			var x3 = i;
			var y3 = cashValue_Principal[i].toFixed(2);
			//falg置1，表示找到第一个相等的点
			flag3=1;
		}	

	}	
	document.write("<div id='main3'  style='width: 350px;height:300px;'></div>");
	document.write("<div id='result3'  style='width: 350px;height:300px;'><p>在第"+x3+"期,比值第一次相等,比值为:"+y3+"</p></div>");
	var myChart3 = echarts.init(document.getElementById('main3'),'shine');
	
var option3 = {
		title: {
                text: ' 续投36月',
                x: 'center',
        		y: 30
            },
		tooltip: {
			trigger: 'axis',
			position:[40,300]
		},
		legend: {
			data: legends
		},
		toolbox: {
			show: true,
			feature: {
				mark: true,
				dataView: {
					readOnly: false
				},
				magicType: ['line', 'bar'],
				restore: true,
				saveAsImage: true
			}
		},

		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			data: categories,
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true,
			}
		}],
		series: [{
				
				name: '现金价值/本金',
				type: 'line',
				data: cashValue_Principal,
				markPoint: {
                data: [
                     {name: '某个坐标',coord: [x3,y3]},

                ]
            },
			},
			{
				name: '退保价值/本金',
				type: 'line',
				data: surrenderValue_Principal,
			}
		]
	};
	myChart3.setOption(option3);
//续投60期

	var period=60;
	ICP=worth;
	A_C=0;
	var i = 0;
	/*初始化现金价值*/
	var cashValue = ICP + A_C;
    /*退保费用*/
	var surrenderCost = ICP * surrenderRate[i];
	/*退保后价值*/
	var surrenderValue = ICP * (1 - surrenderRate[i]) + A_C;
	/*每期缴费金额*/
	//var money = 1083;
	/*已缴费期数*/
	//var periods = 18;
	/*总本金*/
	var principal = money * periods;

	/*预计收益率*/
	//var percent = 0.07;

	/*初始化周期*/
	var T = 0;
	/*获取供款模式*/
	//var pattern="月供";
	/*根据供款模式选择*/
	switch(pattern) {
		case "月供":
			T = 12;
			break;
		case "季供":
			T = 4;
			break;
		case "半年供":
			T = 2;
			break;
		case "年供":
			T = 1;
			break;
	}
	/*月收益率*/
	var rate = Math.pow(1 + (percent / 100), 1 / T);
	/**/
	var policyFee1 = 0.005 / T;
	/**/
	var policyFee2 = -6.5;
	/**/
	var policyFee3 = 0.015 / T;
	/*账户管理费*/
	var accountFee = 0.04 / T;
	/*初始的现金价值/本金*/
	var cashValue_Principal = new Array(300);
	cashValue_Principal[i] = (ICP + A_C) / principal;
	/*初始的退保价值/本金*/
	var surrenderValue_Principal = new Array(plan_periods);
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
	/*初始化结束*/

	/*开始第一期缴费*/
	A_C = money;
	principal = principal + money;
	ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
	i++;
	cashValue = ICP + A_C;
	surrenderCost = ICP * surrenderRate[i];
	surrenderValue = cashValue - surrenderCost;
	cashValue_Principal[i] = (ICP + A_C) / principal;
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;

var flag4=0;
	/*循环开始下一期缴费*/
	for(i = 2; i <= 350; i++) {
		
		if(principal < money*(periods+period))
		{
			principal = principal + money;
		}
		A_C = A_C * rate * (1 - policyFee3) - principal * policyFee1 + money;
		ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
		cashValue = ICP + A_C;
		surrenderCost = ICP * surrenderRate[i];
		surrenderValue = cashValue - surrenderCost;
		cashValue_Principal[i] = (ICP + A_C) / principal;
		surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
		if(flag4 == 0 && cashValue_Principal[i] == surrenderValue_Principal[i])
		{
			var x4 = i;
			var y4 = cashValue_Principal[i].toFixed(2);
			//falg置1，表示找到第一个相等的点
			flag4=1;
		}	

	}	
	document.write("<div id='main4'  style='width: 350px;height:300px;'></div>");
	document.write("<div id='result4'  style='width: 350px;height:300px;'><p>在第"+x4+"期,比值第一次相等,比值为:"+y4+"</p></div>");
	var myChart4 = echarts.init(document.getElementById('main4'),'shine');

	
var option4 = {
		title: {
                text: ' 续投60月',
                x: 'center',
        		y: 30
            },
		tooltip: {
			trigger: 'axis',
			position:[40,300]
		},
		legend: {
			data: legends
		},
		toolbox: {
			show: true,
			feature: {
				mark: true,
				dataView: {
					readOnly: false
				},
				magicType: ['line', 'bar'],
				restore: true,
				saveAsImage: true
			}
		},

		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			data: categories,
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true,
			}
		}],
		series: [{
				
				name: '现金价值/本金',
				type: 'line',
				data: cashValue_Principal,
				markPoint: {
                data: [
                     {name: '某个坐标',coord: [x4,y4]},

                ]
            },
			},
			{
				name: '退保价值/本金',
				type: 'line',
				data: surrenderValue_Principal,
			}
		]
	};
	myChart4.setOption(option4);

//续投120期

	var period=120;
	ICP=worth;
	A_C=0;
	var i = 0;
	/*初始化现金价值*/
	var cashValue = ICP + A_C;
    /*退保费用*/
	var surrenderCost = ICP * surrenderRate[i];
	/*退保后价值*/
	var surrenderValue = ICP * (1 - surrenderRate[i]) + A_C;
	/*每期缴费金额*/
	//var money = 1083;
	/*已缴费期数*/
	//var periods = 18;
	/*总本金*/
	var principal = money * periods;

	/*预计收益率*/
	//var percent = 0.07;

	/*初始化周期*/
	var T = 0;
	/*获取供款模式*/
	//var pattern="月供";
	/*根据供款模式选择*/
	switch(pattern) {
		case "月供":
			T = 12;
			break;
		case "季供":
			T = 4;
			break;
		case "半年供":
			T = 2;
			break;
		case "年供":
			T = 1;
			break;
	}
	/*月收益率*/
	var rate = Math.pow(1 + (percent / 100), 1 / T);
	/**/
	var policyFee1 = 0.005 / T;
	/**/
	var policyFee2 = -6.5;
	/**/
	var policyFee3 = 0.015 / T;
	/*账户管理费*/
	var accountFee = 0.04 / T;
	/*初始的现金价值/本金*/
	var cashValue_Principal = new Array(300);
	cashValue_Principal[i] = (ICP + A_C) / principal;
	/*初始的退保价值/本金*/
	var surrenderValue_Principal = new Array(plan_periods);
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
	/*初始化结束*/

	/*开始第一期缴费*/
	A_C = money;
	principal = principal + money;
	ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
	i++;
	cashValue = ICP + A_C;
	surrenderCost = ICP * surrenderRate[i];
	surrenderValue = cashValue - surrenderCost;
	cashValue_Principal[i] = (ICP + A_C) / principal;
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
	var flag5=0;

	/*循环开始下一期缴费*/
	for(i = 2; i <= 350; i++) {
		A_C = A_C * rate * (1 - policyFee3) - principal * policyFee1 + money;
		if(principal < money*(periods+period))
		{
			principal = principal + money;
		}
		ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
		cashValue = ICP + A_C;
		surrenderCost = ICP * surrenderRate[i];
		surrenderValue = cashValue - surrenderCost;
		cashValue_Principal[i] = (ICP + A_C) / principal;
		surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
		if(flag5 == 0 && cashValue_Principal[i] == surrenderValue_Principal[i])
		{
			var x5 = i;
			var y5 = cashValue_Principal[i].toFixed(2);
			//falg置1，表示找到第一个相等的点
			flag5=1;
		}	

	}	
	
	
	document.write("<div id='main5'  style='width: 350px;height:300px;'></div>");
	document.write("<div id='result5'  style='width: 350px;height:300px;'><p>在第"+x5+"期,比值第一次相等,比值为:"+y5+"</p></div>");
	var myChart5 = echarts.init(document.getElementById('main5'),'shine');
	
var option5 = {
		title: {
                text: ' 续投120月',
                x: 'center',
        		y: 30
            },
		tooltip: {
			trigger: 'axis',
			position:[40,300]
		},
		legend: {
			data: legends
		},
		toolbox: {
			show: true,
			feature: {
				mark: true,
				dataView: {
					readOnly: false
				},
				magicType: ['line', 'bar'],
				restore: true,
				saveAsImage: true
			}
		},

		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			data: categories,
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true,
			}
		}],
		series: [{
				
				name: '现金价值/本金',
				type: 'line',
				data: cashValue_Principal,
				markPoint: {
                data: [
                     {name: '某个坐标',coord: [x5,y5]},

                ]
            },
			},
			{
				name: '退保价值/本金',
				type: 'line',
				data: surrenderValue_Principal,
			}
		]
	};
	myChart5.setOption(option5);	
}

<template>
	<div class="main-page">
		<div class="div29">
			<div class="div">
				<img src="@/assets/banner.png" class="img"/>
			</div>
			<div class="div28">
				<vant-custom-tab class="vantCustomTab">
					<van-tab title="天使阳光基金">
						<div class="div3">
							<div class="hairline-bottom div1">
								申请条件:
							</div>
							<div class="div2">
								0～14周岁患有先天性心脏病的泸州籍贫困家庭儿童，其法定监护人可通过户籍地区县红十字会向
								<span class="goText">
									“天使阳光基金”
								</span>
								提出资助申请。
							</div>
						</div>
						<div class="div6">
							<div class="hairline-bottom div4">
								联系电话：
							</div>
							<div class="div5">
                                <a class="goText1" href="tel: 0830-2290436">0830-2290436</a>
								<!-- <span class="goText1">
									0830-2290436
								</span> -->
								<img @click="peophe('0830-2290436')" src="@/assets/cellphone.png" class="img2"/>
							</div>
						</div>
						<div class="div13">
							<div class="hairline-bottom div7">
								基金申请流程:
							</div>
							<div class="div12">
								<div class="cercal1 cercal div8">
									登录“中国红十字基金会”网站下载（或前往居住地就近的红十字会领取）填写《天使阳光基金资助申请表》。
								</div>
								<div class="cercal2 cercal div9">
									患儿及法定监护人户口簿（含首页）复印件。（如户口簿无法证实监护关系的，须提供患儿《出生医学证明》复印件）
								</div>
								<div class="cercal3 cercal div10">
									患儿法定监护人身份证复印件。
								</div>
								<div class="cercal4 cercal div11">
									患儿最新病情医学检查报告（超声心动图检查报告等）复印件。 以上资料齐全后提交至患儿户口所在地区县级红十字会。
								</div>
							</div>
						</div>
					</van-tab>
					<van-tab title="小天使基金">
						<div class="div16">
							<div class="hairline-bottom div14">
								申请条件:
							</div>
							<div class="div15">
								0～14周岁患有白血病的泸州籍贫困家庭儿童，其法定监护人可通过户籍地区县红十字会向
								<span class="goText2">
									“小天使基金”
								</span>
								提出资助申请。
							</div>
						</div>
						<div class="div19">
							<div class="hairline-bottom div17">
								联系电话：
							</div>
							<div class="div18">
                                <a class="goText3" href="tel: 0830-2290436">0830-2290436</a>
								<!-- <span class="goText3">
									0830-2290436
								</span> -->
								<img @click="peophe('0830-2290436')" src="@/assets/cellphone.png" class="img2"/>
							</div>
						</div>
						<div class="div27">
							<div class="hairline-bottom div20">
								基金申请流程:
							</div>
							<div class="div26">
								<div class="cercal cercalB1 div21">
									登录中国红基会官网下载（或前往居住地就近的红十字会领取）小天使基金资助申请表；
								</div>
								<div class="cercal cercalB2 div22">
									患儿及法定监护人户口簿（含首页）复印件。（如户口簿无法证实监护关系的，须提供患儿《出生医学证明》复印件）；
								</div>
								<div class="cercal cercalB3 div23">
									患儿法定监护人身份证复印件；
								</div>
								<div class="cercal cercalB4 div24">
									患儿当年近三个月内的病情诊断证明、骨髓检查报告等复印件。
								</div>
								<div class="cercal cercalB5 div25">
									资料提交至所在地县（市）级红十字会。
								</div>
							</div>
						</div>
					</van-tab>
				</vant-custom-tab>
			</div>
		</div>
	</div>
</template>

<script>
	
	
	export default {
		components: {
      
		},
		props: {},
		data() {
      return {}
		},
		methods: {
			peophe (peophe) {
                console.log('peophe===', peophe)
                window.location.href = 'tel://' + peophe;
            }
		}
	}
</script>

<style lang="less"  scoped>

.main-page { 
	 
}
.img { 
	max-width:100%; 
}
.div { 
	padding-bottom:10px;
	padding:0 15px; 
}
.div1 { 
	align-items:center;
	height:50px;
	font-size:16px;
	color:#222;
	font-family:PingFangSC-Medium;
	display:flex;
	display:-webkit-flex;
	padding:14px 0;
	margin-left:16px;
	margin-top:10px; 
}
.goText { 
	font-family:PingFangSC-Regular;
	font-size:16px;
	color:#DF3031;
	line-height:22px; 
}
.div2 { 
	font-family:PingFangSC-Regular;
	font-size:16px;
	color:#222222;
	padding:14px 16px; 
}
.div3 { 
	background:#fff; 
}
.div4 { 
	align-items:center;
	height:50px;
	font-size:16px;
	color:#222;
	font-family:PingFangSC-Regular;
	display:flex;
	display:-webkit-flex;
	padding:14px 0;
	margin-left:16px;
	margin-top:10px; 
}
.goText1 { 
    color: #007AFF;
	min-width:130px; 
}
.img1 { 
	max-width:7%;
	margin-left:175px; 
}
.div5 { 
	height:50px;
	color:#007AFF;
	font-family:PingFangSC-Regular;
	align-items:center;
	display:flex;
	display:-webkit-flex;
	font-size:16px;
	padding:14px 16px; 
}
.div6 { 
	background:#fff; 
}
.div7 { 
	align-items:center;
	height:50px;
	font-size:16px;
	color:#222;
	font-family:PingFangSC-Regular;
	display:flex;
	display:-webkit-flex;
	padding:14px 0;
	margin-left:16px;
	margin-top:10px; 
}
.div8 { 
	padding:14px 16px;
	padding-left:50px; 
}
.div9 { 
	padding:14px 16px;
	padding-left:50px; 
}
.div10 { 
	padding:14px 16px;
	padding-left:50px; 
}
.div11 { 
	padding:14px 16px;
	padding-left:50px; 
}
.div12 { 
	font-family:PingFangSC-Regular;
	font-size:18px;
	color:#222222;
	text-align:justify; 
}
.div13 { 
	background:#ffffff!important; 
}
.div14 { 
	align-items:center;
	height:50px;
	font-size:16px;
	color:#222;
	font-family:PingFangSC-Medium;
	display:flex;
	display:-webkit-flex;
	padding:14px 0;
	margin-left:16px;
	margin-top:10px; 
}
.goText2 { 
	font-family:PingFangSC-Regular;
	font-size:16px;
	color:#DF3031;
	line-height:22px; 
}
.div15 { 
	font-family:PingFangSC-Regular;
	font-size:16px;
	color:#222222;
	padding:14px 16px; 
}
.div16 { 
	background:#fff; 
}
.div17 { 
	align-items:center;
	height:50px;
	font-size:16px;
	color:#222;
	font-family:PingFangSC-Regular;
	display:flex;
	display:-webkit-flex;
	padding:14px 0;
	margin-left:16px;
	margin-top:10px; 
}
.goText3 { 
    color: #007AFF;
	min-width:130px; 
}
.img2 { 
	max-width:7%;
	margin-left:175px; 
}
.div18 { 
	height:50px;
	color:#007AFF;
	font-family:PingFangSC-Regular;
	align-items:center;
	display:flex;
	display:-webkit-flex;
	font-size:16px;
	padding:14px 16px; 
}
.div19 { 
	background:#fff; 
}
.div20 { 
	align-items:center;
	height:50px;
	font-size:16px;
	color:#222;
	font-family:PingFangSC-Regular;
	display:flex;
	display:-webkit-flex;
	padding:14px 0;
	margin-left:16px;
	margin-top:10px; 
}
.div21 { 
	padding:14px 16px;
	padding-left:50px; 
}
.div22 { 
	padding:14px 16px;
	padding-left:50px; 
}
.div23 { 
	padding:14px 16px;
	padding-left:50px; 
}
.div24 { 
	padding:14px 16px;
	padding-left:50px; 
}
.div25 { 
	padding:14px 16px;
	padding-left:50px; 
}
.div26 { 
	font-family:PingFangSC-Regular;
	font-size:18px;
	color:#222222;
	text-align:justify; 
}
.div27 { 
	background:#fff; 
}
.vantCustomTab { 
	background:#F8F8FB; 
}
.div28 { 
	background:#F8F8FB; 
}
.div29 { 
	min-height:1200px;
	background:#F8F8FB; 
}

.main-page {

}
.hairline-bottom{position: relative;border:none;}
.hairline-bottom::after{content: '';position: absolute;left: 0;bottom: 0;background: #DDDEE3;width: 100%;height: 1px;-webkit-transform: scale(1,.5);transform: scale(1,.5);-webkit-transform-origin: center bottom;transform-origin: center bottom;}
.cercal{
  position: relative;
}
.cercal::before{
  color: #fff;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #DF3031;
  font-size: 18px;
  text-align: center;
  left: 16px;
}
.cercal::after{
  content: '';
  width: 2px;
  background-color: #DF3031;
  position: absolute;
  left: 27px;
}
.cercal1::after{
  height: 70%;
  bottom: -10px;
}
.cercal2::after{
  height: 75%;
  bottom: -10px;
}
.cercal3::after{
  height: 40%;
  bottom: -10px;
}
.cercal1::before{
  content: '1';
}
.cercal2::before{
  content: '2';
}
.cercal3::before{
  content: '3';
}
.cercal4::before{
  content: '4';
}
.cercalB1::before{
  content: '1';
}
.cercalB2::before{
  content: '2';
}
.cercalB3::before{
  content: '3';
}
.cercalB4::before{
  content: '4';
}
.cercalB5::before{
  content: '5';
}
.cercalB1::after{
  height: 70%;
  bottom: -10px;
}
.cercalB2::after{
  height: 75%;
  bottom: -10px;
}
.cercalB3::after{
  height: 40%;
  bottom: -10px;
}
.cercalB4::after{
  height: 60%;
  bottom: -10px;
}

</style>

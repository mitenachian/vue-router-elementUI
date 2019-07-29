<template>
	<div>
		<el-row>
			<h3>Callback + Promise</h3>
			<el-link href="https://codepen.io/mitenachian/pen/GVrjGo?editors=0011" target="_blank"> CodePen </el-link>
		</el-row>
		<el-row>
			<pre>
				function getRandomEmail(){
					let email;
					$.getJSON('https://randomuser.me/api', function(data){
					email = data.results[0].email;
					}); // 這個ajax非同步呼叫,無法確保會在下面的return之前
				return email;
				}
				const email = getRandomEmail();
				console.log(email);
				// 上面的email 會等於undefined, 因為非同步呼叫在ajax執行完就已經先return getRandomEmail的return了



				//上面錯誤的解法 使用callback function 呼叫非同步涵式的設計方法
				function getRandomEmail2(callback){
					$.getJSON('https://randomuser.me/api', function(data){
					callback(data.results[0].email);
					});
				}

				getRandomEmail2(function(email2){
				console.log(email2);
				});

				//假設我要連續取三個或是多個email 會變callback hell如下
				// 三個getEmail會依序執行..
				const emails=[];
				getRandomEmail2(function(email2){
				emails.push(email2);
				getRandomEmail2(function(email2){
					emails.push(email2);
					getRandomEmail2(function(email2){
					emails.push(email2);
					console.log(emails);
					});
				});
				});

				// 所以promise就產生了(為了解決回呼地獄)
				// Promise就是把callback進一步的包裝變成一個promise物件
				function getRandomEmail3(){
				return new Promise(function(resolve,reject){
					$.getJSON('https://randomuser.me/api', function(data){
					resolve(data.results[0].email);
					});
				});
				}
				const emil3_s = [];
				// .then中傳入一個call back 可以return任何東西(用在後面的.then的輸入)
				getRandomEmail3()
				.then(function(email){
				emil3_s.push(email);
				return getRandomEmail3(); //promise
				})
				.then(function(email){
				emil3_s.push(email);
				return getRandomEmail3();
				})
				.then(function(email){
				emil3_s.push(email);
				console.log(emil3_s);
				})

				//ES8語法中有個async await 讓promise當成類似同步來執行 (非常接近) 需要babel轉換
				const email4s = [];
				async function getEmails(){
				let email;
				email4s.push( await getRandomEmail3());
				email4s.push( await getRandomEmail3());
				email4s.push( await getRandomEmail3());
				email4s.push( await getRandomEmail3());
				console.log(email4s);
				}
				getEmails();
			</pre>
		</el-row>
	</div>
</template>
<script>

export default {

}
</script>
<style scoped>
  .titleName {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
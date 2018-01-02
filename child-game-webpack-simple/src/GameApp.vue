<template>
	<div class="app-game">
<div class="stats">
	<div>答了{{stats.number}}题</div>
	<div>对了{{stats.right}}题</div>
	<div>错了{{stats.wrong}}题</div>
</div>

<flash ref="flash"/>
<h1 class="question-panel" >{{ test.question }}= {{ test.answer }}</h1>
<input-number-panel v-on:inputed="answered"></input-number-panel>

</div>
</template>
<script>
import InputNumberPanel from './InputNumberPanel.vue';
import Flash from './Flash.vue';
export default {
	name: "app-game",
	components: {
		'input-number-panel': InputNumberPanel,
		'flash': Flash,
	},
	data() {
		return {
			test: {question: "1+1", answer: "?"	},
			flash: "",
			stats: {
				right: 0,
				wrong: 0,
				number: 0
			}
		}
	},
	methods: {
		answered(v) {
			
			this.test.answer = v;
			this.stats.number ++;
			//check
			if (eval(this.test.question) == this.test.answer) {
				this.stats.right++;
				this.$refs.flash.succ("答对了！你真棒！再出一题")
				
				
				//final next question
				var $this = this;
				setTimeout(function() {
					$this.new_question();
				},1000);
			}else{
				this.stats.wrong++;
				this.$refs.flash.error("不对，再试一次？");
			}
 		},
		new_question() {
			this.test.answer = '?'
			this.test.question =  this.create_question()
			
			this.$refs.flash.message("试试看？");
		},
		create_question() {
			var num = _.random(2,3);
			var flag = function() { return _.random(1)  ?  '+' : '-' };
			
			while(true){
				var question = _.random(1,9);
				var num2 = num - 1;
				while(num2--> 0) {
					question = question + flag()
					question   = question + _.random(1,9)
				}
				if (eval(question) > 0)  return question;
			}
			
		},
		
		pausecomp(millis)
		{
			var date = new Date();
			var curDate = null;
			do { curDate = new Date(); }
			while(curDate-date < millis);
		}
	}

}
</script>
<style>
.question-panel {
font-size: 5em;
color: blue;
text-align: center;
}
.stats {
color: grey;
float: right;
}
</style>

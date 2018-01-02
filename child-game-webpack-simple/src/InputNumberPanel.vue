<template>
		<div class="input_number_panel">
			 <ul>
			 <li v-for="v in values" @click="choose(v)"><button>{{ v }}</button></li>
			 </ul>
		</div>
</template>

<script>
export default {
	name: 'input-number-panel',
  data () {
    return {
				values: _.range(1,101) ,
				value: null
    }
  },
  methods: {
				 choose(v) {
				 this.value = v;
				 this.$emit('inputed', v)
				}
	}
}
</script>

<style lang="scss">
.input_number_panel ul  {
		list-style-type: none;
		width: 700px;

		li {
									margin: 0;
									padding: 0;
									display: inline-block;
									button {
																		width: 70px;
																		height: 70px;
									}
		}
}

</style>

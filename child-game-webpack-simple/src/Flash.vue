<template>
		<h1 v-bind:class="classObject">{{msg}}</h1>
</template>

<script>

export default {
name: 'flash',
props: ['flash'],
methods: {
succ(msg) { this.classObject.succ = true; this.classObject.error = false; this.msg = msg;},
error(msg) {this.classObject.succ = false; this.classObject.error = true; this.msg = msg;},
message(msg) { this.classObject.succ = this.classObject.error = false; this.msg = msg; }
},
data() {
return {
msg: "",
classObject: {
"flash": true,
"succ" : false,
"error": false
}
}
},

}
</script>

<style lang="scss">
.flash {
text-align: center;
font-size:  5em;
color: grey;
&.error {
color: red;
}
&.succ {
color: green;
}
}

</style>


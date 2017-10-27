<template>
    <label class="upload custom-file">
        <input type="file" id="file2" class="custom-file-input" @change="onUpload" :accept="accept">
        <span class="custom-file-control text-left">{{fileName}}</span>
    </label>
</template>
<script>
    export default ({
        name: 'upload',
        props: ['accept'],
        data() {
            return {
                fileName: ''
            }
        },
        methods: {
            onUpload: function (e) {
                let fileObj = e.target.files[0];
                this.fileName = fileObj.name;
                console.log(fileObj);
                this.$emit('on-change', fileObj);
//                let _formData = new FormData();
//                _formData.append("accountnum", e.target.files[0]);
//                console.log(fileObj, _formData)
            }
        }
    })
</script>

<template>
    <div>page</div>
    <div class="page-btn-bar">
        <common-btn class="primary">Save</common-btn>
    </div>

    <Form @submit="saveFun" v-slot="{meta}">
        <div>
            <Field name="key" rules="required|key" v-slot="{field, meta}">
                <CommonField required
                             :success="meta.valid"
                             :error="meta.errors.length > 0 && !meta.valid">
                    <template #label>key!</template>
                    <input type="text"
                           v-model="field_key"
                           v-bind="field"
                           :class="{error: meta.errors.length > 0  && !meta.valid, success: meta.valid}"
                           placeholder="key"
                    />
                    <template #validate>
                        <ErrorMessage name="key"/>
                    </template>
                </CommonField>
            </Field>
        </div>
    </Form>
<!--    <div class="form-set">-->

        <common-field label="텍스트라벨" required>
            <input type="text" v-model="textVal">
            <template #validate>Validation Message.</template>
        </common-field>
        <common-field required error>
            <template #label>슬롯라벨</template>
            <input type="text" class="error" v-model="textVal">
            <template #validate>Validation Message.</template>
        </common-field>
        <common-field label="label" required success>
            <input type="text" class="success" v-model="textVal">
            <template #validate>Validation Message.</template>
        </common-field>

<!--        <br><br><br>-->

        <common-field label="Textarea" required>
            <textarea v-model="textVal"></textarea>
            <template #validate>Validation Message.</template>
        </common-field>
        <common-field label="Textarea" required error>
            <textarea class="error" v-model="textVal"></textarea>
            <template #validate>Validation Message.</template>
        </common-field>
        <common-field label="Textarea" required success>
            <textarea class="success" v-model="textVal"></textarea>
            <template #validate>Validation Message.</template>
        </common-field>

<!--        <br><br><br>-->

        <common-field label="boolean 버튼 : true/false" >
            <common-boolean v-model="boolVal1" />
        </common-field>
        <div>boolVal1 : {{boolVal1}}</div>
        <br>
        <common-field label="boolean 버튼 : Y/N">
            <common-boolean v-model="boolVal2" :name="['Yes','No']" :val="['Y','N']" />
        </common-field>
        <div>boolVal2 : {{boolVal2}}</div>

        <br><br><br>
        <common-field label="Checkbox" required>
            <div>
                <label><input type="checkbox" value="checkVal1" v-model="checkedNames">체크1</label>
                <label><input type="checkbox" value="checkVal2" v-model="checkedNames">체크2</label>
                <label><input type="checkbox" value="checkVal3" v-model="checkedNames">체크3</label>
            </div>
            <template #validate>Validation Message.</template>
        </common-field>
<!--        <div>Checked names: {{ checkedNames }}</div>-->

<!--        <br><br><br>-->

        <common-field label="Radio" required>
            <div>
                <label><input type="radio" value="One" v-model="RadioVal">라디오1</label>
                <label><input type="radio" value="Two" v-model="RadioVal">라디오2</label>
                <label><input type="radio" value="Three" v-model="RadioVal">라디오3</label>
            </div>
            <template #validate>Validation Message.</template>
        </common-field>
        <p>RadioVal : {{RadioVal}}</p>

<!--        <br><br><br>-->

<!--        <common-field label="Custom selectbox" required>-->
<!--            <common-select v-model="selectVal" :options="selectOption" @change="changeEvent" />-->
<!--            <template #validate>Validation Message.</template>-->
<!--        </common-field>-->
<!--        <p>selectVal : {{selectVal}}</p>-->
<!--        <br><br><br>-->

<!--    </div>-->
    <div class="page-btn-bar">
        <common-btn class="primary">Save</common-btn>
    </div>
</template>

<script setup lang="ts">
const textVal = ref('텍스트')
const selectVal = ref('a')
const boolVal1 = ref(false)
const boolVal2 = ref('N')
const checkedNames = ref([])
const RadioVal = ref('One')

const selectOption = ref<{label:String, value:String}[]>([
    { label:'항목1', value:'a' },
    { label:'항목2', value:'b' },
    { label:'항목3', value:'c' }
])

function changeEvent (val) {
    console.log(val)
}
function saveFun(){
    console.log('in')
}
</script>

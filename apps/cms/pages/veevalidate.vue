<template>
    <Field :name="$t('form.key')" rules="required|key" v-slot="{field, meta}">
        <CommonField required
                     :success="meta.valid"
                     :error="meta.errors.length > 0 && !meta.valid">
            <template #label>{{ $t('form.key') }}</template>
            <input type="text"
                   v-model="field_key"
                   v-bind="field"
                   :class="{error: meta.errors.length > 0  && !meta.valid, success: meta.valid}"
                   :placeholder="$t('form.key')"
            />
            <template #validate>
                <ErrorMessage :name="$t('form.key')"/>
            </template>
        </CommonField>
    </Field>
</template>

<script>
export default {
    name: "veevalidate"
}
</script>

<style scoped>

</style>
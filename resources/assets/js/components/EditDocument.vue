<template>
    <div v-if="field.config.exists" :class="{'d-inline-block': this.inline}">
        <input type="hidden" :value="field.value" :name="field.name">

        <a :href="'#edit-document'+this.id" data-toggle="modal" v-bind="fieldAttributes" class="btn btn-primary">
            <template v-if="field.label">
                {{ field.label }}
            </template>
            <template v-else>
                <i class="fa fa-pencil"></i> Edit
            </template>
        </a>

        <div :id="'edit-document'+this.id" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit document</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <documenteditor-field :field="content" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="saveContent" data-dismiss="modal">
                            Save
                        </button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DocumentEditor from "./DocumentEditor";
    export default {
        components: {DocumentEditor},
        props: ['field', 'inline'],

        data() {
            return {
                id: Math.random().toString(36).substr(2, 9),
                content: {
                    label: null,
                    name: 'custom-content',
                    config: {
                        is_translatable: false,
                        placeholders: this.field.config.placeholders,
                    },
                    value: this.field.value
                }
            }
        },

        methods: {
            saveContent() {
                this.field.value = this.content.value;
            }
        }
    }
</script>

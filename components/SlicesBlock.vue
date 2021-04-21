<template>
    <main>
        <!-- Slice section template -->
        <div v-for="(slice, index) in slices" :key="'slice-' + index">
            
            <template v-if="slice.slice_type === 'stage'">
                <slice-stage :slice="slice"/>
            </template>

            <template v-else-if="slice.slice_type === 'campus'">
                <slice-campus :slice="slice"/>
            </template>

            <template v-else-if="slice.slice_type === 'community'">
                <slice-community :slice="slice"/>
            </template>

            <template v-else-if="slice.slice_type === 'life'">
                <slice-life :slice="slice"/>
            </template>

            <template v-else-if="slice.slice_type === 'spaces'">
                <slice-spaces :slice="slice"/>
            </template>

            <template v-else-if="slice.slice_type === 'services'">
                <slice-services :slice="slice"/>
            </template>
            
            <template v-else-if="slice.slice_type === 'member'">
                <slice-member :slice="slice"/>
            </template>
        </div>
    </main>
</template>

<script>
// Imports for all slices
const SliceStage = () => import("./slices/SliceStage.vue");
const SliceCampus = () => import("./slices/SliceCampus.vue");
const SliceCommunity = () => import("./slices/SliceCommunity.vue");
const SliceLife = () => import("./slices/SliceLife.vue");
const SliceSpaces = () => import("./slices/SliceSpaces.vue");
const SliceServices = () => import("./slices/SliceServices.vue");
const SliceMember = () => import("./slices/SliceMember.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    SliceStage,
    SliceCampus,
    SliceCommunity,
    SliceLife,
    SliceSpaces,
    SliceServices,
    SliceMember
  },
}
</script>
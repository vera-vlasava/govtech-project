<template>
  <main>
    <!-- Slice section template -->
    <div v-for="(slice, index) in slices" :key="'slice-' + index">
      <template v-if="slice.slice_type === 'stage'">
        <slice-stage :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'mission'">
        <slice-mission :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'community'">
        <slice-community :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'ecosystem'">
        <slice-ecosystem :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'life'">
        <slice-life :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'spaces'">
        <slice-spaces :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'services'">
        <slice-services :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'projects'">
        <slice-projects :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'courses'">
        <slice-courses :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'briefing'">
        <slice-briefing :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'quote'">
        <slice-quote :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'member'">
        <slice-member :slice="slice" />
      </template>
    </div>
  </main>
</template>

<script>
// Imports for all slices
const SliceStage = () => import("./slices/SliceStage.vue");
const SliceCommunity = () => import("./slices/SliceCommunity.vue");
const SliceLife = () => import("./slices/SliceLife.vue");
const SliceSpaces = () => import("./slices/SliceSpaces.vue");
const SliceServices = () => import("./slices/SliceServices.vue");
const SliceMember = () => import("./slices/SliceMember.vue");
const SliceMission = () => import("./slices/SliceMission.vue");
const SliceProjects = () => import("./slices/SliceProjects.vue");
const SliceEcosystem = () => import("./slices/SliceEcosystem.vue");
const SliceCourses = () => import("./slices/SliceCourses.vue");
const SliceBriefing = () => import("./slices/SliceBriefing.vue");
const SliceQuote = () => import("./slices/SliceQuote.vue");

export default {
  props: ["slices"],
  name: "slices-block",
  components: {
    SliceStage,
    SliceMission,
    SliceCommunity,
    SliceLife,
    SliceSpaces,
    SliceServices,
    SliceProjects,
    SliceMember,
    SliceEcosystem,
    SliceCourses,
    SliceBriefing,
    SliceQuote
  }
};
</script>

module.exports = {
  extends: [
    require.resolve('./base.js'),
    'plugin:vue/vue3-strongly-recommended',
    require.resolve('./vue-base.js'),
  ],
  rules: {
    'vue/prefer-define-options': ['error',],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': ['error', {
      order: [
        'defineProps',
        'defineEmits',
      ],
      "defineExposeLast": true,
    }],
  },
};
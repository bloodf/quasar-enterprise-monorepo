import '../src/quasar';

export default (previewComponent) => ({
  render(h) {
    return h(Object.assign(previewComponent));
  },
});

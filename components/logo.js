import withPure from './hoc/pure';

export default withPure(({ size }) => (
  <img
    src='/static/images/wc.jpg'
    // width={size || 82}
    height={size || 50}
    viewBox="0 0 148 90"
    style={{
      // visually centering
      transform: 'translateX(4%)'
    }}
  />
));

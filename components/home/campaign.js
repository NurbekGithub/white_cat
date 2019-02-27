import Container from '../container';
import WordSlider from '../word-slider';

export default () => (
  <div className="slider-container">
    <WordSlider duration={1800}>
      <span>Cat1</span>
      <span>Cat2</span>
      <span>Cat3</span>
      <span>Cat4</span>
      <span>Cat5</span>
      <span>Cat6</span>
      <span>Cat7</span>
      <span>Cat8</span>
    </WordSlider>
    <style jsx>{`
      .slider-container {
        margin: auto;
        margin-top: 0;
        margin-bottom: -1rem;
        line-height: 1.4em;
        white-space: nowrap;
      }
    `}</style>
  </div>
);

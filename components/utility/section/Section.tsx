import React from 'react';
//import Image from 'next/image';
//import Card from '../card/Card';
import Slides from '../slides/Slides';
// //import Glide from '@glidejs/glide';
// //new Glide.default('.glide').mount();

// /*import '../../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';*/

export interface ISection {
  title: string;
}

const Section: React.FC<ISection> = ({ title }) => {
  return (
    <div className="my-10 mx-10">
      <h1 className="font-bold text-xl mb-5">{title}</h1>
      <div className="overflow-x-hidden box-border">
        <Slides />
      </div>
    </div>
  );
};

export default Section;

// const sliderConfiguration = {
//   gap: 20,
//   perView: 2,
//   startAt: 0,
//   type: 'slider',
// };

// const Test = () => {
//   const slider = new Glide('.glide', sliderConfiguration);

//   useEffect(() => {
//     return () => slider.mount();
//   }, [slider]);

//   return (
//     <>
//       {' '}
//       <div className="glide">
//         <div className="glide__track" data-glide-el="track">
//           <ul className="glide__slides">
//             <li className="glide__slide slider">1</li>
//             <li className="glide__slide slider">2</li>
//             <li className="glide__slide slider">3</li>
//             <li className="glide__slide slider">4</li>
//           </ul>
//         </div>
//         <div className="glide__arrows" data-glide-el="controls">
//           <button
//             className="glide__arrow glide__arrow--prev"
//             data-glide-dir="<"
//           >
//             prev
//           </button>
//           <button
//             className="glide__arrow glide__arrow--next"
//             data-glide-dir=">"
//           >
//             next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Test;

// // import React, { useRef } from 'react';
// // import  Slide  from 'react-glidejs';
// // import  Glide  from 'react-glidejs';

// // import 'react-glidejs/dist/index.css';
// // import './transitions.css';

// // export default () => {
// //   const gliderRef = useRef(null);

// //   return (
// //     <div
// //       className="App"
// //       style={{
// //         background: '#1B262C',
// //       }}
// //     >
// //       <Glide
// //         ref={gliderRef}
// //         throttle={0}
// //         type="slider"
// //         customSlideAnimation={{
// //           timeout: 500,
// //           classNames: 'fade',
// //         }}
// //         peek={{
// //           before: 500,
// //           after: 500,
// //         }}
// //         perView={1}
// //         startAt={3}
// //         slideClassName="slider__frame"
// //         focusAt="center"
// //       >
// //         <Card/>

// //       </Glide>
// //     </div>
// //   );
// // };

// import React, { Component } from 'react';
// import Carousel from 'react-elastic-carousel';

// class App extends Component {
//   state = {
//     items: [
//       {id: 1, title: 'item #1'},
//       {id: 2, title: 'item #2'},
//       {id: 3, title: 'item #3'},
//       {id: 4, title: 'item #4'},
//       {id: 5, title: 'item #5'}
//     ]
//   }

//   render () {
//     const { items } = this.state;
//     return (
//       <Carousel isRTL={true}>
//         {items.map(item => <div key={item.id}>{item.title}</div>)}
//       </Carousel>
//     )
//   }
// }

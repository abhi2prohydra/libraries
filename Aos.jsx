 import AOS from 'aos';  
 import 'aos/dist/aos.css'; // You can also use <link> for styles  
 import { useEffect } from 'react';  // If you're using React  

 function App() {  
   useEffect(() => {  
     AOS.init({  
       // Global settings once configured  
       disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function  
       startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on  
       initClassName: 'aos-init', // class applied after initialization  
       animatedClassName: 'aos-animate', // class applied on animation  
       useClassNames: false, // if true, will add content of `data-aos` as classes on scroll  
       disableMutationObserver: false, // disables automatic mutations' observer (advanced)  
       debounceDelay: 50, // the delay on debounce used while resizing window (advanced)  
       throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)  


       // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:  
       offset: 120, // offset (in px) from the original trigger point  
       delay: 0, // values from 0 to 3000, with step 50ms  
       duration: 400, // values from 0 to 3000, with step 50ms  
       easing: 'ease', // default easing for AOS animations  
       once: false, // whether animation should happen only once - while scrolling down  
       mirror: false, // whether elements should animate out while scrolling past them  
       anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation  
     });  
   }, []); // Empty dependency array ensures this runs only once on component mount  

   return (  
     // Your JSX here  
     <div>  
       {/* ... your content ... */}  
     </div>  
   );  
 }  

 export default App;  
 ```  

 *   **`useEffect` (React):**  This hook ensures that `AOS.init()` is called only once after the component has mounted.  
 *   **`AOS.init()`:**  This function initializes AOS.  You can pass in an optional object to configure AOS globally (see the configuration options below).  If you don't pass any options, it uses the default settings.  
 *   **`import 'aos/dist/aos.css'`:**  This imports the AOS stylesheet, which contains the CSS classes that control the animations.  Make sure your bundler is configured to handle CSS imports. 


<div data-aos="fade-up">  
  This element will fade in from the bottom when it comes into view.  
</div>  

<div data-aos="fade-down" data-aos-delay="200">  
  This element will fade in from the top with a 200ms delay.  
</div>  

<div data-aos="zoom-in" data-aos-duration="1000">  
  This element will zoom in over 1000ms.  
</div>  









 fade-up
* fade-down
* fade-left
* fade-right
* fade-up-right
* fade-up-left
* fade-down-right
* fade-down-left
* flip-up
* flip-down
* flip-left
* flip-right
* zoom-in
* zoom-in-up
* zoom-in-down
* zoom-in-left
* zoom-in-right
* zoom-out
* zoom-out-up
* zoom-out-down
* zoom-out-left
* zoom-out-right
* slide-up
* slide-down
* slide-left
* slide-right




  You can also use `data-aos="none"` to disable AOS on a specific element.  

<div  
  data-aos="fade-right"  
  data-aos-delay="50"  
  data-aos-duration="500"  
  data-aos-easing="ease-in-out"  
  data-aos-mirror="true"  
  data-aos-once="false"  
  data-aos-offset="50"  
  data-aos-anchor-placement="top-center"  
>  
  This element will fade in from the right, with a short delay, a moderate  
  duration, and a smooth easing function. It will also animate out when  
  scrolling past it and animate every time it comes into view.  
</div>  


  

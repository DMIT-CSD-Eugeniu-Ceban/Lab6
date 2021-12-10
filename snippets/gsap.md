# Simple Animation
```javascript
    const product = document.querySelector('.crossFade')
  
    const bottom =  product.querySelector("#bottom")
    const top =  product.querySelector("#top")
    bottom.style.opacity = 0;
     
    product.addEventListener('mouseover',()=>{
       
      
        gsap.fromTo(top, {opacity: 1}, {opacity: 0, duration: 1});
        gsap.fromTo(bottom, {opacity: 0}, {opacity: 1, duration: 1});
         
    })

    product.addEventListener('mouseout',()=>{
       
      
        gsap.fromTo(top, {opacity: 0}, {opacity: 1, duration: 1});
        gsap.fromTo(bottom, {opacity: 1}, {opacity: 0, duration: 1});
         
    })

```
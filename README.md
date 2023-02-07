# Animation while Scrolling

We can achieve this animation from 3 ways

1. `Animation On Scroll` [library](https://michalsnik.github.io/aos/).
    * it is not updated recently.
    * also adds extra kilobytes to our website bundle. 

2. `scroll-timeline` [css](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline) property.
    * it is not suppported by modern browsers.

3. `IntersectionObserver` api.
    * fill support in modern browsers. 
    * very light weight to implement. 

So, we are going to use `IntersectionObserver` api. 

If an element in the DOM is intersecting to the end user viewport, then we can apply a custom css class which will animates into the DOM.

`IntersectionObserver` is a class which takes callback in its constructor. The callback would again accepts multiple entities or elements at a time.

    ```javascript
    const observer = new IntersectionObserver((entities) => {
        entities.forEach((entity) => {
            if (entity.isIntersecting) {
                entity.target.classList.add('show');
            } else {
                entity.target.classList.remove('show');
            }
        })
    });
    ```
* here `show` is a custom css class which would be triggered when the element is intersecting with the viewport. 
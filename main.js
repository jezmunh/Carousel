let left_arrow = document.getElementById('arrowLeft')
        let right_arrow = document.getElementById('arrowRight')
        let carousel = document.getElementById('carousel')
    
        // left.addEventListener('click', clickLeft)
        // right.addEventListener('click', clickRight)

        const carouselElem = 1
        const width = 100 /carouselElem
        const item = carousel.children.length - carouselElem
        let current = 0

        for (let i = 0; i < carousel.childElementCount; i++) {
            carousel.children[i].style.width = width + '%'
           
        }
        left_arrow.addEventListener('click', clickLeft)
        right_arrow.addEventListener('click', clickRight)

        function clickLeft() {
            current -= 1
            if(current >= 0)  {
                carousel.style.transform = `translateX(-${width * current}%)`
            } else {
                current = 0
            }
        }
        function clickRight() {
            current++
            if(current <= item)  {
                carousel.style.transform = `translateX(-${width * current}%)`
            } else {
                current = item
            }
        }
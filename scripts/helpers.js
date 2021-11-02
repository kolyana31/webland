export function isInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom-rect.height/3 <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

export function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight*1.6 || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth*1.6 || document.documentElement.clientWidth) /* or $(window).width() */
    );
}
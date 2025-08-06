export const initialize = (containerBox) => {
    const contentBox = containerBox.querySelector(".content-box");
    const resizeObserver = new ResizeObserver(_ => {
        containerBox.style.minHeight = contentBox?.scrollHeight + "px";
    });
    if (contentBox)
        resizeObserver.observe(contentBox);
    return ({
        dispose: () => {
            if (contentBox)
                resizeObserver.unobserve(contentBox);
            resizeObserver.disconnect();
        }
    });
};

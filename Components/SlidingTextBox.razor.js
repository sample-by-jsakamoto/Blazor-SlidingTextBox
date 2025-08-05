export const initialize = (containerBox) => {
    const resizeObserver = new ResizeObserver(_ => {
        containerBox.style.minHeight = contentBox?.scrollHeight + "px";
    });
    const contentBox = containerBox.querySelector(".content-box");
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
export const updateHeight = (containerBox) => {
    const contentBox = containerBox.querySelector(".content-box");
    containerBox.style.minHeight = contentBox?.scrollHeight + "px";
};

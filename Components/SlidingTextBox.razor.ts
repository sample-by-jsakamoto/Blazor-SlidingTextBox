export const initialize = (containerBox: HTMLElement) => {

    const resizeObserver = new ResizeObserver(_ => {
        containerBox.style.minHeight = contentBox?.scrollHeight + "px";
    });

    const contentBox = containerBox.querySelector<HTMLElement>(".content-box");
    if (contentBox) resizeObserver.observe(contentBox);

    return ({
        dispose: () => {
            if (contentBox) resizeObserver.unobserve(contentBox);
            resizeObserver.disconnect();
        }
    });
}

export const updateHeight = (containerBox: HTMLElement) => {
    const contentBox = containerBox.querySelector<HTMLElement>(".content-box");
    containerBox.style.minHeight = contentBox?.scrollHeight + "px";
}
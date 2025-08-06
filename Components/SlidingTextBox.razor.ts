export const initialize = (containerBox: HTMLElement) => {

    const contentBox = containerBox.querySelector<HTMLElement>(".content-box");

    const resizeObserver = new ResizeObserver(_ => {
        containerBox.style.minHeight = contentBox?.scrollHeight + "px";
    });

    if (contentBox) resizeObserver.observe(contentBox);

    return ({
        dispose: () => {
            if (contentBox) resizeObserver.unobserve(contentBox);
            resizeObserver.disconnect();
        }
    });
}

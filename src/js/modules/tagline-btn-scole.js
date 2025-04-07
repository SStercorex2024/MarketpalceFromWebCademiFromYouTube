function tagline() {
    const closeTaglineButton = document.querySelector(".tagline__button");
    const tagline = document.querySelector(".tagline");

    closeTaglineButton?.addEventListener("click", () => {
        tagline?.remove();
    });
}

export default tagline;

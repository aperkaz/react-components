const underlineAnimation = (backgroundColor, height) => (
    `
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: ${height}px;
        bottom: ${-3-height}px;
        left: 0;
        background-color: ${backgroundColor};
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }
    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
    `);

export default underlineAnimation;
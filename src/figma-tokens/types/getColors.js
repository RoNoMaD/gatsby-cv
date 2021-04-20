import { rgbaGenObject } from "../utils";

const getColors = (themeName, stylesArtboard) => {
  return (
    stylesArtboard
      .find((item) => {
        return item.name.toLowerCase().includes(themeName);
      })
      // filter out main title
      .children.filter(
        (child) =>
          child.type === "FRAME" &&
          !child.name.toLowerCase().includes("gradient")
      )
      .reduce((acc, curr) => {
        return {
          ...{
            [curr.name.toLowerCase()]: {
              ...curr.children
                .find((child) => child.type === "FRAME")
                .children.reduce((acc, child) => {
                  // get color token name from text
                  const name = child.name;
                  // get color token value from rectangle fill property
                  const rectangle = child.children.find(
                    (child) => child.type === "RECTANGLE"
                  );
                  const fill = rectangle.fills[0];
                  if (fill.type === "SOLID") {
                    // transform color value to valid RGBA
                    const { r, g, b, a } = rectangle.fills[0].color;
                    const colorRGBA = rgbaGenObject(r, g, b, a);
                    return {
                      ...{
                        [name]: {
                          value: `rgba(${colorRGBA.r}, ${colorRGBA.g}, ${colorRGBA.b}, ${colorRGBA.a})`,
                        },
                      },
                      ...acc,
                    };
                  } else if (fill.type === "GRADIENT_LINEAR") {
                    function calculateGradient(startHandle, endHandle) {
                      return (
                        ((endHandle.y - startHandle.y) /
                          (endHandle.x - startHandle.x)) *
                        -1
                      );
                    }
                    function radToDeg(radian) {
                      return (180 * radian) / Math.PI;
                    }
                    function calculateAngle(startHandle, endHandle) {
                      const radians = Math.atan(
                        calculateGradient(startHandle, endHandle)
                      );
                      return parseInt(radToDeg(radians).toFixed(1));
                    }
                    return {
                      [name]: {
                        value: `linear-gradient(${calculateAngle(
                          fill.gradientHandlePositions[0],
                          fill.gradientHandlePositions[1]
                        )}deg, ${fill.gradientStops
                          .map((gradientStop) => {
                            const { r, g, b, a } = gradientStop.color;
                            const colorRGBA = rgbaGenObject(r, g, b, a);
                            return `rgba(${colorRGBA.r}, ${colorRGBA.g}, ${
                              colorRGBA.b
                            }, ${colorRGBA.a}) ${Math.round(
                              gradientStop.position * 100
                            )}%`;
                          })
                          .join(",")})`,
                        type: "gradient",
                      },
                    };
                  } else {
                    return acc;
                  }
                }, {}),
            },
          },
          ...acc,
        };
      }, {})
  );
};

export default getColors;

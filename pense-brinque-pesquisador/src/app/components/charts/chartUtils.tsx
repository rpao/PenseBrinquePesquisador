/**
 * Gets the params and returns a chart Options object.
 * 
 * @param title - Chart Title
 * @param borderWidth - Border width of the lines/bars/etc.
 * @param responsive - If the chart is responsive.
 * @param legendPosition - Position of the legend, default is 'bottom'.
 * @returns an Options object.
 */
export function getOptions(title?: string, borderWidth?: number, responsive?: boolean, legendPosition?: "bottom" | "center" | "top" | "right" | "left") {
  let position;

  switch (legendPosition) {
    case 'bottom': position = 'bottom' as const; break;
    case 'center': position = 'center' as const; break;
    case 'left': position = 'left' as const; break;
    case 'right': position = 'right' as const; break;
    case 'top': position = 'top' as const; break;
    default: position = 'bottom' as const;
  };

  return {
    elements: {
      bar: {
        borderWidth,
      },
    },
    responsive,
    plugins: {
      legend: {
        position
      },
      title: {
        display: !!title,
        text: title,
      },
    },
  };
}
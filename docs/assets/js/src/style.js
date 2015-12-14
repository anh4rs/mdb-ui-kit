const Style = (($) => {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  // const Default = {
  //  template: ``
  // }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
  class Style {

    constructor() {

    }

    static rgbToHex(rgba) {
      rgba = rgba.match(/\d+/g)
      let hex = `#${String(`0${Number(rgba[0]).toString(16)}`).slice(-2)}${String(`0${Number(rgba[1]).toString(16)}`).slice(-2)}${String(`0${Number(rgba[2]).toString(16)}`).slice(-2)}`
      return hex
    }

    // Function to display font properties dynamically discovered
    static displayFontSizeWeightColor($elements, writeFn, bg = false, wrapWithMark = false) {
      return $elements.each((index, element) => {
        let $element = $(element)

        let rgbaBgColor = $element.css('background-color')
        // let hexBgColor = Style.rgbToHex(rgbaBgColor)

        let rgbaColor = $element.css('color')
        // let hexColor = Style.rgbToHex(rgbaColor)

        let text = ''

        if (wrapWithMark) {
          text += `<mark style='font-size: 10px; font-weight: 500; letter-spacing: normal'>`
        }

        // text += `${$element.css('font-size')} ${$element.css('font-weight')} ${hexColor}`
        text += `<span>${$element.css('font-size')} ${$element.css('font-weight')} <span style='white-space: nowrap'>${rgbaColor}</span></span>`
        if (bg) {
          // text += ` bg: ${hexBgColor} `
          text += ` bg: ${rgbaBgColor} `
        }

        if (wrapWithMark) {
          text += `</mark>`
        }

        writeFn($element, $(text))
      })
    }


    // ------------------------------------------------------------------------
    // private


    // ------------------------------------------------------------------------
    // static
  }


  return Style

})(jQuery)

export default Style
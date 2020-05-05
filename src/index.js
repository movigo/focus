import { addPlugin } from '@movigo/core'

/**
 * Prepare animation parameters to create a focus animation.
 * @param {Element[] | NodeList} elements
 * @param {object} parameters
 * @param {object} options
 */
function focus (elements, parameters, options) {
  options = {
    element: -1,
    scale: [2, 2],
    backdropBrightness: 60,
    duration: .3,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    ...options
  }

  parameters.duration = options.duration
  parameters.easing = options.easing

  if (!elements[options.element]) {
    parameters.to = {
      transform: 'scale(1, 1)',
      filter: 'brightness(100%)',
      opacity: 1
    }

    return
  }

  parameters.to = []

  for (let i = 0; i < elements.length; i++) {
    if (i === options.element) {
      elements[i].style.zIndex = '3'
      parameters.to.push({
        transform: `scale(${options.scale.join(',')})`,
        filter: 'brightness(100%)',
        opacity: 1
      })
    } else {
      elements[i].style.zIndex = elements[i].style.zIndex === '3' ? '2' : '1'

      parameters.to.push({
        transform: 'scale(1, 1)',
        filter: `brightness(${options.backdropBrightness}%)`,
        opacity: .8
      })
    }
  }
}

addPlugin(focus)
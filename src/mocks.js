import {
    RectangleSelector,
    OvalSelector
  } from 'react-image-annotation/lib/selectors'
  
  export default {
    annotations: [
      {
        geometry:
        {
          type: RectangleSelector.TYPE,
          x: 0,
          y: 0,
          width: 0,
          height: 0
            
        },
        data: {
          text: '',
          id: 1
        }
      },
      {
        geometry:
        {
          type: OvalSelector.TYPE,
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        data: {
          text: '',
          id: 2
        }
      }
    ]
  }